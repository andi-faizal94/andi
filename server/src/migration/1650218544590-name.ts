import {MigrationInterface, QueryRunner} from "typeorm";

export class name1650218544590 implements MigrationInterface {
    name = 'name1650218544590'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "blog" RENAME COLUMN "updated_at" TO "created_at"`);
        await queryRunner.query(`ALTER TABLE "blog" ALTER COLUMN "created_at" SET DEFAULT 'now()'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "blog" ALTER COLUMN "created_at" SET DEFAULT '2022-04-17 16:20:12.20711'`);
        await queryRunner.query(`ALTER TABLE "blog" RENAME COLUMN "created_at" TO "updated_at"`);
    }

}
