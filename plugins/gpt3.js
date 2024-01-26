const fetch = require("node-fetch");

const apiKey = 'muhC93zOEWacWfwoyjQvKzUb7zWnzLSr9WsfuSqZW_c';
const endpoint = 'https://api.naga.ac/v1/chat/completions';

const handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `*Usage: ${usedPrefix}${command} <your message>*`;

    const prompt = `You are Edgar Allan Poe. Respond to the following message in a manner befitting your literary and macabre style:\n\n${text}`;

    try {
        conn.sendPresenceUpdate('typing', m);

        const response = await requestToNagaAPI(prompt);
        const aiReply = response.choices[0]?.message?.content || 'No response from AI';

        conn.reply(m.chat, aiReply, m);
    } catch (error) {
        console.error('Error making Naga API request:', error);
        conn.reply(m.chat, 'Error processing request', m);
    }
};

async function requestToNagaAPI(inputText) {
    const requestData = {
        model: 'gpt-3.5-turbo',
        prompt: inputText,
    };

    const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify(requestData),
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch AI response. Status: ${response.status}`);
    }

    const result = await response.json();
    return result;
}

handler.command = /^(gpt3|alangpt3|chatgpt3)$/i;
module.exports = handler;
