/*!

=========================================================
* Now UI Dashboard React - v1.4.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";

import { thead } from "variables/general";
import axios from "axios";


class RegularTables extends React.Component {

  state = {
    owenerData: []
  }

  componentDidMount = () => {
   this.getOwernerData();
  }

  getOwernerData = () => {
    axios.get('http://localhost:3000/api/ownerDisplay',
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      // console.log(response.data);
      this.setState({owenerData: response.data})
    });
  }

  render() {
    const { owenerData } = this.state;
    return (
      <>
        <PanelHeader size="sm" />
        <div className="content ">
          <Row>
            <Col xs={12}>
              <Card>
                <CardHeader>
                  <CardTitle tag="h4" className="font-weight-bold">All Propertys owners</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead className="text-primary font-weight-bold">
                      <tr>
                        {thead.map((prop, key) => {
                          if (key === thead.length - 1)
                            return (
                              <th key={key} className="text-right font-weight-bold">
                                {prop}
                              </th>
                            );
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {owenerData.map((e, key) => {
                        return (
                          <tr key={`${key}-key`} className="text-left">
                           <td className="text-left font-weight-bold">
                              {e.name}
                            </td>
                            <td className="text-left font-weight-bold">
                              {e.email}
                            </td>
                            <td className="text-left font-weight-bold">
                              {e.gender}
                            </td>
                            <td className="text-right font-weight-bold">
                              {e.phone}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default RegularTables;
