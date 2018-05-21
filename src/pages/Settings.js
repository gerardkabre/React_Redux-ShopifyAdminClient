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

  generateRows = clear => {
    if (clear) {
      return this.setState({ tableRows: [['', 'No products selected', '']] });
    }
    if (this.state.selectedProducts.length > 0) {
      let tableProductsArray = [];
      this.state.selectedProducts.map(product => {
        tableProductsArray.push([
          product.id,
          product.title,
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
          />
          <Layout.AnnotatedSection
            title="Product selection"
            description="Select from which products do you want to create the videos."
          >
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
                headings={['ID', 'Product', 'Type']}
                rows={this.state.tableRows}
              />
            </Card>
            <div style={{ margin: 10 }} />
            {this.state.selectedProducts.length <= 0 ? (
              <Button fullWidth onClick={() => this.setState({ open: true })}>
                Select products
              </Button>
            ) : (
              <div>
                <Button
                  fullWidth
                  primary
                  onClick={() => console.log(this.state.selectedProducts)}
                >
                  Add to the queue
                </Button>
                <div style={{ margin: 10, textAlign: 'center' }}>or</div>
                <Button
                  fullWidth
                  destructive
                  onClick={() => {
                    this.setState({ selectedProducts: [] });
                    this.generateRows(true);
                  }}
                >
                  Unselect prodcuts
                </Button>
              </div>
            )}
          </Layout.AnnotatedSection>
        </Layout>
      </Page>
    );
  }
}

export default Settings;
