$(document).ready(function() {
  $(".course__button").click(function() {
    $(this).each(function() {
      Swal.fire(
        'Selamat, kelas berhasil dibuka!',
        'Klik ok untuk memulai belajar.',
        'success'
      )
    })
  })
});