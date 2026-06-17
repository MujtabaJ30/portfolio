"use client";

import { Envelope, LinkedinLogo, GithubLogo } from "@phosphor-icons/react";
import { Button } from "@/app/components/Button";
import { contactLinks } from "@/app/lib/data";
import { SectionReveal } from "@/app/components/SectionReveal";

export function Contact() {
  return (
    <section id="contact" className="px-6 py-24 md:px-12 lg:px-20">
      <SectionReveal className="mx-auto max-w-4xl text-center">
        <p className="font-mono text-sm uppercase tracking-wide text-accent">
          Let&apos;s Connect
        </p>
        <h2 className="mt-3 text-4xl font-semibold tracking-tight text-text md:text-5xl">
          Interested in working together?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
          I&apos;m open to product management roles and side projects. If you
          want someone who ships, analyzes, and works with data, let&apos;s
          talk.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button
            href={`mailto:${contactLinks.email}`}
            icon={<Envelope className="h-4 w-4" weight="bold" />}
          >
            Send an Email
          </Button>
          <Button
            href={contactLinks.linkedin}
            variant="secondary"
            icon={<LinkedinLogo className="h-4 w-4" weight="bold" />}
          >
            LinkedIn
          </Button>
          <Button
            href={contactLinks.github}
            variant="secondary"
            icon={<GithubLogo className="h-4 w-4" weight="bold" />}
          >
            GitHub
          </Button>
        </div>
      </SectionReveal>
    </section>
  );
}
