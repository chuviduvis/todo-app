import { ThemeProvider } from 'styled-components';
import  GlobalStyles  from './components/styles/Global';
import Input from './components/Input';
import { Container } from './components/styles/container.styled';
import Content from './components/content';
const theme = {
  colors: {
    bg: '#0C2031',
    fc: '#BDE0FE',
    pink: '#ff0099'
  },
  mobile: "768px",
}
function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Input />
        <Container>
          <Content />
        </Container>
      
      </>
    </ThemeProvider>
  );
}

export default App;
