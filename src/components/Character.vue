<template lang="html">
    <div>
        <div class="flex-container">

            <div class="flex" v-for="char in character">
                <h3>{{char.name}}</h3>
                <p>{{char.description}}</p>
            </div>

            <div class="flex2">
                <img :src="preUrl" alt="" class="char-image">
            </div>
            
        </div>

        <div v-for="char in character">
            <button type="button" name="button" @click="markAsFavourite(char.name)" class="btn-favourite">Add to favourite</button>
            <router-link to="/">
                <button type="button" name="button" class="btn-back">Back</button>
            </router-link>
        </div>
            
    </div>
</template>

<script>
import {public_key} from '../marvel'
import axios from 'axios'
import { mapState } from 'vuex'
export default{
    name: 'Character',

    data(){
        return{
            url: ''
        }
    },

    mounted(){
        this.$store.dispatch('getCharacter',this.$route.params.id)
    },

    computed: {
        ...mapState({
            character: state => state.character,
            preUrl: state => state.url
        })
    },

    methods:{
        markAsFavourite(name){
            this.$store.dispatch('setFavourite','Character: ' + name)
        }
    }
}
</script>

<style lang="css">

@font-face {
    font-family: "Marvel Regular";
    src: url("../assets/fonts/Marvel-Regular.ttf") format("ttf");
}

.flex-container{
    margin-top:2%;
    margin-right: 5%;
    margin-bottom: 2%;
    padding-top: 1%;
    padding-bottom: 1%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:white;
    opacity: 0.8;
    border-top: solid 3px black;
    border-bottom: solid 3px black;
}

.flex{
    padding-left:10%;
    flex: 50%;
    text-align: right;
}

.flex h3{
    color:red;
}

.flex p{
    color:black;
}

.flex2{
    flex: 50%;
    padding-left:2%;
    text-align:left;
}

.char-image{
    width: 30%;
    border-radius: 20px;
}

.btn-back{
    width: 200px;
    padding: 10px;
    border-radius: 25px;
    background-color: white;
    border: solid 2px black;
    color: black;
    font-size: 20px;
    cursor: pointer;
}

.btn-back:hover{
    border: solid 2px red;
    color:red; 
}

.btn-favourite{
    width: 200px;
    padding: 10px;
    border-radius: 25px;
    background-color: white;
    border: solid 2px red;
    color: red;
    font-size: 20px;
    cursor: pointer;
    margin-right: 2.5%;
}

.btn-favourite:hover{
    border:solid 2px red;
    background-color:red;
    color:white;
}
</style>