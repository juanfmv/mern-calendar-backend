const mongoose = require("mongoose");

//* PARA QUITAR AVISO EN CONSOLA
mongoose.set('strictQuery', false);

const dbConnection = async () => {
  try {
    // await mongoose.connect(process.env.DB_CNN, {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    //   useCreateIndex: true,
    // });
    await mongoose.connect(process.env.DB_CNN);

    console.log('DB Online');

  } catch (error) {
    console.log(error);
    throw new Error("Error a la hora de inicializar base de datos");
  }
};

module.exports = {
    dbConnection
}
