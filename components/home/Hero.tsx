"use client";

import { useState } from "react";
import Image from "next/image";

import { siteConfig } from "@/lib/site";

import { Links } from "./Links";

export function Hero() {
  const [avatarError, setAvatarError] = useState(false);

  return (
    <div className="flex min-h-[calc(100vh-(var(--section-space)*2))] flex-col justify-center">
      <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center gap-10 py-12 text-center sm:py-16">
        <div className="flex flex-col items-center gap-7">
          <div className="relative size-28 overflow-hidden rounded-full border border-border bg-card shadow-card sm:size-32">
            {avatarError ? (
              <div
                className="flex size-full items-center justify-center bg-accent-soft text-sm font-medium tracking-[0.2em] text-accent"
                aria-hidden="true"
              >
                DOG
              </div>
            ) : (
              <Image
                src="/avatar/avatar.png"
                alt={siteConfig.name}
                fill
                priority
                sizes="128px"
                className="object-cover"
                onError={() => setAvatarError(true)}
              />
            )}
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              {siteConfig.name}
            </h1>
            <p className="text-base font-medium text-foreground sm:text-lg">
              {siteConfig.hero.subtitle}
            </p>
            <p className="mx-auto max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
              {siteConfig.hero.description}
            </p>
          </div>
        </div>

        <Links items={siteConfig.links} />
      </div>
    </div>
  );
}
