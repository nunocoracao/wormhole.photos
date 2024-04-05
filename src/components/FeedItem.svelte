<script>
    export let item

</script>

<a class="w-full" href={item.id} data-sveltekit-noscrol data-sveltekit-reload>
    <div class="item-content">
        <!--h1>{item.title}</h1>
        <p>{item.timestamp}</p>
        <p>{item.url}</p-->
        <img class="w-full" src={item.imageSrc} alt="..." />
    </div>
</a>