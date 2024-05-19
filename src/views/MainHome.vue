<!-- <template>
  <div id="home"></div>
</template>

<script></script>

<style scoped>
</style> -->
<template>
  <v-app>
    <v-app-bar app color="indigo" dark>
      <v-toolbar-title>MiHoYo</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-row>
          <v-col
            cols="12"
            md="6"
          >
            <v-card
              class="mx-auto"
              max-width="344"
              outlined
            >
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="overline mb-4">FEATURED</div>
                  <v-list-item-title class="headline mb-1">Game Title</v-list-item-title>
                  <v-list-item-subtitle>Explore the world of Teyvat with exciting adventures.</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-avatar
                  tile
                  size="80"
                  color="grey"
                ></v-list-item-avatar>
              </v-list-item>

              <v-card-actions>
                <v-btn text>Learn More</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-footer
      color="indigo"
      app
    >
      <span class="white--text">&copy; 2024 MiHoYo</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* Add custom styles here */
</style>
