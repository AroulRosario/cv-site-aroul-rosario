"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useSpring } from "framer-motion";

export function LiquidCursor() {
    const [isHovering, setIsHovering] = useState(false);

    const springX = useSpring(-100, { stiffness: 600, damping: 35 });
    const springY = useSpring(-100, { stiffness: 600, damping: 35 });

    useEffect(() => {
        const onMove = (e: MouseEvent) => {
            springX.set(e.clientX);
            springY.set(e.clientY);

            const el = document.elementFromPoint(e.clientX, e.clientY);
            setIsHovering(!!el?.closest("a, button, [class*='cursor-pointer']"));
        };

        window.addEventListener("mousemove", onMove);
        return () => window.removeEventListener("mousemove", onMove);
    }, []);

    return (
        <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9999]"
            style={{
                x: springX,
                y: springY,
                translateX: "-50%",
                translateY: "-50%",
            }}
        >
            <motion.div
                animate={{
                    scale: isHovering ? 3 : 1,
                    opacity: isHovering ? 0.5 : 0.85,
                }}
                transition={{ type: "spring", stiffness: 500, damping: 28 }}
                className="w-3 h-3 rounded-full bg-white mix-blend-difference"
            />
        </motion.div>
    );
}
