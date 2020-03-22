let message = 'Just learn it!';

setMessage('Good job!');
sendMessage("Anna");

function sendMessage(name) {
    const sender = 'Gromcode'

    console.log(`${name}, ${message} Your ${sender}`);
}

function setMessage(text) {
    message = text;
}



