<template>
    <menu></menu>

    <div class="container">
      <div class="col-sm-3 col-lg-3">
        <sidebar></sidebar>
      </div>
      <div class="col-sm-9 col-lg-9">
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
import Sidebar from './components/Sidebar'
import Menu from './components/Menu'

import store from './vuex/store'

export default {
  components: {
    'sidebar': Sidebar,
    'menu': Menu
  },
  store: store
}
</script>

<style>
body {
  font-size: 14px;
  display: block;
}

</style>
