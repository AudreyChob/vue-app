<template>
  <div class="auth">
    <h1>Vous êtes connecté.</h1>
    <ButtonComponent :param="param" @couleurupdated="test"/>
    <!-- si on utilise pas de méthode il est possible d'écrire du Js lors de l'appel exemple @couleurupdated="alert('ok')"-->
    <!-- <ButtonComponent nom="Jaune" couleur="blue" @nomupdated="alert('ok')"/> -->

  </div>
</template>

<script>

import ButtonComponent from '@/components/ButtonComponent';

export default {
  name: 'Auth',
  components:{
    ButtonComponent,
  }, 
  data(){
    return{
      param : {
        nom :"confirmer",
        couleur : "green"
      }
    }
  },
  methods: {
    test(param){
      alert('ok ' + param.couleur + param.nom)
    }
  }
}
</script>