
## System requrements
The project is using LAMP stack
[how to setup a lamp stack on Ubuntu](https://www.digitalocean.com/community/tutorials/how-to-install-linux-apache-mysql-php-lamp-stack-ubuntu-18-04)


**Apache2**\
_Version: <Badge type="success">2.4</Badge>_

[How to setup an apache webserver](https://www.digitalocean.com/community/tutorials/how-to-install-the-apache-web-server-on-ubuntu-18-04)

Required Modules:
* rewrite

**MySQL**\
_Version: <Badge type="success">5.6 or newer</Badge>_

[How to setup and secure mysql](https://www.digitalocean.com/community/tutorials/how-to-install-mysql-on-ubuntu-18-04)



**PHP**\
_Version: <Badge type="success">7.2  or newer</Badge>_

<Note type="warning">
Our project currently not compatible with php 7.4 or higher!
</Note>


[How To Run Multiple PHP Versions on a server](https://www.digitalocean.com/community/tutorials/how-to-run-multiple-php-versions-on-one-server-using-apache-and-php-fpm-on-ubuntu-18-04)

Required PHP libraries:
* soap
* gd
* zip
* curl



## Setup the project

After you gained access to the the project's GitHub, just simply clone the project via SSH _(recommended)_ or HTTPS protocol.

example:
navigate your self in the new, empty project folder and run this code in the terminal:
```git
git clone git@github.com:nialldj/MyDutyPaid.git ./
```

if all system require met, follow the [deployment tutorial](/installation/deploy)



## Enviroment variables

To setup the project you need to use `.env` variables.

You need to create a `.env` file in the root of the project.
You can ether use the example bellow and fill out the fields or copy the `.env.example` file and change it's contents.

If you wish to follow the deployment process, make sure you saved the filled environment variables under `/var/www/mdc/environment.env`.


dotenv plugin: https://github.com/vlucas/phpdotenv


```markdown
#########################
## Application Variables

YII_ENV = 'dev'
YII_DEBUG = true

HTTP_PROTOCOL = 'http'

PUBLIC_URL = 'mdc.loc/'
PUBLIC_ABSOLUTE_URL = 'http://mdc.loc/'
API_URL = 'api.mdc.loc'
ABSOLUTE_URL = 'http://mdc.loc/'
IMAGES_URL = 'http://mdc.loc/images' # no need to add slash in the end

UPLOAD_FILE_PATH = 'media/'

SUPPORT_EMAIL = ''
ADMIN_EMAIL = ''

COOKIE_VALIDATION_KEY = ''

TIMEZONE = 'Europe/Dublin'
API_TOKEN_EXPIRE = 2592000 #3600 * 24 * 30 (30 DAYS)


# Database
DB_DSN = 'mysql:host=localhost;dbname=mdc'
DB_USERNAME = 'mdc'
DB_PASSWORD = ''


# Mail
MAIL_TRANSPORT_HOST = ''
MAIL_TRANSPORT_PORT = '465'
MAIL_TRANSPORT_USERNAME = ''
MAIL_TRANSPORT_PASSWORD = ''


# Public Links:
FACEBOOK_URL = 'https://www.facebook.com/MyPostLocal/'
TWITTER_URL = 'https://twitter.com/MyPostLocal'
LINKEDIN_URL = '#'
YOUTUBE_URL = 'https://www.youtube.com/channel/UCxKKKQGKTyL0fEm-RwzsHZA?view_as=subscriber'





####################
## Application Keys

# Stripe TEST KEYS
STRIPE_PUBLIC_KEY = 'pk_test_'
STRIPE_API_KEY = 'sk_test_'


# Facebook
# register your app here: https://developers.facebook.com/apps/
SOCIAL_FACEBOOK_ID = ''
SOCIAL_FACEBOOK_SECRET = ''


# Twitter
SOCIAL_TWITTER_KEY = ''
SOCIAL_TWITTER_SECRET = ''

# LinkedIn
SOCIAL_LINKEDIN_KEY = ''
SOCIAL_LINKEDIN_SECRET = ''

# Google
# register your app here: https://code.google.com/apis/console/
SOCIAL_GOOGLE_KEY = ''
SOCIAL_GOOGLE_SECRET = ''

RECAPTCHA_KEY = ''
RECAPTCHA_SECRET = ''

GOOGLE_MAPS_API_KEY = ''

GOOGLE_TAG_MANAGER_KEY = ''
GOOGLE_ANALYTICS_KEY = ''
GOOGLE_ANALYTICS_CREDENTIALS_FILE = ''

HUBSPOT_KEY = ''
HUBSPOT_COMPLETE_STORE_WORKFLOW = ''

# Twilio API
TWILIO_ACCOUNT_SID = ''
TWILIO_AUTH_TOKEN = ''
TWILIO_FROM_NUMBER = ''


# Big Huge Thesaurus API
THESAURUS_API_KEY = ''

#UPS API
UPS_API_URL = ''
UPS_API_KEY = ''

```
