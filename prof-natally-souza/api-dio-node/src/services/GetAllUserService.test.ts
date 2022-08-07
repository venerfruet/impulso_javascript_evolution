import { getConnection } from 'typeorm';
import createConnection from '../database';
import { GetAllUserService } from './GetAllUserService';
import { CreateUserService } from './CreateUserService';
import { FakeData } from '../utils/FakeData';

describe('GetAllUserService', () => {
  beforeAll(async () => {
    process.env.NODE_ENV = 'test';
    const connection = await createConnection();
    await connection.runMigrations();
  });

  afterAll(async () => {
    process.env.NODE_ENV = '';
    const connection = getConnection();
    await connection.query('DELETE FROM usuarios');
  });

  const createUserService = new CreateUserService();

  const fakeData = new FakeData();

  it('Deve retornar todos os usuários cadastrados', async () => {

    await fakeData.execute();

    const expectedResponse = [
      {
        nome: 'Usuário de Teste'
      },
      {
        nome: 'Outro Usuário de Teste'
      }
    ];

    const getAllUserService = new GetAllUserService();
    const result = await getAllUserService.execute();

    expect(result).toMatchObject(expectedResponse);

  });

})