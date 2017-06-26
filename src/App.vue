<template>
  <div id="app">
    <header class="clearfix">
    <div class="container">
			<div class="header-left">
        <img src="/src/assets/pic/enterprizeblack.jpeg" alt="" style="width:200px;">
			</div>
			<div class="header-right">
				<label for="open">
					<span class="hidden-desktop"></span>
				</label>
				<input type="checkbox" name="" id="open">
				<nav>
          <ul class="nav masthead-nav">
            <li><button class="btn1"><router-link :to="{ name: 'Home', params: {} }">Home</router-link></button></li>
            <li><button class="btn1"><router-link :to="{ name: 'Schedule', params: {} }">Schedule</router-link></button></li>
            <li><button class="btn1"><router-link :to="{ name: 'Team', params: {} }">Team</router-link></button></li>
            <li><button class="btn1"><router-link :to="{ name: 'Gallery', params: {} }">Gallery</router-link></button></li>
          </ul>
				</nav>
			</div>
		</div>
	</header>
  <div class="middlecontainer">
  <router-view></router-view>
  </div>

</div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}

</script>



<style lang="scss">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 0;
    height: 100%;
}

</style>
