import { MigrationInterface, QueryRunner } from 'typeorm'

export class createSettingsTable1657035272108 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "setting" ("name" character varying NOT NULL, "content" jsonb NOT NULL, CONSTRAINT "PK_27923d152bbf82683ab795d5476" PRIMARY KEY ("name"))`,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "setting"`)
  }
}
