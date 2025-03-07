<script lang="ts">
    import { enhance } from "$app/forms";
    let { data } = $props();

    console.log(data);
</script>

<form method="POST" action="?/create" use:enhance>
    <label>
        new todo:
        <input class="border" type="text" name="entry" autocomplete="off" />
    </label>
</form>

<ul>
    {#each data.items as item (item.id)}
        <li>{item.entry}</li>
    {/each}
</ul>