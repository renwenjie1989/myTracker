<template>
	<div class="panel panel-default">
		<div class="panel-heading">Punch In/Out</div>
		<div class="panel-body">
			<button @click="doTheTime()" v-if="!punchStarted" class="btn btn-large btn-success">Punch In</button>
			<button @click="doTheTime()" v-else class="btn btn-large btn-success">Punch Out</button>
			<div id="punchTimer">
				Current time: {{ $data.timerCurrentTimer | date "%I:%M:%s" }}
				<br>
				{{ $data.timerCurrentTimer }}
				<br><br>
				Start time: {{ $data.timerStartedAt | date "%I:%M:%s" }}
				<br>
				{{ $data.timerStartedAt  }}
				<br><br>
				Punch time: {{ $data.timerPunch }}
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
			timerCurrentTimer: Date.now(),
			timerPunch: 0,
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
			setInterval(function() {
				that.runTime();
			},1000)
		},
		runTime: function () {
			var that = this;
			that.timerPunch += 1;
			that.niceTime(that.timerPunch);
		},
		niceTime: function(s) {
			var that = this;
			if(!s) {
				s = 0;
			}
			that.hours = parseInt( s / 3600 ) % 24;
			that.minutes = parseInt( s / 60 ) % 60;
			that.seconds = s % 60;

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
				that.seconds = "0" + that.seconds;
			} else {
				that.seconds = that.seconds;
			}

		},
		saveTime: function() {
			var that = this;
			
		}
	}

}
</script>