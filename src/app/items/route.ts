export const items = [
    {price: 1.59, items: ["Apple Fritter", "Boston Cream", "Chocolate Dip", "Honey Dip"], type: "Dnt"},
    {price: 2.29, items: ["Chocolate Chip", "Blueberry", "Raisin Bran", "Fruit Explosion"], type: "Muf"},
    {price: 1.69, items: ["Chocolate Chunk", "Oreo Chunk"], type: "Cook"},
    {price: 2.29, items: ["Reeces'", "M&Ms"], type: "Drm"},
    {price: 2.69, items: ["Apple Juice", "Orange Juice", "Peach Juice", "Bottle Water"]},
    {price: 1.59, items: ["Original Blend", "Dark Roast", "Decaf"], type: "Small"},
    {price: 1.83, items: ["Original Blend", "Dark Roast", "Decaf"], type: "Medium"},
    {price: 2.07, items: ["Original Blend", "Dark Roast", "Decaf"], type: "Large"},
    {price: 2.35, items: ["Original Blend", "Dark Roast", "Decaf"], type: "Xlarge"},
    {price: 3.29, items: ["Iced Capp"], type: "Small"},
    {price: 3.79, items: ["Iced Capp"], type: "Medium"},
    {price: 4.29, items: ["Iced Capp"], type: "Large"},
    {price: 2.29, items: ["Iced Coffee"], type: "Small"},
    {price: 2.59, items: ["Iced Coffee"], type: "Medium"},
    {price: 2.89, items: ["Iced Coffee"], type: "Large"},
    {price: 2.79, items: ["Frozen Lemonade"], type: "Small"},
    {price: 3.29, items: ["Frozen Lemonade"], type: "Medium"},
    {price: 3.79, items: ["Frozen Lemonade"], type: "Large"},
    
    
]

export async function GET() {
    return Response.json(items);
}
