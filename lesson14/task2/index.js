export default const createMessenger = () => {
    let message = 'Just learn it';
    const sender = 'Gromcode';

    function sendMessage(name) {

        console.log(`${name}, ${message}! Your ${sender}`);
    }

    function setMessage(text) {
        message = text;
    }

    function setSender(senderText) {
        sender = senderText;
    }

    return {
        sendMessage,
        setMessage,
        setSender
    }
}