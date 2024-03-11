<template>
	<BackButton></BackButton>
	<div id="main">
		<h1 id="question">Quand partez-vous ?</h1>
		<div id="days">
			<p class="day">lun.</p>
			<p class="day">mar.</p>
			<p class="day">mer.</p>
			<p class="day">jeu.</p>
			<p class="day">ven.</p>
			<p class="day">sam.</p>
			<p class="day">dim.</p>
		</div>
		<div id="calendar">
			<div id="month">
				<CalendrierMonth :month="month" :days="days" :startDay="startDay" :showTime="showTime" :hideTime="hideTime" :canShowTime="canShowTime"></CalendrierMonth>
			</div>
		</div>
		<div v-if="canShowTime === true"><CalendrierTime :hideTime="hideTime"></CalendrierTime></div>
		<Nav></Nav>
	</div>
</template>

<script>
	import Nav from '@/components/Nav.vue';
	import BackButton from '@/components/BackButton.vue';
	import CalendrierMonth from '@/views/Calendrier/CalendrierMonth.vue';
	import CalendrierTime from './CalendrierTime.vue';

	export default {
		name: 'Calendrier',
		components: {Nav, BackButton, CalendrierMonth, CalendrierTime},
		data() {
			return {
				month: "Janvier",
				days: 31,
				startDay: 2,
				//PAS FAIRE CA
				// showTime: (event) => showTime(event),
				canShowTime: false
			}
		}, 
		methods : {
			//FAIRE CA
			showTime(event) {
				//event est là si on a besoin de récupérer le jour cliqué event.target.textContent
				this.canShowTime = true;
			},
			hideTime() {
				this.canShowTime = false;
			}
		}
	};

</script>

<style scoped>

#days {
	display: grid;
	grid-template-columns: repeat(7, 1fr);
}
#main {
	margin-top: 80px;
	padding: 0 30px;
}
#question {
	color: var(--color-blue);
	font-size: 30px;
	font-weight: 700;
}

#days {
	margin: 30px 0;
}

.day {
	color: var(--color-blue);
	font-size: 16px;
	font-weight: 500;
	text-align: center;
}
</style>