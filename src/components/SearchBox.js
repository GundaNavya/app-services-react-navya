import React, {Component} from 'react';


  class Products extends React.Component {
    
      constructor(props) {
        super(props);
    
        //  this.state.products = [];
        this.state = {};
        this.state.filterText = "";
        this.state.products = [
          {
            id: 1,
            category: 'Sporting Goods',
            price: '49.99',
            qty: 12,
            name: 'Football'
          }, {
            id: 2,
            category: 'Sporting Goods',
            price: '9.99',
            qty: 15,
            name: 'Baseball'
          }, {
            id: 3,
            category: 'Sporting Goods',
            price: '29.99',
            qty: 14,
            name: 'Basketball'
          }, {
            id: 4,
            category: 'Electronics',
            price: '99.99',
            qty: 34,
            name: 'iPod Touch'
          }, {
            id: 5,
            category: 'Electronics',
            price: '399.99',
            qty: 12,
            name: 'iPhone 5'
          }, {
            id: 6,
            category: 'Electronics',
            price: '199.99',
            qty: 23,
            name: 'Nexu 7'
          }
        ];
    
      }
      handleUserInput(filterText) {
        this.setState({filterText: filterText});
      };
      handleRowDel(product) {
        var index = this.state.products.indexOf(product);
        this.state.products.splice(index, 1);
        this.setState(this.state.products);
      };
    
      handleAddEvent(evt) {
        var id = (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);
        var product = {
          id: id,
          name: "",
          price: "",
          category: "",
          qty: 0
        }
        this.state.products.push(product);
        this.setState(this.state.products);
    
      }
    
      handleProductTable(evt) {
        var item = {
          id: evt.target.id,
          name: evt.target.name,
          value: evt.target.value
        };
        var products = this.state.products;
    
        var newProducts = products.map(function(product) {
          for (var key in product) {
            if (key == item.name && product.id == item.id) {
              product[key] = item.value;
    
            }
          }
          return product;
        });
        this.setState(newProducts);
        console.log(this.state.products);
      };
      render() {
    
        return (
          <div>
            <SearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput.bind(this)}/>
            <ProductTable onProductTableUpdate={this.handleProductTable.bind(this)} onRowAdd={this.handleAddEvent.bind(this)} onRowDel={this.handleRowDel.bind(this)} products={this.state.products} filterText={this.state.filterText}/>
          </div>
        );
    
      }
    
  }
    class SearchBar extends React.Component {
      handleChange() {
        this.props.onUserInput(this.refs.filterTextInput.value);
      }
      render() {
        return (
          <div>
    
            <input type="text" placeholder="Search..." value={this.props.filterText} ref="filterTextInput" onChange={this.handleChange.bind(this)}/>
    
          </div>
    
        );
      }
    
    }
    
    class ProductTable extends React.Component {
    
      render() {
        var onProductTableUpdate = this.props.onProductTableUpdate;
        var rowDel = this.props.onRowDel;
        var filterText = this.props.filterText;
        var product = this.props.products.map(function(product) {
          if (product.name.indexOf(filterText) === -1) {
            return;
          }
          return (<ProductRow onProductTableUpdate={onProductTableUpdate} product={product} onDelEvent={rowDel.bind(this)} key={product.id}/>)
        });
        return (
          <div>
    
    
          <button type="button" onClick={this.props.onRowAdd} className="btn btn-success pull-right">Add</button>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>price</th>
                  <th>quantity</th>
                  <th>category</th>
                </tr>
              </thead>
    
              <tbody>
                {product}
    
              </tbody>
    
            </table>
          </div>
        );
    
      }
    
    }
    
    class ProductRow extends React.Component {
      onDelEvent() {
        this.props.onDelEvent(this.props.product);
    
      }
      render() {
    
        return (
          <tr className="eachRow">
            <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
              "type": "name",
              value: this.props.product.name,
              id: this.props.product.id
            }}/>
            <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
              type: "price",
              value: this.props.product.price,
              id: this.props.product.id
            }}/>
            <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
              type: "qty",
              value: this.props.product.qty,
              id: this.props.product.id
            }}/>
            <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
              type: "category",
              value: this.props.product.category,
              id: this.props.product.id
            }}/>
            <td className="del-cell">
              <input type="button" onClick={this.onDelEvent.bind(this)} value="X" className="del-btn"/>
            </td>
          </tr>
        );
    
      }
    
    }
    class EditableCell extends React.Component {
    
      render() {
        return (
          <td>
            <input type='text' name={this.props.cellData.type} id={this.props.cellData.id} value={this.props.cellData.value} onChange={this.props.onProductTableUpdate}/>
          </td>
        );
    
      }
    
    }

    export default Products;
    // React.render( < Products / > , document.getElementById('container'));
    
    /*
    (The MIT License)
    
    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
    */
    