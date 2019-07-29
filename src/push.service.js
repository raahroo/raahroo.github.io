import firebase from 'firebase';

export const initializeFirebase = () => {
  firebase.initializeApp({
    apiKey: "AIzaSyCOUlPTEZ3VmuD8W3ga9i8FV__4isb8mJ0",
    messagingSenderId: "234496902621",
  });
}

export const askForPermissioToReceiveNotifications = async () => {
    try {
        const messaging = firebase.messaging();
        await messaging.requestPermission();
        const token = await messaging.getToken();
        console.log('token do usuário:', token);
        
        return token;
    } catch (error) {
        console.error(error);
    }
}