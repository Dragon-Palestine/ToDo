import mongoose from "mongoose";

const Schema = mongoose.Schema;
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { minimize: false },
); // to store empty objects in cartData

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
