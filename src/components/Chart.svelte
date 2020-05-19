<script>
    export let item
    import Highcharts from "highcharts";
    import {onMount} from "svelte"

    let chart

    onMount(() => {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: "container",
                type: "pie"
            },
            title: {
                title: "Overview"
            },
            series: [
                {
                    name: "Total",
                    data: [
                        {
                            name: "Death",
                            y: item.TotalDeaths,
                            color: "red"
                        }, {
                            name: "Infected",
                            y: item.TotalConfirmed,
                            color: "orange"
                        }, {
                            name: "Recovered",
                            y: item.TotalRecovered,
                            color: "green"
                        }
                    ]
                }
            ]
        })
    })
    /*
    const options = {
        chart: {
            renterTo: "container",
            type: "pie"
        },
        title: {
            title: "Overview"
        },
        series: [
            {
                name: "Overview",
                data: [
                    {
                        name: "Death",
                        y: item.TotalDeaths,
                        color: "red"
                    }, {
                        name: "Infected",
                        y: item.TotalInfected,
                        color: "orange"
                    }, {
                        name: "Recovered",
                        y: item.TotalRecovered,
                        color: "green"
                    }
                ]
            }
        ]
    }
    */
</script>

<div id="container"></div>

<style></style>