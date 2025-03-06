import { db } from "$lib/server/db";
import { counterTable } from "$lib/server/schema";
import { eq } from "drizzle-orm";

export async function load() {
    const result = await db.select().from(counterTable).where(eq(counterTable.id, 1));
    return {
        result
    };
}