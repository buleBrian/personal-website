"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function WeChatPage() {
  const [qrError, setQrError] = useState(false);
  const qrWidth = 1036;
  const qrHeight = 1319;

  return (
    <main className="page-shell section-space">
      <div className="mx-auto flex min-h-[calc(100vh-(var(--section-space)*2))] max-w-3xl flex-col">
        <div className="mb-10 sm:mb-14">
          <Link
            href="/"
            className="group inline-flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-4 text-foreground shadow-card transition duration-200 ease-out hover:-translate-y-1 hover:border-border-hover hover:shadow-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            <span
              aria-hidden="true"
              className="flex size-10 items-center justify-center rounded-full border border-border bg-accent-soft text-accent transition duration-200 ease-out group-hover:scale-105"
            >
              &larr;
            </span>
            <span className="text-sm font-semibold tracking-wide sm:text-base">
              Back Home
            </span>
          </Link>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center gap-8 text-center">
          <div className="space-y-3">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              WeChat
            </h1>
            <p className="text-sm leading-7 text-muted-foreground sm:text-base">
              Scan the QR code to add me.
            </p>
          </div>

          <div className="ui-card flex w-full max-w-sm items-center justify-center rounded-[var(--radius-lg)] p-6 sm:p-8">
            <div className="relative w-full overflow-hidden rounded-2xl border border-border bg-background-soft">
              {qrError ? (
                <div
                  className="flex w-full items-center justify-center px-6 text-center text-sm font-medium tracking-wide text-muted-foreground"
                  style={{ aspectRatio: `${qrWidth} / ${qrHeight}` }}
                >
                  QR Code Coming Soon
                </div>
              ) : (
                <Image
                  src="/images/wechat-qr.png"
                  alt="WeChat QR code"
                  width={qrWidth}
                  height={qrHeight}
                  sizes="(min-width: 640px) 320px, 100vw"
                  className="h-auto w-full"
                  onError={() => setQrError(true)}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
