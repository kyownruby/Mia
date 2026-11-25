# リンファさん 紹介記事用の材料ファイル

- 対象: https://note.com/rinfa_ai
- 取得日: 2026-11-25
- 対象記事: 全508件（2023-08-02〜2026-11-25）。一覧は `rinfa_articles.csv`
- このファイルは材料の記録のみ。記事の下書きは含まない

## 取得方法と注意

- プロフィール: `https://note.com/api/v2/creators/rinfa_ai`
- 記事一覧: `https://note.com/api/v2/creators/rinfa_ai/contents?kind=note&page=N` を page=85 で `isLastPage: true` になるまで取得（1.1秒間隔）。取得件数508は、プロフィールAPIの `noteCount` 508、月別アーカイブAPI（`/api/v2/creators/rinfa_ai/archives`）の件数と一致。600件の打ち切りには当たらなかったので、月別アーカイブページでの補完はしていない
- 本文: `https://note.com/api/v3/notes/[記事キー]` で508件すべて取得（1.1秒間隔、エラーなし）
- 全文が読めなかった記事（有料・メンバーシップ限定など、記事APIの `can_read` が false）: 31件。これらは無料公開部分だけを対象にした
- 読み方: 全508件のタイトルを通読し、本文は全件をキーワード検索（きょん関連・数字・あいさつ・シリーズ名・活動名など）にかけた。そのうえで、自己紹介記事4本、固定記事、年間の振り返り、各シリーズの初回、節目の報告、きょん関連、ゲーム関連の記事は本文を読んだ。それ以外の制作記・ギャラリー・朝活コラム・Threads記録は、タイトルと検索に当たった箇所、冒頭部分で確認した（全文を1件ずつ通読したわけではない）
- マガジン一覧は `contents?kind=magazine`、メンバーシップの内容は記事APIの `circle_plans` から取得した（メンバーシップ用のAPIは認証が必要で使えなかった）
- スキ数・フォロワー数などは取得時点（2026-11-25）の値。変動する
- 本文中の「2026年11月22日追記」のように、公開後に追記・更新されている記事がある。内容は取得時点のもの

## A. 基本情報

| 項目 | 内容 | 根拠 |
| --- | --- | --- |
| 表示名 | リンファ@AIアート・ドキュメンタリスト | プロフィールAPI |
| noteのID | rinfa_ai | プロフィールAPI |
| note開始日 | 2023-08-02（最初の記事の公開日。アカウント作成日も記事APIの `user.created_at` で 2023-08-02） | https://note.com/rinfa_ai/n/nfd5ba270a6f8 |
| 記事数 | 508（変動する） | プロフィールAPI `noteCount`、2026-11-25時点 |
| フォロワー数 | 1749（変動する） | プロフィールAPI `followerCount`、2026-11-25時点 |
| フォロー数 | 711（変動する） | プロフィールAPI `followingCount`、2026-11-25時点 |
| マガジン数 | 17（変動する） | プロフィールAPI `magazineCount`、2026-11-25時点 |
| 固定記事 | 2026-11-09「AIイラストの世界観は「一番スキなもの」で決めなくてもいい」 https://note.com/rinfa_ai/n/nf353ac0cd3e3 | 記事APIの `is_pinned` |
| 自己紹介記事（プロフィール設定） | 2026-06-23「自己紹介。はじめてのnoteからの積み重ねとAIイラストの軌跡。」 https://note.com/rinfa_ai/n/n1c210561350c | 記事APIの `is_profiled` |
| フォロー時のメッセージ | フォローありがとうございます！ | プロフィールAPI `followAppealText` |
| 外部リンク | X: @Rinfa358（プロフィールAPIの `socials`）。Threads: @rinfa_aiart、Substack: https://substack.com/@rinfaaiart （どちらも自己紹介記事内のリンク） | プロフィールAPI、https://note.com/rinfa_ai/n/n1c210561350c、https://note.com/rinfa_ai/n/n42e179bb4b7b |
| メンバーシップ | あり（プロフィールAPI `hasCircle: true`）。名前は「リンファのAIイラスト設計室」 | 記事APIの `circle_plans` |

### プロフィール文（原文そのまま）

```
AIイラストを「偶然」から「設計」へ。
3年の試行錯誤をもとに、「なぜか思い通りにならない」を一緒にほどきます。
プロンプト設計・失敗の直し方・実践レシピを発信中。
Threadsフォロワー2.2万人
```

### 画像URL

- アイコン: https://assets.st-note.com/production/uploads/images/211235430/profile_11c1466a21cb3b4cfbd3a216e4fd9a5c.jpg?fit=bounds&format=jpeg&quality=85&width=330
- ヘッダー: https://assets.st-note.com/production/uploads/images/272418779/wallpaper_landscape_296baa94a311b02f2d8bc681c6e16fdb.png
- ヘッダー（元画像）: https://assets.st-note.com/production/uploads/images/272418779/296baa94a311b02f2d8bc681c6e16fdb.png
- フォロー時メッセージの画像: https://assets.st-note.com/production/uploads/images/205159644/a421ad1a5fb4c2ae5ea183bfdcbd2d39.jpg?fit=bounds&format=jpeg&height=500&quality=85&width=500

### 自己紹介・案内記事の履歴

| 公開日 | タイトル | URL | メモ |
| --- | --- | --- | --- |
| 2025-09-14 | #自己紹介 ＆ #サイトマップ｜リンファ  ~プロンプト構築のスペシャリスト~ #AIイラスト #AIart | https://note.com/rinfa_ai/n/n67d36d0ed328 | 最初の自己紹介＆サイトマップ。本文中に「これまでの歩み・2025/10月現在」とあり、公開後に更新されている |
| 2025-10-05 | 私のAIイラスト履歴書～初心者の頃、1年目を振り返る～  #AIイラスト #DALL #アート#AI #生成AI #AIとやってみた #AI画像生成 #画像生成AI #AIアート #毎日note #毎日更新 #毎日投稿 #私の作品紹介 #アートを楽しむ | https://note.com/rinfa_ai/n/nee886510064f | AIイラストを始めてから1年目の作品の振り返り（自己紹介ではないが経歴の材料になる） |
| 2026-05-02 | 【自己紹介＆サイトマップ】プロンプトを打っても思い通りにならなかった私が、3年間手探りして見えてきたこと | https://note.com/rinfa_ai/n/n42e179bb4b7b | 2本目の自己紹介＆サイトマップ |
| 2026-06-23 | 自己紹介。はじめてのnoteからの積み重ねとAIイラストの軌跡。 | https://note.com/rinfa_ai/n/n1c210561350c | 現在プロフィールに設定されている自己紹介 |
| 2026-08-14 | 初めてのnoteの方へ｜AIイラストが思い通りにならない時の3つの入口 | https://note.com/rinfa_ai/n/nad363ccff4ff | 初めての人向けの案内ページ（はじめる／直す／試すの3つの入口） |

### 名前・肩書きの移り変わり

名前は最初の文章記事から「リンファ」。肩書き部分は次のように変わっている。

| 時期 | 表記 | 根拠 |
| --- | --- | --- |
| 2023-08-03 | 「こんにちは、リンファです。」（肩書きなし） | https://note.com/rinfa_ai/n/n878515bf8917 |
| 2025-06-22〜06-30 | リンファ＠AIイラストクリエイター（記事に埋め込まれたXの投稿の表示名。noteの表示名ではない） | https://note.com/rinfa_ai/n/n3616dbd0a237 ／ https://note.com/rinfa_ai/n/n2012a3ae9e55 |
| 2025-07-03〜07-04 | リンファ@AIクリエイター（記事内のマガジン埋め込みカードに残っているnoteの表示名） | https://note.com/rinfa_ai/n/n6ef157a7d8c3 ／ https://note.com/rinfa_ai/n/n797b98f4cab4 |
| 2025-08-29〜現在 | リンファ@AIアート・ドキュメンタリスト（埋め込みカードでの初出が2025-08-29。現在の表示名も同じ） | https://note.com/rinfa_ai/n/nb4eeca7a92df ／ プロフィールAPI |
| 2025-09-14 | 記事タイトルに「リンファ ~プロンプト構築のスペシャリスト~」、本文に「AIアートの過程ごと発信する AIアート・ドキュメンタリストリンファです。」 | https://note.com/rinfa_ai/n/n67d36d0ed328 |
| 2026-06-02〜 | リンファ@AIart（Substackでの表示名。記事内の埋め込みカードから） | https://note.com/rinfa_ai/n/n1d14bce47a0d ／ https://note.com/rinfa_ai/n/n1c210561350c |

- 注意: 埋め込みカードの表記は、カードが作られた時点のものが残っていると見られるが、noteの表示名を変えた正確な日付は記事に書かれていない。上の日付は「その表記が確認できる記事の公開日」
- 2025-07-05〜2025-08-28 のあいだの表示名は確認できる記事がなく不明

## B. 活動の柱

プロフィール文の「プロンプト設計・失敗の直し方・実践レシピを発信中」「Threadsフォロワー2.2万人」を軸に整理した。5以降はプロフィール文にはないが、記事として続いている活動。

### 1. プロンプト設計（AIイラストを「偶然」から「設計」へ）

- 何をしているか: AIイラストで狙った絵を出すための考え方（主役・場所・構図・光・色・質感を分けて考える、次に変えるものを一つだけ決める、など）を記事にしている。体系的にまとめた有料記事「AIイラスト設計大全＋プロンプト設計GPT」を自己紹介記事で「一番推したい一冊」と書いている
- 始まった日: AIイラスト自体は「2023年の春」に開始（https://note.com/rinfa_ai/n/n1c210561350c）。履歴書記事では最初期の作品を「2023年4月の終わりごろ」としている（https://note.com/rinfa_ai/n/nee886510064f）。noteでChatGPTと一緒にプロンプトを改善する記事の最初は 2025-06-27「ChatGPTと一緒に完成度アップ！「AIイラストを一緒に改善するプロセス」の実践ガイド」 https://note.com/rinfa_ai/n/nd69d2f505867
- 関連:
  - 設計大全: 2025-09-04「ガチャ運に疲れた人へ。狙い通り描けるAIイラスト設計大全＋プロンプト設計GPT」 https://note.com/rinfa_ai/n/n6911fa358b1a（有料記事。無料部分のみ確認）
  - 入門: 2026-08-08「AIイラストは何から始める？最初の一枚を作る4つの要素」 https://note.com/rinfa_ai/n/n281fca187ed7
  - 案内ページ: https://note.com/rinfa_ai/n/nad363ccff4ff
  - 世界観・軸の決め方（固定記事）: https://note.com/rinfa_ai/n/nf353ac0cd3e3
  - マガジン「ChatGPTで極める！AIイラスト改善ラボ」 https://note.com/rinfa_ai/m/m9f038f9d5e32 （記事内で「リンファのメインコンテンツを集めたマガジン」と紹介されている）

### 2. 失敗の直し方（うまくいかなかった画像の記録と切り分け）

- 何をしているか: 思い通りにならなかった生成結果を「失敗録」「供養回」として公開し、原因の切り分け方（暗い・崩れる・要素が反映されない・構図が中央に寄る など）を記事にしている
- 始まった日: 2025-07-28「AIイラスト失敗録｜それでも、花火を瞳に灯したくて」」 https://note.com/rinfa_ai/n/nc9e75aa97099
- 関連:
  - 2025-08-26「AI画像生成失敗ギャラリー｜上手くいかない時は潔く撤退するのも手」 https://note.com/rinfa_ai/n/n431f4b539112
  - 2025-12-28「「失敗」なんてない、あるのは「データ」だけ。AIイラスト制作がもっと楽しくなる思考法  　｜ AI画像生成 ｜ 生成AI ｜ AIアート ｜ 画像生成AI ｜ 毎日投稿 ｜ 毎日更新 ｜ 毎日note ｜ aiart ｜ 最近の学び｜」 https://note.com/rinfa_ai/n/n57af071278af
  - 2026-01-26「AIイラストが暗くなる原因は“足しすぎ”だった｜プロンプト改善ログ公開」 https://note.com/rinfa_ai/n/nda18f0e85ca6
  - 2026-05-07「3年間で学んだ、AIイラストの破綻が激減した考え方──描写力100をどこに振るかで、クオリティが変わる」 https://note.com/rinfa_ai/n/nc1aa3774045e
  - 2026-08-12「AIイラストで「書いた要素が反映されない」ときは？まず確認したい切り分け方」 https://note.com/rinfa_ai/n/n99289adc0fe7
  - 2026-08-18「AIイラストの手や指が崩れるときに見る6項目｜生成前・生成後の直し方」 https://note.com/rinfa_ai/n/ne1959d181910
  - 2026-08-27「AIイラストが暗い・崩れる・狙いと違うときの3ステップ診断」 https://note.com/rinfa_ai/n/nf342328cbebd（有料記事。無料部分のみ確認）
  - 2026-08-31「同じキャラクターが毎回別人になるとき、まず固定したい3つの要素」 https://note.com/rinfa_ai/n/n3ab6fe7ca514
  - 2026-09-18「AIイラストで服や背景が消えてしまうとき。プロンプトを3段階で整理する方法」 https://note.com/rinfa_ai/n/n8b0abdc67859
  - 2026-09-21「また中央になった？AIイラストで人物の構図を動かす5つの短い指定」 https://note.com/rinfa_ai/n/nad212576b1da

