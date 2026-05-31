export type VideoWork = {
  title: string;
  comment: string;
  url: string;
  slug?: string;
  videoSrc?: string;
  youtubeId?: string;
  badge?: string;
  category: string;
  palette: "pink" | "blue" | "yellow" | "green" | "purple" | "orange";
};

export type Character = {
  name: string;
  role: string;
  description: string;
  catchphrase: string;
  palette: "pink" | "blue" | "yellow" | "green" | "purple" | "orange";
  image?: string;
  imageAlt?: string;
  imagePosition?: string;
  sheetUrl: string;
};

export type BehindNote = {
  title: string;
  body: string;
  url: string;
};

export const latestWorks: VideoWork[] = [
  {
    title: "朝7時に急に王国を建てる姫",
    comment: "寝起きテンションだけで国ができました。",
    url: "https://youtube.com/",
    category: "謎キャラ劇場",
    palette: "pink",
  },
  {
    title: "ニュース速報: 鶏、会議を仕切る",
    comment: "スタジオ全員がなぜか従う回。",
    url: "https://youtube.com/",
    category: "ニュース風パロディ",
    palette: "yellow",
  },
  {
    title: "ラスボス前で弁当を開ける勇者",
    comment: "戦闘BGMより箸の音が強い。",
    url: "https://youtube.com/",
    category: "ゲーム風パロディ",
    palette: "blue",
  },
  {
    title: "感動MVにしたかった謎ダンス",
    comment: "泣かせにいって、笑われました。",
    url: "https://youtube.com/",
    category: "MV",
    palette: "purple",
  },
];

export const popularWorks: VideoWork[] = [
  {
    title: "スクロール",
    comment: "気づけば今日もスクロール、スマホに支配された現代人のMV。",
    url: "/watch/scroll",
    slug: "scroll",
    videoSrc: "/videos/scroll.mov",
    youtubeId: "4xUziwUULu0",
    badge: "MV",
    category: "MV",
    palette: "yellow",
  },
  {
    title: "演歌バレンタイン",
    comment: "ふざけた字幕と映像のミスマッチで、人類の歴史を後退させるMV。",
    url: "/watch/doenka-valentine",
    slug: "doenka-valentine",
    videoSrc: "/videos/doenka-valentine.mov",
    youtubeId: "QEQHTLUfvjA",
    badge: "MV",
    category: "MV",
    palette: "yellow",
  },
  {
    title: "鬼ヶ島三ツ星レストラン",
    comment: "くりえみAIフィルムコンテスト応募作品。くりえみvs桃太郎の激熱バトル開戦！",
    url: "/watch/onigashima-restaurant",
    slug: "onigashima-restaurant",
    videoSrc: "/videos/onigashima-restaurant.mp4",
    youtubeId: "isCn7JHn52c",
    badge: "コンテスト作品",
    category: "コンテスト作品",
    palette: "green",
  },
];

