import { useEffect, useState } from 'react';

const KEY = 'docs-cookie-consent';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  const dismiss = (value: string) => {
    try {
      localStorage.setItem(KEY, value);
    } catch {
      /* storage unavailable; dismiss for this session */
    }
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie notice"
      className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-md rounded-none border border-border bg-card p-4 shadow-lg sm:left-auto sm:right-6 sm:w-full"
    >
      <p className="text-sm font-semibold text-foreground">Cookies</p>
      <p className="mt-1 text-sm leading-6 text-muted-foreground">
        This site stores only local preferences (theme, dismissals) in your browser. No
        tracking.
      </p>
      <div className="mt-3 flex gap-2">
        <button
          type="button"
          onClick={() => dismiss('accepted')}
          className="rounded-none bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
        >
          Accept
        </button>
        <button
          type="button"
          onClick={() => dismiss('rejected')}
          className="rounded-none border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
        >
          Reject
        </button>
      </div>
    </div>
  );
}
