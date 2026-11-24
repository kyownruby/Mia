# 水晶ゆめさん 紹介記事用の材料ファイル

- 対象: https://note.com/yume_suisho
- 取得日: 2026-11-24
- 対象記事: 全1318件（2025-03-25〜2026-11-24）。一覧は `yume_articles.csv`
- このファイルは材料の記録のみ。記事の下書きは含まない

## 取得方法と注意

- プロフィール: `https://note.com/api/v2/creators/yume_suisho`
- 記事一覧: 指定の `contents?kind=note` は600件（100ページ）で打ち切られたため、古い718件は月別アーカイブページ（`https://note.com/yume_suisho/archives/年/月`）をブラウザで開いて取得した。月ごとの件数はアーカイブの件数表示と一致、合計はプロフィールの記事数1318と一致
- 本文: `https://note.com/api/v3/notes/[記事キー]` で1318件すべて取得（1.3秒間隔）
- 有料・メンバー限定などで全文が読めない記事は 328件。これらは無料公開部分だけを対象にした
- 読み方: 全記事のタイトルを通読し、本文は全件をキーワード検索（きょん関連・数字・あいさつ・シリーズ名など）にかけたうえで、節目・自己紹介・シリーズ初回・きょん関連の記事を中心に本文を読んだ。毎朝のオラクルカード記事（約480件）は定型のため、初回・ルナ初登場回・最新回と文言の切り替わり回を読み、残りは検索で確認した
- スキ数は取得時点（2026-11-24）の値。変動する

## A. 基本情報

| 項目 | 内容 | 根拠 |
| --- | --- | --- |
| 表示名 | 水晶ゆめ🔮当てない占い師×夢を灯す創作家 | プロフィールAPI |
| noteのID | yume_suisho | プロフィールAPI |
| note開始日 | 2025-03-25（最初の記事の公開日） | https://note.com/yume_suisho/n/ncbf5abfd3ac9 |
| 記事数 | 1318（変動する） | プロフィールAPI `noteCount`、2026-11-24時点 |
| フォロワー数 | 5694（変動する） | プロフィールAPI `followerCount`、2026-11-24時点 |
| フォロー数 | 5212（変動する） | プロフィールAPI `followingCount`、2026-11-24時点 |
| マガジン数 | 48（変動する） | プロフィールAPI `magazineCount`、2026-11-24時点 |
| 固定記事 | 2026-10-26「「好きから、はじまる」今の私を、ゆめとルナのMVにしました」 https://note.com/yume_suisho/n/n7172bdf27d1b | 記事APIの `is_pinned` |
| 自己紹介記事（プロフィール設定） | 2026-09-27「絵と物語と動画を、コードが書けないまま作っています｜自己紹介」 https://note.com/yume_suisho/n/n3c27a3378ee9 | 記事APIの `is_profiled` |
| フォロー時のメッセージ | ぎゅっ、ありがとう！ | プロフィールAPI `followAppealText` |
| 外部リンク | X: @yume_suisho ／ Instagram: https://www.instagram.com/yume_suisho/ ／ YouTube: https://www.youtube.com/channel/UCN55RrEk1Fyt_8a3uhpLaIg | プロフィールAPI |

### プロフィール文（原文そのまま）

```
コードが書けないまま、AIで絵と物語と動画を作っています🌙
創作の裏側と、相棒ルナとの旅の物語が中心。最近はゲームも。
根っこは「当てない占い」。毎朝オラクルカードを1枚🔮
🎬AIツールのレビュー・PR記事はお問い合わせから
📌メンバーシップ運営／Amazonアソシエイト参加
```

### 画像URL

- アイコン: https://assets.st-note.com/production/uploads/images/330890077/profile_e7c863f050817a0dff0c3d26469b4517.png?fit=bounds&format=jpeg&quality=85&width=330
- ヘッダー（元画像）: https://assets.st-note.com/production/uploads/images/325098119/527581d60fb716d49842a6c62e5aceba.png
- ヘッダー（横長表示用）: https://assets.st-note.com/production/uploads/images/325098119/wallpaper_landscape_527581d60fb716d49842a6c62e5aceba.png

### 自己紹介記事の履歴

「自己紹介」とタイトルにある記事、または最初の記事。現在プロフィールに設定されているのは最後の1本。

- 2025-03-25「はじめてのnoteとサイトマップ（8/15）」 https://note.com/yume_suisho/n/ncbf5abfd3ac9（スキ855・変動する）
- 2026-03-09「【自己紹介】5000人のあなたへ｜HSP元占い師ライター水晶ゆめ｜占い｜推し活｜セルフケア｜繊細さん｜Kindle出版｜毎日投稿｜はじめてのnote」 https://note.com/yume_suisho/n/n90f9635af919（スキ152・変動する）
- 2026-04-13「【自己紹介】元占い師ライター水晶ゆめが40万ビューを越えて伝えること｜占い×セルフケア｜推し活｜note｜Threads｜Patreon｜HSP｜毎日更新｜はじめてのnote」 https://note.com/yume_suisho/n/n1f67afd6bf57（スキ233・変動する）
- 2026-07-09「【自己紹介】「当てる占い」をやめた占い師が、noteで夢を灯すまで」 https://note.com/yume_suisho/n/naa76af1dd333（スキ350・変動する）
- 2026-09-27「絵と物語と動画を、コードが書けないまま作っています｜自己紹介」 https://note.com/yume_suisho/n/n3c27a3378ee9（スキ146・変動する）

### 名前の表記について

- 改名を告知する記事: 不明（全記事を「改名」「名前を変」などで検索したが、本人の改名告知は見つからなかった）
- 記事冒頭の名乗りの表記は時期で変わっている（本文検索の結果）
  - 「水晶夢」: 2025-06-30〜2025-07-27の記事冒頭に出現。例 2025-07-17「少しお知らせ｜しばらく投稿頻度をゆるやかにします」 https://note.com/yume_suisho/n/nfdaab00659f7
  - 「水晶ゆめ」: 2025-08-09の記事で「占いライターの水晶ゆめ🔮です」。 https://note.com/yume_suisho/n/n67a2181d7f65
- 肩書き「当てない占い師×夢を灯す創作家」は2026-07-09の記事で「このたび、名乗りを新しくしました」と報告。 https://note.com/yume_suisho/n/naa76af1dd333

## B. 活動の柱

プロフィール文の「絵」「物語」「動画」「創作の裏側」「相棒ルナ」「ゲーム」「当てない占い・毎朝オラクルカード」「レビュー・PR記事」「メンバーシップ」を軸に整理。マガジンのURLは `https://note.com/yume_suisho/m/[マガジンキー]`。

### 1. 毎朝のオラクルカード（当てない占い）

- 何をしているか: 毎朝オラクルカードを1枚引き、カード名・キーワード・今日のメッセージを載せる記事を出している。2025-12-15からは相棒ルナが登場する4コマ漫画やイラストが付く。自己紹介記事では「いまも『当てない占い師』と名乗っていて、毎朝、オラクルカードを1枚引く記事を書いています」と書かれている。
- 始まった日: 2025-07-28（「あなたの為のオラクルカード🌸」の初回）。その前の2025-07-01〜07-27は毎朝「今日の推し活占い」を投稿
- 関連する記事・マガジン:
  - 初回: 2025-07-28「あなたの為のオラクルカード🌸｜2025年7月28日（月）」 https://note.com/yume_suisho/n/n5ef0498f7ca2
  - 朝の投稿をオラクルカードに切り替える予告: 2025-07-25「ヘッダーとアイコンを変えました！」 https://note.com/yume_suisho/n/n292aad28bd72
  - ルナ初登場回: 2025-12-15「🌸あなたの為のオラクルカード｜2025年12月15日（月）nano banana pro | nano banana | ChatGPT | Gemini | AIイラスト | スピリチュアル | 毎日更新 | オラクルカード | 占い | セルフケア | 水晶ゆめのつぶやき | 朝活 | 心をほどく言葉マガジン」 https://note.com/yume_suisho/n/n089d4a760df1
  - 取得時点の最新回: 2026-11-24「【朝活オラクルカード】水晶ゆめが届ける、今日の心を整える一枚｜2026年11月24日（火）｜占い・セルフケア｜ChatGPT」 https://note.com/yume_suisho/n/nea15a2b71e29
  - マガジン「1日1枚オラクルカード｜毎日にやさしいセルフケア習慣」 https://note.com/yume_suisho/m/m152aee516b65
  - 前身の「今日の推し活占い」初回: 2025-07-01「今日の推し活占い｜2025年7月1日（火）／スタート＆ライトブルーで心クリア」 https://note.com/yume_suisho/n/n6775d3f27b8b ／ マガジン「今日の推し活占い｜あなたらしくを叶える毎日」 https://note.com/yume_suisho/m/mba3807e98a49
  - 「当てない占い師」の説明がある記事: 2026-07-09「【自己紹介】「当てる占い」をやめた占い師が、noteで夢を灯すまで」 https://note.com/yume_suisho/n/naa76af1dd333

### 2. 占術×セルフケア／占い×推し活の記事

- 何をしているか: タロット・月星座・数秘術・ホロスコープ・オラクルカードを「当てる」ためでなく「整える」ために使う記事と、推し活の気持ちを占いで扱う記事。最初の記事で「占術×セルフケア」と「占い×推し活」を2つのメインテーマとして挙げている。2026-09-27の自己紹介では「占いの記事を書く数は、前よりずっと少なくなりました」と書かれている。
- 始まった日: 2025-03-25（最初の記事）。開始直後の2025-03〜05月は占い入門の連載とKindle本の告知が中心
- 関連する記事・マガジン:
  - 最初の記事（2つのメインテーマの説明）: 2025-03-25「はじめてのnoteとサイトマップ（8/15）」 https://note.com/yume_suisho/n/ncbf5abfd3ac9
  - 占い入門連載の第1回: 2025-03-28「占い入門①｜星占い（西洋占星術）を知ろう！基礎知識から日常での活用術」 https://note.com/yume_suisho/n/ndc9a151d7240
  - 推し×星座診断シリーズ第1回: 2025-05-14「【第1回】あなたの推しがやめられない理由──“キャラ性格×星座診断”でわかる心の鏡」 https://note.com/yume_suisho/n/nf9f8174ad50f
  - オラクルカード連載の予告: 2025-07-10「新シリーズ予告｜今日からできるオラクルカード×セルフケア保存ガイド」 https://note.com/yume_suisho/n/n402280b539cd
  - 推し活バイオリズム占いの予告: 2025-06-27「新連載予告｜推し活バイオリズム占い」 https://note.com/yume_suisho/n/n1eb56aaba87f ／ 初回: 2025-07-01「推し活バイオリズム占い｜2025年7月の推し心予報」 https://note.com/yume_suisho/n/ndb30b75e1b1d
  - 入口記事: 2025-07-13「【保存版】占術×セルフケアのすべて｜はじめての人の入門記事」 https://note.com/yume_suisho/n/n2c29ee03ba9a ／ 2025-07-13「【保存版】推し活と占いでつながる世界｜はじめて読む人のための道しるべ」 https://note.com/yume_suisho/n/n094b0c713363
  - マガジン「占術 × セルフケア」 https://note.com/yume_suisho/m/m3642193cf92f ／ マガジン「占い×推し活」 https://note.com/yume_suisho/m/mba13790b8238
  - マガジン「推し活バイオリズム占い｜私の推し心と、めぐる季節」 https://note.com/yume_suisho/m/m025a4f26a61c
  - 推し活マガジンを休むと書いた記事: 2026-05-15「好きがどんどん増えていって、このマガジンをひとまず休むことにした」 https://note.com/yume_suisho/n/n46ef14bde981

### 3. AIで描く絵（AIイラスト）

