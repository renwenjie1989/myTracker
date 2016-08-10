<template>
	<div class="panel panel-default">
		<div class="panel-heading">Time Track</div>
		<div class="panel-body">
			<button @click="doTheTime" v-if="!punchStarted" class="btn btn-large btn-success">Start</button>
			<button @click="saveToTime" v-else class="btn btn-large btn-danger">Stop</button>
			<div id="punchTimer">
				Current time: {{ $data.timerCurrentTime | date "%I:%M:%s" }}
				<br>
				{{ $data.timerCurrentTime }}
				<br><br>
				Start time: {{ $data.timerStartedAt | date "%I:%M:%s" }}
				<br>
				{{ $data.timerStartedAt  }}
				<br><br>
				Punch time: 
				<br>
				{{ hours }}:{{ minutes }}:{{ seconds }}
			</div>
		</div>
	</div>
</template>

<script>
export default {
	el: '#punchTimer',
	data () {
		return {
			timerStartedAt: Date.now(),
			timerCurrentTime: Date.now(),
			hours: "00",
			minutes: "00",
			seconds: "00",
			punchStarted: false
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
	}

}
</script>