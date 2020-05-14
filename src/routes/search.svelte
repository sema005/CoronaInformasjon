<svelte:head>
	<title>Search after country</title>
</svelte:head>

<script>
	import { onMount } from "svelte"
	import Loader from "../components/Loader.svelte"
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

            console.log("Hei")
    }
</script>


<div class="search">

    <div class="searchbar">
        <input id="inputSearch"  class="search-input" type="search" placeholder="Search after country" bind:value={search} on:change|preventDefault={filterResult}/>
    </div>
    <section>
    {#each searched as item}
		<article>
			<h1 class="headline">{item.Country}</h1>
            <div class="container-article">
                <div class="container-information">
                    <div class="">
                        <div class="img-container">
                            <img src="virus.png" alt=" "/>
                        </div>
			            <p class="orange">{item.TotalConfirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                        <p class="orange">Total confirmed</p>
                    </div>
			        <div class="container-info">
                        <div class="img-container">
                            <img src="danger.png" alt=" ">
                        </div>
                        <p class="red">{item.TotalDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                        <p class="red">Total deaths</p>
			        </div>
                    <div class="container-info">
                        <div class="img-container">
                            <img src="thumbsUp.png" alt="">
                        </div>            
                        <p class="green">{item.TotalRecovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                        <p class="green">Total recovered</p>
                    </div>
                </div>
            </div>
		</article>		
	{:else}
		<Loader />
	{/each}    
    </section>
</div>


<style>

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
    .search {
        padding: 10px;
        height: 40px;
        background-color: #1b1b30; 
        height: 100vh;
        width: 100vw;
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
        width: 90vw;
        gap: 10px;
        height: 70vh;
    }
    .container-information{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    }

    .container-article {
        display: grid;
        justify-content: center;
        grid-template-columns: repeat(auto-fit, minmax(100px 1fr));
        height: 100%
    }
    .img-container {
        height: 50px;
        width: 50px;
    }

    img {
        height: 100%;
    }
    .headline {
        text-align: center;
        grid-column: 1 /span  3;
        grid-row: 1;
        color: white;
    }

    .green {
        color: green;
    }
    .orange {
        color: orange;
    }
    .red {
        color: red;
    }
</style>


