module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DB_HOST', 'localhost'),
        port: env('DB_PORT', 15432),
        database: env('DB_NAME', 'postgres'),
        username: env('DB_USER', 'strapi'),
        password: env('DB_PASS', '123456'),
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
})
