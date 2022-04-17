import { Seeder, Factory } from "typeorm-seeding";
import { Blog } from "../../entity/Blog";

export default class CreateUsers implements Seeder {
  public async run(factory: Factory): Promise<void> {
    await factory(Blog)().createMany(2);
  }
}
