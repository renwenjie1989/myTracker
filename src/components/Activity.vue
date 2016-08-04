<template>
	<div class="panel panel-default">
		<div class="panel-heading">Member Activity</div>
		<div class="panel-body">
			 <div class="form-group">
			 	<label for="">Date from: </label>
                <div class='input-group date' id='datetimepicker1'>
                    <input type='text' class="form-control" />
                    <span class="input-group-addon">
                        <span class="glyphicon glyphicon-calendar"></span>
                    </span>
                </div>
            </div>

			<div class="form-group">
			 	<label for="">To: </label>
                <div class='input-group date' id='datetimepicker1'>
                    <input type='text' class="form-control" />
                    <span class="input-group-addon">
                        <span class="glyphicon glyphicon-calendar"></span>
                    </span>
                </div>
            </div>
			<button class="btn btn-large btn-primary">My Report</button>
		</div>
	</div>
</template>

