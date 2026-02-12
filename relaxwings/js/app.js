var prd_1 = new Vue({
    el: "#entradas",
    data: {
        products: [
            {
                name: 'Aritos de Cebolla',
                ingredients: '180gr Apanados',
                price: '$21.000',
            },
            {
                name: 'Palitos de Queso (x5 Unds)',
                ingredients: 'Mini palitos de queso mozarella, con salsa de uchuva (x5 unds)',
                price: '$19.000',
            },
            {
                name: 'Patacón',
                ingredients: '(x5 unds)',
                price: '$12.000',
            }
           /* {
                name: 'Pañoletas de Queso',
                ingredients: 'Queso papialpa con salsa de uchuva',
                price: '$20.000',
            }*/
            
        ]
    }
});


var prd_2 = new Vue({
    el: "#alitas",
    data: {
        products: [
            {
                name: 'Combo Infantil',
                ingredients: 'Nuggets, Papas a la francesa, Jugo en cajita, Sorpresa',
                price: '$24.900',
            },
            {
                name: 'Combo 2',
                ingredients: '5 Alitas + Gaseosa + Papas',
                price: '$23.900',
            },
            {
                name: 'Combo 3',
                ingredients: '7 Alitas + Gaseosa + Papas',
                price: '$24.900',
            },
            {
                name: 'Combo 4',
                ingredients: '10 Alitas + Gaseosa + Papas',
                price: '$32.900',
            },
            {
                name: 'Combo 5',
                ingredients: '22 Alitas + Papas',
                price: '$53.900',
            },
            {
                name: 'Combo 6',
                ingredients: '36 Alitas + Gaseosa 1.5L + Papas',
                price: '$82.900',
            },
            {
                name: 'Combo 7',
                ingredients: '42 Alitas + Gaseosa 1.5L + 2 Porciones de Papas',
                price: '$98.900',
            },
            {
                name: 'Combo Cervecero',
                ingredients: '36 Alitas + Six Pack + 2 Papas',
                price: '$104.900',
            }
            
            
        ]
    }
});

var prd_3 = new Vue({
    el: "#costillas",
    data: {
        products: [
            {
                name: 'Combo 8',
                ingredients: '6 Costillitas + Gaseosa + Papas',
                price: '$32.900',
            },
            {
                name: 'Combo 9',
                ingredients: '15 Costillitas + 1 Porción de Papas',
                price: '$69.900',
            },
            {
                name: 'Combo Mix',
                ingredients: '4 Alitas + 3 Costillitas + Gaseosa + Papas',
                price: '$32.900',
            },
            {
                name: 'Combo Mix Familiar',
                ingredients: '15 Alitas + 10 Costillitas + Papas',
                price: '$89.900',
            }
            
        ]
    }
});



var prd_4 = new Vue({
    el: "#parrilla",
    data: {
        products: [
            {
                name: 'Parrillada Mixta',
                ingredients: '100gr de Res, 100gr de Pollo Arepa, Ensalada, Papas',
                price: '$30.900',
            },
            {
                name: 'Medallones Hawái',
                ingredients: 'Cañón de cerdo con salsa de Ochoa Cereza, Queso',
                price: '$41.900',
            },
            {
                name: 'Pechuga Texana',
                ingredients: 'Pechuga de pollo con queso y tocineta',
                price: '$38.900',
            },
            {
                name: 'Churrasco Ranchero',
                ingredients: 'Churrasco con queso y tocineta',
                price: '$43.900',
            },
            {
                name: 'Pechuga de Pollo a la Parrilla',
                ingredients: '',
                price: '$30.900',
            },
            {
                name: 'Churrasco',
                ingredients: '',
                price: '$43.900',
            },
            {
                name: 'Punta de Anca',
                ingredients: '',
                price: '$39.900',
            },
            {
                name: 'Chicharrón',
                ingredients: '',
                price: '$31.900',
            },
            {
                name: 'Picada para 4 Personas',
                ingredients: '',
                price: '$89.000',
            }
            
        ]
    }
});


var prd_5 = new Vue({
    el: "#delicias",
    data: {
        products: [
            {
                name: 'Combo Hamburguesa',
                ingredients: 'Papas + Gaseosa',
                price: '$29.900',
            },
            {
                name: 'Combo Hamburguesa de Pollo',
                ingredients: 'Papas + Gaseosa',
                price: '$29.900',
            },
            {
                name: 'Combo Hamburguesa Mixta o Doble',
                ingredients: 'Papas + Gaseosa',
                price: '$34.900',
            },
            {
                name: 'Chuzo de pollo',
                ingredients: '',
                price: '$24.900',
            },
            {
                name: 'Chuzo de cerdo',
                ingredients: '',
                price: '$24.900',
            },
            {
                name: 'Papipollo',
                ingredients: '400gr de papa, salchicha ranchera, pollo y queso',
                price: '$19.900',
            },
            {
                name: 'Pulpitos',
                ingredients: '250gr de papa, salchicha en pulpito',
                price: '$10.000',
            },
            {
                name: 'Papimixto',
                ingredients: '400gr de papa, salchicha ranchera, carne, pollo, tocineta y queso',
                price: '$29.900',
            }
            /*{
                name: 'Helado Frito',
                ingredients: '',
                price: '$15.000',
            }*/
            
        ]
    }
});


