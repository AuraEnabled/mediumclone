import { MigrationInterface, QueryRunner } from "typeorm";

export class SeedDb1705075296199 implements MigrationInterface {
  name = 'SeedDb1705075296199';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO tags (name) VALUES ('tasya'), ('stripuxa'), ('mr.first'), ('eva')`,
    );

    // password 123
    await queryRunner.query(
      `INSERT INTO users (username, email, password) VALUES ('tasya', 'tasya@gmail.com', '$2b$10$2UmTaxSABwN8P.QJivJUtevAaqzsxM6/To1cXBGqo5kEBX45sVZjC')`,
    );

    await queryRunner.query(
      `INSERT INTO articles (slug, title, description, body, "tagList", "authorId") VALUES 
        ('tasya-stripuxa', 'Tasya stripuxa', 'Tasya stripuxa description', 'Tasya stripuxa from mr. first body', 'tasya,stripuxa', 1),
        ('eva-ivanchenko', 'Eva Ivanchenko', 'Eva Ivanchenko description', 'Eva Ivanchenko deutsche kurse body', 'eva,stripuxa', 1)
        `,
    );
  }

  public async down(): Promise<void> {}
}
