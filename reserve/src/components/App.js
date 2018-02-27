import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { Grid, Row, Col } from 'react-bootstrap';


class App extends Component {
  render() {
    return (
        <div className="container-fluid Hungry-background">
          <Row>
            <Col lg={12} md={12} xs={12}>
              <div className="rectangle">
                
              </div>
            </Col>
          </Row>
        </div>
    );
  }
}

export default App;
