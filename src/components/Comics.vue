<template lang="html">
    <div class="wrapper">

        <h1>COMICS</h1>

        <div class="sorter">
            <label><b>Sort: </b></label>
            <select name="LeaveType" @change="onChange($event)" class="sort-control">
                <option value="Unsorted">Unsorted</option>
                <option value="Sort by title">Sort by title</option>
                <option value="Sort by pages">Sort by pages</option>
            </select><br><br>
        </div>

        <div class="card-containerComics">
            <div class="cardComics" v-for="comic in comics">
                <h3>{{comic.title}}</h3>
                <router-link :to="{ name: 'comic', params: { id: comic.id} }">
                    <button type="button" name="button" class="btn-viewComics">View</button>
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
    name: 'Comics',

    mounted(){
        this.$store.dispatch('getComics')
    },

    computed: {
        ...mapState({
            comics: state => state.comics
        })
    },

    methods:{
         onChange(event) {
            if (event.target.value == 'Unsorted'){
                this.$store.dispatch('getComics')
            } else if (event.target.value == 'Sort by title'){
                this.$store.dispatch('getComicsSortByTitle')
            } else if (event.target.value == 'Sort by pages'){
                this.$store.dispatch('getComicsSortByPageCount')
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

.sorter{
    margin-left: 63%;
}

.sorter label{
    color:white;
}

.sort-control{
    width: 27%;
    font-size: 14px;
    height: 30px;
    color:black;
    border-radius:5px;
}

.sort-control:hover{
    border: 2px solid red;
}

h1{
    font-size:30px;
    font-family: "Marvel Regular";
    color:red;
    letter-spacing:3px;
}

.card-containerComics{
    margin-left: 11.5%;
    display: grid;
    grid-template-columns: 20% 20% 20% 20%;
    grid-gap: 30px;
}

.cardComics{
    text-align: center;
    position: relative;
    background-color:white;
    opacity: 0.8;
    border:solid 3px black;
    border-radius: 5px;
    min-height: 400px;
}

.cardComics h3{
    color:black;
    margin-top:50px;
    position: absolute;
    top:0;
    right:0;
    left:0;
}

.btn-viewComics{
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

.btn-viewComics:hover{
    border:solid 2px white;
    background-color:red;
    color:white;
    font-style:unset;
}
</style>