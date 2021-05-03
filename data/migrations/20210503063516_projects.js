
exports.up = async function(knex) {
  await knex.schema.createTable("projects", (table) => {
      table.increments("project_id")
      table.text("project_name").notNutll()
      table.text("project_description")
      table.boolean("project_completed")
  })
};

exports.down = function(knex) {
  
};
