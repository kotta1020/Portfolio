import Link from "next/link";
import { behindNotes } from "@/data/portfolio";

export default function BackstagePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f3ead7] text-[#2b241d]">
      <section className="relative isolate px-5 pb-12 pt-5 sm:px-8 lg:px-12">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(255,112,67,0.16)_0_1px,transparent_1px),linear-gradient(#f8efd9_0_58px,#dfc9a6_59px_61px)] bg-[length:32px_61px]" />
        <div className="absolute bottom-0 left-0 top-0 -z-10 hidden w-20 border-r-3 border-[#2b241d]/35 bg-[#f7cfdf] sm:block" />

        <header className="mx-auto flex max-w-6xl flex-col items-stretch gap-3 rounded-[1.25rem] border-3 border-[#2b241d] bg-[#fffaf0] px-4 py-3 shadow-[5px_5px_0_#2b241d] sm:flex-row sm:items-center sm:justify-between">
          <Link
            className="inline-flex items-center justify-center gap-2 text-center text-sm font-black sm:justify-start sm:text-left sm:text-base"
            href="/"
          >
            <span aria-hidden="true" className="grid h-8 w-8 place-items-center rounded-full border-3 border-[#2b241d] bg-[#fffaf0] shadow-[3px_3px_0_#2b241d]">
              🔍
            </span>
            こったのおふざけ部屋
          </Link>
          <nav className="flex flex-wrap items-center justify-center gap-2 text-xs font-black sm:justify-end">
            <Link className="rounded-full border-3 border-[#2b241d] bg-[#fff3b0] px-3 py-2 transition hover:bg-[#ffb84d]" href="/">
              トップ
            </Link>
            <Link className="rounded-full border-3 border-[#2b241d] bg-[#fff3b0] px-3 py-2 transition hover:bg-[#ffb84d]" href="/works">
              作品集
            </Link>
            <Link className="rounded-full border-3 border-[#2b241d] bg-[#fff3b0] px-3 py-2 transition hover:bg-[#ffb84d]" href="/#sns">
              SNS
            </Link>
          </nav>
        </header>

        <div className="mx-auto max-w-6xl pb-4 pt-12 sm:pt-16">
          <p className="mb-5 inline-flex rotate-[-2deg] rounded-[0.55rem] border-3 border-[#2b241d] bg-[#ffef88] px-4 py-2 text-sm font-black shadow-[5px_5px_0_#2b241d]">
            BACKSTAGE NOTEBOOK
          </p>
          <h1 className="max-w-5xl font-display text-5xl font-black leading-[1.08] sm:text-7xl">
            こったの
            <span className="mx-2 inline-block rotate-[-1deg] rounded-[0.75rem] border-3 border-[#2b241d] bg-[#95d5b2] px-3 shadow-[7px_7px_0_#2b241d]">
              頭の中
            </span>
            ノート。
          </h1>
        </div>
      </section>

      <section className="px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {behindNotes.map((note, index) => (
            <a
              className="group relative flex flex-col overflow-hidden rounded-[1.1rem] border-3 border-[#2b241d] bg-[#fffaf0] p-5 shadow-[7px_7px_0_#2b241d] transition hover:-translate-y-1 hover:shadow-[9px_9px_0_#2b241d]"
              href={note.url}
              key={note.title}
              rel="noreferrer"
              target="_blank"
            >
              <div className="absolute bottom-0 left-0 top-0 w-4 bg-[#f7cfdf]" />
              <div className="relative pl-4">
                <div className="mb-5 flex flex-wrap items-center gap-3">
                  <span className="rounded-full border-3 border-[#2b241d] bg-white px-4 py-2 text-xs font-black shadow-[3px_3px_0_#2b241d]">
                    FILE {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="rounded-[0.8rem] border-3 border-[#2b241d] bg-[linear-gradient(#fffdf7_0_46px,#d8c7a7_47px_49px)] bg-[length:100%_49px] p-4">
                  <p className="min-h-20 text-sm font-bold leading-7 text-[#2b241d]/76 sm:text-base">
                    {note.body}
                  </p>
                </div>
                <span className="mt-4 inline-flex min-h-12 w-full items-center justify-center rounded-full border-3 border-[#2b241d] bg-[#2b241d] px-5 text-sm font-black text-white shadow-[4px_4px_0_#ffb84d] transition group-hover:bg-[#3a3127]">
                  記事を読む
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-md">
          <Link
            className="inline-flex min-h-14 w-full items-center justify-center rounded-full border-3 border-[#2b241d] bg-[#2b241d] px-7 text-base font-black text-white shadow-[6px_6px_0_#ffb84d] transition hover:-translate-y-1"
            href="/"
          >
            トップに戻る
          </Link>
        </div>
      </section>
    </main>
  );
}
