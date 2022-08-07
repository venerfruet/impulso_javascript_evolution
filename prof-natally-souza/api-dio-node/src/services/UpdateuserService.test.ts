import createConnection from '../database';
import { getConnection } from 'typeorm';
import { UpdateUserService } from './UpdateuserService';
import { FakeData } from '../utils/FakeData';

describe('UpdateUserService', () => {

  beforeAll(async () => {
    process.env.NODE_ENV = 'test';
    const connection = await createConnection();
    await connection.runMigrations();
  });

  afterAll(async () => {
    process.env.NODE_ENV = 'test';
    const connection = getConnection();
    await connection.query('DELETE FROM usuarios');
    await connection.close();
  });

  const fakeData = new FakeData();

  it('Deve editar o nome do usuário', async () => {
    const updateUserService = new UpdateUserService();

    const mockUser = await fakeData.createUser();

    const result = await updateUserService.execute({
      id: mockUser.id,
      nome: 'Usuário de Teste'
    });

    expect(result).toHaveLength(0);

  });

});