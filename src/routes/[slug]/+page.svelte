<script>
    import { browser } from "$app/environment";
    import { onMount, onDestroy } from "svelte";
    import { ProgressRadial } from "@skeletonlabs/skeleton";
    import { getItem, getIds } from "$lib/firebase.js";
    import Feed from "../../components/Feed.svelte";

    export let data;
    let loading = true;

    let id = data.slug;

    let item = null;
    let related_items = [];

    function convertToATag(inputString) {
        return inputString.replace(
            /(\w+)\s*\[(.*?)\]/g,
            function (match, p1, p2) {
                return `<a class="anchor" href="${p2}" target="_blank">${p1}</a>`;
            }
        );
    }

    $: {
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
        <div class="max-w-[900px] mx-auto pt-10">
            <a style="m-[10px] px-1">
                {#if !loading}
                    <img class="w-fit" src={item.imageSrc} />

                    <h2 class="h2 mt-10">
                        {item.title}
                        <a target="_blank" href={item.url} class="h4 anchor"
                            >Original page</a
                        >
                    </h2>

                    <p>
                        {@html convertToATag(item.description)}
                    </p>

                    <h4 class="h4">
                        Credits:
                        {#if item && item.credits && item.credits.length > 0}
                            {#each item.credits as credit}
                                <a
                                    target="_blank"
                                    class="h3 anchor"
                                    href={credit.url}>{credit.text}</a
                                >,
                            {/each}
                        {/if}
                    </h4>

                    <h3 class="h3 mt-20">Related</h3>
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
