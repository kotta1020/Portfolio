import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { characters } from "@/data/portfolio";

function findCharacter(slug: string) {
  return characters.find((character) => character.slug === slug);
}

export function generateStaticParams() {
  return characters.map((character) => ({ slug: character.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const character = findCharacter(slug);

  return {
    title: character
      ? `${character.name} キャラクターシート | こったのおふざけ部屋`
      : "キャラクターシート",
  };
}

export default async function CharacterSheetPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const character = findCharacter(slug);

  if (!character) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-cream text-ink">
      <section className="relative isolate overflow-hidden px-5 py-8 sm:px-8 sm:py-12 lg:px-12">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#fff1c0] via-white to-[#b9f4ff]" />
        <div className="absolute inset-0 -z-10 halftone opacity-40" />

        <article className="mx-auto max-w-5xl rounded-[2rem] border-[5px] border-ink bg-white p-4 shadow-[10px_10px_0_#1f2433] sm:p-6">
          <p className="mb-3 inline-flex rotate-[-1deg] rounded-full border-3 border-ink bg-sunpop px-4 py-2 text-sm font-black shadow-[4px_4px_0_#1f2433]">
            CHARACTER SHEET
          </p>
          <h1 className="font-display text-3xl font-black leading-tight sm:text-5xl">
            {character.name}
          </h1>

          <div className="mt-6 overflow-hidden rounded-[1.5rem] border-4 border-ink bg-cream shadow-[7px_7px_0_#ff4f9a]">
            <img
              alt={`${character.name}のキャラクターシート`}
              className="w-full bg-white object-contain"
              src={character.sheetUrl}
            />
          </div>

          <p className="mx-auto mt-6 max-w-3xl text-center text-base font-bold leading-8 text-ink/75 sm:text-lg">
            このキャラクターはフリー素材です。保存して自由にお使いください。
            <br />
            画像を保存したい場合は「画像だけ開く」から保存してください。
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link className="hero-button bg-white" href="/#characters">
              キャラ図鑑に戻る
            </Link>
            <a
              className="hero-button bg-ink text-white"
              href={character.sheetUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              画像だけ開く
            </a>
          </div>
        </article>
      </section>
    </main>
  );
}
