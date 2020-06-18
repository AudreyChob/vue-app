<template>
  <div id="carousel">
    <VueCardCarousel class="vcc" :items="listOfTodos" />
  </div>
</template>

<script>
import { VueCardCarousel } from "vue-card-carousel";

export default {
  components: {
    VueCardCarousel
  },
  data() {
    return {
      listOfTodos: [
            { id: 0, name: "Make coffee", completed: false },
            { id: 1, name: "Pet the cat", completed: false },
            { id: 2, name: "Wash the car", completed: false },
            { id: 3, name: "Laundry", completed: false }
          ]
    };
  }
};
</script>

<style scoped>
  .vcc {
    height: 50vh;
    width: 60vw;
  }
</style>