### 3. 実践レシピ（制作記・プロンプト付きギャラリー・プロンプト集）

- 何をしているか: 作品ごとに「なぜこのデザインにしたか」「使用プロンプト」をセットで載せる制作記と、コピペで使えるプロンプト集を出している。題材はモノクロ×差し色、ミニチュア（透明な器の中の小さな世界）、ファッションコーデ、季節行事など
- 始まった日: プロンプト付きの記事は 2024-01-23「「プロンプト付き」DALLで作る時空ファンタジーAIイラスト」 https://note.com/rinfa_ai/n/ne4778d6aff3d が最初。「AIイラスト制作記」のシリーズ「モノクロ×差し色」は 2025-07-29「AIイラスト制作｜モノクロ×差し色で“視線を奪う”キャラクターの作り方」 https://note.com/rinfa_ai/n/n70ed631a4939 から。最初の有料プロンプト集は 2025-08-16「全52コーデ掲載！初心者安心！今日から“映える”ファッションプロンプト集」 https://note.com/rinfa_ai/n/n7aee3099261d
- 関連:
  - マガジン「AIイラスト制作記｜モノクロ×差し色シリーズ」 https://note.com/rinfa_ai/m/mede854030d21
  - マガジン「AIイラストプロンプト図鑑｜コピペで楽しめる追記型マガジン」 https://note.com/rinfa_ai/m/m8cd6162f3107 （有料マガジン）
  - マガジン「AIイラストの小さなヒント集｜ミニtips＆ギャラリー」 https://note.com/rinfa_ai/m/m3468df04eac4 （初回 2026-08-19「Midjourneyはやっぱりパーソナライズが強い！ミニtips＆AIイラストギャラリー」 https://note.com/rinfa_ai/n/n31de5813fbe1）
  - マガジン「つぶやきAIイラストギャラリー」 https://note.com/rinfa_ai/m/m17160fdea859 （初回 2025-09-15「つぶやきAIイラストギャラリー｜キュートなふてくされパンダガールに名言を添えて」 https://note.com/rinfa_ai/n/n9728935dc2d2）
  - 無料で読めるプロンプト付き記事の例: 2026-06-06「【プロンプト付き】ChatGPT画像生成で出来栄えがよくなりやすい3つのAIイラストスタイル」 https://note.com/rinfa_ai/n/n7d01b27b89bd ／ 2026-11-21「Threadsに載せるAIイラストのネタに迷ったら｜4つの発想と無料プロンプト10本」 https://note.com/rinfa_ai/n/nef7a16c9a782

### 4. ネオンラインアート（現在の作風の軸）

- 何をしているか: 黒背景にネオンの輪郭線で人物やモチーフを描く作風。自己紹介記事で「現在の作風の主軸は、ネオンラインアートです。」、固定記事で「今は和風のネオンラインアートを中心に発信しています」と書いている。軸に選んだ決め手はThreadsで数回投稿したときの反応とフォロワー数の増加だったと固定記事に書かれている
- 始まった日: 本文に「ネオンラインアート」が初めて出るのは 2025-07-31「AIイラスト生成の裏側～プロンプト調整とベースデザイン～」 https://note.com/rinfa_ai/n/n759dff3089b1。タイトルに「ネオン」が初めて出るのは 2025-08-01「AIイラスト制作解説｜ネオンを纏う天使が浮かぶ「静謐な光」の世界」 https://note.com/rinfa_ai/n/nc02fd2fe6ba9、作り方の記事は 2025-08-02「無料＆簡単！量産型AIイラストから抜け出すネオンアート×DALLの新体験」 https://note.com/rinfa_ai/n/nd39fbcc1c75b
- 関連:
  - マガジン「リンファの小さなAIイラストギャラリー」 https://note.com/rinfa_ai/m/m55bbaf4d8f54 （開設の記事 2026-06-05「AIアートの保管庫始めました。～リンファの小さなAIイラストギャラリー～」 https://note.com/rinfa_ai/n/nbe1223e5b3c4）
  - 2026-01-09「失敗から生まれたネオンラインアート―Midjourney v7で「可愛い天使」が描けた理由　　#AIイラスト  #AI画像生成 #画像生成AI #AIアート #アート #AI #生成AI #毎日note #毎日更新 #毎日投稿 #プロンプト #プロンプト設計 #プロンプトエンジニアリング」 https://note.com/rinfa_ai/n/nb6e549891b1d
  - 軸に選んだ経緯: https://note.com/rinfa_ai/n/nf353ac0cd3e3 ／ 2025年の振り返りでの記述: https://note.com/rinfa_ai/n/nc3281f542a1a

### 5. Threads運用の記録

- 何をしているか: ThreadsでAIイラストを投稿し、フォロワー数・閲覧数の推移、伸びた投稿と伸びなかった投稿、凍結や停滞の経験を記事にしている。2026年10月からはAIエージェント「Muse」でThreadsの数字を観測する記事も書いている
- 始まった日: 2025-08-31「AIイラストギャラリー｜Threads始めて見たけど操作に戸惑う」 https://note.com/rinfa_ai/n/n95374e566918（「Threads始めました！」）
- 関連:
  - マガジン「Threads×AIイラスト｜運用まとめマガジン」 https://note.com/rinfa_ai/m/m1e33e221e421
  - 最初の振り返り: 2025-09-06「Threads×AIイラスト｜フォロワー100名突破したので振り返る〜イラストギャラリー付き〜」 https://note.com/rinfa_ai/n/nf4e55e9dfcb1
  - 2025-10-20「Threads活動記録｜1か月の閲覧数10万突破。数字の裏に見えた“伸びる投稿”の法則　#AIイラスト #nijijourney #アート #AI #生成AI #AIとやってみた #プロンプト #プロンプト設計 #プロンプトエンジニアリング #AI画像生成 #画像生成AI #AIアート #毎日note #note #毎日更新 #毎日投稿 #スキしてみて #Threads」 https://note.com/rinfa_ai/n/n2119ca59bd1d
  - 2026-03-26「Threads開始7ヶ月で1万フォロワー達成。カウントダウンを始めたら、1日で終わった話」 https://note.com/rinfa_ai/n/nbf0d0a90c03e
  - 2026-06-19「Threadsでフォロワー数2万人まで伸びた理由｜全員に好かれる投稿をやめたら見えたこと」 https://note.com/rinfa_ai/n/n8c40ff81421a
  - 2026-08-30「Threadsを伸ばすための戦略を全部やめたら、なぜか伸び始めました」 https://note.com/rinfa_ai/n/n1827c869f179
  - 2026-10-23「Threadsのフォロワー数は、減るのが普通かもしれない｜約400人減った私の話」 https://note.com/rinfa_ai/n/n0b24869b3b63
  - Muse関連の最初: 2026-10-25「AIエージェント『Muse』にThreadsを分析してもらったら、敏腕マネージャーが来ました」 https://note.com/rinfa_ai/n/n264c43b5b658 ／ 実験開始: 2026-11-13「Muse AIにThreads運用の8割を任せたら、どこまで伸びる？【実験開始】」 https://note.com/rinfa_ai/n/n637f9614cd46
  - 有料記事（無料部分のみ確認）: 2026-03-10「バズに頼らずThreadsで月間閲覧数100万超え─投稿・時間帯・枚数・AIイラストアカウントの設計を全部公開します」 https://note.com/rinfa_ai/n/nf914edd26989

### 6. マダム・ゴールドフィンガー（創作キャラクターのコラムとKindle）

- 何をしているか: 自称インチキ占い師のキャラクター「マダム・ゴールドフィンガー」の語りで、悩みに答える短いコラムを書いている。朝活コラムをもとにKindle本を出している
- 始まった日: 2025-06-23「マダムのタロットは嘘しか言わない──第1話：「運命の扉は、ノックよりもキックで開け。」」 https://note.com/rinfa_ai/n/n4c338a4aca6f（「マダムのタロットは嘘しか言わない」第1話。冒頭に「このコラムについて」の説明あり）
- 関連:
  - 相談室の初回: 2025-07-06「【マダム・ゴールドフィンガーのズバッと相談室】～やりたいことが見つからない？“魂のGPS”電源切れてるぜ～」 https://note.com/rinfa_ai/n/n368aa5896269
  - 朝活コラムの初回: 2025-07-07「マダムの朝活コラム【魂の目覚まし】：「運命はカーテンの向こう側で待ってるぜ？」」 https://note.com/rinfa_ai/n/nc9f4e82c40a3
  - 2026年の再開: 2026-02-24「職場の人間関係で消耗してるお前さんへ。─ 「3つの結界の張り方」 ｜ コラム  ｜  朝活  ｜  NanoBananaPro  ｜」 https://note.com/rinfa_ai/n/n5d3626f2761c（2025-08-05以来のマダム記事）、連日の更新は 2026-06-26「LINEを返すだけで、なぜか心が削られているお前さんへ。── その返信、義務じゃなくて距離の取り方だぜ。」 https://note.com/rinfa_ai/n/nd1085b2ff00e から
  - Kindle 1冊目の報告: 2026-07-04「note発の毒舌?占い師、250円のKindleで動き出しました──「noteマンへの一歩」はじめます」 https://note.com/rinfa_ai/n/n0d597fce6637（書名『マダム・ゴールドフィンガーの朝の魂処方箋: 進路、親、友達、恋、未来が怖いお前さんへ。』）
  - Kindle 2冊目に触れた記事: 2026-07-11「朝活コラムからKindleへ。埋もれていたキャラクターが「noteマンへの第一歩」になった話」 https://note.com/rinfa_ai/n/n9c0816130550（書名『マダム・ゴールドフィンガーの自分責め解毒辞典: 失敗、比較、罪悪感、空回り、存在不安を朝まで持ち越したお前さんへ。』）
  - マガジン「マダムの朝活コラム【魂の目覚め】」 https://note.com/rinfa_ai/m/m89a0587e9ca4 ／「マダムのタロットは嘘しか言わない」 https://note.com/rinfa_ai/m/m098c328c0164 ／「『マダム・ゴールドフィンガーのズバッと相談室』」 https://note.com/rinfa_ai/m/m2defa3f36761
  - 直近のマダム記事: 2026-09-09「片づけ中に昔へ戻った朝のお前さんへ。マダムのnote朝活コラム」 https://note.com/rinfa_ai/n/n1a8db3021670

### 7. AIツールのレビュー（画像生成・動画生成・音声入力など）

