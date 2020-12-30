# Cron commands

This is an extention for yii to streemline the cron commands installation.


## Features

- [X] Install cron jobs commands to crontab
- [X] Reinstall / overwrite settings
- [X] Reset Cron table
- [X] Preview executable code
- [ ] outsourced cronjobs
- [ ] selective remove of existing task from the crontab.


## Commands explained

`cron/helper` Displays all command ready to install

`cron/install` Inject all commands to the crontab

`cron/reinstall`Reset and install the crontab / use it for update

`cron/reset-crontab` removes all items from the crontab, `equal to crontab -r`



### Installation

```bash
cron/install
```



### register new cronjob:

To add a new job to the installation list you need to edit the `getCommands()` function in the  `console\controllers\cronController.php` file.
Simply extend or modify the array.
the timing follows the cron job standard timing, and there is a useful website to calculate your timings: https://crontab.guru/

```php
		$commands = [
			[
				'name' => 'cds_api',
				'timing' => '*/1 * * * *',
				'command' => 'cds-api/run'
			],
			[
				'name' => 'notification_job',
				'timing' => '*/1 * * * *',
				'command' => 'notification-cron-job/index'
			],
			[
				'name' => 'reconciliation_job',
				'timing' => '*/1 * * * *',
				'command' => 'reconciliation-cron-job/index'
			],
		];

```



### Update existing cronjobs:
if you need to change the timing or apply an update just simply run the following command.
```bash
cron/reinstall
```

<Note type="warning">

The command will remove all existing lines in your current crontab and installing the new ones from the `getCommands()` function

</Note>

