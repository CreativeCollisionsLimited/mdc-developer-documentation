# Migrations


Migrations are a built in tool in the yii2 framework. This feature is allowing us to keep track and replicate all of the database changes in different environments.

<Note>

All structural and schema changes need to be implemented and executed as a migration

[More details about Yii2 migrations](https://www.yiiframework.com/doc/guide/2.0/en/db-migrations)

</Note>

To use it navigate yourself to the project root folder and type in:
```bash
php yii migrate
```


The migrate command manages application migrations, with the following sub commands:

`migrate/create`
Creates a new migration.

`migrate/down`
Downgrades the application by reverting old migrations.

`migrate/fresh`
Drops all tables and related constraints. Starts the migration from the beginning.

`migrate/history`
Displays the migration history.

`migrate/mark`
Modifies the migration history to the specified version.

`migrate/new`
Displays the un-applied new migrations.

`migrate/redo`
Redoes the last few migrations.

`migrate/to`
Upgrades or downgrades till the specified version.

`migrate/up` <Badge>default</Badge>
Upgrades the application by applying new migrations.
