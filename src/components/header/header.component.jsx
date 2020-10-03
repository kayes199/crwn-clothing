import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import { ReactComponent as Logo } from "../../assets/crown.svg";

// import "./header.styles.scss";
import {
  HeaderContainer,
  LogoContainer,
  OptaionsContainer,
  OptionLink,
  HeaderRight,
} from "./header.styles";

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptaionsContainer>
      <OptionLink to="/shop">Shop</OptionLink>
      <OptionLink to="shop/mens">Mens</OptionLink>
      <OptionLink to="shop/womens">Womens</OptionLink>
      <OptionLink to="/Contact">Contact</OptionLink>
      <OptionLink to="/About">About</OptionLink>
    </OptaionsContainer>
    <HeaderRight>
      {currentUser ? (
        <OptionLink as="div" onClick={() => auth.signOut()}>
          Sign Out
        </OptionLink>
      ) : (
        <OptionLink to="/signin">Signin</OptionLink>
      )}
      <CartIcon />
    </HeaderRight>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
