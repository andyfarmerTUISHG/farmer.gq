---
slug: "/blog/git_upstream"
title: "GIT Tip: Git Upstream Alias"
date: "2020-07-04"
tags: "tip,git"
---

When working with new local branches on your Git repo, pushing those changes remotely I was forever seeing

```bash
 fatal: The current branch new-feature has no upstream branch.
  To push the current branch and set the remote as upstream, use

      git push --set-upstream origin new-feature
```

I've always struggled to remember the above git push command, so set up the following alias so I can stay within the terminal.

```bash
git config --global alias.upstream '!git push -u origin HEAD'
```

Running `git upstream` will

1. Push the branch to remote origin
1. Set the local branch to track the remote branch so that future git push and git pulls will automatically happen against the remote
