import { createAction, props } from '@ngrx/store';

export const addItem = createAction('[Card Item Component] AddItem', props<{ item: any}>());