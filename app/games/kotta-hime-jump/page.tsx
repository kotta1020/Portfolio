import type { Metadata } from "next";
import Link from "next/link";
import { BackButton } from "@/app/components/BackButton";

const gameUrl = "/games/kotta-hime-jump/game.html";

export const metadata: Metadata = {
  title: "こった姫ジャンプ | こったのおふざけ部屋",
  description: "15秒走ってゴールを目指す、こった姫のジャンプゲーム。",
};

export default function KottaHimeJumpPage() {
  return (
    <main className="min-h-screen bg-cream text-ink">
      <section className="relative isolate overflow-hidden px-5 py-8 sm:px-8 sm:py-12 lg:px-12">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#b9f4ff] via-[#fff07a] to-[#ffd7e9]" />
        <div className="absolute inset-0 -z-10 halftone opacity-45" />

        <div className="mx-auto max-w-6xl">
          <BackButton />

          <article className="rounded-[2rem] border-[5px] border-ink bg-white p-4 shadow-[10px_10px_0_#1f2433] sm:p-6">
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="rounded-full border-3 border-ink bg-limepop px-4 py-2 text-xs font-black shadow-[3px_3px_0_#1f2433]">
                ゲーム
              </span>
              <span className="rounded-full border-3 border-ink bg-white px-4 py-2 text-xs font-black shadow-[3px_3px_0_#1f2433]">
                スペースキー／画面タップ
              </span>
            </div>

            <h1 className="font-display text-3xl font-black leading-tight sm:text-5xl">
              こった姫ジャンプ
            </h1>
            <p className="mt-3 text-base font-bold leading-8 text-ink/75 sm:text-lg">
              15秒走ってゴールまでたどり着け。障害物をジャンプでよけて進みます。
            </p>

            <div className="mt-6 overflow-hidden rounded-[1.5rem] border-4 border-ink bg-ink shadow-[7px_7px_0_#ff4f9a]">
              <iframe
                allowFullScreen
                className="h-[72svh] min-h-[500px] w-full bg-[#14161c] sm:aspect-[760/340] sm:h-auto sm:min-h-0"
                src={gameUrl}
                title="こった姫ジャンプ"
              />
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                className="hero-button bg-ink text-white"
                href={gameUrl}
                rel="noreferrer"
                target="_blank"
              >
                別画面で遊ぶ
              </a>
              <Link className="hero-button bg-white" href="/works">
                作品集に戻る
              </Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
