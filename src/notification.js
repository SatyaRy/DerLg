function updateMe(){
    if(!("notification" in window)){
        console.log("the notificatio not support")
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