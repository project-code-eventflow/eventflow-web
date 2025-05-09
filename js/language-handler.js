class LanguageHandler {
  constructor() {
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get("lang");
    this.currentLang = urlLang || localStorage.getItem("language") || "tr";
    this.translations = { tr, en, de, it, ru }; // Tüm dilleri ekle
    this.rtlLanguages = ["ar"]; // Sağdan sola yazılan diller
    this.init();
  }

  init() {
    this.setLanguage(this.currentLang);

    document.querySelectorAll("[data-lang]").forEach((item) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        const lang = e.currentTarget.dataset.lang;
        this.setLanguage(lang);
      });
    });
  }

  setLanguage(lang) {
    this.currentLang = lang;
    localStorage.setItem("language", lang);

    // RTL desteği için HTML dir attribute'u ayarla
    if (this.rtlLanguages.includes(lang)) {
      document.documentElement.setAttribute("dir", "rtl");
      document.body.classList.add("rtl");
    } else {
      document.documentElement.setAttribute("dir", "ltr");
      document.body.classList.remove("rtl");
    }

    this.updateContent();
    this.updateURL(lang);
    this.updateLanguageButton(lang);
  }

  updateContent() {
    const t = this.translations[this.currentLang];

    // Navbar
    document.querySelector('[href="#hero"]').textContent = t.nav.home;
    document.querySelector('[href="#benefits"]').textContent = t.nav.features;
    document.querySelector('[href="#statistics"]').textContent =
      t.nav.statistics;
    document.querySelector('[href="#how-it-works"]').textContent =
      t.nav.howItWorks;
    document.querySelector('[href="#faq"]').textContent = t.nav.faq;
    document.querySelector('[href="#documentation"]').textContent =
      t.nav.documentation;
    document.querySelector('[href="#contact"]').textContent = t.nav.contact;
    document.querySelector('[href="#download"]').textContent = t.nav.download;

    // Hero Section
    const heroSection = document.querySelector("#hero");
    if (heroSection) {
      const h2 = heroSection.querySelector("h2");
      const p = heroSection.querySelector(".banner_text > p");
      const qrText = heroSection.querySelector(".qrcode p");

      if (h2) h2.innerHTML = t.hero.subtitle;
      if (p) p.textContent = t.hero.description;
      if (qrText) qrText.textContent = t.hero.qrText;
    }

    // Benefits Section
    const benefitsSection = document.querySelector("#benefits");
    if (benefitsSection) {
      const badge = benefitsSection.querySelector(".title_badge");
      const title = benefitsSection.querySelector(".section_title h2");
      const boxes = benefitsSection.querySelectorAll(".unique_box");

      if (badge) badge.textContent = t.benefits.badge;
      if (title) title.textContent = t.benefits.title;

      boxes.forEach((box, index) => {
        const h3 = box.querySelector("h3");
        const p = box.querySelector("p");
        if (h3 && t.benefits.features[index]) {
          h3.textContent = t.benefits.features[index].title;
        }
        if (p && t.benefits.features[index]) {
          p.textContent = t.benefits.features[index].description;
        }
      });
    }

    // Statistics Section
    const statisticsSection = document.querySelector("#statistics");
    if (statisticsSection) {
      const badge = statisticsSection.querySelector(".title_badge");
      const title = statisticsSection.querySelector(".section_title h2");
      const description = statisticsSection.querySelector(
        ".row > .col-lg-4:last-child > p"
      );
      const downloadButton =
        statisticsSection.querySelector(".btn.puprple_btn");

      if (badge) badge.textContent = t.statistics.badge;
      if (title) title.innerHTML = t.statistics.title;
      if (description) description.textContent = t.statistics.description;
      if (downloadButton)
        downloadButton.textContent = t.statistics.downloadButton;

      // İstatistik etiketleri
      const stats = statisticsSection.querySelectorAll(".app_statstic li");
      if (stats.length >= 4) {
        stats[0].querySelector("p:last-child").textContent =
          t.statistics.stats.universities;
        stats[1].querySelector("p:last-child").textContent =
          t.statistics.stats.clubs;
        stats[2].querySelector("p:last-child").textContent =
          t.statistics.stats.users;
        stats[3].querySelector("p:last-child").textContent =
          t.statistics.stats.events;
      }
    }

    // How It Works Section
    const howItWorksSection = document.querySelector("#how-it-works");
    if (howItWorksSection) {
      const badge = howItWorksSection.querySelector(".title_badge");
      const title = howItWorksSection.querySelector(".section_title h2");
      const ctaButton = howItWorksSection.querySelector(".btn.puprple_btn");

      if (badge) badge.textContent = t.howItWorks.badge;
      if (title) title.textContent = t.howItWorks.title;
      if (ctaButton) ctaButton.textContent = t.howItWorks.cta;

      const steps = howItWorksSection.querySelectorAll(".steps_block");
      steps.forEach((step, index) => {
        const h3 = step.querySelector("h3");
        const p = step.querySelector("p");
        if (h3 && t.howItWorks.steps[index]) {
          h3.textContent = t.howItWorks.steps[index].title;
        }
        if (p && t.howItWorks.steps[index]) {
          p.textContent = t.howItWorks.steps[index].description;
        }
      });
    }

    // FAQ Section
    const faqSection = document.querySelector("#faq");
    if (faqSection) {
      const badge = faqSection.querySelector(".title_badge");
      const title = faqSection.querySelector(".section_title h2");

      if (badge) badge.textContent = t.faq.badge;
      if (title) title.innerHTML = t.faq.title;

      const faqItems = faqSection.querySelectorAll(".card");
      faqItems.forEach((item, index) => {
        const questionButton = item.querySelector("button");
        const answer = item.querySelector(".card-body");

        if (questionButton && t.faq.items[index]) {
          // Soru metnini güncelle, ikonları koru
          const icons = questionButton.querySelector(".icons");
          questionButton.innerHTML = t.faq.items[index].question;
          if (icons) questionButton.appendChild(icons);
        }

        if (answer && t.faq.items[index]) {
          answer.textContent = t.faq.items[index].answer;
        }
      });
    }

    // Clubs Section
    const clubsSection = document.querySelector("#clubs");
    if (clubsSection) {
      const badge = clubsSection.querySelector(".title_badge");
      const title = clubsSection.querySelector(".section_title h2");

      if (badge) badge.textContent = t.clubs.badge;
      if (title) title.innerHTML = t.clubs.title;
    }

    // Documentation Section
    const documentationSection = document.querySelector("#documentation");
    if (documentationSection) {
      const badge = documentationSection.querySelector(".title_badge");
      const title = documentationSection.querySelector(".section_title h2");

      if (badge) badge.textContent = t.documentation.badge;
      if (title) title.innerHTML = t.documentation.title;

      const posts = documentationSection.querySelectorAll(".blog_post");
      posts.forEach((post, index) => {
        const h3 = post.querySelector("h3 a");
        const p = post.querySelector("p");
        const tag = post.querySelector(".tag");
        const infoItems = post.querySelectorAll(".blog_info li");

        if (h3 && t.documentation.posts[index]) {
          h3.textContent = t.documentation.posts[index].title;
        }
        if (p && t.documentation.posts[index]) {
          p.textContent = t.documentation.posts[index].description;
        }
        if (tag && t.documentation.posts[index]) {
          tag.textContent = t.documentation.posts[index].tag;
        }
        if (infoItems.length && t.documentation.posts[index].info) {
          infoItems.forEach((item, i) => {
            if (t.documentation.posts[index].info[i]) {
              item.textContent = t.documentation.posts[index].info[i];
            }
          });
        }
      });
    }

    // Contact Section
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      const badge = contactSection.querySelector(".title_badge");
      const title = contactSection.querySelector(".section_title h2");
      const description = contactSection.querySelector(".section_title p");

      if (badge) badge.textContent = t.contact.badge;
      if (title) title.innerHTML = t.contact.title;
      if (description) description.textContent = t.contact.description;

      const contactItems = contactSection.querySelectorAll(
        ".contact_listing li"
      );
      if (contactItems.length >= 3) {
        contactItems[0].querySelector(".lable").textContent =
          t.contact.emailLabel;
        contactItems[0].querySelector("a").textContent = t.contact.email;

        contactItems[1].querySelector(".lable").textContent =
          t.contact.whatsappLabel;
        contactItems[1].querySelector("a").textContent = t.contact.phone;

        contactItems[2].querySelector(".lable").textContent =
          t.contact.instagramLabel;
        contactItems[2].querySelector("a").textContent =
          t.contact.instagramText;
      }
    }

    // Club Registration Form Section
    const clubRegistrationSection = document.querySelector(".contact_form");
    if (clubRegistrationSection) {
      const badge = clubRegistrationSection.querySelector(".title_badge");
      const title = clubRegistrationSection.querySelector(".section_title h2");
      const description =
        clubRegistrationSection.querySelector(".section_title p");
      const checkboxLabel = clubRegistrationSection.querySelector(
        ".coustome_checkbox label"
      );
      const submitButton =
        clubRegistrationSection.querySelector(".btn.puprple_btn");

      // Update form field placeholders
      const formFields =
        clubRegistrationSection.querySelectorAll(".form-control");
      if (formFields.length >= 7 && t.clubRegistration.formFields) {
        formFields[0].placeholder = t.clubRegistration.formFields.fullName;
        formFields[1].placeholder = t.clubRegistration.formFields.email;
        formFields[2].placeholder = t.clubRegistration.formFields.university;
        formFields[3].placeholder = t.clubRegistration.formFields.clubName;
        formFields[4].placeholder = t.clubRegistration.formFields.whatsapp;
        formFields[5].placeholder = t.clubRegistration.formFields.role;
        formFields[6].placeholder = t.clubRegistration.formFields.message;
      }

      if (badge) badge.textContent = t.clubRegistration.badge;
      if (title) title.textContent = t.clubRegistration.title;
      if (description) description.textContent = t.clubRegistration.description;
      if (submitButton)
        submitButton.textContent = t.clubRegistration.submitButton;

      // Checkbox etiketini güncelle
      if (checkboxLabel) {
        const checkbox = checkboxLabel.querySelector('input[type="checkbox"]');
        const checkmark = checkboxLabel.querySelector(".checkmark");
        checkboxLabel.innerHTML = "";
        if (checkbox) checkboxLabel.appendChild(checkbox);
        if (checkmark) checkboxLabel.appendChild(checkmark);
        checkboxLabel.appendChild(
          document.createTextNode(t.clubRegistration.checkboxText)
        );
      }
    }

    // Success Modal (Club Registration)
    const successModal = document.querySelector("#successModal");
    if (successModal) {
      const modalTitle = successModal.querySelector(".modal-title");
      const modalBody = successModal.querySelector(".modal-body p");
      const okButton = successModal.querySelector(".modal-footer .btn");

      if (modalTitle)
        modalTitle.textContent = t.clubRegistration.successModal.title;
      if (modalBody)
        modalBody.textContent = t.clubRegistration.successModal.message;
      if (okButton)
        okButton.textContent = t.clubRegistration.successModal.okButton;
    }

    // Download Section
    const downloadSection = document.querySelector("#download");
    if (downloadSection) {
      const badge = downloadSection.querySelector(".title_badge");
      const title = downloadSection.querySelector(".section_title h2");
      const description = downloadSection.querySelector(".section_title p");

      if (badge) badge.textContent = t.download.badge;
      if (title) title.textContent = t.download.title;
      if (description) description.textContent = t.download.description;

      // App Store butonları için alt text
      const appButtons = downloadSection.querySelectorAll(".app_btn li a img");
      if (appButtons.length >= 2) {
        appButtons[0].alt = t.download.googlePlayAlt;
        appButtons[1].alt = t.download.appStoreAlt;
      }
    }

    // Footer Section
    const footer = document.querySelector("footer");
    if (footer) {
      const newsletterTitle = footer.querySelector(".news_letter h3");
      const newsletterDescription = footer.querySelector(
        ".news_letter p:first-of-type"
      );
      const newsletterNote = footer.querySelector(".news_letter .note");
      const contactInfo = footer.querySelectorAll(".contact_info li a");
      const downloadTitle = footer.querySelector(".download_side h3");
      const copyrightText = footer.querySelector(".copy_text p");
      const developedByText = footer.querySelector(".design_by p");

      if (newsletterTitle)
        newsletterTitle.textContent = t.footer.newsletterTitle;
      if (newsletterDescription)
        newsletterDescription.textContent = t.footer.newsletterDescription;
      if (newsletterNote) newsletterNote.textContent = t.footer.newsletterNote;

      if (contactInfo.length >= 2) {
        contactInfo[0].textContent = t.footer.contactEmail;
        contactInfo[1].textContent = t.footer.contactPhone;
      }

      if (downloadTitle) downloadTitle.textContent = t.download.title;
      if (copyrightText) copyrightText.textContent = t.footer.rightsReserved;

      if (developedByText) {
        const link = developedByText.querySelector("a");
        const linkText = link ? link.outerHTML : "";
        developedByText.innerHTML = t.footer.developedBy + " " + linkText;
        if (link) {
          link.textContent = t.footer.developedByLinkText;
        }
      }

      // Footer App Store butonları için alt text
      const footerAppButtons = footer.querySelectorAll(".app_btn li a img");
      if (footerAppButtons.length >= 2) {
        footerAppButtons[0].alt = t.download.googlePlayAlt;
        footerAppButtons[1].alt = t.download.appStoreAlt;
      }
    }
  }

  updateURL(lang) {
    const currentURL = window.location.href.split("?")[0].split("#")[0];
    const hash = window.location.hash;
    const newURL = currentURL + (lang === "tr" ? "" : "?lang=" + lang) + hash;
    history.pushState({}, "", newURL);
  }

  updateLanguageButton(lang) {
    const button = document.querySelector("#languageDropdown");

    const names = {
      tr: "TR",
      en: "EN",
      de: "DE",
      it: "IT",
      ru: "RU",
      ar: "AR",
    };

    button.textContent = names[lang];
  }
}

// Sayfa yüklendiğinde başlat
document.addEventListener("DOMContentLoaded", () => {
  window.languageHandler = new LanguageHandler();
});
