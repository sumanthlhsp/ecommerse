import { createAction, props } from '@ngrx/store';

export const addItem = createAction('[Card Item Component] AddItem', props<{ item: any}>());

export const removeItem = createAction('[Card Item Component] RemoveItem', props<{ item: any}>());

export const removeAll = createAction('[Card Item Component] RemoveAll', props<{ item: any}>());