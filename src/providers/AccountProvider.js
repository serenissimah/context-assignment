import React from "react";

// Setup the initial context
export const AccountContext = React.createContext();

// Create an exportable consumer that can be injected into components
export const AccountConsumer = AccountContext.Consumer;

// Create the provider using a traditional React.Component
class AccountProvider extends React.Component {
  state = {
    firstName: "Julius",
    lastName: "Cesar",
    email: "juliuscesar@theemperor.com",
    updateAccount: (account) => this.updateAccount(account),
  };

  updateAccount = (account) => {
    this.setState({ ...account, });
  };

  render() {
    return(
      <AccountContext.Provider value={this.state}>
        { this.props.children }
      </AccountContext.Provider>
    );
  };
};


export default AccountProvider;
