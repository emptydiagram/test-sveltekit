CREATE TABLE `counter` (
	`id` integer PRIMARY KEY DEFAULT 1 NOT NULL,
	`value` integer NOT NULL,
	CONSTRAINT "counter_single" CHECK("counter"."id" = 1)
);
