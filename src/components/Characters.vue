<template lang="html">
    <div class="wrapper">

        <h1>CHARACTERS</h1>

        <div class="filter">
            <label><b>Filter: </b></label>
            <select name="LeaveType" @change="onChange($event)" class="filter-control">
                <option value="Show all">Show all</option>
                <option value="Have a description">Have a description</option>
                <option value="Have an image">Have an image</option>
            </select><br><br>
        </div>

        <div class="card-container">
            <div class="card" v-for="character in characters">
                <h3>{{character.name}}</h3>
                <router-link :to="{ name: 'character', params: { id: character.id} }">
                    <button type="button" name="button" class="btn-view">View</button>
                </router-link>
            </div>
        </div>

    </div>
</template>

<script>
import { public_key, secret_key } from '../marvel';
import { mapState } from 'vuex'
import axios from 'axios'

export default{
    name: 'Characters',

    mounted(){
        this.$store.dispatch('getCharacters')
    },

    computed: {
        ...mapState({
            characters: state => state.characters
        })
    },

    methods:{
        onChange(event) {
            if (event.target.value == 'Show all'){
                this.$store.dispatch('getCharacters')
            }else if (event.target.value == 'Have a description'){
                this.$store.dispatch('getCharactersFilterDescription')
            }else if (event.target.value == "Have an image"){
                this.$store.dispatch('getCharactersFilterImage')
            }
        }
    }
}
</script>

<style lang="css">

@font-face {
    font-family: "Marvel Regular";
    src: url("../assets/fonts/Marvel-Regular.ttf") format("ttf");
}

.wrapper{
    width:100%;
}

.filter{
    margin-left: 62%;
}

.filter label{
    color: white;
}

.filter-control{
    width: 27%;
    font-size: 14px;
    height: 30px;
    color:black;
    border-radius:5px;
}

.filter-control:hover{
    border: 2px solid red;
}

h1{
    font-size:30px;
    font-family: "Marvel Regular";
    color: red;
    letter-spacing: 3px;
}

.card-container{
    margin-left: 11.5%;
    display: grid;
    grid-template-columns: 20% 20% 20% 20%;
    grid-gap: 30px;
}

.card{
    text-align: center;
    position: relative;
    background-color:white;
    opacity: 0.8;
    border:solid 3px black;
    border-radius: 5px;
    min-height: 200px;
}

.card h3{
    color:black;
    margin-top:50px;
    position: absolute;
    top:0;
    right:0;
    left:0;
}

.btn-view{
    padding: 10px;
    border-radius: 25px;
    position: absolute;
    bottom:0;
    right:0;
    left:0;
    text-align:center;
    background-color:white;
    border: solid 2px red;
    color: black;
    width: 50%;
    font-size: 16px;
    cursor: pointer;
    margin-left: 25%;
    margin-right: 25%;
    margin-bottom: 20%;
}

.btn-view:hover{
    border:solid 2px white;
    background-color:red;
    color:white;
    font-style:unset;
}
</style>