- 何をしているか: 新しい画像生成モデルや動画生成ツール、音声入力ツールを実際に使って比較・レビューしている。依頼を受けた記事には本文で「案件」「PR」と明記している
- 始まった日: 2025-06-22「「イラストが、まばたきする。」──AIが描く“新しい時代の創作”、niji・journey動画機能の衝撃」 https://note.com/rinfa_ai/n/n3616dbd0a237（2025年に投稿を再開した最初の記事でもある）
- 関連:
  - 依頼を受けたレビューの最初: 2025-11-14「Pollo 2.0で世界が動き出す──AIイラスト勢でも作れた“10秒動画の衝撃” #PolloAI #AI動画 #動画生成AI」 https://note.com/rinfa_ai/n/n98ba6710eb79（本文に「※この記事は案件ですが」と記載）
  - 2026-01-10「Nijijourney V7実装数時間レビュー｜触って分かった「線と光」の進化 　 ｜ AI画像生成 ｜ 生成AI ｜ AIイラスト ｜ 画像生成AI ｜ 毎日投稿 ｜ 毎日更新 ｜ 毎日note ｜ aiart ｜ ChatGPT ｜ Midjourney ｜」 https://note.com/rinfa_ai/n/nb7ee2c3598d4
  - 2026-01-28「17,278枚生成してわかった「niji7の正体」。きれいな絵が出るのに、なぜこれほど“難しい”のか？ ｜ AI画像生成 ｜ 生成AI ｜ AIイラスト ｜ 画像生成AI ｜ aiart ｜ ChatGPT ｜」 https://note.com/rinfa_ai/n/n1455346680e8
  - 2026-01-22「思考の速度に、入力が追いついた話―AquaVoiceで「0→1」のハードルが一気に下がった　　｜ AI画像生成 ｜ 生成AI ｜ AIイラスト ｜ 画像生成AI ｜ 毎日投稿 ｜ 毎日更新 ｜ 毎日note ｜ AIアート ｜ niji7 ｜ 音声入力 ｜ Gemini ｜ NanoBananaPRO ｜」 https://note.com/rinfa_ai/n/nc21d51032fd2
  - 2026-08-07「【PR】Simeji PCのAI音声入力を実測レビュー！制作メモが約2.6倍速くなった話」 https://note.com/rinfa_ai/n/n2cb2e0edc983
  - 2026-11-07「【画像生成AI比較】Meta社のMuse AI・nijijourney v7・ChatGPT Images 2.6で同じAIイラストを作ってみた」 https://note.com/rinfa_ai/n/n0a21eb681a04
  - 最新記事: 2026-11-25「【速報】nijijourney v8を実測。HD生成は約17秒、v7との違いを作例で比較」 https://note.com/rinfa_ai/n/n5a63f60fa6a7
  - マガジン「NanoBananaPro研究マガジン」 https://note.com/rinfa_ai/m/m50dcbdf8457a

### 8. メンバーシップ「リンファのAIイラスト設計室」

- 何をしているか: プロンプトの組み方や表現の研究ノート、毎月1本の新作15コーデ集を届ける場として運営。説明文では「月4本を目安に更新」「画像生成AIをすでに触っている初心者〜中級者向け」としている
- 始まった日: プラン「設計室だより」の開始日時は 2026-09-01（記事APIの `circle_plans.start_at`）。記事で最初に触れているのは 2026-09-03「AIイラストの世界観は「足す」より「削る」ことで生まれる」 https://note.com/rinfa_ai/n/nf30db2997d91。開設を告知する専用の記事は見つからず、2026-09-13「悲報）GPT-6 Astra選手、Codexの5時間制限を4分半で溶かす(;'∀')」 https://note.com/rinfa_ai/n/n4e51567e72fe の末尾に「メンバーシップはじめてました(´ー｀)」とある
- 関連:
  - メンバーシップのページ: https://note.com/rinfa_ai/membership
  - 最初のメンバーシップ限定記事: 2026-09-04「メンバーシップ限定｜試作中のAIイラストテーマ」 https://note.com/rinfa_ai/n/n015e49730650
  - マガジン「設計室マガジン」 https://note.com/rinfa_ai/m/medfa71374985 （説明文「メンバーシップ用記事をまとめたマガジンです」）

### 9. AIゲーム（遊ぶ・作る）

- 何をしているか: noteのクリエイターがAIで作ったブラウザゲームを遊んでレビューし、ランキングの記録に挑戦している。2026年10月からは自分でもChatGPTとCodexでボードゲーム型の戦略RPGを作り始めた（完成日は未定と書かれている）
- 始まった日: 遊ぶ側は 2026-10-01「【ふみまる20秒ラン】かわいい！簡単！そんなミニゲームに見せかけて....」 https://note.com/rinfa_ai/n/nf9c3b7d3230f、作る側は 2026-10-14「【AIゲーム制作】ChatGPTとCodexで、戦略系RPGを作り始めました！」 https://note.com/rinfa_ai/n/nc0668cc50fff
- 関連:
  - 2026-10-03「全力で推したいゲーム【ふみまる20秒ラン】楽しい！苦しい！ラストスパート！！」 https://note.com/rinfa_ai/n/n9003f4f1e253
  - 2026-10-05「強敵と書いて「きょん」と読む。【ふみまる20秒ラン】完走した感想」 https://note.com/rinfa_ai/n/n81bea3af9ca6
  - 2026-10-10「弾幕シューティング型AI開発ゲーム『雷光の戦場』が想像以上に奥深い」 https://note.com/rinfa_ai/n/ncb8ae2a51a42
  - 2026-10-11「AIゲーム【スイちゃんと!ぷにっと下剋上】最強の3人を選んだはずが……」 https://note.com/rinfa_ai/n/n27fd7ddafeb0
  - 2026-10-12「AI開発ゲームレビュー『走れ ぽてむし』が想像以上に高難易度だった！？」 https://note.com/rinfa_ai/n/nee45e6e2a9b0
  - 2026-10-13「逃げ切るだけなら簡単！？AI制作ゲーム『ロザンナから逃げろ』の0.01秒が遠すぎる話」 https://note.com/rinfa_ai/n/n3c08725fd71b
  - 2026-10-15「AIゲーム 【ロザンナから逃げろ！】記録は更新できずも可能性を発見してしまった話」 https://note.com/rinfa_ai/n/ne690f6a1c55a
  - 制作2日目: 2026-10-16「【ChatGPT×Codex】AIゲーム制作2日目！キャラ表示・移動ルート・攻撃演出まで進みました」 https://note.com/rinfa_ai/n/n89c8c5fd2871
  - 2026-10-18「【ChatGPT×Codex】AIゲーム制作で気づいた「AIに任せること・人間が判断すること」」 https://note.com/rinfa_ai/n/nc4278166ee99（有料記事。無料部分のみ確認）
  - 固定記事の「2026年11月22日追記」に、ゲーム開発用のキャラクターデザインイラストを公開したとある（https://note.com/rinfa_ai/n/nf353ac0cd3e3）

### 10. そのほかの創作（初期の名言コラム、ショートストーリー、小説、音楽）

- 何をしているか: note開始当初は偉人の名言をもとにしたコラムとAIイラストを投稿していた。2025年夏には恋愛ショートストーリー、2026年には短編ファンタジー小説やAI音楽（SUNO）との組み合わせも投稿している
- 始まった日: 最初の記事は 2023-08-02「夏の夜祭」 https://note.com/rinfa_ai/n/nfd5ba270a6f8、同日に 2023-08-02「朗読音声「夜明け前の静けさ」」 https://note.com/rinfa_ai/n/nd77beda3d44d。名言コラムの最初は 2023-08-03「失敗から学ぶ力を身につける方法～トーマス・エジソンの名言に学ぶ～」 https://note.com/rinfa_ai/n/n878515bf8917
- 関連:
  - 恋愛ショートストーリーの最初: 2025-07-16「午前1時の星に願いを込めて〜自己肯定感を取り戻した夜 恋愛short」 https://note.com/rinfa_ai/n/n14ebd03cd52e（マガジン「恋愛ショートショート」 https://note.com/rinfa_ai/m/mf15a6764dd04 ）
  - 小説: 2026-06-28「短編ファンタジー小説『青の星砂が落ちるとき』アカリウム創作大賞応募作品」 https://note.com/rinfa_ai/n/nf36689169430
  - 音楽: 2026-01-19「AIアート×AI音楽｜ダークファンタジー風決戦シーン＆主題歌　#AIイラスト #nijijourney #AI画像生成 #画像生成AI #niji7」 https://note.com/rinfa_ai/n/n4ae3f651bf80 ／ 2026-06-17「ChatGPTとSUNOでAIイラスト×AI音楽を遊ぶ #AIで遊ぼう参加記事」 https://note.com/rinfa_ai/n/n7fbab1be1559
  - マガジン「名言から学ぶ困難の乗り越え方」 https://note.com/rinfa_ai/m/m73107b69929c ／「AIを使った創作活動まとめ」 https://note.com/rinfa_ai/m/m1a6e6c4e6198

### 外部の活動場所

| 場所 | 内容 | 開始・根拠の記事 |
| --- | --- | --- |
| Threads（@rinfa_aiart） | AIイラストを投稿 | 2025-08-31「AIイラストギャラリー｜Threads始めて見たけど操作に戸惑う」 https://note.com/rinfa_ai/n/n95374e566918 |
| X（@Rinfa358） | プロフィールAPIに登録。記事に投稿の埋め込みあり | https://note.com/rinfa_ai/n/n3616dbd0a237 |
| Substack（リンファ@AIart） | 「軽い記事や、気軽な制作日記のようなもの」を投稿する場所として開始 | 2026-06-02「Substackを始めました。というか、流行ってたので乗ってました( ﾟДﾟ)」 https://note.com/rinfa_ai/n/n1d14bce47a0d ／ https://note.com/rinfa_ai/n/nacbf8abd4f7a |
| SUZURI（Rinfa_ Art Shop） | グッズのショップを開設。最初の商品は「機巧花宵（きこうはなよい）」 | 2025-08-23「AIイラストを使った収益化への一歩！SUZURIでショップ開設しました！」 https://note.com/rinfa_ai/n/ne1dddc216edf |
| LINEスタンプ | 「1年半ぶり」に申請し、ハロウィン仕様のちびキャラスタンプを販売開始 | 2025-09-16「１年半ぶり！LINEスタンプを申請中！！｜つぶやきAIイラストギャラリー」 https://note.com/rinfa_ai/n/nd6ff89f4b457 ／ 2025-09-18「お知らせ｜LINEスタンプ販売開始！ハロゥイン使用のキュートなちびキャラスタンプ！！#AIイラスト #画像生成AI #LINEスタンプ #生成AI #毎日note #ハロウィン #SDXL #副業」 https://note.com/rinfa_ai/n/n54e2c9e39db1 |
| Kindle | AIイラスト集（2025年時点で計10冊と記載）、マダム・ゴールドフィンガーの本 | https://note.com/rinfa_ai/n/n67d36d0ed328 ／ https://note.com/rinfa_ai/n/n0d597fce6637 |
| Patreon | 「Patreon 0→1達成（Threads経由）」との記載のみ。URLや開始日は記事にない | https://note.com/rinfa_ai/n/n42e179bb4b7b |
| note質問箱 | 開始を伝える記事あり | 2026-07-08「「note質問箱始めました」の通知って必要？～３行日記～」 https://note.com/rinfa_ai/n/n128f58a751b0 |
| Discord | リンファさん自身のDiscordについての記述は見つからなかった。Discordの語が出るのは、赤髪のあかりさんのメンバーシップの紹介カード（「Discordのコミュニティがあります」）の1件のみ | https://note.com/rinfa_ai/n/nc0668cc50fff |

### 企画

リンファさんが主催して参加者を募集する企画の記事は見つからなかった。自分で始めた試みと、参加した企画は次のとおり。

