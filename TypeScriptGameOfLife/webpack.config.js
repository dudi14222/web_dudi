module.exports = {
    devtool: 'source-map',
    entry  : './src/main.js',

    output : {
        path     : __dirname + "/dist",
        filename : 'bundle.js'
    },
    module : {
        loaders: [ { 
                test   : /.js$/,
                loader : 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: [
                        'es2015',
                        'stage-2'
                    ]
                }
            }
        ]
    }
};