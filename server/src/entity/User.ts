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

  @Column({ name: "user", nullable: true, unique: true })
  user_id: number;

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
