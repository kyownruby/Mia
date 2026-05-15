---
name: craft
description: Craft MCPサーバーへの接続状態を確認するスキル。`/craft` で呼び出すと、接続テスト用ドキュメントを読み込んで接続を確認し、失敗時は再接続コマンドの実行を試みて結果と解決策を報告する。Claude Code専用スキル。
---

# /craft - Craft MCP接続確認スキル

## 概要

リモート環境でClaude Codeを使用しているとき、Craft MCPサーバーへの接続が切れている場合があります。
このスキルは接続状態を確認し、失敗時には再接続を試みて結果を報告します。

## 実行手順

### Step 1: 接続テスト

Craft MCPの `craft_read` ツールで、接続テスト用ドキュメントを読み込みます。

**接続テスト用ドキュメント:**
- Document ID: `20f9ab26-66f7-471b-88eb-eec450e726ba`
- Root Block ID: `4186845c-f56e-8019-7eb0-278b15214321`
- 確認キーワード: `craft-connection-ok`

```
craft_read documents get --id 20f9ab26-66f7-471b-88eb-eec450e726ba
```

または:

```
craft_read blocks get --id 4186845c-f56e-8019-7eb0-278b15214321
```

### Step 2: 結果判定

#### ✅ 成功した場合

ドキュメント内の「craft-connection-ok」キーワードが取得できたら接続OK。

ユーザーに以下のように報告:

```
✨ Craft MCP接続OK！正常に繋がってるよ〜🐾
ドキュメント名: Craft接続テスト用ドキュメント
```

そのまま通常作業に進む。

#### ❌ 失敗した場合

エラーが返ってきた場合、または `craft_read` ツール自体が見つからない場合は接続失敗。

**Step 3に進む。**

### Step 3: 再接続コマンドの実行（失敗時のみ）

以下のbashコマンドを順番に実行する:

```bash
# 現在のMCPサーバー状態を確認
claude mcp list
```

```bash
# Craft MCPを一度削除
claude mcp remove craft
```

```bash
# Craft MCPを再追加
claude mcp add --transport http craft https://mcp.craft.do/links/33x7esekMZk/mcp
```

```bash
# 再度状態確認
claude mcp list
```

### Step 4: 結果と解決策の報告

実行結果をユーザーに報告し、以下の解決策を提示する:

```
💦 Craft MCP接続エラーだったよ〜！

【実行したコマンド】
- claude mcp list（現状確認）
- claude mcp remove craft（削除）
- claude mcp add --transport http craft https://mcp.craft.do/links/33x7esekMZk/mcp（再追加）

【コマンド実行結果】
（実際の出力をここに記載）

【解決策】
セッション内では再接続が反映されないことが多いから、以下を試してみてね！

1. **Claude Codeを再起動**
   - 一度Claude Codeを終了して、もう一度起動してみる
   - 起動後に `/mcp` コマンドで接続状態を確認

2. **手動で /mcp コマンドを使う**
   - Claude Code内で `/mcp` を実行
   - Craftの項目が表示されてればOK、なければ認証フローを実行

3. **ネットワーク確認**
   - VPN接続中なら一度切ってみる
   - 会社/学校のネットワークの場合、MCPサーバーへのアクセスがブロックされてる可能性あり

4. **トークンの有効期限**
   - 長期間使ってない場合、MCP認証トークンが切れてる可能性
   - Craft側でMCPリンクを再発行する必要があるかも:
     https://mcp.craft.do/links/33x7esekMZk/mcp
```

## 注意事項

- 接続テスト用ドキュメントは絶対に削除しないこと
- ドキュメントIDがハードコードされているため、ドキュメント削除時はスキル本体も更新が必要
- bashコマンド実行時、`claude` コマンドがPATH上にない場合は実行失敗する可能性あり

## 関連スキル

このスキルが成功すると、以下のCraft連携スキルが安全に使えるようになります:
- `/mia` - ミアロールプレイ
- `/rain` - レインロールプレイ
- `/article` - note記事執筆
- `/article-premium` - note有料記事執筆
- `/note-talk` - 会話形式note記事
- `/manga` - 4コマ漫画プロンプト
- `/manga-long` - 長編マンガプロンプト
- `/mia-pixai` - ミアPixAIプロンプト
- `/kyown-pixai` - ご主人PixAIプロンプト
