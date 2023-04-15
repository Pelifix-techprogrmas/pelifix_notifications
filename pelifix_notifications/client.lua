function StartNotifyNui(DATA)
    if DATA.title == nil then DATA.title = "" end
    SendNUIMessage({
        createNew = true,
        data = DATA
    })
    if DATA.sound then
        TriggerEvent('InteractSound_CL:PlayOnOne', 'sound', 0.2)
    end
end


RegisterNetEvent('pelifix_notifications:StartNotifyNui', StartNotifyNui)

RegisterCommand('notify', function(source, args, rawCommand)
    exports["pelifix_notifications"]:StartNotifyNui({ title = 'Error', message = 'This is a Message', type = 'error', sound = true })
end)