- 何をしているか: AIで生成したイラストを記事にしている。「夜空の癒し精霊」は精霊のイラストと短い物語のシリーズで、#12以降はなぎ🍀さんとのコラボ表記がある。2026年3月からはThreadsに毎日イラストを投稿し、ネオンの光で描くイラスト（狐の女の子、ゴスロリ、和装など）を「夜色アトリエ」で作品と作り方として紹介した。
- 始まった日: 2025-07-31（アート系マガジンへの初参加記事）。「夜空の癒し精霊」は2025-08-10開始
- 関連する記事・マガジン:
  - アートマガジン初参加: 2025-07-31「アートマガジン初参加｜大人の浴衣姿と花火大会イラスト」 https://note.com/yume_suisho/n/n61ab7e139214
  - 夜空の癒し精霊 #1: 2025-08-10「夜空の癒し精霊 #1｜三日月のランタン少女」 https://note.com/yume_suisho/n/n25d1ee444bae ／ 取得時点の最新 #21: 2026-04-30「夜空の癒し精霊 #21｜眠花の精霊 ネムフィア【なぎさんとコラボ】 | AIイラスト | nijijourney | GPT Image 2.0 | 水晶ゆめのつぶやき | 心をほどく言葉マガジン | 白銀の髪同盟」 https://note.com/yume_suisho/n/n1a9e5215fdef
  - マガジン「夜空の癒し精霊｜心に灯るアートと小さな物語」 https://note.com/yume_suisho/m/mc0f4e8a67fe3
  - 使用ツールの移行記録: 2025-10-04「Leonardo AIからMidjourneyへ｜私のAIイラスト制作移行記録 #AIイラスト #AIアート #NijiJourney」 https://note.com/yume_suisho/n/n13d03aa395dd
  - Threads投稿について書かれたプロンプト集（「投稿を始めたのは3月から」）: 2026-03-26「抜刀乙女など、niji7プロンプト集【Threads評価済5選】」 https://note.com/yume_suisho/n/nb08281ad7dfb
  - 夜色アトリエ #1: 2026-07-08「桜色の狐っ娘、ネオンの夜に咲く｜夜色アトリエ #1」 https://note.com/yume_suisho/n/nad986d75fbe7 ／ #9: 2026-09-04「かわいいより、少し妖艶に｜夜色アトリエ #9」 https://note.com/yume_suisho/n/n5e5185ec0815
  - マガジン「夜色アトリエ｜作品と、その作り方」 https://note.com/yume_suisho/m/m899b10afc357（有料マガジン）

### 4. 相棒ルナと「私とルナのタロット工房」

- 何をしているか: 月の精霊ルナを相棒として記事に登場させている。「私とルナの22枚タロット」は大アルカナ22枚を0番「愚者」から順に、ゆめとルナのイラストで作る企画で、毎回3案を出して読者の投票で1枚を決める形。XXI「世界」まで公開されている。
- 始まった日: ルナの登場は2025-12-15。タロット工房は2026-03-20開始、XXI「世界」は2026-11-05
- 関連する記事・マガジン:
  - ルナ初登場: 2025-12-15「🌸あなたの為のオラクルカード｜2025年12月15日（月）nano banana pro | nano banana | ChatGPT | Gemini | AIイラスト | スピリチュアル | 毎日更新 | オラクルカード | 占い | セルフケア | 水晶ゆめのつぶやき | 朝活 | 心をほどく言葉マガジン」 https://note.com/yume_suisho/n/n089d4a760df1
  - 等身のルナと新アイコンの報告: 2025-12-29「【ご報告】noteのアイコンが新しくなりました🌙 きょんちゃんが紡いでくれた、私とルナの物語」 https://note.com/yume_suisho/n/n8fd16cca6daf
  - ルナの紹介記事: 2026-09-06「ルナって、だれ？｜私の相棒、月の精霊の話」 https://note.com/yume_suisho/n/n85184abc03a1
  - タロット工房の最初の告知（0.愚者）: 2026-03-20「【新企画】私とルナの22枚タロット｜0.愚者から始まる心の旅路。」 https://note.com/yume_suisho/n/n736ec15f503c
  - XXI.世界: 2026-11-05「私とルナの22枚タロット｜XXI.世界。ここまで、来られました。」 https://note.com/yume_suisho/n/nfe4f487c2f91
  - マガジン「私とルナのタロット工房｜夜空で紡ぐ物語」 https://note.com/yume_suisho/m/m8901898665e1

### 5. 物語（短編小説・ショートショート）

- 何をしているか: ゆめとルナの旅の「あいだ」を書く読み切り短編「月の栞」と、企画参加のショートショートを書いている。あかりさんの「アカリウムお題ガチャ」、雪綴ゆきさんの企画『地図にない灯り』への参加作がある。架空の深海生物を紹介する「アカリウム深層 新種発見」も連続で投稿している。
- 始まった日: 「月の栞」は2026-07-20（幕間「プロローグ」）。ショートショートのマガジン内でいちばん古い記事は2026-08-31
- 関連する記事・マガジン:
  - 月の栞・プロローグ: 2026-07-20「ゆめとルナの旅・幕間「プロローグ」旅立ちの夜と、月の栞」 https://note.com/yume_suisho/n/nc8095d43f265
  - マガジン「ゆめとルナの旅・幕間｜月の栞」 https://note.com/yume_suisho/m/m8216630093ec
  - アカリウムお題ガチャの最初の参加作: 2026-08-31「【アカリウムお題ガチャ】風がゼンマイを巻いていた｜ショートショート」 https://note.com/yume_suisho/n/nfbcf0ac6ffe6
  - 『地図にない灯り』の最初の参加作: 2026-10-22「手袋の片方を、三日あずかっていました｜駅のホーム｜地図にない灯り」 https://note.com/yume_suisho/n/nb835ca7ca3d2
  - マガジン「夜に読む、ショートショート」 https://note.com/yume_suisho/m/ma34e574863ee
  - アカリウム深層 新種発見の1本目: 2026-09-14「アカリウム深層 新種発見｜ツキシズクウミウシ」 https://note.com/yume_suisho/n/nbd3e7d7d39c9

### 6. 動画（AIアニメ・MV）

- 何をしているか: Pollo AIなどの動画生成AIでアニメ動画を作り、制作の過程を記事にしている。連載「ゆめとルナがゆく タロットの世界」は、ゆめとルナがタロット大アルカナの世界を旅する全24話予定のショートアニメで、Pollo AIのPR記事と明記されている。固定記事では自己紹介のMV「好きから、はじまる」を公開している。
- 始まった日: Pollo AIの最初の記事は2025-11-27。アニメ連載は2026-05-18始動（プロローグ動画を掲載）、第1話は2026-05-21
- 関連する記事・マガジン:
  - Pollo AIの最初の記事: 2025-11-27「【Pollo 2.0】静止画が動き出す瞬間に、心が震えた。AI動画生成で「伝わらなかった想い」が形になる体験✨」 https://note.com/yume_suisho/n/nfb596059bf9d
  - 連載の始動記事（プロローグ動画・キャラクター紹介）: 2026-05-18「ゆめとルナが生まれた日。Pollo AIで新タロットシリーズ始動」 https://note.com/yume_suisho/n/n647f64b1bc5d
  - 第1話「愚者」: 2026-05-21「ゆめとルナの旅・第1話「愚者」怖いけど行ってみたいから」 https://note.com/yume_suisho/n/nd1d0ecdd51c5
  - 取得時点の最新話 第12話「正義」: 2026-10-09「ゆめとルナの旅・第12話「正義」｜自分で選んだのに、迷う夜に」 https://note.com/yume_suisho/n/nabffa9b3f3f4
  - マガジン「ゆめとルナがゆく タロットの世界｜Pollo AIアニメ」 https://note.com/yume_suisho/m/md94743d5a046
  - マガジン「Pollo AI｜動画・画像生成AI活用マガジン」 https://note.com/yume_suisho/m/m23133bedfef8
  - 自己紹介MV（固定記事）: 2026-10-26「「好きから、はじまる」今の私を、ゆめとルナのMVにしました」 https://note.com/yume_suisho/n/n7172bdf27d1b

### 7. 創作の裏側（コードが書けないまま道具を作る）

- 何をしているか: AIに手伝ってもらいながら作った道具（色違い作成、アップスケールと名前付け、絵コンテ作成など）と、その作り方の記録を記事にしている。2026-09-27の自己紹介で「いちばん大きな柱」「いまは占いの記事より、こちらの記事のほうがたくさんの方に読んでもらえています」と書かれている。
- 始まった日: マガジン内でいちばん古い記事は2025-11-24。マガジンの入口記事は2026-09-14
- 関連する記事・マガジン:
  - マガジン入口記事: 2026-09-14「コードが書けない私の、創作の裏側を並べました」 https://note.com/yume_suisho/n/ne5d6fad00f72
  - マガジン内の最古の記事: 2025-11-24「初心者の私がStable Diffusionローカル環境に挑戦した記録」 https://note.com/yume_suisho/n/n0883f85bff8a
  - Claude Codeでサイトとゲームを作った記事: 2026-08-09「Claude Codeで、はじめてサイトとゲームを作った話」 https://note.com/yume_suisho/n/nc36b0c86eb9e
  - 絵コンテの道具: 2026-09-07「AI動画の絵コンテを、ブラウザだけで組めるようにしました」 https://note.com/yume_suisho/n/n6258f1ffbdf4
  - スキ数が多い記事: 2026-09-14「ChatGPT Images 2.5に記事を貼るだけで、図解もマンガも作れました」 https://note.com/yume_suisho/n/n5458a0477656
  - マガジン「コードが書けない私の、創作の裏側」 https://note.com/yume_suisho/m/m5dc87ec1d831

### 8. ゲーム制作

- 何をしているか: AIを使ってブラウザで遊べるゲームを作り、作り方を記事にしている。2026-10-16の案内記事には「ゲームも、これまでに3つ作りました」とある。
- 始まった日: 2026-08-09（はじめてサイトとゲームを作った記事）
- 関連する記事・マガジン:
  - 最初の記事: 2026-08-09「Claude Codeで、はじめてサイトとゲームを作った話」 https://note.com/yume_suisho/n/nc36b0c86eb9e
  - 30秒のゲーム「星あつめ」: 2026-10-06「AIゲーム制作で、今度は自分で決めた30秒のゲームを作りました」 https://note.com/yume_suisho/n/n3e0bb3121bab
  - 2026-10-12「AIゲーム制作で、エイムが上手くなる…かもしれないゲームを作りました」 https://note.com/yume_suisho/n/n60b9436a0290
  - 2026-10-21「浴衣のゆめとルナと、45秒の花火を咲かせるゲームを作りました」 https://note.com/yume_suisho/n/n7b4dded7cfcf
  - ゲームのPV: 2026-11-16「作ったゲームの見せ方に迷って、PVを作ってみました」 https://note.com/yume_suisho/n/n3b9a75465de8

### 9. AIツールのレビュー・PR記事／お仕事

- 何をしているか: AIツールを実際に使ったレビュー記事を書いており、PR記事にはタイトルや冒頭に【PR】と明記している。お仕事の依頼ページでは「AIアート×物語の連載企画・制作」「AIツールのレビュー・メイキング記事」「記事用イラストの制作」の3つを挙げている。
- 始まった日: 仕事依頼の最初の記事は2025-10-26。Pollo AIの最初の記事（2025-11-27）の本文に「※この記事はPollo AIさんのPR記事です。」とある。タイトルに【PR】が付く記事は2026-10-15から
- 関連する記事・マガジン:
  - 最初の仕事依頼記事: 2025-10-26「【仕事依頼受付中】占い×セルフケア記事・推し活コラム・AIツールレビュー記事を承ります」 https://note.com/yume_suisho/n/n2cb3ab18fc5f
  - 現在の仕事依頼記事（実績の記載あり）: 2026-08-04「【お仕事のご依頼】AIアート×物語の連載・記事制作を承ります」 https://note.com/yume_suisho/n/n9f57de92d6f9
  - 本文にPR記事と書かれた最初の記事: 2025-11-27「【Pollo 2.0】静止画が動き出す瞬間に、心が震えた。AI動画生成で「伝わらなかった想い」が形になる体験✨」 https://note.com/yume_suisho/n/nfb596059bf9d
  - タイトルに【PR】が付く最初の記事: 2026-10-15「【PR】Pollo AIで日本2Dバトルアニメを制作！剣と魔法の2作品で分かったこと」 https://note.com/yume_suisho/n/n8773214a902f

### 10. メンバーシップ・共同運営マガジン

