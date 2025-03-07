import { sql } from "drizzle-orm";
import { check, int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const counterTable = sqliteTable("counter",
    {
        id: int().primaryKey().default(1).notNull(),
        value: int().notNull(),
    },
    (table) => [
        check("counter_single", sql`${table.id} = 1`)
    ]
);

export const todoTable = sqliteTable("todo",
    {
        id: int().primaryKey({ autoIncrement: true }).notNull(),
        entry: text().notNull(),
        status: text().notNull(),
    }
);