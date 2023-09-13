# docker-test


<!-- コンテナの作成 -->
docker-compose up または　docker-compose create + docker-compose start 


<!-- networkエラーが出るとき -->
docker network create  docker-config_default 

<!-- コンテナに入る -->
docker-compose exec app bash


<!-- プロジェクト作成 -->
composer create-project laravel/laravel laravel_sample --prefer-dist "8.*"  


<!-- 認証機能とbootstrapのインストール -->
composer require laravel/ui
php artisan ui vue --auth
php artisan ui bootstrap
npm install && npm run dev

<!-- bootstrap反映 -->
publicフォルダにCSS、JSフォルダをコピー

<!-- logファイルの書き換えの権限を与える(laravelプロジェクト内で行う) -->
chmod -R 777 storage
