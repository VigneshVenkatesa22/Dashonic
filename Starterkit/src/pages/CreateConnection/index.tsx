import React, { useState } from "react";
import { Container, Card, CardBody, Button, Form, Input, Label, FormFeedback } from "reactstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

// Import Breadcrumb
import Breadcrumb from "../../components/Common/Breadcrumb";

const CreateConnection = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [account_id, setAccountId] = useState<string>("");

    const validation = useFormik({
        enableReinitialize: true,
        initialValues: {
            username: username || "",
            password: password || "",
            account_id: account_id || "",
        },
        validationSchema: Yup.object({
            username: Yup.string().required("Please Enter Your UserName"),
            password: Yup.string().required("Please Enter Your Password"),
            account_id: Yup.string().required("Please Enter Your Account id"),
        }),

        onSubmit: values => {
            console.log(values.username + values.password + values.account_id)
            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: 'https://developintg.ongage.net/56181/api/export',
                headers: {
                    'X_USERNAME': values.username,
                    'X_PASSWORD': values.password,
                    'X_ACCOUNT_CODE': values.account_id,
                    'Content-Type': 'application/json'
                },
                data :JSON.stringify({"segment_id": 2962884,"name":"test"})
            };
            axios.request(config)
                .then((response) => {
                   
                })
                .catch((error) => {
                    console.log(error);
                });
        },
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
                                        value={validation.values.username || ""}
                                        invalid={
                                            validation.touched.username && validation.errors.username ?
                                                true : false
                                        }
                                    />
                                    {validation.touched.username && validation.errors.username ? (
                                        <FormFeedback type="invalid">
                                            {validation.errors.username}
                                        </FormFeedback>
                                    ) : null}
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
                                        value={validation.values.password || ""}
                                        invalid={
                                            validation.touched.password && validation.errors.password ?
                                                true : false
                                        }
                                    />
                                    {validation.touched.password && validation.errors.password ? (
                                        <FormFeedback type="invalid">
                                            {validation.errors.password}
                                        </FormFeedback>
                                    ) : null}
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
                                        value={validation.values.account_id || ""}
                                        invalid={
                                            validation.touched.account_id && validation.errors.account_id
                                                ? true
                                                : false
                                        }
                                    />
                                    {validation.touched.account_id && validation.errors.account_id ? (
                                        <FormFeedback type="invalid">
                                            {validation.errors.account_id}
                                        </FormFeedback>
                                    ) : null}
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
