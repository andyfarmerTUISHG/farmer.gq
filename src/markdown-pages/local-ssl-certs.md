---
slug: "/blog/local-ssl-certs"
date: "2020-08-08"
title: "Self Signed SSL for Local Development"
---

In order to easy have your local environemnt server sites or applications of SSL I like to use [mkcert](https://github.com/FiloSottile/mkcert).

This is exactly what mkcert sets out to do.

To get it setup you will need mkcert and nss for Firefox CA trusts

1. Install

```bash
brew install mkcert
brew install nss
```

2. I like to hold a certificates in specific folder, I keep mine in hy home/Sites/mkcert directory
3.

```bash
# Create a new certificate
mkcert -key-file key.pem -cert-file cert.pem localhost
```

Then use the certificate in apache, or any of your server needs locally

Bew Apache Tweaks

- Enabled httd-ssl.conf
- change listen port from 8443 to 443
- Disabled SSLSessionCache
