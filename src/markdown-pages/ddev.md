---
slug: "/blog/ddev"
date: "2020-09-15"
title: "My first blog post"
---

With the onset of manging more websites, being able to debug and have them up and running quickly is my key priority.

For many years, I've been manageing my own local apache settings, managing php versions, and more recently managing multiple node versions too.

When managing a team within close vaciity changes to local infrastrucutre has been issue, you are in the same space and debugging local issues was easy.
COVID-19 and remote working cemented the desive I've had to ensure that provideing access to a repo and a developer being up and running within a minutes.

Local PHP, Node and apache versions just dont gut it.

Since working with some excellent Cloud engineers the dream of docker containers and spinnnig up evenirovoments is the desire.  However, I personally still struggle with native docker.

I've started playing with DDEV - this is hopefully a gateway drug into docker.
This is my ecperience into docker running locally.

Assumptions that you have brew installed - if not see here

- Enusure you have docker installed ```brew cask install docker``

- brew tap drud/ddev && brew install ddev

- enable NFS - this will serve web pages faster - [see here](https://ddev.readthedocs.io/en/stable/users/performance/)

- Createe a simple php exmaple
- mkdir junk
- cd junk   
- ddev config (follow prompts)
- touch index.php
- add <?php phpinfo();  to index.php
- ddev launch and it will open the entry point
- ddev describe | less

## Create a Drupal Version of DDEV
- ddev config --project-type=drupal9 --docroot=web --create-docroot; ddev composer create "drupal/recommended-project"
- ddev launch
- add a module to drupal ```ddev composer require drupal/token```
- need to add Drush as part of project dependencies ```ddev composer require "drush/drush"```
- enable module via drush - ```ddev exec drush en token```
