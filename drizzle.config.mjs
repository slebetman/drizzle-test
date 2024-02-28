#! /usr/bin/env node

import { Config } from "drizzle-kit";

export default {
	driver: "better-sqlite3",
	out: "./drizzle",
	dbCredentials: {
		database: "test.db",
	}
}