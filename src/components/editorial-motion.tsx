import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, type ReactNode, type KeyboardEvent } from "react";

export function AnimatedSheet({ open, close, children, label, panelClassName = "" }: { open: boolean; close: () => void; children: ReactNode; label: string; panelClassName?: string }) {
  const reduce = useReducedMotion();
  const panelRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    panelRef.current?.querySelector<HTMLElement>('button, a[href], input, [tabindex="0"]')?.focus();
    return () => previous?.focus();
  }, [open]);
  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") { event.stopPropagation(); close(); return; }
    if (event.key !== "Tab") return;
    const controls = panelRef.current?.querySelectorAll<HTMLElement>('button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), [tabindex="0"]');
    if (!controls?.length) return;
    const first = controls[0];
    const last = controls[controls.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
  };
  return <AnimatePresence>
    {open && <motion.div className="fixed inset-0 z-50 flex items-end justify-center bg-overlay md:items-center" role="presentation" onClick={close} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: reduce ? 0 : 0.22 }}>
      <motion.div ref={panelRef} role="dialog" aria-modal="true" aria-label={label} onKeyDown={onKeyDown} onClick={event => event.stopPropagation()} className={`max-h-[88svh] w-full overflow-y-auto bg-background ${panelClassName}`} initial={{ opacity: 0, y: reduce ? 0 : 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: reduce ? 0 : 18 }} transition={{ duration: reduce ? 0 : 0.25, ease: "easeOut" }}>
        {children}
      </motion.div>
    </motion.div>}
  </AnimatePresence>;
}