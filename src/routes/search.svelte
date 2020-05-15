<svelte:head>
	<title>Search after country</title>
</svelte:head>

<script>
	import { onMount } from "svelte"
    import Loader from "../components/Loader.svelte"
    import Information from "../components/Information.svelte"
    import Chart from "../components/Chart.svelte"
    let world = []
    let searched = []


    onMount( async () => {
        await fetch(`https://api.covid19api.com/summary`)
        .then( response => response.json() )
        .then( json => {
            // World
            world = json.Countries
            searched = world
        }
        ).catch((err) => console.log(err))
    } )
    
    let search = ""
    const filterResult = () => {
        searched = world.filter( world => world.Country.toLowerCase().includes(search.toLowerCase()))
    }

</script>


<div class="search">
    <div class="searchbar">
        <input autocomplete="off"  class="search-input" type="search" placeholder="Search after country" bind:value={search} on:change|preventDefault={filterResult}/>
    </div>
    <section>
    {#each searched as item}
		<article>
			<h1 class="headline">{item.Country}</h1>
            <div class="container-article">
                <Information item={item} />
                <Chart item={item} />
            </div>
		</article>		
	{:else}
		<Loader />
	{/each}    
    </section>
</div>


<style>
    .search {
        padding: 10px;
        background-color: #1b1b30; 
        width: 100vw;
    }
        .searchbar {
        align-content: center;
        width: 100vw;
        text-align: center;
    }
        .search-input {
        border-radius: 4px;
        border: 1px solid black;
        padding: 1rem;
        font-size: 20px;
        margin: 15px;
        outline: none;
        width: 30rem;
    }

    section{
		display: grid;
        grid-template-rows: repeat(auto-fill, minmax(200px, 1fr));
        justify-content: center;
		gap: 2rem;
        margin: auto;
        overflow: scroll;
    }
    article {
        background-color: rgba(4, 4, 4, .6);
		padding: 1rem;
        display: grid;
        grid-template-rows: auto;
        width: 80vw;
        gap: 10px;
    }
    .container-article {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(100px 1fr));
        height: 100%
    }
    .headline {
        text-align: center;
        grid-column: 1 /span  3;
        grid-row: 1;
        color: white;
    }

 
</style>


