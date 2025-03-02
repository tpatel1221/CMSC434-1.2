function showPopup() {
    let popupElement = document.getElementById('popup');
    popupElement.style.display = "block"
}
function removePopup() {
    let popupElement = document.getElementById('popup');
    popupElement.style.display = "none"
}

function navigateTo(tab) {
    window.location.href = tab;
}