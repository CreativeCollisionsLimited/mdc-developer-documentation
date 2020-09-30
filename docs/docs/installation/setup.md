
## System requrements


### Database
MySql 5 or newer


### Apache<Badge type="success">2.4</Badge> Webserver

_Version: 2.4_

**Required Modules:**
* rewrite



### PHP <Badge type="success">7.2</Badge>

_Version: 7.2  or newer_

<Note type="warning">

Our project currently not compatible with php 7.4 or higher!

</Note>

**Required PHP libraries:**
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


dotenv plugin: https://github.com/vlucas/phpdotenv


```bash
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

# Database
DB_DSN = 'mysql:host=localhost;dbname=mdc'
DB_USERNAME = 'mdc'
DB_PASSWORD = ''

# Mail
#MAIL_TRANSPORT_HOST = ''
#MAIL_TRANSPORT_PORT = '465'
#MAIL_TRANSPORT_USERNAME = ''
#MAIL_TRANSPORT_PASSWORD = ''




# Public Links:
FACEBOOK_URL = 'https://www.facebook.com/MyPostLocal/'
TWITTER_URL = 'https://twitter.com/MyPostLocal'
LINKEDIN_URL = '#'
YOUTUBE_URL = 'https://www.youtube.com/channel/UCxKKKQGKTyL0fEm-RwzsHZA?view_as=subscriber'

API_TOKEN_EXPIRE = 2592000 #3600 * 24 * 30 (30 DAYS)



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
