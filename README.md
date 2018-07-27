[![NPM](https://nodei.co/npm/git_aliases.png)](https://nodei.co/npm/git_aliases/)

# git_aliases
Create aliases for git commands:

```
al ~> "config --get-regexp ^alias\."
co ~> checkout
cb ~> "checkout -b"
ca ~> "checkout -a"
br ~> branch
ba ~> "branch -a"
ci ~> commit
st ~> "status -s"
ft ~> fetch
pl ~> pull
ps ~> push
ad ~> "add ."
cm ~> "commit -m"
in ~> init
lg ~> "log --pretty='> %Cred%h %Creset| %Cgreen"%s"%Creset | %Cblue%an%Creset - %ar' -10"
la ~> "log --oneline --all --graph"
rv ~> "remote -v"
df ~> diff
```

Access "[output](/output)" folder for windows, mac and linux executables.

or use npm

`npm i -g git_aliases`
