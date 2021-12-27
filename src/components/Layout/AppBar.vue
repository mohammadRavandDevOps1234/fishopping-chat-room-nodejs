<template>
  <div>
    <v-app-bar color="deep-purple accent-4" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <router-link class="" to="/"> <v-btn>چت روم</v-btn> </router-link>

      <v-spacer></v-spacer>

      <v-btn color="purple" class="mx-2">
        ورود
        <v-icon>mdi-login</v-icon>
      </v-btn>
    
      <v-btn color="purple" class="mx-2">
        ثبت نام
        <v-icon >mdi-account-plus</v-icon>
      </v-btn>

      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn dark v-bind="attrs" v-on="on" icon>
            <v-badge
              :content="messages"
              :value="messages"
              color="green"
              overlap
            >
              <v-icon large> mdi-bell </v-icon>
            </v-badge>
          </v-btn>
        </template>
        <v-list dense>
      <v-subheader class="justify-content-center">پیام های جدید</v-subheader>
      <v-divider></v-divider>
      <v-list-item-group
        v-model="selectedItem"
        color="primary"
      >
        <v-list-item
          v-for="(item, i) in listItems"
          :key="i"
        >
          <v-list-item-icon>
            <v-icon v-text="'mdi-account-group'"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
            
          </v-list-item-content>
          <v-list-item-icon>
          <v-badge
              :content="12"
              :value="12"
              color="green"
              overlap
            >
            <v-icon v-text="'mdi-chat'"></v-icon>
            </v-badge>
          </v-list-item-icon>
        </v-list-item>
      </v-list-item-group>
    </v-list>
      </v-menu>

    <p class="px-1"></p>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute app temporary right>
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>John Leider</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
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
  </div>
</template>

<script>
export default {
  data: () => ({
    messages: "23",
    drawer: false,
    group: null,
    listItems: [
        { text: 'فروشگاه های نزدیک' },
        { text: 'فروشگاه ه ای شهر'}
      ],
    items: [
      { title: "Home", icon: "mdi-view-dashboard" },
      { title: "About", icon: "mdi-forum" },
    ],
    selectedItem:''
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>
