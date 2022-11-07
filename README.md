<!--
N.B.: This README was automatically generated by https://github.com/YunoHost/apps/tree/master/tools/README-generator
It shall NOT be edited by hand.
-->

# Ring-MQTT Bridge for YunoHost

[![Integration level](https://dash.yunohost.org/integration/ring-mqtt.svg)](https://dash.yunohost.org/appci/app/ring-mqtt) ![Working status](https://ci-apps.yunohost.org/ci/badges/ring-mqtt.status.svg) ![Maintenance status](https://ci-apps.yunohost.org/ci/badges/ring-mqtt.maintain.svg)  
[![Install Ring-MQTT Bridge with YunoHost](https://install-app.yunohost.org/install-with-yunohost.svg)](https://install-app.yunohost.org/?app=ring-mqtt)

*[Lire ce readme en français.](./README_fr.md)*

> *This package allows you to install Ring-MQTT Bridge quickly and simply on a YunoHost server.
If you don't have YunoHost, please consult [the guide](https://yunohost.org/#/install) to learn how to install it.*

## Overview

The ring-mqtt project acts as a bridge between alarm, smart lighting and camera devices sold by Ring LLC and an MQTT broker thus allowing any automation tools that can leverage the open standards based MQTT protocol to monitor and control these devices.

### Features

See https://github.com/tsightler/ring-mqtt/wiki#supported-devices-and-features


**Shipped version:** 1.0~ynh1

## Screenshots

![Screenshot of Ring-MQTT Bridge](./doc/screenshots/ring-mqtt-logo.png)

## Disclaimers / important information

!!! After installing the first time you need to open the 55123 port and use the web ui to configure your Ring API credentials

```bash
$ sudo yunohost firewall allow Both 55123

# Go to http://yunohost.local:55123 and login, settings are saved automatically

$ sudo yunohost firewall disallow Both 55123
```

## Documentation and resources

* Official app website: <https://github.com/tsightler/ring-mqtt>
* Official admin documentation: <https://github.com/tsightler/ring-mqtt>
* Upstream app code repository: <https://github.com/tsightler/ring-mqtt>
* YunoHost documentation for this app: <https://yunohost.org/app_ring-mqtt>
* Report a bug: <https://github.com/YunoHost-Apps/ring-mqtt_ynh/issues>

## Developer info

Please send your pull request to the [testing branch](https://github.com/YunoHost-Apps/ring-mqtt_ynh/tree/testing).

To try the testing branch, please proceed like that.

``` bash
sudo yunohost app install https://github.com/YunoHost-Apps/ring-mqtt_ynh/tree/testing --debug
or
sudo yunohost app upgrade ring-mqtt -u https://github.com/YunoHost-Apps/ring-mqtt_ynh/tree/testing --debug
```

**More info regarding app packaging:** <https://yunohost.org/packaging_apps>