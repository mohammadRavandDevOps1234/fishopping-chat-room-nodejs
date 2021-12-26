<template>
  <v-footer class="primary px-0" absolute>
    <v-card flat tile width="100%" class="lighten-1 text-center">
      <v-card-text>
        <v-textarea  rows="2" label="متن پیام ">
          <v-icon slot="append" color="info"> mdi-message </v-icon>
          <v-btn slot="prepend" >
            <v-icon color="blue"> mdi-send </v-icon>
          </v-btn>
          
          </v-textarea>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {};
</script>
