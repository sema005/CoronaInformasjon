<svelte:head>
	<title>Corona information</title>
</svelte:head>

<script>
	import { onMount } from "svelte"
	import Loader from "../components/Loader.svelte"
	import World from "../components/World.svelte"


	let world = []


    onMount( async () => {
		await fetch(`https://api.covid19api.com/summary`)
		.then( response => response.json() )
        .then( json => {
			// World
            world = json.Countries
        }
        ).catch((err) => console.log(err))
	} )

	let order = "title"
    $:  switch(order){      
		case 'title': world = world.sort( (a,b) => a.Country > b.Country ? 1 : -1);break
            case 'death': world = world.sort( (a,b) => a.TotalDeaths < b.TotalDeaths ? 1 : -1); break
            case 'infected': world = world.sort( (a,b) => a.TotalConfirmed < b.TotalConfirmed ? 1 : -1); break
            case 'recovered': world = world.sort( (a,b) => a.TotalRecovered < b.TotalRecovered ? 1 : -1); break
	}





</script>

<div>
	<div class="sort" id="myDiv">
		<button class="btn button active" on:click={() => order = "title"}>Title</button>
    	<button class="btn button" on:click={() => order = "death"}>Death</button>
    	<button class="btn button" on:click={() => order = "infected"}>Infected</button>
    	<button class="btn button" on:click={() => order = "recovered"}>Recovered</button>
	</div>
	<section>
		{#each world as item}
			<World item={item} />
		{:else}
			<div class="loader">
				<Loader />
			</div>
		{/each}   
	</section>
</div>

<style>
	div {
		display: grid;
		background-color: #1b1b30;
		width: 100vw;
	}
	section {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		justify-content: center;
		gap: 2rem;
		width: 90vw;
		margin: auto;
	}
	.sort {
		height: 10vh;
		display: grid;
		grid-template-columns: 100px 100px 100px 100px;
		gap: 10px;
		width: 90vw;
		margin: auto;
		justify-content: center;
		padding: 1rem;
	}
	.button {
		height: 30px;
		background-color: indigo;
		color: white;
		outline: none;
	}
	.active {
		background-color: rgba(4, 4, 4, .6);
	}
	.loader {
		display: grid;
		justify-content: center;
	}
</style>

