module.exports = function (config) {
    "use strict";

    config.set({
        frameworks: ["ui5"],
        plugins: [
            'karma-ui5',
            'karma-chrome-launcher'
        ],
        ui5: {
            url: "https://sapui5.netweaver.ondemand.com/",
            type: "application",
            paths: {
                webapp: "src"
            }
        },
        browserConsoleLogOptions: {
            level: "error"
        },
        reporters: ["progress"],
        browsers: ["ChromeHeadless"],
        singleRun: true
    });
};
