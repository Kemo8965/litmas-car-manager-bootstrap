<script>
import Stat2 from '../components/widgets/Stat2.vue';
import SalesAnalytics from '../components/widgets/Sales-analytics.vue';
import Stat from '../components/widgets/Stat.vue';
/**
 * Dashboard component
 */
export default {
    head() {
        return {
            title: `${this.title} |Litmas Car Manager`,
        };
    },
    data() {
        return {
            title: "Dashboard",
            items: [{
                    text: "Litmas Car Manager",
                }, {
                    text: "Dashboard",
                    active: true,
                },
            ],
        };
    },
    middleware: "authentication",
    components: { Stat2, SalesAnalytics, Stat }
};
</script>

<template>
<div>
    <PageHeader :title="title" :items="items" />

   

    <div class="row">
        <Stat/>
        <Stat2 />    
    </div>

    <!-- <div class="row">
        <Stat3 />    
    </div> -->

    <!-- <div class="row">
        <SalesAnalytics />
    </div> -->

    <!-- <div class="row">
        <TopUsers />
        <Activity />
        <SocialSource />
    </div> -->
</div>
</template>

<style></style>
