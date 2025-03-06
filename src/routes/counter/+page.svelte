<script lang="ts">
    import { enhance } from "$app/forms";

    let { data } = $props();
</script>

<div class="p-4">
    <div class="text-xl mb-4">{data.value}</div>
    <div class="flex gap-2">
        <form method="POST" action="?/increment" use:enhance>
            <button class="bg-blue-500 hover:bg-blue-400 px-3 py-2 rounded active:bg-blue-500">
                ➕
            </button>
        </form>
        <form method="POST" action="?/decrement" use:enhance>
            <button class="bg-blue-500 hover:bg-blue-400 px-3 py-2 rounded active:bg-blue-500">
                ➖
            </button>
        </form>
    </div>
</div>