import createConnection from '../database';
import { getConnection } from 'typeorm';
import { GetAllUserController } from './GetAllUserController';
import { FakeData } from '../utils/FakeData';
import { makeMockRequest } from '../utils/mocks/mockRequest';
import { makeMockResponse } from '../utils/mocks/mockResponse';

describe('GetAllUserController', () => {
  beforeAll(async () => {
    process.env.NODE_ENV = 'test';
    const connection = await createConnection();
    await connection.runMigrations();
  })
});

afterAll(async () => {
  process.env.NODE_ENV = '';
  const connection = getConnection();
  await connection.query('DELETE FROM usuarios');
  connection.close();
});

const fakeData = new FakeData();

it('Deve retornar 200 quando pegar todos os usuários', async () => {
  fakeData.execute();

  const getAllUserController = new GetAllUserController();
  const request = makeMockRequest({});
  const response = makeMockResponse();

  await getAllUserController.handle(request, response);

  expect(response.state.status).toBe(200);

});