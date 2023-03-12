exports.version = 1
exports.apiRequired = 1
exports.repo = "rejetto/cors"
exports.description = "Allow CORS requests"

exports.init = () => ({
    middleware(ctx) {
        ctx.set('Access-Control-Allow-Methods', '*')
        ctx.set('Access-Control-Allow-Origin', '*')
        ctx.set('Access-Control-Allow-Headers', '*')
    }
})
