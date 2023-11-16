const path = require("path");

module.exports = function(_env, argv) {
    const isProduction = process.env.NODE_ENV === "production";

    return {
        entry: {
            content: path.resolve(__dirname, "src/content.tsx"),
            background: path.resolve(__dirname, "src/background/background.tsx"),
            popup: path.resolve(__dirname, "src/Popup.tsx"),
        },
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "[name].js",
        },
        mode: isProduction ? "production" : "development",
        module: {
            rules: [
                {
                    test: /\.(ts|js)x?$/,
                    exclude: /node_modules/,
                    use: "ts-loader",
                },
            ],
        },
        resolve: {
            fallback: {
                "fs": false,
                "path": false
            },
            extensions: [".ts", ".tsx", ".js", ".json", ".sass", ".scss"],
        },
    }
};
