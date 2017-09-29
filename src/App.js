import React from 'react';
import {Provider} from 'react-redux';
import PickerWrapper from './components/picker';

const styles = {
  container: {
    textAlign: 'left',
    paddingTop: 50,
    paddingBottom: 50,
    width: 600,
    maxWidth: '100%',
    margin: '0 auto'
  },
};

const App = ({store}) => {
  return (
    <Provider store={store}>
      <section style={styles.container}>
        <PickerWrapper />
      </section>
    </Provider>
  )
}

export default App;
