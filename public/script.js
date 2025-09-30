const form = document.getElementById('signupForm');
const result = document.getElementById('result');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  result.textContent = '送信中...';

  const formData = new FormData(form);
  const payload = {
    email: formData.get('email'),
    username: formData.get('username'),
    password: formData.get('password'),
  };

  try {
    const res = await fetch('/api/accounts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    if (!res.ok) {
      result.textContent = 'エラー: ' + data.error;
    } else {
      result.textContent = '登録成功';
      form.reset();
    }
  } catch {
    result.textContent = '通信エラー';
  }
});
