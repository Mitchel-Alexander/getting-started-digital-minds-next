"use client";

import { useEffect, useRef, useCallback } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

interface NetworkCanvasProps {
  className?: string;
  nodeCount?: number;
  connectionDistance?: number;
  nodeColor?: string;
  lineColor?: string;
  parallaxStrength?: number;
}

export function NetworkCanvas({
  className = "",
  nodeCount = 80,
  connectionDistance = 150,
  nodeColor = "rgba(13, 148, 136, 0.6)",
  lineColor = "13, 148, 136",
  parallaxStrength = 0.3,
}: NetworkCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const animFrameRef = useRef<number>(0);
  const scrollYRef = useRef(0);
  const mouseRef = useRef<{ x: number; y: number } | null>(null);
  const dimensionsRef = useRef({ width: 0, height: 0 });

  const initNodes = useCallback(
    (width: number, height: number) => {
      const nodes: Node[] = [];
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: Math.random() * 2.5 + 1.5,
        });
      }
      return nodes;
    },
    [nodeCount]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.scale(dpr, dpr);
      dimensionsRef.current = { width: rect.width, height: rect.height };

      if (nodesRef.current.length === 0) {
        nodesRef.current = initNodes(rect.width, rect.height);
      }
    };

    const onScroll = () => {
      scrollYRef.current = window.scrollY;
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      // Only track if cursor is within canvas bounds
      if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        mouseRef.current = { x, y };
      } else {
        mouseRef.current = null;
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      const touch = e.touches[0];
      const x = touch.clientX - rect.left;
      const y = touch.clientY - rect.top;
      if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        mouseRef.current = { x, y };
      } else {
        mouseRef.current = null;
      }
    };

    const onTouchEnd = () => {
      mouseRef.current = null;
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd);

    const draw = () => {
      const { width, height } = dimensionsRef.current;
      const nodes = nodesRef.current;
      const scrollOffset = scrollYRef.current * parallaxStrength;

      ctx.clearRect(0, 0, width, height);

      // Update positions
      const mouse = mouseRef.current;
      const repulseRadius = 120;
      const repulseStrength = 0.56;

      for (const node of nodes) {
        // Mouse repulsion
        if (mouse) {
          const dx = node.x - mouse.x;
          const dy = node.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < repulseRadius && dist > 0) {
            const force = (1 - dist / repulseRadius) * repulseStrength;
            node.vx += (dx / dist) * force;
            node.vy += (dy / dist) * force;
          }
        }

        // Dampen velocity — gentle friction so repulsed nodes slow back down
        const speed = Math.sqrt(node.vx * node.vx + node.vy * node.vy);
        if (speed > 0.4) {
          // Only dampen when faster than base drift
          node.vx *= 0.96;
          node.vy *= 0.96;
        }

        // Clamp max speed so nodes don't fly off
        if (speed > 4) {
          node.vx = (node.vx / speed) * 4;
          node.vy = (node.vy / speed) * 4;
        }

        node.x += node.vx;
        node.y += node.vy;

        // Wrap around edges
        if (node.x < -20) node.x = width + 20;
        if (node.x > width + 20) node.x = -20;
        if (node.y < -20) node.y = height + 20;
        if (node.y > height + 20) node.y = -20;
      }

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy =
            nodes[i].y -
            scrollOffset * (nodes[i].vy + 0.5) -
            (nodes[j].y - scrollOffset * (nodes[j].vy + 0.5));
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const opacity = (1 - dist / connectionDistance) * 0.5;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${lineColor}, ${opacity})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(
              nodes[i].x,
              nodes[i].y - scrollOffset * (nodes[i].vy + 0.5)
            );
            ctx.lineTo(
              nodes[j].x,
              nodes[j].y - scrollOffset * (nodes[j].vy + 0.5)
            );
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (const node of nodes) {
        const ny = node.y - scrollOffset * (node.vy + 0.5);
        ctx.beginPath();
        ctx.arc(node.x, ny, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = nodeColor;
        ctx.fill();
      }

      animFrameRef.current = requestAnimationFrame(draw);
    };

    animFrameRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [initNodes, connectionDistance, nodeColor, lineColor, parallaxStrength]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 ${className}`}
      aria-hidden="true"
    />
  );
}
