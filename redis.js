const redis = require('redis');

const redisClient = redis.createClient({
  host: 'localhost',
  port: 6379
});

redisClient.on('error', (err) => {
  console.error('Redis error:', err);
});

const connectRedis = async () => {
  await redisClient.connect();
}

const TTL = 60 * 60 * 24 * 7; // 7 days

module.exports = {
  redisClient,
  connectRedis,
  TTL
};



// for (let i = 0; i < rows.length; i += batchSize) {
//   const chunk = rows.slice(i, i + batchSize);
//   console.log(
//       `Processing batch ${Math.floor(i / batchSize) + 1} with ${chunk.length} rows`
//   );
//   const worksheet = XLSX.utils.json_to_sheet(chunk);
//   const workbook = XLSX.utils.book_new();
//   XLSX.utils.book_append_sheet(workbook, worksheet, "Content");
//   // await XLSX.writeFile(
//   //     workbook,
//   //     `content_${Math.floor(i / batchSize) + 1}.xlsx`,
//   //     { compression: true }
//   // );