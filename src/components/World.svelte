<script>
	import { favorite } from "../routes/index.svelte"
	export let item
	export let addToFavorite

</script>


<article >
	<h1 class="white">{item.Country}</h1>
	<p class="text orange">Total infected: {item.TotalConfirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
	<p class="text red">Total deaths: {item.TotalDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
	<p class="text green">Total recovered: {item.TotalRecovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
	<button on:click={addToFavorite(item)} class="btn">Add to favorite</button>
</article>		

<style>
	article {
		background-color: rgba(4, 4, 4, .6);
		padding: 1rem;
		border-radius: 10px;
		display: grid;
		max-width: 15rem;
		max-height: 16rem;
	}
	article:hover {
		background-color: rgba(4, 4, 4, .2);
	}
	.btn {
		border: 1px solid white;
		background-color: indigo;
		outline: none;
		color: white;
		width: 50%;
		margin: auto;
	}
	.white {
		color: white;
		text-align: center;
		font-size: 1.8rem;
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
</style>