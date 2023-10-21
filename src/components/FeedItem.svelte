<script>
    export let item

</script>

<a class="w-full" target="_blank" href={item.id}>
    <div class="item-content">
        <!--h1>{item.title}</h1>
        <p>{item.timestamp}</p>
        <p>{item.url}</p-->
        <img class="w-full" src={item.imageSrc} alt="..." />
    </div>
</a>