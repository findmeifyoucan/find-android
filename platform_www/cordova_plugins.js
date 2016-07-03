cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-device/www/device.js",
        "id": "cordova-plugin-device.device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/pushbots-cordova-plugin/www/pushbots.js",
        "id": "pushbots-cordova-plugin.PushbotsPlugin",
        "clobbers": [
            "PushbotsPlugin"
        ]
    },
    {
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "id": "cordova-plugin-statusbar.statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    },
    {
        "file": "plugins/im.ltdev.cordova.UserAgent/www/UserAgent.js",
        "id": "im.ltdev.cordova.UserAgent.UserAgent",
        "clobbers": [
            "UserAgent"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.2.2",
    "cordova-plugin-device": "1.1.2",
    "cordova-plugin-console": "1.0.3",
    "cordova-plugin-android-support-v4": "21.0.1",
    "pushbots-cordova-plugin": "1.3.6",
    "cordova-plugin-statusbar": "2.1.3",
    "im.ltdev.cordova.UserAgent": "0.1.0"
};
// BOTTOM OF METADATA
});