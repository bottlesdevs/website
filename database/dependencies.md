---
title: Dependencies for software compatibility in Bottles
---

<section class="heading">
	<div class="container large">
		<h1>Dependencies Database</h1>
		<p>Dependencies for software compatibility in Bottles</p>
		<div class="warning">
			<p>The dependency manager is an experimental feature and populating this
				databases is not our priority until it reaches a stable release.</p>
		</div>
	</div>
</section>

<section class="page">
	<div class="container large">
		<table id="dependencies">
			<thead>
				<tr>
					<th>Name</th>
					<th>Description</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
			</tbody>
		</table>
	</div>
</section>

<script>
	var getJSON = function (url, callback) {
		var xhr = new XMLHttpRequest();
		xhr.open('GET', url, true);
		xhr.responseType = 'json';
		xhr.onload = function () {
			var status = xhr.status;
			if (status === 200) {
				callback(null, xhr.response);
			} else {
				callback(status, xhr.response);
			}
		};
		xhr.send();
	};

	var table = document.getElementById("dependencies");
	
	document.addEventListener("DOMContentLoaded", function () {
		getJSON('https://raw.githubusercontent.com/bottlesdevs/dependencies/main/index.json',
			function (err, data) {
				if (err !== null) {
					console.error("Failed to fetch dependencies database index!")
					return False
				} else {
					console.info("Dependencies database index found.")
					for(var dependency in data) {
						var row = table.insertRow(0);
						var name = row.insertCell(0);
						var description = row.insertCell(1);
						name.innerHTML = dependency;
						description.innerHTML = dependency;
					}
				}
			});
	});
</script>