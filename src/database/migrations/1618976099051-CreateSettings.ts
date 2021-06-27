import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateSettings1618976099051 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'settings',
      columns: [
        {
          name: 'settings_id',
          type: 'uuid',
          isPrimary: true
        },
        {
          name: 'username',
          type: 'varchar',
          isUnique: true
        },
        {
          name: 'chat',
          type: 'boolean',
          default: true
        },
        {
          name: 'created_at',
          type: 'timestamp',
          default: "now()"
        },
        {
          name: 'updated_at',
          type: 'timestamp',
          default: "now()"
        },
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('settings')
  }
}
