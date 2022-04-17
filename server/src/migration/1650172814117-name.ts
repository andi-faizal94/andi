import {MigrationInterface, QueryRunner} from "typeorm";

export class name1650172814117 implements MigrationInterface {
    name = 'name1650172814117'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "blog" ALTER COLUMN "updated_at" SET DEFAULT 'now()'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "blog" ALTER COLUMN "updated_at" SET DEFAULT '2022-04-17 04:52:25.886781'`);
    }

}
