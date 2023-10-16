<script>
    import Masonry from "svelte-bricks";
    import FeedItem from "./FeedItem.svelte";
    export let items;
    let [minColWidth, maxColWidth, gap] = [400, 800, 20];
    let width, height;
</script>

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

<style>
    :global(div.masonry) {
    }
    :global(div.masonry div.col) {
    }
</style>
