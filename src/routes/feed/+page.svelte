<script>
    //import { onMount } from "svelte";
    //import { GridStack } from "gridstack";
    //import "gridstack/dist/gridstack-all.js"
    //import "gridstack/dist/gridstack.css";
    //import "gridstack/dist/gridstack-extra.css";
    //console.log(GridStack);

    //import Feed from "$lib/feed.svelte";

    import { getFeed } from "$lib/firebase.js";

    let feed = [];

    getFeed().then((data) => {
        console.log(data);
        feed = data;
    });


</script>

{#each feed as item}
    <a style="margin:10px" target="_blank" href={"/feed/" + item.id}>
        <h1>{item.title}</h1>
        <p>{item.timestamp}</p>
        <img style="width:300px" src={item.imageSrc} />
    </a>
{/each}

<style>
    .grid-item {
        width: 25%;
    }
    .grid-item--width2 {
        width: 50%;
    }
</style>
