export type Lang = 'es' | 'en' | 'pt' | 'fr';
export const LANGS: Record<Lang, string> = { es: 'Español', en: 'English', pt: 'Português', fr: 'Français' };
export const LOCALES: Record<Lang, string> = { es: 'es-CO', en: 'en-US', pt: 'pt-BR', fr: 'fr-FR' };

export const UI: Record<Lang, Record<string, string>> = {
  es: { subtitle: 'Carta Principal', kicker: 'Cocina Tradicional', title: 'Carta Típica', tagline: 'Sabores colombianos hechos con tradición.',
        add: 'Añadir', added: 'añadido a la comanda', myOrder: 'Mi Comanda', viewOrder: 'Ver Pedido', empty: 'Tu comanda está vacía. Añade platos de la carta.',
        order: 'Comanda lista', dishes: 'platos seleccionados', assistTitle: "¿Necesita ayuda?", assistText: 'Nuestro equipo está disponible para recomendaciones.',
        callWaiter: 'Llamar Camarero', askBill: 'Pedir la Cuenta', billSent: "Solicitud enviada: Cuenta{t}", waiterSent: "Camarero notificado{t}",
        navMenu: 'Carta', navCart: 'Comanda', navBill: 'Cuenta', language: 'Idioma', options: 'Opciones', includes: 'Incluye' },
  en: { subtitle: 'Main Menu', kicker: 'Traditional Kitchen', title: 'Traditional Menu', tagline: 'Colombian flavors made with tradition.',
        add: 'Add', added: 'added to your order', myOrder: 'My Order', viewOrder: 'View Order', empty: 'Your order is empty. Add dishes from the menu.',
        order: 'Order ready', dishes: 'dishes selected', assistTitle: "Need any help?", assistText: 'Our team is available for recommendations.',
        callWaiter: 'Call Waiter', askBill: 'Ask for the Bill', billSent: "Request sent: Bill{t}", waiterSent: "Waiter notified{t}",
        navMenu: 'Menu', navCart: 'Order', navBill: 'Bill', language: 'Language', options: 'Options', includes: 'Includes' },
  pt: { subtitle: 'Cardápio Principal', kicker: 'Cozinha Tradicional', title: 'Cardápio Típico', tagline: 'Sabores colombianos feitos com tradição.',
        add: 'Adicionar', added: 'adicionado ao pedido', myOrder: 'Meu Pedido', viewOrder: 'Ver Pedido', empty: 'Seu pedido está vazio. Adicione pratos do cardápio.',
        order: 'Pedido pronto', dishes: 'pratos selecionados', assistTitle: "Precisa de ajuda?", assistText: 'Nossa equipe está disponível para recomendações.',
        callWaiter: 'Chamar Garçom', askBill: 'Pedir a Conta', billSent: "Solicitação enviada: Conta{t}", waiterSent: "Garçom notificado{t}",
        navMenu: 'Cardápio', navCart: 'Pedido', navBill: 'Conta', language: 'Idioma', options: 'Opções', includes: 'Inclui' },
  fr: { subtitle: 'Carte Principale', kicker: 'Cuisine Traditionnelle', title: 'Carte Typique', tagline: 'Des saveurs colombiennes préparées avec tradition.',
        add: 'Ajouter', added: 'ajouté à la commande', myOrder: 'Ma Commande', viewOrder: 'Voir la Commande', empty: 'Votre commande est vide. Ajoutez des plats de la carte.',
        order: 'Commande prête', dishes: 'plats sélectionnés', assistTitle: "Besoin d'aide ?", assistText: 'Notre équipe est disponible pour vous conseiller.',
        callWaiter: 'Appeler le Serveur', askBill: "Demander l'Addition", billSent: "Demande envoyée : addition{t}", waiterSent: "Serveur prévenu{t}",
        navMenu: 'Carte', navCart: 'Commande', navBill: 'Addition', language: 'Langue', options: 'Options', includes: 'Comprend' }
};

