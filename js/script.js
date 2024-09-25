/*ini scripts*/
function replaceName() {
    let name = prompt("Please enter your name", "User");
    document.getElementById("name").innerHTML = name;
}

document.getElementById('tombol').addEventListener("click", function() {
    replaceName();
})

const form = document.getElementById('messages-form');
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
});