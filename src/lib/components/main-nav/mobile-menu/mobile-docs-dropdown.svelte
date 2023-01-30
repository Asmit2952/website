<script lang="ts">
  import Arrow from "$lib/components/svgs/arrow.svelte";
  import { mobileDocsLinks, templateLinks } from "$lib/contents/dropdown";
  import { page } from "$app/stores";
  import FullArrowRight from "$lib/components/svgs/full-arrow-right.svelte";

  export let shown: boolean = false;
</script>

<style lang="postcss">
  /* for last-child of docs items to create a extra space*/
  .nav-items-docs > *:last-child {
    @apply pb-6;
  }
</style>

<button
  class="flex items-center text-p-large text-left hover:text-important {shown
    ? 'font-semibold text-important'
    : 'text-body'}"
  on:click={() => (shown = !shown)}
>
  <p class={shown ? "left-0 ml-6" : ""}>Docs</p>
  <Arrow
    class="absolute right-0 mr-6 h-3 w-3 transform {shown
      ? 'left-0 ml-4 rotate-90'
      : '-rotate-90'}"
    fillClass={shown ? "fill-important" : "fill-body"}
  />
</button>

{#if shown}
  <div
    class="divide-y divide-divider nav-items-docs border-none flex flex-col text-lg"
  >
    {#each mobileDocsLinks as { href, text }}
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

  <p
    class="py-macro border-none -mx-micro px-micro no-underline text-lg text-slight-grey font-bold bg-sand-light dark:text-important dark:bg-dark-grey"
  >
    Templates
  </p>
  <div class="flex divide-y divide-divider flex-col text-lg">
    {#each templateLinks as { href, text }}
      <a class="py-macro no-underline" {href}>
        {text}
      </a>
    {/each}
  </div>
  <a
    class="flex text-lg font-normal"
    href="/docs/introduction/getting-started/quickstart"
  >
    <FullArrowRight width="12" heightt="12" />
    <p>&nbsp;view all</p>
  </a>
{/if}
