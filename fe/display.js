const socket = io.connect('http://localhost:5000')

socket.on('displayComment', (comment) => {
    addComment(comment)
})

function addComment(comment) {
    const container = document.getElementsByClassName('inner-comment-container')
    block = `<div class='display-each-comment'><h3>${comment}</h3></div>`
    container[0].innerHTML += block
}


function setTopic() {
    const inputTopic = document.getElementById('input-topic')
    const topicName = document.getElementById('topic-name')
    topicName.innerHTML = inputTopic.value
    clearInputTopic()
}

function clearInputTopic() {
    const inputTopic = document.getElementById('input-topic')
    inputTopic.value = ''
}

function clearTopic() {
    const topicName = document.getElementById('topic-name')
    topicName.innerHTML = ''
}

function clearComment() {
    const innerCommentContainer = document.getElementsByClassName('inner-comment-container')[0]
    innerCommentContainer.innerHTML = ''
}

const saveBtn = document.getElementById('save-btn')
saveBtn.addEventListener('click', setTopic)

const clearBtn = document.getElementById('clear-btn')
clearBtn.addEventListener('click', clearTopic)

const clearCommentBtn = document.getElementById('clear-comment-btn')
clearCommentBtn.addEventListener('click', clearComment)