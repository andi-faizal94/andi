import * as express from "express";
import { getRepository } from "typeorm";
import { Blog } from "../entity/Blog";

// create blog
export const store = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): Promise<any> => {
  try {
    const { title, image, content_blog } = req.body;
    const blogRepository = getRepository(Blog);
    const blog = await blogRepository
      .createQueryBuilder()
      .insert()
      .into(Blog)
      .values({
        title,
        image,
        content_blog,
      })
      .execute();
    return res.status(201).json({
      message: "created user succesfully",
      data: [blog],
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
    const blogRepository = getRepository(Blog);

    const blog = await blogRepository
      .createQueryBuilder("blogs")
      .leftJoinAndSelect("blogs.user", "user")
      .getMany();
    return res.status(200).json({
      message: "get user succesfully",
      data: blog,
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
//     const blogRepository = getRepository(Blog);

//     const UserById = await blogRepository.findOne(id);
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

// update blog
export const update = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): Promise<any> => {
  try {
    const { id: id } = req.params;
    const { title, image, content_blog } = req.body;
    const blogRepository = getRepository(Blog);
    const blog = await blogRepository
      .createQueryBuilder()
      .update(Blog)
      .set({ title, image, content_blog })
      .where("id = :id", { id })
      .execute();

    return res.status(200).json({
      message: "update user succesfully",
      data: blog,
    });
  } catch (error) {
    next(error);
  }
};

// delete blog
export const destroy = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): Promise<any> => {
  try {
    const { id: id } = req.params;
    const blogRepository = getRepository(Blog);
    const blog = await blogRepository
      .createQueryBuilder()
      .delete()
      .from(Blog)
      .where("id = :id", { id })
      .execute();
    return res.status(200).json({
      message: `delete user ${id} succesfully`,
      data: blog,
    });
  } catch (error) {
    next(error);
  }
};
