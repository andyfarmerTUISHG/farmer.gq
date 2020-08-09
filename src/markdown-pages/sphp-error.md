---
slug: "/blog/sphp-erro"
title: "SPHP & Mac Getting out of date"
date: "2020-07-09"
tags: "php,brew"
---

# Garrrrrghhh...... dyld: Library not loaded: /usr/local/opt/icu4c/lib/libicui18n.63.dylib

One of the problems of being a Polygot developer is that some of your porjects will conflict with your system when you least expect.

I suppose this should push me towards developing in containers in VSCode https://code.visualstudio.com/docs/remote/containers

There is nothing worse, wanting to start a new project to find that whilst doing something else your previous projects have collapsed into an error:-

```bash
dyld: Library not loaded: /usr/local/opt/icu4c/lib/libicui18n.63.dylib
  Referenced from: /usr/local/bin/php
  Reason: image not found
/usr/local/bin/sphp: line 168: 15798 Abort trap: 6           php -v
```

Now, I'm sure there are better ways forward and all boils back down to using containers to run your local development - but for having the time and headspace to delve into changing my working practice. After 20yrs plus of shapping my development environment the leap into localised Docker feels quite a big ask when I'm trying to experiment - that is a story for future me.

If you ever experience the above problem - this is what I found to work for me.

```bash
brew upgrade
```

```bash
brew cleanup
```

## Resources

https://stackoverflow.com/questions/53828891/dyld-library-not-loaded-usr-local-opt-icu4c-lib-libicui18n-62-dylib-error-run
