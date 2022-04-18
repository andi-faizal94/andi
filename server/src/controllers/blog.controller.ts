import * as express from "express";
import { getConnection, getRepository } from "typeorm";
import { Blog } from "../entity/Blog";

// create blog
export const store = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): Promise<any> => {
  try {
    const {
      title: title,
      image: image,
      content_blog: content_blog,
      user: userId,
    } = req.body;
    const blog = await getConnection()
      .createQueryBuilder()
      .insert()
      .into(Blog)
      .values({
        title: title,
        image: image,
        content_blog: content_blog,
        user: userId,
      })
      .execute();
    return res.status(201).json({
      message: "created user succesfully",
      data: [{ Blog: blog }],
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
    const { firstName: firstName } = req.query;
    const blog = await getConnection()
      .createQueryBuilder()
      .select("blog")
      .from(Blog, "blog")
      .leftJoinAndSelect("blog.user", "user.id")
      .getMany();

    return res.status(200).json({
      message: "get user succesfully",
      data: { Blog: blog },
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
    const blog = await getConnection()
      .createQueryBuilder()
      .select("blog")
      .from(Blog, "blog")
      .where("blog.id = :id", { id: id })
      .getOne();
    return res
      .status(200)
      .json({ message: "get user by id is succesfully", data: { Blog: blog } });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

// update blog
export const update = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): Promise<any> => {
  try {
    const { id: id } = req.params;

    const {
      title: title,
      image: image,
      content_blog: content_blog,
      user: userId,
    } = req.body;
    const user = await getConnection()
      .createQueryBuilder()
      .update(Blog)
      .set({
        title: title,
        image: image,
        content_blog: content_blog,
        user: userId,
      })
      .where("id = :id", { id: id })
      .execute();

    return res.status(200).json({
      message: "update user succesfully",
      data: { Blog: id },
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
    const user = await getConnection()
      .createQueryBuilder()
      .delete()
      .from(Blog)
      .where("id = :id", { id: id })
      .execute();

    return res.status(200).json({
      message: `delete blog ${id} succesfully`,
      data: { Blog: id },
    });
  } catch (error) {
    next(error);
  }
};