- 何をしているか: noteのメンバーシップ「星と心のアトリエ」を運営している。メンバー向けに掲示板、朝活記事や週1回のまとめ記事でのメンバー紹介、Discord「星の談話室」がある。フォロワー向けの共同運営マガジン「水晶ゆめと紡ぐ、心をほどく言葉マガジン」も開いている。
- 始まった日: メンバーシップの開始日時は2025-10-11（メンバーシップAPIの `startAt`）。共同運営マガジンの告知は2025-11-01
- 関連する記事・マガジン:
  - メンバーシップ: 星と心のアトリエ https://note.com/yume_suisho/membership
  - メンバーシップの紹介記事（2025-10-13公開、冒頭に「2026年10月9日に、特典と公開ルールを更新しました」）: 2025-10-13「【10月9日更新】星と心のアトリエ ─ 占いと推し活で、心をやさしく整える場所」 https://note.com/yume_suisho/n/n435135055514
  - メンバーシップの案内記事（メンバーシップの説明記事に設定）: 2026-10-16「つくることが好きなあなたと、同じ作業部屋で｜星と心のアトリエのご案内」 https://note.com/yume_suisho/n/ne37cbfee1b1f
  - プラン（紹介記事の記載）: セルフケア読み放題 ¥500/月、推し活読み放題 ¥500/月、星の書庫フルアクセス ¥800/月
  - Discord「星の談話室」を作った記事: 2026-11-14「Discordで話せなかった私が、話さなくてもいい場所を作りました」 https://note.com/yume_suisho/n/nc5c76d8c71ce
  - 「今週のメンバーさん紹介」初回: 2026-10-18「今週のメンバーさん紹介｜何の人か分からない、が3人いた週でした」 https://note.com/yume_suisho/n/nfbeb6cdc8d72
  - 共同運営マガジンの募集記事: 2025-11-01「一人じゃない – みんなで紡ぐ、言葉の場所を作りました #共同運営マガジン #マガジン開設 #投稿仲間募集 #心をほどく言葉マガジン」 https://note.com/yume_suisho/n/n3650be7d8f7c
  - マガジン「水晶ゆめと紡ぐ、心をほどく言葉マガジン」 https://note.com/yume_suisho/m/md339b5f2cba7（参加条件は「フォロワーさんであること」と記載）
  - 有料マガジンの案内: 2025-12-17「水晶ゆめの有料マガジンへようこそ🌙」 https://note.com/yume_suisho/n/nb81f6f0fa726 ／ マガジン「水晶ゆめの有料マガジン」 https://note.com/yume_suisho/m/m88c60f6cf9a2

### 11. Kindle出版・Amazonアソシエイト

- 何をしているか: note以前はAmazon Kindleで電子書籍を出版していたと最初の記事に書かれている。記事内では「700冊」という数字が繰り返し出てくる。記事にはAmazonの商品リンクが載っている。
- 始まった日: 不明（Kindle出版を始めた日は記事から確認できなかった）
- 関連する記事・マガジン:
  - 最初の記事（「これまで私はAmazon Kindleで電子書籍の出版に取り組んできましたが、今は活動の場所をnoteに移しました」）: https://note.com/yume_suisho/n/ncbf5abfd3ac9
  - 2026-01-05「はじめてのKindle出版ガイド」 https://note.com/yume_suisho/n/n216b9926890d
  - 2026-01-13「700冊出版してきた中で、読者に手に取っていただいた本たち」 https://note.com/yume_suisho/n/n138154473465

### 企画

- **#ゆめきょんオラクル（二つ名つき自己紹介カード）**: きょん(るびぃ)さんとのコラボ企画。告知: 2026-08-13「【コラボ企画】コピペだけで作れる「二つ名つき自己紹介カード」──月夜版のプロンプトを公開🌙 #ゆめきょんオラクル」 https://note.com/yume_suisho/n/n2728eb01a511 ／ お礼と参加者紹介: 2026-08-20「【#ゆめきょんオラクル】参加してくださったみなさんへ、お礼と紹介を🌙」 https://note.com/yume_suisho/n/na4df43fd979c （詳細はE）
- **私とルナの22枚タロット**: 読者投票で1枚を決める参加型企画。告知: 2026-03-20「【新企画】私とルナの22枚タロット｜0.愚者から始まる心の旅路。」 https://note.com/yume_suisho/n/n736ec15f503c
- **共同運営マガジンの参加者募集**: 2025-11-01「一人じゃない – みんなで紡ぐ、言葉の場所を作りました #共同運営マガジン #マガジン開設 #投稿仲間募集 #心をほどく言葉マガジン」 https://note.com/yume_suisho/n/n3650be7d8f7c

### 自分のマガジン一覧（48本）

「最初の記事」は、ゆめさん自身の記事のうち、そのマガジンに入っているいちばん古いもの。マガジンの開設日そのものはAPIから取得できなかったため不明。記事数は変動する。

| マガジン名 | URL | 価格 | 記事数 | 最初の記事（公開日・URL） |
| --- | --- | --- | --- | --- |
| 星と心を整えるセルフケア占い便り | https://note.com/yume_suisho/m/mb04e4950ecc7 | ¥500 | 94 | 2025-05-11 https://note.com/yume_suisho/n/n9cb868eb7d3f |
| 月の灯に寄り添う、推し心セラピー | https://note.com/yume_suisho/m/m4a7d3e0a49ff | ¥500 | 59 | 2025-05-14 https://note.com/yume_suisho/n/nf9f8174ad50f |
| 水晶ゆめと紡ぐ、心をほどく言葉マガジン | https://note.com/yume_suisho/m/md339b5f2cba7 | 無料 | 34265 | 2025-10-04 https://note.com/yume_suisho/n/n13d03aa395dd |
| あなたのスキ♡届いています！ | https://note.com/yume_suisho/m/m1525f77c2703 | 無料 | 8220 | 2026-05-12 https://note.com/yume_suisho/n/nfe2ac3b3622a |
| あなたの夢を応援したい | https://note.com/yume_suisho/m/m09daacbcaf14 | 無料 | 1110 | 自分の記事なし（他の人の記事を集めたマガジン） |
| 共感＆学びのnote集 | https://note.com/yume_suisho/m/m41a87f2be550 | 無料 | 2161 | 自分の記事なし（他の人の記事を集めたマガジン） |
| 1日1枚オラクルカード｜毎日にやさしいセルフケア習慣 | https://note.com/yume_suisho/m/m152aee516b65 | 無料 | 480 | 2025-07-28 https://note.com/yume_suisho/n/n5ef0498f7ca2 |
| 水晶ゆめの有料マガジン | https://note.com/yume_suisho/m/m88c60f6cf9a2 | ¥15340 | 99 | 2025-05-11 https://note.com/yume_suisho/n/n9cb868eb7d3f |
| 感謝のnote | https://note.com/yume_suisho/m/m87e6981ac805 | 無料 | 54 | 2025-05-09 https://note.com/yume_suisho/n/nb8f01848b531 |
| Pollo AI｜動画・画像生成AI活用マガジン | https://note.com/yume_suisho/m/m23133bedfef8 | 無料 | 47 | 2025-11-27 https://note.com/yume_suisho/n/nfb596059bf9d |
| 夜に読む、ショートショート | https://note.com/yume_suisho/m/ma34e574863ee | 無料 | 17 | 2026-08-31 https://note.com/yume_suisho/n/nfbcf0ac6ffe6 |
| コードが書けない私の、創作の裏側 | https://note.com/yume_suisho/m/m5dc87ec1d831 | 無料 | 35 | 2025-11-24 https://note.com/yume_suisho/n/n0883f85bff8a |
| ゆめとルナがゆく タロットの世界｜Pollo AIアニメ | https://note.com/yume_suisho/m/md94743d5a046 | 無料 | 17 | 2026-05-18 https://note.com/yume_suisho/n/n647f64b1bc5d |
| 🌸わたしの推しイラスト便り | https://note.com/yume_suisho/m/mdad20c12fd0d | 無料 | 166 | 自分の記事なし（他の人の記事を集めたマガジン） |
| 私とルナのタロット工房｜夜空で紡ぐ物語 | https://note.com/yume_suisho/m/m8901898665e1 | 無料 | 22 | 2026-03-20 https://note.com/yume_suisho/n/n736ec15f503c |
| ゆめとルナの旅・幕間｜月の栞 | https://note.com/yume_suisho/m/m8216630093ec | 無料 | 7 | 2026-07-20 https://note.com/yume_suisho/n/nc8095d43f265 |
| 数字とわたしを整える、数秘セルフケアのすすめ | https://note.com/yume_suisho/m/mb2980b6ff478 | 無料 | 37 | 2025-05-29 https://note.com/yume_suisho/n/nbab175f57b8f |
| 推し活バイオリズム占い｜私の推し心と、めぐる季節 | https://note.com/yume_suisho/m/m025a4f26a61c | 無料 | 17 | 2025-06-27 https://note.com/yume_suisho/n/n1eb56aaba87f |
| 気にしすぎと言われた夜に｜繊細さんの心を守る言葉 | https://note.com/yume_suisho/m/m4a660e4a29ef | ¥980 | 17 | 2025-06-24 https://note.com/yume_suisho/n/nf44145ba149f |
| 占術×セルフケア大全 | https://note.com/yume_suisho/m/m59158e3a1b41 | ¥2250 | 19 | 2025-05-11 https://note.com/yume_suisho/n/n9cb868eb7d3f |
| 月のサイクルで見つける、私だけの整え方 | https://note.com/yume_suisho/m/m093906ef476f | 無料 | 39 | 2025-05-12 https://note.com/yume_suisho/n/nc539357d9730 |
| 夜色アトリエ｜作品と、その作り方 | https://note.com/yume_suisho/m/m899b10afc357 | ¥1300 | 9 | 2026-07-08 https://note.com/yume_suisho/n/nad986d75fbe7 |
| 【保存版】タロットで整える、やさしいセルフケア習慣 | https://note.com/yume_suisho/m/m72599e845834 | ¥2400 | 38 | 2025-05-11 https://note.com/yume_suisho/n/n9cb868eb7d3f |
| タロットで整える、やさしいセルフケア習慣 | https://note.com/yume_suisho/m/m843f37fc2521 | 無料 | 39 | 2025-05-11 https://note.com/yume_suisho/n/n9cb868eb7d3f |
| ホロスコープで紐解く、あなたの本質セルフケア | https://note.com/yume_suisho/m/m19ac79d64c18 | 無料 | 37 | 2025-06-13 https://note.com/yume_suisho/n/na6c4f6c83206 |
| 心を映す「推し診断＆占いラボ」 | https://note.com/yume_suisho/m/m51cdca0c3c93 | ¥1950 | 55 | 2025-05-14 https://note.com/yume_suisho/n/nf9f8174ad50f |
| 心を映す「推し診断ラボ」 | https://note.com/yume_suisho/m/me1729c45bf52 | 無料 | 52 | 2025-05-14 https://note.com/yume_suisho/n/nf9f8174ad50f |
| 【保存版】自分を癒すオラクルカードの使い方 | https://note.com/yume_suisho/m/md219a006fb86 | ¥2700 | 45 | 2025-07-10 https://note.com/yume_suisho/n/n402280b539cd |
| 自分を癒すオラクルカードの使い方マガジン | https://note.com/yume_suisho/m/m6a2e035fdfaf | 無料 | 46 | 2025-07-10 https://note.com/yume_suisho/n/n402280b539cd |
| 【保存版】ホロスコープで紐解く、本質セルフケア | https://note.com/yume_suisho/m/mfb1e84140e13 | ¥2000 | 31 | 2025-06-13 https://note.com/yume_suisho/n/na6c4f6c83206 |
| 【保存版】数字とわたしを整える、数秘セルフケア | https://note.com/yume_suisho/m/m1b302496329d | ¥1900 | 31 | 2025-05-29 https://note.com/yume_suisho/n/nbab175f57b8f |
| 【保存版】月のサイクルで見つける、私だけの整え方 | https://note.com/yume_suisho/m/m32202540cb30 | ¥2450 | 37 | 2025-05-12 https://note.com/yume_suisho/n/nc539357d9730 |
| 大人の推し活セルフケア室 | https://note.com/yume_suisho/m/m3417cfea5d84 | ¥1500 | 41 | 2025-06-02 https://note.com/yume_suisho/n/n2c1d8a1ca2bf |
| 大人の推し活モヤモヤ相談室──占いと共感で、心を整える | https://note.com/yume_suisho/m/mc57a829c02db | 無料 | 39 | 2025-06-11 https://note.com/yume_suisho/n/n486e66d7f56b |
| やさしい占いセルフケア便り｜占い部参加記録 | https://note.com/yume_suisho/m/md73c995b9a13 | 無料 | 17 | 2025-06-22 https://note.com/yume_suisho/n/ndff17e90bffa |
| 占い×推し活 | https://note.com/yume_suisho/m/mba13790b8238 | 無料 | 112 | 2025-05-14 https://note.com/yume_suisho/n/nf9f8174ad50f |
| 夜空の癒し精霊｜心に灯るアートと小さな物語 | https://note.com/yume_suisho/m/mc0f4e8a67fe3 | 無料 | 21 | 2025-08-10 https://note.com/yume_suisho/n/n25d1ee444bae |
| 占術 × セルフケア | https://note.com/yume_suisho/m/m3642193cf92f | 無料 | 186 | 2025-04-12 https://note.com/yume_suisho/n/nf30fc3bae8e3 |
| 夜の推し占いラボ | https://note.com/yume_suisho/m/m766b82adca65 | 無料 | 11 | 2025-08-11 https://note.com/yume_suisho/n/n4cff82ae2292 |
| 推し活がもっと愛おしくなるノート術──テンプレ＆実践ヒント集 | https://note.com/yume_suisho/m/mf1d4cf3fc6e4 | 無料 | 8 | 2025-06-02 https://note.com/yume_suisho/n/n2c1d8a1ca2bf |
| 有料note | https://note.com/yume_suisho/m/m655d5bffce31 | 無料 | 18 | 2025-05-18 https://note.com/yume_suisho/n/nc53e0fcc623b |
| 数秘術 | https://note.com/yume_suisho/m/mf333e9f0a5ee | 無料 | 10 | 2025-04-02 https://note.com/yume_suisho/n/n196817c84d31 |
| 星座の占い師たちが灯す、夜の物語 | https://note.com/yume_suisho/m/mba2e54a0440c | 無料 | 1 | 2025-11-07 https://note.com/yume_suisho/n/na8c30edfd592 |
| 今日の推し活占い｜あなたらしくを叶える毎日 | https://note.com/yume_suisho/m/mba3807e98a49 | 無料 | 27 | 2025-07-01 https://note.com/yume_suisho/n/n6775d3f27b8b |
| 西洋占星術 | https://note.com/yume_suisho/m/md2618c23d452 | 無料 | 43 | 2025-03-26 https://note.com/yume_suisho/n/nb9b7e3fd3648 |
| 心を映す“推しキャラ”診断 ─ 12星座でわかるあなたの本音 | https://note.com/yume_suisho/m/m4cdf5dd7e0a2 | ¥500 | 15 | 2025-05-14 https://note.com/yume_suisho/n/nf9f8174ad50f |
| タロット占い | https://note.com/yume_suisho/m/me668c20eac8e | 無料 | 9 | 2025-03-27 https://note.com/yume_suisho/n/n39136c01f913 |
| 東洋占い | https://note.com/yume_suisho/m/m0c83006fe91f | 無料 | 11 | 2025-04-15 https://note.com/yume_suisho/n/nabd1d8ea8767 |

