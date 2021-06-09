<template>
  <div>
      <div class="bg-green-400 h-80 rounded-lg overflow-hidden overflow-y-scroll">
      <h1>Airing Today</h1>
    <div v-if="Page">
    <div class="flex flex-col my-10" v-for="(item, index) in Page.airingSchedules" :key="index">
        <div class="bg-white margin-5 flex">
            <div><img :src="item.media.coverImage.medium" alt="coverImage"></div>
            <div><p class="text-black inline-block">{{item.media.title.romaji}}</p><br>
            <p class="text-black inline-block">{{AirTime(item)}}</p></div>
        </div>
    </div>
    </div>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
name: 'AiringToday',
mounted(){
// console.log(new Date().setHours(23,59,59).getTime())
},
  data(){
      return{
          anime: 'MANGA',
      }
  },
  methods: {
      AirTime(item){
          let date = new Date(item.airingAt*1000);
          let minute = date.getMinutes() == 0 ? '00' : date.getMinutes()
          return date.getHours()+':'+minute;
      }
  },
   apollo: {
    // Simple query that will update the 'hello' vue property
    Page:{
      query: gql`query getAiringToday($start: Int, $end: Int){
        Page(perPage: 40){
            airingSchedules(airingAt_greater:$start,airingAt_lesser:$end, sort: TIME, notYetAired: true){
            media{
                id
                title{
                    romaji
                }
                format
                coverImage{
                    large
                    medium
                }
            }
            timeUntilAiring
            episode
            airingAt
            }
        }
    }`,
    variables() {
      return {start: parseInt(new Date().getTime() / 1000), end: parseInt(new Date().setHours(23,59,59)/ 1000) }
    }
    },
  },
}
</script>

<style>

</style>