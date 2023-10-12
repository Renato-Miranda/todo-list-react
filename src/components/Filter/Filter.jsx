/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { StylesFilter } from './filter.styles'
const Filter = ({ filter, setFilter, setSort }) => {
    return (
        <StylesFilter className="filter">
            <h2>Filtrar:</h2>
            <div className="filter-options">
                <div>
                    <p>Status:</p>
                    <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                        <option value="All">Todas</option>
                        <option value="Completed">Completas</option>
                        <option value="Incomplete">Imcompletas</option>
                    </select>
                </div>
                <div>
                    <p>Ordem Alfabética:</p>
                    <button onClick={() => setSort('Asc')}>Ascendente</button>
                    <button onClick={() => setSort('Desc')}>Descendente</button>
                </div>
            </div>
        </StylesFilter>
    )
}

export default Filter