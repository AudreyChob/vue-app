<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Audrey"/>
    <LoginForm msg="Identifiez vous"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import LoginForm from '@/components/LoginForm.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    LoginForm,
  }
}
</script>
