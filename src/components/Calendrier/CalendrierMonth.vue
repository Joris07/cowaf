<template>
	<p id="month-name">{{ month }}</p>
		<div id="month-days">
			<p v-for="emptyDay in startDay - 1" class="month-day-empty"></p>
			<p v-for="day in days" v-on:click="showTime" class="month-day">{{ day }}</p>
		</div>
</template>

<script>

	export default {
		name: 'CalendrierMonth',
		props: {
			month: String,
			days: Number,
			startDay: Number,
			showTime: Function,
			hideTime: Function,
		},
		methods: {
			showTime(event) {
				event.target.classList.toggle("clicked");
				document.querySelectorAll(".clicked").forEach(el => {
					if (el != event.target) {
						el.classList.remove("clicked");
					}
				})
				if (event.target.classList.contains("clicked")) {
					this.showTime(event)
				} else {
					this.hideTime();
				}
			}
		}
	}
</script>

<style scoped>
.month-day {
	color: black;
	font-family: Fellix;
	font-size: 16px;
	font-weight: 400;
	text-align: center;
	width: 35px;
	padding: 7px;
	margin: auto;
	cursor: pointer;
}

.clicked{
	color: #09458E;
	font-weight: 700;
	background-color: #bad3f3;
	border-radius: 100%;
}

#month-name {
	color: #09458E;
	font-family: Fellix;
	font-size: 21px;
	font-weight: 700;
	margin-bottom: 20px;
}

#month-days {
	display: grid;
	grid-template-columns: repeat(7, 1fr);
	row-gap: 25px;
}
</style>