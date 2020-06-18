<template>
  <div id="carousel">
    <VueCardCarousel class="vcc" 
    :items="listOfTodos"
    :start-index="1"
      :hide-backdrop="hideBackdrop"
      :side-card-opacity="sideCardOpacity"
      :header-options="headerOpt"
      :body-options="bodyOpt"
      :footer-options="footerOpt" >

      <template v-slot:header="slotProps">
        <strong class="float-left text-white">
          {{slotProps.headerProp.date}}
        </strong>
        <b-icon-check-all
          style="height: 1.5em; width: 1.5em;"
          class="float-right text-white check-btn"
          @click="checkAll(slotProps.headerProp)"
        ></b-icon-check-all>
      </template>
      <template v-slot:default="slotProps">
        <div>
          <h4><u>To Do List</u></h4>
          <input type="text" name="article" v-model="formModel.article" required>
          <b-form-checkbox
            v-for="todo in slotProps.bodyProp.todos"
            :key="todo.id"
            class="mb-2"
            v-model="todo.completed"
            size="lg"
          >
            {{ todo.name }}
          </b-form-checkbox>
        </div>
      </template>
    </VueCardCarousel>
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
      formModel: {
            article : "",
        },
      listOfTodos: [
        {
          date: "02/23/2020",
          todos: [
            { id: 0, name: "Make coffee", completed: false },
            { id: 1, name: "Pet the cat", completed: false },
            { id: 2, name: "Wash the car", completed: false },
            { id: 3, name: "Laundry", completed: false }
          ]
        },
      ],
      hideBackdrop: true,
      sideCardOpacity: 0.25,
      headerOpt: { isVisible: true, backgroundColor: "#563d7c" },
      bodyOpt: { backgroundColor: "" },
      footerOpt: { isVisible: false, backgroundColor: "green" }
    };
  }
}
</script>

<style scoped>
  .vcc {
    height: 50vh;
    width: 60vw;
    color: black;
  }
  #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 2em;
}
.page-header {
  font-size: 1.3rem;
  font-weight: 600;
  color: #2c3e50;
  position: relative;
}
.fork-me {
  position: absolute;
  top: 0;
  right: 0;
  border: 0;
  width: 149;
  height: 149;
}
.check-btn {
  cursor: pointer;
}
.vcc {
  height: 50vh !important;
  width: 60vw !important;
  box-shadow: 1px 1px 5px 1px;
  border-radius: 0.35em;
}
.switch {
  position: relative;
  display: inline-block;
  width: 55px;
  height: 25px;
}
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}
.switch-header {
  padding-bottom: 0.5em;
}
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.2s;
  transition: 0.2s;
}
.slider:before {
  position: absolute;
  content: "";
  height: 20px;
  width: 20px;
  left: 3px;
  bottom: 2.2px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
input:checked + .slider {
  background-color: #2196f3;
}
input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}
input:checked + .slider:before {
  -webkit-transform: translateX(28px);
  -ms-transform: translateX(28px);
  transform: translateX(28px);
}
.slider.round {
  border-radius: 34px;
}
.slider.round:before {
  border-radius: 50%;
}
</style>