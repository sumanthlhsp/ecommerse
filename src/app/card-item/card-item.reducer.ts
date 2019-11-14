import { createReducer, on } from '@ngrx/store';
import { addItem, removeItem, removeAll } from './card-item.action';

export const items: any = [];



const _cartReducer = createReducer(items,
  on(addItem, (state, data) => {
    return [...state, data]
  }),
  on(removeItem, (state, name) => {
    const index = state.findIndex((val) => val.item.name == name.item);
    state.splice(index, 1);
    return [...state]
  }),
  on(removeAll, (state, name) => {
    let matchedItems = state.filter((val) => val.item.name == name.item);
    while(matchedItems.length > 0){
      const index = state.findIndex((val) => val.item.name == name.item);
      state.splice(index, 1);
      matchedItems = state.filter((val) => val.item.name == name.item);
    }
    return [...state]
  })
);

export function cartReducer(state, action) {
  return _cartReducer(state, action);
}