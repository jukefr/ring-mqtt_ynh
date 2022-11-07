!!! After installing the first time you need to open the 55123 port and use the web ui to configure your Ring API credentials

```bash
$ sudo yunohost firewall allow Both 55123

# Go to http://yunohost.local:55123 and login, settings are saved automatically

$ sudo yunohost firewall disallow Both 55123
```
