<template lang="html">
    <div>
        <h1>FAVOURITES</h1>
        <div v-for="favourite in favourites">
            <div class="row">
                <p><b>{{favourite}}</b></p>
                <button type="button" name="button" @click="removeFavourite(favourite)" class="btn-removeFavourite">Remove</button>
            </div>
        </div>
    </div>
</template>

<script>
import {public_key} from '../marvel'
import axios from 'axios'
import { mapState } from 'vuex'
export default{
    name: 'Favourites',

    data(){
        return{
            url: ''
        }
    },

    mounted(){
        
    },

    computed: {
        ...mapState({
            favourites: state => state.favourites
        })
    },

    methods:{
        removeFavourite(name){
            this.$store.dispatch('removeFavourite',name)
        }
    }
}
</script>

<style lang="css">
h1{
    color:red;
    font-family: "Marvel Regular";
    letter-spacing: 3px;
}

.row{
    display:inline-block;
    width: 100%;
    background-color: white;
    opacity: 0.8;
    padding-top: 0.05%;
    padding-bottom: 0.05%;
    margin-bottom: 0.5%;
    border-top: solid 3px black;
    border-bottom: solid 3px black;
}

.row p{
    margin-left: 20%;
    float:left;
    text-align: center;
    color:black;
    font-size: 20px;
}

.btn-removeFavourite{
    width: 10%;
    padding: 5px;
    border-radius: 25px;
    background-color: white;
    border: solid 2px black;
    color: black;
    font-size: 16px;
    cursor: pointer;
    margin-right:18%;
    margin-top:15px;
    float:right;
    text-align: center;
}

.btn-removeFavourite:hover{
    background-color:red;
    border: solid 2px red;
    color:white;
}
</style>