| 日付 | 内容 | 根拠 |
| --- | --- | --- |
| 2025-08-20 | 「限定ワードチャレンジ」（プロンプトの言葉の数を絞って作る試み。自分の企画。募集記事かどうかは未確認） | https://note.com/rinfa_ai/n/n616bf217dff9 ／ 続編 https://note.com/rinfa_ai/n/n25cb7fca85c9 |
| 2025-07-24 | ハッシュタグ「#夏の1コマ」を付けた投稿（最初の記事。主催者は記事から確認できず） | https://note.com/rinfa_ai/n/n0aa9f39968c7 |
| 2025-08-26 | 「#AIイラストチャレンジ」参加 | https://note.com/rinfa_ai/n/n22715bd3818b |
| 2025-09-19 | 「コラボ企画!!あかりんファッションショー！！」（あかりさんとのコラボ記事。事前に許可を取って作成と記載） | https://note.com/rinfa_ai/n/n4cee4f0392f6 |
| 2025-12-22 | 「#にゃんにゃん愛でるの会」参加 | https://note.com/rinfa_ai/n/na5ef49abc0e7 |
| 2026-01-23 | 「#OASOBI企画」に参加（Kinuさん、マイユーさん主催と記載） | https://note.com/rinfa_ai/n/nac0f42f03a1e |
| 2026-06-17 | 「#AIで遊ぼう」参加記事 | https://note.com/rinfa_ai/n/n7fbab1be1559 |
| 2026-06-28 | 「アカリウム創作大賞」に短編小説で応募 | https://note.com/rinfa_ai/n/nf36689169430 |
| 2026-09-03 | 「アカリウムお題ガチャ」AIイラスト版（あかりさんにお願いして作ってもらったと記載）。以後 09-08 まで連日投稿 | https://note.com/rinfa_ai/n/ned30cf4359ec |
| 2026-09-15 | 「アカリウム深層 新種発見」シリーズ（3本） | https://note.com/rinfa_ai/n/n087a2b260ae0 ／ https://note.com/rinfa_ai/n/nf3dc215b7dff ／ https://note.com/rinfa_ai/n/n87afa635d6ba |
| 2026-10-04締切 | 「ふみまる20秒ラン 最速王決定戦」（心野けいかさんのゲームの大会）に参加 | https://note.com/rinfa_ai/n/n81bea3af9ca6 |
| 2026-10-13 | 「ロザンナから逃げろ」の大会「逃走王は誰だ」（10月18日12時まで開催と記載）に挑戦 | https://note.com/rinfa_ai/n/n3c08725fd71b |

### いま力を入れていると本人が書いている活動

- 「現在の作風の主軸は、ネオンラインアートです。」（2026-06-23） https://note.com/rinfa_ai/n/n1c210561350c
- 「今は和風のネオンラインアートを中心に発信していますが、最初から和風だったわけではありません。」（2026-11-09、固定記事） https://note.com/rinfa_ai/n/nf353ac0cd3e3
- 設計大全を「① プロンプト設計大全＋専用GPT（一番推したい一冊）」と紹介（2026-06-23） https://note.com/rinfa_ai/n/n1c210561350c
- 「特に、毎日投稿をやめてからはThreadsの方に力を入れていました。」（2026-06-03） https://note.com/rinfa_ai/n/nacbf8abd4f7a
- 「いちばん力を入れている」と一つに絞って明言した記述は見つからなかった。上の4つは、それに近い記述として拾ったもの

### 自分のマガジン一覧（17本）

「収録記事のうち最も古いもの」は、リンファさんの記事のうちそのマガジンに入っている最古の記事（マガジンの開設日そのものではない）。

| マガジン名 | URL | 記事数（変動する） | 収録記事のうち最も古いもの |
| --- | --- | --- | --- |
| ChatGPTで極める！AIイラスト改善ラボ | https://note.com/rinfa_ai/m/m9f038f9d5e32 | 149 | 2025-06-27 https://note.com/rinfa_ai/n/nd69d2f505867 |
| 設計室マガジン | https://note.com/rinfa_ai/m/medfa71374985 | 21 | 2025-10-27 https://note.com/rinfa_ai/n/n3769e93abbb9 |
| Threads×AIイラスト｜運用まとめマガジン | https://note.com/rinfa_ai/m/m1e33e221e421 | 32 | 2025-08-31 https://note.com/rinfa_ai/n/n95374e566918 |
| リンファの小さなAIイラストギャラリー | https://note.com/rinfa_ai/m/m55bbaf4d8f54 | 14 | 2026-06-05 https://note.com/rinfa_ai/n/nbe1223e5b3c4 |
| AIイラストプロンプト図鑑｜コピペで楽しめる追記型マガジン | https://note.com/rinfa_ai/m/m8cd6162f3107 | 12 | 2025-08-16 https://note.com/rinfa_ai/n/n7aee3099261d |
| AIイラストの小さなヒント集｜ミニtips＆ギャラリー | https://note.com/rinfa_ai/m/m3468df04eac4 | 9 | 2026-08-19 https://note.com/rinfa_ai/n/n31de5813fbe1 |
| マダムの朝活コラム【魂の目覚め】 | https://note.com/rinfa_ai/m/m89a0587e9ca4 | 75 | 2025-07-07 https://note.com/rinfa_ai/n/nc9f4e82c40a3 |
| つぶやきAIイラストギャラリー | https://note.com/rinfa_ai/m/m17160fdea859 | 106 | 2025-09-15 https://note.com/rinfa_ai/n/n9728935dc2d2 |
| AIを使った創作活動まとめ | https://note.com/rinfa_ai/m/m1a6e6c4e6198 | 36 | 2024-05-23 https://note.com/rinfa_ai/n/n5f54b839401c |
| AIイラスト超お得パック｜プロンプト設計＋2つの実践集セット | https://note.com/rinfa_ai/m/m646a26f60b7d | 3 | 2025-09-04 https://note.com/rinfa_ai/n/n6911fa358b1a |
| NanoBananaPro研究マガジン | https://note.com/rinfa_ai/m/m50dcbdf8457a | 6 | 2025-11-25 https://note.com/rinfa_ai/n/n27ae764c5272 |
| AIイラスト制作記｜モノクロ×差し色シリーズ | https://note.com/rinfa_ai/m/mede854030d21 | 17 | 2025-07-29 https://note.com/rinfa_ai/n/n70ed631a4939 |
| 有料noteまとめ(仮) | https://note.com/rinfa_ai/m/m529fd7da688e | 4 | 2025-08-16 https://note.com/rinfa_ai/n/n7aee3099261d |
| 恋愛ショートショート | https://note.com/rinfa_ai/m/mf15a6764dd04 | 5 | 2025-07-16 https://note.com/rinfa_ai/n/n14ebd03cd52e |
| 『マダム・ゴールドフィンガーのズバッと相談室』 | https://note.com/rinfa_ai/m/m2defa3f36761 | 2 | 2025-07-06 https://note.com/rinfa_ai/n/n368aa5896269 |
| マダムのタロットは嘘しか言わない | https://note.com/rinfa_ai/m/m098c328c0164 | 11 | 2025-06-23 https://note.com/rinfa_ai/n/n4c338a4aca6f |
| 名言から学ぶ困難の乗り越え方 | https://note.com/rinfa_ai/m/m73107b69929c | 7 | 2023-08-03 https://note.com/rinfa_ai/n/n878515bf8917 |

### 参加している共同運営マガジン（5本）

| マガジン名 | 運営者のID | URL | リンファさんの記事で最初に入っているもの |
| --- | --- | --- | --- |
| アカリウム1号館｜みんなの創作が泳ぐ場所🐟️ | akari_seaart | https://note.com/akari_seaart/m/mdb292cf776c7 | 2026-07-21 https://note.com/rinfa_ai/n/n894fdf7fc43b |
| みんなで作る！あかりのクリエイティブマガジン | akari_seaart | https://note.com/akari_seaart/m/m7d7e5bb35223 | 2025-08-16 https://note.com/rinfa_ai/n/n7aee3099261d |
| 水晶ゆめと紡ぐ、心をほどく言葉マガジン | yume_suisho | https://note.com/yume_suisho/m/md339b5f2cba7 | 2025-11-28 https://note.com/rinfa_ai/n/n16cc612a83ac |
| あかりのプレミアムクリエイティブマガジン | akari_seaart | https://note.com/akari_seaart/m/m7aa6f4dbfab8 | 2025-09-04 https://note.com/rinfa_ai/n/n6911fa358b1a |
| Lemon🍋みんなのアートを応援【共同運営マガジン】 | lemon_lemon_ | https://note.com/lemon_lemon_/m/m3c958fc46238 | 2025-07-29 https://note.com/rinfa_ai/n/n70ed631a4939 |

- 「みんなで作る！あかりのクリエイティブマガジン」については、2025-08-28「AIイラスト制作記｜鉛筆の黒に走る“紅の一閃”― 濃密な鉛筆画 × 黒ベース × 差し色の赤で描く、ショートツインテ少女の躍動」 https://note.com/rinfa_ai/n/ne6aa86e9412a に「因みに今回のモチーフは「あかりさん」でした！ 共同マガジン開設のお祝いに❗️」とある
- 参加中の共同マガジンは https://note.com/rinfa_ai/n/n42e179bb4b7b の「参加している共同マガジン」にも4本が挙げられている（アカリウム1号館はこの記事より後）

## C. 時系列

