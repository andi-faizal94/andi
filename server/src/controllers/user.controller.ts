import * as express from "express";
import { getRepository } from "typeorm";
import { User } from "../entity/User";

// create user
export const store = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): Promise<any> => {
  try {
    const {
      user_id: user_id,
      firstName: firstName,
      lastName: lastName,
      age: age,
    } = req.body;
    const userRepository = getRepository(User);

    const user = await userRepository
      .createQueryBuilder()
      .insert()
      .into(User)
      .values({
        user_id,
        firstName,
        lastName,
        age,
      })
      .execute();

    return res.status(201).json({
      message: "created user succesfully",
      data: [user],
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
    const userRepository = getRepository(User);

    const users = await userRepository
      .createQueryBuilder("user")
      .leftJoinAndSelect("user.posts", "posts.id")
      .getMany();

    return res.status(200).json({
      message: "get user succesfully",
      data: users,
    });
  } catch (error) {
    next(error);
  }
};

// get user by id
// export const show = async (
//   req: express.Request,
//   res: express.Response,
//   next: express.NextFunction
// ): Promise<any> => {
//   try {
//     const { id: id } = req.params;

//     const UserById = await User.findOne(id);
//     if (!UserById) {
//       return res.status(404).json({ message: "it's not id" });
//     }

//     return res
//       .status(200)
//       .json({ message: "get user by id is succesfully", data: UserById });
//   } catch (error) {
//     console.error(error);
//     next(error);
//   }
// };

// update user
export const update = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): Promise<any> => {
  try {
    const {
      user_id: user_id,
      firstName: firstName,
      lastName: lastName,
      age: age,
    } = req.body;
    const { id: id } = req.params;
    const userRepository = getRepository(User);

    const user = await userRepository
      .createQueryBuilder()
      .update(User)
      .set({ user_id, firstName, lastName, age })
      .where("id = :id", { id })
      .execute();

    return res.status(200).json({
      message: "update user succesfully",
      data: user,
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
    const userRepository = getRepository(User);

    const user = getRepository(User)
      .createQueryBuilder()
      .delete()
      .from(User)
      .where("id = :id", { id })
      .execute();
    return res.status(200).json({
      message: `delete user ${id} succesfully`,
      data: user,
    });
  } catch (error) {
    next(error);
  }
};