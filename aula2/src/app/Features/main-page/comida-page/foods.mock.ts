export interface IFood {
    id: number,
    name: string,
    price: number, 
    description: string,
}

const MockFood: IFood[] = [
    {
    "id": 1,
    "name": "Hambúrguer Clássico",
    "price": 25.90,
    "description": "Pão brioche, carne bovina 150g, queijo, alface, tomate e molho especial."
    },
    {
        "id": 2,
        "name": "Pizza Calabresa",
        "price": 39.90,
        "description": "Pizza média com molho de tomate, mussarela, calabresa fatiada e cebola."
    },
    {
        "id": 3,
        "name": "Sushi Combo 20 peças",
        "price": 54.90,
        "description": "Combo com 20 peças variadas de sushi e sashimi, acompanha shoyu e gengibre."
    },
    {
        "id": 4,
        "name": "Lasanha à Bolonhesa",
        "price": 32.50,
        "description": "Lasanha tradicional com molho bolonhesa, queijo gratinado e temperos especiais."
    },
    {
        "id": 5,
        "name": "Açaí 500ml",
        "price": 18.00,
        "description": "Açaí cremoso com banana, granola e leite condensado."
    },
    {
        "id": 6,
        "name": "Frango Grelhado com Legumes",
        "price": 27.90,
        "description": "Peito de frango grelhado acompanhado de legumes salteados."
    },
    {
        "id": 7,
        "name": "Batata Frita Grande",
        "price": 14.90,
        "description": "Porção de batata frita crocante com sal e opcional de molho."
    },
    {
        "id": 8,
        "name": "Refrigerante Lata",
        "price": 6.00,
        "description": "Refrigerante gelado em lata 350ml (Coca-Cola, Guaraná ou Sprite)."
    }
    
]

export default MockFood;