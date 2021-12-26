<template>
  <div class="home">
    <v-row class="fill-height height-100vh">
      <v-col cols="2"  sm="2"  md="2"   lg="2" xl="2"    class="info">
        <!-- show groups -->
        <v-navigation-drawer  permanent :expand-on-hover="windowWidth">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                Application
              </v-list-item-title>
              <v-list-item-subtitle> subtext </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <v-list dense nav>
            <v-list-item v-for="item in items" :key="item.title" link>
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-col>
      <v-col sm="8"  md="9"   lg="10" xl="10"   class=" postion-relative" >
        <!-- show chat message -->

        <!-- show chat input -->
        <chat-input></chat-input>
      </v-col>

      
    </v-row>
  </div>
</template>

<script>
// @ is an alias to /src
import ChatInput from '../components/Chat/ChatInput.vue'

export default {
  name: "Home",
  data(){
    return {
      windowWidth: window.innerWidth<800,
       items: [
          { title: 'گروه مصرف کنندگان نزدیک', icon: 'mdi-account-multiple' },
          { title: 'مصرف کنندگان شهر', icon: 'mdi-account-search' },
          { title: 'About', icon: 'mdi-help-box' },
        ],
        right: null,
    }
  },

  
  components: {ChatInput},
};
</script>

<style scoped>

.height-100vh{
  min-height:85vh;
}
.postion-relative{
  position: relative;
}
</style>
