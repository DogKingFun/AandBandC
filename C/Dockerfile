FROM node

# アプリケーションディレクトリを作成する
WORKDIR /usr/src/C

# キャッシュを利用するために、package.jsonとpackage-lock.jsonのみをコピーし、
# 依存関係を先にインストール
COPY package*.json ./
RUN npm install

# アプリケーションコードをコンテナにコピー
COPY . .

EXPOSE 8002
CMD [ "node", "app" ]