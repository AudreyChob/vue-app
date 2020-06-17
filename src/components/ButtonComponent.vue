<template>
    <div >
        <button   :style="{'backgroundColor' : couleur, 'borderRadius' : border}" @click="updatecouleur" > {{nom}} </button>
    </div>
</template>

<script>
export default {
    name: "ButtonComponent",
    props: {
        nom: String,
        couleur: String,
        border: Number,
    },
    data(){
        return{
        }  
    },
    methods: {
       updatecouleur: function() {
      this.couleur = "yellow" ;
      this.$emit("couleurupdated", this.couleur);
        }
    }    
}
</script>
<style scoped>
    .red {
        background-color: white;

    }
</style>
