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

  test("Deve criar um novo usuário", async () => {
    const novoUsuario = {
      nome: "Nick",
      email: "nickinho@gmail.com",
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


});
