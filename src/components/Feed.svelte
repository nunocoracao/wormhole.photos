<script>
    import Masonry from "svelte-bricks";
    import FeedItem from "./FeedItem.svelte";
    export let items;
    let [minColWidth, maxColWidth, gap] = [500, 800, 20];
    let width, height;
</script>

<div class="">
    <Masonry
        {items}
        {minColWidth}
        {maxColWidth}
        {gap}
        let:item
        bind:width
        bind:height
    >
        <FeedItem {item} />
    </Masonry>
</div>

<style>
    :global(div.masonry) {
    }
    :global(div.masonry div.col) {
    }
</style>
