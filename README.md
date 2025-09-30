```sh
npm install
```

```sh
npm start
```

localhost:3000 に接続

```sh
CREATE TABLE accounts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  username VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);
```
