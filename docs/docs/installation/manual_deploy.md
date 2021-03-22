# Manual deployment
Symlink strategy for an already existing project
With an assumption all system require met, and the server is accessible for deployment.

Benefits:\
On deployment fail the previous version can rolled back within 1-2 minutes, with a few commands.

structure:
```bash
/var/www/mdc/{{timestamp_dir}}/
/var/www/mdc/@active_dir/ # Points to the 'active' version of the site
/var/www/mdc/environment  # the real enviroment file for `.env` smylink file inside the active folder
```

<note type="tip">

You can set the timestamp_dir variable in the browser's local storage, <br>just don't forget to reload the page :) <br>
Currently is set to: {{timestamp_dir}}<br>

In the Light blue box you will find the calculated command

</note>


## Deployment schedule
* Twice Weekly Deployments
	* Tuesday and Thursday 

## Summary

* Preparation
    * Create Backups
    * Create Folder
    * Create symlink folder
    * Create symlink environment file
    * Create site configuration file <Badge type="success">optional</Badge>
* File Deploy
    * Upload or pull the files
    * change file permissions
* Database Changes
    * Run Migrations
    * Run Seeders <Badge type="success">optional</Badge>
* Enable Site
* Validate Deployment



## Preparation


### Create Backups:

* Database Backup
* Files backup <Badge type="success">optional</Badge>


### Create folder

create new site folder with the current timestamp. If this is the first time deploy, create a symlink points to that folder

```bash
mkdir /var/www/mdc
mkdir /var/www/mdc/$(date +%Y-%m-%d_%H-%M)
```



### Create symlink folder

create `active_dir` Symlink:

```bash
ln -s /var/www/mdc/{{timestamp_dir}} /var/www/mdc/active_dir

```
<pre class="spec">
ln -s /var/www/mdc/{{timestamp_dir}} /var/www/mdc/active_dir
</pre>


or Edit `active_dir` Symlink
```bash
ln -sfn /var/www/mdc/{{timestamp_dir}} /var/www/mdc/active_dir
```
<pre class="spec">
ln -sfn /var/www/mdc/{{timestamp_dir}} /var/www/mdc/active_dir
</pre>


