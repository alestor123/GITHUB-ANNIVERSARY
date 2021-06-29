var ghn = require('./App');
(async () => {
console.log(await ghn('sindresorhus',process.env.GHTOKEN))
})()
