"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, List, X } from "@phosphor-icons/react";
import { usePathname, useRouter } from "next/navigation";
import { smoothScrollTo } from "@/app/lib/scroll";

const navItems = [
  { label: "Work", href: "#projects" },
  { label: "Approach", href: "#approach" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleNavClick = async (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setMenuOpen(false);

    if (pathname !== "/") {
      router.push(`/${href}`);
      return;
    }

    await smoothScrollTo(href, 600);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border/70 bg-bg/92 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <a
          href="#"
          className="group flex items-center gap-3 text-sm font-semibold tracking-tight text-text"
          onClick={async (e) => {
            e.preventDefault();
            setMenuOpen(false);

            if (pathname !== "/") {
              router.push("/");
              return;
            }

            await smoothScrollTo("body", 400, 0);
          }}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-text text-[11px] font-semibold tracking-[-0.04em] text-bg transition-transform duration-300 group-hover:rotate-[-8deg]">
            MJ
          </span>
          <span className="hidden sm:inline">Mujtaba Jafri</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="rounded-full px-4 py-2 text-sm text-muted transition-colors hover:bg-surface-hover hover:text-text"
            >
              {item.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            className="ml-3 inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm font-medium text-text transition-colors hover:border-text hover:bg-text hover:text-bg"
            download
          >
            Resume
            <ArrowUpRight className="h-3.5 w-3.5" weight="bold" />
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-text transition-colors hover:bg-surface-hover md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <X className="h-5 w-5" weight="bold" />
          ) : (
            <List className="h-5 w-5" weight="bold" />
          )}
        </button>
      </div>

      {menuOpen && (
        <nav
          id="mobile-navigation"
          className="border-t border-border/70 bg-bg px-5 py-4 md:hidden"
          aria-label="Mobile"
        >
          <div className="mx-auto flex max-w-[1400px] flex-col">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="flex items-center justify-between border-b border-border/70 py-4 text-lg font-medium text-text"
              >
                {item.label}
                <ArrowUpRight className="h-5 w-5 text-primary" weight="bold" />
              </a>
            ))}
            <a
              href="/resume.pdf"
              className="flex items-center justify-between py-4 text-lg font-medium text-text"
              download
            >
              Resume
              <ArrowUpRight className="h-5 w-5 text-primary" weight="bold" />
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
