<template>
  <div>
    <h1>WOWOWOWOWOWOWO</h1>
    <div v-if="Page">
    <div v-for="(item, index) in Page.media" :key="index">
    {{item}}
    <br />
    <br />
    </div>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'
export default {
  name: 'test',
  data(){
      return{
          anime: null
      }
  },
   apollo: {
    // Simple query that will update the 'hello' vue property
    Page: gql`query {
        Page(perPage: 20){
            media(sort: POPULARITY_DESC, type: MANGA){
                id
                type
                title {
                    romaji
                    english
                    native
                    userPreferred
                }
            }
        }
    }`,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
