<template>
    <div >
        <button :style="{'backgroundColor' : param.couleur}" @click="updatecouleur" > {{param.nom}} </button> <br>
        <!-- <button :style="{'backgroundColor' : couleur}" @click="updatecouleur" > {{nom}} </button>  -->

    </div>
</template>

<script>
export default {
    name: "ButtonComponent",
    props: {
        /* nom: String,
        couleur: String,
        border: String, */ 
        param: Object
    },
    data(){
        return{
        }  
    },
    methods: {
        updatecouleur() {
            this.param.couleur = "yellow" ;
            this.param.nom = "bleu";
            this.$emit("couleurupdated", this.param);
        },

    }    
}
</script>
<style scoped>
    .red {
        background-color: white;
    }
</style>
