const mysql = require("mysql2/promise");

class DataBase {
  databaseRef;

  constructor() {}

  async start() {
    this.databaseRef = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "OPT120",
    });

    console.log("[DATABASE]: Start connection !");
  }

  async stop() {
    await this.databaseRef.destroy();
  }

  async query(sql, placeholderValues) {
    return await this.databaseRef?.query(sql, placeholderValues);
  }
}

const dataBase = new DataBase();

dataBase.start();

module.exports = {
  DataBase,
  dataBase,
};
