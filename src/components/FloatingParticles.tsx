import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
  alpha: number;
  alphaSpeed: number;
}

export default function FloatingParticles() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Use ResizeObserver for responsive canvas sizing without window boundaries
    const resizeObserver = new ResizeObserver((entries) => {
      if (!entries || entries.length === 0) return;
      const { width, height } = entries[0].contentRect;
      
      canvas.width = width;
      canvas.height = height;

      // Re-initialize particles based on canvas size
      initParticles(width, height);
    });

    resizeObserver.observe(container);

    const initParticles = (width: number, height: number) => {
      const particleCount = Math.min(Math.floor((width * height) / 2500), 400);
      const tempParticles: Particle[] = [];
      
      for (let i = 0; i < particleCount; i++) {
        tempParticles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() > 0.95
  ? Math.random() * 3 + 1
  : Math.random() * 1 + 0.2,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          alpha: Math.random() * 0.8 + 0.2,
          alphaSpeed: (Math.random() * 0.005 + 0.002) * (Math.random() > 0.5 ? 1 : -1),
        });
      }
      particlesRef.current = tempParticles;
    };

    const animate = () => {
      const currentCanvas = canvasRef.current;
      if (!currentCanvas) return;
      const width = currentCanvas.width;
      const height = currentCanvas.height;

      ctx.clearRect(0, 0, width, height);

      const particles = particlesRef.current;
      particles.forEach((p) => {
        // Move particle
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off bounds
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Fade in / fade out
        p.alpha += p.alphaSpeed;
        if (p.alpha <= 0.1 || p.alpha >= 0.6) {
          p.alphaSpeed *= -1;
        }
        // Clamping alpha just in case
        p.alpha = Math.max(0.05, Math.min(0.6, p.alpha));

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(220, 235, 255, ${p.alpha})`;
        ctx.fill();

        ctx.beginPath();

ctx.shadowBlur = 8;
ctx.shadowColor = '#ffffff';

ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);

ctx.fillStyle = `rgba(255,255,255,${p.alpha})`;
ctx.fill();

ctx.shadowBlur = 0;
      });

      // Draw light constellation lines between close particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // If close enough, draw thin glowing blue connection lines
          if (distance < 130) {
            const lineAlpha = (1 - distance / 130) * 0.06 * Math.min(p1.alpha, p2.alpha);
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${lineAlpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      resizeObserver.disconnect();
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      id="particles-container" 
      className="absolute inset-0 pointer-events-none z-10 overflow-hidden"
    >
      <canvas 
        ref={canvasRef} 
        className="w-full h-full opacity-60 block" 
      />
    </div>
  );
}