import React, { Component } from 'react';

import {
  AppProvider,
  Page,
  Card,
  Button,
  Layout,
  AccountConnection
} from '@shopify/polaris';

class Dashboard extends Component {
  render() {
    return (
      <Page title="Video Marketing" separator>
        <Layout>
          <Layout.Section>
            <Card title="Online store dashboard" sectioned>
              <p>Welcome to Shopify Vieo Marketing.</p>
            </Card>
            <AccountConnection
              accountName={'accountName'}
              connected={'connected'}
              title="Example App"
              action={{
                content: () => alert('e'),
                onAction: () => alert('o')
              }}
              details={'details'}
              termsOfService={'terms'}
            />
          </Layout.Section>
        </Layout>
      </Page>
    );
  }
}

export default Dashboard;