// 作品集ページに作品を足すときは、この配列に1件追加するだけでOKです。
export const additionalWorks: VideoWork[] = [
  {
    title: "ゆでたまご",
    comment: "お弁当の思い出ありますか？笑えて泣ける衝撃のおふざけMV",
    url: "https://youtube.com/shorts/CyHxbungPps",
    youtubeId: "CyHxbungPps",
    category: "MV",
    palette: "yellow",
  },
  {
    title: "こった姫体操",
    comment: "運動不足のあなた！毎朝この体操をしてダイエットしましょう",
    url: "https://youtube.com/shorts/EdmtJcnNjPM",
    youtubeId: "EdmtJcnNjPM",
    category: "ショート動画",
    palette: "pink",
  },
  {
    title: "もしも猫が猫舌じゃなかったら",
    comment: "AI猫の日にゃんにゃんにゃん選手権。熱湯をガブガブ飲みながら原宿を歩くギャル猫2人",
    url: "https://youtube.com/shorts/dTerzs6yfwo",
    youtubeId: "dTerzs6yfwo",
    category: "コンテスト作品",
    palette: "purple",
  },
  {
    title: "FIRST TAKE ／ケロもんた",
    comment: "カエルが熱唱するクリスマスソング",
    url: "https://youtu.be/2-wB56SjKMo",
    youtubeId: "2-wB56SjKMo",
    category: "AIコメディ",
    palette: "blue",
  },
  {
    title: "スシ、テンプラ、オータニサーン",
    comment: "おすすめおふざけ動画。音声ありと音声なしでまったく違う印象になる魔法をかけてみた",
    url: "https://youtu.be/61-oMSUouGI",
    youtubeId: "61-oMSUouGI",
    category: "AIコメディ",
    palette: "blue",
  },
  {
    title: "こったフェアリーちゃんダンス",
    comment: "学校で踊ってみた",
    url: "https://youtube.com/shorts/JXIYRE4qLos",
    youtubeId: "JXIYRE4qLos",
    category: "ショート動画",
    palette: "pink",
  },
  {
    title: "こったフェアリーちゃんダンス2",
    comment: "おじ魔女と学校で踊ってみた",
    url: "https://youtube.com/shorts/JsW8q2NLvFw",
    youtubeId: "JsW8q2NLvFw",
    category: "ショート動画",
    palette: "pink",
  },
  {
    title: "こったフェアリーちゃんダンス3",
    comment: "おじ魔女と浜辺で踊ってみた",
    url: "https://youtube.com/shorts/bi8lzIrKCAw",
    youtubeId: "bi8lzIrKCAw",
    category: "ショート動画",
    palette: "pink",
  },
  {
    title: "さよならこった姫",
    comment: "こった姫アバター、これが最後",
    url: "https://youtu.be/SUeMb9wvSxs",
    youtubeId: "SUeMb9wvSxs",
    category: "AIコメディ",
    palette: "blue",
  },
  {
    title: "『走れ』",
    comment: "RUN FORWARD : AI VIDEO CONTEST 2026",
    url: "https://youtu.be/4XeEYXimdBY",
    youtubeId: "4XeEYXimdBY",
    category: "コンテスト作品",
    palette: "purple",
  },
  {
    title: "サッカー観戦中の美女",
    comment: "まばたき厳禁、顔面にボールがぶつかる瞬間を見逃すな！",
    url: "https://youtube.com/shorts/_hnvN9WPTlE",
    youtubeId: "_hnvN9WPTlE",
    category: "ショート動画",
    palette: "pink",
  },
  {
    title: "世にも奇妙なカレー屋さん",
    comment: "字幕と音声が違う、カオスなおふざけ動画",
    url: "https://youtu.be/Uro5Q7PE5mM",
    youtubeId: "Uro5Q7PE5mM",
    category: "AIコメディ",
    palette: "blue",
  },
  {
    title: "こった姫のモーニングルーティーン",
    comment: "ほとんどの日本人女性の朝は、だいたいこんな感じ",
    url: "https://youtu.be/E8l8-sJYCIQ",
    youtubeId: "E8l8-sJYCIQ",
    category: "ショート動画",
    palette: "pink",
  },
  {
    title: "お届けものです",
    comment: "配達に行ったら、まさかの展開に...",
    url: "https://youtube.com/shorts/8pl5OvX98Fw",
    youtubeId: "8pl5OvX98Fw",
    category: "ショート動画",
    palette: "pink",
  },
  {
    title: "ひな祭りNEWS",
    comment: "今日は楽しいひな祭り",
    url: "https://youtu.be/NkNS8032-5E",
    youtubeId: "NkNS8032-5E",
    category: "AIコメディ",
    palette: "blue",
  },
  {
    title: "浦島T",
    comment: "イニシャルトークで浦島太郎を再現してみたら...",
    url: "https://youtu.be/_3leMh7EDDc",
    youtubeId: "_3leMh7EDDc",
    category: "AIコメディ",
    palette: "blue",
  },
  {
    title: "イーサリアム",
    comment: "イケハヤ魔法コンテスト。罵尻ロマ子様の声で叫びます",
    url: "https://youtu.be/YLdy80bdD7g",
    youtubeId: "YLdy80bdD7g",
    category: "コンテスト作品",
    palette: "purple",
  },
  {
    title: "JACC 母の日チャリティーコンテスト【爆笑賞】",
    comment: "笑いあり涙あり、「母親の矛盾あるある」を映像化",
    url: "https://youtu.be/MR2EAiiwkkg",
    youtubeId: "MR2EAiiwkkg",
    category: "コンテスト作品",
    palette: "purple",
  },
  {
    title: "メタバースワールドツアー",
    comment: "みんなやっほー、白いアイコンのあの人を投げちゃうよ",
    url: "https://youtu.be/HkEaHM_cTUM",
    youtubeId: "HkEaHM_cTUM",
    category: "AIコメディ",
    palette: "blue",
  },
  {
    title: "野球観戦",
    comment: "10秒間笑いを我慢してください",
    url: "https://youtu.be/7U4ZdN9CI0o",
    youtubeId: "7U4ZdN9CI0o",
    category: "ショート動画",
    palette: "pink",
  },
  {
    title: "妖艶のり子",
    comment: "ドキドキ、いつもと違う一面をご覧ください",
    url: "https://youtu.be/QjxdNA2kuR0",
    youtubeId: "QjxdNA2kuR0",
    category: "ショート動画",
    palette: "pink",
  },
  {
    title: "メタバースワールドツアー２",
    comment: "メタバースで思いっきりふざけたよ",
    url: "https://youtu.be/9Wn08SCsw9c",
    youtubeId: "9Wn08SCsw9c",
    category: "AIコメディ",
    palette: "blue",
  },
  {
    title: "ボリウッドダンス",
    comment: "あまりにもカオス、こったキャラが勢揃い！",
    url: "https://youtu.be/vvLnKJpaQj8",
    youtubeId: "vvLnKJpaQj8",
    category: "ショート動画",
    palette: "pink",
  },
  {
    title: "埋まり幅跳び世界新記録",
    comment: "世界でひとりしかやってないスポーツで世界新記録が出たようです",
    url: "https://youtu.be/lYRrtjcLFFI",
    youtubeId: "lYRrtjcLFFI",
    category: "AIコメディ",
    palette: "blue",
  },
  {
    title: "屁こきアイドル冥土ちゃん",
    comment: "アイドルライブの裏側にカメラが潜入したら後悔した件",
    url: "https://youtu.be/bbzJ2O-ZsfM",
    youtubeId: "bbzJ2O-ZsfM",
    category: "ショート動画",
    palette: "pink",
  },
  {
    title: "世界一のプロの接客",
    comment: "極上の接客でお客様がメロメロになりました",
    url: "https://youtu.be/rPSuTdLBMKA",
    youtubeId: "rPSuTdLBMKA",
    category: "ショート動画",
    palette: "pink",
  },
  {
    title: "リフティング女子",
    comment: "なにも考えずにご覧ください",
    url: "https://youtube.com/shorts/FESjNi58C1E",
    youtubeId: "FESjNi58C1E",
    category: "ショート動画",
    palette: "pink",
  },
];

