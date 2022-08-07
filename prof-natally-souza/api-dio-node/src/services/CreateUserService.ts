import { getRepository } from 'typeorm';
import { Usuario } from '../entities/Usuarios';

interface IUsuario {
  id: string,
  nome: string,
  email?: string
}

class CreateUserService {
  async execute({ id, nome, email }: IUsuario) {

    const usuario = await getRepository(Usuario)
      .createQueryBuilder('user')
      .insert()
      .into(Usuario)
      .values({
        id: id,
        nome: nome,
        email: email
      })
      .execute();

    return usuario.identifiers[0].id;

  }
}

export { CreateUserService }