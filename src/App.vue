<template>
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
          <a href="#" class="navbar-brand">Time Tracker</a>
        </div>
        <ul class="nav navbar-nav">
          <li class="active"><a href="#">Home</a></li>
          <li><a href="#">User</a></li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
          <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
        </ul>
      </div>
    </nav>

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

export default {
  components: {
    'sidebar': Sidebar
  }
}
</script>

<style>
body {
  font-size: 14px;
  display: block;
}

</style>
