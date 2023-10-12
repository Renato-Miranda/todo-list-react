import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    /* * {
    margin: 0;
    padding: 0;
    box-sizing: border-box; */
/* } */

body {
    width: 100%;
    min-height: 100vh;
    text-decoration: none;
    background-color:#0D080B;
    padding: 30px;
    font-family: Arial, Helvetica, sans-serif;
    color: ${(props)=> props.theme.fontBody};
    /* background-image: url('/robot.jpg'); */
    background-position: center;
    block-size: cover;
    
}

h1 {
    text-align: center;

}

h2 {
    margin-bottom: 10px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color:#260101; 
}

p{
    margin: 10px 0;
    font-family: 'Courier New', Courier, monospace;
}

input {
    box-sizing: border-box;
}

button {
    background-color: #333974;
    color: #fff;
    padding: 5px 10px;
    margin-right: 10px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    opacity: .8;
    transition: .3s;
}

button:hover {
    opacity: 1;
}

input, select {
    padding: 5px;
    margin-bottom: 10px;
    border: 1px solid #DDD;
    border-radius: 3px;
    width: 100%;
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