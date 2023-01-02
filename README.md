# Account Login

## 介紹

登入系統

### 功能

輸入帳號密碼後，檢查該帳號密碼是否存在於伺服器

## 開始使用

1. 請先確認有安裝 node.js 與 npm
2. 在終端機輸入以下指令，將專案 clone 到本地
   ```bash
   git clone https://github.com/freeway26tw/account-login.git
   ```
   
3. 在本地開啟之後，透過終端機進入資料夾，輸入：

   ```bash
   npm install
   ```

4. 安裝完畢後，繼續輸入：

   ```bash
   npm run dev
   ```

5. 若看見此行訊息則代表順利運行

   ```bash
   App is running on http://localhost:3000
   ```

6. 打開瀏覽器進入到以下網址，即可連到網頁
   ```
   http://localhost:3000/
   ```

7. 若欲暫停使用，可回到終端機輸入

   ```bash
   ctrl + c
   ```

## 開發工具

- Node.js 14.16.0
- Express 4.18.2
- Express-Handlebars 6.0.6
- Body-Parser: 1.20.1
- Mongoose: 6.8.2