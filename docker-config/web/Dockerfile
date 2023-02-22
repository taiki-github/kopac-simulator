FROM php:8.0-apache

# phpの設定ファイルとhttpdの設定ファイルをコンテナ内に設コピー
COPY ./php/php.ini /usr/local/etc/php/
COPY ./apache/default.conf /etc/apache2/sites-enabled/

RUN apt-get update

# Laravelプロジェクト作成に必要なパッケージをインストール
RUN apt -y install git unzip

# phpで必要なモノをインストール
RUN docker-php-ext-install pdo_mysql mysqli

# composerのインストール
# このやり方だとハッシュ値がバージョンごとに変わるので下のやり方でやる
# RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" \
#     && php -r "if (hash_file('sha384', 'composer-setup.php') === 'ハッシュ値') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;" \
#     && php composer-setup.php \
#     && php -r "unlink('composer-setup.php');" \
#     && mv composer.phar /usr/local/bin/composer
COPY --from=composer /usr/bin/composer /usr/bin/composer


#Laravelプロジェクトの作成
# RUN composer create-project laravel/laravel  --prefer-dist laravel_sample

# -- memo -- #
# RUN命令はDockerfileからイメージを作成するときに実行される
# CMD命令はイメージからコンテナが作成される時に実行される