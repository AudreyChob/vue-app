<template>
    <div >
        <button :style="{'backgroundColor' : param.couleur, 'borderRadius' : border}" @click="updatecouleur" > {{param.nom}} </button>
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
        changeBorder(){
            
        }

    }    
}
</script>
<style scoped>
    .red {
        background-color: white;

    }
</style>
