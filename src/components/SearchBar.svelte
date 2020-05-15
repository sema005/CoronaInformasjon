<script>
export let searched
export let world



    let search = ""
	const filterResult = () => {
            searched = world.filter( world => world.Country.toLowerCase().includes(search.toLowerCase()))

            console.log("Hei")
    }

</script>


<div class="searchbar">
    <input autocomplete="off"  class="search-input" type="search" placeholder="Search after country" bind:value={search} on:change|preventDefault={filterResult}/>
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


</style>