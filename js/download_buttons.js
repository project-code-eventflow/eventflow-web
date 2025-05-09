document.addEventListener("DOMContentLoaded", function () {
  // Tüm app indirme butonlarını seç
  const appDownloadButtons = document.querySelectorAll(".app_btn a");

  // Her butona tıklama olayı ekle
  appDownloadButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault(); // Normal bağlantı davranışını engelle

      // Coming Soon modalını göster
      $("#comingSoonModal").modal("show");
    });
  });
});

// Tüm indirme linkleri için
const downloadLinks = document.querySelectorAll(
  'a[href="#download"], a.puprple_btn[href="#download"]'
);

downloadLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    // Sayfa içinde #download bölümüne scroll yap
    document.querySelector("#download").scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

// Dil seçimine göre modal içeriğini değiştir
function updateComingSoonModal(lang) {
  const modalTitle = document.querySelector("#comingSoonModalLabel");
  const modalBody = document.querySelector("#comingSoonModal .modal-body p");
  const modalButton = document.querySelector(
    "#comingSoonModal .modal-footer button"
  );

  if (lang === "en") {
    modalTitle.textContent = "Coming Soon!";
    modalBody.textContent =
      "The Uniflow app will be available on Google Play Store and App Store soon. Stay tuned!";
    modalButton.textContent = "OK";
  } else if (lang === "tr") {
    modalTitle.textContent = "Çok Yakında!";
    modalBody.textContent =
      "The Uniflow uygulaması çok yakında Google Play Store ve App Store'da yerini alacak. Bizi takip etmeye devam edin!";
    modalButton.textContent = "Tamam";
  }
  // Diğer diller için benzer koşullar eklenebilir
}
