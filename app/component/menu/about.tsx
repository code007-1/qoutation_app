import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";

type DialogProps = {
    open: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
    /** Optional: id for the title element; generated if not provided */
    titleId?: string;
};

export function Dialog({ open, onClose, children, titleId }: DialogProps) {
    const backdropRef = useRef<HTMLDivElement | null>(null);
    const [mounted, setMounted] = useState(false);
    const _titleId = titleId ?? useId();

    // Mount portal only on client
    useEffect(() => {
        setMounted(true);
    }, []);

    // Lock scroll when open
    useEffect(() => {
        if (!open) return;
        const prev = document.documentElement.style.overflow;
        document.documentElement.style.overflow = "hidden";
        return () => {
            document.documentElement.style.overflow = prev;
        };
    }, [open]);

    // Escape to close
    useEffect(() => {
        if (!open) return;
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                e.stopPropagation();
                onClose();
            }
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [open, onClose]);

    const onBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        // Only close if the click is on the backdrop itself (not inside dialog panel)
        if (e.target === backdropRef.current) onClose();
    };

    const modalRoot = typeof document !== "undefined" ? document.getElementById("modal-root") : null;

    if (!mounted) return null;
    if (!open || !modalRoot) return null;

    return createPortal(
        <div
            ref={backdropRef}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            onMouseDown={onBackdropClick}
            aria-hidden={!open}
        >
            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby={_titleId}
                className="mx-4 w-full max-w-lg bg-background shadow-xl outline-none"
                onMouseDown={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>,
        modalRoot as Element
    );
}
