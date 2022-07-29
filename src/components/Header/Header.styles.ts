import styled from "styled-components";


export const StyleHeader = styled.div`

    position: sticky;
  height: 64px;
  width: 100%;
  left: 0px;
  top: 0px;
  background: var(--red-2);
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 9999;

`
export const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 15px;
`;