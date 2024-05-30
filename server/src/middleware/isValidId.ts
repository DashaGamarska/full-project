import { Request, Response, NextFunction } from "express";
import { isValidObjectId } from "mongoose";
import { HttpError } from "../helpers";

const isValidId = (req: Request, res: Response, next: NextFunction): void => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    next(new HttpError(400, `${id} is not a valid id`));
    return; 
  }
  next();
};

export default isValidId;
