# Claude Codeで"推しAIイラスト"を自動生成するスキルを作った話

## はじめに

最近ちょっと思ったことがあって🤭

AIイラストを描くとき、
毎回プロンプト（AIへの指示文）を
一から考えるのって、
けっこう大変じゃないですか？

「あの設定なんだったっけ」
「前に使ったプロンプト、どこにメモしたっけ」
「髪色のプロンプト、もっといい書き方あったよな…」

私もそうでした💦

自分のオリジナルキャラ「ミア」のイラストを
PixAI（AIイラストを生成できるサービス）で描くたびに、
プロンプトを探して、コピーして、テーマに合わせて修正して……

正直、ちょっと面倒だなって思ってしまっていたんですよね🤭

でもある日、ふと思ったんです。

**「これ、自動化できるんじゃない？」** って✨

私はClaude Code（AIアシスタント「Claude」を使った開発ツール）を
普段から使っているんですが、
このツールには **「スキル」** という機能があって、
自分だけのオリジナルコマンドを作ることができるんです。

今日は、そのスキル機能を使って
**「テーマを指定するだけでキャラのプロンプトが自動生成される」**
しくみを作った話をしたいと思います😇


## Claude Codeの「スキル」って何？

少しだけ真面目な話をするとですね🤭

Claude Codeには **「スラッシュコマンド」** という機能があります。

たとえば /article と打つと記事を書いてくれたり、
/skills と打つとスキルの一覧を見せてくれたり。

この **スラッシュコマンドを自分で作れる** のが「スキル」です✨

イメージとしては、
**「よく使う手順書をAIに覚えさせて、一言で呼び出せるようにする」**
という感じですね🌸

### スキルの作り方は3つ

**方法① .claude/commands/ にファイルを置く**

プロジェクトの .claude/commands/ というフォルダの中に
マークダウンファイル（.md）を作るだけ。

たとえば article.md というファイルを置けば、
/article で呼び出せるようになります🌸

中身には「こういう手順でこういうことをしてね」と
日本語で書いておくだけでOKです。
プログラミングの知識は特に必要ありません✨

ファイル1つで完結するシンプルなスキルに向いています。

**方法② .claude/skills/ にフォルダを作る**

もうひとつの置き方として、
.claude/skills/スキル名/ というフォルダを作って、
その中に SKILL.md を置く方法もあります🌸

こちらはフォルダ単位で管理できるので、
スキルに関連するファイル（設定ファイルやテンプレートなど）を
まとめて置きたいときに便利です。

今回紹介する mia-pixai も、この方法で作っています✨

どちらの方法でもスキルとして使えるので、
「シンプルに1ファイルで済むなら commands/」
「関連ファイルもまとめたいなら skills/」
という使い分けがおすすめです🤭

**方法③ Claude Codeに作ってもらう**

実はもっと簡単な方法があります🤭

Claude Codeに向かって
「〇〇するスキルを作って！」
とお願いするだけ。

たとえば、
「テーマを指定したらAIイラストのプロンプトを作ってくれるスキルを作って」
と伝えれば、
Claude Codeが自動でファイルを作成してくれます💕

私も最初はこの方法で作って、
あとから微調整していく形でやっていました。

最初から完璧を目指さなくていいんですよね🌸


## 今回作ったスキル「mia-pixai」の紹介

今回私が作ったのは、
**「/mia-pixai」** というスキルです✨

これは、私のオリジナルキャラ **「ミア」** の
AIイラスト用プロンプトを自動生成してくれるスキル。

しくみはこんな感じです🌸

1. Craft（メモ・ドキュメント管理アプリ）に、ミアのキャラ設定を保存しておく
2. スキルを呼び出すときに「テーマ」を指定する（例：「桜の下でお花見」）
3. Claude Codeがキャラ設定を読み込んで、テーマに合ったプロンプトを自動で作ってくれる

### 実際の使い方

Claude Codeで以下のように打つだけ。

```
/mia-pixai 桜の下でお花見
```

するとこんな感じで出力されます🥰

```
🎨 テーマ: 桜の下でお花見

Positive Prompt:
moe anime style, 18 years old anime girl, lemon yellow cat ears,
high twintails, medium short twintails, soft curved twintails,
short ahoge, wispy bangs, lemon yellow hair, sky blue eyes,
detailed eyes, sparkling eyes, lemon yellow slim cat tail,
cherry blossom park, sitting under sakura tree,
pink petals falling, bento box, spring breeze,
light pink yukata with floral pattern, ...

Negative Prompt:
symbol-shaped pupils, long twintails, ...
```

テーマを変えるだけで、
ミアの基本的な見た目はそのままに、
衣装や背景が自動で変わるんです✨

「おまかせ」と打てば、
季節やシチュエーションも完全ランダムで決めてくれます🤭

