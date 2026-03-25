import { useEffect, useRef } from 'react';

function ConfettiAnimation() {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // FBC colors for confetti
    const colors = ['#0f7938', '#ffcc33', '#ffffff', '#1a7f52', '#ffd966'];

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 60 + 40; // Much larger: 40-100px
        this.speedX = (Math.random() - 0.5) * 8;
        this.speedY = Math.random() * 3 + 2; // Slower fall
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.rotation = Math.random() * 360;
        this.rotationSpeed = (Math.random() - 0.5) * 10;
        this.opacity = 1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.speedY += 0.15; // Gentle gravity
        this.rotation += this.rotationSpeed;
        this.opacity -= 0.005; // Slower fade
      }

      draw(ctx) {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.translate(this.x, this.y);
        ctx.rotate((this.rotation * Math.PI) / 180);

        // Draw confetti as larger squares
        ctx.fillStyle = this.color;
        ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);

        ctx.restore();
      }
    }

    const createConfetti = (x, y) => {
      const particleCount = 150; // Many more particles to fill screen
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push(new Particle(x, y));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = particlesRef.current.length - 1; i >= 0; i--) {
        const particle = particlesRef.current[i];
        particle.update();
        particle.draw(ctx);

        if (particle.opacity <= 0) {
          particlesRef.current.splice(i, 1);
        }
      }

      if (particlesRef.current.length > 0) {
        requestAnimationFrame(animate);
      }
    };

    const handleMouseClick = (e) => {
      createConfetti(e.clientX, e.clientY);
      animate();
    };

    window.addEventListener('click', handleMouseClick);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('click', handleMouseClick);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    />
  );
}

export default ConfettiAnimation;
