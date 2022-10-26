import path from 'path';

module.exports = {
    mode: "development",
    // Change to your "entry-point".
    entry: './index',
    output: {
        path: path.resolve(__dirname, '.next'),
        filename: 'app.bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
    },
    module: {
        rules: [
        {
            test: /\.(css)$/,
            include: [/stylesheets/, /node_modules/],
            use: [
                'css-loader',
            ],
        },
        {
            test: /\.css$/,
            exclude: [/stylesheets/, /node_modules/],
            use: [
                'css-loader?sourceMap&modules,localIdentName=[local]-[hash:base64]',
            ],
        },            
      {
        test: /\.(ts|tsx)?$/,
        include: path.resolve(__dirname, '**/*'),
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
      {
        test: /\.(ts|tsx)?$/,
        include: path.resolve(__dirname, '../api/**/*'),
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
      ],
    }
};