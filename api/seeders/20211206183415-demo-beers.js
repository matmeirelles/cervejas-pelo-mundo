'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Beers', [
      {
        name: 'Ribeirão Lagger',
        brand: 1,
        ibu: 20,
        alcohol: 4.5,
        type: 'Standard American Lager',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cauim',
        brand: 3,
        ibu: 16,
        alcohol: 4.5,
        type: 'Lager',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Appia',
        brand: 3,
        ibu: 10,
        alcohol: 5.5,
        type: 'Ale',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Kuya',
        brand: 3,
        ibu: 30,
        alcohol: 4.0,
        type: 'Session IPA',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Indica',
        brand: 3,
        ibu: 45,
        alcohol: 7.0,
        type: 'English IPA',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Demoiselle',
        brand: 3,
        ibu: 22,
        alcohol: 6.0,
        type: 'Ale',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Orgânica',
        brand: 3,
        ibu: 12,
        alcohol: 4.0,
        type: 'Session IPA',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'American IPA',
        brand: 2,
        ibu: 33,
        alcohol: 6.4,
        type: 'American IPA',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cristal',
        brand: 2,
        ibu: 10,
        alcohol: 5.0,
        type: 'Pilsen',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Golden',
        brand: 2,
        ibu: 10,
        alcohol: 4.5,
        type: 'Ale',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Witbier',
        brand: 2,
        ibu: 11,
        alcohol: 4.9,
        type: 'Witbier',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Chocolate',
        brand: 2,
        ibu: 11,
        alcohol: 6.0,
        type: 'Stout',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'PI|04',
        brand: 1,
        ibu: 14,
        alcohol: 5.0,
        type: 'Pilsen',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'AP|11',
        brand: 1,
        ibu: 32,
        alcohol: 5.5,
        type: 'Apa',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Beers', null, {})

  }
}