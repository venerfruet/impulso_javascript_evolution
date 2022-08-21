import { productsList, categoryList } from './product';

const PRODUCT = productsList;
const GATEGORY = categoryList;

const products = (state = PRODUCT) => {
    return state;
}

const categorys = (state = GATEGORY) => {
    return state;
}

export { products, categorys }