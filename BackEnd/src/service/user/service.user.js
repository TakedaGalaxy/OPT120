class ServiceUser {
  repositoryUser;

  constructor(repositoryUser) {
    this.repositoryUser = repositoryUser;
  }

  async create(name, email, password) {

    
    
    await this.repositoryUser.create(name, email, password);
  }

  async view() {}

  async viewAll(name, email, password) {
    const [row] = await this.repositoryUser.viewAll(name, email, password);
    return row;
  }

  async update() {}

  async delete() {}
}

module.exports = {
  ServiceUser,
};
