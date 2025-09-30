const path = require('path');
const express = require('express');
const mysql = require('mysql2/promise');

const app = express();

// ボディパーサ
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 静的ファイル
app.use(express.static(path.join(__dirname, 'public')));

// DB プール
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'test',
  waitForConnections: true,
  connectionLimit: 5,
});

// ルート: フロントページ
app.get('/', (_req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// アカウント登録 API
app.post('/api/accounts', async (req, res) => {
  try {
    const { email, username, password } = req.body;
    if (!email || !username || !password) {
      return res.status(400).json({ error: 'missing fields' });
    }
    const sql = 'INSERT INTO accounts (email, username, password) VALUES (?, ?, ?)';
    await pool.execute(sql, [email, username, password]);
    res.status(201).json({ message: 'created' });
  } catch (e) {
    if (e.code === 'ER_DUP_ENTRY') {
      return res.status(409).json({ error: 'duplicate email or username' });
    }
    console.error(e);
    res.status(500).json({ error: 'server error' });
  }
});

app.listen(3000, () => console.log('http://localhost:3000'));
