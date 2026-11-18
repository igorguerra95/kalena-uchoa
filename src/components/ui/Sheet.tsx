import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { X } from 'lucide-react';

interface SheetProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const Sheet: React.FC<SheetProps> = ({ open, onClose, title, children }) => {
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <div
          className="fixed inset-0 z-50 flex justify-end"
          role="dialog"
          aria-modal="true"
          aria-label={title}
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onClick={onClose}
            className="fixed inset-0 bg-primary/50 backdrop-blur-xs"
            aria-hidden="true"
          />

          {/* Painel Lateral (Drawer shadcn) */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-sm h-full bg-background text-foreground border-l border-border shadow-elevated flex flex-col justify-between p-6"
          >
            <div className="flex items-center justify-between pb-5 border-b border-border">
              <span className="font-display text-2xl font-medium tracking-tight text-foreground">
                {title}
              </span>
              <button
                type="button"
                onClick={onClose}
                aria-label="Fechar menu de navegação"
                className="inline-flex items-center justify-center min-w-[44px] min-h-[44px] border border-border text-foreground hover:bg-surface transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring cursor-pointer"
              >
                <X className="w-5 h-5 stroke-[1.5]" aria-hidden="true" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-8">{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
