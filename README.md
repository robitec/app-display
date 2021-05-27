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

### Steps to create the pm2 service


Script: `app.sh `

```
#!/usr/bin/bash

chromium-browser --kiosk --enable-auto-reload --incognito --app="http://SERVER_IP:PORT"
```


```
pm2 start app.sh
pm2 save
pm2 startup
sudo env PATH=$PATH:/usr/bin /usr/local/lib/node_modules/pm2/bin/pm2 startup systemd -u pi --hp /home/pi
pm2 save

```
