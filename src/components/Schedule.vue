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
                <td class="prev-month">29</td>
                <td class="prev-month">30</td>
                <td class="prev-month">31</td>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
              </tr>

              <tr>
                <td>5</td>
                <td>6</td>
                <td>7</td>
                <td>8</td>
                <td>9</td>
                <td>10</td>
                <td>11</td>
              </tr>

              <tr>
                <td>12</td>
                <td>13</td>
                <td>14</td>
                <td>15</td>
                <td>16</td>
                <td>17</td>
                <td class="current-day"><button class="btn btn-danger" v-on:click="showmessage(18,'August','battle against lorem')">18</button></td>
              </tr>

              <tr>
                <td>19</td>
                <td>20</td>
                <td>21</td>
                <td>22</td>
                <td>23</td>
                <td>24</td>
                <td>25</td>
              </tr>

              <tr>
                <td>26</td>
                <td>27</td>
                <td>28</td>
                <td>29</td>
                <td>30</td>
                <td>31</td>
                <td class="next-month">1</td>
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
