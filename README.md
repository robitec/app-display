# Display App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

- `yarn start`
- `yarn build`

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

- `yarn eject` ¡Warning!

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

## Screenshot

![screenshot](https://user-images.githubusercontent.com/14354821/118971890-3a44df80-b970-11eb-8f6a-304269c9024b.png)

### Deployment


**Rotate Display**
Preferences Config or;
```
lcd_rotate=2
display_rotate=2
```

**Disable Cursor** `/etc/lightdm/lightdm.conf`
```
xserver-command = X -nocursor
```

### Steps to create system user service


Script: `/home/pi/bmauri/app.sh`

```
#!/usr/bin/bash

chromium-browser --kiosk --enable-auto-reload --incognito --app="http://SERVER_IP:PORT"
```
- chmod +x app.sh

User Service: `.config/systemd/user/appdisplay.service`
```
[Unit]
Description=Open App Display

[Service]
ExecStart=/home/pi/bmauri/app.sh

[Install]
WantedBy=multi-user.target

```
Enable Service

```
systemctl --user daemon-reload
systemctl --user status appdisplay.service
systemctl --user enable appdisplay.service
systemctl --user start appdisplay.service
```