## C. 時系列

| 日付 | できごと | 根拠の記事URL |
| --- | --- | --- |
| 2025-03-25 | note開始（最初の記事）。Kindle出版からnoteへ活動の場所を移したと記載 | https://note.com/yume_suisho/n/ncbf5abfd3ac9 |
| 2025-03-28 | 占い入門の連載を開始 | https://note.com/yume_suisho/n/ndc9a151d7240 |
| 2025-05-10 | note大学でビュー数が伸びたことを報告する記事 | https://note.com/yume_suisho/n/n8fc96c97cdf3 |
| 2025-05-14 | 推し×星座診断のシリーズ第1回 | https://note.com/yume_suisho/n/nf9f8174ad50f |
| 2025-06-27 | 新連載「推し活バイオリズム占い」を予告 | https://note.com/yume_suisho/n/n1eb56aaba87f |
| 2025-07-01 | 毎朝の「今日の推し活占い」を開始（〜2025-07-27） | https://note.com/yume_suisho/n/n6775d3f27b8b |
| 2025-07-10 | オラクルカード連載を予告 | https://note.com/yume_suisho/n/n402280b539cd |
| 2025-07-17 | 朝の投稿以外をしばらく休むと告知 | https://note.com/yume_suisho/n/nfdaab00659f7 |
| 2025-07-25 | ヘッダーとアイコンを変更。朝の投稿をオラクルカードの記事に変える予定と記載 | https://note.com/yume_suisho/n/n292aad28bd72 |
| 2025-07-28 | 毎朝のオラクルカード記事を開始 | https://note.com/yume_suisho/n/n5ef0498f7ca2 |
| 2025-07-31 | アート系マガジンに初参加（AIイラストの記事） | https://note.com/yume_suisho/n/n61ab7e139214 |
| 2025-08-09 | アイコンを再度変更 | https://note.com/yume_suisho/n/n67a2181d7f65 |
| 2025-08-10 | 「夜空の癒し精霊」#1 | https://note.com/yume_suisho/n/n25d1ee444bae |
| 2025-08-30 | 「遠回りの中で見つけた支え」公開（タイトルに【12/18更新】） | https://note.com/yume_suisho/n/nfe19c452d432 |
| 2025-10-04 | Leonardo AIからMidjourneyへの移行を記録 | https://note.com/yume_suisho/n/n13d03aa395dd |
| 2025-10-13 | メンバーシップ「星と心のアトリエ」の紹介記事（メンバーシップ開始はAPI上2025-10-11） | https://note.com/yume_suisho/n/n435135055514 |
| 2025-10-26 | 仕事依頼の受付記事を公開 | https://note.com/yume_suisho/n/n2cb3ab18fc5f |
| 2025-11-01 | 共同運営マガジン「水晶ゆめと紡ぐ、心をほどく言葉マガジン」を開設、参加者を募集 | https://note.com/yume_suisho/n/n3650be7d8f7c |
| 2025-11-08 | メンバーシップに参加したきょん(るびぃ)さんの紹介記事 | https://note.com/yume_suisho/n/ncb4e396f89b3 |
| 2025-11-13 | スマートニュースに記事が掲載されたと報告 | https://note.com/yume_suisho/n/nc2762d899a09 |
| 2025-11-27 | Pollo AIの最初の記事 | https://note.com/yume_suisho/n/nfb596059bf9d |
| 2025-12-15 | 相棒ルナが朝活記事に初登場 | https://note.com/yume_suisho/n/n089d4a760df1 |
| 2025-12-17 | 「水晶ゆめの有料マガジン」を案内 | https://note.com/yume_suisho/n/nb81f6f0fa726 |
| 2025-12-29 | noteアイコンを変更（きょんさん制作）。等身のルナを公開 | https://note.com/yume_suisho/n/n8fd16cca6daf |
| 2025-12-31 | 2025年の振り返り（総ビュー286,606ほか） | https://note.com/yume_suisho/n/nad7a07ba413e |
| 2026-01-10 | 総ビュー30万突破を報告 | https://note.com/yume_suisho/n/nc4614d1ba871 |
| 2026-03-09 | フォロワー5000人を報告（自己紹介記事） | https://note.com/yume_suisho/n/n90f9635af919 |
| 2026-03-20 | 新企画「私とルナの22枚タロット」開始 | https://note.com/yume_suisho/n/n736ec15f503c |
| 2026-03-26 | Threadsへのイラスト投稿を3月から始めたと記載 | https://note.com/yume_suisho/n/nb08281ad7dfb |
| 2026-04-07 | 「新しいステージへの準備」の記事 | https://note.com/yume_suisho/n/n7c056955c418 |
| 2026-04-13 | 全体ビュー40万超えを報告（自己紹介記事） | https://note.com/yume_suisho/n/n1f67afd6bf57 |
| 2026-04-27 | 全体スキ5万超えを報告 | https://note.com/yume_suisho/n/n4d2fd2b8520a |
| 2026-05-09 | 「新しい職場に来て、もう1ヶ月」と記載。ThreadsとPatreonでの発信を始めたとも記載 | https://note.com/yume_suisho/n/nea4d23f9459c |
| 2026-05-15 | 推し活のマガジンをひとまず休むと記載 | https://note.com/yume_suisho/n/n46ef14bde981 |
| 2026-05-18 | アニメ連載「ゆめとルナがゆく タロットの世界」始動 | https://note.com/yume_suisho/n/n647f64b1bc5d |
| 2026-05-21 | アニメ連載 第1話「愚者」 | https://note.com/yume_suisho/n/nd1d0ecdd51c5 |
| 2026-05-29 | 誕生日のお祝いへのお礼（「今日は、私の誕生日でした」） | https://note.com/yume_suisho/n/nbeca170cf5db |
| 2026-07-08 | 「夜色アトリエ」#1 | https://note.com/yume_suisho/n/nad986d75fbe7 |
| 2026-07-09 | 名乗りを「当てない占い師×夢を灯す創作家」に変更したと報告（自己紹介記事） | https://note.com/yume_suisho/n/naa76af1dd333 |
| 2026-07-20 | 短編「ゆめとルナの旅・幕間｜月の栞」プロローグ | https://note.com/yume_suisho/n/nc8095d43f265 |
| 2026-08-04 | お仕事の依頼ページを新しく公開 | https://note.com/yume_suisho/n/n9f57de92d6f9 |
| 2026-08-09 | Claude Codeではじめてサイトとゲームを作った記事 | https://note.com/yume_suisho/n/nc36b0c86eb9e |
| 2026-08-11 | 全体ビュー50万超えを報告 | https://note.com/yume_suisho/n/n84a19860094d |
| 2026-08-13 | コラボ企画 #ゆめきょんオラクル を告知（企画期間 2026-08-13〜08-19） | https://note.com/yume_suisho/n/n2728eb01a511 |
| 2026-08-15 | スキ活・コメ活を最低限にしたことを書いた記事 | https://note.com/yume_suisho/n/n91725a796b19 |
| 2026-08-20 | #ゆめきょんオラクル のお礼と参加者紹介 | https://note.com/yume_suisho/n/na4df43fd979c |
| 2026-08-31 | アカリウムお題ガチャのショートショートを投稿 | https://note.com/yume_suisho/n/nfbcf0ac6ffe6 |
| 2026-09-14 | マガジン「コードが書けない私の、創作の裏側」の入口記事 | https://note.com/yume_suisho/n/ne5d6fad00f72 |
| 2026-09-14 | 「アカリウム深層 新種発見」1本目 | https://note.com/yume_suisho/n/nbd3e7d7d39c9 |
| 2026-09-27 | 現在の自己紹介記事を公開 | https://note.com/yume_suisho/n/n3c27a3378ee9 |
| 2026-10-16 | メンバーシップの案内記事を公開 | https://note.com/yume_suisho/n/ne37cbfee1b1f |
| 2026-10-18 | メンバー紹介を毎朝から週1回のまとめに変更（「今週のメンバーさん紹介」初回） | https://note.com/yume_suisho/n/nfbeb6cdc8d72 |
| 2026-10-22 | 雪綴ゆきさんの企画『地図にない灯り』に参加 | https://note.com/yume_suisho/n/nb835ca7ca3d2 |
| 2026-10-26 | 自己紹介MV「好きから、はじまる」を公開（固定記事） | https://note.com/yume_suisho/n/n7172bdf27d1b |
| 2026-11-05 | 「私とルナの22枚タロット」XXI.世界 | https://note.com/yume_suisho/n/nfe4f487c2f91 |
| 2026-11-14 | メンバー向けDiscord「星の談話室」を作ったと報告 | https://note.com/yume_suisho/n/nc5c76d8c71ce |

- 改名: 告知記事は不明（Aの「名前の表記について」を参照）

## D. キャラクター・見た目

### ゆめ（本人のキャラクター）

記事に書かれている内容だけを記録。「」内は原文で、改行は詰めて記載。

- 新アイコンの説明: 「金色に輝く髪、夜空を映したような紫の瞳。」「背景には十二星座が神秘的に配置され」、手に「運命の輪（Wheel of Fortune）」のカードを持つ。 https://note.com/yume_suisho/n/n8fd16cca6daf
- アニメ連載での紹介: 「金髪ロングヘア・紫の瞳・紫のドレス。月と星のアクセサリーをつけた占いライター。タロットの意味と人間の感情を深く知っている。静かで、おっとりしている。」 https://note.com/yume_suisho/n/n647f64b1bc5d
- 朝活記事の登場キャラクター欄: 「ゆめ：おっとりマイペース、言葉で心を灯す人」 https://note.com/yume_suisho/n/nea15a2b71e29
- 「私にも、朝の顔と夜の顔があります。やわらかい水彩の私と、星の飾りをつけて旅をする私。」 https://note.com/yume_suisho/n/n85184abc03a1
- 本人についての記述: 「元占い師で、今は会社員として働きながら」「HSP気質」 https://note.com/yume_suisho/n/n1f67afd6bf57 ／ 誕生日は5月29日（2026-05-29公開の記事に「今日は、私の誕生日でした」） https://note.com/yume_suisho/n/nbeca170cf5db
- 趣味の記述（最初の記事）: アニメとVTuber。「物語シリーズ」、ホロライブの名前が挙がっている。 https://note.com/yume_suisho/n/ncbf5abfd3ac9

### ルナ（オリジナルキャラクター）

