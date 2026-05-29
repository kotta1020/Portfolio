
function SectionHeading({
  kicker,
  title,
  note,
}: {
  kicker: string;
  title: string;
  note?: string;
}) {
  return (
    <div className="mx-auto mb-7 max-w-3xl text-center sm:mb-10">
      <p className="mb-3 inline-flex rotate-[-1deg] rounded-full border-3 border-ink bg-white px-4 py-2 text-sm font-black shadow-[4px_4px_0_#1f2433]">
        {kicker}
      </p>
      <h2 className="font-display text-3xl font-black leading-tight text-ink sm:text-5xl">
        {title}
      </h2>
      {note ? (
        <p className="mx-auto mt-3 max-w-2xl text-base font-bold leading-8 text-ink/75">
          {note}
        </p>
      ) : null}
    </div>
  );
}

function YouTubeEmbed({ title, youtubeId }: { title: string; youtubeId: string }) {
  const embedUrl = `https://www.youtube.com/embed/${youtubeId}?rel=0&playsinline=1`;

  return (
    <iframe
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      className="aspect-video w-full bg-ink"
      loading="lazy"
      referrerPolicy="strict-origin-when-cross-origin"
      src={embedUrl}
      title={`${title} YouTube動画`}
    />
  );
}

function Thumbnail({ work }: { work: VideoWork }) {
  return (
    <div
      className={`relative aspect-video overflow-hidden rounded-[1.35rem] border-3 border-ink bg-gradient-to-br ${softPaletteClass[work.palette]}`}
    >
      <div className="absolute inset-0 checker-mask opacity-50" />
      <div
        className={`absolute left-4 top-4 rounded-full border-3 border-ink px-3 py-1 text-xs font-black ${categoryColorClass(work.category)}`}
      >
        {work.category}
      </div>
      <div className="absolute bottom-4 left-4 right-4 grid min-h-16 place-items-center rounded-2xl border-3 border-ink bg-white/88 px-4 text-center text-lg font-black leading-snug text-ink shadow-[5px_5px_0_#1f2433]">
        {work.title}
      </div>
      <div className="absolute right-5 top-16 h-20 w-20 rotate-12 rounded-[1rem] border-3 border-ink bg-sunpop shadow-[5px_5px_0_#1f2433]">
        <div className="grid h-full place-items-center text-center text-xs font-black leading-tight text-ink">
          AI
          <br />
          SHORT
        </div>
      </div>
    </div>
  );
}

function WorkCard({
  embedVideo = false,
  work,
  index,
}: {
  embedVideo?: boolean;
  work: VideoWork;
  index: number;
}) {
  const rotate = index % 2 === 0 ? "sm:rotate-[-1deg]" : "sm:rotate-[1deg]";

  return (
    <article
      className={`sticker-card flex h-full flex-col gap-4 bg-white p-4 ${rotate}`}
    >
      {embedVideo && work.youtubeId ? (
        <div className="overflow-hidden rounded-[1.35rem] border-3 border-ink bg-ink shadow-[5px_5px_0_#ff4f9a]">
          <YouTubeEmbed title={work.title} youtubeId={work.youtubeId} />
        </div>
      ) : embedVideo && work.videoSrc ? (
        <div className="overflow-hidden rounded-[1.35rem] border-3 border-ink bg-ink shadow-[5px_5px_0_#ff4f9a]">
          <video
            className="aspect-video w-full bg-ink"
            controls
            playsInline
            preload="none"
            src={work.videoSrc}
          >
            <a href={work.videoSrc}>動画ファイルを開く</a>
          </video>
        </div>
      ) : (
        <Thumbnail work={work} />
      )}
      <div className="flex flex-1 flex-col">
        {work.badge ? (
          <span
            className={`mb-3 w-fit rounded-full border-3 border-ink px-3 py-1 text-xs font-black shadow-[3px_3px_0_#1f2433] ${categoryColorClass(work.category)}`}
          >
            {work.badge}
          </span>
        ) : null}
        <h3 className="text-xl font-black leading-snug text-ink">
          {work.title}
        </h3>
        <p className="mt-2 flex-1 text-sm font-bold leading-7 text-ink/70">
          {work.comment}
        </p>
      </div>
    </article>
  );
}

