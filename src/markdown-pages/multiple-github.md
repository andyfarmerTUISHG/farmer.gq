# Managing multiple GitHub accounts on your local machine

Sometimes I have to manage multiple GitHub accounts on my local machine.

For Example:-

- multiple clients git hub repos
- switching back and forth between personal and company accounts

This is a little setup that works nicely.

## Use SSH instead of HTTPS

Setting up different accounts on your local machine,

1. We will use SSH keys
1. We will create unique keys (SSH keys) on our machine
1. In your home directory - In a folder called `~/.ssh`

### Generate SSH keys

This assumes you haven't set up any SSH keys yet.

```
ssh-keygen -t rsa
```

You will be prompted and asked to enter the folder/file name you want to go with. `Press ENTER to go with the default location and generate the ~/.ssh folder.`

You will be prompted and asked to enter the folder/file name you want to go with. `Press ENTER to go with the default location and generate the ~/.ssh folder.`

`Enter custom file name`

You now have a ~/.ssh folder, with the just created SSH key. Let's use this default key for our personal account.

Next up is creating a key for our work account. (You can repeat this process for as many keys as necessary) And for this we will have to specify the key with some flags. "-C" adds a comment/tag and -f specifies the name of the file we want to save the key to.

Go into your `~/.ssh`folder:
`cd ~/.ssh`
And create your next key with custom flags.
ssh-keygen -t rsa -C "email@githubworkemail.com" -f "id_rsa_workname"
To dive deeper, here is a list of the different flags you can add:

#### List of flags for SSH-keygen

To double-check that all of your keys are there, type:
`ls ~/.ssh`

#### Create a config to manage multiple keys

Now that we have created our keys, we need a configuration file that knows which key to use when we access a repo of one of our GitHub accounts.

For this inside our `~/.ssh` folder, we create and open a config file.
`touch ~/.ssh/config && code ~/.ssh/config`
In here we define our different accounts:

```
#### personal account

Host github.com
HostName github.com
User git
IdentityFile ~/.ssh/id_rsa

#### work account 1

Host github.com-workname
HostName github.com
User git
IdentityFile ~/.ssh/id_rsa_workname
Two things are important to note here:
```

The host, which we will need to remember later when we get our SSH links from GitHub.

`Host github.com-workname`
and the identity file, to make sure it points to the correct SSH key that we created before.
`IdentityFile ~/.ssh/id_rsa_workname`
Register our ssh-agent
Now to keep track of our different SSH keys and their configurations, there is a service called "ssh-agent". It is essentially the key manager for SSH.

For our purposes, we need to know 3 different commands.

```bash
ssh-add -D // removes all currently registered ssh keys from the ssh-agent
ssh-add -l // lists all currently in the ssh-agent registered ssh keys
ssh-add ~/.ssh/id_rsa // adds the specified key to the ssh-agent
```

If you haven't configured any keys previously your ssh-agent has most likely not registered any keys, but let's be completely sure and run:

```
ssh-add -D // removes all currently registered ssh keys from the ssh-agent
```

Next up is registering our keys with their ids:

```
ssh-add ~/.ssh/id_rsa && ssh-add ~/.ssh/id_rsa_workname
```

Now we need to register in GitHub.

### Add the SSH keys to your GitHub accounts

There are two steps to this. First, copy the correct key and second, add the key in your dashboard on GitHub.

Copying the correct key.
`pbcopy < ~/.ssh/id_rsa.pub`
This will copy your public key to your clipboard

Add the key in your dashboard at https://github.com/settings/keys.

GitHub add a SSH key

Login into your work GitHub account and repeat this process with your work SSH key.

_Important to note!_
The reason why your computer knows which SSH key to use, is because we defined the URL in our config file.

This means that for our work repositories, when we clone a repo from the account, like so:

Choose SSH link in GitHub

We have to change the URL from:

git@github.com:workname/repo.git ⇒ git@github.com-workname:workname/repo.git

The same URL we have previously defined in our ~/.ssh/config file.
**Host github.com-workname // HERE**
HostName github.com
User git
IdentityFile ~/.ssh/id_rsa_workname
With this, you can now clone your repositories and get going! Back to coding, I'd say!
