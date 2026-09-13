import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/app/lib/data";

const projectStatuses: Record<string, string> = {
  dealflow: "Concept / prototype",
  "whatsapp-dpdp": "Working prototype",
  "x-split": "Shipped product",
  "invoice-exception-handler": "Live MVP",
  "rapido-teardown": "Product teardown",
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.id === slug);

  if (!project) {
    return { title: "Project not found | Mujtaba Jafri" };
  }

  return {
    title: `${project.title} | Mujtaba Jafri`,
    description: project.summary,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((item) => item.id === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = projects[projectIndex];
  const status = projectStatuses[project.id] ?? "Product work";
  const nextProject = projects[(projectIndex + 1) % projects.length];
  const linkItems = [
    { label: project.links.liveLabel ?? "Live demo", href: project.links.live },
    { label: "GitHub", href: project.links.github },
    { label: "Case study PDF", href: project.links.pdf },
    { label: "Project drive", href: project.links.drive },
    { label: "Presentation", href: project.links.ppt },
  ].filter((item): item is { label: string; href: string } => Boolean(item.href));

  return (
    <main className="overflow-hidden px-5 pb-24 pt-28 sm:px-8 lg:px-12 lg:pb-36 lg:pt-36">
      <div className="mx-auto max-w-[1400px]">
        <section aria-labelledby="case-study-title">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-primary"
          >
            <span aria-hidden="true">←</span>
            Back to work
          </Link>

          <div className="mt-12 grid items-end gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.14em] text-primary">
                <span>{String(projectIndex + 1).padStart(2, "0")}</span>
                <span className="h-px w-8 bg-primary" aria-hidden="true" />
                <span>{status}</span>
              </div>
              <h1
                id="case-study-title"
                className="mt-6 text-balance text-5xl font-medium leading-[0.98] tracking-[-0.04em] text-text sm:text-6xl lg:text-8xl"
              >
                {project.title}
              </h1>
              <p className="mt-5 text-xl leading-8 text-muted sm:text-2xl sm:leading-9">
                {project.subtitle}
              </p>
              <p className="mt-8 max-w-xl text-lg leading-8 text-muted">
                {project.summary}
              </p>
              {linkItems.length > 0 && (
                <nav
                  className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium"
                  aria-label="Project links"
                >
                  {linkItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text transition-colors hover:text-primary"
                    >
                      {item.label} <span aria-hidden="true">↗</span>
                    </a>
                  ))}
                </nav>
              )}
            </div>

            <figure className="overflow-hidden rounded-2xl border border-border bg-surface">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.images[0].src}
                  alt={project.images[0].alt}
                  fill
                  priority
                  sizes="(max-width: 1023px) 100vw, 58vw"
                  className="object-cover"
                />
              </div>
              {project.images[0].caption && (
                <figcaption className="border-t border-border px-5 py-4 text-sm leading-6 text-muted">
                  {project.images[0].caption}
                </figcaption>
              )}
            </figure>
          </div>
        </section>

        <section className="mt-24 border-y border-border py-6 lg:mt-32 lg:py-8">
          <dl className="grid gap-6 sm:grid-cols-3 lg:grid-cols-[0.8fr_1fr_1.5fr] lg:gap-12">
            <div>
              <dt className="text-xs font-medium uppercase tracking-[0.14em] text-primary">Role</dt>
              <dd className="mt-2 text-base leading-7 text-text">{project.role}</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-[0.14em] text-primary">Status</dt>
              <dd className="mt-2 text-base leading-7 text-text">{status}</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-[0.14em] text-primary">Tools and methods</dt>
              <dd className="mt-2 text-base leading-7 text-text">{project.stack.join(" / ")}</dd>
            </div>
          </dl>
        </section>

        <section className="mt-24 grid gap-10 lg:mt-36 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
          <h2 className="text-3xl font-medium tracking-[-0.03em] text-text sm:text-4xl">
            Problem
          </h2>
          <p className="max-w-3xl text-xl leading-9 text-muted">{project.problem}</p>
        </section>

        <section className="mt-24 grid gap-10 lg:mt-36 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
          <h2 className="text-3xl font-medium tracking-[-0.03em] text-text sm:text-4xl">
            Approach
          </h2>
          <p className="max-w-3xl text-xl leading-9 text-muted">{project.approach}</p>
        </section>

        <section className="mt-24 lg:mt-36" aria-labelledby="process-title">
          <div className="max-w-2xl">
            <h2 id="process-title" className="text-3xl font-medium tracking-[-0.03em] text-text sm:text-4xl">
              Process
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted">
              Steps I took for this project.
            </p>
          </div>
          <ol className="mt-12 divide-y divide-border border-y border-border">
            {project.process.map((step, index) => (
              <li
                key={step}
                className="grid gap-4 py-6 sm:grid-cols-[64px_1fr] sm:gap-8 sm:py-8"
              >
                <span className="font-mono text-sm text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="max-w-3xl text-lg leading-8 text-text">{step}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-24 grid gap-10 lg:mt-36 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
          <h2 className="text-3xl font-medium tracking-[-0.03em] text-text sm:text-4xl">
            Result
          </h2>
          <ul className="max-w-3xl divide-y divide-border border-y border-border">
            {project.results.map((result) => (
              <li key={result} className="py-5 text-lg leading-8 text-text sm:py-6">
                {result}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-24 grid gap-10 lg:mt-36 lg:grid-cols-2 lg:gap-24">
          <div>
            <h2 className="text-3xl font-medium tracking-[-0.03em] text-text sm:text-4xl">
              Trade-offs
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-muted">{project.tradeoffs}</p>
          </div>
          <div>
            <h2 className="text-3xl font-medium tracking-[-0.03em] text-text sm:text-4xl">
              Learning
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-muted">{project.learning}</p>
          </div>
        </section>

        {project.images.length > 1 && (
          <section className="mt-24 lg:mt-36" aria-labelledby="gallery-title">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <h2 id="gallery-title" className="text-3xl font-medium tracking-[-0.03em] text-text sm:text-4xl">
              Screens and flows
              </h2>
              <p className="text-sm text-muted">Selected screens and artifacts.</p>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {project.images.slice(1).map((image) => (
                <figure key={image.src} className="overflow-hidden rounded-2xl border border-border bg-surface">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={1200}
                    height={750}
                    sizes="(max-width: 639px) 100vw, 50vw"
                    className="h-auto w-full object-cover"
                  />
                  {image.caption && (
                    <figcaption className="border-t border-border px-4 py-3 text-sm leading-6 text-muted">
                      {image.caption}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          </section>
        )}

        <section className="mt-24 border-t border-border pt-8 lg:mt-36 lg:pt-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-primary">Next project</p>
              <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] text-text sm:text-4xl">
                {nextProject.title}
              </h2>
            </div>
            <Link
              href={`/work/${nextProject.id}`}
              className="text-sm font-medium text-text transition-colors hover:text-primary"
            >
              Next project <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