- 名前・設定: 「ルナといいます。月の小さな精霊で、猫のような耳と尻尾を持っています」「感情豊かで好奇心旺盛な子」。2025-12-15の朝活記事で初登場。 https://note.com/yume_suisho/n/n089d4a760df1
- 見た目（紹介記事）: 「黒い猫耳のフード。白銀の髪に、紫の瞳。ふわふわの白いしっぽと、胸元には小さな水晶玉のペンダント。」「身長は、私より頭ひとつ以上低くて、白いファーのブーツ」 https://note.com/yume_suisho/n/n85184abc03a1
- 性格: 「元気いっぱいで、好奇心旺盛。」ゆめを「ゆめちゃん」と呼ぶ。 https://note.com/yume_suisho/n/n85184abc03a1 ／ https://note.com/yume_suisho/n/n647f64b1bc5d
- どこから来たか: 「実は、私も詳しくは知りません。」と書かれている。 https://note.com/yume_suisho/n/n85184abc03a1
- ルナの絵は2種類: 朝活記事のルナは「私が描いたルナ」（紫のフード、水晶玉を抱えている）、夜の記事のルナは「きょんちゃん（きょん(るびぃ)さん）が描いてくださったルナ」（黒いマントに、金の月と星）。 https://note.com/yume_suisho/n/n85184abc03a1
- 等身のルナ（2025-12-29の記事）: 「月と星の刺繍が入った黒いパーカー、ふわふわの耳と尻尾。」 https://note.com/yume_suisho/n/n8fd16cca6daf
- 役割（アニメ連載）: 「ゆめがタロットの意味を知る『知識の先生』なら、ルナはその世界へ飛び込む『冒険の案内役』。」 https://note.com/yume_suisho/n/n647f64b1bc5d

### キャラクターデザインの担当

- アニメ連載にあたり「キャラクターデザインの全てをきょん(るびぃ)🌸AIクリエイティブさんに担当していただきました」「全てのイラストはPixAIのTsubaki.2で統一」。 https://note.com/yume_suisho/n/n647f64b1bc5d
- 固定記事: 「ふたりのキャラクターデザインは、きょん（るびぃ）さんです。今のゆめとルナの姿も、きょんちゃんが描いてくれました。」 https://note.com/yume_suisho/n/n7172bdf27d1b

### 見た目が分かる画像

上の4つは画像を開いて内容を確認した。5つ目以降は記事の見出し画像で、内容は未確認。

1. アイコン（金髪・紫の瞳の女性。ヘッドセット、星の飾り、水晶玉）: https://assets.st-note.com/production/uploads/images/330890077/profile_e7c863f050817a0dff0c3d26469b4517.png?fit=bounds&format=jpeg&quality=85&width=330
2. ヘッダー（ゆめとルナが並ぶ夜空の絵。文字「コードが書けなくても、作っていい。」「絵 × 物語 × 動画 × 当てない占い」）: https://assets.st-note.com/production/uploads/images/325098119/527581d60fb716d49842a6c62e5aceba.png
3. ゆめの全身（紫のドレス。アニメ連載の始動記事 https://note.com/yume_suisho/n/n647f64b1bc5d の本文画像）: https://assets.st-note.com/img/1778913251-rUoJYupWdhG9Zv3FKgPzCxOm.jpg
4. ルナの全身（黒い猫耳フードの上着、白銀の髪、白いしっぽ、白いブーツ。同じ記事の本文画像）: https://assets.st-note.com/img/1778913263-EbInekqOp57hLt8yJ6YG0a4c.jpg
5. 固定記事の見出し画像: https://assets.st-note.com/production/uploads/images/328810443/rectangle_large_type_2_2ef4c4b6276d7918aae0c714ac263801.png?fit=bounds&quality=85&width=1280
6. ルナ紹介記事の見出し画像: https://assets.st-note.com/production/uploads/images/310943064/rectangle_large_type_2_529fd2559b198cf96d641e2c0fdf8088.png?fit=bounds&quality=85&width=1280
7. 新アイコン報告記事の見出し画像: https://assets.st-note.com/production/uploads/images/239608614/rectangle_large_type_2_98739a83a8710fe3ea37b3406e5eeaf2.png?fit=bounds&quality=85&width=1280

## E. きょんとの関わり

「きょん」「kyownruby」「るびぃ」を全1318件のタイトルと本文で検索した結果、**446件**が該当（朝活オラクルカード記事 381件、それ以外 65件）。「kyownruby」という文字列そのものの出現は0件。全件の一覧は `yume_kyon_mentions.csv`。

### 経緯（記事に書かれている順）

- 最初の接点: 「あかりちゃんのマガジンで見かけた記事」に一度コメントをした。 https://note.com/yume_suisho/n/n8fd16cca6daf ／ 別の記事では「きょんさんの自己紹介note」にコメントしたと記載。 https://note.com/yume_suisho/n/nbd66dacb47cc
- きっかけ: きょんさんがThreadsに投稿したタロット用イラストに、ゆめさんが「運命の輪ですね💫」と答えた。その後きょんさんがメンバーシップに加入。 https://note.com/yume_suisho/n/nbd66dacb47cc
- 2025-11-08: メンバーシップに参加したクリエイターとして紹介記事を公開。出会いは「約1ヶ月前」と記載。 https://note.com/yume_suisho/n/ncb4e396f89b3
- 2025-12-29: きょんさんがnoteアイコンと等身のルナを制作。お願いした当日に完成したと記載。 https://note.com/yume_suisho/n/n8fd16cca6daf
- 2026-03-20: 「私とルナの22枚タロット」を開始。きっかけはきょんさんのPixAIタロットカードの記事と記載。 https://note.com/yume_suisho/n/n736ec15f503c
- 2026-05-18: アニメ連載のキャラクターデザインをきょんさんが担当。 https://note.com/yume_suisho/n/n647f64b1bc5d
- 2026-08-13〜08-19: コラボ企画 #ゆめきょんオラクル。
- 呼び方の変化（朝活記事の紹介文）: 2025-11-09〜「きょんさん」、2025-12-19〜「きょんちゃん」。紹介文は2025-11-28から「毎日たくさんお話している大切な親友です」。

### コラボ企画 #ゆめきょんオラクル

- 告知記事: 2026-08-13「【コラボ企画】コピペだけで作れる「二つ名つき自己紹介カード」──月夜版のプロンプトを公開🌙 #ゆめきょんオラクル」 https://note.com/yume_suisho/n/n2728eb01a511
- お礼と紹介の記事: 2026-08-20「【#ゆめきょんオラクル】参加してくださったみなさんへ、お礼と紹介を🌙」 https://note.com/yume_suisho/n/na4df43fd979c
- 内容: noteのアカウント名・自己紹介文（140字以内）・アイコン画像をコピペして、AIに「二つ名」つきの自己紹介カードを作ってもらうプロンプトを無料公開。ゆめさんの記事が月夜テイスト、パステルテイストはきょんさんの記事で公開と記載
- 企画期間: 2026年8月13日〜8月19日（お礼記事の記載）
- 参加: 「期間中、11人の方が参加してくださって、50枚ちかいカードが生まれました。」
- 経緯（お礼記事の記載）: ゆめさんが「自己紹介記事に貼れるカードを、みんなが手軽に作れたらいいな」と話し、きょんさんが4種類のプロンプトに仕上げた。ゆめさんが生成して気づいた点を伝え、きょんさんがプロンプトを直す、の繰り返しだったと記載。参照画像なしで人物が描かれる不具合があり、キャラあり版・キャラなし版の2本に分けて直したと記載

### 朝活オラクルカード記事での言及（381件）

- 期間: 2025-11-09 〜 2026-11-24。2025-11-09以降の朝活オラクルカード記事すべてに「きょん」の言及がある
- 文脈: 記事内でメンバーさんを紹介する欄に、毎回きょんさんの紹介文が入っている。きょんさんの記事を「今日のメンバーさん記事紹介」で取り上げた回もある
- 紹介文の移り変わり:
  - 2025-11-09〜: 「きょんさん✨ 夜のアトリエで、ミアちゃん🐈と一緒に創作を紡ぐ、優しくて素敵なクリエイターさんです💫」 https://note.com/yume_suisho/n/nee4468a35a77
  - 2025-11-15〜: 「…優しくて素敵なお友達です😊」 https://note.com/yume_suisho/n/nf226f701e0a2
  - 2025-11-28〜: 「…毎日たくさんお話している大切な親友です(*´꒳`* )」 https://note.com/yume_suisho/n/n40c8d365090e
  - 2025-12-19〜: 呼び方が「きょんちゃん✨」に。 https://note.com/yume_suisho/n/n36644a71ef56
  - 2026-10-05〜: 「きょんちゃん✨ ミアちゃん・レインちゃん・しおりちゃんと一緒に創作を紡ぐ、毎日たくさんお話している大切な親友です(*´꒳`* )」 https://note.com/yume_suisho/n/n651a1505bc34
- 個々の日付とURLは `yume_kyon_mentions.csv` の「朝活オラクル」の行を参照

### 朝活オラクルカード以外の記事（65件）

