require('dotenv').config();
const requestManager = require("./../utils/requestManager");

test('Get Wrike folder', async () => {
    let response = await requestManager.send(
        "get",
        process.env.WRIKE_ENDPOINT,
        {},
        {"Authorization": `Bearer ${process.env.WRIKE_TOKEN}`}
    );

    expect(response.status).toBe(200);


})