| 日付 | できごと | 根拠 |
| --- | --- | --- |
| 2023年春 | AIイラストを始める（履歴書記事では最初期の作品を「2023年4月の終わりごろ」と記載） | https://note.com/rinfa_ai/n/n1c210561350c ／ https://note.com/rinfa_ai/n/nee886510064f |
| 2023-08-02 | note最初の記事「夏の夜祭」。同日に朗読音声の記事 | https://note.com/rinfa_ai/n/nfd5ba270a6f8 ／ https://note.com/rinfa_ai/n/nd77beda3d44d |
| 2023-08-03 | 名言コラムを開始（〜2023-09-01） | https://note.com/rinfa_ai/n/n878515bf8917 |
| 2024年2月〜3月 | AIイラスト投稿サイトのコンテストで入賞（サイト名・コンテスト名は記事に書かれていない） | https://note.com/rinfa_ai/n/nee886510064f |
| 2023-09-02〜2025-01-25 | 投稿は少なく、2024-01に3本、2024-05に1本、2025-01に1本 | `rinfa_articles.csv` |
| 2025-06-22 | 投稿を再開（niji・journeyの動画機能の記事）。ここから連日投稿が続く | https://note.com/rinfa_ai/n/n3616dbd0a237 |
| 2025-06-23 | 「マダムのタロットは嘘しか言わない」第1話 | https://note.com/rinfa_ai/n/n4c338a4aca6f |
| 2025-06-27 | ChatGPTとAIイラストを改善していく記事の最初 | https://note.com/rinfa_ai/n/nd69d2f505867 |
| 2025-07-07 | マダムの朝活コラム開始 | https://note.com/rinfa_ai/n/nc9f4e82c40a3 |
| 2025-07-16 | 恋愛ショートストーリーの最初 | https://note.com/rinfa_ai/n/n14ebd03cd52e |
| 2025-07-28 | 「AIイラスト失敗録」 | https://note.com/rinfa_ai/n/nc9e75aa97099 |
| 2025-07-29 | モノクロ×差し色の制作記を開始 | https://note.com/rinfa_ai/n/n70ed631a4939 |
| 2025-07-31 | 本文に「ネオンラインアート」が初めて登場 | https://note.com/rinfa_ai/n/n759dff3089b1 |
| 2025-08-16 | 最初の有料プロンプト集（ファッションコーデ） | https://note.com/rinfa_ai/n/n7aee3099261d |
| 2025-08-23 | SUZURIでショップ開設 | https://note.com/rinfa_ai/n/ne1dddc216edf |
| 2025-08-28 | あかりさんの共同マガジン開設のお祝いイラスト | https://note.com/rinfa_ai/n/ne6aa86e9412a |
| 2025-08-29 | 表示名「リンファ@AIアート・ドキュメンタリスト」が確認できる最初の記事 | https://note.com/rinfa_ai/n/nb4eeca7a92df |
| 2025-08-31 | Threadsを開始 | https://note.com/rinfa_ai/n/n95374e566918 |
| 2025-09-04 | 「AIイラスト設計大全＋プロンプト設計GPT」公開（現在のタイトル。公開後に追記・更新されている） | https://note.com/rinfa_ai/n/n6911fa358b1a |
| 2025-09-06 | Threadsフォロワー100名突破 | https://note.com/rinfa_ai/n/nf4e55e9dfcb1 |
| 2025-09-12 | Threads 2週間目でフォロワー200名突破 | https://note.com/rinfa_ai/n/n1fc94dad07d2 |
| 2025-09-14 | 最初の自己紹介＆サイトマップ | https://note.com/rinfa_ai/n/n67d36d0ed328 |
| 2025-09-18 | LINEスタンプ販売開始のお知らせ | https://note.com/rinfa_ai/n/n54e2c9e39db1 |
| 2025-09-19 | あかりさんとのコラボ記事 | https://note.com/rinfa_ai/n/n4cee4f0392f6 |
| 2025-09-30 | Threads開始1か月の日にアカウント停止（凍結） | https://note.com/rinfa_ai/n/n49566af7aa88 |
| 2025-10-06 | Threads 2度目の凍結 | https://note.com/rinfa_ai/n/n1af190871f28 |
| 2025-10-20 | Threads 1か月の閲覧数10万突破 | https://note.com/rinfa_ai/n/n2119ca59bd1d |
| 2025-10-28 | Threadsフォロワー600→830人 | https://note.com/rinfa_ai/n/n4c74ff4a37b0 |
| 2025-11-14 | 依頼を受けたAI動画ツールのレビュー（最初の案件記事） | https://note.com/rinfa_ai/n/n98ba6710eb79 |
| 2025-12-20 | noteの連続投稿が180日に（記事内の記述） | https://note.com/rinfa_ai/n/n73771e1e84bf |
| 2025-12-26 | 2025年の振り返り | https://note.com/rinfa_ai/n/nc3281f542a1a |
| 2026-01-10 | Nijijourney V7 実装直後のレビュー | https://note.com/rinfa_ai/n/nb7ee2c3598d4 |
| 2026-01-20 | Threadsで1週間にフォロワー800名増加 | https://note.com/rinfa_ai/n/n5f287640fdd2 |
| 2026-01下旬〜 | 連日投稿が途切れ、投稿間隔があく（2026-01-24の次が01-26）。のちに「連続投稿は180日ほど」「毎日投稿をやめてからはThreadsの方に力を入れていました」と記載 | `rinfa_articles.csv` ／ https://note.com/rinfa_ai/n/nacbf8abd4f7a |
| 2026-02-04 | Threads 1ヶ月でフォロワー1100→3600人 | https://note.com/rinfa_ai/n/ne73d8fb32b87 |
| 2026-02-18 | Threads 月80万インプレッション | https://note.com/rinfa_ai/n/ndf4200c82c72 |
| 2026-02-24 | マダムのコラムを再開 | https://note.com/rinfa_ai/n/n5d3626f2761c |
| 2026-03-10 | Threads運用の有料記事を公開 | https://note.com/rinfa_ai/n/nf914edd26989 |
| 2026-03-26 | Threads開始7ヶ月でフォロワー1万達成 | https://note.com/rinfa_ai/n/nbf0d0a90c03e |
| 2026-03-31 | 2.2万いいねの投稿の振り返り | https://note.com/rinfa_ai/n/n2d4e446880a8 |
| 2026-04-16 | Threadsで2回目のバズ（157万閲覧・8万いいね） | https://note.com/rinfa_ai/n/n51afb5644fcd |
| 2026-04-17 | Threadsフォロワー1.5万・月間閲覧数300万超 | https://note.com/rinfa_ai/n/nbaa6b936b23c |
| 2026-04-24 | Threadsのサブアカウントが開設2時間で凍結 | https://note.com/rinfa_ai/n/n46c3bafc6318 |
| 2026-05-02 | 2本目の自己紹介＆サイトマップ（Threadsフォロワー1.7万人と記載） | https://note.com/rinfa_ai/n/n42e179bb4b7b |
| 2026-05-08〜06-01 | 投稿なし | `rinfa_articles.csv` |
| 2026-06-02 | Substackを開始 | https://note.com/rinfa_ai/n/n1d14bce47a0d |
| 2026-06-05 | マガジン「リンファの小さなAIイラストギャラリー」開始 | https://note.com/rinfa_ai/n/nbe1223e5b3c4 |
| 2026-06-19 | Threadsフォロワー2万人 | https://note.com/rinfa_ai/n/n8c40ff81421a |
| 2026-06-23 | 現在の自己紹介記事（Threadsフォロワー2万名超、スキ累計1万超と記載） | https://note.com/rinfa_ai/n/n1c210561350c |
| 2026-06-26 | マダムの朝活コラムを連日更新で再開 | https://note.com/rinfa_ai/n/nd1085b2ff00e |
| 2026-06-28 | アカリウム創作大賞に短編小説で応募 | https://note.com/rinfa_ai/n/nf36689169430 |
| 2026-07-04 | マダム・ゴールドフィンガーのKindle 1冊目の報告 | https://note.com/rinfa_ai/n/n0d597fce6637 |
| 2026-07-11 | Kindle 2冊目に触れた記事 | https://note.com/rinfa_ai/n/n9c0816130550 |
| 2026-08-07 | タイトルに【PR】と付いた最初の記事 | https://note.com/rinfa_ai/n/n2cb2e0edc983 |
| 2026-08-14 | 初めての人向けの案内ページを公開 | https://note.com/rinfa_ai/n/nad363ccff4ff |
| 2026-08-19 | 「ミニtips＆AIイラストギャラリー」開始 | https://note.com/rinfa_ai/n/n31de5813fbe1 |
| 2026-09-01 | メンバーシップのプラン「設計室だより」開始（記事APIの日時） | 記事APIの `circle_plans.start_at` ／ https://note.com/rinfa_ai/n/nf30db2997d91 |
| 2026-09-03 | アカリウムお題ガチャ（AIイラスト版）を開始 | https://note.com/rinfa_ai/n/ned30cf4359ec |
| 2026-09-09 | マダムの朝活コラムの直近の回 | https://note.com/rinfa_ai/n/n1a8db3021670 |
| 2026-10-01 | AIゲームのレビューを開始（ふみまる20秒ラン） | https://note.com/rinfa_ai/n/nf9c3b7d3230f |
| 2026-10-05 | 「ふみまる20秒ラン 最速王決定戦」完走の感想（きょんが初めて記事に登場） | https://note.com/rinfa_ai/n/n81bea3af9ca6 |
| 2026-10-14 | ChatGPTとCodexで戦略系RPGの制作を開始 | https://note.com/rinfa_ai/n/nc0668cc50fff |
| 2026-10-23 | Threadsを約3週間休み、フォロワーが393人減ったと報告 | https://note.com/rinfa_ai/n/n0b24869b3b63 |
| 2026-10-25 | AIエージェント「Muse」でThreadsを分析 | https://note.com/rinfa_ai/n/n264c43b5b658 |
| 2026-11-09 | 現在の固定記事を公開 | https://note.com/rinfa_ai/n/nf353ac0cd3e3 |
| 2026-11-13 | MuseにThreads運用の8割を任せる実験を開始（サブアカウント） | https://note.com/rinfa_ai/n/n637f9614cd46 |
| 2026-11-21 | Threadsフォロワー2.2万人（2026年11月20日時点と記載） | https://note.com/rinfa_ai/n/nef7a16c9a782 |
| 2026-11-25 | 最新記事（nijijourney v8の実測） | https://note.com/rinfa_ai/n/n5a63f60fa6a7 |

## D. キャラクター・見た目

### リンファさん本人のキャラクター

- 本人を表すキャラクターの名前・設定を説明した記事は見つからなかった
- アイコン画像（確認済み）: モノクロ（白黒）の絵に、ピンク・水色・黄色の差し色が散っているアニメ調の女の子。帽子（キャップ）をかぶり、首にヘッドホン、パーカー姿で、歯を見せて笑っている。目は赤〜ピンク。この子に名前があるかは不明
- ヘッダー画像と案内ページの見出し画像（確認済み）: 金髪のボブで、青いベレー帽、青いチェックのジャケットを着たアニメ調の女の子。ヘッダーには「偶然から、設計へ。プロンプト設計で思い通りに描く。」「AIイラスト × プロンプト設計 × Threads運用を発信しています。」の文字。この子の名前・設定は記事に見つからなかった
- 文章上の特徴: 一人称は「私」。自分を「私リンファ」と書く箇所がある（例 https://note.com/rinfa_ai/n/ncb8ae2a51a42）

### マダム・ゴールドフィンガー（オリジナルキャラクター）

- 記事に書かれている設定:
  - 「俺は、ターバンと水晶玉を愛する自称“インチキ占い師”。」（https://note.com/rinfa_ai/n/n4c338a4aca6f）
  - 一人称は「俺」。読者を「お前」「お前さん」と呼ぶ。口ぐせは「ふふふ……」「ズバッと」
  - リンファさんの説明: 「note初期のころから、時々出していたキャラクターです。」「「お前」「お前さん」と呼びかけてくる、 インチキ占い師風の毒舌？キャラ。」「マダムの毒舌って、よく見ると否定はしていないんです。」（https://note.com/rinfa_ai/n/n0d597fce6637）
  - マガジンの説明文: 「ターバン巻いたインチキ占い師、マダム・ゴールドフィンガーが、 嘘のような言葉で人生の核心をズバッと突くコラムシリーズ。」（https://note.com/rinfa_ai/m/m098c328c0164 ）
  - Kindleの表紙について「表紙には、もちろんマダム・ゴールドフィンガー本人を登場させています。」（https://note.com/rinfa_ai/n/n9c0816130550）
- 見出し画像で確認できた見た目（確認済み・2枚）: 紫の髪、金色の目、星の飾りが付いた金と紺の頭飾り（ターバン風）、紫と紺の衣装に金の装飾、黒い手袋。年齢・性別の設定は記事に見つからなかった

### そのほかのキャラクター

- セレナ: 短編小説『青の星砂が落ちるとき』の登場人物（https://note.com/rinfa_ai/n/nf36689169430）。見た目の設定は未確認
- Threadsサブアカウント用のAIキャラクター: 「キャラクターの性格や口調、考え方などを細かく設定」したと書かれているが、「アカウント自体は秘密です！」とあり名前は不明（https://note.com/rinfa_ai/n/n637f9614cd46）
- 「リンファ作:かわいい猫のキャラクター」: ChatGPTのスケッチ機能の検証で自分で描いた猫（https://note.com/rinfa_ai/n/n44cab4aef0ff）
- 制作中のゲームのキャラクター: 固定記事の追記に「SDXLとCodexを使ったAIゲーム開発用のキャラクターデザインイラストを公開」とある。名前は不明（https://note.com/rinfa_ai/n/nf353ac0cd3e3）
- 「弟子」: 記事のコメントで難題を出してきた相手として登場する（「ししょーだったら…」）。誰なのかは記事に書かれていない（https://note.com/rinfa_ai/n/n25cb7fca85c9）

### 見た目が分かる画像

画像を開いて確認したもの:

1. アイコン（モノクロ×差し色の女の子）: https://assets.st-note.com/production/uploads/images/211235430/profile_11c1466a21cb3b4cfbd3a216e4fd9a5c.jpg?fit=bounds&format=jpeg&quality=85&width=330
2. ヘッダー（金髪・青いベレー帽の女の子と「偶然から、設計へ。」の文字）: https://assets.st-note.com/production/uploads/images/272418779/wallpaper_landscape_296baa94a311b02f2d8bc681c6e16fdb.png
3. マダム・ゴールドフィンガー（Kindle報告記事の見出し画像。「noteマンへ一歩」の文字入り）: https://assets.st-note.com/production/uploads/images/291375787/rectangle_large_type_2_66f0c802fb7a095e34b15d199f6fb2f4.png?fit=bounds&quality=85&width=1280
4. マダム・ゴールドフィンガー（朝活コラムの見出し画像。「マダム・ゴールドフィンガー［朝活コラム］魂の目覚め」の文字入り）: https://assets.st-note.com/production/uploads/images/254048877/rectangle_large_type_2_5c7e484976673b55c0abd1d6e09cbefe.png?fit=bounds&quality=85&width=1280
5. ネオンラインアートの作例（「リンファの小さなAIイラストギャラリー」の見出し画像。黒背景に水色のネオン線の女の子と蓮の花）: https://assets.st-note.com/production/uploads/images/286572433/rectangle_large_type_2_17ddc177e7d8e5fb906097e51eb86032.png?fit=bounds&quality=85&width=1280
6. 案内ページの見出し画像（金髪・青いベレー帽の女の子と「どこから読めばいいの!? 3つの入口で迷わない！」の文字）: https://assets.st-note.com/production/uploads/images/303172461/rectangle_large_type_2_1eb88b038aaedc80688d5b62b7b32f81.png?fit=bounds&quality=85&width=1280
7. 自己紹介記事の見出し画像（「自己紹介」の文字と白い猫。人物は描かれていない）: https://assets.st-note.com/production/uploads/images/288028170/rectangle_large_type_2_b667ee39848d8858f3f922a8d6b3e698.png?fit=bounds&quality=85&width=1280

