import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableMessage1735760683688 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE message (
                id INT PRIMARY KEY AUTO_INCREMENT,
                content VARCHAR(255) NOT NULL,
                date DATE NOT NULL,
                image VARCHAR(255) NULL
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE message;
        `);
    }

}
