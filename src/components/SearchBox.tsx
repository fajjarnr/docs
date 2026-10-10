import { useEffect, useRef, useState } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { pages } from '@/data/pages';

interface Props {
  id: string;
  className?: string;
}

export default function SearchBox({ id, className }: Props) {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listId = `${id}-results`;

  const trimmed = query.trim().toLowerCase();
  const results = trimmed
    ? pages
        .filter((page) =>
          `${page.title} ${page.section} ${page.description}`.toLowerCase().includes(trimmed),
        )
        .slice(0, 6)
    : [];

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const onInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Escape') {
      setOpen(false);
      inputRef.current?.blur();
      return;
    }
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setOpen(true);
      setActive((index) => (results.length ? (index + 1) % results.length : 0));
      return;
    }
    if (event.key === 'ArrowUp') {
      event.preventDefault();
      setActive((index) => (results.length ? (index - 1 + results.length) % results.length : 0));
      return;
    }
    if (event.key === 'Enter' && open && results[active]) {
      event.preventDefault();
      window.location.assign(results[active].path);
    }
  };

  return (
    <div className={twMerge('relative', className)}>
      <div className="flex items-center gap-2 rounded-none border border-input bg-card px-3 py-2 transition-all duration-300 focus-within:border-primary motion-reduce:transition-none">
        <svg
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
          className="size-5 shrink-0 text-placeholder-ink"
        >
          <circle cx="9" cy="9" r="6" />
          <path d="m14 14 4 4" strokeLinecap="round" />
        </svg>
        <input
          ref={inputRef}
          id={id}
          type="text"
          role="combobox"
          aria-expanded={open && results.length > 0}
          aria-controls={listId}
          aria-autocomplete="list"
          aria-label="Search docs"
          placeholder="Search docs"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setOpen(true);
            setActive(0);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={onInputKeyDown}
          className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-placeholder-ink"
        />
        <kbd className="hidden shrink-0 rounded-none border border-border bg-card px-1.5 text-xs text-placeholder-ink sm:inline-block">
          ⌘K
        </kbd>
      </div>
      {open && trimmed.length > 0 && (
        <div
          id={listId}
          role="listbox"
          className="absolute inset-x-0 top-full z-40 mt-2 overflow-hidden rounded-none border border-border bg-popover p-1 shadow-md"
        >
          {results.length === 0 ? (
            <p className="px-3 py-2 text-sm text-muted-foreground">
              No pages match “{query.trim()}”.
            </p>
          ) : (
            results.map((page, index) => (
              <a
                key={page.path}
                href={page.path}
                role="option"
                aria-selected={index === active}
                className={clsx(
                  'block rounded-none px-3 py-2 text-sm',
                  index === active ? 'bg-accent text-accent-foreground' : 'text-foreground',
                )}
              >
                <span className="font-medium">{page.title}</span>
                <span className="ml-2 text-muted-foreground">{page.section}</span>
              </a>
            ))
          )}
        </div>
      )}
    </div>
  );
}
