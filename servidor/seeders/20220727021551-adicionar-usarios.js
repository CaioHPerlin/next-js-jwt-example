'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('usuarios', [
      { usuario: 'Hygin', senha: '123' },
      { usuario: 'Money ', senha: '321' },
      { usuario: 'Arthas ', senha: 'senha' },
      { usuario: 'Sixz ', senha: '666' },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuarios', null, {});
  }
};
