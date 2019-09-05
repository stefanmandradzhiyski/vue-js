import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { public_key } from './marvel'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    characters: [],
    character: [],
    comics: [],
    comic: [],
    favourites: [],
    url: ''
  },
  mutations: {

    getCharacters(state){
      state.characters = []
      axios.get(`http://gateway.marvel.com/v1/public/characters?apikey=${public_key}`)
      .then((result) => {
          result.data.data.results.forEach((item) => {
              state.characters.push(item)
          })
      })
      .catch((error) => {
          console.log(error)
      })
    },

    getCharacter(state, id){
      state.character = []
      axios.get(`http://gateway.marvel.com/v1/public/characters/${id}?apikey=${public_key}`)
            .then((result) => {
                result.data.data.results.forEach((item) => {
                    state.character.push(item)
                    state.url = `${item.thumbnail.path}/standard_fantastic.jpg`
                })
            })
            .catch((error) => {
                console.log(error)
            })
    },

    getCharactersFilterDescription(state){
        state.characters = []
        axios.get(`http://gateway.marvel.com/v1/public/characters?apikey=${public_key}`)
        .then((result) => {
            result.data.data.results.filter(r => r.description.length > 1).forEach((item) => {
                state.characters.push(item)
            })
        })
        .catch((error) => {
            console.log(error)
        })
    },

    getCharactersFilterImage(state){
        state.characters = []
        axios.get(`http://gateway.marvel.com/v1/public/characters?apikey=${public_key}`)
        .then((result) => {
            result.data.data.results.filter(r => r.thumbnail.path != 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available').forEach((item) => {
                state.characters.push(item)
            })
        })
        .catch((error) => {
            console.log(error)
        })
    },

    getComics(state){
      state.comics = []
      axios.get(`http://gateway.marvel.com/v1/public/comics?apikey=${public_key}`)
      .then((result) => {
          result.data.data.results.forEach((item) => {
              state.comics.push(item)
          })
      })
      .catch((error) => {
          console.log(error)
      })
    },

    getComic(state, id){
      state.comic = []
      axios.get(`http://gateway.marvel.com/v1/public/comics/${id}?apikey=${public_key}`)
            .then((result) => {
                result.data.data.results.forEach((item) => {
                    state.comic.push(item)
                    state.url = `${item.thumbnail.path}/portrait_fantastic.jpg`
                })
            })
            .catch((error) => {
                console.log(error)
            })
    },

    getComicsSortByPageCount(state){
        state.comics = []
        axios.get(`http://gateway.marvel.com/v1/public/comics?apikey=${public_key}`)
        .then((result) => {
            result.data.data.results.sort((r1, r2) => r1.pageCount < r2.pageCount ? r1.pageCount === r2.pageCount ? 0 : -1 : 1).forEach((item) => {
                state.comics.push(item)
            })
        })
        .catch((error) => {
            console.log(error)
        })
    },

    getComicsSortByTitle(state){
        state.comics = []
        axios.get(`http://gateway.marvel.com/v1/public/comics?apikey=${public_key}`)
        .then((result) => {
            result.data.data.results.sort((r1, r2) => r1.title < r2.title ? r1.title === r2.title ? 0 : -1 : 1).forEach((item) => {
                state.comics.push(item)
            })
        })
        .catch((error) => {
            console.log(error)
        })
    },

    setFavourite(state,name){
        var push = false;
        
        if (state.favourites.length <= 0){
            push = true;
        }else{
            for (var i = 0; i < state.favourites.length; i++){
                push = true;
                if (state.favourites[i] == name){
                    alert('This has already been added to favourites!')
                    push = false;
                    break;
                }
            }
        }
        
        if(push){
            state.favourites.push(name)
            alert('Successfully added to favourites!')
        }
    },

    removeFavourite(state,name){
        console.log(name)
        var index = state.favourites.indexOf(name);
        console.log(index)

        if (index > -1){
            state.favourites.splice(index,1)
            alert('You have successfully removed it from favourites')
        }
    }
  },

  actions: {
    getCharacters: context => {
      context.commit('getCharacters')
    },

    getCharacter(context,id){
      context.commit('getCharacter',id)
    },

    getCharactersFilterDescription: context => {
        context.commit('getCharactersFilterDescription')
    },

    getCharactersFilterImage: context => {
        context.commit('getCharactersFilterImage')
    },

    getComics: context => {
      context.commit('getComics')
    },

    getComic(context,id){
      context.commit('getComic',id)
    },

    getComicsSortByPageCount: context =>{
        context.commit('getComicsSortByPageCount')
    },

    getComicsSortByTitle: context => {
        context.commit('getComicsSortByTitle')
    },

    setFavourite(context,name){
        context.commit('setFavourite',name)
    },

    removeFavourite(context,name){
        context.commit('removeFavourite',name)
    }
  }
})