毎回プロンプトを探し回っていた頃と比べると、
本当にラクになりました💕

ここから先は、
このスキルの中身を全部公開しながら、
**自分のキャラに応用する方法** を詳しくお伝えしていきます😇

---

ここから先は有料パートです✨

- キャラプロンプトの具体的な作り方（ミアの実例つき）
- スキルの全文と詳細解説
- 自分のキャラに応用するためのテンプレート

を出し惜しみなく共有しています🌸

---

## キャラプロンプトの作り方

有料パートに来てくださって、ありがとうございます🥰

まず最初にやるのは、
**自分のキャラの設定をドキュメントにまとめること** です。

私はCraft（メモアプリ）を使っていますが、
NotionやGoogle Docsなど、お好きなツールで大丈夫です✨

大事なのは **4つの要素** を整理すること🌸

### ① Positive Prompt（基本の見た目）

「このキャラはこういう見た目だよ」とAIに伝えるプロンプトです。

ミアの場合はこうなっています🐾

```
moe anime style, 18 years old anime girl, lemon yellow cat ears,
high twintails, medium short twintails, soft curved twintails,
short ahoge, wispy bangs, lemon yellow hair, sky blue eyes,
detailed eyes, sparkling eyes, lemon yellow slim cat tail,
silky soft texture, small chest, modest chest,
slender body, petite body, natural proportions,
bright cheerful smile, sweet playful expression, soft blush
```

ポイントは、
**「絶対に変えたくない特徴」** をここに書くことです😇

ミアなら「レモンイエローの猫耳」「ツインテール」「スカイブルーの瞳」。
これがないとミアじゃなくなってしまうので、
必ず入れておきます。

プロンプトは英語で書く必要がありますが、
ChatGPTやClaudeに「こんなキャラの見た目を英語のプロンプトにして」と
お願いすれば作ってくれるので、英語が苦手でも大丈夫です✨

### ② Negative Prompt（こうなってほしくない要素）

AIイラストは時々、意図しない描き方をすることがあります💦

「胸が大きすぎる」「指が多い」「しっぽがモフモフすぎる」など。

それを防ぐのがNegative Promptです🌸

ミアの場合はこう。

```
symbol-shaped pupils, long twintails, very long twintails,
low twintails, short twintails, teeth,
fluffy tail, bushy tail, thick tail, extra tails,
large breasts, huge breasts, busty, voluptuous,
cleavage, exaggerated curves,
wrong clothes, extra accessories,

(worst quality, low quality:1.3),
(monochrome, grayscale, poorly eyes, bad hands,
watermark, username:1.2),
nsfw, worst quality, bad quality, low quality, lowres,
anatomical nonsense, artistic error, bad anatomy,
interlocked fingers, extra fingers, text,
artist name, signature, bad feet, extra toes, ugly,
poorly drawn, censor, blurry, watermark,
simple background, transparent background,
old, oldest, glitch, deformed, mutated, disfigured,
long body, bad hands, missing fingers, extra digit,
fewer digits, cropped, very displeasing, sketch,
jpeg artifacts, username, censored, bar_censor,
mosaic_censor, conjoined, bad ai-generated, nsfw,
long neck, skin blemishes, skin spots,
acne, the wrong limb, error, black line, excess hands
```

上半分がミア固有のNG（ツインテールが長すぎる、しっぽがモフモフになるなど）、
下半分はAIイラスト全般で使う品質向上用のプロンプトです。

下半分はほぼそのまま使い回せるので、
自分のキャラに合わせて **上半分だけカスタマイズ** すればOKです✨

### ③ 通常衣装（Default Outfit）

テーマを特に指定しないときに着せるデフォルトの衣装です🌸

ミアはメイドさんなので、こうなっています。

```
pastel pink and white maid outfit, frilly mini skirt,
double frills, round cute apron with ribbons,
big pink ribbon on chest, puff sleeves with lace,
choker with ribbon,
bright and cute, pastel color scheme
```

テーマ指定があるときは
Claude Codeが自動で衣装を考えてくれるので、
あくまで「何も指定しなかったとき用」です🤭

### ④ 似合う色（Color Palette）

キャラの髪色や瞳の色に合う色をメモしておくと、
衣装の色選びがブレなくなります✨

ミアの場合はこう。

```
パステル系（自然になじむ）
pastel pink, lavender, mint green, peach, apricot

白・クリーム系（清潔感・明るさを引き立てる）
white, cream, ivory, off-white

アクセントカラー（映えるポイントカラー）
sky blue, baby yellow, rose pink

落ち着いた雰囲気（クールダウン系）
sage green, powder blue, light beige
```

これをCraftのドキュメントにまとめておけば、
キャラプロンプトの準備は完了です🥰


