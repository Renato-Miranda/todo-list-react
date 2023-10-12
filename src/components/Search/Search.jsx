/* eslint-disable react/prop-types */
import { StylesSearch } from './search.styles'
const Search = ({ search, setSearch }) => {
    return (
        <StylesSearch className="search">
            <h2>Pesquisar Tarefa</h2>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Digite para pesquisar" />
        </StylesSearch>
    )
}

export default Search