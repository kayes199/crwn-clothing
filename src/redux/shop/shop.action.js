import shopActionTypes from './shop.types'

export const updateCollections = (collections) => ({
    type: shopActionTypes.UPDATE_COLLECIONS,
    payload: collections
})