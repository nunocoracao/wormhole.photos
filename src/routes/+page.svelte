<script>
    import { onMount, onDestroy } from "svelte";
    import { ProgressRadial } from "@skeletonlabs/skeleton";
    import { getFeed } from "$lib/firebase.js";
    import Feed from "../components/Feed.svelte";
    import { items } from "$lib/stores.js";

    let items_value = [];
    let element;
    let loading = true;
    let limit = 20;
    let startAt = null;
    let hasMore = true;
    let observer;

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
            for (var i in data) tempItems.push(data[i]);
            items.set(tempItems);
        });
    };

    onMount(() => {
        fetchFeed();
        observer = new IntersectionObserver(
            function (entries) {
                if (entries[0].isIntersecting === true) handleChange();
            },
            { threshold: [1] }
        );
        observer.observe(element);
    });

    onDestroy(() => {
        let items_value = [];
        let loading = true;
        let startAt = null;
        let hasMore = true;
        items.set([]);
        if(observer)
            observer.unobserve(element);
    });

    const handleChange = (e) => {
        if (!loading && hasMore) {
            loading = true;
            fetchFeed();
        }
    };
</script>

<div class="justify-center">
    <div class="max-w-[1200px] mx-auto pt-[10px] overflow-hidden">
        <Feed items={items_value} />
    </div>
    <div bind:this={element} />
    <div class="flex justify-center mt-[100px] mb-[100px]">
        {#if loading}
            <ProgressRadial value={undefined} />
        {/if}
    </div>
</div>
