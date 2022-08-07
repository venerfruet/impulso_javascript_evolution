import createConnection from "../database";
import { getConnection } from 'typeorm';
import { UpdateUserController } from "./UpdateUserController";
import { makeMockResponse } from "../utils/mocks/mockResponse";
import { Request } from 'express';
import { FakeData } from "../utils/FakeData";

describe('UpdateUserController', () => {

  beforeAll(async () => {
    process.env.NODE_ENV = 'test';
    const connection = await createConnection();
    await connection.runMigrations();
  });

  afterAll(async () => {
    process.env.NODE_ENV = '';
    const connection = getConnection();
    await connection.query('DELETE FROM usuarios');
    await connection.close();
  });

  const fakeData = new FakeData();

  it('Deve retornar status code 204 quando usuário for editado', async () => {

    const mockUser = await fakeData.createUser();

    const updateUserController = new UpdateUserController();

    const request = {
      body: {
        id: mockUser.id,
        nome: 'Usuário de Teste',
        email: ''
      }
    } as Request;

    const response = makeMockResponse();

    await updateUserController.handle(request, response);

    expect(response.state.status).toBe(204);
  });
});