<script>
    import { onMount, onDestroy } from "svelte";
    import { getFeed } from "$lib/firebase.js";
    import Feed from "../components/Feed.svelte";
    import { items } from "$lib/stores.js";

    let items_value;
    let element;

    items.subscribe((value) => {
        items_value = value;
    });

    getFeed().then((data) => {
        items.set(data);
    });

    onMount(() => {
        /*if (element) {
            console.log("listElm is defined");
            element.addEventListener("scroll", function () {
                
                console.log(element.scrollTop, element.clientHeight, element.scrollHeight)

                if (
                    element.scrollTop + element.clientHeight >=
                    element.scrollHeight
                ) {
                    console.log("loadMore()");
                }
            });
        }*/
    });

    onDestroy(() => {
        //element.removeEventListener("scroll");
    });
</script>

<div class="justify-center">
    <div class="max-w-[1500px] mx-auto pt-10 overflow-hidden">
        <Feed items={items_value} />
    </div>
</div>