未確認のもの（URLのみ記録。開いて見ていない）:

- note最初の記事「夏の夜祭」の本文の画像（見出し画像は設定なし）: https://assets.st-note.com/img/1690961827356-rKAZYxAvZq.png
- 「リンファ作:かわいい猫のキャラクター」が載っている記事の見出し画像: https://assets.st-note.com/production/uploads/images/312169444/rectangle_large_type_2_6c7952dc56a53f2077317940b656dca4.png?fit=bounds&quality=85&width=1280
- 固定記事の見出し画像: https://assets.st-note.com/production/uploads/images/337192069/rectangle_large_type_2_96ad7292ddca797971ee2168a162489d.png?fit=bounds&quality=85&width=1280
- フォロー時メッセージの画像: https://assets.st-note.com/production/uploads/images/205159644/a421ad1a5fb4c2ae5ea183bfdcbd2d39.jpg?fit=bounds&format=jpeg&height=500&quality=85&width=500

## E. きょんとの関わり

タイトルと本文を「きょん」「kyownruby」「るびぃ」で検索した。該当は2件。全件を `rinfa_kyon_mentions.csv` に保存した。

### 経緯（記事に書かれている順）

1. 2026-10-01・2026-10-03: 心野けいかさんのゲーム「ふみまる20秒ラン」の記事を2本書いている。この2本にきょんの名前は出てこない。2本目には「追ってくる人々に背中を捉えられないように更に記録を更新し続ける」「ついに1650m台に乗った」とある（https://note.com/rinfa_ai/n/nf9c3b7d3230f ／ https://note.com/rinfa_ai/n/n9003f4f1e253）
2. 2026-10-05: 記事にきょんが初めて登場する（タイトル「強敵と書いて「きょん」と読む。【ふみまる20秒ラン】完走した感想」、出現9回）。書かれている内容は次のとおり（https://note.com/rinfa_ai/n/n81bea3af9ca6）
   - 10月4日の23時59分に締め切られた「ふみまる20秒ラン最速王決定戦」の感想
   - 一昨日の時点でリンファさんは1650mで「独走状態」だった
   - 最終日の朝にきょんが1643m、その後リンファさんのスマホでの記録1648mに並び、昼過ぎに1652mで1位に。リンファさんは1位から陥落
   - リンファさんは最終日の19時過ぎに1位へ返り咲き、その後は「ゴールするたびに「きょん」という名前と数字をランキングでひたすら確認」したと書いている
   - きょんは最終的に1655m。リンファさんは1656mの記録を録画できたと書いている
   - 「ふみまる20秒ラン「最速王決定戦」で1番楽しかった時間は、きょんさんに記録を抜かされてからの数時間でした。」
   - 「その名は「きょん」」の直後に、きょんのnote記事が埋め込まれている: 「20秒でどこまで走れる？「ふみまる20秒ラン」にゲーマーが挑んだ結果🤭」 https://note.com/kyownruby/n/n08e2a021f8e9 （2026-10-04公開。タイトルと公開日はきょん側の記事APIで確認）
3. 2026-10-13: 心野けいかさんのゲーム「ロザンナから逃げろ」のレビュー記事の追伸（P.S.）に登場（出現2回）。「ランキング1位は取れましたが、2位には強敵（きょん）の姿が。」「きょんさんには寝ててもらいたいものです….＼(~o~)／」。本文には1位が47.34秒、2位との差が0.01秒とある（2位が誰かは本文では名指しされておらず、P.S.で「2位には強敵（きょん）の姿が」と書かれている）（https://note.com/rinfa_ai/n/n3c08725fd71b）
4. 2026-10-15: 「ロザンナから逃げろ」の続報。きょんの名前は出てこない（https://note.com/rinfa_ai/n/ne690f6a1c55a）

### 呼び方

- 「きょん」（ランキング上の名前として。かぎかっこ付き）
- 「強敵（きょん）」（タイトルは「強敵と書いて「きょん」と読む。」）
- 「ヤツ」（「しかし最終日。ヤツが現れた。」）
- 「きょんさん」（敬称付き。2件どちらにも出る）
- 2件とも「きょん」と「きょんさん」が同じ記事の中で使われていて、時期による呼び方の変化は確認できない
- 記事内でのたとえ: 「これが恋の病というヤツか！！( ﾟДﾟ)」「タイトルにするなら「恐怖！迫り来るきょんの影！！」」「本当の鬼は…き…ょ…..？( ﾟДﾟ)」（いずれも上記2記事）

### 出会い・やりとり・コラボ

- 出会いの経緯: 記事に書かれていない（不明）。最初の登場は「ふみまる20秒ラン」のランキングで競った相手として
- コメントやSNSでのやりとり: 記事本文には書かれていない（コメント欄は今回の取得対象外）
- コラボ企画: きょんとのコラボ記事は見つからなかった
- 定型文での繰り返しの言及: なし

### きょんしぷ・きょんの記事・ツール・ゲームへの言及

- 「きょんしぷ」: 言及なし
- きょんの記事: 上記の埋め込み1件（https://note.com/kyownruby/n/n08e2a021f8e9 ）
- きょんのツール・きょんが作ったゲーム: 言及なし（記事に出てくるゲームは心野けいかさん、ぽてむしさん、スイさんの作品）
- きょんのnote開始時期に触れた記述: なし

### 参考: 本文以外のデータ

- 記事APIの `content_raters`（記事の評価者として表示されるユーザーの一覧）に kyownruby が含まれる記事が10件あった。本文やタイトルでの言及ではないので、`rinfa_kyon_mentions.csv` には入れていない。この欄が何を意味するかはAPIの項目名からの読み取りで、noteの画面上の表示は確認していない
  - 2025-09-04「ガチャ運に疲れた人へ。狙い通り描けるAIイラスト設計大全＋プロンプト設計GPT」 https://note.com/rinfa_ai/n/n6911fa358b1a
  - 2025-10-04「フォロワー100人 → 300人 → 収益1万円！初心者が有料noteで結果を出した実践ロードマップ　#AIイラスト #note収益化 #有料note」 https://note.com/rinfa_ai/n/n4a133fe7796b
  - 2026-08-27「AIイラストが暗い・崩れる・狙いと違うときの3ステップ診断」 https://note.com/rinfa_ai/n/nf342328cbebd
  - 2026-09-04「メンバーシップ限定｜試作中のAIイラストテーマ」 https://note.com/rinfa_ai/n/n015e49730650
  - 2026-09-07「メンバー限定スマホ用壁紙プレゼント」 https://note.com/rinfa_ai/n/n4cfc6c50cc13
  - 2026-09-28「AIイラストでかぼちゃ灯る夜へ｜ChatGPT用ハロウィン衣装プロンプト20選」 https://note.com/rinfa_ai/n/n3a9c14bf1a8a
  - 2026-10-18「【ChatGPT×Codex】AIゲーム制作で気づいた「AIに任せること・人間が判断すること」」 https://note.com/rinfa_ai/n/nc4278166ee99
  - 2026-11-09「AIイラストの世界観は「一番スキなもの」で決めなくてもいい」 https://note.com/rinfa_ai/n/nf353ac0cd3e3
  - 2026-11-10「Muse AIでThreads投稿を4つの時点で観測する。仮説検証の手順とプロンプト配布」 https://note.com/rinfa_ai/n/n19ce623b5fc0
  - 2026-11-15「Meta Museで何をすればいい？ Threadsの定点観測から始めるAIエージェント活用」 https://note.com/rinfa_ai/n/ne82d09b6e52f

## F. おすすめ記事

### おすすめ（14本）

| 公開日 | タイトル | URL | 1行の要約 | 選んだ理由 |
| --- | --- | --- | --- | --- |
| 2026-06-23 | 自己紹介。はじめてのnoteからの積み重ねとAIイラストの軌跡。 | https://note.com/rinfa_ai/n/n1c210561350c | 2023年春にAIイラストを始めてから「設計」という考え方にたどり着くまでと、いま出しているコンテンツの紹介 | プロフィールに設定されている自己紹介。経歴と現在の軸がまとまっている |
| 2026-08-14 | 初めてのnoteの方へ｜AIイラストが思い通りにならない時の3つの入口 | https://note.com/rinfa_ai/n/nad363ccff4ff | はじめる／直す／試すの3つの入口から、読む記事を案内するページ | 本人が「最初の案内所」として作ったページ。活動の全体像が分かる |
| 2026-08-08 | AIイラストは何から始める？最初の一枚を作る4つの要素 | https://note.com/rinfa_ai/n/n281fca187ed7 | 最初の一枚を作るために決める4つの要素の解説 | 案内ページで最初に勧めている無料記事 |
| 2026-11-09 | AIイラストの世界観は「一番スキなもの」で決めなくてもいい | https://note.com/rinfa_ai/n/nf353ac0cd3e3 | ネオンラインアートを軸に選んだ判断と、軸を仮決めするワーク（後半は有料） | 固定記事。スキ数が全記事で最多 |
| 2025-08-02 | 無料＆簡単！量産型AIイラストから抜け出すネオンアート×DALLの新体験 | https://note.com/rinfa_ai/n/nd39fbcc1c75b | 黒背景にネオンの線で描く「ネオンラインアート」をDALLで作る方法 | 現在の軸になっている作風の初期の記事 |
| 2025-07-29 | AIイラスト制作｜モノクロ×差し色で“視線を奪う”キャラクターの作り方 | https://note.com/rinfa_ai/n/n70ed631a4939 | モノクロに差し色を入れる制作の流れとプロンプト改善の過程 | 「モノクロ×差し色」シリーズの初回 |
| 2025-08-26 | AI画像生成失敗ギャラリー｜上手くいかない時は潔く撤退するのも手 | https://note.com/rinfa_ai/n/n431f4b539112 | うまくいかなかったイラストと使ったプロンプトを並べた「供養回」 | 失敗も公開する姿勢が分かる記事 |
| 2025-10-05 | 私のAIイラスト履歴書～初心者の頃、1年目を振り返る～  #AIイラスト #DALL #アート#AI #生成AI #AIとやってみた #AI画像生成 #画像生成AI #AIアート #毎日note #毎日更新 #毎日投稿 #私の作品紹介 #アートを楽しむ | https://note.com/rinfa_ai/n/nee886510064f | 2023年4月の終わりごろからの1年間の作品を時期ごとに振り返る | 経歴の裏付けになる。コンテスト入賞の記述もある |
| 2025-10-20 | Threads活動記録｜1か月の閲覧数10万突破。数字の裏に見えた“伸びる投稿”の法則　#AIイラスト #nijijourney #アート #AI #生成AI #AIとやってみた #プロンプト #プロンプト設計 #プロンプトエンジニアリング #AI画像生成 #画像生成AI #AIアート #毎日note #note #毎日更新 #毎日投稿 #スキしてみて #Threads | https://note.com/rinfa_ai/n/n2119ca59bd1d | Threads開始後の1か月の活動記録 | 案内ページで本人が紹介しているThreads記録 |
| 2025-12-26 | 「正解」を探すより「反応」を楽しもう。AIイラストと駆け抜けた私の2025年振り返り　#AIイラスト #nijijourney #AI画像生成 #画像生成AI #AIアート #アート #AI #生成AI #毎日note #毎日更新 #毎日投稿  #今年の振り返り | https://note.com/rinfa_ai/n/nc3281f542a1a | ネオンラインアートで反響を得たことや、言語化の苦労を振り返る | 1年の節目。失敗を「データ」と捉える考えが書かれている |
| 2026-06-19 | Threadsでフォロワー数2万人まで伸びた理由｜全員に好かれる投稿をやめたら見えたこと | https://note.com/rinfa_ai/n/n8c40ff81421a | Threadsフォロワー2万名超えの報告と、そこまでに変えたこと | 大きな節目の報告 |
| 2026-07-04 | note発の毒舌?占い師、250円のKindleで動き出しました──「noteマンへの一歩」はじめます | https://note.com/rinfa_ai/n/n0d597fce6637 | マダム・ゴールドフィンガーをKindle本にした経緯と、キャラの口調の調整 | オリジナルキャラクターの設定と本人の思い入れが書かれている（価格の話を含むので扱いに注意） |
| 2026-10-05 | 強敵と書いて「きょん」と読む。【ふみまる20秒ラン】完走した感想 | https://note.com/rinfa_ai/n/n81bea3af9ca6 | ふみまる20秒ラン最速王決定戦で、きょんと記録を競った最終日の感想 | きょんが登場する記事。ゲーム好きの一面が出ている |
| 2026-10-14 | 【AIゲーム制作】ChatGPTとCodexで、戦略系RPGを作り始めました！ | https://note.com/rinfa_ai/n/nc0668cc50fff | AIゲームを遊ぶ側から作る側へ。ボードゲーム型の戦略RPGを作り始めた報告 | 最近始まった新しい活動 |

