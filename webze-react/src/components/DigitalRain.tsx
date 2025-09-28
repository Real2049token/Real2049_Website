import React, { useEffect, useRef } from 'react';

const DigitalRain: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Digital rain characters (hotel and crypto related)
    const chars = '01REALHOTEL2049₿ΞⒸ⧫◊◈◆⬢⬡⬠⬟⬞⬝⬜⬛';
    const charArray = chars.split('');

    const columns = Math.floor(canvas.width / 20);
    const drops: number[] = Array(columns).fill(0);

    const draw = () => {
      // Semi-transparent black background for fade effect
      ctx.fillStyle = 'rgba(21, 21, 21, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Golden text
      ctx.fillStyle = 'rgba(255, 204, 102, 0.8)';
      ctx.font = '15px monospace';

      for (let i = 0; i < drops.length; i++) {
        const char = charArray[Math.floor(Math.random() * charArray.length)];
        const x = i * 20;
        const y = drops[i] * 20;

        ctx.fillText(char, x, y);

        // Reset drop to top when it reaches bottom
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 100);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -3,
        opacity: 0.3,
        pointerEvents: 'none'
      }}
    />
  );
};

export default DigitalRain;
