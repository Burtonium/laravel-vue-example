const path = require('path');
const mix = require('laravel-mix');
const eslintConfig = require('./.eslintrc.json');
require('laravel-mix-eslint');

mix.options({
   hmrOptions: {
     host: '192.168.10.10',
     port: 8080
   },
 });

mix.webpackConfig({
   watchOptions: {
      aggregateTimeout: 300,
      poll: true
   },
   resolve: {
       alias: {
           "@": path.resolve(
               __dirname,
               "resources"
           )
       }
   }
});

mix.js('resources/js/app.js', 'public/js')
   .eslint(eslintConfig)
   .sass('resources/sass/app.scss', 'public/css');
