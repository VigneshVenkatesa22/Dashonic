import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";

interface BreadcrumbProps {
  breadcrumbItem: string;
  title: string;
}

const Breadcrumb = ({ breadcrumbItem, title }: BreadcrumbProps) => {
  return (
    <Row>
      <Col xs="12">
        <div className="page-title-box d-flex align-items-center justify-content-between">
          <h4 className="mb-sm-0">{breadcrumbItem}</h4>
          <div className="page-title-right">
            <ol className="breadcrumb m-0">
              <li className="breadcrumb-item"><Link to="#">{title}</Link></li>
              <li className="breadcrumb-item active">{breadcrumbItem}</li>
            </ol>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Breadcrumb;