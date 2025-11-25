<script lang="ts">
   let props = $props();
   let { data: { todos, user } } = props;
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