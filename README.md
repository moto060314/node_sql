# プロジェクトセットアップ

```sh
git clone https://github.com/moto060314/node_sql.git
```

```sh
npm install
```

# 前提準備（mysql）

```sh
CREATE DATABASE test;
```

```sh
USE test;
```

```sh
CREATE TABLE accounts (
id INT AUTO_INCREMENT PRIMARY KEY,
email VARCHAR(255) NOT NULL UNIQUE,
username VARCHAR(100) NOT NULL UNIQUE,
password VARCHAR(255) NOT NULL
);

```

# 起動

```sh
npm start
```

```sh
http://localhost:3000
```
