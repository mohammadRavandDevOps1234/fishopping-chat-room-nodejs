const { createVuePlugin } = require('vite-plugin-vue2');

module.exports = {
    plugins: [createVuePlugin()],
    base: 'serverHypernetShowUnion/test/chat/dist',
    publicDir: 'serverHypernetShowUnion/test/chatdist',
    cacheDir: 'serverHypernetShowUnion/test/chadistt'
};