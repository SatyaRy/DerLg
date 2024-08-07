function updateMe(){
    if(!("Notification" in window)){
        console.log("the notification not support")
    }
    else if(Notification.permission ==="granted"){
        const notifyMe = new Notification("Hey")
    }
    Notification.requestPermission()
    .then((permission)=>{
        if(permission ==="granted"){
            const notify = new Notification("Hey")
        }
    })
}