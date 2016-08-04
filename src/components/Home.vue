<template>
	<div class="">
		<div class="">
			<ol class="breadcrumb">
				<li class="breadcrumb-item"><a href="#">Home</a></li>
				<li class="breadcrumb-item"><a href="#">Dashboard</a></li>
			</ol>
		</div>

		<div class="col-sm-6">
			<punch-panel></punch-panel>
		</div>

		<div class="col-sm-6">
			<activity></activity>
		</div>

		<div class="col-sm-6">
			<notice></notice>
		</div>
	</div>
</template>

<script>
import PunchPanel from './PunchPanel'
import Activity from './Activity'
import Notice from './Notice'

export default {
	components: {
		'punch-panel': PunchPanel,
		'activity': Activity,
		'notice': Notice
	},
	data () {
		return {

		}
	}
}
</script>

<style scoped>
	body {
		font-size: 16px;
		background-color: blue;
	}
</style>