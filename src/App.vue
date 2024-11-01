<script setup>
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/700.css";
import "@fontsource-variable/roboto-mono";

import { ref, nextTick, watch } from "vue";
import { gsap } from "gsap";
import Carousel from "./components/Carousel.vue";
import VideoPlayer from "./components/VideoPlayer.vue";
import ArrowLeft from "./assets/arrowLeft.svg";
import ArrowRight from "./assets/arrowRight.svg";

const slideComponents = [
  {
    component: VideoPlayer,
    props: {
      videoUrl: "https://youtu.be/QSWXiRiTHWA",
    },
    content: {
      title: "The Roberts Family's Story",
      description:
        "The circumstances that might lead to homelessness can include loss of income or transportation, a falling out with loved ones, or an abrupt economic downturn. For Brandon and Jennifer, it was all of these things.",
    },
  },
  {
    component: VideoPlayer,
    props: {
      videoUrl: "https://youtu.be/zFCh8IvKZSo",
    },
    content: {
      title: "Jamie's Story",
      description:
        "Jamie and her 3 children faced eviction after fleeing domestic violence, and were searching for compassion and support during their season of homelessness.",
    },
  },
  {
    component: VideoPlayer,
    props: {
      videoUrl: "https://youtu.be/nyp4OLaEksg",
    },
    content: {
      title: "Tish's Story",
      description:
        "Tish had to overcome the unimaginable to protect her children and ensure a better future for her family. Watch her journey from brokenness and despair to hope and restoration.",
    },
  },
];
const currentSlideContent = ref(slideComponents[0].content);
const hasInteracted = ref(false);

// Watch for changes in `currentSlideContent`
watch(currentSlideContent, async () => {
  if (hasInteracted.value) {
    await nextTick();
    gsap.fromTo(
      ".animated-content",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
    );
  }
});

// Handle slide change event
const onSlideChange = (realIndex) => {
  hasInteracted.value = true; // Set interaction flag to true on first slide change
  currentSlideContent.value = slideComponents[realIndex].content;
};
</script>

<template>
  <section>
    <div class="swiper-button-wrapper">
      <button class="nav-button custom-prev">
        <ArrowLeft height="13.33px" width="16px" stroke-width="1.5" />
      </button>
      <button class="nav-button custom-next">
        <ArrowRight height="13.33px" width="16px" stroke-width="1.5" />
      </button>
    </div>
    <div class="content-container">
      <h1 class="animated-content">{{ currentSlideContent.title }}</h1>
      <Carousel :slides="slideComponents" @swiperslidechange="onSlideChange" />
      <p class="animated-content">{{ currentSlideContent.description }}</p>
      <button class="CTA-button">
        More Client Stories
        <ArrowRight height="10px" width="12px" stroke-width="2" />
      </button>
    </div>
  </section>
</template>

<style>
:root {
  --primary: rgba(255, 200, 64, 1);
  --primary-foreground: rgba(38, 40, 97, 1);
  --secondary: rgba(241, 92, 34, 1);
  --secondary-foreground: rgba(255, 255, 255, 1);
  --accent: rgba(247, 147, 29, 1);
}

body {
  font-family: "Roboto", sans-serif;
  color: var(--secondary-foreground);
  background: linear-gradient(
    90deg,
    var(--secondary) 0%,
    var(--accent) 50%,
    var(--primary) 100%
  );
}
section {
  position: relative;
  padding: 20px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
h1 {
  font-size: 24px;
  font-weight: 700;
  line-height: 43px;
  margin-bottom: 12px;
}
p {
  margin-bottom: 20px;
  min-height: 115px;
  line-height: 23px;
}
.swiper-container-wrapper {
  margin-bottom: 20px;
}

.CTA-button {
  display: flex;
  column-gap: 10px;
  align-items: center;
  font-family: "Roboto Mono Variable", monospace;
  font-weight: 500;
  color: var(--primary-foreground);
  background-color: var(--primary);
  border-radius: 34px;
  padding: 9.5px 29.29px;
  margin-top: auto;
}
.CTA-button .icon {
  height: 10px;
  width: 12px;
  padding: 8px;
}
.swiper-button-wrapper {
  display: flex;
  column-gap: 24px;
  margin-bottom: 10px;
  width: 88px;
}
.nav-button {
  width: 32px;
  height: 32px;
  padding: 8px;
  border-radius: 34px;
  background-color: var(--primary-foreground);
}
.nav-button .icon {
  height: 13.33px;
  width: 16px;
}

@media (min-width: 768px) {
  section {
    padding: 40px;
  }
  h1 {
    font-size: 32px;
  }
  p {
    height: 69px;
  }
  .content-container {
    max-width: 690px;
  }
  .swiper-button-wrapper {
    margin-bottom: 20px !important;
  }
}
@media (min-width: 1024px) {
  section {
    padding: 80px;
  }
  h1 {
    margin-bottom: 24px;
  }
  h1,
  p {
    max-width: 298px;
  }
  p {
    margin-bottom: 40px;
    height: auto;
  }
  .swiper-container-wrapper {
    width: -webkit-fill-available;
    position: absolute;
    left: 438px;
    top: 50%;
    margin-right: 80px;
    transform: translateY(-50%);
  }
  .content-container {
    height: 331px;
    display: flex;
    flex-direction: column;
    width: 298px;
    margin-right: 60px;
  }
  .swiper-button-wrapper {
    margin-bottom: 28px !important;
  }
  .CTA-button {
    margin-top: auto;
    width: 263px;
  }
}
@media (min-width: 1280px) {
  section {
    padding: 159px;
  }
  h1 {
    font-size: 46px;
  }
  .swiper-container-wrapper {
    width: -webkit-fill-available;
    max-width: 843px;
    left: 518px;
  }
}
@media (min-width: 1440px) {
  body {
    height: 100vh;
    width: 100%;
  }
  section {
    overflow: hidden;
    max-width: 1700px;
  }
  .swiper-container-wrapper {
    max-width: unset;
    width: 100%;
  }
  swiper-slide {
    max-width: 843px;
  }
}
@media (min-width: 1700px) {
  #app {
    display: grid;
    place-items: center;
  }
  section {
    width: 100%;
  }
}
</style>
