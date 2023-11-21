
export default defineEventHandler( async (event) => {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const allProducts = await response.json();
        // console.log(allProducts);

        const randomPlace = Math.floor(Math.random()* allProducts.length)
        const randomProduct = allProducts[randomPlace]
    
        return {
            allProducts,
            randomProduct
        };

    } catch (error) {
        console.error('Error fetching data:', error);
        return {
          error: 'Failed to fetch data'
        };
    }
})