export type L = Record<Lang, string>;
export interface Item { price: number; name: L; includes?: L; options?: L }
export interface Category { id: string; icon: string; name: L; tag: L; note?: L; items: Item[] }
export const CATEGORIES: Category[] = [
  { id: 'entradas', icon: 'tapas',
    name: { es: 'Entradas', en: 'Starters', pt: 'Entradas', fr: 'Entrées' },
    tag:  { es: 'Para Compartir', en: 'To Share', pt: 'Para Compartilhar', fr: 'À Partager' },
    items: [
      { price: 25000, name: { es: 'Ceviche de Chicharrón', en: 'Pork Rind Ceviche', pt: 'Ceviche de Torresmo', fr: 'Ceviche de Couenne de Porc' } },
      { price: 15000, name: { es: 'Chorizo con Arepa y Hogao', en: 'Chorizo with Arepa and Hogao', pt: 'Linguiça com Arepa e Hogao', fr: 'Chorizo avec Arepa et Hogao' } },
      { price: 27000, name: { es: 'Ceviche de Camarón', en: 'Shrimp Ceviche', pt: 'Ceviche de Camarão', fr: 'Ceviche de Crevettes' } },
      { price: 15000, name: { es: 'Patacón con Guacamole', en: 'Fried Plantain with Guacamole', pt: 'Patacón com Guacamole', fr: 'Patacón au Guacamole' } },
      { price: 17000, name: { es: 'Morcilla con Arepa y Hogao', en: 'Blood Sausage with Arepa and Hogao', pt: 'Morcela com Arepa e Hogao', fr: 'Boudin Noir avec Arepa et Hogao' } }
    ] },
  { id: 'desayunos', icon: 'free_breakfast',
    name: { es: 'Desayunos', en: 'Breakfasts', pt: 'Cafés da Manhã', fr: 'Petits-déjeuners' },
    tag:  { es: 'Buenos Días', en: 'Good Morning', pt: 'Bom Dia', fr: 'Bonjour' },
    items: [
      { price: 20000, name: { es: 'Calentao', en: 'Calentao', pt: 'Calentao', fr: 'Calentao' },
        options: { es: 'Res, Cerdo, Chorizo ó Chicharrón', en: 'Beef, Pork, Chorizo or Pork Rind', pt: 'Carne, Porco, Linguiça ou Torresmo', fr: 'Bœuf, Porc, Chorizo ou Couenne' } },
      { price: 15000, name: { es: 'Desayuno Americano', en: 'American Breakfast', pt: 'Café da Manhã Americano', fr: 'Petit-déjeuner Américain' },
        includes: { es: 'Huevos al gusto, Salchicha, Jugo de Naranja, Arepa, Quesito', en: 'Eggs your way, Sausage, Orange Juice, Arepa, Cheese', pt: 'Ovos a gosto, Salsicha, Suco de Laranja, Arepa, Queijinho', fr: 'Œufs au choix, Saucisse, Jus d\'Orange, Arepa, Fromage' } },
      { price: 12000, name: { es: 'Arepa, Quesito, Chocolate', en: 'Arepa, Cheese, Hot Chocolate', pt: 'Arepa, Queijinho, Chocolate Quente', fr: 'Arepa, Fromage, Chocolat Chaud' } }
    ] },
  { id: 'tipicos', icon: 'outdoor_grill',
    name: { es: 'Típicos', en: 'Traditional Dishes', pt: 'Pratos Típicos', fr: 'Plats Typiques' },
    tag:  { es: 'Plato Fuerte', en: 'Main Course', pt: 'Prato Principal', fr: 'Plat Principal' },
    items: [
      { price: 38000, name: { es: 'Bandeja Paisa', en: 'Bandeja Paisa', pt: 'Bandeja Paisa', fr: 'Bandeja Paisa' },
        includes: { es: 'Frijoles, Arroz, Ensalada, Huevo, Arepa, Chorizo, Tajada de Maduro, Chicharrón, Carne Molida, Aguacate',
                    en: 'Beans, Rice, Salad, Egg, Arepa, Chorizo, Fried Sweet Plantain, Pork Rind, Ground Beef, Avocado',
                    pt: 'Feijão, Arroz, Salada, Ovo, Arepa, Linguiça, Banana-da-terra Madura, Torresmo, Carne Moída, Abacate',
                    fr: 'Haricots, Riz, Salade, Œuf, Arepa, Chorizo, Banane Plantain Mûre, Couenne, Bœuf Haché, Avocat' } },
      { price: 38000, name: { es: 'Cazuela de Frijoles', en: 'Bean Casserole', pt: 'Cazuela de Feijão', fr: 'Cassolette de Haricots' } }
    ] }
,
  { id: 'premium', icon: 'workspace_premium',
    name: { es: 'Premium', en: 'Premium', pt: 'Premium', fr: 'Premium' },
    tag:  { es: 'Para Disfrutar', en: 'To Indulge', pt: 'Para Saborear', fr: 'À Savourer' },
    items: [
      { price: 60000, name: { es: 'Parrilla el Toro', en: 'El Toro Grill', pt: 'Parrilla El Toro', fr: 'Grillade El Toro' },
        includes: { es: 'Res, Cerdo, Pollo, Chicharrón, Chorizo, Papas Fritas', en: 'Beef, Pork, Chicken, Pork Rind, Chorizo, French Fries', pt: 'Carne, Porco, Frango, Torresmo, Linguiça, Batata Frita', fr: 'Bœuf, Porc, Poulet, Couenne, Chorizo, Frites' } },
      { price: 75000, name: { es: 'Picada para Dos', en: 'Sharing Platter for Two', pt: 'Petisco para Dois', fr: 'Assiette à Partager pour Deux' } },
      { price: 135000, name: { es: 'Picada para Cuatro', en: 'Sharing Platter for Four', pt: 'Petisco para Quatro', fr: 'Assiette à Partager pour Quatre' } }
    ] },
  { id: 'sancochos', icon: 'soup_kitchen',
    name: { es: 'Sancochos', en: 'Hearty Soups', pt: 'Sancochos', fr: 'Soupes Traditionnelles' },
    tag:  { es: 'Caldos de Casa', en: 'Home-style Broths', pt: 'Caldos Caseiros', fr: 'Bouillons Maison' },
    items: [
      { price: 33000, name: { es: 'Mondongo', en: 'Mondongo (Tripe Soup)', pt: 'Mondongo (Sopa de Bucho)', fr: 'Mondongo (Soupe de Tripes)' } },
      { price: 33000, name: { es: 'Sancocho de Gallina', en: 'Hen Sancocho', pt: 'Sancocho de Galinha', fr: 'Sancocho de Poule' } },
      { price: 35000, name: { es: 'Ajiaco', en: 'Ajiaco (Chicken & Potato Soup)', pt: 'Ajiaco (Sopa de Frango e Batata)', fr: 'Ajiaco (Soupe de Poulet et Pommes de Terre)' } }
    ] },
  { id: 'parrilla', icon: 'kebab_dining',
    name: { es: 'Parrilla', en: 'Grill', pt: 'Grelhados', fr: 'Grillades' },
    tag:  { es: 'Fuego Vivo', en: 'Open Flame', pt: 'Fogo Vivo', fr: 'Feu Vif' },
    note: { es: 'Acompañados de Papas a la francesa, Chimichurri, Aguacate y Arepa con Mozarella',
            en: 'Served with French Fries, Chimichurri, Avocado and Arepa with Mozzarella',
            pt: 'Acompanha Batata Frita, Chimichurri, Abacate e Arepa com Muçarela',
            fr: 'Accompagnés de Frites, Chimichurri, Avocat et Arepa à la Mozzarella' },
    items: [
      { price: 68000, name: { es: 'Filet Mignon', en: 'Filet Mignon', pt: 'Filé Mignon', fr: 'Filet Mignon' } },
      { price: 58000, name: { es: 'Punta de Anca', en: 'Tri-Tip (Punta de Anca)', pt: 'Ponta de Anca', fr: 'Pointe de Culotte (Punta de Anca)' } },
      { price: 58000, name: { es: 'Churrasco', en: 'Churrasco Steak', pt: 'Churrasco', fr: 'Churrasco' } },
      { price: 65000, name: { es: 'Baby Beef', en: 'Baby Beef', pt: 'Baby Beef', fr: 'Baby Beef' } },
      { price: 63000, name: { es: 'Costillas BBQ', en: 'BBQ Ribs', pt: 'Costelas BBQ', fr: 'Côtes Levées BBQ' } }
    ] }
];


