import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import ContactsPage from './pages/ContactsPage';
import GlobalStyles from './styles/GlobalStyles';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <ContactsPage />
    </Provider>
  );
};

export default App;

