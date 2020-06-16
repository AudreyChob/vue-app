<template>
    <div>
        <button v-on:click="getInfos()"> Super Bouton </button>
        <h3>{{"Nom du bouton : " + this.nom }}</h3>
    </div>
</template>

<script>
export default {
    name: "ButtonComponent",
    props: {
        msg: String
    },
    data(){
        return{
            object: {
                nom: "buttonTest",
                couleur: "red",
            }
        }  
    },
    methods: {
        getInfos(){
            return "Nom du bouton : " + this.nom + ". Couleur du bouton : " + this.couleur;
        },
    }    
}
</script>