// ---------------------------------------------------------------------------
// Datos del restaurante y textos extra (SEO / compartir). Editar aquí.
// ---------------------------------------------------------------------------
export const RESTAURANT = {
  name: 'La Casa de los Típicos',
  cuisine: 'Cocina colombiana',
  currency: 'COP',
  table: '04',
  // Redes: deja vacío ('') las que no uses; solo se muestran las que tengan URL.
  social: {
    whatsapp: 'https://wa.me/573146034091',
    instagram: '',
    facebook: '',
  },
};

export const OG_LOCALE: Record<Lang, string> = { es: 'es_CO', en: 'en_US', pt: 'pt_BR', fr: 'fr_FR' };

export const EXTRA: Record<Lang, Record<string, string>> = {
  es: { tableLabel: 'Mesa', orderTitle: 'Tu pedido', orderHint: 'Muéstrale este resumen al mesero para confirmar tu orden.', total: 'Total', close: 'Cerrar', remove: 'Quitar', emptyShort: 'Aún no has añadido platos.', qty: 'Cantidad',
        metaDesc: 'Carta digital de {name}: entradas, desayunos, típicos, premium, sancochos y parrilla. Cocina colombiana tradicional.',
        ogAlt: 'Logotipo de {name}', share: 'Compartir la carta', shareText: 'Mira la carta de {name}', copyLink: 'Copiar enlace',
        copied: 'Enlace copiado', follow: 'Síguenos', more: 'Más' },
  en: { tableLabel: 'Table', orderTitle: 'Your order', orderHint: 'Show this summary to your waiter to confirm your order.', total: 'Total', close: 'Close', remove: 'Remove', emptyShort: 'You have not added any dishes yet.', qty: 'Quantity',
        metaDesc: 'Digital menu of {name}: starters, breakfasts, traditional dishes, premium, hearty soups and grill. Traditional Colombian cuisine.',
        ogAlt: '{name} logo', share: 'Share the menu', shareText: 'Check out the menu of {name}', copyLink: 'Copy link',
        copied: 'Link copied', follow: 'Follow us', more: 'More' },
  pt: { tableLabel: 'Mesa', orderTitle: 'Seu pedido', orderHint: 'Mostre este resumo ao garçom para confirmar seu pedido.', total: 'Total', close: 'Fechar', remove: 'Remover', emptyShort: 'Você ainda não adicionou pratos.', qty: 'Quantidade',
        metaDesc: 'Cardápio digital de {name}: entradas, cafés da manhã, pratos típicos, premium, sancochos e grelhados. Culinária colombiana tradicional.',
        ogAlt: 'Logotipo de {name}', share: 'Compartilhar o cardápio', shareText: 'Veja o cardápio de {name}', copyLink: 'Copiar link',
        copied: 'Link copiado', follow: 'Siga-nos', more: 'Mais' },
  fr: { tableLabel: 'Table', orderTitle: 'Votre commande', orderHint: 'Montrez ce récapitulatif au serveur pour confirmer votre commande.', total: 'Total', close: 'Fermer', remove: 'Retirer', emptyShort: "Vous n'avez encore ajouté aucun plat.", qty: 'Quantité',
        metaDesc: 'Carte numérique de {name} : entrées, petits-déjeuners, plats typiques, premium, soupes et grillades. Cuisine colombienne traditionnelle.',
        ogAlt: 'Logo de {name}', share: 'Partager la carte', shareText: 'Découvrez la carte de {name}', copyLink: 'Copier le lien',
        copied: 'Lien copié', follow: 'Suivez-nous', more: 'Plus' },
};
