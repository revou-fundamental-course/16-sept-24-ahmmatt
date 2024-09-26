/*ini scripts*/
function replaceName() {
    let name = prompt("Please enter your name", "User");
    document.getElementById("name").innerHTML = name;
}

document.getElementById('tombol').addEventListener("click", function() {
    replaceName();
})


document.getElementById('messages-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form reload halaman

    // Ambil nilai dari input form
    const name = document.getElementById('full-name').value;
    const birthDate = document.getElementById('birth-date').value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value || 'Tidak dipilih';
    const message = document.getElementById('messages').value;

    // Tampilkan hasil di div sebelah kanan
    document.getElementById('sender-full-name').textContent = name;
    document.getElementById('sender-birth-date').textContent = birthDate;
    document.getElementById('sender-gender').textContent = gender;
    document.getElementById('sender-messages').textContent = message;
});

/*function validateForm() {
    const nama = document.forms['nama-anda']['nama-input'].value

    if(nama == ''){
        document.getElementById("error-name").innerHTML = "Tidak Boleh Kosong!"
        return false
    }
    setName (nama);

    return false;
}

function setName(name) {
    document.getElementById("name").innerHTML = name;
    document.getElementById("error-name").innerHTML = "";

    return false;
}

function validateMessages(){
    const name = document.forms["messages-form"]["full-name"].value;
    const birthDate = document.forms["messages-form"]["birth-date"].value;
    const gender = document.forms["messages-form"]["gender"].value;
    const messages = document.forms["messages-form"]["messages"].value;

    if (name == "" || birthDate == "" ||  gender == "" || messages == ""){
        alert("Tidak boleh kosong!");
        return false;
    }
    setSenderUI(name, birthDate, gender, messages)
    return false;
}

function setSenderUI(name, birthDate, gender, messages) {
    document.getElementById("sender-full-name").innerHTML = name;
    document.getElementById("sender-birth-date").innerHTML = birthDate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-messages").innerHTML = messages;*/
}
/*function validateForm() {
    const name = document.forms["messages-form"]["full-name"].value;
    const birthDate = document.forms["messages-form"]["birth-date"].value;
    const gender = document.forms["messages-form"]["gender"].value;
    const messages = document.forms["messages-form"]["messages"].value;

    if (name == "" || birthDate == || gender == "" || messages == "") {
        alert("tidak boleh ada yang kosong");
        return false;
    }

    setSenderUI(name, birthDate, gender, messages);

    return false;*/
}



/*var myIndex = 0;
carousel();
function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlide");
    for (i= 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 2000);
}*/

// Toggle Class Active
const navbarNav = document.querySelector('.navbar-nav');
// ketika hamburger menu di klik
document.querySelector('#hamburger-menu') .onclick = () => {
    navbarNav.classList.toggle('active');
};
//menghilangkan nav
const hamburger = document.querySelector {'#hamburger'};
    
document.addEventListener{'click', function (e) {
    if (!hamburger.contains(e.target)) && !navbarNav.contains(e.target)) {
        navbarNav .classList. remote('active');
    }
});



var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlide");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[1].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}

/*const form = document.getElementById('messages-form');
const outputName = document.getElementById('output-name');
const outputBirthDate = document.getElementById('output-birth-date');
const outputGender = document.getElementById('output-gender');
const outputMessages = document.getElementById('output-messages');

// Tambahkan event listener pada submit form
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah halaman refresh

    // Ambil nilai dari form
    const name = document.getElementById('full-name').value;
    const birthDate = document.getElementById('birth-date').value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value || 'Tidak dipilih';
    const messages = document.getElementById('messages').value;

    // Tampilkan hasil pada kolom kanan
    outputName.textContent = name;
    outputBirthDate.textContent = birthDate;
    outputGender.textContent = gender;
    outputMessages.textContent = messages;
});*/