const Redis = require('ioredis');

let redisClient = null;

function createRedisClient() {
    if (!redisClient) {
        const url = process.env.REDIS_URL || 'redis://127.0.0.1:6379';
        redisClient = new Redis(url);

        redisClient.on('error', (err) => {
            console.error('[Redis] Error:', err);
        });

        redisClient.on('connect', () => {
            console.log('[Redis] Connected:', url);
        });
    }
    return redisClient;
}

module.exports = {
    createRedisClient
};