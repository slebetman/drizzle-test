#! /usr/bin/env node

import { like } from "drizzle-orm";
import { users } from "./schema.mjs";
import db from "./db.mjs";

db.query.users
  .findMany({
	where: like(users.name,"Adly%"),
	columns: {
		password: false,
	},
  	with: {
  		notes: {
  			columns: {
  				user: false,
  			}
  		},
  	}
  })
  .then((x) => console.log(JSON.stringify(x, null, 2)));
