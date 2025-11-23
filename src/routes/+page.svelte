<script lang="ts">
   import { getApi } from "../bknd";

	const api = await getApi();
   const { data: todos } = await api.data.readMany("todos");
   console.log(todos);
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<h2>Todo List</h2>
<ul>
   {#each todos as todo}
      <li>{todo.title}</li>
   {/each}
</ul>