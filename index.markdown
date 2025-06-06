---
layout: default
title: Home
---

<section class="hero-section">
    <div class="hero-section__video">
        <video autoplay muted loop uk-video="autoplay: true; muted: true; loop: true;">
            <source src="{{ '/assets/img/VID.mp4' | relative_url }}" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    </div>
    <div class="hero-section__container uk-container">
        <div class="hero-section__content" uk-scrollspy="cls: uk-animation-fade; delay: 300;">
            <h1>Welcome to {{ site.title }}</h1>
            <p>{{ site.description }}</p>
            <p>Discover the authentic sound of vinyl through our comprehensive music education programs and extensive record collection. Our expert instructors combine traditional techniques with modern technology to provide unparalleled learning experiences in beatmaking, scratching, and professional DJ skills.</p>
        </div>
    </div>
</section>

<section id="about" class="about-section">
    <div class="uk-container container" uk-scrollspy="cls: uk-animation-fade; delay: 500;">
        <h2 class="uk-text-center">{{ site.title }}</h2>
        <p class="uk-text-center">{{ site.title }} represents the pinnacle of vinyl music education and curation, providing comprehensive training programs alongside an extensive collection of premium vinyl records. Our dedicated team of industry professionals brings decades of experience to every lesson while maintaining one of the most comprehensive vinyl libraries in the region.</p>
    </div>
</section>

{% include courses.html %}

{% include vinyl_library.html %}

{% include testimonials.html %}

{% include faq.html %}

{% include contact.html %}