const actionTypeCreator = (name, type) => {
  switch(type) {
    case('sync'):
      return name;
    case('async'):
      return {
        START:   `${name}_START`,
        SUCCESS: `${name}_SUCCESS`,
        FAIL:    `${name}_FAIL`,
      };
    default:
      return name;
  }
};

export const CLEAR_COMMENTS_LOADED = actionTypeCreator('CLEAR_COMMENTS_LOADED', 'sync');
export const FETCH_USERS           = actionTypeCreator('FETCH_USERS', 'async');
export const FETCH_USER_POSTS      = actionTypeCreator('FETCH_USER_POSTS', 'async');
export const DELETE_USER_POST      = actionTypeCreator('DELETE_USER_POST', 'async');
export const ADD_USER_POST         = actionTypeCreator('ADD_USER_POST', 'async');
export const FETCH_COMMENTS        = actionTypeCreator('FETCH_COMMENTS', 'async');
export const ADD_COMMENT           = actionTypeCreator('ADD_COMMENT', 'async');
