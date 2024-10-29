<template>
  <div class="swiper-container-wrapper">
    <swiper-container
      class="mySwiper"
      slides-per-view="1"
      :breakpoints="{
        1440: {
          slidesPerView: 'auto',
        },
      }"
      loop="true"
      space-between="30"
      :navigation="{
        nextEl: '.custom-next',
        prevEl: '.custom-prev',
      }"
      :pagination="{
        clickable: true,
        el: '.custom-pagination',
      }"
      @swiperslidechange="onSlideChange"
    >
      <swiper-slide
        v-for="(slide, index) in slides"
        :key="index"
        class="swiper-slide"
      >
        <component :is="slide.component" v-bind="slide.props" />
      </swiper-slide>
    </swiper-container>
    <div class="custom-pagination">
      <span
        v-for="(slide, index) in slides"
        :key="index"
        :class="['bullet', { active: index === currentIndex }]"
        @click="goToSlide(index)"
      ></span>
    </div>
  </div>
</template>

<script setup>
import { register } from "swiper/element/bundle";
import "swiper/swiper-bundle.css";
import { onMounted, ref } from "vue";

// Register swiper custom elements
register();

// Props: The slides to be displayed in the carousel
const props = defineProps({
  slides: {
    type: Array,
    required: true,
  },
});

const currentIndex = ref(0);
const emit = defineEmits(["swiperslidechange"]);

const onSlideChange = (event) => {
  const swiper = event.detail[0];
  // Get the real index, accounting for duplicate slides in loop mode
  const realIndex = swiper.realIndex;
  currentIndex.value = realIndex;
  emit("swiperslidechange", realIndex);
};

const goToSlide = (index) => {
  const swiperContainer = document.querySelector(".mySwiper");
  if (swiperContainer?.swiper) {
    swiperContainer.swiper.slideToLoop(index);
  }
};

// Swiper instance initialization
onMounted(() => {
  const swiperInstance = document.querySelector(".mySwiper").swiper;

  // Attach external navigation buttons (manual binding)
  const nextButton = document.querySelector(".custom-next");
  const prevButton = document.querySelector(".custom-prev");

  nextButton.addEventListener("click", () => swiperInstance.slideNext());
  prevButton.addEventListener("click", () => swiperInstance.slidePrev());
});
</script>

<style>
.swiper-container-wrapper {
  position: relative;
  width: 100%;
}
.custom-pagination {
  margin-top: 40px;

  display: none;
  column-gap: 16px;
}
.swiper-pagination-bullet {
  width: 16px;
  height: 16px;
  background-color: var(--secondary-foreground);
  opacity: 0.5;
  margin: 0 !important;
}
.swiper-pagination-bullet-active {
  background-color: var(--secondary-foreground);
  opacity: 1;
}
@media (min-width: 1024px) {
  .custom-pagination {
    display: flex !important;
  }
}
</style>
