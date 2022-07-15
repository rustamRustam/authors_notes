import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers';
import thunk from 'redux-thunk';

const persistedState = ()=>{
    let result = {};
    if(localStorage.hasOwnProperty('authorsnotesstate')) {
        const _data = localStorage.getItem('authorsnotesstate');
        if (_data && _data != 'undefined') {
            result.data = JSON.parse(_data);
        }
    }

    return result;
}

export const store = createStore(
    rootReducer,
    persistedState(),
    applyMiddleware(thunk),
);

store.subscribe(() => {
  localStorage.setItem('authorsnotesstate', JSON.stringify(store.getState().data))
});

window.onstorage = event => {
    // тут обработать изменения в другом окне
};
