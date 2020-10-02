# Project Deployment
With an assumption all system require met, and the server is accessible for deployment.

## Manual deploy
Symlink strategy for an already existing project

Benefits:\
on deployment fail the previous version can rolled back within 1-2 minutes, with a few commands.

### Deployment schedule
--SANDIP--

### Steps to deploy

* [Preparation](/installation/deploy#preparation)
    * [Create Backups](/installation/deploy#create-backups)
    * [Create Folder](/installation/deploy#create-folder)
    * [Create symlink](/installation/deploy#)
    * [Create site config](/installation/deploy#)
* [File Deploy](/installation/deploy#)
    * [Upload or pull the files](/installation/deploy#)
    * [change file permissions](/installation/deploy#)
* [Database Changes](/installation/deploy#)
    * [Run Migrations](/installation/deploy#)
    * [Run Seeders](/installation/deploy#)
* [Enable Site](/installation/deploy#)
* [Validate Deployment](/installation/deploy#)


___


#### Preparation


##### Create Backups

* Database Backup
* Files backup _(optional)_


##### Create folder

create new site folder with the current timestamp. If this is the first time deploy, create a symlink points to that folder

structure:
```bash
/var/www/mdc/{timestamp_dir}/
/var/www/mdc/@active_dir/ # Points to the 'active' version of the site
```

Create timestamp directory:
```bash
mkdir /var/www/mdc/$(date +%Y-%m-%d_%H-%M)
```


##### Create Symlink _(optional)_
create active_dir Symlink:
```bash
ln -s /var/www/mdc/{timestamp_dir} /var/www/mdc/active_dir
```

Edit active_dir Symlink
```bash
ln -sfn /var/www/mdc/{timestamp_dir} /var/www/mdc/active_dir
```



##### Create Site Config _(optional)_

If this is the first time deploy, create the `.conf` file at `/etc/apache2/sites-available/` pointing to the @active_dir symlink

example:

```bash
nano /etc/apache2/sites-available/ecomduty.com.conf
```

in this example we put two virtual-host in the same file, but that can be in separate file:

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


___


#### Upload the files
* upload the files our pull the git
* change permissions


___

#### Database Changes

##### Run the Migrations
##### Run the Seeders

___

#### Enable Site


___


### Deployment validation

## Automated Deploy