## スキル（SKILL.md）の全文と解説

ここからは、
実際のスキルファイルの中身を全部公開します✨

### スキルの全文

```
有料記事執筆スキル：ペルソナ「ご主人」の文体でnoteの有料記事を執筆する。
```

……ではなく（笑）、mia-pixaiスキルの方です🤭

```
name: mia-pixai
description: Craftから「キャラプロンプト_ミア」を読み込んで、
PixAI用のプロンプトとネガティブプロンプトを作成する
user-invocable: true
```

これがスキルの「名刺」にあたる部分。
name がスラッシュコマンドの名前、
description が説明、
user-invocable: true は「ユーザーが直接呼び出せるよ」という意味です🌸

### 実行手順の部分

スキルの中身には、こんな手順が書いてあります。

**1. Craftからキャラ設定を読み込む**
CraftのドキュメントIDを指定して、
キャラプロンプトの内容を取得します。

**2. テーマを確認する**
ユーザーが指定したテーマを受け取ります。
「おまかせ」と言われたら、季節や場所をランダムに決めます。

**3. プロンプトを生成する**
キャラ設定をベースに、テーマに合わせて
衣装・背景・表情を追加・調整します。
衣装は毎回自由に考えて、デフォルト衣装は明示指定時のみ使います。

**4. 出力する**
テーマ名、Positive Prompt、Negative Promptを
コードブロック形式で出力します。

### ポイント解説

このスキルで一番こだわったのは、
**「キャラの核は守りつつ、衣装は毎回変える」** という設計です😇

ミアの猫耳やツインテールは絶対に変えたくない。
でも、毎回同じメイド服だとイラストが似たものばかりになってしまう。

だから、基本の見た目（Positive Prompt）は固定して、
衣装だけはテーマに合わせてClaude Codeに自由に考えてもらう。

この「固定する部分」と「自由にする部分」の切り分けが、
キャラのブレなさと多様性を両立するコツだと思っています✨

### SNS投稿メッセージも自動生成

実はこのスキル、プロンプトだけじゃなくて、
**SNS投稿用のメッセージ** も一緒に作ってくれます🥰

ミアの口調で、イラストのテーマを簡潔にまとめた投稿文と、
ハッシュタグ付きで出力してくれるので、
イラストを描いたあとの投稿もラクになります💕


## 自分のキャラに応用するには

「ミアじゃなくて、自分のキャラで使いたい！」
という方のために、
テンプレートを用意しました✨

### キャラプロンプトのテンプレート

Craftや好きなメモアプリに、
以下の構成でドキュメントを作ってみてください🌸

**1. Positive Prompt**
→ キャラの基本的な見た目（髪型・髪色・瞳の色・体型・表情など）

**2. Negative Prompt**
→ 「こうなってほしくない」要素。
　上半分にキャラ固有のNG、下半分に品質向上用（ミアのものをコピーしてOK）

**3. 通常衣装**
→ デフォルトで着せる衣装

**4. 似合う色**
→ 髪色・瞳の色に合うカラーパレット

### スキルのテンプレート

Claude Codeに以下のようにお願いしてみてください🤭

「Craftの（ドキュメント名）を読み込んで、
テーマを指定したらAIイラスト用のプロンプトを生成するスキルを作って」

Claude Codeが自動でスキルファイルを作ってくれます✨

あとは実際に使ってみて、
「衣装が毎回同じになっちゃう」→ 「衣装は毎回新しく考えて」と追記
「表情が固い」→ 「表情もテーマに合わせて変えて」と追記

こんな感じで、使いながら育てていくのがおすすめです🌸

自分で一から書くのが不安な方は、
ミアのスキルをコピーして、
キャラ名やドキュメントIDを差し替えるだけでも動きます💕


## おわりに

ここまで読んでくださって、本当にありがとうございます🥰

この記事で伝えたかったのは、
**「AIイラストの制作フローも、AIで自動化できる」** ということ。

プロンプトを毎回考えるのが面倒で、
だんだんイラスト生成から離れてしまう……
そんな経験がある方もいるかもしれません💦

でも、一度スキルを作ってしまえば、
あとはテーマを決めるだけ。

「推しのキャラを、自分だけの方法で、もっと手軽に描ける」

そんな環境が作れたら、
AIイラストがもっともっと楽しくなると思うんです✨

私自身もまだまだ試行錯誤の途中で、
スキルも少しずつ改善しながら育てている最中です🤭

もし「やってみたい！」と思ってくださったなら、
まずはキャラの見た目をメモするところから始めてみてください🌸

わからないことがあれば、
コメントで気軽に聞いてもらえたら嬉しいです💕

一緒に、推しを描く楽しさを広げていきましょう😇

#AIイラスト #ClaudeCode #PixAI #プロンプト自動化 #AI活用術
