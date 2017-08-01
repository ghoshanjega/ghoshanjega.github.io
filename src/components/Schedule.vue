<template lang="html">
  <div class="row">
    <div class="col-sm-3 col-md-3 col-lg-4">

    </div>
    <div class="col-sm-6 col-md-6 col-lg-4">
      <div class="">

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
      themonth: "Click on an event",
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

<style lang="css">



table {
  border-collapse: collapse;
  border-spacing: 0;
}

td {
  padding: 0;
}

/*.container {
  left: 50%;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
}*/

.calendar-container {
  position: relative;

}



.calendar-container header {
  border-radius: 1em 1em 0 0;
  background: rgb(0, 0, 0);
  color: #fff;
  padding: 3em 2em;
}

.day {
  font-size: 8em;
  font-weight: 900;
  line-height: 1em;
  text-shadow: none;
  text-align: left;
}

.month {
  font-size: 4em;
  line-height: 1em;
  text-transform: lowercase;
  text-align: left;
}

.eventday{
  font-size: 3em;
  line-height: 1em;
  text-transform: lowercase;
  text-align: right;
  background-color: red;
}

.btn-danger{
  padding: 0px 5px;
}

.calendar {
  background: #fff;
  border-radius: 0 0 1em 1em;
  -webkit-box-shadow: 0 2px 1px rgba(0, 0, 0, .2), 0 3px 1px #fff;
  box-shadow: 0 2px 1px rgba(0, 0, 0, .2), 0 3px 1px #fff;
  color: #555;
  text-shadow: none;
}

/*.calendar thead {
  padding-top: 20px;
  color: #e66b6b;
  font-weight: 700;
  text-transform: uppercase;
  padding-top: : 0.7em;
  padding-bottom: 0.7em;
}

.calendar td {
  padding-top: : 0.7em;
  padding-bottom: 0.7em;
  text-align: center;
}*/


.current-day {
  color: #e66b6b;
}

.prev-month,
.next-month {
  color: #cacaca;
}



</style>
