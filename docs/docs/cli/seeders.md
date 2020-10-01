# Seeders

**Database seeding is the initial seeding of a database with data.**

Seeding a database is a process in which an initial set of data is provided to a database when it is being installed.
It is especially useful when we want to populate the database with data we want to develop in future.
This is often an automated process that is executed upon the initial setup of an application.
The data can be dummy data or necessary data such as an initial administrator account.

<Note type="warning">

This is not a YII2 framework standard tool, so the is no official yii2 documentation on this topic.

</Note>

<Note type="tip">

Seeders are not equal with factories or fixtures.

</Note>


## Features

- [X] Auto loading end executing seeders with commands
- [X] Seed All seeder file
- [X] Seed only selected table
- [X] Create a template for a seeder file
- [ ] Rollback seeders
- [ ] Revers Seed
- [ ] Track seeded files in db
- [ ] Automatic folder creation
- [ ] Seed table as fresh (truncate & seed the table)
- [ ] Check table before seed


## Commands explained

`seeder/all` Runs all the seeder files in the `/console/seeders/` folder

`seeder/create` Creates a template file form a database table name

`seeder/seed` Runs only the selected seeder file



## How To
### Create a new seeder file
To create a new seeder file run the command `yii migrate seeder/create` following with the table name what you want to seed
<Note type="tip">
The command can accept table names in snake case like my_table_name or encapsulated string format like `"my table name"`
</Note>

Example:
```bash
php yii seeder/create table_name
```


This will create a new template file inside the `/console/seeders/` folder with the table name in camelCase followed by Seeder.php
with the following code:
```php
<?php

class tableNameSeeder {

    public function seed() {

        $table = '{{%table_name}}';

        $columns = [];

        $rows = [
                    []
                ];


        return compact('table', $table, 'columns', $columns, 'rows', $rows);
    }

}
```

From here, fill out the `columns` and the `rows` you want to include in the initial data and save the file.



### Run Specific Seeder

To run seeder on a specific table, use the `seeders/seed` command followed by the table name what you want to seed

For example if you want to seed the test_table:
```bash
php yii seeder/seed test_table
```

### Run All Seeder
To run all seeder in the folder you  can simply use the command `seeder/all`

Example:
```bash
php yii seeder/all
```