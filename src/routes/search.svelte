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
        await fetch(`Corona.json`)
        .then( response => response.json() )
        .then( json => {
            // World
            world = json.Countries
            searched = world
        }
        ).catch((err) => console.log(err))
    } )


</script>


<div class="search">
    <section>
        {#each world as item}
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
        min-height: 100vh;
    }
    section{
		display: grid;
        grid-template-rows: repeat(auto-fill, minmax(200px, 1fr));
        justify-content: center;
		gap: 2rem;
        margin: auto;
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
        grid-template-columns: 1fr 2fr;
    }
    .headline {
        text-align: center;
        grid-column: 1 /span  3;
        grid-row: 1;
        color: white;
    }

 
</style>


