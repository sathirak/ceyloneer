import { sql } from '@vercel/postgres';

import { unstable_noStore as noStore } from 'next/cache';

export async function fetch_front_articles() {
    noStore();

    try {
      const articles = await sql`SELECT * FROM front_articles`;
      return articles.rows;
    } catch (error) {
      console.error('Failed to fetch user:', error);
      throw new Error('Failed to fetch user.');
    }
}