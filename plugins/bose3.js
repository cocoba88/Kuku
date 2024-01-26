const axios = require('axios');

let handler = async (m, { conn, text }) => {
    if (!text) {
        return m.reply("Usage:\n!bose <prompt>");
    }

    const apiUrl = "https://api.wizmodel.com/v1/predictions";
    const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MDM2OTc4ODIsInVzZXJfaWQiOiI2NThjNWRkNjBjNWYzNWIzMThjOTI5MTkifQ.BiQLNG573BrwNZ9xCFJShCajVWZrsOTBEjaL_JEW1iw"; // Replace with your actual API key

    try {
        const response = await axios.post(apiUrl, {
            input: {
                prompt: text,
            },
            version: "7d229e3ed5d01c879622d0cd273572260b7e35103d6765af740f853b160d04b7",
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + apiKey
            },
        });

        console.log(response); // Log the entire response object

        if (response.data && response.data.output) {
            const imageUrl = response.data.output;
            await conn.sendFile(m.chat, imageUrl, 'generated_image.jpg', 'Generated Image', m);
        } else {
            console.log("Image URL not found in the response");
            m.reply("Error generating and sending image.");
        }
    } catch (error) {
        console.error(`Error generating and sending image: ${error.message}`);
        m.reply("Error generating and sending image.");
    }
};

handler.help = ['bose <prompt>'];
handler.tags = ['ai'];
handler.command = /^lose3/i;
handler.premium = false;
handler.diamond = false;

module.exports = handler;
