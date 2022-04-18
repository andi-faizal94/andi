import { Request, Response, NextFunction } from "express";
import { getConnection } from "typeorm";
import { Blog } from "../entity/Blog";
import { Paginate } from "./request/pagination";

// create blog
export const store = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const { title, image, content_blog, user } = req.body;

    const blog = await getConnection()
      .createQueryBuilder()
      .insert()
      .into(Blog)
      .values({
        title,
        image: req.file && req.file.path,
        content_blog,
        user,
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

// get all blog
export const index = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const query: Paginate = req.query;
    const blog = await getConnection()
      .createQueryBuilder()
      .select("blog")
      .from(Blog, "blog")
      .leftJoinAndSelect("blog.user", "user.id")
      .skip(query.offset)
      .take(query.limit)
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
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const { id } = req.params;
    const blog = await getConnection()
      .createQueryBuilder()
      .select("blog")
      .from(Blog, "blog")
      .where("blog.id = :id", { id })
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
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const { id } = req.params;
    const { title, image, content_blog, user } = req.body;
    const blog = await getConnection()
      .createQueryBuilder()
      .update(Blog)
      .set({
        title,
        image,
        content_blog,
        user,
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
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const { id } = req.params;
    const blog = await getConnection()
      .createQueryBuilder()
      .delete()
      .from(Blog)
      .where("id = :id", { id })
      .execute();

    return res.status(200).json({
      message: `delete blog ${id} succesfully`,
      data: { Blog: id },
    });
  } catch (error) {
    next(error);
  }
};
