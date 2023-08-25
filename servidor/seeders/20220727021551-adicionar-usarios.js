'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('usuarios', [
      { nome: 'Hygin', senha: '123' },
      { nome: 'Money ', senha: '321' },
      { nome: 'Arthas ', senha: 'senha' },
      { nome: 'Sixz ', senha: '666' },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuarios', null, {});
  }
};
