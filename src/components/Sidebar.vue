<template>
	<div class="">
		<div class="panel panel-default">
			<div class="panel-heading">Menu</div>
			<div class="panel-body">
				<div class="panel panel-default">
					<div class="panel-heading">Main</div>
					<div class="panel-body"><a v-link="'/home'">Dashboard</a></div>
				</div>

				<div class="panel panel-default">
					<div class="panel-heading">User</div>
					<ul class="list-group">
						<li class="list-group-item"><a v-link="'/create-user'">Create User</a></li>
						<li class="list-group-item"><a v-link="'/all-user'">All User</a></li>
					</ul>
				</div>

				<div class="panel panel-default">
					<div class="panel-heading">Setting</div>
					<div class="panel-body"><a v-link="'/change-password'">Change Password</a></div>
				</div>

			</div>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {

		}
	}
}
</script>