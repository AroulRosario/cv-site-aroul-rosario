"use client";

import { ReactNode } from "react";

// All animation wrappers are now instant — no entrance delays or scroll triggers.
// This keeps layout identical while completely removing all FadeIn/SlideUp lag.

export const FadeIn = ({ children, className = "" }: { children: ReactNode; delay?: number; className?: string }) => (
    <div className={className}>{children}</div>
);

export const SlideUp = ({ children, className = "" }: { children: ReactNode; delay?: number; className?: string }) => (
    <div className={className}>{children}</div>
);

export const RevealText = ({ children, className = "" }: { children: ReactNode; delay?: number; className?: string }) => (
    <div className={className}>{children}</div>
);

export const ScaleIn = ({ children, className = "" }: { children: ReactNode; delay?: number; className?: string }) => (
    <div className={className}>{children}</div>
);

export const StaggerContainer = ({ children, className = "" }: { children: ReactNode; className?: string; staggerDelay?: number }) => (
    <div className={className}>{children}</div>
);

export const StaggerItem = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
    <div className={className}>{children}</div>
);

export const LineDraw = ({ className = "" }: { delay?: number; className?: string }) => (
    <div className={`h-px bg-white/20 ${className}`} />
);
