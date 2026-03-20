export interface IMarket {
    id : number,
    name: string,
    price: number,
    description: string,
    imageURL? : string
}

const MockMarket: IMarket[] = [
    {
        id: 1,
        name: "Arroz Branco 5kg",
        price: 24.90,
        description: "Arroz branco tipo 1, ideal para o dia a dia.",
        imageURL: "https://zonasul.vtexassets.com/arquivos/ids/3079487/VF4qT-qqCUAAAAAAAANwJQ.jpg?v=637901407622330000"
    },
    {
        id: 2,
        name: "Feijão Carioca 1kg",
        price: 8.50,
        description: "Feijão carioca selecionado, rico em proteínas.",
        imageURL: "https://redemix.vteximg.com.br/arquivos/ids/209460-1000-1000/7897136400155.jpg?v=638350604534800000"
    },
    {
        id: 3,
        name: "Macarrão Espaguete 500g",
        price: 4.20,
        description: "Macarrão de sêmola tipo espaguete, cozimento rápido.",
        imageURL: "https://phygital-files.mercafacil.com/catalogo/uploads/produto/macarr_o_todeschini_espaguete_com_ovos_500g_fd49be8f-f702-48df-abe7-5bbe5ffef0f8.jpg"
    },
    {
        id: 4,
        name: "Óleo de Soja 900ml",
        price: 7.90,
        description: "Óleo vegetal refinado, ideal para frituras e preparo de alimentos.",
        imageURL: "https://mercantilnovaera.vtexassets.com/arquivos/ids/214695/Oleo-de-Soja-SOYA-Garrafa-900ml.jpg?v=638447417992900000"
    },
    {
        id: 5,
        name: "Leite Integral 1L",
        price: 5.30,
        description: "Leite integral UHT, fonte de cálcio.",
        imageURL: "https://m.media-amazon.com/images/I/61uBHdVKZEL._AC_UF894,1000_QL80_.jpg"
    },
    {
        id: 6,
        name: "Pão de Forma Tradicional",
        price: 6.80,
        description: "Pão macio e fresco, ideal para café da manhã.",
        imageURL: "https://ibassets.com.br/ib.item.image.large/l-b11547d1d4774d278494e65db882f26f.jpeg"
    },
    {
        id: 7,
        name: "Café Torrado e Moído 500g",
        price: 14.90,
        description: "Café tradicional, aroma intenso e sabor marcante.",
        imageURL: "https://cdn.awsli.com.br/600x450/548/548525/produto/280919220/70ee7693b706c96a44f5432c6e5b1dce-h6ula2ypoa.jpg"
    },
    {
        id: 8,
        name: "Açúcar Refinado 1kg",
        price: 4.50,
        description: "Açúcar refinado branco, ideal para bebidas e receitas.",
        imageURL: "https://www.paodeacucar.com/img/uploads/1/108/32978108.jpg"
    },
    {
        id: 9,
        name: "Refrigerante Cola 2L",
        price: 9.90,
        description: "Bebida gaseificada sabor cola, ideal para acompanhar refeições.",
        imageURL: "https://carrefourbrfood.vtexassets.com/arquivos/ids/18900718/coca-cola-15-litros-1.jpg?v=637590176320230000"
    },
    {
        id: 10,
        name: "Detergente Líquido 500ml",
        price: 2.99,
        description: "Detergente para lavar louças, remove gordura com eficiência.",
        imageURL: "https://destro.fbitsstatic.net/img/p/detergente-ype-maca-500ml-70478/257014-1.jpg?w=500&h=500&v=202501231555&qs=ignore"
    }
]

    
export default MockMarket;