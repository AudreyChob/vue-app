<template>
  <div class="loginForm">
    <h1>{{ msg }}</h1>
    <form>
        <label>
            Identifiant : 
            <input type="text" name="login" v-model="formModel.login" required>
        </label>
        <label>
            Mot de passe : 
            <input type=password name="password" v-model="formModel.password" required>
        </label>
<br>    <button type="submit" v-on:click="login()"> Connexion </button>
    </form>
  </div>
</template>

<script>

  



export default {

    name: 'LoginForm',
    props: {
        msg: String
  },
  data(){
      return{
          formModel: {
              login : "admin",
        password: "admin",
    }
      }
      
  },
    methods: {
        login() { 
            if(this.formModel.username != "" && this.formModel.password != "") { 
                this.$emit("allowAnonymous", true);
                this.$router.push({ name: 'Auth', query: { redirect: '/auth/#' } });
            }
            else {
                console.log("Identifiant et mot de passe obligatoire");
            }
        }
    }
}


  
</script>