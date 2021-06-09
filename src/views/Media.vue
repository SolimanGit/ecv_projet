<template>
  <div>
    <div class="h-80" v-if="Media">
      <div class="filter brightness-75"><img :src="Media.bannerImage" alt="banner_media"></div>
            <div class="grid grid-cols-4 grid-rows-2 place-items-center">
              <div class="col-span-1 w-44 position relative bottom-20"><img :src="Media.coverImage.large" alt=""></div>
              <div class="col-start-2 col-end-4 bg-gray-200 rounded-md p-5"><p class="text-sm text-justify">{{Media.description}}</p></div>
              <div class="col-start-1 text-left space-y-2 bg-gray-100 p-9 rounded-lg">
                <div class="leading-5"><p class="font-semibold text-gray-600">Format</p><p class="text-gray-500 pl-2">{{Media.format}}</p></div>
                <div class="leading-5"><p class="font-semibold text-gray-600">Status</p><p class="text-gray-500 pl-2">{{Media.status}}</p></div>
                <div v-if="Media.type=='ANIME'">
                  <div class="leading-5"><p class="font-semibold text-gray-600">Number of episodes</p><p class="text-gray-500 pl-2">{{Media.episodes}}</p></div>
                  <div class="leading-5"><p class="font-semibold text-gray-600">Season</p><p class="text-gray-500 pl-2">{{Media.season}}</p></div>        
                </div>   
                <div v-else>
                  <div class="leading-5"><p class="font-semibold text-gray-600">Number of chapters</p><p class="text-gray-500 pl-2">{{Media.chapters}}</p></div>
                  <div class="leading-5"><p class="font-semibold text-gray-600">Number of volumes</p><p class="text-gray-500 pl-2">{{Media.volumes}}</p></div>    
                </div>    
              </div>
          </div>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'
export default {
name: 'Media',
data(){
  return {
    id: this.$route.params.id
  }
},
   apollo: {
    // Simple query that will update the 'hello' vue property
    Media:{
      query: gql`query getMedia($id: Int){
        Media(id: $id){
            id
            type
            format
            status
            episodes
            duration
            season
            chapters
            volumes
            startDate{
              year
              month
            }
            endDate{
              year
              month
            }
            coverImage{
              large
              medium
            }
            bannerImage
            title {
                romaji
                english
                native
                userPreferred
            }
            description
        }
      }`,
    variables() {
      return {id: this.id}
    }
    },
  },
}
</script>