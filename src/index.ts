const button = document.getElementById('alertButton');

if (button) {
    button.addEventListener('click', onClickEventHandler);
}

function onClickEventHandler() {
    alert('Your typescript project is working.');
};
