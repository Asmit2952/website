<script lang="ts">
  import Arrow from "$lib/components/svgs/arrow.svelte";
  import { resourcesLinks } from "$lib/contents/dropdown";
  import { page } from "$app/stores";

  export let shown: boolean = false;
</script>

<style lang="postcss">
  .nav-items > :global(*:not(:last-child)) {
    @apply border-b border-divider;
  }
</style>

<button
  class="flex items-center text-p-large text-left hover:text-important {shown
    ? 'font-semibold text-important'
    : 'text-body'}"
  on:click={() => (shown = !shown)}
>
  <p class={shown ? " left-0 ml-6" : ""}>Resources</p>
  <Arrow
    class="absolute right-0 mr-6 h-3 w-3 transform {shown
      ? 'left-0 ml-4 rotate-90'
      : '-rotate-90'}"
    fillClass={shown ? "fill-important" : "fill-body"}
  />
</button>

{#if shown}
  <div class="nav-items flex flex-col text-p-large">
    {#each resourcesLinks as { href, text }}
      <a
        {href}
        class="py-macro no-underline text-body hover:text-important {$page.url
          .pathname === '/'
          ? /\/$/.test(href)
          : href.indexOf($page.url.pathname) >= 0
          ? '!text-important'
          : ''}"
      >
        {text}
      </a>
    {/each}
  </div>
{/if}
