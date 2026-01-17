export type ProductType = 'tamales' | 'humitas' | 'quimbolitos';

export interface Product {
    id: string;
    name: string;
    description: string;
    type: ProductType;
    price: string;
    ingredients: string[];
    images: string[];
    waMessage: string;
}

export const products: Product[] = [
    // TAMALES
    {
        id: 'tamal-pollo',
        name: 'Tamal de Pollo',
        description: 'La tradición lojana en su máxima expresión. Masa suave de maíz con un relleno generoso de pollo estofado.',
        type: 'tamales',
        price: '$1.00',
        ingredients: ['Masa de maíz', 'Pollo estofado', 'Huevo duro', 'Arvejas', 'Zanahoria', 'Manteca de cerdo', 'Hoja de achira'],
        images: ['/images/productos/tamal-pollo.png'],
        waMessage: 'Hola, quiero pedir Tamales de Pollo.'
    },
    {
        id: 'tamal-queso',
        name: 'Tamal de Queso',
        description: 'La opción perfecta para los amantes del queso. Una masa suave y delicada rellena de generoso queso fresco lojano.',
        type: 'tamales',
        price: '$1.00',
        ingredients: ['Masa de maíz', 'Queso Fresco', 'Huevo', 'Refrito'],
        images: ['/images/productos/tamal-queso.png'], // Placeholder path
        waMessage: 'Hola, me gustaría pedir un Tamal de Queso.'
    },
    {
        id: 'tamal-chancho',
        name: 'Tamal de Chancho',
        description: 'El clásico sabor intenso. Trozos de cerdo seleccionados adobados con especias secretas.',
        type: 'tamales',
        price: '$1.00',
        ingredients: ['Masa de maíz', 'Cerdo adobado', 'Huevo duro', 'Pimiento', 'Manteca de color', 'Hoja de achira'],
        images: ['/images/productos/tamal-chancho.png'],
        waMessage: 'Hola, quiero pedir Tamales de Chancho.'
    },

    // HUMITAS
    {
        id: 'humita',
        name: 'Humita de Queso',
        description: 'Dulzor natural del choclo tierno mezclado con queso derretido.',
        type: 'humitas',
        price: '$0.80',
        ingredients: ['Choclo tierno molido', 'Queso fresco', 'Huevo', 'Mantequilla', 'Hoja de choclo'],
        images: ['/images/productos/humita.png'],
        waMessage: 'Hola, quiero pedir Humitas.'
    },
    // QUIMBOLITOS
    {
        id: 'quimbolito',
        name: 'Quimbolito',
        description: 'Esponjoso pastelito de harina de maíz y trigo cocido al vapor, con un toque de pasas.',
        type: 'quimbolitos',
        price: '$0.80',
        ingredients: ['Harina de maíz', 'Harina de trigo', 'Huevo', 'Mantequilla', 'Pasas', 'Hoja de achira'],
        images: ['/images/productos/humita.png'], // Placeholder: Reusing humita for now
        waMessage: 'Hola, quiero pedir Quimbolitos.'
    }
];
