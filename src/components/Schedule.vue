<template lang="html">
  <div class="row">
    <div class="col-sm-3 col-md-3 col-lg-4">

    </div>
    <div class="col-sm-4 col-md-6 col-lg-4">
      <div class="container" style="background-color:rgba(103, 103, 103, 0.47); width:100%">

        <div class="calendar-container">

          <header>

            <div class="day">{{theday}}</div>
            <div class="span eventday">
              {{themessage}}
            </div>
            <div class="month">{{themonth}}</div>

          </header>

          <table class="table table-responsive calendar" style="width:100%;">

            <thead>

              <tr>

                <td>Mon</td>
                <td>Tue</td>
                <td>Wed</td>
                <td>Thu</td>
                <td>Fri</td>
                <td>Sat</td>
                <td>Sun</td>

              </tr>

            </thead>

            <tbody>

              <tr>
                <td>3</td>
                <td>4</td>
                <td>51</td>
                <td>6</td>
                <td>7</td>
                <td>8</td>
                <td>9</td>
              </tr>

              <tr>
                <td>10</td>
                <td>11</td>
                <td>12</td>
                <td>13</td>
                <td>14</td>
                <td>15</td>
                <td>16</td>
              </tr>

              <tr>
                <td>17</td>
                <td>18</td>
                <td>19</td>
                <td>20</td>
                <td>21</td>
                <td>22</td>
                <td class="current-day"><button class="btn btn-danger" v-on:click="showmessage(23,'July','Complete testing')">23</button></td>
              </tr>

              <tr>
                <td class="current-day"><button class="btn btn-danger" v-on:click="showmessage(24,'July','Packing')">24</button></td>
                <td>25</td>
                <td class="current-day"><button class="btn btn-danger" v-on:click="showmessage(26,'July','Shenzhen, team registering')">26</button></td>
                <td>27</td>
                <td class="current-day"><button class="btn btn-danger" v-on:click="showmessage(27,'July','Wildcard round')">28</button></td>
                <td class="current-day"><button class="btn btn-danger" v-on:click="showmessage(28,'July','Wildcard round')">29</button></td>
                <td>30</td>
              </tr>

              <tr>
                <td>31</td>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td class="current-day"><button class="btn btn-danger" v-on:click="showmessage(5,'August','Finals')">5</button></td>
                <td class="current-day"><button class="btn btn-danger" v-on:click="showmessage(6,'August','Finals')">6</button></td>
              </tr>



            </tbody>

          </table>

          <!-- <div class="ring-left"></div>
          <div class="ring-right"></div> -->

        </div> <!-- end calendar-container -->

      </div> <!-- end container -->
    </div>
    <div class="col-sm-3 col-md-3 col-lg-4">

    </div>
  </div>

</template>

<script>
export default {
  name: 'app',
  data() {
    return{
      theday: '',
      themonth: "Click on a event",
      themessage:""
    }

  },
  methods: {
    showmessage : function (day, month, message) {
      this.theday = day;
      this.themonth = month;
      this.themessage = message;
    }
  }
}

</script>
