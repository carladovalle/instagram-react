function Story (props) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={props.image}/>
            </div>
            <div class="usuario">
                {props.name}
            </div>
        </div>

    )
}

export default function Stories () {

    const items = [
        {
            image: "/images/9gag.svg",
            name: "9gang",
        },
        {
            image: "/images/meowed.svg",
            name: "meowed",
        },
        {
            image: "/images/barked.svg",
            name: "barked",
        },
        {
            image: "/images/nathanwpylestrangeplanet.svg",
            name: "nathanwp...",
        },
        {
            image: "/images/wawawicomics.svg",
            name: "wawawic...",
        },
        {
            image: "/images/respondeai.svg",
            name: "respondeai",
        },
        {
            image: "/images/filomoderna.svg",
            name: "filomoderna",
        },
        {
            image: "/images/memeriagourmet.svg",
            name: "memeriag...",
        },
    ]

    return (
        <div>
            <div class="stories">
                {items.map(item => <Story image={item.image} name={item.name} />)}
                <div class="setinha">
                    <ion-icon name="chevron-forward-circle"></ion-icon>
                </div>
            </div>
        </div>

    )
}