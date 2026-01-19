"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
}

const InteractiveNetwork = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const connectionDistance = 150;
    const mouse = { x: -1000, y: -1000 };

    const resize = () => {
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
      initParticles();
    };

    const initParticles = () => {
      const particleCount = Math.floor((canvas.width * canvas.height) / 9000); // Density
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5, // Slow movement
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
        });
      }
    };

    const updateParticles = () => {
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off edges
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Mouse interaction (gentle attraction)
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 200) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const force = (200 - distance) / 200;
          const attractionStrength = 0.05;
          p.vx += forceDirectionX * force * attractionStrength;
          p.vy += forceDirectionY * force * attractionStrength;
        }

        // Friction to prevent infinite acceleration from mouse
        p.vx *= 0.99;
        p.vy *= 0.99;
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Reset styles
      ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
      // Dark particles for contrast on white bg, or white on dark.
      // We will assume light mode default as per page.tsx initial state,
      // but let's make it adaptive via CSS variables if possible,
      // or just pick a neutral dark grey that looks good on white.
      // Wait, page.tsx has 'bg-white', so let's stick to dark grey particles.

      const isDarkMode = window.matchMedia?.(
        "(prefers-color-scheme: dark)",
      ).matches;
      const particleColor = isDarkMode
        ? "rgba(255, 255, 255, 0.7)"
        : "rgba(30, 30, 30, 0.7)";
      const lineColor = isDarkMode ? "255, 255, 255" : "30, 30, 30";

      particles.forEach((p, i) => {
        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${lineColor}, ${1 - dist / connectionDistance})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = particleColor;
        ctx.fill();
      });

      // Draw Connection to Mouse
      particles.forEach((p) => {
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < connectionDistance + 50) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(${lineColor}, ${1 - dist / (connectionDistance + 50)})`;
          ctx.lineWidth = 0.8;
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      });
    };

    const animate = () => {
      updateParticles();
      draw();
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("resize", resize);
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    resize();
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 pointer-events-auto"
    >
      <canvas ref={canvasRef} className="block" />
    </div>
  );
};

export default InteractiveNetwork;
