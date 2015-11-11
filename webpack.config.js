module.exports = {
    entry: './demo/demo.js',
    output: {
        path: __dirname + '/demo',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react'],
                    plugins: ['transform-es2015-modules-commonjs']
                }
            }
        ]
    }
};
