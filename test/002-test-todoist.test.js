const request = require("./../utils/requestManager");
require('dotenv').config();

describe("Autenticação do TODOIST", () => {
    test("Verificar que é possível atenticar usuário", async() => {

        let response = await request.send(
            "GET", 
            `/sections`,
            {"project_id": process.env.PROJECT_ID},
            {"Authorization": `Bearer ${process.env.TOKEN_API}`}
        );
        console.log(response.data);

        expect(response.status).toBe(200);
        expect(response.data).toHaveProperty("length"); // Verifica a existência do array de seções
        expect(response.data[0]).toHaveProperty("id"); // Verifica propriedades na primeira seção
        expect(response.data[0]).toHaveProperty("project_id");
        expect(response.data[0]).toHaveProperty("order");
        expect(response.data[0]).toHaveProperty("name");

    })

})