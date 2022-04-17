import * as express from "express";
import { getConnection } from "typeorm";
import { User } from "../entity/User";

// create user
export const store = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): Promise<any> => {
  try {
    const {
      id: id,
      firstName: firstName,
      lastName: lastName,
      age: age,
    } = req.body;

    const user = await getConnection()
      .createQueryBuilder()
      .insert()
      .into(User)
      .values({
        id: id,
        firstName: firstName,
        lastName: lastName,
        age: age,
      })
      .execute();

    return res.status(201).json({
      message: "created user succesfully",
      data: [{ User: user }],
    });
  } catch (error) {
    next(error);
  }
};

// get all data
export const index = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): Promise<any> => {
  try {
    const users = await getConnection()
      .createQueryBuilder()
      .select("user")
      .from(User, "user")
      .leftJoinAndSelect("user.blogs", "blogs")
      .getMany();
    return res.status(200).json({
      message: "get user succesfully",
      data: { User: users },
    });
  } catch (error) {
    next(error);
  }
};

// get user by id
export const show = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): Promise<any> => {
  try {
    const { id } = req.params;
    const users = await getConnection()
      .createQueryBuilder()
      .select("user")
      .from(User, "user")
      .where("user.id = :id", { id: id })
      .getOne();

    return await res.status(200).json({
      message: "get user succesfully",
      data: { User: users },
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

// update user
export const update = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): Promise<any> => {
  try {
    const { firstName: firstName, lastName: lastName, age: age } = req.body;
    const { id: id } = req.params;

    const user = await getConnection()
      .createQueryBuilder()
      .update(User)
      .set({ firstName: firstName, lastName: lastName, age: age })
      .where("id = :id", { id: id })
      .execute();

    return await res.status(200).json({
      message: "update user succesfully",
      data: { User: id },
    });
  } catch (error) {
    next(error);
  }
};

// delete user
export const destroy = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): Promise<any> => {
  try {
    const { id: id } = req.params;

    const user = await getConnection()
      .createQueryBuilder()
      .delete()
      .from(User)
      .where("id = :id", { id: id })
      .execute();
    return await res.status(200).json({
      message: `delete user ${id} succesfully`,
      data: { User: id },
    });
  } catch (error) {
    next(error);
  }
};
