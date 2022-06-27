// Como podemos melhorar o esse código usando TS? 

enum Profession{
   Atriz,
   Padeiro
}

interface People{
   nome: string,
   idade: number,
   profession: Profession
}

let pessoa1 = {} as People;
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profession = Profession.Atriz;

let pessoa2 = {} as People
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profession = Profession.Padeiro

let pessoa3:People = {
    nome: "laura",
    idade: 32,
    profession: Profession.Atriz
};

let pessoa4:People = {
    nome: "carlos",
    idade: 19,
    profession: Profession.Padeiro
}