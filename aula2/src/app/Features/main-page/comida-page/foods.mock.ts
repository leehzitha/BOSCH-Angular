export interface IFood {
    id: number,
    name: string,
    price: number, 
    description: string,
    imageURL?: string
}

const MockFood: IFood[] = [
    {
        "id": 1,
        "name": "Hambúrguer Clássico",
        "price": 25.90,
        "description": "Pão brioche, carne bovina 150g, queijo, alface, tomate e molho especial.",
        "imageURL": "https://www.estadao.com.br/resizer/v2/77XTHHCCLBEXLC2Y5RK4PN37CE.jpg?quality=80&auth=a86d285f74ec7c08de7ba6ec10d557a463d905ffec2e56009d737687ac6054a1&width=1200&height=900&focal=553,494"
    },
    {
        "id": 2,
        "name": "Pizza de Calabresa",
        "price": 39.90,
        "description": "Pizza média com molho de tomate, mussarela, calabresa fatiada e cebola.",
        "imageURL": "https://cdn.casaeculinaria.com/wp-content/uploads/2024/07/01112507/Pizza-de-calabresa.webp"
    },
    {
        "id": 3,
        "name": "Sushi Combo 20 peças",
        "price": 54.90,
        "description": "Combo com 20 peças variadas de sushi e sashimi, acompanha shoyu e gengibre.",
        "imageURL": "https://sushihot.meucatalogofacil.com/_core/_uploads/836/2021/05/1437010521g59hfbced1.jpg"
    },
    {
        "id": 4,
        "name": "Lasanha à Bolonhesa",
        "price": 32.50,
        "description": "Lasanha tradicional com molho bolonhesa, queijo gratinado e temperos especiais.",
        "imageURL" : "https://guiadacozinha.com.br/wp-content/uploads/2014/01/lasanha-bolonhesa-na-pressao.jpg"
    },
    {
        "id": 5,
        "name": "Açaí 500ml",
        "price": 18.00,
        "description": "Açaí cremoso com banana, granola e leite condensado.",
        "imageURL" : "https://acailocatelli.multiappbrasil.tec.br/_core/_uploads//2022/06/0931100622fcb7efdbj6.jpg"
    },
    {
        "id": 6,
        "name": "Frango Grelhado com Legumes",
        "price": 27.90,
        "description": "Peito de frango grelhado acompanhado de legumes salteados.",
        "imageURL" : "https://guibon.com.br/wp-content/uploads/2019/04/POST_FRANGO_GRELHADO.png"
    },  
    {
        "id": 7,
        "name": "Batata Frita Grande",
        "price": 14.90,
        "description": "Porção de batata frita crocante com sal e opcional de molho.",
        "imageURL" : "https://www.tendaatacado.com.br/dicas/wp-content/webp-express/webp-images/uploads/2022/06/como-fazer-batata-frita-topo.jpg.webp"
    },
    {
        "id": 8,
        "name": "Refrigerante Lata",
        "price": 6.00,
        "description": "Refrigerante gelado em lata 350ml (Coca-Cola, Guaraná ou Sprite).",
        "imageURL" : "https://imagens.jotaja.com/produtos/3188/B2C915600AEE2842AAB73537AE6D602670CAE2300BD2436EDCA9C85102AD27D8.jpeg"
    }
    
]

export default MockFood;