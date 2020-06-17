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
        border: String,
    },
    data(){
        return{
        }  
    },
    methods: {
        updatecouleur() {
            this.couleur = "yellow" ;
            this.$emit("couleurupdated", this.couleur);
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
