/*
  `material` VARCHAR(45) NULL,
  `shape` VARCHAR(45) NULL,
  `origin` VARCHAR(45) NULL,
  `aqDate` DATE NULL,
  `aqPrice` FLOAT NULL,
  `size` FLOAT NULL,
  `weight` FLOAT NULL,
  `imperfect` TINYINT ZEROFILL NULL,
**/

module.exports = (sequelize, Sequelize)=>{
    const Products = sequelize.define("'tutorial", {
        material:{
            type:Sequelize.STRING
        },
        shape:{
            type: Sequelize.STRING  
        },
        origin
        :{
            type: Sequelize.STRING
        },
        aqDate:{
            type: Sequelize.DATE
        },
        aqPrice:{
            type: Sequelize.FLOAT
        },
        size:{
            type: Sequelize.FLOAT
        },
        weight:{
            type: Sequelize.FLOAT
        },
        imperfect:{
            type: Sequelize.BOOLEAN
        }

    });
    return Products
}