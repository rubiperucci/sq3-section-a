const { environment } = require("#utils/environment.js");
const requestManager = require("#utils/requestManager.js");
const schemaCEP = require("#application/schemas/cep.json");

const editedCEP = environment.cep.slice(0, 5) + "-" + environment.cep.slice(5);

test("API Test (ViaCEP) - Soft Assert", async () =>{
    const response = await requestManager.send(
        "GET",
        environment.cep
    );

    await softAssert.assert(response?.status === 200, "Response Status Code is not 200"); // with '?' does not throw error, optional paramether
    await softAssert.assertEqual(response?.data.cep, editedCEP, "Retrieved CEP does not match response data");
    await softAssert.assertSchema(response?.data, schemaCEP, "Response does not match valid schema");

    softAssert.check();
});
