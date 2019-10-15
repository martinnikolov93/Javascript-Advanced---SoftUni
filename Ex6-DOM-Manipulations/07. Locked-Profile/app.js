function lockedProfile() {
    let buttonsCollection = document.getElementsByTagName('button');

    function showOrHideUser(isLocked, userHiddenElements , userButton){
        if (isLocked) {
            if (userButton.textContent === 'Show more') {
                userHiddenElements.style.display = 'block';
                userButton.textContent = 'Hide it';
            } else {
                userHiddenElements.style.display = 'none';
                userButton.textContent = 'Show more';
            }
        }
    }

    let user1HiddenElements = document.getElementById('user1HiddenFields');
    let user1Button = buttonsCollection[0];
    user1Button.addEventListener('click', function () {
        let user1LockedCollection = document.getElementsByName('user1Locked');
        let user1IsUnlocked = user1LockedCollection[1].checked;
        showOrHideUser(user1IsUnlocked, user1HiddenElements, user1Button);
    });

    let user2HiddenElements = document.getElementById('user2HiddenFields');
    let user2Button = buttonsCollection[1];
    user2Button.addEventListener('click', function () {
        let user2LockedCollection = document.getElementsByName('user2Locked');
        let user2IsUnlocked = user2LockedCollection[1].checked;
        showOrHideUser(user2IsUnlocked, user2HiddenElements, user2Button);
    });

    let user3HiddenElements = document.getElementById('user3HiddenFields');
    let user3Button = buttonsCollection[2];
    user3Button.addEventListener('click', function () {
        let user3LockedCollection = document.getElementsByName('user3Locked');
        let user3IsUnlocked = user3LockedCollection[1].checked;
        showOrHideUser(user3IsUnlocked, user3HiddenElements, user3Button);
    });
}