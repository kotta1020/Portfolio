import Link from "next/link";
import { genres, workCatalog, type VideoWork } from "@/data/portfolio";

function categoryColorClass(category: string) {
  switch (category) {
    case "ショート動画":
      return "bg-candy";
    case "AIコメディ":
      return "bg-soda";
    case "MV":
      return "bg-sunpop";
    case "コンテスト作品":
      return "bg-grape text-white";
    default:
      return "bg-white";
  }
}

function WorkCatalogCard({ work, index }: { work: VideoWork; index: number }) {
  const thumbnailSrc = work.youtubeId
    ? `https://i.ytimg.com/vi/${work.youtubeId}/hqdefault.jpg`
    : null;

  return (
    <article className="sticker-card overflow-hidden bg-white p-4 sm:p-5">
      <div className="mb-4 flex flex-wrap items-center gap-3">
        {work.category ? (
          <span
            className={`rounded-full border-3 border-ink px-4 py-2 text-xs font-black shadow-[3px_3px_0_#1f2433] ${categoryColorClass(work.category)}`}
          >
            {work.category}
          </span>
        ) : null}
        <span className="rounded-full border-3 border-ink bg-white px-4 py-2 text-xs font-black shadow-[3px_3px_0_#1f2433]">
          FILE {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="overflow-hidden rounded-[1.35rem] border-4 border-ink bg-ink shadow-[6px_6px_0_#ff4f9a]">
        {thumbnailSrc ? (
          <img
            alt={`${work.title}のサムネイル`}
            className="aspect-video w-full object-cover"
            loading="lazy"
            src={thumbnailSrc}
          />
        ) : (
          <div className="grid aspect-video place-items-center bg-gradient-to-br from-[#ffd3e6] via-white to-[#b7edff] p-6 text-center">
            <p className="font-display text-2xl font-black text-ink/40">
              COMING SOON
            </p>
          </div>
        )}
      </div>

      <div className="mt-5">
        <h2 className="font-display text-2xl font-black leading-tight sm:text-3xl">
          {work.title}
        </h2>
        <p className="mt-2 text-sm font-bold leading-7 text-ink/72">
          {work.comment}
        </p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          {work.url ? (
            <Link
              className="hero-button bg-ink text-white"
              href={work.url}
            >
              この作品を見る
            </Link>
          ) : (
            <span className="hero-button cursor-default bg-ink/45 text-white">
              準備中
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

export default function WorksPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#e5fbff] text-ink">
      <section className="px-5 pb-12 pt-5 sm:px-8 lg:px-12">
        <header className="mx-auto flex max-w-6xl flex-col items-stretch gap-3 rounded-[1.5rem] border-3 border-ink bg-white/86 px-4 py-3 shadow-[5px_5px_0_#1f2433] sm:flex-row sm:items-center sm:justify-between sm:rounded-full">
          <Link
            className="inline-flex items-center justify-center gap-2 text-center text-sm font-black sm:justify-start sm:text-left sm:text-base"
            href="/"
          >
            <span aria-hidden="true" className="grid h-8 w-8 place-items-center rounded-full border-3 border-ink bg-white shadow-[3px_3px_0_#1f2433]">
              🔍
            </span>
            こったのおふざけ部屋
          </Link>
          <nav className="flex flex-wrap items-center justify-center gap-2 text-xs font-black sm:justify-end">
            <Link className="nav-chip" href="/">
              トップ
            </Link>
            <Link className="nav-chip" href="/backstage">
              制作の裏側
            </Link>
            <Link className="nav-chip" href="/#sns">
              SNS
            </Link>
          </nav>
        </header>

        <div className="mx-auto max-w-6xl pb-4 pt-12 sm:pt-16">
          <p className="mb-5 inline-flex rotate-[-2deg] rounded-full border-3 border-ink bg-soda px-4 py-2 text-sm font-black shadow-[5px_5px_0_#1f2433]">
            KOTTA WORKS STORAGE
          </p>
          <h1 className="max-w-4xl font-display text-5xl font-black leading-[1.08] sm:text-7xl">
            作品集を
            <span className="mx-2 inline-block rotate-[-2deg] rounded-[1.25rem] border-3 border-ink bg-candy px-3 text-white shadow-[7px_7px_0_#1f2433]">
              まとめて
            </span>
            見る。
          </h1>
          <div className="mt-8 flex flex-wrap gap-3">
            {genres.map((genre) => (
              <span
                className={`rounded-full border-3 border-ink px-4 py-2 text-sm font-black shadow-[3px_3px_0_#1f2433] ${categoryColorClass(genre)}`}
                key={genre}
              >
                {genre}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-8">
          {workCatalog.map((work, index) => (
            <WorkCatalogCard key={`${work.title}-${index}`} work={work} index={index} />
          ))}
        </div>
        <div className="mx-auto mt-10 max-w-md">
          <Link
            className="inline-flex min-h-14 w-full items-center justify-center rounded-full border-3 border-ink bg-ink px-7 text-base font-black text-white shadow-[6px_6px_0_#ffb84d] transition hover:-translate-y-1"
            href="/"
          >
            トップに戻る
          </Link>
        </div>
      </section>
    </main>
  );
}
