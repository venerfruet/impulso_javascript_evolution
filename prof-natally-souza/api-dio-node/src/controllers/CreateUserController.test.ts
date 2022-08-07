import { getConnection } from 'typeorm';
import createConnection from '../database';
import { CreateUserController } from "./CreateUserController";
import { Request } from 'express';
import { makeMockResponse } from '../utils/mocks/mockResponse';

describe('CreateUserController', () => {
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

  const createUserController = new CreateUserController();
  const response = makeMockResponse();

  it('Deve retorno status code 201 quando o usuário criado', async () => {

    const request = {
      body: {
        nome: 'Usuário de Teste',
        email: 'email@email.com'
      }
    } as Request;


    await createUserController.handle(request, response);

    expect(response.state.status).toBe(201);

  });

  it('Deve retornar status code 400 quando o usuário não for informado', async () => {

    const request = {
      body: {
        nome: ''
      }
    } as Request;

    await createUserController.handle(request, response);

    expect(response.state.status).toBe(400);

  });

  it('Deve retornar status code 201 quando o email não for informado', async () => {

    const request = {
      body: {
        nome: 'Usuário de Teste'
      }
    } as Request;

    await createUserController.handle(request, response);

    expect(response.state.status).toBe(201);

  });

});