function Side (props) {
    return (
            <div class="usuario">
                <img src={props.image} />
                <div class="texto">
                    <strong>{props.name}</strong>
                    {props.name}
                </div>
            </div>

    )
}

function Sug (props) {
    return (
        <div class="sugestoes">
                <div class="sugestao">
                    <div class="usuario">
                        <img src={props.image1} />
                        <div class="texto">
                            <div class="nome">
                                {props.name1}
                            </div>
                            <div class="razao">
                                {props.name2}
                            </div>
                        </div>
                    </div>
                    <div class="seguir">
                        Seguir
                    </div>
                </div>
        </div>
    )
}

export default function Sidebar () {

    const items = [ 
        {
            image1: "/images/bad.vibes.memes.svg",
            name1: "bad.vibes.memes",
            name2: "Segue você",
        },
        {
            image1: "/images/chibirdart.svg",
            name1: "chibirdart",
            name2: "Segue você",
        },
        {
            image1: "/images/razoesparaacreditar.svg",
            name1: "razoesparaacreditar",
            name2: "Novo no Instagram",
        },
        {
            image1: "/images/adorable_animals.svg",
            name1: "adorable_animals",
            name2: "Segue você",
        },
        {
            image1: "/images/smallcutecats.svg",
            name1: "smallcutecats",
            name2: "Segue você",
        },
    ]

    return (
        <div class="sidebar">
                <Side image="/images/catanacomics.svg" name="Catana"/>
                <div class="sugestoes">
                    <div class="titulo">
                        Sugestoẽs para você.
                        <div>Ver tudo</div>
                    </div>
                {items.map(item => <Sug image1={item.image1} name1={item.name1} name2={item.name2} />)}
                <div class="links">
                    Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • 
                    Termos • Localizações • Contas mais relevantes • Hashtags 
                    • Idioma
                </div>
                <div class="copyright">
                    © 2021 INSTAGRAM DO FACEBOOK      
                </div>
                </div>
        </div>
    )
}