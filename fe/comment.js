const socket = io.connect('http://localhost:5000')

function addComment() {
    const inputComment = document.getElementById('input-comment')
    console.log(inputComment.value)
}