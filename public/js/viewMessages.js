console.log("got here")

const getMessages = () => {
    const passcode = document.querySelector("#passcode")
    console.log("button pressed", passcode.value)

    const messagesRef = firebase.database().ref();
    console.log(messagesRef)
    messagesRef.on('value', (snapshot) => {
        const data = snapshot.val()
        console.log(data)
        for (let key in data) {
            console.log(key, data[key])
            if (key === passcode.value) {
                console.log("match found")
                const message = document.querySelector("#message")
                message.innerHTML = data[key]
            }
        }
    })
}
