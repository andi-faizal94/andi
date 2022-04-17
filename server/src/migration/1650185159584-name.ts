import {MigrationInterface, QueryRunner} from "typeorm";

export class name1650185159584 implements MigrationInterface {
    name = 'name1650185159584'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "age" integer NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "blog" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "image" character varying NOT NULL, "content_blog" character varying NOT NULL, "updated_at" TIMESTAMP NOT NULL DEFAULT 'now()', " updated_at" TIMESTAMP DEFAULT now(), "deleted_at" TIMESTAMP, "userId" uuid, CONSTRAINT "PK_85c6532ad065a448e9de7638571" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "blog" ADD CONSTRAINT "FK_fc46ede0f7ab797b7ffacb5c08d" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "blog" DROP CONSTRAINT "FK_fc46ede0f7ab797b7ffacb5c08d"`);
        await queryRunner.query(`DROP TABLE "blog"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
