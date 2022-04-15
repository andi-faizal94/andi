import * as express from "express";
import { getRepository } from "typeorm";
import { Blog } from "../entity/Blog";

// create user
export const store = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): Promise<any> => {
  try {
    let blog = new Blog();
    blog = { ...req.body };
    const blogRepository = getRepository(Blog);
    await blogRepository.save(blog);
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
    const blogs = await blogRepository.find();
    return res.status(200).json({
      message: "get user succesfully",
      data: blogs,
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
    const { id: id } = req.params;
    const blogRepository = getRepository(Blog);

    const UserById = await blogRepository.findOne(id);
    if (!UserById) {
      return res.status(404).json({ message: "it's not id" });
    }

    return res
      .status(200)
      .json({ message: "get user by id is succesfully", data: UserById });
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
    const { id: id } = req.params;
    const newBlog = req.body as Blog;
    const blogRepository = getRepository(Blog);

    await blogRepository.update(id, newBlog);
    const blog = await blogRepository.find({
      id: id,
    });

    if (!blog) {
      return res.status(404).json({ message: "it's not id" });
    }
    return res.status(200).json({
      message: "update user succesfully",
      data: blog,
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
    const blogRepository = getRepository(Blog);

    const blog = await blogRepository.find({
      id: id,
    });

    if (!blog) {
      return res.status(404).json({ message: "it's not id" });
    }
    await blogRepository.remove(blog);
    return res.status(200).json({
      message: `delete user ${id} succesfully`,
      data: blog,
    });
  } catch (error) {
    next(error);
  }
};
