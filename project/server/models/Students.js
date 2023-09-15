module.exports = (sequelize,DataTypes) => {
const Students = sequelize.define("Students",{
        name:{
        type:DataTypes.STRING,
        allowNull:false,
       },
         username:{
         type:DataTypes.STRING,
         allowNull:false,
       },
        email: {
        type:DataTypes.STRING,
        allowNull:false,
       },
        address: {
        type:DataTypes.STRING,
        allowNull:false,
       },
        password: {
        type:DataTypes.STRING,
        allowNull:false,
       },
        telenumber: {
        type:DataTypes.STRING,
        allowNull:false,
       }
});

return Students
};