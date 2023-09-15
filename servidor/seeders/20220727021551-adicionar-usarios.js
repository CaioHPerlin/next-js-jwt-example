'use strict';
const crypto = require('../crypto')

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('usuarios', [
      { usuario: 'Hygin', senha: crypto.encrypt('123') },
      { usuario: 'Money', senha: crypto.encrypt('321') },
      { usuario: 'Arthas', senha: crypto.encrypt('senha') },
      { usuario: 'Sixz', senha: crypto.encrypt('666') },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuarios', null, {});
  }
};
