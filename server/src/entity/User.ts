import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
} from "typeorm";
import { Blog } from "./Blog";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "uuid", name: "user_id", nullable: true, default: null })
  user_id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;

  @OneToMany(() => Blog, (blog) => blog.user)
  blogs: Blog[];

  // addBlog(blog: Blog) {
  //   if (this.blogs === null) {
  //     this.blogs = new Array<Blog>();
  //   }
  //   this.blogs.push(blog);
  // }
}
