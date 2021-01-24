---
title: Dependencies for software compatibility in Bottles
---

<section class="heading">
	<div class="container large">
		<h1>Installers Database</h1>
		<p>Repository for programs installation in Bottles</p>
		<div class="warning">
			<p>The installer manager is an experimental feature and populating this
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
			<tbody id="installers">
			</tbody>
		</table>
	</div>
</section>

<script>
	var table = document.getElementById("installers");
	document.addEventListener("DOMContentLoaded", function () {
		fetch('https://raw.githubusercontent.com/bottlesdevs/programs/main/index.json')
			.then(res => res.json())
			.then((data) => {
				console.info("Installers database index found.");
				for (var item in data) {
					installer = data[item];

					var row = table.insertRow(0);
					var name = row.insertCell(0);
					var description = row.insertCell(1);
					var category = row.insertCell(2);
					var actions = row.insertCell(3);

					name.innerHTML = `<b>${item}</b>`;
					description.innerHTML = installer["Description"];
					category.innerHTML = `<span class="tag tag-${installer["Category"]}">${installer["Category"]}</span>`;
					actions.innerHTML = `\
						<a href='https://github.com/bottlesdevs/programs/blob/main/${installer["Category"]}/${item}.json'>Details</a> | \
						<a href='https://github.com/bottlesdevs/programs/issues/new/choose'>Report problem</a>`;
				}
			})
			.catch(err => {
				console.error("Failed to fetch Installers database index!");
				throw err
			});
	});
</script>