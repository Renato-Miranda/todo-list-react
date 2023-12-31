import styled from "styled-components";

export const StylesFilter = styled.section `
    border-bottom: 1px solid #555;
    margin-bottom: 20px;
    padding-bottom: 20px;

    .filter-options {
    display: flex;
    justify-content: space-between;
    gap: 3rem;
}

    .filter-options div {
    flex: 1 1 0;
}
    .filter-options p {
        color: #fff;
    }
`