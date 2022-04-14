import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from "typeorm";

@Entity()
export class Blog extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  blog_id: string;

  @Column()
  title: string;

  @Column()
  image: string;

  @Column()
  content_blog;

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
}
