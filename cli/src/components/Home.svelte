<script>
    import Tailwind from './Tailwind.svelte';
    import { RouterView, Link } from '@bjornlu/svelte-router'
    function handleClick() {
		alert('Button is in ondoing stage')
	}
</script>

<Tailwind />

<main>
    <div class="main-container flex">
        <div class="w-1/2 left-side-web">
            <img class="w-60 m-auto pt-32" src="https://o.remove.bg/downloads/79340d09-d394-4776-97b4-c9739b33fb25/279-2793698_rfid-card-reader-logo-removebg-preview.png" alt="card">
            <div>
                <h4 class="pl-48 text-white text-2xl font-serif">Welcome To Transacción fácil</h4>
            </div>
        </div>
        <div class="w-1/2 Right-side-web bg-white">
            <div class="button-container">
                <button class="log-in-bttn py-1 px-6 rounded float-right mt-4 mr-12" on:click={handleClick}>
                    Log In
                </button>
            </div>
            <div class="what-we-do w-3/4 m-auto mt-60">
                <h3 class="pl-36 pb-3 text-xl font-serif">What do we Help you</h3>
                <p class="font-thin text-lg">
                    We help you Keep logs of When and How much you payed for you last resent transactions of any type either Transport payment, Buyying things or Dept payment. Register your card now and enjoy the service using our app.
                </p>
                <div>
                    <!-- <button class="try-now-button py-1 px-6 rounded float-right mt-4 mr-64" on:click={handleClick}>
                        Try Now
                    </button> -->
                    <!-- <div class="try-now-btn"> -->
                        <Link class="py-3 px-12" to="/App">Try Now</Link>
                    <RouterView />  
                    <!-- </div>               -->
                </div>
            </div>    
        </div>
    </div>
</main>

<style>
    :global(body){
		width: 100vw;
		height: 100vh;
    }
    .left-side-web{
        background-color: #ff6b22;
        height: 100vh;
    }
    .log-in-bttn{
        border: .1rem solid #ff6b22;
    }
    .log-in-bttn:focus{
        outline: none;
    }
    /* .try-now-btn{
        width: 10rem;
        background-color: #ff6b22;
    } */
</style>