<script>
let name = '';
</script>
<main>
  <div class="header-container flex mt-3">
    <div class="link-to-home">
      <a href="/" class="back-home px-10 font-medium text-2xl font-serif">Home</a>
    </div>
    <div class="link-to-home w-1/4 m-auto mt-3">
      <input class="w-full text-line pl-2 pr-2 text-xl font-thin" bind:value={name} placeholder="Seach your card here">
    </div>
  </div>
  <div class="body-container">
    
  </div>
</main>

<style>
  .back-home{
    color: #ff6b22;
  }
  .text-line {
    background-color: transparent;
    outline: none;
    outline-style: none;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: solid #8e8e93 1px;
  }
</style>