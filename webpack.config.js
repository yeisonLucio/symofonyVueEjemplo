var Encore = require('@symfony/webpack-encore');

const { VueLoaderPlugin } = require('vue-loader');

Encore
   
    .setOutputPath('web/build')
  
    .setPublicPath('/build')
                      
    
    .addEntry('app', './assets/js/app.js')

    .cleanupOutputBeforeBuild()

    .addLoader({
        test: /\.vue$/,
        loader: 'vue-loader'
    },
    {
        loader: 'babel-loader',
        options: {
            presets: ['@babel/preset-env']
        }
    })
    
    .addPlugin(new VueLoaderPlugin())
    .enableVueLoader()
   
;

module.exports = Encore.getWebpackConfig();
