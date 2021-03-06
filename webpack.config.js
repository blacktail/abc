var path = require('path');

module.exports = {
    context: path.join(__dirname,  './lib'),
    entry: {
        Table: './Table.js'
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].js',
        libraryTarget: 'umd',
        library: ['LMUI']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react'],
                    plugins: ['transform-es2015-modules-commonjs']
                }
            },
            // SASS
            {
                test: /\.scss$/,
                loaders: ['style', 'css?modules', 'sass', 'postcss']
            },
            // LESS
            {
                test: /\.less$/,
                loaders: ['style', 'css?modules', 'less', 'postcss']
            }
        ]
    },
    postcss: [
        require('autoprefixer')
    ],
    externals:[{
        'react': {
            root: 'React',
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'react'
        }
    }]
};
