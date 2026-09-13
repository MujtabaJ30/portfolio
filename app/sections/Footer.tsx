import { contactLinks } from "@/app/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border px-5 py-6 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-4 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Mujtaba Jafri</p>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <a
            href={`mailto:${contactLinks.email}`}
            className="transition-colors hover:text-primary"
          >
            Email
          </a>
          <a
            href={contactLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-primary"
          >
            LinkedIn
          </a>
          <a
            href={contactLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-primary"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
