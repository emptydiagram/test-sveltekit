import { addTodoItem, db } from "$lib/server/db";
import { todoTable } from "$lib/server/schema";

export async function load() {
    const result = await db.select().from(todoTable);
    return {
        items: result
    }
}

export const actions = {
    create: async ({ request }) => {
        const data = await request.formData();
        addTodoItem(data.get('entry')!);
    }
}