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
    	  <li><a href="#"><span class="glyphicon glyphicon-time"></span> 00:00:00</a></li>
    	  <li v-show="!timerValue.timerStarted"><a href="#"><span class="glyphicon glyphicon-time"></span> {{ hours }}:{{ minutes }}:{{ seconds }}</a></li>
          <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
          <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
        </ul>
      </div>
    </nav>
</template>

<script>
import { getCount } from '../vuex/getters'

export default {
	el: '#punchTimer',
	data () {
		return {
			timerStartedAt: Date.now(),
			timerCurrentTime: Date.now(),
			hours: "00",
			minutes: "00",
			seconds: "00",
		}
	},
	methods: {
		doTheTime: function (){
			var that = this;
			that.punchStarted = !that.punchStarted;
			that.timerStartedAt = Date.now();
			that.saveFromTime();
			setInterval(function() {
				that.timerCurrentTime = Date.now();
				that.runTime(that.timerStartedAt, that.timerCurrentTime);
			},1000)
		},
		runTime: function (fromDate, toDate) {
			var that = this;
			var diff = toDate - fromDate;
			that.niceTime(diff);
		},
		niceTime: function(s) {
			var that = this;
			if(!s) {
				s = 0;
			}
			that.hours = parseInt( s / 3600 / 1000 ) % 24;
			that.minutes = parseInt( s / 60 / 1000 ) % 60;
			that.seconds = Math.floor(s / 1000) % 60;

			if(that.hours < 10) {
				that.hours = "0" + that.hours;
			} else {
				that.hours = that.hours;
			}

			if(that.minutes < 10) {
				that.minutes = "0" + that.minutes;
			} else {
				that.minutes = that.minutes;
			}

			if(that.seconds < 10) {
				that.seconds = "0" + that.seconds.toFixed(0);
			} else {
				that.seconds = that.seconds.toFixed(0);
			}

		},
		saveFromTime: function() {
			var that = this;
		},
		saveToTime: function() {
			var that = this;
			that.punchStarted = !that.punchStarted;
		}
	},
	vuex: {
		getters: {
			timerValue: getCount
		}
	}
}
</script>