<template lang="html">
    <div>
        <div class="flex-containerComic">

            <div class="flexComic" v-for="com in comic">
                <h3>{{com.title}}</h3>
                <p>{{com.description}}</p>
                <p><b>Format:</b> {{com.format}}</p>
                <p><b>Pages:</b> {{com.pageCount}}</p>
                <p><b>ISBN:</b> {{com.isbn}}</p>
                
            </div>

            <div class="flex2Comic">
                <img :src="preUrl" alt="" class="comic-image">
            </div>

        </div>

        <div v-for="com in comic">
            <button type="button" name="button" @click="markAsFavourite(com.title)" class="btn-favourite">Add to favourite</button>
            <router-link to="/comics">
                <button type="button" name="button" class="btn-backComic">Back</button>
            </router-link>
        </div>
            
    </div>
</template>

<script>
import {public_key} from '../marvel'
import axios from 'axios'
import { mapState } from 'vuex'
export default{
    name: 'Comic',

    data(){
        return{
            url: ''
        }
    },

    mounted(){
        this.$store.dispatch('getComic',this.$route.params.id)
    },

    computed: {
        ...mapState({
            comic: state => state.comic,
            preUrl: state => state.url
        })
    },

    methods:{
        markAsFavourite(name){
            this.$store.dispatch('setFavourite','Comic: ' + name)
        }
    }
}
</script>

<style lang="css">

@font-face {
    font-family: "Marvel Regular";
    src: url("../assets/fonts/Marvel-Regular.ttf") format("ttf");
}

.flex-containerComic{
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

.flexComic{
    padding-left:10%;
    flex: 50%;
    text-align: right;
}

.flexComic h3{
    color:red;
}

.flexComic p{
    color:black;
}

.flex2Comic{
    flex: 50%;
    padding-left:2%;
    text-align:left;
}

.comic-image{
    width: 30%;
    border-radius: 20px;
}

.btn-backComic{
    width: 200px;
    padding: 10px;
    border-radius: 25px;
    background-color: white;
    border: solid 2px black;
    color: black;
    font-size: 20px;
    cursor: pointer;
}

.btn-backComic:hover{
    border:solid 2px red;
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