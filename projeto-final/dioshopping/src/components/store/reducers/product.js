const productsList = [
  {
    id_product: 1,
    category: "Teste",
    fk_idcategorys: 1,
    name_product: "Jest e TDD",
    price: 160,
    image: require("../../../images/produtos/jesttdd.png"),
    id_categorys: 1,
    name_categorys: "Testes",
    description: "Pirâmide de Testes na Prática Explorando Jest e TDD",
    selected: false
  },
  {
    id_product: 2,
    category: "Editor",
    fk_idcategorys: 2,
    name_product: "Visual Studio Code",
    price: 160,
    image: require("../../../images/produtos/vsc.png"),
    id_categorys: 2,
    name_categorys: "Editores",
    description: "Instalação e Configuração do Visual Studio Code",
    selected: false
  },
  {
    id_product: 3,
    category: "Front end",
    fk_idcategorys: 3,
    name_product: "HTML5 e CSS3",
    price: 320,
    image: require("../../../images/produtos/html5css3.png"),
    id_categorys: 3,
    name_categorys: "Front end",
    description: "Introdução a criação de websites com HTML5 e CSS3",
    selected: false
  },
  {
    id_product: 4,
    category: "Bootcamp",
    fk_idcategorys: 4,
    name_product: "Decola Tech 3a edição",
    price: 40,
    image: require("../../../images/produtos/decolatech3.png"),
    id_categorys: 4,
    name_categorys: "Bootcamps",
    description: "Boas-vindas ao Decola Tech 3a edição",
    selected: false
  },
  {
    id_product: 5,
    category: "Bootcamp",
    fk_idcategorys: 4,
    name_product: "Seja Protagonista",
    price: 200,
    image: require("../../../images/produtos/sejaprotagosnista.png"),
    id_categorys: 4,
    name_categorys: "Bootcamps",
    description: "Seja Protagonista Neste Bootcamp",
    selected: false
  },
  {
    id_product: 6,
    category: "Front end",
    fk_idcategorys: 3,
    name_product: "JavaScript 1",
    price: 80,
    image: require("../../../images/produtos/oriobjjavascript.png"),
    id_categorys: 3,
    name_categorys: "Front end",
    description: "Orientação a Objetos com JavaScript",
    selected: false
  },
  {
    id_product: 7,
    category: "Banco de Dados",
    fk_idcategorys: 5,
    name_product: "MongoDB e BD NoSQL",
    price: 200,
    image: require("../../../images/produtos/mongodbnosql.png"),
    id_categorys: 5,
    name_categorys: "Banco de Dados",
    description: "Introdução ao MongoDB e Bancos de Dados NoSQL",
    selected: false
  },
  {
    id_product: 8,
    category: "Front end",
    fk_idcategorys: 3,
    name_product: "D.O.M. JavaScript",
    price: 160,
    image: require("../../../images/produtos/domjavascript.png"),
    id_categorys: 3,
    name_categorys: "Front end",
    description: "Manipulando a D.O.M. com JavaScript",
    selected: false
  },
  {
    id_product: 9,
    category: "Teórico",
    fk_idcategorys: 6,
    name_product: "Pensamento Computacional",
    price: 200,
    image: require("../../../images/produtos/computacional.png"),
    id_categorys: 6,
    name_categorys: "Teórico",
    description: "Introdução à Programação e Pensamento Computacional",
    selected: false
  },
  {
    id_product: 10,
    category: "Front end",
    fk_idcategorys: 3,
    name_product: "JavaScript Assíncrono",
    price: 80,
    image: require("../../../images/produtos/javascriptassinc.png"),
    id_categorys: 3,
    name_categorys: "Front end",
    description: "Fundamentos de JavaScript Assíncrono",
    selected: false
  },
  {
    id_product: 11,
    category: "Back end",
    fk_idcategorys: 7,
    name_product: "Ambiente NodeJs",
    price: 200,
    image: require("../../../images/produtos/installnodejs.png"),
    id_categorys: 7,
    name_categorys: "Back end",
    description: "Instalando e Configurando seu Ambiente Node.js",
    selected: false
  },
  {
    id_product: 12,
    category: "Front end",
    fk_idcategorys: 3,
    name_product: "Flexbox em CSS",
    price: 160,
    image: require("../../../images/produtos/flexboxcss.png"),
    id_categorys: 3,
    name_categorys: "Front end",
    description: "Posicionando elementos com Flexbox em CSS",
    selected: false
  }
];

export default productsList;
