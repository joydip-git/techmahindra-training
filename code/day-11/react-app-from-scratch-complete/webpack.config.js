const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const config = {
    //entry: path.resolve(__dirname, 'src', 'index.js'),
    entry: {
        main: path.resolve(__dirname, 'src', 'index.js'),
        app: path.resolve(__dirname, 'src', 'app.js'),
        hello: path.resolve(__dirname, 'src', 'Hello.js'),
        welcome: path.resolve(__dirname, 'src', 'Welcome.js')
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.(html|htm)$/,
            use: 'html-loader'
        }, {
            test: /\.(js|jsx)$/,
            use: 'babel-loader'
        }, {
            test: /\.css$/,
            use: ['css-loader', 'style-loader']
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        }),
        new CleanWebpackPlugin({
            cleanStaleWebpackAssets: true
        })
    ],
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: 4000
    },
    devtool: 'inline-source-map'
}

module.exports = config