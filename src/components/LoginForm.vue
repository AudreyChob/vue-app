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
                this.$router.push({ 
                    name: 'Auth', 
                    query: { 
                        login : this.formModel.login,
                        password : this.formModel.password,
                } });
            }
        }
    }
}


  
</script>