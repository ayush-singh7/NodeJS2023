'use strict';
const { log } = require('console');
const fs = require('fs')
const path = require('path')


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
     let path1 = path.join(__dirname,'../category-images');

     console.log(path1,'_____________I1________________')

     const image1 = fs.readFileSync(path1+"/olx_car.png");
     const image2 = fs.readFileSync(path1+"/olx_furniture.png")
     const image3 = fs.readFileSync(path1+"/olx_shoes.png")

    return queryInterface.bulkInsert('Olx_Categories', [
      {
        category_id: 1,
        category_name: 'Shoes',
        category_image: image1,
        product_id:null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category_id: 2,
        category_name: 'Furniture',
        category_image: image2,
        product_id:null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category_id: 3,
        category_name: 'Car',
        category_image: image3,
        product_id:null,
        createdAt: new Date(),
        updatedAt: new Date()
      }

    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
