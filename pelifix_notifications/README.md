# Pelifix Notifications - Reworked By Pelifix - Made On esx_notify - Inspiration from skeexsNotify
# Original Script: esx_notify https://github.com/esx-framework/esx_core/tree/main/%5Bcore%5D/esx_notify
# skeexsNotify Made By: Skeexs https://github.com/Skeexs/skeexsNotify
# Rework of esx_notify by: Pelifix
# Interact Sounds: https://github.com/plunkettscott/interact-sound


-IN USE-

# CLIENT SIDE:
exports["pelifix_notifications"]:StartNotifyNui({ title = 'Your Title', message = 'Your Messeage', type = 'Your Type', sound = true })

# SERVER SIDE:
TriggerClientEvent('pelifix_notifications:StartNotifyNui', src, { title = 'Your Title', message = 'Your Messeage', type = 'Your Type', sound = true })

-DOCS-

Script Install: 
To install, simply take the script, drag n' drop it to your scripts folder, and extract it. Then start it in your server.cfg with ensure pelifix_notifications
To use it in a sharp, simply copy the code above (Remember to choose the right side) Paste it and change it.

Title: Here you can write a simple titel to your notification. 
Message: Here you can write the notification.
Type: Here you need to choose a notification. You can choose between (success, error, info)
Sound: Here you can choose if you want a sound on the notify, if false then there is no sound. If right then there is a sound.

Sound Install:

To install the notify sound, you simply install interact-sound to your scripts folder (https://github.com/plunkettscott/interact-sound) Then take the ogg file from pelifix_notifications and drag 'n drop into the client/html/sounds folder. And then you are good to go.

-SCREENS-
https://media.discordapp.net/attachments/1091663426520105040/1096790733521952869/image.png
https://media.discordapp.net/attachments/1091663426520105040/1096790733769425070/image.png
https://media.discordapp.net/attachments/1091663426520105040/1096790734037852291/image.png
https://media.discordapp.net/attachments/1091663426520105040/1096790777805410314/image.png