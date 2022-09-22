<script>
import countTo from "vue-count-to";
/**
 * Stat component
 */
export default {
    components: {
        countTo
    },
    data() {
        return {

            currency:{
                usd: 'USD',
                zmw:'ZMW',
                eur:'EUR'
            },
            series: [{
                data: [25, 66, 41, 89, 63, 25, 44, 20, 36, 40, 54]
            }],
            chartOptions: {
                fill: {
                    colors: ["#5b73e8"]
                },
                chart: {
                    type: "bar",
                    sparkline: {
                        enabled: true
                    }
                },
                plotOptions: {
                    bar: {
                        columnWidth: "50%"
                    }
                },
                labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                xaxis: {
                    crosshairs: {
                        width: 1
                    }
                },
                tooltip: {
                    fixed: {
                        enabled: false
                    },
                    x: {
                        show: false
                    },
                    y: {
                        title: {
                            formatter: function (seriesName) {
                                return "";
                            }
                        }
                    },
                    marker: {
                        show: false
                    }
                }
            },
            growthChartOptions: {
                fill: {
                    colors: ["#f1b44c"]
                },
                chart: {
                    type: "bar",
                    sparkline: {
                        enabled: true
                    }
                },
                plotOptions: {
                    bar: {
                        columnWidth: "50%"
                    }
                },
                labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                xaxis: {
                    crosshairs: {
                        width: 1
                    }
                },
                tooltip: {
                    fixed: {
                        enabled: false
                    },
                    x: {
                        show: false
                    },
                    y: {
                        title: {
                            formatter: function (seriesName) {
                                return "";
                            }
                        }
                    },
                    marker: {
                        show: false
                    }
                }
            },
            orderseries: [70],
            orderRadial: {
                fill: {
                    colors: ["#34c38f"]
                },
                chart: {
                    sparkline: {
                        enabled: true
                    }
                },
                dataLabels: {
                    enabled: false
                },
                plotOptions: {
                    radialBar: {
                        hollow: {
                            margin: 0,
                            size: "29%"
                        },
                        track: {
                            margin: 0
                        },
                        dataLabels: {
                            show: false
                        }
                    }
                }
            },
            customerseries: [55],
            customerRadial: {
                fill: {
                    colors: ["#5b73e8"]
                },
                chart: {
                    sparkline: {
                        enabled: true
                    }
                },
                dataLabels: {
                    enabled: false
                },
                plotOptions: {
                    radialBar: {
                        hollow: {
                            margin: 0,
                            size: "16%"
                        },
                        track: {
                            margin: 0
                        },
                        dataLabels: {
                            show: false
                        }
                    }
                }
            }
        };
    }
};
</script>

<template>
<div class="row">
    <div class="col-md-6 col-xl-3">
        <b-card
        style="max-width: 20rem;">
            <div class="card-body">
                 <div class="float-end mt-2">
                     <i class="bx bx-car"></i>
                </div> 
                <div>
                    <h4 class="mb-1 mt-1">
                       
                        <span data-plugin="counterup">
                            <countTo :startVal="0" :endVal="125" :duration="8000"></countTo>
                        </span>
                    </h4>
                    <p class="text-muted mb-0">Total Cars</p>
                </div>
                <p class="text-muted mt-3 mb-0">
                    <span class="text-success me-1">
                        <i class="mdi mdi-arrow-up-bold me-1"></i>2.65%
                    </span>
                    since last week
                </p>
            </div>
        </b-card>
    </div>
    <div class="col-md-6 col-xl-3">
        <b-card
        style="max-width: 20rem;">
            <div class="card-body">
                 <div class="float-end mt-2 mx-4">
                   <i class="bx bx-gas-pump"></i>
                </div> 

                <div>
                    <h4 class="mb-1 mt-1">
                        <span data-plugin="counterup">
                            <countTo :startVal="0" :endVal="9" :duration="7000"></countTo>
                        </span>
                    </h4>
                    <p class="text-muted mb-0">Engaged</p>
                </div>
                <p class="text-muted mt-3 mb-0">
                    <span class="text-danger me-1">
                        <i class="mdi mdi-arrow-down-bold me-1"></i>0.82%
                    </span>
                    since last week
                </p>
            </div>
        </b-card>
    </div>
    <!-- end col-->

    <div class="col-md-6 col-xl-3">
        <b-card
        style="max-width: 20rem;">
            <div class="card-body">
                <div class="float-end mt-2 mx-4">
                    <i class="bx bx-line-chart"></i>
                </div> 
                <div>
                    <h4 class="mb-1 mt-1">
                        <span data-plugin="counterup">
                            <countTo :startVal="0" :endVal="4" :duration="6000"></countTo>
                        </span>
                    </h4>
                    <p class="text-muted mb-0">In Garage</p>
                </div>
                <p class="text-muted mt-3 mb-0">
                    <span class="text-danger me-1">
                        <i class="mdi mdi-arrow-down-bold me-1"></i>6.24%
                    </span>
                    since last week
                </p>
            </div>
        </b-card>
    </div>

    <div class="col-md-6 col-xl-3">
        <b-card
        style="max-width: 20rem;">
            <div class="card-body">
                <div class="float-end mt-2">

                    <i class="bx bx-shield-quarter"></i>
                </div>
                <div>
                    <h4 class="mb-1 mt-1">
                        <span data-plugin="counterup">
                            <countTo :startVal="0" :endVal="4" :duration="6000"></countTo>
                        </span>
                    </h4>
                    <p class="text-muted mb-0">Available</p>
                </div>
                <p class="text-muted mt-3 mb-0">
                    <span class="text-danger me-1">
                        <i class="mdi mdi-arrow-down-bold me-1"></i>6.24%
                    </span>
                    since last week
                </p>
            </div>
        </b-card>
    </div>
    <!-- <div class="col-md-6 col-xl-3">
        <div class="card">
            <div class="card-body">
                <div class="float-end mt-2">
                    <apexchart class="apex-charts" dir="ltr" width="70" height="40" :options="growthChartOptions" :series="series"></apexchart>
                </div>
                <div>
                    <h4 class="mb-1 mt-1">
                        +
                        <span data-plugin="counterup">12.58</span>%
                    </h4>
                    <p class="text-muted mb-0">Available</p>
                </div>
                <p class="text-muted mt-3 mb-0">
                    <span class="text-success me-1">
                        <i class="mdi mdi-arrow-up-bold me-1"></i>10.51%
                    </span>
                    since last week
                </p>
            </div>
        </div>
    </div> -->
    <!-- end col-->
</div>
<!-- end row-->
</template>
