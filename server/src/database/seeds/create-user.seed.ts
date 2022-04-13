import { Seeder, Factory } from "typeorm-seeding";
import { User } from "../../entity/User";

export default class CreateUsers implements Seeder {
  public async run(factory: Factory): Promise<void> {
    await factory(User)().createMany(10);
  }
}