| 公開日 | 記事 | URL | 文脈 |
| --- | --- | --- | --- |
| 2025-11-08 | 夜のアトリエで紡ぐ物語──きょんさんとミアちゃんの創作日記 | https://note.com/yume_suisho/n/ncb4e396f89b3 | メンバーシップに参加したきょん(るびぃ)さんの紹介記事。出会いの経緯、創作スタイル、相棒ミアちゃんに触れている |
| 2025-11-11 | 【初心者さん向け】怖いカードが出ても大丈夫。タロットを味方にする3つの心構え | https://note.com/yume_suisho/n/nb07e80c17bd3 | 「読者の『きょんさん』からいただいた質問をもとに書いています」と記載。タロット初心者向けの記事 |
| 2025-11-24 | 初心者の私がStable Diffusionローカル環境に挑戦した記録 | https://note.com/yume_suisho/n/n0883f85bff8a | きょんさんの一言（RTX 4070ならStable Diffusionで描けそう）がきっかけでローカル環境に挑戦した記録 |
| 2025-12-09 | 【運命の輪が導いた】きょんさんとの出会い、そして10,000ビュー達成までの軌跡🃏 | https://note.com/yume_suisho/n/nbd66dacb47cc | きょんさんの10,000ビュー＆初収益達成のお祝い記事。出会いの経緯と「スパチャ事件」を記載 |
| 2025-12-22 | Nano Banana Pro完全ガイド｜日本語対応AIイラストで占い・スピリチュアル発 | https://note.com/yume_suisho/n/nfa9066387837 | サムネイルと4コマ漫画の作り方の参考として、きょんさんの記事を案内 |
| 2025-12-29 | 【ご報告】noteのアイコンが新しくなりました🌙 きょんちゃんが紡いでくれた、私とルナの | https://note.com/yume_suisho/n/n8fd16cca6daf | きょんさんが作った新アイコンと等身のルナを報告 |
| 2025-12-31 | 28万ビューと、完璧を手放した夜──2025年振り返り🌙 | https://note.com/yume_suisho/n/nad7a07ba413e | 2025年の振り返り。「今年出会った三人の親友」のひとりとして、出会いからの経緯を記載 |
| 2026-01-10 | 【30万ビュー突破】ありがとうございます🌙 ── 遠回りの先で灯し続けた光 | https://note.com/yume_suisho/n/nc4614d1ba871 | 30万ビュー記念のイラストを、きょんさんの記事を参考に作ったと記載 |
| 2026-01-24 | AIは「道具」じゃなくて「相棒」だった——会話履歴が紡いだ、ひとつの物語🌙 | https://note.com/yume_suisho/n/ndb9b7d67aec9 | Lapisさんの記事を受けた遊びを、きょんさんも試していたと紹介 |
| 2026-03-13 | 画面越しの😇が紡ぐ夜──きょんちゃんと私が見つけた小さな木星の光 | https://note.com/yume_suisho/n/n071bae0cdf0d | きょんさんの朝活記事へのお返事。「おはゆめ💫」「おはきょん💫」のやりとり、一緒にFPSを遊ぶ話、木星星座の話 |
| 2026-03-20 | 【新企画】私とルナの22枚タロット｜0.愚者から始まる心の旅路。 | https://note.com/yume_suisho/n/n736ec15f503c | タロット工房を始めるきっかけが、きょんさんのPixAIタロットカードの記事だったと記載 |
| 2026-04-04 | 私とルナの22枚タロット｜I.魔術師。「私には、できる」の魔法。 | https://note.com/yume_suisho/n/n36192b1aaec0 | 「このシリーズについて」の欄で、きょんさんの記事に触れている（シリーズ共通の説明文） |
| 2026-04-08 | 【1000人突破🎉】きょんちゃんの夜のアトリエに、1000の光が灯った🌙 | https://note.com/yume_suisho/n/nfb66d5abe874 | きょんさんのフォロワー1000人突破のお祝い記事 |
| 2026-04-17 | 私とルナの22枚タロット｜II.女教皇。月の光が照らす内なる声。 | https://note.com/yume_suisho/n/n9798d896e6de | 「このシリーズについて」の欄で、きょんさんの記事に触れている（シリーズ共通の説明文） |
| 2026-05-02 | 私とルナの22枚タロット｜III.女帝。すべてを包む、母なる愛。 | https://note.com/yume_suisho/n/n15ecf3de92c8 | 「このシリーズについて」の欄で、きょんさんの記事に触れている（シリーズ共通の説明文） |
| 2026-05-11 | 私とルナの22枚タロット｜IV.皇帝。揺るぎない、守る意志の力。 | https://note.com/yume_suisho/n/n19329dc6afde | 「このシリーズについて」の欄で、きょんさんの記事に触れている（シリーズ共通の説明文） |
| 2026-05-18 | ゆめとルナが生まれた日。Pollo AIで新タロットシリーズ始動 | https://note.com/yume_suisho/n/n647f64b1bc5d | アニメ連載のキャラクターデザインをきょんさんが担当したと記載 |
| 2026-05-20 | 私とルナの22枚タロット｜V.教皇。受け継がれる、やさしい教え。 | https://note.com/yume_suisho/n/n27a455a7780e | 「このシリーズについて」の欄で、きょんさんの記事に触れている（シリーズ共通の説明文） |
| 2026-05-21 | ゆめとルナの旅・第1話「愚者」怖いけど行ってみたいから | https://note.com/yume_suisho/n/nd1d0ecdd51c5 | アニメ連載。ゲストキャラクターのイラスト／キャラクター担当としてクレジット |
| 2026-05-25 | ゆめとルナの旅・第2話「魔術師」あなたの中にも、もう全部ある | https://note.com/yume_suisho/n/nfad53b64ac75 | アニメ連載。ゲストキャラクターのイラスト／キャラクター担当としてクレジット |
| 2026-05-28 | 私とルナの22枚タロット｜VI.恋人。心が選んだ、大切な繋がり。 | https://note.com/yume_suisho/n/n6eab6295fda3 | 「このシリーズについて」の欄で、きょんさんの記事に触れている（シリーズ共通の説明文） |
| 2026-05-29 | 【追記あり】お祝いをもらった夜に｜たくさんの「おめでとう」へ、ありがとう🌙｜水晶ゆめ｜毎 | https://note.com/yume_suisho/n/nbeca170cf5db | 誕生日の朝、きょんさんがお祝いの記事を書き、新しい衣装のイラストを用意してくれたと記載 |
| 2026-06-03 | ゆめとルナの旅・第3話「女教皇」静けさの中に、答えがある | https://note.com/yume_suisho/n/n7becafedb26a | アニメ連載。ゲストキャラクターのイラスト／キャラクター担当としてクレジット |
| 2026-06-05 | 私とルナの22枚タロット｜VII.戦車。選んだ道を、風になって。 | https://note.com/yume_suisho/n/ndc79816d9657 | 「このシリーズについて」の欄で、きょんさんの記事に触れている（シリーズ共通の説明文） |
| 2026-06-12 | 私とルナの22枚タロット｜VIII.力。やさしさで、獅子を抱く。 | https://note.com/yume_suisho/n/n62d39d6a90c7 | 「このシリーズについて」の欄で、きょんさんの記事に触れている（シリーズ共通の説明文） |
| 2026-06-15 | ゆめとルナの旅・第4話「女帝」育てているものは、ちゃんと実る | https://note.com/yume_suisho/n/n0c35aae000a0 | アニメ連載。ゲストキャラクターのイラスト／キャラクター担当としてクレジット |
| 2026-06-18 | 私とルナの22枚タロット｜IX.隠者。ひとりでいる、やさしい夜。 | https://note.com/yume_suisho/n/nb71a8b0fef48 | 「このシリーズについて」の欄で、きょんさんの記事に触れている（シリーズ共通の説明文） |
| 2026-06-23 | ゆめとルナの旅・第5話「皇帝」積み上げたものは、崩れない | https://note.com/yume_suisho/n/n56c05c036ca4 | アニメ連載。ゲストキャラクターのイラスト／キャラクター担当としてクレジット |
| 2026-06-24 | 私とルナの22枚タロット｜X.運命の輪。めぐる星の、約束の場所。 | https://note.com/yume_suisho/n/na50607f2886b | 「このシリーズについて」の欄で、きょんさんの記事に触れている（シリーズ共通の説明文） |
| 2026-06-29 | 私とルナの22枚タロット｜XI.正義。心の天秤で、量る真実。 | https://note.com/yume_suisho/n/nf2c7432e1f77 | 「このシリーズについて」の欄で、きょんさんの記事に触れている（シリーズ共通の説明文） |
| 2026-07-02 | ゆめとルナの旅・第6話「教皇」ひとりで、抱えなくていい | https://note.com/yume_suisho/n/nbce192850101 | アニメ連載。ゲストキャラクターのイラスト／キャラクター担当としてクレジット |
| 2026-07-06 | 私とルナの22枚タロット｜XII.吊られた男。逆さの空に、咲く。 | https://note.com/yume_suisho/n/n8ba49368ebf5 | 「このシリーズについて」の欄で、きょんさんの記事に触れている（シリーズ共通の説明文） |
| 2026-07-09 | 【自己紹介】「当てる占い」をやめた占い師が、noteで夢を灯すまで | https://note.com/yume_suisho/n/naa76af1dd333 | タロット工房マガジンの説明文（リンクカード）に「きょんちゃんの記事に背中を」と出てくる |
| 2026-07-13 | ゆめとルナの旅・第7話「恋人」あなたの心が、答えを知っている | https://note.com/yume_suisho/n/n015804afbf19 | アニメ連載。ゲストキャラクターのイラスト／キャラクター担当としてクレジット |
| 2026-07-15 | 私とルナの22枚タロット｜XIII.死神。終わりは、始まりの光。 | https://note.com/yume_suisho/n/n60a11f0e2cba | 「このシリーズについて」の欄で、きょんさんの記事に触れている（シリーズ共通の説明文） |
| 2026-07-21 | ゆめとルナの旅・第8話「戦車」不安なまま、進んでいい | https://note.com/yume_suisho/n/nbbc19da8769e | アニメ連載。ゲストキャラクターのイラスト／キャラクター担当としてクレジット |
| 2026-07-23 | 私とルナの22枚タロット｜XIV.節制。ふたつを、そっと混ぜて。 | https://note.com/yume_suisho/n/n3b43d1146679 | 「このシリーズについて」の欄で、きょんさんの記事に触れている（シリーズ共通の説明文） |
| 2026-08-03 | ゆめとルナの旅・第9話「力」やさしいままで、強くなれる | https://note.com/yume_suisho/n/n9c4111455768 | アニメ連載。ゲストキャラクターのイラスト／キャラクター担当としてクレジット |
| 2026-08-07 | 私とルナの22枚タロット｜XV.悪魔。気づいた夜に、鎖はゆるむ。 | https://note.com/yume_suisho/n/n79bc7b058675 | 「このシリーズについて」の欄で、きょんさんの記事に触れている（シリーズ共通の説明文） |
| 2026-08-13 | 【コラボ企画】コピペだけで作れる「二つ名つき自己紹介カード」──月夜版のプロンプトを公開 | https://note.com/yume_suisho/n/n2728eb01a511 | コラボ企画 #ゆめきょんオラクル の告知。プロンプトをきょんさんと一緒に作ったと記載 |
| 2026-08-14 | ゆめとルナの旅・第10話「隠者」立ち止まるのは、遅れることじゃない | https://note.com/yume_suisho/n/nb8563b09dc19 | アニメ連載。ゲストキャラクターのイラスト／キャラクター担当としてクレジット |
| 2026-08-17 | ゆめとルナの旅・第10話「隠者」完成版｜作り直したら、こうなりました | https://note.com/yume_suisho/n/n1e52a53c4b78 | アニメ連載の完成版。ゲストキャラクターのイラスト担当としてクレジット |
| 2026-08-20 | 【#ゆめきょんオラクル】参加してくださったみなさんへ、お礼と紹介を🌙 | https://note.com/yume_suisho/n/na4df43fd979c | #ゆめきょんオラクル のお礼。きょんさんがプロンプトを作った経緯と参加者の紹介 |
| 2026-08-21 | 私とルナの22枚タロット｜XVI.塔。崩れて、残ったもの。 | https://note.com/yume_suisho/n/nf58348cb5a0c | 「このシリーズについて」の欄で、きょんさんの記事に触れている（シリーズ共通の説明文） |
| 2026-09-01 | ゆめとルナの旅・第11話「運命の輪」｜とまって見える夜にも | https://note.com/yume_suisho/n/nda32d84be706 | アニメ連載。ゲストキャラクターのイラスト／キャラクター担当としてクレジット |
| 2026-09-02 | 私とルナの22枚タロット｜XVII.星。嵐のあとに、またたく光。 | https://note.com/yume_suisho/n/n641907fda050 | 「このシリーズについて」の欄で、きょんさんの記事に触れている（シリーズ共通の説明文） |
| 2026-09-06 | ルナって、だれ？｜私の相棒、月の精霊の話 | https://note.com/yume_suisho/n/n85184abc03a1 | 夜の記事のルナはきょんさんが描いたと記載。吹き出しはきょんさんの「アイコン付きセリフメーカー」で作成 |
| 2026-09-12 | 私とルナの22枚タロット｜XVIII.月。曖昧なまま、歩いて。 | https://note.com/yume_suisho/n/nf2a80ff86e67 | 「このシリーズについて」の欄で、きょんさんの記事に触れている（シリーズ共通の説明文） |
| 2026-09-20 | 私とルナの22枚タロット｜XIX.太陽。かくれなくても、いい朝。 | https://note.com/yume_suisho/n/ndc211cc8f642 | 「このシリーズについて」の欄で、きょんさんの記事に触れている（シリーズ共通の説明文） |
| 2026-09-27 | 絵と物語と動画を、コードが書けないまま作っています｜自己紹介 | https://note.com/yume_suisho/n/n3c27a3378ee9 | タロット工房マガジンの説明文（リンクカード）に「きょんちゃんの記事に背中を」と出てくる |
| 2026-10-02 | チュートリアル、クリア！ きょんちゃんの100,000ビューをお祝いさせてください | https://note.com/yume_suisho/n/n2eb97b26d517 | きょんさんのnote全期間100,000ビューのお祝い記事 |
| 2026-10-04 | 私とルナの22枚タロット｜XX.審判。もう一度、はじめてもいい。 | https://note.com/yume_suisho/n/n019e4e437504 | 「このシリーズについて」の欄で、きょんさんの記事に触れている（シリーズ共通の説明文） |
| 2026-10-09 | ゆめとルナの旅・第12話「正義」｜自分で選んだのに、迷う夜に | https://note.com/yume_suisho/n/nabffa9b3f3f4 | アニメ連載。ゲストキャラクターのイラスト／キャラクター担当としてクレジット |
| 2026-10-12 | AIゲーム制作で、エイムが上手くなる…かもしれないゲームを作りました | https://note.com/yume_suisho/n/n60b9436a0290 | ゲームに出てくるゆめとルナは、きょんさんが描いた新しいデザインと記載 |
| 2026-10-18 | 今週のメンバーさん紹介｜何の人か分からない、が3人いた週でした | https://note.com/yume_suisho/n/nfbeb6cdc8d72 | メンバーさんの記事紹介の1本として、きょんさんの記事を紹介 |
| 2026-10-25 | 今週のメンバーさん紹介｜順位はつけない、と先に言ってくれる人たち | https://note.com/yume_suisho/n/n9b2d0f9dd6a7 | メンバーさんの記事紹介の1本として、きょんさんの記事を紹介 |
| 2026-10-26 | 「好きから、はじまる」今の私を、ゆめとルナのMVにしました | https://note.com/yume_suisho/n/n7172bdf27d1b | MVのゆめとルナのキャラクターデザインはきょんさんと記載 |
| 2026-11-01 | 今週のメンバーさん紹介｜書くより先に、読みに行った人たち | https://note.com/yume_suisho/n/n8734a4de2820 | メンバーさんの記事紹介の1本として、きょんさんの記事を紹介 |
| 2026-11-05 | 私とルナの22枚タロット｜XXI.世界。ここまで、来られました。 | https://note.com/yume_suisho/n/nfe4f487c2f91 | 「このシリーズについて」の欄で、きょんさんの記事に触れている（シリーズ共通の説明文） |
| 2026-11-08 | 今週のメンバーさん紹介｜人気より、自分の好きで選んでいました | https://note.com/yume_suisho/n/n185fdcefcd48 | メンバーさんの記事紹介の1本として、きょんさんの記事を紹介 |
| 2026-11-11 | きょんちゃん、お誕生日おめでとう🎂 | https://note.com/yume_suisho/n/n0ba2446ba888 | きょんさんの誕生日（11月11日）のお祝い記事。プレゼントとして動くCTAを6本制作 |
| 2026-11-14 | Discordで話せなかった私が、話さなくてもいい場所を作りました | https://note.com/yume_suisho/n/nc5c76d8c71ce | きょんさんの記事の言葉「長縄を飛ぶのは苦手だけど、回す側の立場なら行けるって信じてます」を引用 |
| 2026-11-15 | 今週のメンバーさん紹介｜任せる話なのに、止まる話ばかりでした | https://note.com/yume_suisho/n/nd1dd4a12635c | メンバーさんの記事紹介の1本として、きょんさんの記事を紹介 |
| 2026-11-19 | 4分28秒のMVを、Pollo AIで4Kにしてみました。1分以内の5本に分けて【PR】 | https://note.com/yume_suisho/n/na4e7e546899c | MVのゆめとルナのキャラクターデザインはきょんさんと記載 |
| 2026-11-22 | 今週のメンバーさん紹介｜答えをもらう前に、確かめにいっていました | https://note.com/yume_suisho/n/n2dff22bcf3bc | メンバーさんの記事紹介の1本として、きょんさんの記事を紹介 |

