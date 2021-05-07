<script>
    function handleClick() {
		alert('Button is in ondoing stage')
	}
    const src = './assets/rfid-card.png'
</script>


<main>
    <div class="main-container flex">
        <div class="w-1/2 left-side-web">
            <img class="w-60 m-auto pt-32" src={src} alt="card">
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
                <div class="mt-8 mx-40">
                    <a href="/Report" class="try-now py-3 px-12 text-white font-thin text-md rounded-lg">Try it now</a>
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
    .try-now{
        background-color: #ff6b22;
    }
</style>