import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {
  googleSignInStart,
  emailSignInStart,
} from '../../redux/user/user.action';

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer,
} from './sign-in.styles';

// import './sign-in.styles.scss';

/**  Before uinsg React Hooks  */

// class SignIn extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       email: '',
//       password: ''
//     }
//   }

/** Using React Hooks */
const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const { email, password } = userCredentials;
  const handleSubmit = async event => {
    event.preventDefault();

    emailSignInStart(email, password);
  };

  const handleChange = event => {
    const { value, name } = event.target;

    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    //NORMAL CSS
    // <div className="sign-in">
    //   <h2>I already have an account</h2>
    //   <span>Sign in with your email and password</span>

    //   <form onSubmit={handleSubmit}>
    //     <FormInput
    //       name="email"
    //       type="email"
    //       value={email}
    //       handleChange={handleChange}
    //       label="email"
    //       required
    //     />
    //     <FormInput
    //       name="password"
    //       type="password"
    //       value={password}
    //       handleChange={handleChange}
    //       label="password"
    //       required
    //     />
    //     <div className="buttons">
    //       <CustomButton type="submit">Sign in</CustomButton>
    //       <CustomButton
    //         type="button"
    //         onClick={googleSignInStart}
    //         isGoogleSignIn
    //       >
    //         Sign in with Google
    //       </CustomButton>
    //     </div>
    //   </form>
    // </div>

    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          handleChange={handleChange}
          value={email}
          label="email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          label="password"
          required
        />
        <ButtonsBarContainer>
          <CustomButton type="submit"> Sign in </CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign in with Google
          </CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
