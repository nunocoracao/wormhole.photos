<script>
    export let item

</script>

<a class="grid-item" target="_blank" href={"/feed/" + item.id}>
    <div class="item-content">
        <h1>{item.title}</h1>
        <p>{item.timestamp}</p>
        <img class="w-fit" src={item.imageSrc} alt="..." />
    </div>
</a>