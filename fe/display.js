const socket = io.connect('http://localhost:5000')

socket.on('displayComment', (comment) => {
    addComment(comment)
})

function addComment(comment) {
    const container = document.getElementsByClassName('container')
    block = `<h3>${comment}</h3>`
    container[0].innerHTML += block
}
