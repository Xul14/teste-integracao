const request = require("supertest");
const app = request("http://localhost:3000");

describe("Testes de Integração da API com JSON Server", () => {

  test("Deve buscar todos os usuários", async () => {
    const response = await app.get('/v1/saveeats/clientes');

    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Object);

  });

  test("Deve buscar todos os restaurantes", async () => {
    const response = await app.get('/v1/saveeats/restaurantes');

    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Object);

  });

  test("Deve buscar todas as dicas", async () => {
    const response = await app.get('/v1/saveeats/dicas');

    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Object);

  });

  test("Deve buscar todas as receitas", async () => {
    const response = await app.get('/v1/saveeats/receitas');

    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Object);

  });

  test("Deve buscar todas os pedidos", async () => {
    const response = await app.get('/v1/saveeats/pedido');

    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Object);

  });

  test("Deve buscar todas as avaliações", async () => {
    const response = await app.get('/v1/saveeats/avaliacao');

    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Object);

  });

  test("Deve criar um novo usuário", async () => {
    const novoUsuario = {
      nome: "Nick",
      email: "kiki@gmail.com",
      senha: "Temporaria1",
      cpf: "0909-0987",
      foto: "",
      telefone: "11 95656-6531",
      cep: "0989-000",
      logradouro: "Rua Constantino",
      complemento: "Próximo ao centro",
      bairro: "Vale do Constantino Real",
      localidade: "Barueri",
      numero: 40,
      uf: "SP"
    }

    const response = await app.post("/v1/saveeats/cadastro/cliente").send(novoUsuario);

    expect(response.status).toBe(201);
  });

    test("Deve criar uma nova avaliação", async () => {
    const novaAvaliacao = {
      quantidade_estrela: 4,
      descricao: "Minha avaliacao é 4 pq demorou dms",
      data_avaliacao: "2023/09/10",
      id_restaurante: 5,
      id_cliente: 6,
    }

    const response = await app.post("/v1/saveeats/avaliacao").send(novaAvaliacao);

    expect(response.status).toBe(201);
  });


});
