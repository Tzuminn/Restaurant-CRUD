# 我的餐廳清單
使用node.js製作的餐廳清單。

## 功能描述

+ 使用者可以在首頁看到所有餐廳與它們的簡單資料：

  - 餐廳照片
  - 餐廳名稱
  - 餐廳分類
  - 餐廳評分
  
+ 使用者可以再點進去看餐廳的詳細資訊：

  - 類別
  - 地址
  - 電話
  - 描述
  - 圖片
  
+ 使用者可以透過搜尋餐廳名稱和類別來找到特定的餐廳

+ 使用者可以按照名稱、料理種類來排序餐廳清單

+ 使用者可以新增自己喜歡的餐廳、也能夠修改或刪除餐廳的資料

+ 使用者註冊會員就可以使用這個網站，可以透過Facebook註冊

## 安裝

1. 開啟終端機輸入以下指令以clone此專案並執行

```
git clone https://github.com/Tzuminn/Restaurant-CRUD.git
```

2. 移動到專案資料夾

```
cd Restaurant
```

3. 安裝npm套件

```
npm install
```
4. 設定環境變數

```
FACEBOOK_ID=SKIP
FACEBOOK_SECRET=SKIP
FACEBOOK_CALLBACK=http://localhost:3000/auth/facebook/callback
SESSION_SECRET=ThisIsUserSecret
MONGODB_URI=mongodb://localhost/Restaurant
PORT=3000
```
5. 載入種子資料

```
npm run seed
```
6. 開啟專案

```
npm run dev
```

當終端機顯示 server is running on http://localhost:3000 ，表示執行成功。

## 專案圖片

### 首頁

![首頁](https://github.com/Tzuminn/Restaurant-CRUD/blob/main/public/img/homepage.PNG)

### 登入功能

![登入功能](https://github.com/Tzuminn/Restaurant-CRUD/blob/main/public/img/login.PNG)

### 新增功能

![新增功能](https://github.com/Tzuminn/Restaurant-CRUD/blob/main/public/img/create.jpg)


## 環境及安裝套件

+ Visual Studio Code - 開發環境
+ Express - 4.18.2
+ Express-handlebars - 3.0.0
+ Bootstrap - 4.3.1
+ Mongoose - 6.6.5
+ Express-session - 1.17.1
+ Passport - 0.4.1

## 開發者

+ 開發者 - Min


