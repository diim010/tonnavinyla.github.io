const mix = require('laravel-mix');
const path = require('path');

// Определяем путь к теме
const themePath = __dirname;

// Устанавливаем публичный путь
mix.setPublicPath(themePath);

// Компиляция SCSS
mix.sass('scss/common.scss', 'css')
   .options({
       processCssUrls: false, // Отключаем обработку URL в CSS
       autoprefixer: {
           options: {
               browsers: [
                   'last 2 versions',
                   '> 1%'
               ]
           }
       },
       postCss: [
           require('autoprefixer')
       ]
   })
   .sourceMaps(true, 'source-map'); // Генерируем source maps

// Настройка webpack
mix.webpackConfig({
    output: {
        path: path.resolve(themePath),
        publicPath: './'
    },
    watchOptions: {
        ignored: /node_modules/,
        poll: 1000 // Проверка изменений каждую секунду
    }
});

// Включаем уведомления
mix.disableNotifications();

// В режиме разработки используем горячую замену
if (mix.inProduction()) {
    mix.version();
} else {
    mix.browserSync({
        proxy: false,
        server: themePath,
        files: [
            'css/**/*.css',
            'scss/**/*.scss'
        ]
    });
}