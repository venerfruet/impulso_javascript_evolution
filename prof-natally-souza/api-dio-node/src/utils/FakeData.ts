import { UpdateQueryBuilder } from 'typeorm';
import { CreateUserService } from '../services/CreateUserService';
import { v4 as uuid } from 'uuid';

class FakeData {

  createUserService = new CreateUserService();

  async execute() {

    await this.createUserService.execute({
      id: uuid(),
      nome: 'Usuário de Teste',
      email: null
    });

    await this.createUserService.execute({
      id: uuid(),
      nome: 'Outro Usuário de Teste',
      email: null
    });

  }

  async createUser() {
    const user = await this.createUserService.execute({
      id: uuid(),
      nome: 'Usuário de Teste',
      email: null
    });

    return user;
  }

}

export { FakeData }