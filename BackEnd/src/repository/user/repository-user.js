class RepositoryUser {
  dataBase;

  constructor(dataBase) {
    this.dataBase = dataBase;
  }

  async create(name, email, password) {
    await this.dataBase.query(
      `INSERT INTO Usuario (nome, email, senha) VALUES (?, ?, ?)`,
      [name, email, password]
    );
  }

  async viewAll() {
    return await this.dataBase.query(`SELECT * FROM Usuario`);
  }

  async view(id) {
    return await this.dataBase.query(`SELECT * FROM Usuario WHERE id = ?`, [
      id,
    ]);
  }

  async update() {}

  async delete() {}
}

module.exports = {
  RepositoryUser,
};
