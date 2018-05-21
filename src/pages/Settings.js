import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

import {
  TextField,
  Page,
  Card,
  Button,
  Layout,
  FormLayout,
  DataTable,
  ButtonGroup,
  AccountConnection
} from '@shopify/polaris';

import { ResourcePicker } from '@shopify/polaris/embedded';

class Settings extends Component {
  state = {
    open: false,
    selectedProducts: [],
    connected: false,
    accountName: 'Not connected',
    tableRows: [['', 'No products selected', '']]
  };

  generateRows = () => {
    if (this.state.selectedProducts) {
      let tableProductsArray = [];
      this.state.selectedProducts.map(product => {
        tableProductsArray.push([
          product.title,
          product.id,
          product.product_type
        ]);
      });
      this.setState({ tableRows: tableProductsArray });
    }
  };

  render() {
    return (
      <Page title="Settings" separator>
        <Layout>
          <Layout.AnnotatedSection
            title="Youtube account Connection"
            description="Connect the Youtube account to which you want to upload the videos."
          >
            <AccountConnection
              accountName={this.state.accountName}
              connected={this.state.connected}
              title={this.state.accountName}
              action={{
                content: 'Connect',
                onAction: () => this.setState({ connected: true })
              }}
              details={
                this.state.connected
                  ? 'Your account is correctly connected.'
                  : 'You need to connect your youtube account to upload the videos.'
              }
            />
          </Layout.AnnotatedSection>
          <Layout.AnnotatedSection
            title="Product selection"
            description="Select from which products do you want to create the videos."
          >
            <ButtonGroup>
              <Button onClick={() => this.setState({ open: true })}>
                Select products
              </Button>
              <Button primary>Save</Button>
            </ButtonGroup>
            <ResourcePicker
              products
              allowMultiple
              open={this.state.open}
              onSelection={resources => {
                console.log('Selected products: ', resources.products);
                this.setState({
                  open: false,
                  selectedProducts: resources.products
                });
                this.generateRows();
              }}
              onCancel={() => this.setState({ open: false })}
            />
            <div style={{ margin: 10 }} />
            <Card>
              <DataTable
                columnContentTypes={['number', 'text', 'text']}
                headings={['ID', 'Product', 'Something']}
                rows={this.state.tableRows}
              />
            </Card>
          </Layout.AnnotatedSection>
        </Layout>
      </Page>
    );
  }
}

export default Settings;
