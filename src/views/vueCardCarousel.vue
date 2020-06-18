<template>
  <div id="app">
    <VueCardCarousel
      class="vcc"
      :items="listOfTodos"
      :header-options="headerOpt"
      :footer-options="footerOpt"

    >
      <template v-slot:header="slotProps">
        <strong>Header. Id: {{ slotProps.headerProp.id }}</strong>
        
      </template>
      <template v-slot:default="slotProps">
        <input type="text" name="aFaire" v-model="formModel.aFaire" >
        
        <!-- <div v-for="n in 5" :key="n"> -->
         <!--  {{ slotProps.bodyProp.cMainId }}. Hello from the Parent. -->
          <div v-for="(todo,index) in slotProps.bodyProp.todos" :key="todo">
            <input type="text" name="aFaire" v-model="todos[index]" >{{todo}}
            {{aFaire}}
          </div>
        <!-- </div> -->
      </template>
      <template v-slot:footer="slotProps">
        <strong>Footer. Id: {{ slotProps.footerProp.id }}</strong>
      </template>
    </VueCardCarousel>
  </div>
</template>

<script>
/* import { VueCardCarousel } from "vue-card-carousel"; */

export default {
  components: {
    //VueCardCarousel
  },
  data() {
    return {
      formModel: {
            aFaire : "Je ne fonctionne pas !",
        },
      listOfTodos: [{ id: 1, todos: ['Faire les courses','Jouer aux cartes']},
                    { id: 2 , todos: ['Faire à manger', 'Courir sur la plage']},
                    { id: 3 , todos: ['Lire un livre', 'Chanter sous la douche']},
                    { id: 4 , todos: ['Rire aux éclats', 'Sauter dans les arbres']}],
      headerOpt: { isVisible: true, backgroundColor: "green" },
      footerOpt: { isVisible: false }
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