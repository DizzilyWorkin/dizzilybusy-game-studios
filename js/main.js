(() => {
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const isOpen = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!isOpen));
      menuButton.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
      nav.classList.toggle("open", !isOpen);
    });
    nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation");
    }));
  }

  document.querySelectorAll("[data-year]").forEach(el => el.textContent = new Date().getFullYear());

  const progress = document.querySelector(".scroll-progress span");
  const updateProgress = () => {
    if (!progress) return;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
  };
  window.addEventListener("scroll", updateProgress, { passive: true });
  updateProgress();

  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach(item => observer.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add("visible"));
  }

  const email = window.DIZZILYBUSY_CONFIG?.contactEmail || "your-email@example.com";
  document.querySelectorAll("[data-contact-email]").forEach(el => {
    el.textContent = email === "your-email@example.com" ? "Add your email in js/config.js" : email;
  });

  const form = document.querySelector("#contact-form");
  if (form) {
    form.addEventListener("submit", event => {
      event.preventDefault();
      if (email === "your-email@example.com") {
        document.querySelector("#form-note").textContent = "Almost ready! Add your real email address in js/config.js first, then this form will work.";
        return;
      }
      const data = new FormData(form);
      const subject = encodeURIComponent(data.get("subject"));
      const body = encodeURIComponent(
        `Name: ${data.get("name")}\nReply to: ${data.get("email")}\n\n${data.get("message")}`
      );
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
      document.querySelector("#form-note").textContent = "Your email app should open with the message ready to send. Thanks for reaching out!";
    });
  }
})();
