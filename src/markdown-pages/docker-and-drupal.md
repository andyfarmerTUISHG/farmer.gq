---
slug: "/blog/docker-and-drupal"
title: "Using Docker & Drupal"
date: "2020-08-31"
---

Drupal Docker environment setup

1. Ensure you have docker installed
1. create a folder to get you started
1. `docker pull mysql:5.6`
1. Start my sql container

```bash
docker run -d \
--name="drupal-mysql" \
-e MYSQL_ROOT_PASSWORD=drupalroot \
-e MYSQL_DATABASE=drupal6 \
-e MYSQL_USER=drupal \
-e MYSQL_PASSWORD=drupal6pass \
mysql:5.6
```

1. Pull Apache Image - `docker pull nimmis/apache-php5`
1. Grab a version drupal - proper old skool
   version 6 for giggles :D 1. Grabthe tar file `wget https://ftp.drupal.org/files/projects/drupal-6.38.tar.gz` 1. Unpack `tar -xzf drupal-6.38.tar.gz` 1. Test it exists in your current folder `if test -d ~/drupal-6.38; then echo “It exists”; fi`
1. Run the Two together

```bash
docker run -d  \
-p 10080:80 \
-v /Users/afarmer/Documents/TuiSites/Personal/docker-4-drupal/drupal-6.38:/var/www/html \
--name="drupal-app" \
--link="drupal-mysql" \
nimmis/apache-php5
```

An explanation of what’s between run and nimmis/apache-php5:

- -d — Daemonize, run in background.
- -p 10080:80 — Bind host port 10080 to container port 80.
- -v ~/drupal-6.38:/var/www/html — Bind host directory to container directory.
- — name="drupal-app" — Name the container instance for convenience.
- --link="drupal-mysql" — Link to the MySQL container so Drupal can communicate with the database.
