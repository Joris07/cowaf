<template>
    <div>
        <Calendrier
            :month="myMonth"
            :days="myDays"
            :startDay="myStartDay"
            :callback="callback"
        ></Calendrier>
    </div>
</template>
  
<script>
    import Calendrier from '@/components/Calendrier/Calendrier.vue';

    export default {
        components: { Calendrier },
        props: {
			callback: Function
		},
        data() {
            return {
                myMonth: 'Mars',
                myDays: 31,
                myStartDay: 5
            };
        },
        methods: {
            validateStep() {
                this.callback();
            },
        }
    };
</script>

<style scoped>
	#depart {
		display: flex;
		flex-direction: column;
        gap: 20px;
	}

    #position-actuelle {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    p {
        font-size: 14px;
    }

    #historique > p {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    
</style>
  