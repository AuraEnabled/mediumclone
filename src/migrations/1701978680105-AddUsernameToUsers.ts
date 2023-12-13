import { MigrationInterface, QueryRunner } from "typeorm";

export class AddUsernameToUsers1701978680105 implements MigrationInterface {
    name = 'AddUsernameToUsers1701978680105'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "username" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "username"`);
    }

}
