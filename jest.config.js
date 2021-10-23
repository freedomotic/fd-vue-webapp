module.exports = {
    preset: "@vue/cli-plugin-unit-jest",
    moduleFileExtensions: [
        "js",
        "json",
        "vue"
    ],
    moduleNameMapper: {
        quasar: "<rootDir>/node_modules/quasar/dist/quasar.umd.min.js"
    },
    transform: {
        ".*\\.(js)$": "babel-jest",
        "^.+\\.vue$": "vue-jest"
    },
    transformIgnorePatterns: ["/node_modules/"]
}