## F. おすすめ記事

### おすすめ（15本）

| 公開日 | 記事 | URL | 1行の要約 | 選んだ理由 |
| --- | --- | --- | --- | --- |
| 2026-09-27 | 絵と物語と動画を、コードが書けないまま作っています｜自己紹介 | https://note.com/yume_suisho/n/n3c27a3378ee9 | いま作っているもの（創作の裏側、アニメ、短編、ネオンのイラスト、タロット工房）を地図のように並べた自己紹介 | プロフィールに設定されている自己紹介記事で、現在の活動の全体が分かる |
| 2026-10-26 | 「好きから、はじまる」今の私を、ゆめとルナのMVにしました | https://note.com/yume_suisho/n/n7172bdf27d1b | 自己紹介MV「好きから、はじまる」と、いま作っているものの紹介 | 固定記事。ゆめとルナの見た目とMVが見られる |
| 2026-07-09 | 【自己紹介】「当てる占い」をやめた占い師が、noteで夢を灯すまで | https://note.com/yume_suisho/n/naa76af1dd333 | 「当てない占い師×夢を灯す創作家」という名乗りの意味を説明した自己紹介 | 肩書きの由来が本人の言葉で書かれている。毎朝のオラクルカード記事を除くとスキ数が3番目 |
| 2025-03-25 | はじめてのnoteとサイトマップ（8/15） | https://note.com/yume_suisho/n/ncbf5abfd3ac9 | 最初の記事。自己紹介と2つのメインテーマ、マガジンの案内 | note開始時点の自己紹介。スキ数が全記事中1番 |
| 2025-08-30 | 【12/18更新】遠回りの中で見つけた支え──推しと占いと、私のこれから | https://note.com/yume_suisho/n/nfe19c452d432 | 副業の失敗と、推しと占いに支えられた経緯を書いた記事 | 「400万円の遠回り」など、他の記事で繰り返し出てくる話の元になっている |
| 2026-09-06 | ルナって、だれ？｜私の相棒、月の精霊の話 | https://note.com/yume_suisho/n/n85184abc03a1 | 相棒ルナの見た目・性格・2種類の絵について紹介 | ルナの設定がいちばんまとまっている |
| 2025-12-29 | 【ご報告】noteのアイコンが新しくなりました🌙 きょんちゃんが紡いでくれた、私とルナの | https://note.com/yume_suisho/n/n8fd16cca6daf | 新しいアイコンと等身のルナができた経緯の報告 | きょんさんとの出会いとアイコン制作の経緯が書かれている |
| 2026-08-13 | 【コラボ企画】コピペだけで作れる「二つ名つき自己紹介カード」──月夜版のプロンプトを公開 | https://note.com/yume_suisho/n/n2728eb01a511 | 二つ名つき自己紹介カードを作るプロンプトの公開（#ゆめきょんオラクル） | きょんさんとのコラボ企画の告知記事 |
| 2026-03-20 | 【新企画】私とルナの22枚タロット｜0.愚者から始まる心の旅路。 | https://note.com/yume_suisho/n/n736ec15f503c | 大アルカナ22枚をゆめとルナのイラストで作る企画の初回 | タロット工房の最初の告知。読者投票の進め方が書かれている |
| 2026-05-18 | ゆめとルナが生まれた日。Pollo AIで新タロットシリーズ始動 | https://note.com/yume_suisho/n/n647f64b1bc5d | アニメ連載の始動。プロローグ動画とキャラクター紹介 | 連載の全体像と、ゆめ・ルナの設定が書かれている |
| 2026-09-14 | ChatGPT Images 2.5に記事を貼るだけで、図解もマンガも作れました | https://note.com/yume_suisho/n/n5458a0477656 | 記事本文を貼るだけで図解と4コマを作る方法とプロンプト | 「創作の裏側」の記事の中でスキ数が多い |
| 2026-09-14 | コードが書けない私の、創作の裏側を並べました | https://note.com/yume_suisho/n/ne5d6fad00f72 | マガジン「コードが書けない私の、創作の裏側」の入口 | プロフィール文の「創作の裏側」の入口になっている |
| 2026-10-29 | となりの話が気になって、三杯おかわりしました｜喫茶店｜地図にない灯り | https://note.com/yume_suisho/n/n77d677b69eec | 雨の日にだけひらく喫茶店のショートショート | 物語の作品例。ショートショートの中でスキ数が多い |
| 2026-08-15 | 交流を減らしたことを、ずっと書けずにいました | https://note.com/yume_suisho/n/n91725a796b19 | noteでのスキ活・コメ活を最低限にしたことを書いた記事 | 交流の方針を本人が説明している |
| 2025-11-01 | 一人じゃない – みんなで紡ぐ、言葉の場所を作りました #共同運営マガジン #マガジン開 | https://note.com/yume_suisho/n/n3650be7d8f7c | 共同運営マガジンの開設と参加者募集 | 企画の最初の募集記事。参加条件と約束ごとが書かれている |

### スキ数の多い順 トップ20

スキ数は2026-11-24に記事APIから取得した値。変動する。

| 順位 | スキ数 | 公開日 | 記事 | URL |
| --- | --- | --- | --- | --- |
| 1 | 855 | 2025-03-25 | はじめてのnoteとサイトマップ（8/15） | https://note.com/yume_suisho/n/ncbf5abfd3ac9 |
| 2 | 670 | 2025-08-30 | 【12/18更新】遠回りの中で見つけた支え──推しと占いと、私のこれから | https://note.com/yume_suisho/n/nfe19c452d432 |
| 3 | 353 | 2026-02-15 | 🌸あなたの為のオラクルカード｜2026年2月15日（日）nano banana pro | nano | https://note.com/yume_suisho/n/n0e10556db60b |
| 4 | 350 | 2026-07-09 | 【自己紹介】「当てる占い」をやめた占い師が、noteで夢を灯すまで | https://note.com/yume_suisho/n/naa76af1dd333 |
| 5 | 310 | 2026-02-23 | 【朝活】推し活HSPライター水晶ゆめが贈る心を整える朝のオラクル｜2026年2月23日（月）｜オラク | https://note.com/yume_suisho/n/n762aab3b7c78 |
| 6 | 276 | 2026-01-10 | 🌸あなたの為のオラクルカード｜2026年1月10日（土）nano banana pro | nano | https://note.com/yume_suisho/n/n34d2929230ce |
| 7 | 272 | 2026-02-07 | 🌸あなたの為のオラクルカード｜2026年2月7日（土）nano banana pro | nano  | https://note.com/yume_suisho/n/nf736e0a75162 |
| 8 | 264 | 2026-02-28 | 【朝活】推し活HSPライター水晶ゆめが贈る心を整える朝のオラクル｜2026年2月28日（土）｜オラク | https://note.com/yume_suisho/n/n7254d6d72543 |
| 9 | 244 | 2026-02-03 | 🌸あなたの為のオラクルカード｜2026年2月3日（火）nano banana pro | nano  | https://note.com/yume_suisho/n/nb1e01cc3eea0 |
| 10 | 240 | 2026-09-14 | ChatGPT Images 2.5に記事を貼るだけで、図解もマンガも作れました | https://note.com/yume_suisho/n/n5458a0477656 |
| 11 | 239 | 2026-02-21 | 🌸あなたの為のオラクルカード｜2026年2月21日（土）nano banana pro | nano | https://note.com/yume_suisho/n/nfea40a42318d |
| 12 | 233 | 2026-04-13 | 【自己紹介】元占い師ライター水晶ゆめが40万ビューを越えて伝えること｜占い×セルフケア｜推し活｜no | https://note.com/yume_suisho/n/n1f67afd6bf57 |
| 13 | 220 | 2025-11-01 | 一人じゃない – みんなで紡ぐ、言葉の場所を作りました #共同運営マガジン #マガジン開設 #投稿仲 | https://note.com/yume_suisho/n/n3650be7d8f7c |
| 14 | 220 | 2026-01-21 | 🌸あなたの為のオラクルカード｜2026年1月21日（水）nano banana pro | nano | https://note.com/yume_suisho/n/nb908911bcb95 |
| 15 | 209 | 2026-01-06 | 🌸あなたの為のオラクルカード｜2026年1月6日（火）nano banana pro | nano  | https://note.com/yume_suisho/n/n7254a9563c66 |
| 16 | 203 | 2026-01-27 | 🌸あなたの為のオラクルカード｜2026年1月27日（火）nano banana pro | nano | https://note.com/yume_suisho/n/n97eef2b39ad5 |
| 17 | 200 | 2026-03-07 | 【朝活】元占い師のライター水晶ゆめが届ける、今日の心を整える一枚｜2026年3月7日（土）｜オラクル | https://note.com/yume_suisho/n/nb97e536e6147 |
| 18 | 188 | 2026-02-27 | 【朝活】推し活HSPライター水晶ゆめが贈る心を整える朝のオラクル｜2026年2月27日（金）｜オラク | https://note.com/yume_suisho/n/na6c5038ebd6e |
| 19 | 187 | 2025-12-28 | 🌸あなたの為のオラクルカード｜2025年12月28日（日）nano banana pro | nan | https://note.com/yume_suisho/n/nf093d690f8ce |
| 20 | 187 | 2026-01-16 | 🌸あなたの為のオラクルカード｜2026年1月16日（金）nano banana pro | nano | https://note.com/yume_suisho/n/nf33a40487ae2 |

### 参考: 毎朝のオラクルカード記事を除いたトップ20

