function notify(message) {
    let notificationDiv = document.getElementById('notification');
    notificationDiv.textContent = message;
    notificationDiv.style.display = 'block';

    function hideNotificationDiv (){
        notificationDiv.style.display = 'none';
    }

    setTimeout(hideNotificationDiv, 2000);
}