### Create symlink environment file
To get the environment file see the [setup](/installation/setup#enviroment-variables).

```bash
ln -s /var/www/mdc/environment.env /var/www/mdc/{{timestamp_dir}}/.env
```

<pre class="spec">
ln -s /var/www/mdc/environment.env /var/www/mdc/{{timestamp_dir}}/.env
</pre>




### Create Site Config <Badge type="success">optional</Badge>

If this is the first time deploy, create the `.conf` file at `/etc/apache2/sites-available/` pointing to the `@active_dir` symlink

example:

```bash
sudo nano /etc/apache2/sites-available/ecomduty.com.conf
```

in this example we put two virtual-host in the same file, but that can be in separate file

```html
<VirtualHost *:80>
    ServerName ecomduty.com
    ServerAlias www.ecomduty.com
    DocumentRoot "/var/www/mdc/active_dir/frontend/web/"


    ErrorLog ${APACHE_LOG_DIR}/mdc_web_error.log
    CustomLog ${APACHE_LOG_DIR}/mdc_web_access.log combined


    <Directory "/var/www/mdc/active_dir/frontend/web/">
        # use mod_rewrite for pretty URL support
        RewriteEngine on
        # If a directory or a file exists, use the request directly
        RewriteCond %{REQUEST_FILENAME} !-f
        RewriteCond %{REQUEST_FILENAME} !-d
        # Otherwise forward the request to index.php
        RewriteRule . index.php

        # use index.php as index file
        DirectoryIndex index.php

        # ...other settings...
        # Apache 2.4
        Require all granted



    </Directory>
</VirtualHost>

<VirtualHost *:80>
    ServerName api.ecomduty.com
    DocumentRoot "/var/www/mdc/active_dir/api/web/"


    ErrorLog ${APACHE_LOG_DIR}/mdc_api_error.log
    CustomLog ${APACHE_LOG_DIR}/mdc_api_access.log combined


    <Directory "/var/www/mdc/active_dir/api/web/">
        # use mod_rewrite for pretty URL support
        RewriteEngine on
        # If a directory or a file exists, use the request directly
        RewriteCond %{REQUEST_FILENAME} !-f
        RewriteCond %{REQUEST_FILENAME} !-d
        # Otherwise forward the request to index.php
        RewriteRule . index.php

        # use index.php as index file
        DirectoryIndex index.php

        # ...other settings...
        # Apache 2.4
        Require all granted

    </Directory>
</VirtualHost>

```

check the apache configuration with
```
apachectl configtest
```



## File Deploy
### Upload the files our pull the git

Upload the files and or copy them into the timestamped folder

OR

clone the project and checkout the correct branch
<note type="warning">
if you already have the symlink environment file, you need to delete it first, clone the repo then re-run the [symlink generation command](/installation/manual_deploy#create-symlink-environment-file).
</note>
```bash
cd /var/www/mdc/{{timestamp_dir}}
git init
git remote add origin https://github.com/nialldj/MyDutyPaid.git 
git pull origin development
```

<pre class="spec">
cd /var/www/mdc/{{timestamp_dir}}
git init
git remote add origin https://github.com/nialldj/MyDutyPaid.git 
git pull origin development
</pre>




### Change permissions


```bash
sudo chown -R www-data:www-data /var/www/mdc/{{timestamp_dir}}
sudo chmod -R 775 /var/www/mdc/{{timestamp_dir}}/
sudo chmod -R 777 /var/www/mdc/{{timestamp_dir}}/console/runtime
sudo chmod -R 777 /var/www/mdc/{{timestamp_dir}}/console/rbac

sudo chmod -R 777 /var/www/mdc/{{timestamp_dir}}/api/runtime
sudo chmod -R 777 /var/www/mdc/{{timestamp_dir}}/frontend/runtime
sudo chmod -R 777 /var/www/mdc/{{timestamp_dir}}/frontend/web/assets
sudo chmod -R 777 /var/www/mdc/{{timestamp_dir}}/frontend/web/media
```
<pre class="spec">
sudo chown -R www-data:www-data /var/www/mdc/{{timestamp_dir}}
sudo chmod -R 775 /var/www/mdc/{{timestamp_dir}}/
sudo chmod -R 777 /var/www/mdc/{{timestamp_dir}}/console/runtime
sudo chmod -R 777 /var/www/mdc/{{timestamp_dir}}/console/rbac
sudo chmod -R 777 /var/www/mdc/{{timestamp_dir}}/api/runtime
sudo chmod -R 777 /var/www/mdc/{{timestamp_dir}}/frontend/runtime
sudo chmod -R 777 /var/www/mdc/{{timestamp_dir}}/frontend/web/assets
sudo chmod -R 777 /var/www/mdc/{{timestamp_dir}}/frontend/web/media
</pre>


Or create a file like `yii2_permission_correction.sh` and copy paste the following:
```bash
#!/bin/bash

LOCATION="/var/www/mdc"
USER="www-data"
GROUP="www-data"
DEFAULT_PERMISSION="775"
SPECIAL_PERMISSION="777"

# Defaults
sudo chown -R ${USER}:${GROUP} ${LOCATION}
sudo chmod -R ${DEFAULT_PERMISSION} ${LOCATION}
# Api
sudo chmod -R ${SPECIAL_PERMISSION} ${LOCATION}/api/runtime
# Console
sudo chmod -R ${SPECIAL_PERMISSION} ${LOCATION}/console/runtime
sudo chmod -R ${SPECIAL_PERMISSION} ${LOCATION}/console/rbac

# Frontend
sudo chmod -R ${SPECIAL_PERMISSION} ${LOCATION}/frontend/runtime
sudo chmod -R ${SPECIAL_PERMISSION} ${LOCATION}/frontend/web/media
sudo chmod -R ${SPECIAL_PERMISSION} ${LOCATION}/frontend/web/assets
```

Give execution permission to the file
```bash
sudo chmod +x yii2_permission_correction.sh
```
Change the location to mach with your folder with the timestamp

```bash
nano yii2_permission_correction.sh
```

run the file: _(sudo permission needed)_
```bash
./yii2_permission_correction.sh
```

### Get dependencies

```bash
composer install
```
### Change folder permission after dependencies installation


```bash
sudo chmod -R 775 /var/www/mdc/{{timestamp_dir}}/vendor
```
<pre class="spec">
sudo chmod -R 775 /var/www/mdc/{{timestamp_dir}}/vendor
</pre>


### Run compilations????

-- Pietro --

* notification-cron-job? -- DO WE WANT TO RUN THIS? --
* asset/compress? -- is this working? and do we want to run this? --



## Database Changes

### Run the Migrations

Navigate your self to the project and inside the timestamped directory and execute the following command
```bash
php yii migrate
```
[- More information on migrations](/cli/migrations)


### Run the Seeders  <Badge type="success">optional</Badge>

If this is a First time deployment, you need to run the seeders.
the current system dont know what was already seeded, so you only want to run this file once.
in case of fail, you can re run the migration with a fresh param like `php yii migrate/fresh`

```bash
php yii seeder/all
```

[- More information on seeders](/cli/seeders)


### Run keyword generator
```bash
php yii keyworld-generator/all
```

### Update the Tax tables

```bash
php yii taric
```
[- More information on the Taric processor](/cli/taric_update_process)
> Alternatively you can skip this and inject the tables from an sql dump file





## Enable Site

For the first time you need to enable the site
```bash
sudo a2ensite ecomduty.com
```

To enable the new active vesion you need to edit the symlink to point to the new folder
```bash
ln -sfn /var/www/mdc/{{timestamp_dir}} /var/www/mdc/active_dir
```
<pre class="spec">
ln -sfn /var/www/mdc/{{timestamp_dir}} /var/www/mdc/active_dir
</pre>


reload the webserver
```bash
sudo service apache2 reload
```





## Deployment validation
Validation of the deployment is depending on the environment!

You can soft validate the website by checking it in the web browser, and try to create an account maybe and a parcel.

pages to validate for example:
* ecomduty.com
* api.ecomduty.com
* ecomduty.com/login
* ecomduty.com/admin

Run all of the integration, unit and system test.
<note type="warning">
Make sure no destructive test executed, like mass system injections and stress tests.
</note>

## Rollback

### rollback migrations
If in the failed deployment was any changes to the database you need to rollback the migrations with one step. (not one item)
navigate to the current active folder and run the migration rollback

```bash
php yii migrate/down

```

### Rollback to previous site
to activate the last working version you need to edit the symlink to point to the correct location and reload the webserver
```bash
ln -sfn /var/www/mdc/{previous_timestamp_dir} /var/www/mdc/active_dir
```

Reload the webserver
```bash
sudo service apache2 reload
```

### Remove failed deployment files

You can ether delete the the folder with the failed deployment or mark it by renaming it something meaningful for example: `failed_2020.01.01_20:18`.

### validate site
To validate the site, go thru the deployment validation
