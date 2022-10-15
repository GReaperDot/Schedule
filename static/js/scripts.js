function show_info() {
    for (let index = 0; index < 3; index++) {
        document.getElementsByClassName('gsDVDds')[index].style.display = "flex";
    }
}

function hide_info() {
    for (let index = 0; index < 3; index++) {
        document.getElementsByClassName('gsDVDds')[index].style.display = "none";
    }
}

function hide_btn() {
    for (let index = 0; index < 1; index++) {
        document.getElementsByClassName('gsDVDdss')[index].style.display = "none";
    }
}

function show_btn() {
    for (let index = 0; index < 1; index++) {
        document.getElementsByClassName('gsDVDdss')[index].style.display = "block";
    }
}