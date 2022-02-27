const frisby = require('frisby');
require('dotenv-safe').load();

const port = process.env.PORT;

const url = `http://localhost:${port}/api`;

describe('Endpoint POST `/login`',  () => {

  it('Valida que não é possível fazer login sem o campo `email`', async () => {

    await frisby
    .post(`${url}/login`,
    {
          password: '123456',
        })
      .expect('status', 400)
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        expect(result.message).toBe('Campos inválidos');
      });

  });
  
  it('Valida que não é possível fazer login sem o campo `password`', async () => {
    
    await frisby
      .post(`${url}/login`,
      {
          email: 'lewishamilton@gmail.com',
        })
        .expect('status', 400)
        .then((response) => {
          const { body } = response;
          const result = JSON.parse(body);
          expect(result.message).toBe('Campos inválidos');
        });
        
      });
      
  it('Valida que não é possível fazer login com o campo `email` em branco', async () => {
    await frisby
    
    .post(`${url}/login`,
    
    {
      
      email: '',
      
      password: '123456',
      
    })
    .expect('status', 400)
  .then((response) => {
    const { body } = response;
    const result = JSON.parse(body);
    expect(result.message).toBe('Campos inválidos');
  });
  });
    
  it('Valida que não é possível fazer login com o campo `password` em branco', async () => {
    
    await frisby
    
    .post(`${url}/login`,
    {
        email: 'lewishamilton@gmail.com',
        password: '',
      })
      .expect('status', 400)
    .then((response) => {
      const { body } = response;
      const result = JSON.parse(body);
      expect(result.message).toBe('Campos inválidos');
      
    });
    
  })
  it('Valida que é possível fazer login com sucesso', async () => {
  
     await frisby
       .post(`${url}/login`,
         {
           email: 'lewishamilton@gmail.com',
           password: '123456',
         })
       .expect('status', 200)
       .then((response) => {
         const { body } = response;
         const result = JSON.parse(body);
         expect(result.token).not.toBeNull();
       });
  
  });
})