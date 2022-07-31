function Post (props) {
    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.image} />
                    {props.name}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                </div>
            </div>
            <div class="conteudo">
                <img src={props.image2} />
            </div>
            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>
                <div class="curtidas">
                    <img src={props.image3} />
                    <div class="texto">
                        Curtido por <strong>{props.name2}</strong> e <strong>outras {props.numero} mil pessoas</strong>.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function Posts () {

    const items = [
        {
            image: "/images/meowed.svg",
            name: "meowed",
            image2: "/images/gato-telefone.svg",
            image3: "/images/respondeai.svg",
            name2: "respondeai",
            numero: "101.523",
        },
        {
            image: "/images/barked.svg",
            name: "barked",
            image2: "/images/dog.svg",
            image3: "/images/adorable_animals.svg",
            name2: "adorable_animals",
            numero: "99.159",
        },
    ]

    return (
        <div class="posts">
            {items.map(item => <Post image={item.image} name={item.name} image2={item.image2} image3={item.image3} name2={item.name2} numero={item.numero} />)}
        </div>
    )
}