function CharacterCard({
  character,
  index,
}: {
  character: Character;
  index: number;
}) {
  return (
    <article className="sticker-card relative overflow-hidden bg-white p-5">
      <div
        className={`absolute -right-5 -top-5 h-24 w-24 rotate-12 border-3 border-ink ${paletteClass[character.palette]}`}
      />
      <div className="relative">
        {character.image ? (
          <div className="mb-4 overflow-hidden rounded-[1.25rem] border-3 border-ink bg-cream shadow-[5px_5px_0_#1f2433]">
            <img
              alt={character.imageAlt ?? character.name}
              className="h-52 w-full object-cover"
              src={character.image}
              style={{ objectPosition: character.imagePosition ?? "center" }}
            />
          </div>
        ) : null}
        <div className="mb-4 flex items-center gap-4">
          <div
            className={`grid h-16 w-16 shrink-0 place-items-center rounded-2xl border-3 border-ink text-xl font-black shadow-[4px_4px_0_#1f2433] ${paletteClass[character.palette]}`}
          >
            {String(index + 1).padStart(2, "0")}
          </div>
          <div>
            <h3 className="text-xl font-black leading-snug text-ink">
              {character.name}
            </h3>
            <p className="mt-1 text-xs font-black text-ink/60">
              {character.role}
            </p>
          </div>
        </div>
        <p className="text-sm font-bold leading-7 text-ink/75">
          {character.description}
        </p>
        <p className="mt-4 rounded-2xl border-3 border-dashed border-ink bg-cream p-3 text-sm font-black leading-7 text-ink">
          {character.catchphrase}
        </p>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-cream text-ink">
      <section className="relative isolate px-5 pb-14 pt-5 sm:px-8 sm:pb-16 lg:px-12">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,#fff8dc_0%,#ffe0ee_28%,#b9f2ff_58%,#fff3a0_100%)]" />
        <div className="absolute inset-0 -z-10 halftone opacity-55" />
        <header className="mx-auto flex max-w-6xl flex-col items-stretch gap-3 rounded-[1.5rem] border-3 border-ink bg-white/86 px-4 py-3 shadow-[5px_5px_0_#1f2433] sm:flex-row sm:items-center sm:justify-between sm:rounded-full">
          <a
            className="inline-flex items-center justify-center gap-2 text-center text-sm font-black sm:justify-start sm:text-left sm:text-base"
            href="#top"
          >
            <span
              aria-hidden="true"
              className="grid h-8 w-8 place-items-center rounded-full border-3 border-ink bg-white shadow-[3px_3px_0_#1f2433]"
            >
              🔍
            </span>
            こったのおふざけ部屋
          </a>
          <nav className="flex flex-wrap items-center justify-center gap-2 text-xs font-black sm:justify-end">
            <Link className="nav-chip" href="/works">
              作品集
            </Link>
            <Link className="nav-chip" href="/backstage">
              制作の裏側
            </Link>
            <a className="nav-chip" href="#sns">
              SNS
            </a>
          </nav>
        </header>

        <div
          className="relative mx-auto max-w-6xl pb-10 pt-14 lg:min-h-[560px] lg:pt-20"
          id="top"
        >
          <div className="relative z-10 max-w-4xl">
            <p className="mb-5 inline-flex rotate-[-2deg] rounded-full border-3 border-ink bg-limepop px-4 py-2 text-sm font-black shadow-[5px_5px_0_#1f2433]">
              AIおふざけ動画クリエイターの作品保管庫
            </p>
            <h1 className="max-w-3xl font-display text-5xl font-black leading-[1.08] text-ink sm:text-7xl lg:text-8xl">
              週7で
              <span className="mx-2 inline-block rotate-[-2deg] rounded-[1.25rem] border-3 border-ink bg-candy px-3 text-white shadow-[7px_7px_0_#1f2433]">
                ふざけて
              </span>
              ます。
            </h1>
            <p className="mt-6 max-w-2xl text-lg font-bold leading-9 text-ink/78 sm:text-xl">
              AIで作った謎動画、爆笑ショート、変なキャラ、たまに感動させようとして失敗した作品を置いています。
            </p>
            <div className="mt-8 max-w-2xl rounded-[2rem] border-3 border-ink bg-white/55 p-3 shadow-[7px_7px_0_#1f2433] sm:p-4">
              <div className="grid gap-3 sm:grid-cols-2">
                <a className="hero-button bg-white text-ink" href="#popular">
                  動画を見る
                </a>
                <a className="hero-button bg-white text-ink" href="#characters">
                  キャラ図鑑を見る
                </a>
                <a className="hero-button bg-white text-ink" href="#behind">
                  制作の裏側を見る
                </a>
                <a className="hero-button bg-white text-ink" href="#sns">
                  SNSを見る
                </a>
              </div>
            </div>
          </div>
          <div className="mt-10 flex justify-center lg:absolute lg:right-10 lg:top-36 lg:mt-0 xl:right-20">
            <div className="h-32 w-32 rotate-[4deg] rounded-full border-3 border-ink bg-white p-2 shadow-[7px_7px_0_#1f2433] sm:h-40 sm:w-40 lg:h-72 lg:w-72">
              <img
                alt="こったのSNSアイコン"
                className="h-full w-full rounded-full object-cover"
                src="/characters/sns-icon.jpg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="marquee-band border-y-3 border-ink bg-ink py-3 text-white">
