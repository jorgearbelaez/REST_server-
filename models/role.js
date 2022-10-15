const { Schema, model } = require("mongoose");

const RoleSchema = Schema({
  rol: {
    type: String,
    reuqired: [true, "El rol es obligatorio"],
  },
});

module.exports = model("role", RoleSchema);
