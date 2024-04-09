const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

// modelo de datos para almacenar los usuarios
const UsuarioSchema = Schema(
  {
    correo: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    nombre: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    apellido: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    cedula: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
      trim: true,
    },
    rol: {
      type: String,
      enum: ["admin", "moderador", "usuario"],
      default: "usuario",
    },
    estado: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);


module.exports = model("Usuario", UsuarioSchema);