### スキ数の多い順 トップ20

スキ数は2026-11-25時点（変動する）。

| 順位 | スキ数 | 公開日 | タイトル | URL |
| --- | --- | --- | --- | --- |
| 1 | 459 | 2026-11-09 | AIイラストの世界観は「一番スキなもの」で決めなくてもいい | https://note.com/rinfa_ai/n/nf353ac0cd3e3 |
| 2 | 270 | 2026-08-14 | 初めてのnoteの方へ｜AIイラストが思い通りにならない時の3つの入口 | https://note.com/rinfa_ai/n/nad363ccff4ff |
| 3 | 164 | 2026-06-23 | 自己紹介。はじめてのnoteからの積み重ねとAIイラストの軌跡。 | https://note.com/rinfa_ai/n/n1c210561350c |
| 4 | 157 | 2025-09-04 | ガチャ運に疲れた人へ。狙い通り描けるAIイラスト設計大全＋プロンプト設計GPT | https://note.com/rinfa_ai/n/n6911fa358b1a |
| 5 | 152 | 2026-01-12 | 朝活AIアート｜成人の日！振り袖メカ娘　#AIイラスト #nijijourney #AI画像生成 #画像生成AI  #AI #生成AI #AIとやってみた #プロンプト #プロンプト設計 #プロンプトエンジニアリング #毎日note #毎日更新 #毎日投稿 #Gemini | https://note.com/rinfa_ai/n/na9e9fcbfb08f |
| 6 | 137 | 2026-11-15 | Meta Museで何をすればいい？ Threadsの定点観測から始めるAIエージェント活用 | https://note.com/rinfa_ai/n/ne82d09b6e52f |
| 7 | 124 | 2026-11-13 | Muse AIにThreads運用の8割を任せたら、どこまで伸びる？【実験開始】 | https://note.com/rinfa_ai/n/n637f9614cd46 |
| 8 | 104 | 2026-11-21 | Threadsに載せるAIイラストのネタに迷ったら｜4つの発想と無料プロンプト10本 | https://note.com/rinfa_ai/n/nef7a16c9a782 |
| 9 | 103 | 2026-11-07 | 【画像生成AI比較】Meta社のMuse AI・nijijourney v7・ChatGPT Images 2.6で同じAIイラストを作ってみた | https://note.com/rinfa_ai/n/n0a21eb681a04 |
| 10 | 93 | 2025-10-11 | 初心者安心、解説付き！ 夢かわいい世界で描く、中秋の名月の小さな物語｜AIイラスト制作記 #AIイラスト #Midjourney #アート #AI #生成AI #AIとやってみた#プロンプト #プロンプト設計 #プロンプトエンジニアリング#AI画像生成#画像生成AI #AIアート #毎日note #毎日更新 #毎日投稿 #私の作品紹介#アートを楽しむ | https://note.com/rinfa_ai/n/n3c6839d43457 |
| 11 | 90 | 2025-07-31 | AIイラストプロンプト調整解説～しおりんさんの最高傑作を再現＆再現性UPしてみる回！～ | https://note.com/rinfa_ai/n/ne35383fb2436 |
| 12 | 89 | 2025-11-06 | 月とウサギの幻想風景｜AIartギャラリー #AIイラスト #Midjourney #アート #AI #生成AI #AI画像生成 #画像生成AI #AIアート | https://note.com/rinfa_ai/n/n00deec31ae39 |
| 13 | 84 | 2025-12-18 | 【制作ログ】「細かく指定しない」が正解だった？NanoBananaProでnote用CTAを作ってみた過程　｜ AI画像生成 ｜ 生成AI ｜ AIイラスト ｜ 画像生成AI ｜ 毎日投稿 ｜ 毎日更新 ｜ 毎日note ｜ aiart ｜ Gemini ｜ AIアート ｜ | https://note.com/rinfa_ai/n/ndba1f53876e8 |
| 14 | 79 | 2025-10-10 | 初心者でも出来る！三日月のオブジェに眠る雪の街｜AIイラスト制作記 #AIイラスト #Midjourney #アート #AI #生成AI #AIとやってみた#プロンプト #プロンプト設計 #プロンプトエンジニアリング#AI画像生成#画像生成AI #AIアート #毎日note #毎日更新 #毎日投稿 #私の作品紹介#アートを楽しむ | https://note.com/rinfa_ai/n/nb89fcb61cf15 |
| 15 | 76 | 2025-10-20 | Threads活動記録｜1か月の閲覧数10万突破。数字の裏に見えた“伸びる投稿”の法則　#AIイラスト #nijijourney #アート #AI #生成AI #AIとやってみた #プロンプト #プロンプト設計 #プロンプトエンジニアリング #AI画像生成 #画像生成AI #AIアート #毎日note #note #毎日更新 #毎日投稿 #スキしてみて #Threads | https://note.com/rinfa_ai/n/n2119ca59bd1d |
| 16 | 74 | 2025-11-12 | AIイラスト制作記｜Crystal Balance – 朝と夜を量る猫― 光と闇を見守る、小さな調和の物語 ― #AIイラスト #Midjourney #アート #AI #生成AI #AIとやってみた #プロンプト #プロンプト設計 #プロンプトエンジニアリング #AI画像生成 #画像生成AI | https://note.com/rinfa_ai/n/ndf38c76b242d |
| 17 | 74 | 2026-06-06 | 【プロンプト付き】ChatGPT画像生成で出来栄えがよくなりやすい3つのAIイラストスタイル | https://note.com/rinfa_ai/n/n7d01b27b89bd |
| 18 | 72 | 2025-09-14 | #自己紹介 ＆ #サイトマップ｜リンファ  ~プロンプト構築のスペシャリスト~ #AIイラスト #AIart | https://note.com/rinfa_ai/n/n67d36d0ed328 |
| 19 | 72 | 2025-10-26 | AIアートギャラリー｜お月見出来るミニチュアセット #AIイラスト #Midjourney #アート  #AI画像生成 #画像生成AI #AIアート | https://note.com/rinfa_ai/n/nf11dd66f8d7a |
| 20 | 71 | 2025-08-26 | AI画像生成失敗ギャラリー｜上手くいかない時は潔く撤退するのも手 | https://note.com/rinfa_ai/n/n431f4b539112 |

- 1位の固定記事には「Xでリポストすると、無料で読めます」というキャンペーンが設定されている（https://note.com/rinfa_ai/n/nf353ac0cd3e3）

## G. 引用候補

すべて記事APIの本文（1件はタイトルと同文の語録）と照合済み。1記事につき1つ。

| 引用 | 公開日 | URL | メモ |
| --- | --- | --- | --- |
| 設計が、なかっただけでした。 | 2026-06-23 | https://note.com/rinfa_ai/n/n1c210561350c |  |
| 数字は、あくまで通過点です。 | 2026-05-02 | https://note.com/rinfa_ai/n/n42e179bb4b7b |  |
| まぁ、今でも普通に失敗します😇 | 2026-08-14 | https://note.com/rinfa_ai/n/nad363ccff4ff |  |
| 「あ、これは違ったな」という失敗は、次のプロンプトを良くするための大事なデータ。 | 2025-12-26 | https://note.com/rinfa_ai/n/nc3281f542a1a |  |
| 直感を信じて進むと、道はあとから拓けていく | 2026-01-02 | https://note.com/rinfa_ai/n/nd17972a70298 |  |
| 全部好きなんですが？( ﾟДﾟ) | 2026-11-09 | https://note.com/rinfa_ai/n/nf353ac0cd3e3 |  |
| 「ついに抜かされた」という絶望感とともに、自然と笑みがこぼれる自分がいました。 | 2026-10-05 | https://note.com/rinfa_ai/n/n81bea3af9ca6 |  |
| なんとも地味な更新ですが、1mだって立派な成長ですからね！ | 2026-10-12 | https://note.com/rinfa_ai/n/nee45e6e2a9b0 |  |
| 戦略RPGを作っているはずが、開発者本人の識別能力に問題が発生しております。 | 2026-10-14 | https://note.com/rinfa_ai/n/nc0668cc50fff |  |
| そんな感じで、わりと軽く乗りました(;'∀') | 2026-06-02 | https://note.com/rinfa_ai/n/n1d14bce47a0d |  |
| 今回は思い通りにいかなかったイラスト達の供養回です（合掌） | 2025-08-26 | https://note.com/rinfa_ai/n/n431f4b539112 |  |
| 「運命の扉は、ノックよりもキックで開け。」 | 2025-06-23 | https://note.com/rinfa_ai/n/n4c338a4aca6f | マダム・ゴールドフィンガーの語録として書かれた一文 |

### あいさつ・決まり文句

出現件数は、その表現がタイトルか本文に1回以上出てくる記事の数（全508件中）。

| 表現 | 出現件数 | 例のURL | メモ |
| --- | --- | --- | --- |
| (´ー｀) ／ (´ｰ｀) | 204件 | 初出 2025-08-05 https://note.com/rinfa_ai/n/n71cc28af3e2f ／ 直近 2026-11-25 https://note.com/rinfa_ai/n/n5a63f60fa6a7 | 文末に添える顔文字 |
| (;'∀') | 56件 | 初出 2025-09-16 https://note.com/rinfa_ai/n/nd6ff89f4b457 ／ 直近 2026-11-13 https://note.com/rinfa_ai/n/n637f9614cd46 | 失敗や困った場面の顔文字 |
| ( ﾟДﾟ) | 31件 | 初出 2025-09-11 https://note.com/rinfa_ai/n/n2ac4805174f7 ／ 直近 2026-11-12 https://note.com/rinfa_ai/n/nf3455d45d92c | 驚き・ツッコミの顔文字 |
| (/・ω・)/✨✨✨ | 24件 | 初出 2026-06-11 https://note.com/rinfa_ai/n/n1a11fc7d7897 ／ 直近 2026-11-09 https://note.com/rinfa_ai/n/nf353ac0cd3e3 |  |
| P.S. | 45件 | 初出 2026-02-17 https://note.com/rinfa_ai/n/n7424cc2a6c81 ／ 直近 2026-11-25 https://note.com/rinfa_ai/n/n5a63f60fa6a7 | 記事末の追伸 |
| 〜でございます | 16件 | 初出 2025-07-31 https://note.com/rinfa_ai/n/ne35383fb2436 ／ 直近 2026-11-06 https://note.com/rinfa_ai/n/na85dd4c681fc |  |
| こんばんは、リンファです | 5件 | 初出 2026-06-05 https://note.com/rinfa_ai/n/nbe1223e5b3c4 ／ 直近 2026-10-20 https://note.com/rinfa_ai/n/nbadc2f6191be | 冒頭のあいさつ（毎回ではない） |
| おはようさん。 | 70件 | 初出 2025-07-07 https://note.com/rinfa_ai/n/nc9f4e82c40a3 ／ 直近 2026-09-09 https://note.com/rinfa_ai/n/n1a8db3021670 | マダム・ゴールドフィンガーの朝活コラムの書き出し |
| ふふふ…… | 86件 | 初出 2025-06-23 https://note.com/rinfa_ai/n/n4c338a4aca6f ／ 直近 2026-09-09 https://note.com/rinfa_ai/n/n1a8db3021670 | マダムの口ぐせ |
| お前さん | 72件 | 初出 2025-06-23 https://note.com/rinfa_ai/n/n4c338a4aca6f ／ 直近 2026-09-09 https://note.com/rinfa_ai/n/n1a8db3021670 | マダムの読者への呼びかけ |
| ズバッと | 86件 | 初出 2025-06-23 https://note.com/rinfa_ai/n/n4c338a4aca6f ／ 直近 2026-09-09 https://note.com/rinfa_ai/n/n1a8db3021670 | マダムの決まり文句 |

