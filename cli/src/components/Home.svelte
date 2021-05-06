<script>
    import Tailwind from './Tailwind.svelte';
</script>

<Tailwind />

<main>
    <div class="w-1/2 left-side-web">
        <img class="w-60 m-auto pt-32" src="https://o.remove.bg/downloads/79340d09-d394-4776-97b4-c9739b33fb25/279-2793698_rfid-card-reader-logo-removebg-preview.png" alt="card">
        <div>
            <h4 class="pl-48 text-white text-2xl font-serif">Welcome To Transacción fácil</h4>
        </div>
    </div>
    <div class="w-1/2 Right-side-web bg-white">
        <div class="sign-in-btn">
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
</style>