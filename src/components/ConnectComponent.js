import React from 'react';
import { AccountConnection } from '@shopify/polaris';

const ConnectComponent = ({ accountName, connected, onClick }) => (
  <AccountConnection
    accountName={accountName}
    connected={connected}
    title={accountName}
    action={{
      content: connected ? 'Connect' : 'Disconnect',
      onAction: onClick()
    }}
    details={
      connected
        ? 'Your account is correctly connected.'
        : 'You need to connect your youtube account to upload the videos.'
    }
  />
);

export default ConnectComponent;
