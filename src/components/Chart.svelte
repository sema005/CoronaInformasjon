<script>
    export let item
    import Highcharts from "highcharts";

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

    const chart = new Highcharts.Chart(options)
</script>

<div>
    <div id="container" style="width: 1fr; height: 1fr; margin: 0 auto"></div>
</div>

<style></style>