import { celebrate, Joi } from "celebrate";

export const store = celebrate({
  body: {
    title: Joi.string().max(50).required(),
    content_blog: Joi.string().required(),
  },
});
export const index = celebrate({
  query: {
    limit: Joi.number().integer().min(1).max(100).default(10),
    offset: Joi.number().integer().min(0).default(0),
  },
});
export const show = celebrate({
  params: {
    id: Joi.string().guid(),
  },
});
export const update = celebrate({
  params: {
    id: Joi.string().guid(),
  },
  body: {
    title: Joi.string().max(50).required(),
    content_blog: Joi.string().required(),
  },
});
export const destroy = celebrate({
  params: {
    id: Joi.string().guid(),
  },
});
