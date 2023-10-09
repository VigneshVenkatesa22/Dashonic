import React from "react";

//import Breadcrumbs
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { Col, Container, Row } from "reactstrap";

const Sales = () => {
  document.title = "Sales | Dashonic - React Admin & Dashboard Template";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Dashonic" breadcrumbItem="Sales Analytics" />
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Sales;
