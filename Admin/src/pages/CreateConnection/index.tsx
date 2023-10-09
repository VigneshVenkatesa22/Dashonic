import React from "react";
import { Container, Card, CardBody, Button, Form, Input, Label } from "reactstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import withRouter from "src/components/Common/withRouter";

//Import Breadcrumb
import Breadcrumb from "../../components/Common/Breadcrumb";

const CreateConnection = () => {
    const validation = useFormik({
        enableReinitialize: true,
        initialValues: {
            username: "",
            password: "",
            account_id: ""
        },
        validationSchema: Yup.object({
            username: Yup.string().required("Please Enter Your UserName"),
            password: Yup.string().required("Please Enter Your Password"),
            account_id: Yup.string().required("Please Enter Your Account id")
        }),
        onSubmit: values => {
            console.log(values);
            // You can handle form submission logic here
        }
    });

    return (
        <React.Fragment>
            <div className="page-content">
                  {/* Render Breadcrumb */}
                <Breadcrumb title="Dashonic" breadcrumbItem="Create Connection" />
                <Container fluid>
                    <Card>
                        <CardBody>
                            <Form onSubmit={validation.handleSubmit}>
                                <div className="form-group mb-2">
                                    <Label className="form-label">User Name</Label>
                                    <Input
                                        name="username"
                                        className="form-control"
                                        placeholder="Enter User Name"
                                        type="text"
                                        onChange={validation.handleChange}
                                        onBlur={validation.handleBlur}
                                        value={validation.values.username}
                                    />
                                </div>
                                <div className="form-group mb-2">
                                    <Label className="form-label">Password</Label>
                                    <Input
                                        name="password"
                                        className="form-control"
                                        placeholder="Enter Password"
                                        type="password"
                                        onChange={validation.handleChange}
                                        onBlur={validation.handleBlur}
                                        value={validation.values.password}
                                    />
                                </div>
                                <div className="form-group mb-2">
                                    <Label className="form-label">Account code</Label>
                                    <Input
                                        name="account_id"
                                        className="form-control"
                                        placeholder="Enter Account Code"
                                        type="text"
                                        onChange={validation.handleChange}
                                        onBlur={validation.handleBlur}
                                        value={validation.values.account_id}
                                    />
                                </div>
                                <div className="text-center mt-4">
                                    <Button type="submit" color="danger">
                                        Submit
                                    </Button>
                                </div>
                            </Form>
                        </CardBody>
                    </Card>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default CreateConnection;
