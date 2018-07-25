<template>
  <div id='app'>
    <div>
      I am the navigation bar
      <router-link to="/home">Go to home</router-link>
      <router-link to="/test">Go to test</router-link>
    </div>
    <!-- router-view -->
    <router-view></router-view>
  </div>
</template>
