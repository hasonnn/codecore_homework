// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: "super_team_picker"
    },
    migration: {
      tableName: "migrations",
      directory: "./db/migrations"
    }
  }
};


