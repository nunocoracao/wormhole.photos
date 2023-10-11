<script>
    import Masonry from "svelte-bricks";
    import FeedItem from "./FeedItem.svelte";

    export let items;
    let col1 = [];
    let col2 = [];

    console.log(items);

    $: console.log(items);

    let [minColWidth, maxColWidth, gap] = [200, 800, 20];
    let width, height;
</script>

Masonry size: <span>{width}px</span> &times; <span>{height}px</span> (w &times;h)

<Masonry
    {items}
    {minColWidth}
    {maxColWidth}
    {gap}
    let:item
    bind:masonryWidth={width}
    bind:masonryHeight={height}
>
    <FeedItem item={item} />
</Masonry>