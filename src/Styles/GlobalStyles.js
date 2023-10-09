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
    /* background-color: ${(props)=> props.theme.black700}; */
    background-color: #f4f4f4;
    padding: 30px;
    font-family: Arial, Helvetica, sans-serif;
    color: #333;
    background-image: url('/robot.jpg');
    background-position: center;
    block-size: cover;
}

.app{
    max-width: 600px;
    margin: 0 auto 300px;
    background-color: #efefef;
    padding: 20px 30px;
    border-radius: 10px;
}

h1 {
    text-align: center;

}

h2 {
    margin-bottom: 10px;
}
p{
    margin: 10px 0;
}

input {
    box-sizing: border-box;
}

button {
    background-color: #333974;
    color: #fff;
    padding: 5px 10px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    opacity: .8;
    transition: .3s;
}

button:hover {
    opacity: 1;
}

.complete {
    background-color: #5cb85c;
}

.remove {
    background-color: #d9534f;
}

.todo-form {
    padding-bottom: 1.5rem;
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