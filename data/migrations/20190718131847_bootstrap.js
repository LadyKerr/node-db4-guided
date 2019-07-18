exports.up = function(knex) {
  // zoos, species, animals
  // 1 zoo can have multiple animals
  //1 specie can have multiple animals

  return (
    knex.schema
      // <<<<<<<<< TABLE 1
      .createTable("zoos", tbl => {
        tbl.increments();

        tbl
          .string("zoo_name", 128)
          .notNullable()
          .unique();
        tbl
          .string("address", 256)
          .notNullable()
          .unique();
      })
      // <<<<<<<<<<< TABLE 2
      .createTable("species", tbl => {
        tbl.increments();

        tbl
          .string("species_name", 128)
          .notNullable()
          .unique();
      })
      // <<<<<<<<<<< TABLE 3
      .createTable("animals", tbl => {
        tbl.increments();

        tbl.string("animal_name").notNullable();
        //Foreign Key 1
        tbl
          .integer("species_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("species")
          .onUpdate("CASCADE") //if value is changes value on primary is also changed
          .onDelete("RESTRICT"); //delete references to the value
        //Foreign Key 2
        tbl
          .integer("zoo_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("zoo")
          .onUpdate("CASCADE") //if value is changes value on primary is also changed
          .onDelete("RESTRICT"); //delete references to the value
      })
  );
};

exports.down = function(knex) {
  //drop tables in the opposite order
  return knex.schema
    .dropTableIfExists("animals")
    .dropTableIfExists("species")
    .dropTableIfExists("zoo");
};
