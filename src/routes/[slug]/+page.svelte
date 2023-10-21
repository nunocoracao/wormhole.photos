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

<div class="justify-center">
    <div class="w-fit max-w-[2100px] mx-auto pt-10">
        <a style="margin:10px" target="_blank">
            <h1 class="text-xl">{item.title}</h1>
            <!--p>{item.timestamp}</p-->
            <img class="w-[1000px]" src={item.imageSrc} />
        </a>
    </div>
</div>