var prd_6 = new Vue({
    el: "#adiciones",
    data: {
        products: [
            {
                name: 'Papas a la Francesa',
                ingredients: '(250gr)',
                price: '$6.500',
            },
            {
                name: 'Papa Criolla',
                ingredients: '(250gr)',
                price: '$7.000',
            },
            {
                name: 'Yuca Frita',
                ingredients: '(x6)',
                price: '$7.000',
            },
            {
                name: 'Ensalada',
                ingredients: '(x1)',
                price: '$8.000',
            },
            {
                name: 'Salsa',
                ingredients: '(x1)',
                price: '$1.800',
            },
            {
                name: 'Alita Adicional',
                ingredients: '',
                price: '$3.800',
            },
            {
                name: 'Costilla Adicional',
                ingredients: '',
                price: '$4.500',
            }
            
        ]
    }
});


var prd_7 = new Vue({
    el: "#bebidas",
    data: {
        products: [
            {
                name: 'Jugo en Agua',
                ingredients: 'Guanabana, Fresa, Mango, Mora, Lulo, Piña',
                price: '$7.000',
            },
            {
                name: 'Jugo en Leche',
                ingredients: 'Guanabana, Fresa, Mango, Mora, Lulo, Piña',
                price: '$8.500',
            },
            {
                name: 'Milo Frío',
                ingredients: '',
                price: '$8.500',
            },
            {
                name: 'Limonada Cerezada',
                ingredients: '',
                price: '$12.000',
            },
            {
                name: 'Limonada Natural',
                ingredients: '',
                price: '$6.000',
            },
            {
                name: 'Limonada de Coco',
                ingredients: '',
                price: '$12.000',
            },
            {
                name: 'Limonada de Mango Biche',
                ingredients: '',
                price: '$12.000',
            },
            {
                name: 'Limonada de Mandarina',
                ingredients: '',
                price: '$12.000',
            },
            {
                name: 'Gaseoa 1.5 L',
                ingredients: '',
                price: '$8.500',
            }
            
            
        ]
    }
});


var prd_1 = new Vue({
    el: "#cervezas",
    data: {
        products: [
            {
                name: 'Aguila Light',
                ingredients: '',
                price: '$6.000',
            },
            {
                name: 'Aguila',
                ingredients: '',
                price: '$6.000',
            },
            {
                name: 'Pilsen',
                ingredients: '',
                price: '$6.000',
            },
            {
                name: 'Club Colombia',
                ingredients: '',
                price: '$6.000',
            },
            {
                name: 'Corona',
                ingredients: '',
                price: '$9.000',
            },
            {
                name: 'Coronita',
                ingredients: '',
                price: '$6.000',
            },
            {
                name: '3 Cordilleras',
                ingredients: '',
                price: '$9.000',
            }
            
        ]
    }
});


var prd_1 = new Vue({
    el: "#cocteles",
    data: {
        products: [
            {
                name: 'Tequila Sunrise',
                ingredients: 'Jugo de Naranja, Triple Sec, Tequila, Granadina',
                price: '$13.000',
            },
            {
                name: 'Margarita',
                ingredients: 'Limón, Tequila, Triple Sec',
                price: '$11.000',
            },
            {
                name: 'Daiquiry Fresa',
                ingredients: 'Fresa, Limón, Triple Sec, Ron Blanco',
                price: '$13.000',
            },
            {
                name: 'Relax',
                ingredients: 'Manzana, Limón, Triple Sec, Vodka, Endulzante Manzana',
                price: '$14.500',
            },
            {
                name: 'Cielo Azul',
                ingredients: 'Vodka, Curazao, Limón',
                price: '$12.500',
            },
            {
                name: 'Iguana Express',
                ingredients: 'Tequila Blanco, Licor de Melón, Sourmint',
                price: '$12.500',
            },
            {
                name: 'Spirit Gin',
                ingredients: 'Gin, Limón, Soda de Manzana',
                price: '$13.500',
            },
            {
                name: 'Limonada Eléctrica',
                ingredients: 'Tequila, Ginebra, Vodka, Ron Blanco, Jarabe, Curazao',
                price: '$15.500',
            }
            
        ]
    }
});