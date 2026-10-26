```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Professional WordPress Developer Portfolio specializing in responsive websites, WooCommerce, ACF and CPT.">
    <title>WordPress Developer | Portfolio</title>

    <link rel="icon" href="favicon.svg" type="image/svg+xml">
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <header>
        <nav class="navbar">
            <a href="#home" class="logo">WP<span>Developer</span></a>

            <button class="menu-toggle" id="menu-toggle"
                aria-label="Toggle navigation" aria-expanded="false">
                ☰
            </button>

            <ul class="nav-links" id="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="home" class="hero">
            <div class="hero-content">
                <p class="subtitle">HELLO, I'M A</p>
                <h1>WordPress <span>Developer</span></h1>

                <p>
                    I build modern, responsive and user-friendly websites
                    for businesses and online stores using WordPress,
                    Elementor and WooCommerce.
                </p>

                <div class="hero-buttons">
                    <a href="#projects" class="btn">View My Work</a>
                    <a href="#contact" class="btn btn-outline">Contact Me</a>
                </div>
            </div>

            <div class="hero-image">
                <img src="images/portrait.jpg"
                     alt="WordPress Developer portrait">
            </div>
        </section>

        <section id="about" class="section">
            <p class="subtitle">WHO I AM</p>
            <h2>About Me</h2>

            <p>
                I'm a WordPress Developer specializing in business websites,
                WooCommerce e-commerce stores and custom WordPress solutions.
                I focus on clean design, responsive layouts, performance
                and easy content management.
            </p>

            <p>
                I also work with Advanced Custom Fields (ACF) and Custom
                Post Types (CPT) to create flexible and manageable websites
                tailored to project requirements.
            </p>
        </section>

        <section id="skills" class="section">
            <p class="subtitle">WHAT I DO</p>
            <h2>My Skills</h2>

            <div class="card-grid">
                <article class="card">
                    <h3>WordPress</h3>
                    <p>Custom websites and content management solutions.</p>
                </article>

                <article class="card">
                    <h3>Elementor</h3>
                    <p>Responsive page layouts and modern website designs.</p>
                </article>

                <article class="card">
                    <h3>WooCommerce</h3>
                    <p>Online stores, product pages and shop layouts.</p>
                </article>

                <article class="card">
                    <h3>ACF & CPT</h3>
                    <p>Custom fields and structured dynamic content.</p>
                </article>

                <article class="card">
                    <h3>HTML & CSS</h3>
                    <p>Website structure, styling and responsive design.</p>
                </article>

                <article class="card">
                    <h3>JavaScript</h3>
                    <p>Interactive elements and frontend functionality.</p>
                </article>
            </div>
        </section>

        <section id="projects" class="section">
            <p class="subtitle">MY RECENT WORK</p>
            <h2>Featured Projects</h2>

            <div class="card-grid">
                <article class="card project-card">
                    <img src="images/project-1.jpg"
                         alt="Business website project">
                    <h3>Business Website</h3>
                    <p>A modern and responsive business website.</p>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        View Project
                    </a>
                </article>

                <article class="card project-card">
                    <img src="images/project-2.jpg"
                         alt="E-commerce website project">
                    <h3>WooCommerce Store</h3>
                    <p>An online store with product and shop pages.</p>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        View Project
                    </a>
                </article>

                <article class="card project-card">
                    <img src="images/project-3.jpg"
                         alt="Portfolio website project">
                    <h3>Portfolio Website</h3>
                    <p>A clean portfolio showcasing skills and projects.</p>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        View Project
                    </a>
                </article>
            </div>
        </section>

        <section id="contact" class="section">
            <p class="subtitle">LET'S WORK TOGETHER</p>
            <h2>Contact Me</h2>

            <p>
                Have a project in mind? Send me a message to discuss
                how I can help you build your website.
            </p>

            <form id="contact-form">
                <label for="name">Your Name</label>
                <input type="text" id="name" name="name"
                       placeholder="Enter your name" required>

                <label for="email">Your Email</label>
                <input type="email" id="email" name="email"
                       placeholder="Enter your email" required>

                <label for="message">Your Message</label>
                <textarea id="message" name="message" rows="5"
                          placeholder="Write your message" required></textarea>

                <button type="submit" class="btn">Send Message</button>
                <p id="form-status" role="status" aria-live="polite"></p>
            </form>

            <div class="social-links">
                <a href="https://www.linkedin.com/" target="_blank"
                   rel="noopener noreferrer">LinkedIn</a>
                <a href="https://www.whatsapp.com/" target="_blank"
                   rel="noopener noreferrer">WhatsApp</a>
                <a href="mailto:your-email@example.com">Email Me</a>
            </div>
        </section>
    </main>

    <footer>
        <p>
            &copy; <span id="year"></span> WordPress Developer.
            All rights reserved.
        </p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
```
