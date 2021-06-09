<template>
  <div>
    <div class="bg-purple-800 rounded-lg h-80 overflow-x-scroll">
      <h1>Classement Popularité {{type}}</h1>
  
      <div class=" flex" v-if="Page">
        <div class="flex flex-nowrap mx-8" v-for="(item, index) in Page.media" :key="index">
          <router-link :to="'/Media/'+item.id">  
          <div class="border-2 border-red-600 inline-block">
          <div class=" overflow-hidden h-56 w-40">
            <img class="h-full w-full" :src='item.coverImage.large' alt="cover_media">
          </div>
          <p class="text-white w-40 truncate ">{{item.title.userPreferred}}</p>
        </div>
        </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'
export default {
  name: 'Popularity',
  props: ['type'],
  data(){
      return{
          anime: 'MANGA'
      }
  },
   apollo: {
    // Simple query that will update the 'hello' vue property
    Page:{
      query: gql`query getPopularity($type: MediaType){
          Page(perPage: 20){
              media(sort: POPULARITY_DESC, type: $type){
                  id
                  type
                  coverImage{
                    large
                    medium
                  }
                  title {
                      romaji
                      english
                      native
                      userPreferred
                  }
              }
          }
      }`,
    variables() {
      return {type: this.type}
    }
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
