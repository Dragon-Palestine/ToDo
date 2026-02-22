import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const hashPassword = async (password) => {
  try {
    if(!process.env.SALT_ROUNDS ){
        const error=new Error(".env 'SALT_ROUNDS' is empty");
        error.statusCode=404;
        throw error;
    }
    const saltRounds = parseInt(process.env.SALT_ROUNDS);
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    if(!error.message)error.message="Error hashing password";
    next(error);
    throw error;
  }
};

export const comparePassword = async (password, hashedPassword) => {
  try {
    const isMatch = await bcrypt.compare(password, hashedPassword);
    return isMatch;
  } catch (error) {
    next(new Error("Error comparing password"));
    throw new Error("Error comparing password");
  }
};

export const validId = (id) => {
  const isValid = /^[0-9a-fA-F]{24}$/.test(id);
  return isValid;
};

export const generateToken = (email, id) => {
  try {
    if(!process.env.JWT_EXPIRE || !process.env.JWT_SECRET ){
        const error=new Error(".env 'JWT_EXPIRE or JWT_SECRET' is empty");
        error.statusCode=404;
        throw error;
    }
    return jwt.sign({ id, email }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE,
    });
  } catch {
    if(!error.message)error.message="fild to generate Token .";
    next(error);
    throw error;
  }
};
