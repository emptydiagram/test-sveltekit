<script lang="ts">
    let { data } = $props();

    console.log(data);

    var woof = $state(0);
    function increment() {
        woof += 1;
    }
    function decrement() {
        woof -= 1;
    }
</script>

<div class="p-4">
    <div class="text-xl mb-4">{woof}</div>
    <button onclick={increment} class="bg-blue-500 hover:bg-blue-400 px-3 py-2 rounded active:bg-blue-500">
        ➕
    </button>
    <button onclick={decrement} class="bg-blue-500 hover:bg-blue-400 px-3 py-2 rounded ml-2 active:bg-blue-500">
        ➖ 
    </button>
</div>