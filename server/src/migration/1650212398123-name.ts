import {MigrationInterface, QueryRunner} from "typeorm";

export class name1650212398123 implements MigrationInterface {
    name = 'name1650212398123'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "blog" ALTER COLUMN "updated_at" SET DEFAULT 'now()'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "blog" ALTER COLUMN "updated_at" SET DEFAULT '2022-04-17 16:17:24.918246'`);
    }

}