- 毎回かならず使う冒頭のあいさつは確認できなかった。記事の書き出しは「〜ですよね」のような語りかけや、その日の話題から入るものが多い
- 締めに「P.S.」の追伸を置く形は2026年2月以降の記事に見られる
- 「（誇張しのぶ）」という注記が2件ある（https://note.com/rinfa_ai/n/n25cb7fca85c9 ／ https://note.com/rinfa_ai/n/n1a11fc7d7897）

## H. 数字

「数字／報告した記事のURL／その記事の公開日」の形。お金に関する数字（販売数・価格・収益）はここに入れず、Iにまとめた。

### note

- 記事数 508（変動する）／プロフィールAPI／2026-11-25取得
- フォロワー数 1749（変動する）／プロフィールAPI／2026-11-25取得
- 全記事のスキ数の合計 14102（変動する。`rinfa_articles.csv` の合計）／一覧API／2026-11-25取得
- スキ累計1万超（変動する）／https://note.com/rinfa_ai/n/n1c210561350c／2026-06-23
- 連続投稿180日／https://note.com/rinfa_ai/n/n73771e1e84bf／2025-12-20（https://note.com/rinfa_ai/n/nacbf8abd4f7a／2026-06-03 では「連続投稿は180日ほど」）

### Threads（すべて変動する）

- フォロワー100名突破／https://note.com/rinfa_ai/n/nf4e55e9dfcb1／2025-09-06
- フォロワー200名突破（2週間目）／https://note.com/rinfa_ai/n/n1fc94dad07d2／2025-09-12
- 閲覧数1万越えの投稿／https://note.com/rinfa_ai/n/n30478a27c0bd／2025-09-20
- 1か月の閲覧数10万突破／https://note.com/rinfa_ai/n/n2119ca59bd1d／2025-10-20
- フォロワー600→830人／https://note.com/rinfa_ai/n/n4c74ff4a37b0／2025-10-28
- 1週間で閲覧数12万／https://note.com/rinfa_ai/n/n2b2df464fe0b／2025-11-02
- 1週間でフォロワー800名増加／https://note.com/rinfa_ai/n/n5f287640fdd2／2026-01-20
- 1ヶ月でフォロワー1100→3600人／https://note.com/rinfa_ai/n/ne73d8fb32b87／2026-02-04
- 月80万インプレッション／https://note.com/rinfa_ai/n/ndf4200c82c72／2026-02-18
- 開始7ヶ月でフォロワー1万／https://note.com/rinfa_ai/n/nbf0d0a90c03e／2026-03-26
- 2.2万いいねの投稿／https://note.com/rinfa_ai/n/n2d4e446880a8／2026-03-31
- 157万閲覧・8万いいねの投稿／https://note.com/rinfa_ai/n/n51afb5644fcd／2026-04-16
- フォロワー1.5万・月間閲覧数300万超（開始から約8ヶ月）／https://note.com/rinfa_ai/n/nbaa6b936b23c／2026-04-17
- フォロワー1.7万人／https://note.com/rinfa_ai/n/n42e179bb4b7b／2026-05-02
- フォロワー1.9万人／https://note.com/rinfa_ai/n/nacbf8abd4f7a／2026-06-03
- フォロワー2万名超／https://note.com/rinfa_ai/n/n8c40ff81421a／2026-06-19
- 直近1週間で15投稿・330,876閲覧／https://note.com/rinfa_ai/n/n1827c869f179／2026-08-30
- 約3週間の休止でフォロワー393人減少／https://note.com/rinfa_ai/n/n0b24869b3b63／2026-10-23
- フォロワー2.2万人（2026年11月20日時点と記載。プロフィール文にも「Threadsフォロワー2.2万人」）／https://note.com/rinfa_ai/n/nef7a16c9a782／2026-11-21

### 制作

- AIイラスト歴: 2023年春に開始、「3年」／https://note.com/rinfa_ai/n/n1c210561350c／2026-06-23（プロフィール文にも「3年の試行錯誤」）
- Nijijourney V7で17,278枚生成／https://note.com/rinfa_ai/n/n1455346680e8／2026-01-28
- 設計大全は「5万字超の設計体系」／https://note.com/rinfa_ai/n/n42e179bb4b7b／2026-05-02
- Kindle本（AIイラスト集）計10冊出版／https://note.com/rinfa_ai/n/n67d36d0ed328／2025-09-14（本文に「2025/10月現在」とあり、公開後の更新を含む）
- マダム・ゴールドフィンガーのKindle 1冊目は15の悩みを収録／https://note.com/rinfa_ai/n/n0d597fce6637／2026-07-04

### ゲームの記録（ランキングは変動する）

- ふみまる20秒ラン: 1626m／https://note.com/rinfa_ai/n/nf9c3b7d3230f／2026-10-01
- ふみまる20秒ラン: 1650m台／https://note.com/rinfa_ai/n/n9003f4f1e253／2026-10-03
- ふみまる20秒ラン: リンファさん1656m（録画できた記録）、きょん最終1655m／https://note.com/rinfa_ai/n/n81bea3af9ca6／2026-10-05
- 雷光の戦場: 558,298点でランキング1位／https://note.com/rinfa_ai/n/ncb8ae2a51a42／2026-10-10
- 走れ ぽてむし: 710m／https://note.com/rinfa_ai/n/nee45e6e2a9b0／2026-10-12
- ロザンナから逃げろ: 47.34秒で難しいモードのランキング1位、2位との差0.01秒／https://note.com/rinfa_ai/n/n3c08725fd71b／2026-10-13

### きょんについて記事内で報告されている数字

- ふみまる20秒ラン: 最終日の朝1643m → 昼過ぎ1652m → 最終1655m／https://note.com/rinfa_ai/n/n81bea3af9ca6／2026-10-05
- きょんのnote開始日に触れた記述はリンファさんの記事にはない（きょんのnote開始日は2025年8月20日）

## I. 紹介記事では触れない話題

ここにある内容は紹介記事では **触れない**。ほかの項目には混ぜていない（おすすめ記事のうち1本は価格の話を含むため、その旨を理由欄に注記した）。

### お金の話（触れない）

- 有料note・マガジン・Kindle・LINEスタンプの販売数や収益の報告
  - 「有料note販売数【20部突破】」「Kindle本…累計106冊販売」「LINEスタンプは6件の販売」 https://note.com/rinfa_ai/n/n67d36d0ed328
  - 有料noteの収益化について書いた記事（タイトルに「収益1万円」「販売30部」などの数字） https://note.com/rinfa_ai/n/n4d1b62d658dd ／ https://note.com/rinfa_ai/n/n4a133fe7796b ／ https://note.com/rinfa_ai/n/n6a00b5c61d7c
  - 「有料note＋マガジン 累計80部以上」 https://note.com/rinfa_ai/n/n42e179bb4b7b
  - Kindleのロイヤリティ（「おそらく30円前後」）と価格（250円・390円） https://note.com/rinfa_ai/n/n9c0816130550 ／ https://note.com/rinfa_ai/n/n0d597fce6637
  - 購入したマガジンの元が取れたかどうかの記述 https://note.com/rinfa_ai/n/n4cee4f0392f6
- 記事・マガジン・メンバーシップの価格（設計大全5,980円、プロンプト集の単品価格、メンバーシップ月額500円など）。各有料記事と https://note.com/rinfa_ai/n/nad363ccff4ff などに記載
- SUZURIの開設を「収益化への一歩」と書いた記事 https://note.com/rinfa_ai/n/ne1dddc216edf
- AIツールの契約プランや利用枠の話（ChatGPTのPlusプラン、SUNOの無課金、「貧乏性」という表現など） https://note.com/rinfa_ai/n/nc0668cc50fff ／ https://note.com/rinfa_ai/n/n7fbab1be1559 ／ https://note.com/rinfa_ai/n/n041c95b4e577
- 依頼を受けたレビュー記事（案件・PR）であること自体は活動の事実としてBに記録したが、報酬の有無や金額は記事に書かれていない

### 健康・体質の話（触れない）

- 眼精疲労、目薬とサプリの話 https://note.com/rinfa_ai/n/n67d36d0ed328 ／ https://note.com/rinfa_ai/n/n139730efc2fb
- 年末年始の体調不良、めまい、漢方の話 https://note.com/rinfa_ai/n/nc7f63adb266b ／ https://note.com/rinfa_ai/n/n5021910cf6d8 ／ https://note.com/rinfa_ai/n/n16c550e03540 ／ https://note.com/rinfa_ai/n/n6af77dc82c8d
- お盆明けの不調、体調不良 https://note.com/rinfa_ai/n/n2b9163cfc002 ／ https://note.com/rinfa_ai/n/n4804294f7ee2

### 勤務先・家族など私生活の話（触れない）

- 仕事をしていることが分かる記述（「仕事中」にアイデアが浮かぶ、年末年始やお盆は仕事が忙しい、「寝ている間や仕事中」など）。勤務先や職種は書かれていない https://note.com/rinfa_ai/n/nc3281f542a1a ／ https://note.com/rinfa_ai/n/n5021910cf6d8 ／ https://note.com/rinfa_ai/n/n2b9163cfc002 ／ https://note.com/rinfa_ai/n/ne82d09b6e52f
- 「休日はほぼ丸一日AIイラストを作っていて」という生活の記述 https://note.com/rinfa_ai/n/n67d36d0ed328
- 家族についての実生活の記述は、キーワード検索では見つからなかった（恋愛ショートストーリーやマダムのコラムに出てくる家族・職場は創作・読者の悩みとして書かれたもの）

### SNSアカウントの凍結（扱いはご主人の判断で）

- 指定の3分類には入らないが、Threadsアカウントの凍結の話が複数ある（https://note.com/rinfa_ai/n/n49566af7aa88 ／ https://note.com/rinfa_ai/n/n1af190871f28 ／ https://note.com/rinfa_ai/n/n46c3bafc6318 ／ https://note.com/rinfa_ai/n/n637f9614cd46）。Cの時系列には事実として入れてある。紹介記事で触れるかどうかは判断が必要

## J. 不明のまま残った項目

- リンファさんの本名、年齢、性別、居住地（記事に記述なし）
- 「リンファ」という名前の由来
- noteの表示名を変えた正確な日付、2025-07-05〜2025-08-28 の表示名
- 2023年9月〜2025年6月に投稿が少なかった理由、2026年5月8日〜6月1日に投稿がなかった理由（読んだ範囲では説明なし）
- 「note1周年記念サムネイラスト」の記事で、本人は「私はリンファは特に1周年って事はありません」と書いている。誰の1周年に向けたものかは「とある方」とだけ書かれていて不明（https://note.com/rinfa_ai/n/n1a11fc7d7897）
- アイコンの女の子、ヘッダーの金髪・青いベレー帽の女の子の名前と設定
- マダム・ゴールドフィンガーの年齢・性別などの細かい設定、「note初期のころから」が具体的にいつか（確認できる最初の記事は2025-06-23）
- 2024年2月〜3月に入賞したコンテストの名前と投稿サイト名
- 2025-09-14の自己紹介記事にある「嬉しいお知らせが届きました！」の中身（画像で示されていると見られ、本文からは分からない）
- 「弟子」が誰か
- メンバーシップの開設を告知する専用の記事があるか（見つからなかった）、メンバー数
- 各マガジンの開設日（APIに日付がない。表には収録記事の最古の日付を載せた）
- リンファさんが主催して参加者を募集した企画の有無（見つからなかった）
- 「#夏の1コマ」「#AIイラストチャレンジ」「#にゃんにゃん愛でるの会」「#AIで遊ぼう」の主催者
- Patreonのページと開始日、Discordでの活動の有無
- きょんとの出会いの経緯、記事の外（コメント欄・Threads・X・Discordなど）でのやりとり
- 制作中の戦略RPGのタイトルと公開予定日（「完成日は未定」と記載）
- 有料・メンバーシップ限定部分（31件）の内容
