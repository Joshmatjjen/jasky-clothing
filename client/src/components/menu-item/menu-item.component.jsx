import React from 'react';
import { withRouter } from 'react-router-dom';
// import './menu-item.styles.scss';
import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle,
} from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  /*WIth Normal Css*/
  //   <div
  //     className={`${size} menu-item`}
  //     onClick={() => history.push(`${match.url}${linkUrl}`)}
  //   >
  //     <div
  //       className="background-image"
  //       style={{
  //         backgroundImage: `url(${imageUrl})`,
  //       }}
  //     ></div>
  //     <div className="content">
  //       <h1 className="title">{title.toUpperCase()}</h1>
  //       <span className="subtitle">SHOP NOW</span>
  //     </div>
  //   </div>

  <MenuItemContainer
    size={size}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <BackgroundImageContainer
      className="background-image"
      imageUrl={imageUrl}
    />
    <ContentContainer className="content">
      <ContentTitle>{title.toUpperCase()}</ContentTitle>
      <ContentSubtitle>SHOP NOW</ContentSubtitle>
    </ContentContainer>
  </MenuItemContainer>
);

export default withRouter(MenuItem);