export const workCatalog: VideoWork[] = [
  ...popularWorks,
  ...additionalWorks,
];

export const awardWorks: VideoWork[] = [
  {
    title: "JACC 母の日チャリティーコンテスト【爆笑賞】",
    comment: "笑いあり涙あり、「母親の矛盾あるある」を映像化",
    url: "https://youtu.be/MR2EAiiwkkg",
    youtubeId: "MR2EAiiwkkg",
    badge: "コンテスト作品",
    category: "コンテスト作品",
    palette: "purple",
  },
];

export const genres = [
  "ショート動画",
  "AIコメディ",
  "MV",
  "コンテスト作品",
];

export const characters: Character[] = [
  {
    name: "のり子",
    role: "海苔の眉毛のカリスマ",
    description: "こった姫から進化した、ミネラル豊富な天然記念物",
    catchphrase: "寝る時もこのポーズだから肩こりエグい",
    palette: "blue",
    image: "/characters/noriko-sheet.jpg",
    imageAlt: "のり子の四面図",
    imagePosition: "18% center",
    sheetUrl: "/characters/noriko-character-sheet.png",
  },
  {
    name: "こった姫",
    role: "自称姫（S級妖怪）",
    description: "なんでもあり、自由すぎる姫",
    catchphrase: "ああああああああ、これバグってるよ",
    palette: "pink",
    image: "/characters/kotta-hime-4view.png",
    imageAlt: "こった姫の四面図",
    imagePosition: "18% center",
    sheetUrl: "/characters/kotta-hime-sheet.jpg",
  },
  {
    name: "こったフェアリーちゃん",
    role: "現場を散らかす妖精",
    description: "話を全部ややこしくする、めんどくさい存在",
    catchphrase: "だいたい魔法でなんとかする予定なのだ",
    palette: "green",
    image: "/characters/kotta-fairy.png",
    imageAlt: "こったフェアリーちゃんの挿絵",
    imagePosition: "center 42%",
    sheetUrl: "/characters/kotta-fairy-character-sheet.png",
  },
];

export const tools = [
  "生成AI",
  "動画編集アプリ",
  "画像生成",
  "音声合成",
  "字幕ツール",
  "思いつきメモ",
];

export const behindNotes: BehindNote[] = [
  {
    title: "ふだん使っているAIツールの話",
    body: "ふだん使っているAIツールの話",
    url: "https://substack.com/@kottaprincess/note/c-262706333?r=89s2ap&utm_source=notes-share-action&utm_medium=web",
  },
];

export const snsLinks = [
  { label: "X", url: "https://twitter.com/kotta_am1020" },
  { label: "YouTube", url: "https://www.youtube.com/@kotta_am1020y" },
  { label: "Instagram", url: "http://instagram.com/kotta_am1020" },
  { label: "TikTok", url: "https://www.tiktok.com/@kotta_am1020?lang=ja-JP" },
  { label: "Substack", url: "https://substack.com/@kottaprincess/notes" },
];
