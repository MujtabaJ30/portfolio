import { skillGroups } from "@/app/lib/data";

const principles = [
  {
    title: "Watch what people actually do.",
    copy: "The workflow is usually more honest than the brief. I start there, with behavior, workarounds, and the moments people quietly avoid.",
  },
  {
    title: "Name the constraint.",
    copy: "A sharp problem is more useful than a large opportunity area. I make the decision boundary clear before proposing a solution.",
  },
  {
    title: "Build the smallest useful proof.",
    copy: "A prototype, a rule engine, or a working extension can answer a question faster than a polished deck can.",
  },
  {
    title: "Keep the trade-off visible.",
    copy: "Every choice leaves something out. I document what we gained, what we accepted, and what I would test next.",
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
              Good product work starts before the screen.
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-8 text-muted">
              I like the part before the answer, when the problem is still specific enough to change your mind.
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
              Working toolkit
            </h3>
            <p className="text-sm text-muted">
              The tools follow the question, not the other way around.
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
