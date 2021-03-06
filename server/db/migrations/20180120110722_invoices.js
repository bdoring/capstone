
exports.up = function(knex, Promise) {
  return knex.schema.createTable('invoices', (table) => {
    table.increments();
    table.integer('vendor_id')
      .references('id')
      .inTable('vendors')
      .onDelete('CASCADE')
      .index();
    table.string('invoice_number');
    table.string('amount');
    table.date('invoice_date');
    table.date('invoice_due_date');
    table.string('url');
    table.string('status')
      .defaultTo('pending');
    table.integer('action_user')
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .index();
    table.boolean('scheduled')
      .defaultTo(false);
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('invoices');
};
