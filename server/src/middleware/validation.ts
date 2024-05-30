import { Request, Response, NextFunction } from "express";
import { Schema } from "joi"; 
import { HttpError } from "../helpers";

const validation = (schema: Schema) => {
  const func = (req: Request, res: Response, next: NextFunction): void => {
    const { error } = schema.validate(req.body);
    if (error) {
      next(new HttpError(400, error.message));
      return; 
    }
    next();
  };

  return func;
};

export default validation;
