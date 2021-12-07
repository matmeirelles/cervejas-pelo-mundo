'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Brands', [
      {
        name: 'Cervogia',
        cnpj: '20392062000101',
        region: 'São Miguel Arcanjo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Baden Baden',
        cnpj: '03431255000369',
        region: 'Campos do Jordão',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Colorado',
        cnpj: '44846012001189',
        region: 'Serra Negra',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Wals',
        cnpj: '01131570000507',
        region: 'Belo Horizonte',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Brands', null, {});
  }
};
