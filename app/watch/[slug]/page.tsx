import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BackButton } from "@/app/components/BackButton";
import { popularWorks, type VideoWork } from "@/data/portfolio";

type PlayableWork = VideoWork & {
  slug: string;
  youtubeId: string;
};

const playableWorks = popularWorks.filter(
  (work): work is PlayableWork => Boolean(work.slug && work.youtubeId),
);

function findWork(slug: string) {
  return playableWorks.find((work) => work.slug === slug);
}

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

function YouTubeEmbed({ title, youtubeId }: { title: string; youtubeId: string }) {
  const embedUrl = `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&playsinline=1`;
  const thumbnailUrl = `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`;
  const srcDoc = `
    <style>
      * { box-sizing: border-box; }
      body { margin: 0; background: #1f2433; }
      a { position: relative; display: block; width: 100%; height: 100vh; overflow: hidden; background: #1f2433; }
      img { width: 100%; height: 100%; object-fit: cover; opacity: .92; }
      span {
        position: absolute;
        inset: 0;
        margin: auto;
        width: 88px;
        height: 62px;
        border-radius: 18px;
        background: #ff0000;
        box-shadow: 0 8px 24px rgba(0,0,0,.28);
      }
      span:before {
        content: "";
        position: absolute;
        left: 34px;
        top: 18px;
        border-style: solid;
        border-width: 13px 0 13px 22px;
        border-color: transparent transparent transparent white;
      }
    </style>
    <a href="${embedUrl}" aria-label="${title}を再生">
      <img src="${thumbnailUrl}" alt="${title}">
      <span aria-hidden="true"></span>
    </a>
  `;

  return (
    <iframe
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      className="aspect-video w-full bg-ink"
      loading="lazy"
      referrerPolicy="strict-origin-when-cross-origin"
      src={embedUrl}
      srcDoc={srcDoc}
      title={`${title} YouTube動画`}
    />
  );
}

export function generateStaticParams() {
  return playableWorks.map((work) => ({ slug: work.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const work = findWork(slug);

  return {
    title: work ? `${work.title} | こったのおふざけ部屋` : "動画",
  };
}

export default async function WatchPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const work = findWork(slug);

  if (!work) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-cream text-ink">
      <section className="relative isolate overflow-hidden px-5 py-8 sm:px-8 sm:py-12 lg:px-12">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#ffd7e9] via-[#b9f4ff] to-[#fff07a]" />
        <div className="absolute inset-0 -z-10 halftone opacity-45" />

        <div className="mx-auto max-w-5xl">
          <BackButton />

          <article className="rounded-[2rem] border-[5px] border-ink bg-white p-4 shadow-[10px_10px_0_#1f2433] sm:p-6">
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span
                className={`rounded-full border-3 border-ink px-4 py-2 text-xs font-black shadow-[3px_3px_0_#1f2433] ${categoryColorClass(work.category)}`}
              >
                {work.category}
              </span>
              {work.badge && work.badge !== work.category ? (
                <span
                  className={`rounded-full border-3 border-ink px-4 py-2 text-xs font-black shadow-[3px_3px_0_#1f2433] ${categoryColorClass(work.category)}`}
                >
                  {work.badge}
                </span>
              ) : null}
            </div>

            <h1 className="font-display text-3xl font-black leading-tight sm:text-5xl">
              {work.title}
            </h1>
            <p className="mt-3 text-base font-bold leading-8 text-ink/75 sm:text-lg">
              {work.comment}
            </p>

            <div className="mt-6 overflow-hidden rounded-[1.5rem] border-4 border-ink bg-ink shadow-[7px_7px_0_#ff4f9a]">
              {work.youtubeId ? (
                <YouTubeEmbed title={work.title} youtubeId={work.youtubeId} />
              ) : work.videoSrc ? (
                <video
                  className="aspect-video w-full bg-ink"
                  controls
                  playsInline
                  preload="none"
                  src={work.videoSrc}
                >
                  <a href={work.videoSrc}>動画ファイルを開く</a>
                </video>
              ) : null}
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                className="hero-button bg-ink text-white"
                href={
                  work.youtubeId
                    ? `https://youtu.be/${work.youtubeId}`
                    : work.videoSrc ?? "#"
                }
              >
                動画を開く
              </a>
              <Link className="hero-button bg-white" href="/#sns">
                SNSも見る
              </Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
