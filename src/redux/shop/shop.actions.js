import ShopActionTyes from "./shop.types";


export const updateCollections = (collectionsMap) => ({
  type: ShopActionTyes.UPDATE_COLLECTIONS,
  payload: collectionsMap
})