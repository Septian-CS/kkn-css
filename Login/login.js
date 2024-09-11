document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const submitButton = document.querySelector('button[type="submit"]');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Mencegah submit default form

        const inputs = document.querySelectorAll('.form-control');
        let isValid = true;

        inputs.forEach((input) => {
            if (input.value.trim() === '') {
                isValid = false;
                input.classList.add('is-invalid'); // Menambahkan kelas Bootstrap untuk input tidak valid
                input.nextElementSibling?.remove(); // Hapus pesan error sebelumnya jika ada
                const error = document.createElement('div');
                error.className = 'invalid-feedback';
                error.textContent = 'Field ini harus diisi.';
                input.parentNode.appendChild(error);
            } else {
                input.classList.remove('is-invalid');
                input.nextElementSibling?.remove(); // Hapus pesan error jika input valid
            }
        });

        if (isValid) {
            // Jika validasi berhasil, lanjutkan ke halaman login
            window.location.href = 'daftar.html';
        } else {
            alert('Harap isi semua field sebelum mendaftar.');
        }
    });

    // Event listener untuk menghapus pesan error saat pengguna mulai mengetik
    document.querySelectorAll('.form-control').forEach((input) => {
        input.addEventListener('input', () => {
            input.classList.remove('is-invalid');
            input.nextElementSibling?.remove(); // Hapus pesan error saat pengguna mengetik
        });
    });
});
