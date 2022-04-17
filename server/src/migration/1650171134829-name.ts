import {MigrationInterface, QueryRunner} from "typeorm";

export class name1650171134829 implements MigrationInterface {
    name = 'name1650171134829'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "blog" DROP CONSTRAINT "FK_08dfe0c802192ba0c499d4cdb9c"`);
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "user_id" TO "user"`);
        await queryRunner.query(`ALTER TABLE "blog" RENAME COLUMN "user_id" TO "user"`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "UQ_9ec886924bcd97ae6f14220017a" UNIQUE ("user")`);
        await queryRunner.query(`ALTER TABLE "blog" ALTER COLUMN "updated_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "blog" DROP COLUMN "user"`);
        await queryRunner.query(`ALTER TABLE "blog" ADD "user" integer`);
        await queryRunner.query(`ALTER TABLE "blog" ADD CONSTRAINT "FK_79dd010cae34ccff66a528608e5" FOREIGN KEY ("user") REFERENCES "user"("user") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "blog" DROP CONSTRAINT "FK_79dd010cae34ccff66a528608e5"`);
        await queryRunner.query(`ALTER TABLE "blog" DROP COLUMN "user"`);
        await queryRunner.query(`ALTER TABLE "blog" ADD "user" uuid`);
        await queryRunner.query(`ALTER TABLE "blog" ALTER COLUMN "updated_at" SET DEFAULT '2022-04-17 04:33:52.038004'`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "UQ_9ec886924bcd97ae6f14220017a"`);
        await queryRunner.query(`ALTER TABLE "blog" RENAME COLUMN "user" TO "user_id"`);
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "user" TO "user_id"`);
        await queryRunner.query(`ALTER TABLE "blog" ADD CONSTRAINT "FK_08dfe0c802192ba0c499d4cdb9c" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

}
