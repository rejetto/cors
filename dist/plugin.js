exports.version = 1
exports.description = "This is an empty plugin, for testing purposes"
exports.apiRequired = 1
exports.repo = "rejetto/demo-plugin"

exports.init = api => {
    api.log("hi!")
}
