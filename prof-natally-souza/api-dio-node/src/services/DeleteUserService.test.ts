import createConnection from '../database';
import { getConnection } from 'typeorm';
import { FakeData } from '../utils/FakeData';
import { DeleteUserService } from './DeleteUserService';

describe('DeleteUserService', () => {

  beforeAll(async () => {
    process.env.NODE_ENV = 'test'
    const connection = await createConnection()
    await connection.runMigrations();
  });

  afterAll(async () => {
    process.env.NODE_ENV = '';
    const connection = getConnection();
    await connection.close();
  });

  const fakeData = new FakeData();

  it('Deve retornar um arry vazio quando o usuário for deletado', async () => {

    const mockUser = await fakeData.createUser();

    const deleteUserService = new DeleteUserService();

    const result = await deleteUserService.execute({ id: mockUser.id });

    expect(result).toHaveLength(0);
  })

})