import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateMessages1619022270560 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'messages',
      columns: [
        {
          name: 'message_id',
          type: 'uuid',
          isPrimary: true
        },
        {
          name: 'admin_id',
          type: 'uuid',
          isNullable: true
        },
        {
          name: 'text',
          type: 'varchar',
          isNullable: false
        },
        {
          name: 'fk_messages_user_id',
          type: 'uuid',
          isNullable: true
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
      ], foreignKeys: [{
        name: 'fk_messages_user_id',
        referencedTableName: 'users',
        referencedColumnNames: ['user_id'],
        columnNames: ['fk_messages_user_id'],
        onUpdate: 'SET NULL',
        onDelete: 'SET NULL'
      }]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('messages')
  }
}
