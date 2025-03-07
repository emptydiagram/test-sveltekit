import 'dotenv/config';
import { drizzle } from "drizzle-orm/libsql";
import { counterTable, todoTable } from './schema';
import { eq, sql } from 'drizzle-orm';

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


export async function addTodoItem(entry: string) {
    await db
    .insert(todoTable)
    .values({ entry: entry, status: 'pending' });
}

export async function updateTodoItemStatus(id: number, newStatus: string) {
    await db
    .update(todoTable)
    .set({ status: newStatus })
    .where(eq(todoTable.id, id));
}