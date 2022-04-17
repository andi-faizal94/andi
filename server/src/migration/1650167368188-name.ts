import {MigrationInterface, QueryRunner} from "typeorm";

export class name1650167368188 implements MigrationInterface {
    name = 'name1650167368188'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "blog" DROP CONSTRAINT "FK_79dd010cae34ccff66a528608e5"`);
        await queryRunner.query(`ALTER TABLE "blog" RENAME COLUMN "user" TO "user_id"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "user_id" uuid`);
        await queryRunner.query(`ALTER TABLE "blog" ALTER COLUMN "updated_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "blog" ADD CONSTRAINT "FK_08dfe0c802192ba0c499d4cdb9c" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "blog" DROP CONSTRAINT "FK_08dfe0c802192ba0c499d4cdb9c"`);
        await queryRunner.query(`ALTER TABLE "blog" ALTER COLUMN "updated_at" SET DEFAULT '2022-04-17 03:26:12.196841'`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "user_id"`);
        await queryRunner.query(`ALTER TABLE "blog" RENAME COLUMN "user_id" TO "user"`);
        await queryRunner.query(`ALTER TABLE "blog" ADD CONSTRAINT "FK_79dd010cae34ccff66a528608e5" FOREIGN KEY ("user") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
