const express = require('express');
const OpenAI = require('openai');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// OpenAI クライアントの初期化
const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY
});

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// 一言生成API
app.post('/api/generate', async (req, res) => {
  const { mood } = req.body;
  
  if (!process.env.OPEN_AI_KEY) {
    return res.status(500).json({ 
      error: '環境変数 OPEN_AI_KEY が設定されていません' 
    });
  }

  const moodPrompts = {
    happy: 'とても嬉しい気分',
    sad: '悲しい気分',
    tired: '疲れている',
    unmotivated: 'やる気が出ない',
    normal: '普通の気分'
  };

  const moodText = moodPrompts[mood] || '普通の気分';

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: あなたは「Mia」という名前の優しくて励まし上手なアシスタントです。
ユーザーの気分に合わせて、心に響く短い一言（30文字以内）を生成してください。
温かみがあり、前向きになれるような言葉を選んでください。
絵文字を1つ添えてください。
        },
        {
          role: 'user',
          content: 今の気分: 
        }
      ],
      max_tokens: 100,
      temperature: 0.8
    });

    const quote = completion.choices[0].message.content;
    res.json({ quote });
  } catch (error) {
    console.error('OpenAI API Error:', error);
    res.status(500).json({ 
      error: '一言の生成に失敗しました。しばらくしてから再試行してください。' 
    });
  }
});

app.listen(PORT, () => {
  console.log(Server running at http://localhost:);
});
