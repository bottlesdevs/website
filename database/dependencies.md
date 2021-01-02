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
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Description</th>
					<th>Category</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody id="dependencies">
			</tbody>
		</table>
	</div>
</section>

<script>
	var table = document.getElementById("dependencies");
	document.addEventListener("DOMContentLoaded", function () {
		fetch('https://raw.githubusercontent.com/bottlesdevs/dependencies/main/index.json')
			.then(res => res.json())
			.then((data) => {
				console.info("Dependencies database index found.");
				for (var item in data) {
					dependency = data[item];

					var row = table.insertRow(0);
					var name = row.insertCell(0);
					var description = row.insertCell(1);
					var category = row.insertCell(2);
					var actions = row.insertCell(3);

					name.innerHTML = `<b>${item}</b>`;
					description.innerHTML = dependency["Description"];
					actions.innerHTML = `\
						<a href='https://github.com/bottlesdevs/dependencies/blob/main/${item}.json'>Details</a> | \
						<a href='https://github.com/bottlesdevs/dependencies/issues/new/choose'>Report problem</a>`;
					category.innerHTML = `<span class="tag tag-${dependency["Category"]}">${dependency["Category"]}</span>`;
				}
			})
			.catch(err => {
				console.error("Failed to fetch Dependencies database index!");
				throw err
			});
	});
</script>