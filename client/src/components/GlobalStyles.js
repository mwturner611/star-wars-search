import { createGlobalStyle} from "styled-components"
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    transition: all 0.50s linear;
  }
  .btn{
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    outline: 1px solid #FFE81F; 
    border-radius: 15px;
  }
  .list{
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text}; 
  }
  `