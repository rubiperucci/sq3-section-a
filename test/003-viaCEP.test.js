const { environment } = require("#utils/environment.js");
const requestManager = require("#utils/requestManager.js");
const schemaCEP = require("#application/schemas/cep.json");

describe("API Test (ViaCEP)", () =>{
    let response;
    let editedCEP = environment.cep.slice(0, 5) + "-" + environment.cep.slice(5);

    test("Verificar que é possível encontrar um endereço pelo CEP", async () =>{
        response = await requestManager.send(
            "GET",
            `${environment.cep}/json`
        );
    });
    
    test("E o Status Code é 200", () =>{
        expect(response.status).toBe(200);
    });

    test("E o Body contém os dados do CEP " + editedCEP, () => {
        expect(response.data).toHaveProperty("cep", editedCEP);
    });

    test("E a response corresponde ao Schema definido " + editedCEP, () => {
        expect(response.data).toBeValidSchema();
        expect(response.data).toMatchSchema(schemaCEP);
    });
})
