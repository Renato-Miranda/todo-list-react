import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    width: 100%;
    min-height: 100vh;
    text-decoration: none;
    /* background-color: ${(props)=> props.theme.black700}; */

}

a {
    list-style: none;
    cursor: pointer;
    text-decoration: none;
}

button {
    cursor: pointer;
}

li {
    list-style: none;
}
`