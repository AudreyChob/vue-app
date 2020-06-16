<template>
  <div class="auth">
    <h1>Vous êtes connecté.</h1>
    <ButtonComponent/>

  </div>
</template>

<script>

import ButtonComponent from '@/components/ButtonComponent';

export default {
  name: 'Auth',
  components:{
    ButtonComponent,
  }
}
</script>