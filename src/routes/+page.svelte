<script lang="ts">
   import { getApi } from "../bknd";
   let { data } = $props();

	const api = await getApi({ headers: new Headers(data.headers) }, true);
   const user = api.getUser();
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

<div>
   {#if user}
      <p>Logged in as {user.email}. <a href="/api/auth/logout">Logout</a></p>
   {:else}
      <p>You are not logged in. <a href="/admin/auth/login">Login</a></p>
   {/if}
</div>