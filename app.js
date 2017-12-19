console.log('You can contact me at bunth667@gmail.com or 954.707.9653.');

const config = {
    apiKey: "AIzaSyCEQxDmBR_7r8YdvWN7ealcXvTJeTa282Q",
    authDomain: "teemakwebsite.firebaseapp.com",
    databaseURL: "https://teemakwebsite.firebaseio.com",
    projectId: "teemakwebsite",
    storageBucket: "",
    messagingSenderId: "400579984725"
};

firebase.initializeApp(config);

const messagesRef = firebase.database().ref('messages');

document.getElementById('contact-form').addEventListener('submit', submitForm);

function getInputVal(id) {
    return document.getElementById(id).value;
}

function submitForm(event) {
    event.preventDefault();

    let name = getInputVal('name');
    let message = getInputVal('message');
    let response = document.getElementById('response');
    
    saveMessage(name, message);
    response.innerHTML = 'Got your message!';
}

function saveMessage(name, message) {
    let newMessageRef = messagesRef.push();
    newMessageRef.set({
        name,
        message
    });
}
