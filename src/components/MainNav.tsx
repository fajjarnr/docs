import { useEffect, useRef, useState } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ChevronDown } from 'lucide-react';
import { getStarted, modules } from '@/data/pages';

type MenuKey = 'get-started' | 'modules' | null;

const menus = [
  { key: 'get-started', label: 'Get started', base: '/get-started', items: getStarted },
  { key: 'modules', label: 'Modules', base: '/modules', items: modules },
] as const;

function linkClass(active: boolean) {
  return twMerge(
    clsx(
      'relative inline-block rounded-none px-3 py-2.5 text-sm font-medium transition-colors duration-300 motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
      active ? 'text-primary' : 'text-muted-foreground hover:text-foreground',
    ),
  );
}

function ActiveBar() {
  return <span aria-hidden="true" className="absolute inset-x-3 bottom-0 h-0.5 rounded-none bg-primary" />;
}

export default function MainNav({ currentPath }: { currentPath: string }) {
  const [open, setOpen] = useState<MenuKey>(null);
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(null);
    };
    document.addEventListener('pointerdown', onPointerDown);
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, [open ]);

  const onMenuKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setOpen(null);
      (e.target as HTMLElement).blur?.();
    }
  };

  const isHome = currentPath === '/';
  const isChangelog = currentPath.startsWith('/changelog');

  return (
    <nav aria-label="Sections" ref={rootRef} className="border-b border-border/60">
      <ul className="mx-auto flex w-full max-w-[1536px] gap-1 overflow-x-auto px-4 sm:px-6 lg:px-8">
        <li>
          <a href="/" aria-current={isHome ? 'page' : undefined} className={linkClass(isHome)}>
            Home
            {isHome && <ActiveBar />}
          </a>
        </li>
        {menus.map((menu) => {
          const active = currentPath.startsWith(menu.base);
          const expanded = open === menu.key;
          return (
            <li key={menu.key} className="relative" onKeyDown={onMenuKeyDown} onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen(null); }}>
              <button
                type="button"
                aria-expanded={expanded}
                aria-haspopup="true"
                aria-current={active ? 'page' : undefined}
                onClick={() => setOpen(expanded ? null : menu.key)}
                className={twMerge(linkClass(active), 'inline-flex cursor-pointer items-center gap-1 border-0 bg-transparent')}
              >
                {menu.label}
                <ChevronDown aria-hidden="true" className={twMerge('size-3.5 transition-transform duration-300 motion-reduce:transition-none', expanded && 'rotate-180')} />
                {active && <ActiveBar />}
              </button>
              {expanded && (
                <div className="absolute left-0 top-full z-50 w-80 rounded-none border border-border bg-popover p-1 shadow-md">
                  <ul>
                    {menu.items.map((item) => (
                      <li key={item.path}>
                        <a
                          href={item.path}
                          onClick={() => setOpen(null)}
                          className="block rounded-none px-3 py-2 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-primary hover:bg-accent"
                        >
                          <span className="block text-sm font-medium text-foreground">{item.title}</span>
                          <span className="block text-xs text-muted-foreground">{item.description}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          );
        })}
        <li>
          <a href="/changelog" aria-current={isChangelog ? 'page' : undefined} className={linkClass(isChangelog)}>
            Changelog
            {isChangelog && <ActiveBar />}
          </a>
        </li>
      </ul>
    </nav>
  );
}
