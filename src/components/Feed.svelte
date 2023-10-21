<script>
    import Masonry from "svelte-bricks";
    import FeedItem from "./FeedItem.svelte";
    export let items;
    let [minColWidth, maxColWidth, gap] = [450, 800, 10];
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
