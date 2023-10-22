<script>
    import { onMount, onDestroy } from "svelte";
    import { ProgressRadial } from "@skeletonlabs/skeleton";
    import { getItem, getIds } from "$lib/firebase.js";
    import Feed from "../../components/Feed.svelte";

    export let data;
    let loading = true;

    let id = data.slug;
    
    let item = null;
    let related_items = [];

    $: {
        window.scrollTo({ top: 0, behavior: "smooth" });
        getItem(data.slug).then((data) => {
            item = data;
            loading = false;
            var related_ids = [];
            for (var i in item.links) {
                related_ids.push(item.links[i].id);
            }
            getIds(related_ids).then((data) => {
                related_items = data;

            });
        });
    }

</script>

{#key id}
<div class="justify-center">
    <div class="max-w-[900px] mx-auto pt-40">
        <a style="m-[10px] px-1">
            {#if !loading}
                <img class="w-fit" src={item.imageSrc} />

                <h1 class="h1 mt-10">
                    {item.title}
                    <a target="_blank" href={item.url} class="h2 anchor"
                        >Original page</a
                    >
                </h1>
                <h2 class="h2">
                    Credits:
                    {#if item && item.credits && item.credits.length > 0}
                        {#each item.credits as credit}
                            <a
                                target="_blank"
                                class="h3 anchor"
                                href={credit.url}>{credit.text}</a
                            >
                        {/each}
                    {/if}
                </h2>

                <h1 class="h1 mt-20">Related</h1>
                <div class="w-fit mt-[10px]">
                    <Feed items={related_items} />
                </div>
            {/if}
        </a>
        <div class="flex justify-center mt-[100px] mb-[100px]">
            {#if loading}
                <ProgressRadial value={undefined} />
            {/if}
        </div>
    </div>
</div>
{/key}
