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
<main class = "overflow-x-auto">
  <div class="header-container flex mt-3">
    <div class="link-to-home">
      <a href="/" class="back-home px-10 font-medium text-2xl font-serif">Home</a>
    </div>
    <div class="link-to-home w-1/4 m-auto mt-3">
      <input class="w-full text-line pl-2 pr-2 text-xl font-thin" bind:value={name} placeholder="Seach your card here">
    </div>
  </div>
  <div class="body-container mt-12 w-3/4 m-auto">
    <div class="mt-8 mb-5 float-right flex">
      <a href="/Create" class="add-card py-3 px-8 mr-5 font-thin text-md rounded-lg">Create Card</a>
      <a href="/Cards" class="all-cards py-3 px-8 text-white font-thin text-md rounded-lg">Stored Cards</a>
    </div>
    <table class="text-left w-full">
      <thead class="border flex text-white w-full">
        <tr class="flex w-full mb-1">
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
            <td class="p-4 w-1/4 font-normal text-blue-500"><a href="/card">{record.UUID}</a></td>
            <th class="p-4 w-1/4 font-thin">{record.NewBalance}</th>
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
  .add-card{
    border: .1rem solid #009688;
    color: #009688;
  }
  .all-cards{
    background-color: #009688;
  }
  thead{
    background-color: #009688;
  }
</style>