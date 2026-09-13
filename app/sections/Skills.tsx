import { skillGroups } from "@/app/lib/data";

const principles = [
  {
    title: "Start with the current workflow.",
    copy: "I look at the tools, workarounds, and handoffs people already use before proposing a new flow.",
  },
  {
    title: "Define one problem.",
    copy: "I narrow a broad opportunity into a problem I can explain, investigate, and measure.",
  },
  {
    title: "Test with something concrete.",
    copy: "I use wireframes, prototypes, or code to learn before adding more scope.",
  },
  {
    title: "Write down the trade-off.",
    copy: "I record what a decision improves, what it leaves out, and what I would check next.",
  },
];

export function Skills() {
  return (
    <section
      id="approach"
      className="border-y border-border bg-surface/60 px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div className="max-w-xl">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-primary">
              Approach
            </p>
            <h2 className="mt-6 text-balance text-4xl font-medium leading-[1.02] tracking-[-0.035em] text-text sm:text-5xl lg:text-6xl">
              How I work on a product problem.
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-8 text-muted">
              I start with the current workflow, choose a narrow question, and build enough to test it.
            </p>
          </div>

          <ol className="divide-y divide-border border-y border-border">
            {principles.map((principle, index) => (
              <li
                key={principle.title}
                className="grid gap-5 py-6 sm:grid-cols-[48px_1fr] sm:gap-7 sm:py-8"
              >
                <span className="font-mono text-sm text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-xl font-medium tracking-[-0.02em] text-text sm:text-2xl">
                    {principle.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
                    {principle.copy}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-24 border-t border-border pt-6 lg:mt-32">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="text-xl font-medium tracking-[-0.02em] text-text">
              Tools I use
            </h3>
            <p className="text-sm text-muted">
              A short list of tools and methods I have used in projects.
            </p>
          </div>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
            {skillGroups.map((group) => (
              <div key={group.category}>
                <h4 className="text-sm font-medium text-primary">{group.category}</h4>
                <p className="mt-3 text-base leading-7 text-muted">
                  {group.skills.join(" / ")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
