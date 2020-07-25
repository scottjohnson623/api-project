import {MigrationInterface, QueryRunner} from "typeorm";

export class Create1595662543540 implements MigrationInterface {
    name = 'Create1595662543540'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "first_name" character varying NOT NULL, "last_name" character varying NOT NULL, "email" character varying, "gender" character varying, "favoriteanimal" character varying, "motto" character varying, "networth" character varying, "carmake" character varying, "favmoviegenre" character varying, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
