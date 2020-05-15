<script>
export let item





</script>


<div class="container-information">
    <div class="container-info">
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
    <div class="container-info">
        <div class="img-container">
            <img src="virus.png" alt=" "/>
        </div>
        <p class="orange">{item.NewConfirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
        <p class="orange">Latest confirmed</p>
    </div>
    <div class="container-info">
        <div class="img-container">
            <img src="danger.png" alt=" ">
        </div>
        <p class="red">{item.NewDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
        <p class="red">Total deaths</p>
    </div>
    <div class="container-info">
        <div class="img-container">
            <img src="thumbsUp.png" alt="">
        </div>            
        <p class="green">{item.NewRecovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
        <p class="green">Total recovered</p>
    </div>
</div>

<style>
    .container-information{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
        grid-template-columns: 1fr 1fr 1fr;
        gap: 1rem;
    }

    .container-info {
        display: grid; 
        justify-content: center;
        text-align: center;
    }

    .img-container {
        height: 50px;
        width: 50px;
        display: grid; 
        justify-content: center;
    }

    img {
        height: 100%;
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