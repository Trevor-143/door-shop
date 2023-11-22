export default defineEventHandler( async (event) => {
    try {
        const response = await fetch('https://fakestoreapi.com/products/categories');
        const allCategories = await response.json();
        // console.log(allProducts);
    
        return {
            allCategories
        };

    } catch (error) {
        console.error('Error fetching data:', error);
        return {
          error: 'Failed to fetch data'
        };
    }
})