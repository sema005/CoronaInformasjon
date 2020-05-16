<script>

export let item

</script>


<article>
	<h1 class="white">{item.Country}</h1>
	<p class="orange">Total infected: {item.TotalConfirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
	<p class="red">Total deaths: {item.TotalDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
	<p class="green">Total recovered: {item.TotalRecovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
</article>		

<style>
	article {
		background-color: rgba(4, 4, 4, .6);
		padding: 1rem;
	}
	article:hover {
		background-color: rgba(4, 4, 4, .2);
	}
	.white {
		color: white;
	}
	.green {
		color: green;
	}
	.red {
		color: red;
	}
	.orange {
		color: orange;
	}
    a {
	    text-decoration: none;
	}


</style>