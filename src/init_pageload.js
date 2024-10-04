export function initPageload(pageTab = "Home") {
    if (pageTab == "Home") initHomepage();
    else if (pageTab == "Menu") initMenupage();
}

function initHomepage() {
    const $content = document.querySelector("#content");
    $content.innerHTML = '';
    
    let $about = document.createElement("div");
    $about.textContent = "About";

    let $descriptiom = document.createElement("p");
    $descriptiom.classList.add("desription");
    $descriptiom.textContent =  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."

    $content.appendChild($about);
    $content.appendChild($descriptiom);
}

function initMenupage() {
    const $content = document.querySelector("#content");
    $content.innerHTML = '';

    let $menu = document.createElement("div");
    $menu.classList.add("menu");

    for (let i = 0; i < 4; i++) {
        let $card = document.createElement("div");
        $card.classList.add("card");

        let $image = document.createElement("img");
        $image.setAttribute("alt", "pizza");

        let $productName = document.createElement("p");
        $productName.textContent = "Pizza Papa Johny";

        let $productPrice = document.createElement("p");
        $productPrice.textContent = "32$";

        $card.appendChild($image);
        $card.appendChild($productName);
        $card.appendChild($productPrice);

        $menu.appendChild($card);
    }

    $content.appendChild($menu);
}