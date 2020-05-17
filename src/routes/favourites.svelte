<script>

    export let favorites = []


</script>

{#if favorites.lenght === 0}
    <p>U dont have any favorites yet</p>
{:else}
    <div>
       <h1 class="white ">Favorites</h1>
       <div>
        {#each favorites as favorite}
           <p>Country name</p>
           <ul>
            <li>{favorite.name}</li> 
           </ul>
        {/each}
       </div>
    </div>
{/if}


<style>
    div {
        min-height: 100vh;
        max-width: 100vw;;
    }
    h1 {
        text-align: center;
    }

    .white {
        color: white;
    }
</style>