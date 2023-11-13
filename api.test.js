const request = require("supertest");
const app = request("http://localhost:8080");

describe("Testes de Integração da API com JSON Server", () => {
  test("Deve buscar todos os usuários", async () => {
    const response = await app.get('/v1/saveeats/restaurantes');

    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Object);
  });
  

  test("Deve criar um novo usuário", async () => {
    const novoUsuario = { nome: "Charlie", email: "charlie@example.com" };

    const response = await app.post("/usuarios").send(novoUsuario);

    expect(response.status).toBe(201);
    expect(response.body.nome).toBe(novoUsuario.nome);
  });

  it('Deve buscar um usuário pelo ID', async () => {
    
    const novoUsuario = { nome: 'Fernanda', email: 'fernanda@example.com' };
    const criacaoResponse = await app
      .post('/usuarios')
      .send(novoUsuario);

    const usuarioId = criacaoResponse.body.id;

    
    const buscaResponse = await app.get(`/usuarios/${usuarioId}`);

    expect(buscaResponse.status).toBe(200);

    expect(buscaResponse.body.id).toBe(usuarioId);
    expect(buscaResponse.body.nome).toBe(novoUsuario.nome);
    expect(buscaResponse.body.email).toBe(novoUsuario.email);
  });

  test("Deve excluir um usuário existente", async () => {
    
    const novoUsuario = { nome: "Leonid", email: "leonid@gmail.com" };
    const criacaoResponse = await app.post("/usuarios").send(novoUsuario);

    const usuarioId = criacaoResponse.body.id;

    const deleteResponse = await app.delete(`/usuarios/${usuarioId}`);

    expect(deleteResponse.status).toBe(200);

    const buscaResponse = await app.get("/usuarios");
    const usuarioExcluido = buscaResponse.body.find(
      (user) => user.id === usuarioId
    );
    expect(usuarioExcluido).toBeUndefined();
  });

  test('Deve atualizar os dados de um usuário existente', async () => {

    const novoUsuario = { nome: 'Eva', email: 'eva@gmail.com' };
    const criacaoResponse = await app
      .post('/usuarios')
      .send(novoUsuario);

    const usuarioId = criacaoResponse.body.id;

    const novosDados = { nome: 'Eva Novo', email: 'evanovo@gmail.com' };
    const updateResponse = await app
      .put(`/usuarios/${usuarioId}`)
      .send(novosDados);

    expect(updateResponse.status).toBe(200);


    const buscaResponse = await app.get(`/usuarios/${usuarioId}`);
    expect(buscaResponse.body.nome).toBe(novosDados.nome);
    expect(buscaResponse.body.email).toBe(novosDados.email);
  });

});
