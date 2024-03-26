const { db } = require("@vercel/postgres");
const readline = require('readline');

// Create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Object to store user input
const front_article = {};

// Function to prompt user for input
async function promptUser(question, property) {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            front_article[property] = answer;
            resolve();
        });
    });
}

// Function to collect user input
async function collectUserData() {
    await promptUser("input title > ", 'title');
    await promptUser("input excerpt > ", 'excerpt');
    await promptUser("input link > ", 'link');
    await promptUser("input imageurl > ", 'imageUrl');
    await promptUser("input alt_text > ", 'altText');
}

// Function to insert data into the database
async function front_articles() {
    try {
        const query = `
            INSERT INTO front_articles (title, excerpt, link, imageUrl, altText) 
            VALUES ($1, $2, $3, $4, $5)
            RETURNING id`;

        const values = [front_article.title, front_article.excerpt, front_article.link, front_article.imageUrl, front_article.altText];

        const result = await db.query(query, values);
        console.log('Data inserted successfully. Row ID:', result.rows[0].id);
    } catch (error) {
        console.error('An error occurred while inserting data:', error);
    } finally {
        rl.close();
        await db.end();
    }
}

async function main() {
    try {
        await collectUserData();
        await front_articles();
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

main();
