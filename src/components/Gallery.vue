<template lang="html">
  <div class="row">
    <div class="col-md-3">

    </div>
    <div class="col-md-6">

    <div class="container">
      <div id="myCarousel" class="carousel slide" data-ride="carousel">
        <!-- Indicators -->
        <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
          <li data-target="#myCarousel" data-slide-to="3"></li>
        </ol>

        <!-- Wrapper for slides -->
        <div class="carousel-inner">
          <div class="item active">
            <img src="/src/assets/pic/1.jpeg" style="width:100%;">
          </div>

          <div class="item">
            <img src="/src/assets/pic/2.jpg"style="width:100%;">
          </div>

          <div class="item">
            <img src="/src/assets/pic/3.jpg"style="width:100%;">
          </div>

          <div class="item">
            <img src="/src/assets/pic/4.jpeg"style="width:100%;">
          </div>
        </div>

        <!-- Left and right controls -->
        <a class="left carousel-control" href="#myCarousel" data-slide="prev">
          <span class="glyphicon glyphicon-chevron-left"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" href="#myCarousel" data-slide="next">
          <span class="glyphicon glyphicon-chevron-right"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>

    </div>
    </div>


</template>

<script>
export default {
}
</script>

<style lang="css">
/*#myCarousel{
  width: 500px;
}*/

.vcenter {
    display: inline-block;
    vertical-align: middle;
    float: none;
}

.container{
  width: 100%;
  padding-bottom: 20px;
}
</style>
