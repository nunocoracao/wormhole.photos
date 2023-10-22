<script>
    import { onMount } from "svelte";
    import { ProgressRadial } from "@skeletonlabs/skeleton";
    import { inview } from "svelte-inview";
    import { getFeed } from "$lib/firebase.js";
    import Feed from "../components/Feed.svelte";
    import { items } from "$lib/stores.js";

    let items_value;
    let element;
    let loading = true;
    let limit = 20;
    let startAt = 0;
    let hasMore = true;

    items.subscribe((value) => {
        items_value = value;
    });

    const fetchFeed = async () => {
        loading = true;
        getFeed(limit, startAt).then((data) => {
            loading = false;
            startAt = data[data.length - 1].timestamp;
            if (data.length < limit) hasMore = false;
            var tempItems = items_value;
            for(var i in data)
                tempItems.push(data[i]);
            items.set(tempItems);
        });
    };

    onMount(() => {
        fetchFeed();
    });

    const handleChange = (e) => {
        if (!loading && hasMore) {
            loading = true;
            fetchFeed();
        }
    };
</script>

<div class="justify-center">
    <div class="max-w-[1500px] mx-auto pt-10 overflow-hidden">
        <Feed items={items_value} />
    </div>
    <div use:inview={{}} on:change={handleChange} />
    <div class="flex justify-center mt-[100px] mb-[100px]">
        {#if loading}
            <ProgressRadial value={undefined} />
        {/if}
    </div>
</div>
