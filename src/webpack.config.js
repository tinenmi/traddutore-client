import path from 'path';
import webpack from 'webpack';
const __dirname = __dirname || '';

export default {
    mode: 'development',

    entry: {
        app: [path.resolve(__dirname, './app.js'), 'webpack-hot-middleware/client'],
    },

    devServer: {
        hot: true,
    },

    plugins: [new webpack.HotModuleReplacementPlugin()],

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },

    devtool: 'cheap-module-source-map',
};
