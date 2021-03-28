const path = require( 'path' );

module.exports = {

    // bundling mode
    mode: 'production',
    watch: true,
    
    // entry files
    entry: './src/app.ts',

    // output bundles (location)
    output: {
        path: path.resolve( __dirname, 'public/js' ),
        filename: 'main.js',
    },

    // file resolutions
    resolve: {
        extensions: [ '.ts', '.js' ],
    },

    // loaders
    module: {
        rules: [
            {
                test: /\.tsx?/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    }
};