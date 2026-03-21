"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParticleType {
    x: number;
    y: number;
    baseX: number;
    baseY: number;
    size: number;
    bx: number;
    by: number;
    update: (width: number, height: number, mouse: { x: number, y: number }) => void;
    draw: (ctx: CanvasRenderingContext2D) => void;
}

class Particle implements ParticleType {
    x: number;
    y: number;
    baseX: number;
    baseY: number;
    size: number;
    bx: number;
    by: number;

    constructor(width: number, height: number) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.baseX = this.x;
        this.baseY = this.y;
        this.size = Math.random() * 1.5 + 0.5;
        this.bx = Math.random() * 2 - 1;
        this.by = Math.random() * 2 - 1;
    }

    update(width: number, height: number, mouse: { x: number, y: number }) {
        this.baseX += this.bx * 0.2;
        this.baseY += this.by * 0.2;

        if (this.baseX < 0 || this.baseX > width) this.bx *= -1;
        if (this.baseY < 0 || this.baseY > height) this.by *= -1;

        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 150;

        if (distance < maxDistance && distance > 0) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const force = (maxDistance - distance) / maxDistance;
            const directionX = forceDirectionX * force * 5;
            const directionY = forceDirectionY * force * 5;
            this.x -= directionX;
            this.y -= directionY;
        } else {
            if (this.x !== this.baseX) {
                const mdx = this.x - this.baseX;
                this.x -= mdx / 20;
            }
            if (this.y !== this.baseY) {
                const mdy = this.y - this.baseY;
                this.y -= mdy / 20;
            }
        }
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = "rgba(0, 242, 255, 0.4)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

export function MolecularLattice() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouse = useRef({ x: 0, y: 0 });
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 500], [0.3, 0.1]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let width: number;
        let height: number;
        let particles: Particle[] = [];

        const init = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            particles = [];
            const numberOfParticles = (width * height) / 15000;
            for (let i = 0; i < numberOfParticles; i++) {
                particles.push(new Particle(width, height));
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, width, height);
            for (let i = 0; i < particles.length; i++) {
                particles[i].update(width, height, mouse.current);
                particles[i].draw(ctx);

                for (let j = i; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 100) {
                        ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 * (1 - distance / 100)})`;
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        init();
        animate();

        const handleResize = () => init();
        const handleMouseMove = (e: MouseEvent) => {
            mouse.current.x = e.clientX;
            mouse.current.y = e.clientY;
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <motion.canvas
            ref={canvasRef}
            style={{ opacity }}
            className="fixed inset-0 z-0 pointer-events-none"
        />
    );
}
