import createConnection from '../database';
import { getConnection } from 'typeorm';
import { FakeData } from '../utils/FakeData';
import { DeleteUserController } from './DeleteUserController';
import { makeMockRequest } from '../utils/mocks/mockRequest';
import { makeMockResponse } from '../utils/mocks/mockResponse';

describe('DeleteUserController', () => {
  beforeAll(async () => {
    process.env.NODE_ENV = 'test';
    const connection = await createConnection();
    await connection.runMigrations();
  })

  afterAll(async () => {
    const connection = getConnection();
    await connection.close();
  })

  const fakeData = new FakeData();

  it('Deve retornar status code 204 quando o usuário for deletado', async () => {
    const mockUser = await fakeData.createUser();

    const deleteUserController = new DeleteUserController;

    const request = makeMockRequest({
      params: {
        id: mockUser.id
      }
    });

    console.log('teste ID', request);

    const response = makeMockResponse();

    await deleteUserController.handle(request, response);

    expect(response.state.status).toBe(204);
  });
})