<template>
    <div >
        <button   :style="{'backgroundColor' : couleur, 'borderRadius' : border}" > {{nom}} </button>
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
       
    }    
}
</script>
<style scoped>
    .red {
        background-color: white;

    }
</style>
