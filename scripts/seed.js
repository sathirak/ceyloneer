const { db } = require('@vercel/postgres');

async function front_articles() {

    try {
        await db.query(`
            CREATE TABLE IF NOT EXISTS front_articles (
                id SERIAL PRIMARY KEY,
                title TEXT NOT NULL,
                excerpt TEXT,
                link TEXT NOT NULL,
                imageUrl TEXT,
                altText TEXT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);
        console.log('Table "front_articles" created successfully > ');
    } catch (error) {
        console.error('An error occurred while creating the table "front_articles" > ', error);
    } finally {
        await db.end();
    }

}

async function main() {
    const client = await db.connect();

    await front_articles(client);

}

main().catch((err) => {
    console.error('An error occurred while attempting to seed the database:', err);
});
