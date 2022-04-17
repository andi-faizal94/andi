import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { User } from "./User";

@Entity()
export class Blog extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  title: string;

  @Column()
  image: string;

  @Column()
  content_blog: string;

  @CreateDateColumn({ name: "updated_at", type: "timestamp", default: "now()" })
  createdAt: Date;

  @UpdateDateColumn({
    name: " updated_at",
    type: "timestamp",
    nullable: true,
    default: null,
  })
  updatedAt?: Date;

  @DeleteDateColumn({
    name: "deleted_at",
    type: "timestamp",
    nullable: true,
    default: null,
  })
  deletedAt?: Date;

  @ManyToOne(() => User, (user) => user.blogs, {
    cascade: ["insert", "update"],
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "user", referencedColumnName: "user_id" })
  user: User;
}
