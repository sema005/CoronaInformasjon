<script>
    import {favorites} from "./index.svelte"
    


</script>

    <div>
       <h1 class="white ">Favorites</h1>
       <div>
        {#each favorites as favorite}
           <p>Country name</p>
           <ul>
            <li>{favorite.name}</li> 
           </ul>
        {:else}
            <p>U have no favorites...</p>
        {/each}
       </div>
    </div>


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