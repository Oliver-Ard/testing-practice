const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: {
		app: "./src/index.js",
	},
	output: {
		filename: "js/[name].bundle.js",
		path: path.resolve(__dirname, "dist"),
		clean: true,
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
			filename: "index.html",
		}),
	],

	module: {
		rules: [
			{
				test: /\.(?:js|mjs|cjs)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"],
					},
				},
			},
		],
	},
};
