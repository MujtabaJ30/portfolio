"use client";

import {
  ArrowUpRight,
  Envelope,
  GithubLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";
import { contactLinks } from "@/app/lib/data";

export function Contact() {
  return (
    <section id="contact" className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto grid max-w-[1400px] gap-14 border-t border-border pt-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24 lg:pt-10">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-primary">
            Contact
          </p>
          <h2 className="mt-6 max-w-xl text-balance text-4xl font-medium leading-[1.02] tracking-[-0.035em] text-text sm:text-5xl lg:text-7xl">
            If the problem is worth solving, let&apos;s talk.
          </h2>
        </div>

        <div className="max-w-xl lg:pt-14">
          <p className="text-lg leading-8 text-muted sm:text-xl sm:leading-9">
            I&apos;m looking for product roles where clear thinking, careful execution, and a willingness to build are useful.
          </p>

          <a
            href={`mailto:${contactLinks.email}`}
            className="mt-8 inline-flex min-h-14 w-full items-center justify-between rounded-full bg-text px-6 text-base font-medium text-bg transition-colors hover:bg-primary hover:text-text sm:w-auto sm:min-w-[22rem]"
          >
            <span className="inline-flex items-center gap-3">
              <Envelope className="h-5 w-5" weight="bold" />
              {contactLinks.email}
            </span>
            <ArrowUpRight className="h-5 w-5" weight="bold" />
          </a>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-text">
            <a
              href={contactLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-primary"
            >
              <LinkedinLogo className="h-4 w-4" weight="bold" />
              LinkedIn
            </a>
            <a
              href={contactLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-primary"
            >
              <GithubLogo className="h-4 w-4" weight="bold" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
