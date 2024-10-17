import { ShoppingCartPage } from "../onlineShop/shopingCartPage"
import { ProductsPage } from "../onlineShop/productsPage"

export class OnlineShopFunction{
    constructor(){
        this.shoppingCartPage= new ShoppingCartPage()
        this.productsPage= new ProductsPage()
    }
}