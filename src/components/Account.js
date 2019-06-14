import React, { useContext, } from "react";
import { Card, Image, } from "semantic-ui-react";
import { AccountContext, } from "../providers/AccountProvider";

const Account = () => {
  const { firstName, email, } = useContext(AccountContext);

  return (
    <Card>
      <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
      <Card.Content>
        <Card.Header>Profile</Card.Header>
        <Card.Meta>
          { firstName } 
        </Card.Meta>
      </Card.Content>
      <Card.Content>
        <p>{ email }</p>
      </Card.Content>
    </Card>
  )
};

export default Account;
