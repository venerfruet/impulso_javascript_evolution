import { getConnection } from 'typeorm';
import createConnection from '../database';
import { CreateUserService } from './CreateUserService';

describe('CreateUserService', () => {

  beforeAll(async () => {
    process.env.NODE_ENV = 'test';
    const connection = await createConnection();
    await connection.runMigrations();
  });

  afterAll(async () => {
    process.env.NODE_ENV = '';
    const connection = getConnection();
    await connection.query('DELETE FROM usuarios');
    connection.close();
  });

  it('Deve retorno o id do usuário criado', async () => {
    const createUserService = new CreateUserService();

    const result = await createUserService.execute({
      id: 'Id de teste',
      nome: 'Usuário de teste'
    });

    expect(result).toBe('Id de teste');

  });

});