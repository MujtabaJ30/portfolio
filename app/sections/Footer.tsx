import { contactLinks } from "@/app/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8 md:px-12 lg:px-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} Mujtaba Jafri. Built with Next.js,
          Tailwind CSS, and Phosphor Icons.
        </p>
        <div className="flex gap-6 text-sm text-muted">
          <a
            href={`mailto:${contactLinks.email}`}
            className="transition-colors hover:text-accent"
          >
            Email
          </a>
          <a
            href={contactLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent"
          >
            LinkedIn
          </a>
          <a
            href={contactLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
