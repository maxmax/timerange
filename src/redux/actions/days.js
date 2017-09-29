export const DAYS_GET_ITEMS = 'TODO_GET_ITEMS';
export const DAYS_ERROR = 'TODO_ERROR';

export const getItems = (items) => ({
  type: DAYS_GET_ITEMS,
  items
});

export const error = (message) => ({
  type : DAYS_ERROR,
  message
});
