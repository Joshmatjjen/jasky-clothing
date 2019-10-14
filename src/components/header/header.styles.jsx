import styled from 'styled-components';
// import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from'../../assets/hanger.svg';

// export const OptionContainerStyles = css`
//   padding: 10px 15px;
//   cursor: pointer;
// `;

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 10px;
`;

export const AppLogo = styled(Logo)`
  height: 100%;
  width: 70px;
  padding: 10px;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

// When using two types of option

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;  

// export const OptionDiv = styled.div`
//   ${OptionContainerStyles}
// `

