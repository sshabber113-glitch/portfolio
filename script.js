document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    });

    navMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open menu");
      });
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", event => {
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach(item => observer.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add("visible"));
  }

  const year = document.getElementById("current-year");
  if (year) year.textContent = new Date().getFullYear();

  const toast = document.getElementById("toast");
  let toastTimer;
  const showToast = message => {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 3200);
  };

  document.querySelectorAll(".placeholder-link").forEach(link => {
    link.addEventListener("click", () => {
      showToast(`"${link.dataset.project}" is a placeholder. Add the real project URL when available.`);
    });
  });

  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  if (form) {
    const fields = [...form.querySelectorAll("input, textarea")];

    const setError = (field, message) => {
      field.classList.toggle("invalid", Boolean(message));
      const error = field.parentElement.querySelector(".error");
      if (error) error.textContent = message;
    };

    const validateField = field => {
      const value = field.value.trim();

      if (!value) {
        setError(field, "This field is required.");
        return false;
      }

      if (field.type === "email") {
        const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        if (!validEmail) {
          setError(field, "Enter a valid email address.");
          return false;
        }
      }

      setError(field, "");
      return true;
    };

    fields.forEach(field => {
      field.addEventListener("blur", () => validateField(field));
      field.addEventListener("input", () => {
        if (field.classList.contains("invalid")) validateField(field);
      });
    });

    form.addEventListener("submit", event => {
      event.preventDefault();

      const valid = fields.map(validateField).every(Boolean);

      if (!valid) {
        status.className = "form-status error-status";
        status.textContent = "Please correct the highlighted fields.";
        return;
      }

      /*
        IMPORTANT:
        This demo intentionally does NOT show a fake success message.
        Connect the form to a real backend/form service here.

        Example production flow:
        1. Replace the submit handler with fetch() to your backend endpoint.
        2. Wait for a successful response.
        3. Only then display a success message.
      */

      status.className = "form-status error-status";
      status.textContent = "The form is validated, but no submission service is connected yet.";
    });
  }
});
