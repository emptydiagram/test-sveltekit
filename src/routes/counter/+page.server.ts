import { db, decrementCounter, incrementCounter } from "$lib/server/db";
import { counterTable } from "$lib/server/schema";
import { eq } from "drizzle-orm";

export async function load() {
    const result = await db.select().from(counterTable).where(eq(counterTable.id, 1));
    if (result.length === 0) {
        return { value: 0 };
    }
    return {
        value: result[0].value
    };
}

export const actions = {
    increment: async ({ request }) => {
        const data = await request.formData();
        incrementCounter();
    },
    decrement: async ({ request }) => {
        const data = await request.formData();
        decrementCounter();
    },
}