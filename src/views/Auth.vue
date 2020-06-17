<template>
  <div class="auth">
    <h1>Vous êtes connecté.</h1>
    <ButtonComponent :param="param" @couleurupdated="test"/>
    <ButtonComponent nom="Jaune" couleur="blue" @couleurupdated="$event"/>

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