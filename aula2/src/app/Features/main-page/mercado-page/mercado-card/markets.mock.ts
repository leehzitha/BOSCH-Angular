export interface IMarket {
    id : number,
    name: string,
    price: number,
    description: string
}

const MockMarket: IMarket[] = [
    {
        id: 1,
        name: "Arroz Branco 5kg",
        price: 24.90,
        description: "Arroz branco tipo 1, ideal para o dia a dia."
    },
    {
        id: 2,
        name: "Feijão Carioca 1kg",
        price: 8.50,
        description: "Feijão carioca selecionado, rico em proteínas."
    },
    {
        id: 3,
        name: "Macarrão Espaguete 500g",
        price: 4.20,
        description: "Macarrão de sêmola tipo espaguete, cozimento rápido."
    },
    {
        id: 4,
        name: "Óleo de Soja 900ml",
        price: 7.90,
        description: "Óleo vegetal refinado, ideal para frituras e preparo de alimentos."
    },
    {
        id: 5,
        name: "Leite Integral 1L",
        price: 5.30,
        description: "Leite integral UHT, fonte de cálcio."
    },
    {
        id: 6,
        name: "Pão de Forma Tradicional",
        price: 6.80,
        description: "Pão macio e fresco, ideal para café da manhã."
    },
    {
        id: 7,
        name: "Café Torrado e Moído 500g",
        price: 14.90,
        description: "Café tradicional, aroma intenso e sabor marcante."
    },
    {
        id: 8,
        name: "Açúcar Refinado 1kg",
        price: 4.50,
        description: "Açúcar refinado branco, ideal para bebidas e receitas."
    },
    {
        id: 9,
        name: "Refrigerante Cola 2L",
        price: 9.90,
        description: "Bebida gaseificada sabor cola, ideal para acompanhar refeições."
    },
    {
        id: 10,
        name: "Detergente Líquido 500ml",
        price: 2.99,
        description: "Detergente para lavar louças, remove gordura com eficiência."
    }
]

    
export default MockMarket;