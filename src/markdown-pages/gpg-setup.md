---
slug: "/blog/gpg-setup"
title: "Getting GPG Setup"
date: "2020-07-15"
tags: "git,gpg"
---

# Setup GPG For Local Signed Commits

So adding signed and verifed commits to project - yes I'm biased and this is mac orientated

## Setup a gpg key

1. Download [GPG Suite](https://gpgtools.org) - this will help manage your keys
1. Create a key in GPG Suite to associate with Git - make sure this is based on the same email
1. Publiscise the key - it will make life easier
1. Export so you can add with ease to GITHUB

## Configure your local git

1. run `gpg --list-secret-keys --keyid-format LONG`
1. Determine the signingkey (91E73xxxxxx4A041) - this is the value just after the key type (rsa4096)
1. Tell Git to use the key globally `git config --global user.signingkey 91E73xxxxxx4A041`
1. This should add this to your git config

## Let GitHub know about your key

1. Log into you GitHub Profle
1. Go to SSH & GPG Keys
1. Add new key from your previously export

## Make commits locally and push

1. You should then be able to make commits and push
1. Use `git commit -S` to ensure that you are signing your commits
1. Your commits should then show as verified in GitHub
