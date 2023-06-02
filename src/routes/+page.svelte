<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Surendra Dev</title>

    <!--
    - favicon
  -->
    <link rel="shortcut icon" href="./my-avatar.png" type="image/x-icon" />

    <!--
    - custom css link
  -->
    <link rel="stylesheet" href="./style.css" />

    <!--
    - google font link
  -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap"
      rel="stylesheet"
    />
  </head>

  <body>
    <!--
    - #MAIN
  -->

    <main>
      <!--
      - #SIDEBAR
    -->

      <aside class="sidebar" data-sidebar>
        <div class="sidebar-info">
          <figure class="avatar-box">
            <img src="./my-avatar.png" alt="Surendra Kumar" width="80" />
          </figure>

          <div class="info-content">
            <h1 class="name" title="Surendra  Kumar M">Surendra Kumar M</h1>

            <p class="title">Mobile & Web developer</p>
          </div>

          <button class="info_more-btn" data-sidebar-btn>
            <span>Show Contacts</span>

            <ion-icon name="chevron-down" />
          </button>
        </div>

        <div class="sidebar-info_more">
          <div class="separator" />

          <ul class="contacts-list">
            <li class="contact-item">
              <div class="icon-box">
                <ion-icon name="mail-outline" />
              </div>

              <div class="contact-info">
                <p class="contact-title">Email</p>

                <a href="mailto:surendram.dev@gmail.com" class="contact-link"
                  >surendram.dev@gmail.com</a
                >
              </div>
            </li>

            <li class="contact-item">
              <div class="icon-box">
                <ion-icon name="phone-portrait-outline" />
              </div>

              <div class="contact-info">
                <p class="contact-title">Phone</p>

                <a href="tel:+919160086748" class="contact-link"
                  >+91 91600-86748</a
                >
              </div>
            </li>

            <li class="contact-item">
              <div class="icon-box">
                <ion-icon name="calendar-outline" />
              </div>

              <div class="contact-info">
                <p class="contact-title">Birthday</p>

                <time datetime="1982-06-23">April 22, 2002</time>
              </div>
            </li>

            <li class="contact-item">
              <div class="icon-box">
                <ion-icon name="location-outline" />
              </div>

              <div class="contact-info">
                <p class="contact-title">Location</p>

                <address>Andhra Pradesh, India</address>
              </div>
            </li>
          </ul>

          <div class="separator" />

          <ul class="social-list">
            <!-- <li class="social-item">
              <a href="#" class="social-link">
                <ion-icon name="logo-facebook" />
              </a>
            </li> -->

            <li class="social-item">
              <a
                href="mailto:surendram.dev@gmail.com"
                class="social-link"
              >
              <ion-icon name="mail-outline"></ion-icon>
              </a>
            </li>

            <li class="social-item">
              <a href="https://twitter.com/ANCIENTINSANE" class="social-link">
                <ion-icon name="logo-twitter" />
              </a>
            </li>

            <li class="social-item">
              <a
                href="https://www.instagram.com/surendram.dev/"
                class="social-link"
              >
                <ion-icon name="logo-instagram" />
              </a>
            </li>

            <li class="social-item">
              <a
                href="https://www.linkedin.com/in/ancientinsane/"
                class="social-link"
              >
                <ion-icon name="logo-linkedin" />
              </a>
            </li>

            <li class="social-item">
              <a
                href="https://github.com/ANCIENTINSANE/"
                class="social-link"
              >
              <ion-icon name="logo-github"></ion-icon>
              </a>
            </li>

            

          </ul>
        </div>
      </aside>

      <!--
      - #main-content
    -->

      <div class="main-content">
        <!--
        - #NAVBAR
      -->

        <nav class="navbar">
          <ul class="navbar-list">
            <li class="navbar-item">
              <button class="navbar-link active" data-nav-link>About</button>
            </li>

            <li class="navbar-item">
              <button class="navbar-link" data-nav-link>Resume</button>
            </li>

            <li class="navbar-item">
              <button class="navbar-link" data-nav-link>Portfolio</button>
            </li>

           

            <li class="navbar-item">
              <button class="navbar-link" data-nav-link>Contact</button>
            </li>
          </ul>
        </nav>

        <!--
        - #ABOUT
      -->

        <article class="about active" data-page="about">
          <header>
            <h2 class="h2 article-title">About me</h2>
          </header>

          <section class="about-text">
            <p>
              Hello and welcome to my portfolio! I am Surendra, a dynamic and multi-talented professional specializing in UI/UX design, Svelte Kit development, and Flutter app development. With a keen eye for design and a strong technical background, I am dedicated to creating exceptional digital experiences that captivate users and push boundaries.
            </p>

            <p>
              As a UI/UX designer, I have a deep understanding of user-centered design principles and strive to create interfaces that are not only visually appealing but also intuitive and seamless. I believe that the user experience is the heart and soul of any application, and my goal is to craft designs that make a lasting impact. From conducting user research and creating wireframes to prototyping and user testing, I am meticulous in my approach to ensure that every interaction is purposeful and engaging.
            </p>

            <p>In addition to my design expertise, I specialize in Svelte Kit development. With its simplicity and performance advantages, Svelte Kit has become my go-to framework for creating fast and efficient web applications. I have a strong command over HTML, CSS, and JavaScript, and I leverage the power of Svelte Kit to build responsive and scalable interfaces that deliver an outstanding user experience across various devices and platforms.</p>
          
            <p>Furthermore, my proficiency in Flutter development allows me to create beautiful and feature-rich mobile applications. Flutter's expressive UI toolkit and hot reload functionality enable me to rapidly iterate and refine designs, resulting in polished and visually striking apps. Whether it's building native iOS or Android applications or developing cross-platform solutions, I am well-versed in Flutter's capabilities and can bring your ideas to life with finesse.</p>
            
          </section>

          <!--
          - service
        -->

          <section class="service">
            <h3 class="h3 service-title font-bold">What i'm doing</h3>

            <ul class="service-list">
              <li class="service-item">
                <div class="service-icon-box">
                  <img
                    src="./icon-design.svg
                "
                    alt="design icon"
                    width="40"
                  />
                </div>

                <div class="service-content-box">
                  <h4 class="h4 service-item-title">Web design</h4>

                  <p class="service-item-text">
                    The most modern and high-quality design made at a
                    professional level.
                  </p>
                </div>
              </li>

              <li class="service-item">
                <div class="service-icon-box">
                  <img
                    src="./icon-dev.svg"
                    alt="Web development icon"
                    width="40"
                  />
                </div>

                <div class="service-content-box">
                  <h4 class="h4 service-item-title">Web development</h4>

                  <p class="service-item-text">
                    High-quality development of sites at the professional level.
                  </p>
                </div>
              </li>

              <li class="service-item">
                <div class="service-icon-box">
                  <img src="./icon-app.svg" alt="mobile app icon" width="40" />
                </div>

                <div class="service-content-box">
                  <h4 class="h4 service-item-title">Mobile apps</h4>

                  <p class="service-item-text">
                    Professional development of applications for iOS and
                    Android.
                  </p>
                </div>
              </li>

              <li class="service-item">
                <div class="service-icon-box">
                  <img src="./icon-photo.svg" alt="camera icon" width="40" />
                </div>

                <div class="service-content-box">
                  <h4 class="h4 service-item-title">Photography</h4>

                  <p class="service-item-text">
                    I make high-quality photos of any category at a professional
                    level.
                  </p>
                </div>
              </li>
            </ul>
          </section>

          <!--
          - testimonials
        -->

          <section class="testimonials">
            <h3 class="h3 testimonials-title font-bold">Testimonials</h3>

            <ul class="testimonials-list has-scrollbar">
              <li class="testimonials-item">
                <div class="content-card" data-testimonials-item>
                  <figure class="testimonials-avatar-box">
                    <img
                      src="./avatar-1.png"
                      alt="Ramakrishna Cherukuri"
                      width="60"
                      data-testimonials-avatar
                    />
                  </figure>

                  <h4
                    class="h4 testimonials-item-title"
                    data-testimonials-title
                  >
                    Ramakrishna Cherukuri
                  </h4>

                  <div class="testimonials-text" data-testimonials-text>
                    <p>
                      "I am extremely impressed with Surendra exceptional coding skills and attention to detail. They delivered high-quality work within the given timeframe, exceeding my expectations."
                    </p>
                  </div>
                </div>
              </li>

              <li class="testimonials-item">
                <div class="content-card" data-testimonials-item>
                  <figure class="testimonials-avatar-box">
                    <img
                      src="./avatar-2.png"
                      alt="Jessica miller"
                      width="60"
                      data-testimonials-avatar
                    />
                  </figure>

                  <h4
                    class="h4 testimonials-item-title"
                    data-testimonials-title
                  >
                    Tejaswini Karri
                  </h4>

                  <div class="testimonials-text" data-testimonials-text>
                    <p>
                      "Surendra's innovative thinking and problem-solving abilities have been instrumental in transforming our project into a seamless and efficient system. Their dedication and professionalism make them a valuable asset to any development team."
                    </p>
                  </div>
                </div>
              </li>

              <li class="testimonials-item">
                <div class="content-card" data-testimonials-item>
                  <figure class="testimonials-avatar-box">
                    <img
                      src="./avatar-3.png"
                      alt="Emily evans"
                      width="60"
                      data-testimonials-avatar
                    />
                  </figure>

                  <h4
                    class="h4 testimonials-item-title"
                    data-testimonials-title
                  >
                    Emily evans
                  </h4>

                  <div class="testimonials-text" data-testimonials-text>
                    <p>
                      Surendra is an exceptional designer who brings creativity and precision to every project. His attention to detail and innovative approach make him a true asset in the world of design.
                    </p>
                  </div>
                </div>
              </li>

              <li class="testimonials-item">
                <div class="content-card" data-testimonials-item>
                  <figure class="testimonials-avatar-box">
                    <img
                      src="./avatar-4.png"
                      alt="Henry william"
                      width="60"
                      data-testimonials-avatar
                    />
                  </figure>

                  <h4
                    class="h4 testimonials-item-title"
                    data-testimonials-title
                  >
                  Amit Singhania
                  </h4>

                  <div class="testimonials-text" data-testimonials-text>
                    <p>
                      Surendra is a talented app developer who consistently delivers high-quality and user-friendly applications. His technical expertise and commitment to excellence make him a valuable addition to any development team.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </section>

          <!--
          - testimonials modal
        -->

          <div class="modal-container" data-modal-container>
            <div class="overlay" data-overlay />

            <section class="testimonials-modal">
              <button class="modal-close-btn" data-modal-close-btn>
                <ion-icon name="close-outline" />
              </button>

              <div class="modal-img-wrapper">
                <figure class="modal-avatar-box">
                  <img
                    src="./avatar-1.png"
                    alt="Daniel lewis"
                    width="80"
                    data-modal-img
                  />
                </figure>

                <img src="./icon-quote.svg" alt="quote icon" />
              </div>

              <div class="modal-content">
                <h4 class="h3 modal-title" data-modal-title>Daniel lewis</h4>


                <div data-modal-text>
                  <p>
                    Richard was hired to create a corporate identity. We were
                    very pleased with the work done. She has a lot of experience
                    and is very concerned about the needs of client. Lorem ipsum
                    dolor sit amet, ullamcous cididt consectetur adipiscing
                    elit, seds do et eiusmod tempor incididunt ut laborels
                    dolore magnarels alia.
                  </p>
                </div>
              </div>
            </section>
          </div>

          <!--
          - clients
        -->

          <!-- <section class="clients">
            <h3 class="h3 clients-title">Clients</h3>

            <ul class="clients-list has-scrollbar">
              <li class="clients-item">
                <a href="#">
                  <img src="./logo-1-color.png" alt="client logo" />
                </a>
              </li>

              <li class="clients-item">
                <a href="#">
                  <img src="./logo-2-color.png" alt="client logo" />
                </a>
              </li>

              <li class="clients-item">
                <a href="#">
                  <img src="./logo-3-color.png" alt="client logo" />
                </a>
              </li>

              <li class="clients-item">
                <a href="#">
                  <img src="./logo-4-color.png" alt="client logo" />
                </a>
              </li>

              <li class="clients-item">
                <a href="#">
                  <img src="./logo-5-color.png" alt="client logo" />
                </a>
              </li>

              <li class="clients-item">
                <a href="#">
                  <img src="./logo-6-color.png" alt="client logo" />
                </a>
              </li>
            </ul>
          </section> -->
        </article>

        <!--
        - #RESUME
      -->

        <article class="resume" data-page="resume">
          <header>
            <h2 class="h2 article-title">Resume</h2>
          </header>

          <section class="timeline">
            <div class="title-wrapper">
              <div class="icon-box">
                <ion-icon name="book-outline" />
              </div>

              <h3 class="h3 font-bold">Education</h3>
            </div>

            <ol class="timeline-list">
              <li class="timeline-item">
                <h4 class="h4 timeline-item-title font-bold">
                  Abhyas The Global School
                </h4>

                <span>2012 — 2017</span>

                <p class="timeline-text ">
                  Attending Abhyas, The Global School was a transformative experience that broadened my horizons. The school's emphasis on global perspectives and cultural exchange allowed me to connect with students from diverse backgrounds, fostering a deep appreciation for diversity. The nurturing environment, coupled with innovative teaching methods, equipped me with the skills and mindset to thrive in an interconnected world.
                </p>
              </li>

              <li class="timeline-item font-bold">
                <h4 class="h4 timeline-item-title">Sri Gayatri Educational Institutions</h4>

                <span>2017 — 2019</span>

                <p class="timeline-text">
                  My time at Sri Gayatri Educational Institution  was a truly enriching experience. The college's dedicated faculty and comprehensive curriculum provided me with a strong foundation for higher education. The supportive and inclusive environment fostered my personal and academic growth, preparing me for future success.
                </p>
              </li>

              <li class="timeline-item">
                <h4 class="h4 timeline-item-title font-bold">
                  BITS Vizag
                </h4>

                <span>2019 — 2023</span>

                <p class="timeline-text">
                  My experience at BITS Vizag was truly transformative. The college's dynamic and interdisciplinary approach to education opened doors to new perspectives and opportunities. The vibrant campus community, along with exceptional faculty and resources, nurtured my personal and intellectual growth, shaping me into a well-rounded individual ready to make a positive impact in the world.
                </p>
              </li>
            </ol>
          </section>

          <section class="timeline">
            <div class="title-wrapper">
              <div class="icon-box">
                <ion-icon name="book-outline" />
              </div>

              <h3 class="h3 font-bold">Experience</h3>
            </div>

            <ol class="timeline-list">
              <li class="timeline-item">
                <h4 class="h4 timeline-item-title font-bold">Mobile Application Developer</h4>

                <span>2021 — Present</span>

                <p class="timeline-text">
                  Over the past few years, my journey in mobile app development has been a thrilling and ever-evolving experience. From mastering popular frameworks and languages to adapting to the latest design trends and user preferences, I have witnessed the constant evolution of the industry. The experience has not only honed my technical skills but also taught me the importance of user-centric design and seamless functionality, ultimately creating impactful and user-friendly mobile applications.
                </p>
              </li>

              <li class="timeline-item">
                <h4 class="h4 timeline-item-title font-bold">Web Developer</h4>

                <span>2018 — 2022</span>

                <p class="timeline-text">
                  Since 2018, my journey in web development has been a dynamic and transformative experience. From mastering HTML, CSS, and JavaScript to exploring modern frameworks and libraries, I have witnessed the rapid evolution of web technologies. With each project, I have gained valuable insights into creating responsive and visually appealing websites, while also prioritizing performance and user experience.
                </p>
              </li>

              <li class="timeline-item">
                <h4 class="h4 timeline-item-title font-bold">UI/UX Designer</h4>

                <span>2017-2021</span>

                <p class="timeline-text">
                  Over the years, my experience in UI/UX designing has been an exciting and rewarding journey. From understanding user needs and conducting thorough research to creating visually stunning and intuitive interfaces, I have honed my skills in crafting seamless user experiences. Embracing design thinking principles and staying updated with emerging trends have allowed me to consistently deliver designs that delight users and drive meaningful engagement.
                </p>
              </li>
            </ol>
          </section>

          <section class="skill">
            <h3 class="h3 skills-title font-bold">My skills</h3>

            <ul class="skills-list content-card">
              <li class="skills-item">
                <div class="title-wrapper">
                  <h5 class="h5">FLUTTER (Dart)</h5>
                  <data value="85">85%</data>
                </div>

                <div class="skill-progress-bg">
                  <div class="skill-progress-fill" style="width: 85%;" />
                </div>
              </li>

              <li class="skills-item">
                <div class="title-wrapper">
                  <h5 class="h5">UI/UX</h5>
                  <data value="95">95%</data>
                </div>

                <div class="skill-progress-bg">
                  <div class="skill-progress-fill" style="width: 95%;" />
                </div>
              </li>

              <li class="skills-item">
                <div class="title-wrapper">
                  <h5 class="h5">SVELTE</h5>
                  <data value="95">95%</data>
                </div>

                <div class="skill-progress-bg">
                  <div class="skill-progress-fill" style="width: 98%;" />
                </div>
              </li>

              <li class="skills-item">
                <div class="title-wrapper">
                  <h5 class="h5">JAVA SCRIPT</h5>
                  <data value="80">80%</data>
                </div>

                <div class="skill-progress-bg">
                  <div class="skill-progress-fill" style="width: 80%;" />
                </div>
              </li>

              <li class="skills-item">
                <div class="title-wrapper">
                  <h5 class="h5">PYTHON</h5>
                  <data value="70">70%</data>
                </div>

                <div class="skill-progress-bg">
                  <div class="skill-progress-fill" style="width: 75%;" />
                </div>
              </li>
            </ul>
          </section>

          
          <section class="timeline mt-5">
            <div class="title-wrapper">
              <div class="icon-box">
                <ion-icon name="book-outline" />
              </div>

              <h3 class="h3 font-bold">Awards & Achievements</h3>
            </div>

            <ol class="timeline-list">
              <li class="timeline-item">
                <h4 class="h4 timeline-item-title font-bold">Started Own Coding Services</h4>

                <span>2022</span>

                <p class="timeline-text">
                  KONKORDE, my coding services, offer innovative solutions tailored to your unique needs. With a passion for precision and efficiency, I specialize in developing robust software and applications that empower businesses to thrive in the digital realm. Experience the seamless synergy of cutting-edge technology and meticulous craftsmanship with KONKORDE.
                </p>
              </li>

              <li class="timeline-item font-bold">
                <h4 class="h4 timeline-item-title">Netball National Championship</h4>

                <span>2017</span>

                <p class="timeline-text">
                  Participating in the 2017 Netball National Championship was an exhilarating experience that showcased the highest level of talent and sportsmanship. The intense competition and camaraderie among teams created an electrifying atmosphere, fueling our determination to give our best on the court. The event served as a platform for personal growth, teamwork, and unforgettable memories that will forever be cherished.
                </p>
              </li>

              <li class="timeline-item">
                <h4 class="h4 timeline-item-title font-bold">National Open Karate Do Championship-Solo (Runner)</h4>

                <span>2014</span>

                <p class="timeline-text">
                  Participating in the 2014 National Open Karate Do Championship-Solo was a thrilling and rewarding experience. The intense training, discipline, and dedication paid off as I clinched the silver medal, showcasing my skill and determination. The event not only bolstered my confidence but also provided an opportunity to connect with fellow karate practitioners and learn from their expertise.
                </p>
              </li>
              <li class="timeline-item">
                <h4 class="h4 timeline-item-title font-bold">National Open Karate Do Championship-Team (Runner)</h4>

                <span>2014</span>

                <p class="timeline-text">
                  In addition to winning silver in the individual category, I also had the privilege of contributing to my team's success, securing another silver medal in the team event at the 2014 National Open Karate Do Championship. The camaraderie, synchronized movements, and collective effort demonstrated during the team competition were truly memorable and reinforced the power of unity and collaboration. The experience further solidified my passion for karate and the joy of achieving goals as a part of a dedicated team.
                </p>
              </li>
            </ol>
          </section>
        </article>

        <!--
        - #PORTFOLIO
      -->

        <article class="portfolio" data-page="portfolio">
          <header>
            <h2 class="h2 article-title">Portfolio</h2>
          </header>

          <section class="projects">
            <ul class="filter-list">
              <li class="filter-item">
                <button class="active" data-filter-btn>All</button>
              </li>

              <li class="filter-item">
                <button data-filter-btn>Web design</button>
              </li>

              <li class="filter-item">
                <button data-filter-btn>Applications</button>
              </li>

              <li class="filter-item">
                <button data-filter-btn>Web development</button>
              </li>
            </ul>

            <div class="filter-select-box">
              <button class="filter-select" data-select>
                <div class="select-value" data-selecct-value>
                  Select category
                </div>

                <div class="select-icon">
                  <ion-icon name="chevron-down" />
                </div>
              </button>

              <ul class="select-list">
                <li class="select-item">
                  <button data-select-item>All</button>
                </li>

                <li class="select-item">
                  <button data-select-item>Web design</button>
                </li>

                <li class="select-item">
                  <button data-select-item>Applications</button>
                </li>

                <li class="select-item">
                  <button data-select-item>Web development</button>
                </li>
              </ul>
            </div>

            <ul class="project-list">
              <li
                class="project-item active"
                data-filter-item
                data-category="web development"
              >
                <a href="https://www.catherinecbse.info/">
                  <figure class="project-img">
                    <div class="project-item-icon-box">
                      <ion-icon name="eye-outline" />
                    </div>

                    <img src="./project-1.jpg" alt="finance" loading="lazy" />
                  </figure>

                  <h3 class="project-title">Educational</h3>

                  <p class="project-category">Web development</p>
                </a>
              </li>

              <li
                class="project-item active"
                data-filter-item
                data-category="web development"
              >
                <a href="https://thefloortraders.io/">
                  <figure class="project-img">
                    <div class="project-item-icon-box">
                      <ion-icon name="eye-outline" />
                    </div>

                    <img src="./project-2.png" alt="orizon" loading="lazy" />
                  </figure>

                  <h3 class="project-title">Finance</h3>

                  <p class="project-category">Web development</p>
                </a>
              </li>

              <li
                class="project-item active"
                data-filter-item
                data-category="web design"
              >
                <a href="#">
                  <figure class="project-img">
                    <div class="project-item-icon-box">
                      <ion-icon name="eye-outline" />
                    </div>

                    <img src="./project-3.jpg" alt="fundo" loading="lazy" />
                  </figure>

                  <h3 class="project-title">Fundo</h3>

                  <p class="project-category">Web design</p>
                </a>
              </li>

              <li
                class="project-item active"
                data-filter-item
                data-category="applications"
              >
                <a href="#">
                  <figure class="project-img">
                    <div class="project-item-icon-box">
                      <ion-icon name="eye-outline" />
                    </div>

                    <img
                      src="./project-4.png"
                      alt="brawlhalla"
                      loading="lazy"
                    />
                  </figure>

                  <h3 class="project-title">Brawlhalla</h3>

                  <p class="project-category">Applications</p>
                </a>
              </li>

              <li
                class="project-item active"
                data-filter-item
                data-category="web design"
              >
                <a href="#">
                  <figure class="project-img">
                    <div class="project-item-icon-box">
                      <ion-icon name="eye-outline" />
                    </div>

                    <img src="./project-5.png" alt="dsm." loading="lazy" />
                  </figure>

                  <h3 class="project-title">DSM.</h3>

                  <p class="project-category">Web design</p>
                </a>
              </li>

              <li
                class="project-item active"
                data-filter-item
                data-category="web design"
              >
                <a href="#">
                  <figure class="project-img">
                    <div class="project-item-icon-box">
                      <ion-icon name="eye-outline" />
                    </div>

                    <img src="./project-6.png" alt="metaspark" loading="lazy" />
                  </figure>

                  <h3 class="project-title">MetaSpark</h3>

                  <p class="project-category">Web design</p>
                </a>
              </li>

              <li
                class="project-item active"
                data-filter-item
                data-category="web development"
              >
                <a href="#">
                  <figure class="project-img">
                    <div class="project-item-icon-box">
                      <ion-icon name="eye-outline" />
                    </div>

                    <img src="./project-7.png" alt="summary" loading="lazy" />
                  </figure>

                  <h3 class="project-title">Summary</h3>

                  <p class="project-category">Web development</p>
                </a>
              </li>

              <li
                class="project-item active"
                data-filter-item
                data-category="applications"
              >
                <a href="#">
                  <figure class="project-img">
                    <div class="project-item-icon-box">
                      <ion-icon name="eye-outline" />
                    </div>

                    <img
                      src="./project-8.jpg"
                      alt="task manager"
                      loading="lazy"
                    />
                  </figure>

                  <h3 class="project-title">Task Manager</h3>

                  <p class="project-category">Applications</p>
                </a>
              </li>

              <li
                class="project-item active"
                data-filter-item
                data-category="web development"
              >
                <a href="#">
                  <figure class="project-img">
                    <div class="project-item-icon-box">
                      <ion-icon name="eye-outline" />
                    </div>

                    <img src="./project-9.png" alt="arrival" loading="lazy" />
                  </figure>

                  <h3 class="project-title">Arrival</h3>

                  <p class="project-category">Web development</p>
                </a>
              </li>
            </ul>
          </section>
        </article>

        <!--
        - #BLOG
      -->

        <article class="blog" data-page="blog">
          <header>
            <h2 class="h2 article-title">Blog</h2>
          </header>

          <section class="blog-posts">
            <ul class="blog-posts-list">
              <li class="blog-post-item">
                <a href="#">
                  <figure class="blog-banner-box">
                    <img
                      src="./blog-1.jpg"
                      alt="Design conferences in 2022"
                      loading="lazy"
                    />
                  </figure>

                  <div class="blog-content">
                    <div class="blog-meta">
                      <p class="blog-category">Design</p>

                      <span class="dot" />

                      <time datetime="2022-02-23">Fab 23, 2022</time>
                    </div>

                    <h3 class="h3 blog-item-title">
                      Design conferences in 2022
                    </h3>

                    <p class="blog-text">
                      Veritatis et quasi architecto beatae vitae dicta sunt,
                      explicabo.
                    </p>
                  </div>
                </a>
              </li>

              <li class="blog-post-item">
                <a href="#">
                  <figure class="blog-banner-box">
                    <img
                      src="./blog-2.jpg"
                      alt="Best fonts every designer"
                      loading="lazy"
                    />
                  </figure>

                  <div class="blog-content">
                    <div class="blog-meta">
                      <p class="blog-category">Design</p>

                      <span class="dot" />

                      <time datetime="2022-02-23">Fab 23, 2022</time>
                    </div>

                    <h3 class="h3 blog-item-title">
                      Best fonts every designer
                    </h3>

                    <p class="blog-text">
                      Sed ut perspiciatis, nam libero tempore, cum soluta nobis
                      est eligendi.
                    </p>
                  </div>
                </a>
              </li>

              <li class="blog-post-item">
                <a href="#">
                  <figure class="blog-banner-box">
                    <img
                      src="./blog-3.jpg"
                      alt="Design digest #80"
                      loading="lazy"
                    />
                  </figure>

                  <div class="blog-content">
                    <div class="blog-meta">
                      <p class="blog-category">Design</p>

                      <span class="dot" />

                      <time datetime="2022-02-23">Fab 23, 2022</time>
                    </div>

                    <h3 class="h3 blog-item-title">Design digest #80</h3>

                    <p class="blog-text">
                      Excepteur sint occaecat cupidatat no proident, quis
                      nostrum exercitationem ullam corporis suscipit.
                    </p>
                  </div>
                </a>
              </li>

              <li class="blog-post-item">
                <a href="#">
                  <figure class="blog-banner-box">
                    <img
                      src="./blog-4.jpg"
                      alt="UI interactions of the week"
                      loading="lazy"
                    />
                  </figure>

                  <div class="blog-content">
                    <div class="blog-meta">
                      <p class="blog-category">Design</p>

                      <span class="dot" />

                      <time datetime="2022-02-23">Fab 23, 2022</time>
                    </div>

                    <h3 class="h3 blog-item-title">
                      UI interactions of the week
                    </h3>

                    <p class="blog-text">
                      Enim ad minim veniam, consectetur adipiscing elit, quis
                      nostrud exercitation ullamco laboris nisi.
                    </p>
                  </div>
                </a>
              </li>

              <li class="blog-post-item">
                <a href="#">
                  <figure class="blog-banner-box">
                    <img
                      src="./blog-5.jpg"
                      alt="The forgotten art of spacing"
                      loading="lazy"
                    />
                  </figure>

                  <div class="blog-content">
                    <div class="blog-meta">
                      <p class="blog-category">Design</p>

                      <span class="dot" />

                      <time datetime="2022-02-23">Fab 23, 2022</time>
                    </div>

                    <h3 class="h3 blog-item-title">
                      The forgotten art of spacing
                    </h3>

                    <p class="blog-text">
                      Maxime placeat, sed do eiusmod tempor incididunt ut labore
                      et dolore magna aliqua.
                    </p>
                  </div>
                </a>
              </li>

              <li class="blog-post-item">
                <a href="#">
                  <figure class="blog-banner-box">
                    <img
                      src="./blog-6.jpg"
                      alt="Design digest #79"
                      loading="lazy"
                    />
                  </figure>

                  <div class="blog-content">
                    <div class="blog-meta">
                      <p class="blog-category">Design</p>

                      <span class="dot" />

                      <time datetime="2022-02-23">Fab 23, 2022</time>
                    </div>

                    <h3 class="h3 blog-item-title">Design digest #79</h3>

                    <p class="blog-text">
                      Optio cumque nihil impedit uo minus quod maxime placeat,
                      velit esse cillum.
                    </p>
                  </div>
                </a>
              </li>
            </ul>
          </section>
        </article>

        <!--
        - #CONTACT
      -->

        <article class="contact" data-page="contact">
          <header>
            <h2 class="h2 article-title">Contact</h2>
          </header>

          <section class="mapbox" data-mapbox>
            <figure>
              <!-- svelte-ignore a11y-missing-attribute -->
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d298523.93840925634!2d83.07741021830506!3d17.809128574044014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39431389e6973f%3A0x92d9c20395498468!2sVisakhapatnam%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1680773388231!5m2!1sen!2sin"
                width="400"
                height="300"
                loading="lazy"
              />
            </figure>
          </section>

          <section class="contact-form">
            <h3 class="h3 form-title">Contact Form</h3>

            <form action="#" class="form" data-form>
              <div class="input-wrapper">
                <input
                  type="text"
                  name="fullname"
                  class="form-input"
                  placeholder="Full name"
                  required
                  data-form-input
                />

                <input
                  type="email"
                  name="email"
                  class="form-input"
                  placeholder="Email address"
                  required
                  data-form-input
                />
              </div>

              <textarea
                name="message"
                class="form-input"
                placeholder="Your Message"
                required
                data-form-input
              />

              <button class="form-btn" type="submit" disabled data-form-btn>
                <ion-icon name="paper-plane" />
                <span>Send Message</span>
              </button>
            </form>
          </section>
        </article>
      </div>
    </main>

    <!--
    - custom js link
  -->
    <!--
    - custom js link
  -->
    <script src="./assets/js/script.js"></script>

    <!--
    - ionicon link
  -->
    <!--
    - ionicon link
  -->
    <script
      type="module"
      src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
    ></script>
    <script
      nomodule
      src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
    ></script>
  </body>

  <script>
    "use strict";

    // element toggle function
    const elementToggleFunc = function (elem) {
      elem.classList.toggle("active");
    };

    // sidebar variables
    const sidebar = document.querySelector("[data-sidebar]");
    const sidebarBtn = document.querySelector("[data-sidebar-btn]");

    // sidebar toggle functionality for mobile
    sidebarBtn.addEventListener("click", function () {
      elementToggleFunc(sidebar);
    });

    // testimonials variables
    const testimonialsItem = document.querySelectorAll(
      "[data-testimonials-item]"
    );
    const modalContainer = document.querySelector("[data-modal-container]");
    const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
    const overlay = document.querySelector("[data-overlay]");

    // modal variable
    const modalImg = document.querySelector("[data-modal-img]");
    const modalTitle = document.querySelector("[data-modal-title]");
    const modalText = document.querySelector("[data-modal-text]");

    // modal toggle function
    const testimonialsModalFunc = function () {
      modalContainer.classList.toggle("active");
      overlay.classList.toggle("active");
    };

    // add click event to all modal items
    for (let i = 0; i < testimonialsItem.length; i++) {
      testimonialsItem[i].addEventListener("click", function () {
        modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
        modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
        modalTitle.innerHTML = this.querySelector(
          "[data-testimonials-title]"
        ).innerHTML;
        modalText.innerHTML = this.querySelector(
          "[data-testimonials-text]"
        ).innerHTML;

        testimonialsModalFunc();
      });
    }

    // add click event to modal close button
    modalCloseBtn.addEventListener("click", testimonialsModalFunc);
    overlay.addEventListener("click", testimonialsModalFunc);

    // custom select variables
    const select = document.querySelector("[data-select]");
    const selectItems = document.querySelectorAll("[data-select-item]");
    const selectValue = document.querySelector("[data-selecct-value]");
    const filterBtn = document.querySelectorAll("[data-filter-btn]");

    select.addEventListener("click", function () {
      elementToggleFunc(this);
    });

    // add event in all select items
    for (let i = 0; i < selectItems.length; i++) {
      selectItems[i].addEventListener("click", function () {
        let selectedValue = this.innerText.toLowerCase();
        selectValue.innerText = this.innerText;
        elementToggleFunc(select);
        filterFunc(selectedValue);
      });
    }

    // filter variables
    const filterItems = document.querySelectorAll("[data-filter-item]");

    const filterFunc = function (selectedValue) {
      for (let i = 0; i < filterItems.length; i++) {
        if (selectedValue === "all") {
          filterItems[i].classList.add("active");
        } else if (selectedValue === filterItems[i].dataset.category) {
          filterItems[i].classList.add("active");
        } else {
          filterItems[i].classList.remove("active");
        }
      }
    };

    // add event in all filter button items for large screen
    let lastClickedBtn = filterBtn[0];

    for (let i = 0; i < filterBtn.length; i++) {
      filterBtn[i].addEventListener("click", function () {
        let selectedValue = this.innerText.toLowerCase();
        selectValue.innerText = this.innerText;
        filterFunc(selectedValue);

        lastClickedBtn.classList.remove("active");
        this.classList.add("active");
        lastClickedBtn = this;
      });
    }

    // contact form variables
    const form = document.querySelector("[data-form]");
    const formInputs = document.querySelectorAll("[data-form-input]");
    const formBtn = document.querySelector("[data-form-btn]");

    // add event to all form input field
    for (let i = 0; i < formInputs.length; i++) {
      formInputs[i].addEventListener("input", function () {
        // check form validation
        if (form.checkValidity()) {
          formBtn.removeAttribute("disabled");
        } else {
          formBtn.setAttribute("disabled", "");
        }
      });
    }

    // page navigation variables
    const navigationLinks = document.querySelectorAll("[data-nav-link]");
    const pages = document.querySelectorAll("[data-page]");

    // add event to all nav link
    for (let i = 0; i < navigationLinks.length; i++) {
      navigationLinks[i].addEventListener("click", function () {
        for (let i = 0; i < pages.length; i++) {
          if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
            pages[i].classList.add("active");
            navigationLinks[i].classList.add("active");
            window.scrollTo(0, 0);
          } else {
            pages[i].classList.remove("active");
            navigationLinks[i].classList.remove("active");
          }
        }
      });
    }
  </script>
</html>
