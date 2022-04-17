import * as Faker from "faker";
import { define } from "typeorm-seeding";
import { User } from "../../entity/User";

define(User, (faker: typeof Faker) => {
  const gender = faker.random.uuid();
  const user_id = faker.random.number();
  const firstName = faker.name.firstName(gender);
  const lastName = faker.name.lastName(gender);
  const age = faker.random.number({ min: 10, max: 20 });
  const user = new User();
  user.user_id = user_id;
  user.firstName = firstName;
  user.lastName = lastName;
  user.age = age;
  return user;
});
