<template>
	<div id="calendrier">
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
			<CalendrierMonth
				:month="month"
				:days="days"
				:startDay="startDay"
				:showTime="showTime"
				:hideTime="hideTime"
				:canShowTime="canShowTime"
			></CalendrierMonth>
			</div>
		</div>
		<div v-if="canShowTime === true">
			<CalendrierTime :hideTime="hideTime" :callback="callback"></CalendrierTime>
		</div>
	</div>
  </template>
  
<script>
  import CalendrierMonth from '@/components/Calendrier/CalendrierMonth.vue';
  import CalendrierTime from './CalendrierTime.vue';
  
  export default {
		name: 'Calendrier',
		components: { CalendrierMonth, CalendrierTime },
		data() {
            return {
                canShowTime: false
            };
        },
		props: {
			month: String,
			days: Number,
			startDay: Number,
			callback: Function
		},
		methods: {
			showTime(event) {
				this.canShowTime = true;
			},
			hideTime() {
				this.canShowTime = false;
			},
		},
  };
  </script>
  
  <style scoped>
	#days {
		display: grid;
		grid-template-columns: repeat(7, 1fr);
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
  