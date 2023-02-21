import { getStoredCart } from "../utilities/fakedb";

export const ProductAndCartLoader= async()=>{

    const productsData= await fetch ('products.json');
    const products= await productsData.json();


    const saveCart=getStoredCart();
    const previousCart=[];
    for(const id in saveCart){
    const addedProducts=products.find(product=> product.id===id)
    if(addedProducts){
        const value=saveCart[id]
        addedProducts.quantity=value
        previousCart.push(addedProducts)
    }
   }
    


    return {products:products,previousCart:previousCart}
}