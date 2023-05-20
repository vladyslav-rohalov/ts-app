import React from 'react';

interface IContext {
  isAuth: boolean;
  toggleAuth: () => void;
}

const AuthContext = React.createContext<IContext>({
  isAuth: false,
  toggleAuth: () => {},
});

class Login extends React.Component {
  static contextType = AuthContext;
  context!: React.ContextType<typeof AuthContext>;

  render() {
    const { toggleAuth, isAuth } = this.context;

    return <button onClick={toggleAuth}>{!isAuth ? 'Login' : 'Logout'}</button>;
  }
}

const Profile: React.FC = (): React.ReactElement => {
  return (
    <AuthContext.Consumer>
      {({ isAuth }: IContext) => (
        <h2>{!isAuth ? 'Please log in' : 'You are log in'}</h2>
      )}
    </AuthContext.Consumer>
  );
};

class Context extends React.Component<{}, { isAuth: boolean }> {
  readonly state = {
    isAuth: false,
  };

  toggleAuth = () => {
    this.setState(({ isAuth }) => {
      return { isAuth: !isAuth };
    });
  };

  render() {
    const { isAuth } = this.state;
    const context: IContext = { isAuth, toggleAuth: this.toggleAuth };
    return (
      <AuthContext.Provider value={context}>
        <Login />
        <Profile />
      </AuthContext.Provider>
    );
  }
}

export default Context;
