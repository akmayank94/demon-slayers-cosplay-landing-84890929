
import { useEffect, useRef } from "react";

interface WaterBreathingEffectProps {
  className?: string;
}

const WaterBreathingEffect: React.FC<WaterBreathingEffectProps> = ({ className = "" }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // Wave properties
    const waves = Array(5).fill(null).map((_, i) => ({
      y: canvas.height / 2,
      length: 100 + i * 50,
      amplitude: 20 + i * 5,
      speed: 0.05 + i * 0.01,
      offset: i * 100,
      color: `rgba(14, 113, 179, ${0.2 - i * 0.03})`,
    }));
    
    // Animation
    let animationFrameId: number;
    let time = 0;
    
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      waves.forEach(wave => {
        ctx.beginPath();
        ctx.moveTo(0, wave.y);
        
        for (let x = 0; x < canvas.width; x++) {
          const dx = x / wave.length;
          const dy = Math.sin(dx + time * wave.speed + wave.offset) * wave.amplitude;
          ctx.lineTo(x, wave.y + dy);
        }
        
        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();
        
        ctx.fillStyle = wave.color;
        ctx.fill();
      });
      
      time += 0.2;
      animationFrameId = requestAnimationFrame(render);
    };
    
    render();
    
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  
  return <canvas ref={canvasRef} className={`fixed top-0 left-0 w-full h-full pointer-events-none z-0 ${className}`} />;
};

export default WaterBreathingEffect;
