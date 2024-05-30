import { NextFunction } from "express";

const handleSaveErrors = (error: any, data: any, next: NextFunction): void => {
  const { name, code } = error;
  error.status = name === "MongoServerError" && code === 11000 ? 409 : 400;
  next();
};

export default handleSaveErrors;
