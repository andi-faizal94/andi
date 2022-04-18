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
    const { id, firstName, lastName, age } = req.body;

    const user = await getConnection()
      .createQueryBuilder()
      .insert()
      .into(User)
      .values({
        id,
        firstName,
        lastName,
        age,
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

// get all user
export const index = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): Promise<any> => {
  try {
    const user = await getConnection()
      .createQueryBuilder()
      .select("user")
      .from(User, "user")
      .leftJoinAndSelect("user.blogs", "blogs")
      .getMany();
    return res.status(200).json({
      message: "get user succesfully",
      data: { User: user },
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
    const user = await getConnection()
      .createQueryBuilder()
      .select("user")
      .from(User, "user")
      .where("user.id = :id", { id })
      .getOne();

    return await res.status(200).json({
      message: "get user succesfully",
      data: { User: user },
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
    const { firstName, lastName, age } = req.body;
    const { id } = req.params;

    const user = await getConnection()
      .createQueryBuilder()
      .update(User)
      .set({ firstName, lastName, age })
      .where("id = :id", { id })
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
    const { id } = req.params;
    const user = await getConnection()
      .createQueryBuilder()
      .select("user.id", "id")
      .from(User, "user")
      .withDeleted()
      .getMany();

    return await res.status(200).json({
      message: `delete user ${id} succesfully`,
      data: { User: id },
    });
  } catch (error) {
    next(error);
  }
};