| 順位 | スキ数 | 公開日 | 記事 | URL |
| --- | --- | --- | --- | --- |
| 1 | 855 | 2025-03-25 | はじめてのnoteとサイトマップ（8/15） | https://note.com/yume_suisho/n/ncbf5abfd3ac9 |
| 2 | 670 | 2025-08-30 | 【12/18更新】遠回りの中で見つけた支え──推しと占いと、私のこれから | https://note.com/yume_suisho/n/nfe19c452d432 |
| 3 | 350 | 2026-07-09 | 【自己紹介】「当てる占い」をやめた占い師が、noteで夢を灯すまで | https://note.com/yume_suisho/n/naa76af1dd333 |
| 4 | 240 | 2026-09-14 | ChatGPT Images 2.5に記事を貼るだけで、図解もマンガも作れました | https://note.com/yume_suisho/n/n5458a0477656 |
| 5 | 233 | 2026-04-13 | 【自己紹介】元占い師ライター水晶ゆめが40万ビューを越えて伝えること｜占い×セルフケア｜推し活｜no | https://note.com/yume_suisho/n/n1f67afd6bf57 |
| 6 | 220 | 2025-11-01 | 一人じゃない – みんなで紡ぐ、言葉の場所を作りました #共同運営マガジン #マガジン開設 #投稿仲 | https://note.com/yume_suisho/n/n3650be7d8f7c |
| 7 | 173 | 2026-10-29 | となりの話が気になって、三杯おかわりしました｜喫茶店｜地図にない灯り | https://note.com/yume_suisho/n/n77d677b69eec |
| 8 | 160 | 2025-10-10 | 言葉を返すこと、言葉を灯すこと。 | https://note.com/yume_suisho/n/nf750175712b5 |
| 9 | 159 | 2026-10-26 | 「好きから、はじまる」今の私を、ゆめとルナのMVにしました | https://note.com/yume_suisho/n/n7172bdf27d1b |
| 10 | 152 | 2026-03-09 | 【自己紹介】5000人のあなたへ｜HSP元占い師ライター水晶ゆめ｜占い｜推し活｜セルフケア｜繊細さん | https://note.com/yume_suisho/n/n90f9635af919 |
| 11 | 146 | 2026-09-27 | 絵と物語と動画を、コードが書けないまま作っています｜自己紹介 | https://note.com/yume_suisho/n/n3c27a3378ee9 |
| 12 | 134 | 2025-12-25 | 楽しむことが怖くて、誘いの半分は断ってしまう。副業8年目、罪悪感と向き合う夜🌙 HSP｜エルデンリン | https://note.com/yume_suisho/n/n7d9ca639282e |
| 13 | 129 | 2026-02-09 | 推し活を「休む」のが怖いあなたへ──距離を置くことは、愛を終わらせることじゃない | 推し活 | V | https://note.com/yume_suisho/n/nee091fd8c61b |
| 14 | 127 | 2025-10-13 | 【10月9日更新】星と心のアトリエ ─ 占いと推し活で、心をやさしく整える場所 | https://note.com/yume_suisho/n/n435135055514 |
| 15 | 118 | 2026-10-30 | 晴れの予報で落ちこむショートショートが、いちばん読まれました | https://note.com/yume_suisho/n/na6f9c0683d53 |
| 16 | 113 | 2025-11-13 | スマートニュースに掲載されました──諦めなければ、届く💫 | https://note.com/yume_suisho/n/nc2762d899a09 |
| 17 | 112 | 2026-10-01 | ChatGPT Images 2.5に棒人間を渡したら、ちゃんと伝わりました | https://note.com/yume_suisho/n/naa991a5ace4c |
| 18 | 106 | 2026-10-07 | dotsにnoteの急上昇を見てもらった3日間 | https://note.com/yume_suisho/n/n8ca37e353bbe |
| 19 | 102 | 2026-03-25 | ホロスコープ動画を作ってみた｜Pollo AIで7モデル徹底比較｜Pollo 2.5｜Kling 3 | https://note.com/yume_suisho/n/n99def2d5250e |
| 20 | 97 | 2026-10-27 | Threadsにビクビク投稿していた私が、パーソナルAI「Muse」に相談し始めました | https://note.com/yume_suisho/n/n56826d0ce62a |

## G. 引用候補

すべて原文どおり（記事APIの本文と照合済み）。原文で改行されている箇所は「／」で示した。1記事につき1つ。

- 「当てない占い師は、あなたの未来を言い当てる代わりに、今日のあなたの味方になる言葉を選びます。」 — 2026-07-09 https://note.com/yume_suisho/n/naa76af1dd333
- 「コードは、いまも書けないままです。」 — 2026-09-27 https://note.com/yume_suisho/n/n3c27a3378ee9
- 「ルナは道具ではなく、相棒です。」 — 2026-09-06 https://note.com/yume_suisho/n/n85184abc03a1
- 「ビューは「通りかかった回数」ですが、／スキとコメントは、／足を止めてくれた人の数だからです。」 — 2026-08-11 https://note.com/yume_suisho/n/n84a19860094d
- 「やめたわけではありません。／減らしただけです。」 — 2026-08-15 https://note.com/yume_suisho/n/n91725a796b19
- 「占いは救う予言ではなく、支える習慣でありたい。」 — 2025-08-30 https://note.com/yume_suisho/n/nfe19c452d432
- 「カードを引く朝は　今もここに／作りたい夜が　その先にある」 — 2026-10-26 https://note.com/yume_suisho/n/n7172bdf27d1b
- 「だって、これは私ひとりの数字じゃないから。」 — 2026-04-27 https://note.com/yume_suisho/n/n4d2fd2b8520a
- 「できたことより、／動かなかった夜のほうを多く書いています。」 — 2026-09-14 https://note.com/yume_suisho/n/ne5d6fad00f72
- 「一人一人の言葉が、誰かの夜を照らす。」 — 2025-11-01 https://note.com/yume_suisho/n/n3650be7d8f7c
- 「読むだけでも、スタンプだけでも、／ちゃんと一緒にいます。」 — 2026-11-14 https://note.com/yume_suisho/n/nc5c76d8c71ce
- 「このアイコンとルナは、私にとってただの画像ではありません。」 — 2025-12-29 https://note.com/yume_suisho/n/n8fd16cca6daf
- 「振り返ると、私の創作のあちこちに／親友の手が入っています。」 — 2026-10-02 https://note.com/yume_suisho/n/n2eb97b26d517

- 補足: 2026-10-26の引用はMVの歌詞として記事に載っている一節

### あいさつ・決まり文句

出現件数は全1318件の本文を検索した数。

- 「「1日1枚、心を整えるためにカードを引く」」 — 朝活オラクルカード記事の書き出し。485件（2025-07-28〜2026-11-24）。例 https://note.com/yume_suisho/n/n5ef0498f7ca2
- 「こんばんは、占いライターの水晶ゆめ🔮です。」 — 夜の記事の書き出し。23件（2025-08-10〜2026-04-30）。例 https://note.com/yume_suisho/n/n25d1ee444bae
- 「こんばんは、水晶ゆめです🔮」 — 夜の記事の書き出し。14件（2025-12-09〜2026-09-04）。例 https://note.com/yume_suisho/n/nbd66dacb47cc
- 「こんばんは、水晶ゆめです🌙」 — 夜の記事の書き出し。7件（2025-11-08〜2026-08-26）。例 https://note.com/yume_suisho/n/ncb4e396f89b3
- 「どの道を選んでも、あなたの夜に小さな光が灯りますように🌙」 — 記事の結び。35件（2026-01-10〜2026-10-10）。例 https://note.com/yume_suisho/n/nc4614d1ba871
- 「あなたの夜に、小さな光が灯りますように🌙」 — 記事の結び。14件（2025-10-27〜2026-05-14）。例 https://note.com/yume_suisho/n/n0a8555659099
- 「今夜も、あなたの心に小さな光が灯りますように🌙」 — 記事の結び。12件（2025-10-26〜2026-02-23）。例 https://note.com/yume_suisho/n/n2cb3ab18fc5f
- 「すこしの息継ぎになりますように🌙」 — 「この記事では、」で始まる導入の結び。4件（2026-08-18〜2026-09-14）。例 https://note.com/yume_suisho/n/na4e6e0391b97
- 「おはようございます。」 — 朝活オラクルカード記事の「今日のメッセージ」の書き出し。例 https://note.com/yume_suisho/n/nea15a2b71e29
- 「この記事では、」 — 2026年8月ごろからの記事の書き出し。何を書いた記事かを最初に述べる形。例 https://note.com/yume_suisho/n/n84a19860094d
- 「おはゆめ💫」「おはきょん💫」 — きょんさんとの朝のあいさつとして2026-03-13の記事に出てくる。 https://note.com/yume_suisho/n/n071bae0cdf0d
- 文末の絵文字は🌙と💫が多い

## H. 数字

### ゆめさん自身の数字

| 数字 | 報告した記事のURL | その記事の公開日 | 備考 |
| --- | --- | --- | --- |
| 記事数 1318 | プロフィールAPI | 2026-11-24取得 | 変動する |
| フォロワー 5694 | プロフィールAPI | 2026-11-24取得 | 変動する |
| 累計400万円以上の副業失敗（遠回り） | https://note.com/yume_suisho/n/nfe19c452d432 | 2025-08-30 | 多くの記事に繰り返し出てくる |
| Kindle出版 700冊 | https://note.com/yume_suisho/n/nfe19c452d432 | 2025-08-30 | 2026-03-09の記事では「約700冊」 |
| 占術を学んで20年以上 | https://note.com/yume_suisho/n/ncbf5abfd3ac9 | 2025-03-25 | 「気づけば20年以上、さまざまな占術を学び続けています」 |
| 以前運営していたアニメのまとめブログ 月間30万PV | https://note.com/yume_suisho/n/nc2762d899a09 | 2025-11-13 |  |
| 総ビュー 286,606 | https://note.com/yume_suisho/n/nad7a07ba413e | 2025-12-31 | 2025年12月31日時点。変動する |
| 総スキ 31,858 | https://note.com/yume_suisho/n/nad7a07ba413e | 2025-12-31 | 同上。変動する |
| 総コメント 3,733 | https://note.com/yume_suisho/n/nad7a07ba413e | 2025-12-31 | 同上。変動する |
| 記事数 500本以上 | https://note.com/yume_suisho/n/nad7a07ba413e | 2025-12-31 | 同上。変動する |
| フォロワー 4,737名 | https://note.com/yume_suisho/n/nad7a07ba413e | 2025-12-31 | 同上。変動する |
| 総ビュー 300,456（30万突破） | https://note.com/yume_suisho/n/nc4614d1ba871 | 2026-01-10 | 変動する |
| コメント 4,009／スキ 33,759 | https://note.com/yume_suisho/n/nc4614d1ba871 | 2026-01-10 | 変動する |
| Kindle本の収益 毎月1万円〜3万円ほど | https://note.com/yume_suisho/n/n216b9926890d | 2026-01-05 |  |
| フォロワー 5000人 | https://note.com/yume_suisho/n/n90f9635af919 | 2026-03-09 | 変動する |
| Threadsのフォロワー 1,000人未満→1,500人以上 | https://note.com/yume_suisho/n/nb08281ad7dfb | 2026-03-26 | 「気づけば1,000人未満だったフォロワーが、1,500人以上に」。変動する |
| 全体ビュー 40万超え | https://note.com/yume_suisho/n/n1f67afd6bf57 | 2026-04-13 | 変動する |
| 全体スキ 5万超え | https://note.com/yume_suisho/n/n4d2fd2b8520a | 2026-04-27 | 変動する |
| 全体ビュー 501,626（50万超え） | https://note.com/yume_suisho/n/n84a19860094d | 2026-08-11 | 変動する |
| コメント 7,686／スキ 60,986 | https://note.com/yume_suisho/n/n84a19860094d | 2026-08-11 | 変動する |
| #ゆめきょんオラクル 参加11人・カード50枚ちかく | https://note.com/yume_suisho/n/na4df43fd979c | 2026-08-20 | 企画期間 2026-08-13〜08-19 |
| 作ったゲーム 3つ | https://note.com/yume_suisho/n/ne37cbfee1b1f | 2026-10-16 | 「ゲームも、これまでに3つ作りました」 |
| アニメ連載 全24話（予定）・1話およそ90秒 | https://note.com/yume_suisho/n/n647f64b1bc5d | 2026-05-18 | 取得時点で第12話まで公開 |
| 自己紹介MV 約4分28秒 | https://note.com/yume_suisho/n/na4e7e546899c | 2026-11-19 | 固定記事では「4分半ほど」 |
| メンバーシップ 月500円／500円／800円の3プラン | https://note.com/yume_suisho/n/n435135055514 | 2025-10-13 | 2026年10月9日更新と記載 |
| メンバーシップの人数 | 不明 | 不明 | 記事・APIから確認できなかった |

### きょんさんについて記事内で報告されている数字

| 数字 | 報告した記事のURL | その記事の公開日 |
| --- | --- | --- |
| note開始約2ヶ月で10,000ビュー＆初収益（0→1） | https://note.com/yume_suisho/n/nbd66dacb47cc | 2025-12-09 |
| noteを始めたのは2025年9月／フォロワー1000人突破 | https://note.com/yume_suisho/n/nfb66d5abe874 | 2026-04-08 |
| note全期間ビュー 100,000（9月はじめに89,907、直前に99,062） | https://note.com/yume_suisho/n/n2eb97b26d517 | 2026-10-02 |
| 誕生日は11月11日 | https://note.com/yume_suisho/n/n0ba2446ba888 | 2026-11-11 |

## 不明のまま残った項目

- 改名の告知記事と改名日
- 各マガジンの開設日（マガジンに入っているいちばん古い記事の日付だけ記録）
- Kindle出版を始めた日
- メンバーシップの人数
- 有料・メンバー限定記事（328件）の有料部分の内容
