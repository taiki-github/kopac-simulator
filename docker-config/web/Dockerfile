FROM php:8.0-apache

# phpの設定ファイルとapacheの設定ファイルをコピー
COPY ./php/php.ini /usr/local/etc/php/
COPY ./apache/000-default.conf /etc/apache2/sites-enabled/


# 必要なパッケージをインストール
RUN apt-get update \
  && apt-get install -y zlib1g-dev mariadb-client git zip unzip vim libzip-dev libicu-dev libonig-dev \
  && apt-get clean \
+  && docker-php-ext-install pdo_mysql mysqli


# nodejsとnpmをインストールしてバージョンアップする
RUN apt  install -y nodejs npm
RUN npm install -g n
RUN n stable
RUN npm update -g npm

# apacheのモジュールこれがないとルーティングが上手くいかない
RUN cd /etc/apache2/mods-enabled \
    && ln -s ../mods-available/rewrite.load


# composerのインストール
COPY --from=composer /usr/bin/composer /usr/bin/composer

