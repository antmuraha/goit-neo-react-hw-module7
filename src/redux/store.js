import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import contactsReducer from '../redux/contactsSlice';
import filtersReducer from '../redux/filtersSlice';


const contactsPersistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['items'],
};


const rootReducer = combineReducers({
  contacts: persistReducer(contactsPersistConfig, contactsReducer),
  filters: filtersReducer,
});

export const store = configureStore({
  devTools: import.meta.env.MODE !== 'production',
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          'persist/PERSIST',
          'persist/REHYDRATE',
          'persist/REGISTER',
          'persist/PURGE',
          'persist/FLUSH',
          'persist/PAUSE',
          'persist/RESUME',
        ],
      },
    }),
});

export const persistor = persistStore(store);
