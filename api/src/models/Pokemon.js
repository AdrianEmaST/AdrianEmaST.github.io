const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Pokemon', {
    id: {
      type: DataTypes.UUID,
      //valor único generado de manera aleatoria
      defaultValue: DataTypes.UUIDV4,
      //tmb
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [1,20]
      },
      //rango de 1 a 20 caracteres
    },
    img: {
      type: DataTypes.STRING,
      defaultValue: "https://w7.pngwing.com/pngs/248/960/png-transparent-pikachu-pokemon-go-silhouette-drawing-pikachu-dog-like-mammal-fictional-character-black.png",
    },
    type: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      //puede contener múltiples valores de tipo string almacenados en forma de arreglo
      defaultValue: ["normal"],
    },
    hp:{
      type: DataTypes.INTEGER,
      defaultValue: 10,
      validate: {
        min: 1,
        max: 255
      },
      //tmb rango
    },
    attack: {
      type: DataTypes.INTEGER,
      defaultValue: 10,
      validate: {
        min: 1,
        max: 255
      }
      //tmb rango
    },
    defense: {
      type: DataTypes.INTEGER,
      defaultValue: 10,
      validate: {
        min: 1,
        max: 255
      }
      //tmb rango
    },
    speed: {
      type: DataTypes.INTEGER,
      defaultValue: 10,
      validate: {
        min: 1,
        max: 255
      }
    },
    height: {
      type: DataTypes.INTEGER,
      defaultValue: 10,
      validate: {
        min: 1,
        max: 1000
      }
    },
    weight: {
      type: DataTypes.INTEGER,
      defaultValue: 10,
      validate: {
        min: 1,
        max: 1000
      }
    },
  });
};