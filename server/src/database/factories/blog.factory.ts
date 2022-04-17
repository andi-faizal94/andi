import * as Faker from "faker";
import { define } from "typeorm-seeding";
import { Blog } from "../../entity/Blog";

define(Blog, (faker: typeof Faker) => {
  const gender = faker.random.uuid();
  const title = faker.lorem.paragraph(gender);
  const image = faker.random.word(gender);
  const content_blog = faker.random.word(gender);
  const blog = new Blog();
  blog.title = title;
  blog.image = image;
  blog.content_blog = content_blog;
  return blog;
});
