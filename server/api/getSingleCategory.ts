export default defineEventHandler( async (event) => {
    const { catID } = await readBody(event)

    try {
        
        const response = await fetch(`https://fakestoreapi.com/products/category/${catID}`)
        const catData = await response.json()

        return {
            catData
        }

    } catch (error) {
        console.error('Error fetching data:', error);
        return {
            error: 'Failed to fetch data'
        }; 
    }

    // fetch('https://fakestoreapi.com/products/category/jewelery')
    //         .then(res=>res.json())
    //         .then(json=>console.log(json))
})