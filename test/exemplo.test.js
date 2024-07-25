const { environment } = require("#utils/environment.js");
const requestManager = require("#utils/requestManager.js");

describe("Exemplo de test", () =>{
    test("Teste 1: ", async() => {
        const response = await requestManager.send(
            "GET",
            `${environment.base_url}/endpoint/exemplo`,
            {
                body: {
                    username: environment.username,
                    password: environment.password
                }
            },
            {
                Authorization: `Bearer ${environment.api_token}`
            }
        );

        expect(response.status).toEqual(200);
        // [...]
    })
})
