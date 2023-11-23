export default defineEventHandler( async (event) => {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const allProducts = await response.json();
        // console.log(allProducts);

        const randomPlace = Math.floor(Math.random()* allProducts.length)
        const randomProduct = allProducts[randomPlace]
        let jeweleryColl: string[] = [];
        let electronics: string[] = []
        let mens_clothing: string[] = []
        let womens_clothing: string[] = []


        allProducts.forEach(product => {
            if(product.category === "jewelery") {
                jeweleryColl.push(product)
            }
            if(product.category === "electronics") {
                electronics.push(product)
            }
            if(product.category === "men's clothing") {
                mens_clothing.push(product)
            }
            if(product.category === "women's clothing") {
                womens_clothing.push(product)
            }
        });
    
        return {
            allProducts,
            randomProduct,
            jeweleryColl,
            electronics,
            mens_clothing,
            womens_clothing
        };

    } catch (error) {
        console.error('Error fetching data:', error);
        return {
          error: 'Failed to fetch data'
        };
    }
})