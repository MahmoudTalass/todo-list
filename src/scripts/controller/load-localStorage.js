function loadLocalStorage() {
    if (localStorage.getItem("user") === null) return false;
}

export default loadLocalStorage;