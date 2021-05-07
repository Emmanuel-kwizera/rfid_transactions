<script>
let name = '';
import axios from 'axios';
let transactions = [];
axios.get(`http://localhost:4000/api/transactions/all`)
  .then(function (response) {
    transactions = response.data;
    console.log(transactions);
  })
  .catch(function (error) {
    console.log(error);
  })
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
  <div class="body-container mt-12 w-3/4 m-auto">
    <table class="text-left w-full">
      <thead class="bg-black border flex text-white w-full">
        <tr class="flex w-full mb-4">
          <th class="p-4 w-1/4">UUID</th>
          <th class="p-4 w-1/4">New Balance</th>
          <th class="p-4 w-1/4">Transaction Fare</th>
          <th class="p-4 w-1/4">Date</th>
        </tr>
      </thead>
      <tbody>
        {#if transactions.length == 0}
        <p>No Transactions made so far.....</p>
        {/if}
        {#each transactions as record }
          <tr class="flex w-full border-2 text-md">
            <td class="p-4 w-1/4"><a href="/card">{record.UUID}</a></td>
            <th class="p-4 w-1/4 font-thin">{record.InitialBalance}</th>
            <th class="p-4 w-1/4 font-thin">{record.TransaportFare}</th>
            <th class="p-4 w-1/4 font-thin">{record.Registered_at}</th>
          </tr>
        {/each}
      </tbody>
    </table>
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