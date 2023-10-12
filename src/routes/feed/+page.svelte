<script>
    import { getFeed } from "$lib/firebase.js";
    import Feed from "../../components/Feed.svelte";
    import { items } from '$lib/stores.js';

    let items_value

    items.subscribe(value => {
        items_value = value
    })

    getFeed().then((data) => {
        //items.set(data)

        var temp_items = []

        for(var i = 0; i < 100; i++){
            var temp_item = {
                id: (((1+Math.random())*0x10000)|0).toString(16).substring(1),
                title: "example image",
                timestamp: i,
                imageSrc: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-"+Math.floor(Math.random() * (10 - 1 + 1) + 1)+".jpg"
            }
            temp_items.push(temp_item)
        }
        
        setInterval(()=>{
            items.set(items_value.concat({
                id: (((1+Math.random())*0x10000)|0).toString(16).substring(1),
                title: "example image",
                timestamp: 10,
                imageSrc: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-"+Math.floor(Math.random() * (10 - 1 + 1) + 1)+".jpg"
            }))
        }, 100000000)

        items.set(temp_items)
    });

</script>


<div style="max-width:1100px">
    <Feed items={items_value} />
</div>



