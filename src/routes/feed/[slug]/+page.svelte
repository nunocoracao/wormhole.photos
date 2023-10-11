<script>
    
    import { getItem } from "$lib/firebase.js";

    //import { feedItem } from '$lib/stores.js'

    export let data;

    //console.log(data.slug);
    //console.log(feedItem)

    //test qFVVxdHYoOYKKTCJ1648

    let item = {};

    getItem(data.slug).then((data) => {
        console.log(data);
        item = data;
    });

</script>

<a style="margin:10px" target="_blank">
    <h1>{item.title}</h1>
    <p>{item.timestamp}</p>
    <img style="width:300px" src={item.imageSrc} />
</a>