<template>
    <div >
        <button :style="{'backgroundColor' : object.couleur}" > {{object.nom}} </button>
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
                nom: "Super Button",
                couleur: "red",
            }
        }  
    },
    methods: {
        backgroundColor(){
            return this.object.couleur;
            
        },
    }    
}
</script>
<style scoped>
    .red {
        background-color: white;
    }
</style>
