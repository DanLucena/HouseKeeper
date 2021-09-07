import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUser1624835857625 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: "users",
                    columns: [
                        {
                            name: "id",
                            type: "uuid",
                            isPrimary: true
                        },
                        {
                            name: "username",
                            type: "varchar",
                        },
                        {
                            name: "password",
                            type: "varchar"
                        },
                        {
                            name: "email",
                            type: "varchar",
                            isUnique: true
                        },
                        {
                            name: "image",
                            type: "varchar"
                        },
                        {
                            name: "level",
                            type: "integer"
                        },
                        {
                            name: "currentExp",
                            type: "integer"
                        },
                        {
                            name: "created_at",
                            type: "timestamp",
                            default: "now()"
                        },
                        {
                            name: "isAdmin",
                            type: "boolean"
                        }
                    ]
                }
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}
