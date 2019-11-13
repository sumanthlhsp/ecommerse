import { createReducer, on } from '@ngrx/store';
import { addItem } from './card-item.action';

export const items: any = [];

const _cartReducer = createReducer(items,
  on(addItem, (state, data) => {
    return [...state, data]
  })
);

export function cartReducer(state, action) {
  return _cartReducer(state, action);
}