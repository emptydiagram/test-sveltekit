import 'dotenv/config';
import { drizzle } from "drizzle-orm/libsql";
import { counterTable } from './schema';
import { sql } from 'drizzle-orm';

export const db = drizzle(process.env.DB_FILE_NAME!);

export async function incrementCounter() {
    await db
    .insert(counterTable)
    .values({ id: 1, value: 1})
    .onConflictDoUpdate({
        target: counterTable.id,
        set: { value: sql`${counterTable.value} + 1` },
    });
}

export async function decrementCounter() {
    await db
    .insert(counterTable)
    .values({ id: 1, value: -1})
    .onConflictDoUpdate({
        target: counterTable.id,
        set: { value: sql`${counterTable.value} - 1` },
    });
}