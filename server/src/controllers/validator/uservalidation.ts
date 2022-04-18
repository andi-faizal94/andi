import { celebrate, Joi } from "celebrate";

export const store = celebrate({
  body: {
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    age: Joi.number().required(),
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
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    age: Joi.number().required(),
  },
});
export const destroy = celebrate({
  params: {
    id: Joi.string().guid(),
  },
});
