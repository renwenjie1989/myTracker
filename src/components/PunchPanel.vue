<template>
	<div class="panel panel-default">
		<div class="panel-heading">Punch In/Out</div>
		<div class="panel-body">
			<button @click="doTheTime()" v-if="!punchStarted" class="btn btn-large btn-success">Punch In</button>
			<button @click="doTheTime()"  class="btn btn-large btn-success">Punch Out</button>
			<div id="punchTimer">
				Current time: {{ $data.timerCurrentTimer | date "%I:%M:%s" }}
				<br>
				Start time: {{ $data.timerStartedAt | date "%I:%M:%s" }}
				<br>
				Punch time: {{ $data.timerPunch | date "%I:%M:%s" }}

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
			timerPunch: new Date(1970, 1, 1),
			punchStarted: false
		}
	},
	methods: {
		doTheTime: function (){
			var that = this;
			punchStarted = true;
			setInterval(function() {
				that.timerCurrentTimer = Date.now();
				that.timerPunch = that.timerCurrentTimer - that.timerStartedAt;
			},1000)
		}
	}

}
</script>