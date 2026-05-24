# 週7でふざけてます

AIおふざけ動画クリエイター向けの1ページ型ポートフォリオサイトです。

## 作品データの差し替え

作品、キャラ、SNSリンク、制作メモはすべて `data/portfolio.ts` にまとめています。

- `latestWorks`: 最新のおふざけ
- `popularWorks`: 人気のおふざけ
- `genres`: ジャンル別おふざけ
- `characters`: キャラ図鑑
- `tools`: 使用ツール
- `behindNotes`: 制作メモ、没ネタ、失敗作ログ
- `snsLinks`: SNSリンク

動画URLを差し替えるときは、各作品の `url` を自分の投稿URLに変更してください。

## 起動方法

```bash
npm install
npm run dev
```

ブラウザで `http://localhost:3000` を開くと確認できます。

## 公開前の確認

```bash
npm run build
npm audit --audit-level=moderate
```
