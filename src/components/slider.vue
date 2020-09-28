<template>
  <div>
    <div class="slides">
      <div>
        <img :src="images[cimg]">
      </div>
    </div>
    <span
      class="prev"
      @click="preSlide()"
    >
     <button>
      prev
     </button>
    </span>
    <span
      class="next"
      @click="nextSlide()"
    >
     <button>
      next
     </button>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        'src/images/1.jpg',
        'src/images/2.jpg',
        'src/images/3.jpg',
      ],
      cimg: 0,
    };
  },
  methods: {
    nextSlide() {
      this.cimg += 1;
      if (this.cimg > 4) {
        this.cimg = 0;
      }
    },
    preSlide() {
      this.cimg -= 1;
      if (this.cimg < 0) {
        this.cimg = 4;
      }
    },
  },
};
</script>