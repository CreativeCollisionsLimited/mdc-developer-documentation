# Deploy with docker

## Requirements
- Installed Docker or docker-desktop
- Git

> Optional:
> - PHP 7.3+ for windows
> - Composer for windows




## Get the Repository
```
git clone git@github.com:CreativeCollisionsLimited/MyDutyPaid.git
```


## Local Domains:
Add local domains by editing local `hosts` file
>Note: make sure when you edit the host file, you have elevated rights like sudo or administrator mode, otherwise you  wil not be able to save the file.

Windows:
```bash
C:\Windows\System32\drivers\etc
```
Linux:
```bash
/etc/hosts
```

Add the Following lines to the hosts file
```
  127.0.0.1 mdc.loc
  127.0.0.1 api.mdc.loc
```

## Create environment related files

Copy the `.env.example` into the project root folder with `.env` name.
Modify the file as you need.
> Note: Make sure you filled the 'COOKIE_VALIDATION_KEY' & the Mail related fields.

IF you want to run PHPUnit test on the instance you also need to copy the `phpunit.xml.example`
and place it under the root folder with the name of `phpunit.xml`
> Note: if you don't want to run the experimental testes you can take out those cases from your local version


## Dependencies

If you are using windows, composer dependencies take a very long time to install inside the container.
You can pre-install the dependencies if you download a php executable and install "composer for windows".

With this you should be able to easily install all dependencies by executing the following command in a command line _(for example: `git bash`)_

```
composer install --ignore-platform-reqs
```

## Build the project cluster

To build the cluster all you need is run the followings commands in your command line:
```bash
docker-compose build
```

## Run the project:
From terminal / command line run the following to start the instance:
```
   docker-compose up -d
```
> Note: the `-d` means you want to run it in the background as a daemon.

To run commands inside the container use the docker interactive exec:
```
docker exec -it mdc-app /bin/bash
```

