import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

import {
  TextField,
  Page,
  Card,
  Button,
  Layout,
  FormLayout
} from '@shopify/polaris';

class Settings extends Component {
  render() {
    return (
      <Page
        title="Settings"
        separator
        secondaryActions={[
          {
            content: 'Account Conection',
         //    onAction: () => this.props.history.push('/')
          }
        ]}
      >
        <Layout>
          <Layout.AnnotatedSection
            title="Store details"
            description="Shopify and your customers will use this information to contact you."
          >
            <Card sectioned>
              <FormLayout>
                <TextField label="Store name" />
                <TextField type="email" label="Account email" />
              </FormLayout>
            </Card>
          </Layout.AnnotatedSection>
        </Layout>
      </Page>
    );
  }
}

export default Settings;
