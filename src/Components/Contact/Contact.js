import React, { useState } from "react";
// import "./Home.css";
import {
    Layout, Menu, Card,
    Row,
    Carousel,
    Typography,
    Space,
    Form,
    Select,
    Slider,
    Button,
    Upload,
    Rate,
    Checkbox,
    Col, Input
} from 'antd';
import {
    PhoneOutlined,
    MobileOutlined,
    UploadOutlined, InboxOutlined,
    MailOutlined
} from '@ant-design/icons';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;


const { Text, Title, Paragraph } = Typography;
const {Content} = Layout;
const { SubMenu } = Menu;
const { Meta } = Card;
const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
};

const normFile = e => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
        return e;
    }
    return e && e.fileList;
};


export default function Contact() {

    const { Option } = Select;

    const [center, setCenter] = useState({ lat: 59.95, lng: 30.33 });
    const [zoom, setZoom] = useState(11);

    const onFinish = values => {
        console.log('Received values of form: ', values);
    };

    function onChange(a, b, c) {
        console.log(a, b, c);
    };

    const contentStyle = {
        height: '50vh',
        width: '100%',
        color: '#fff',
        // lineHeight: '160px',
        textAlign: 'center',
        paddingLeft: "15%",
        paddingRight: "20%",
        background: 'grey',


    };


    return (

        <Content style={{ margin: '0 16px' }}>
            <Row gutter={8} style={{ justifyContent: "flex-start", marginTop: "7%" }}>
                <div style={{ paddingLeft: "10%" }} className="site-card-border-less-wrapper">
                    <Card title="Contact information" bordered={false} style={{ width: 300, height: "100vh" }}>
                        <Paragraph copyable={{ icon: <MobileOutlined /> }}>6987654321.</Paragraph>
                        <Paragraph copyable={{ icon: <PhoneOutlined /> }}>2109876543</Paragraph>
                        <Paragraph copyable={{ icon: <MailOutlined /> }}>tade@email.gr</Paragraph>
                    </Card>
                </div>
                <div >

                </div>
                <div style={{ height: '100vh', width: '50%' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: "" }}
                        defaultCenter={center}
                        defaultZoom={zoom}
                    >
                        <AnyReactComponent
                            lat={59.955413}
                            lng={30.337844}
                            text="My Marker"
                        />
                    </GoogleMapReact>
                </div>
            </Row>
            <Title style={{ marginTop: "50px", marginBottom: "30px", marginLeft: "10%" }}>You can complete this form and we will contact you </Title>
            <Form
                name="validate_other"
                {...formItemLayout}
                onFinish={onFinish}
                initialValues={{
                    ['input-number']: 3,
                    ['checkbox-group']: ['A', 'B'],
                    rate: 3.5,
                }}
                style={{ marginTop: "70px" }}
            >

                <Form.Item label="E-mail">
                    <Input placeholder="e-mail" prefix={<MailOutlined />} />
                </Form.Item>
                <Form.Item
                    name="select"
                    label="Νομός"
                    hasFeedback
                    rules={[{ required: true, message: 'Παρακαλώ επιλέξτε τον Νομό του χώρου σας' }]}
                >
                    <Select placeholder="Παρακαλώ επιλέξτε τον Νομό του χώρου σας">
                        <Option value="china">Νομός Αττικής </Option>
                        <Option value="usa">Νομός Ανατολικής Αττικής</Option>
                        <Option value="usa">Νομός Δυτικής Αττικής</Option>
                        <Option value="usa">Νομός Πειραιά</Option>
                        <Option value="usa">Νομός Ευβοίας</Option>
                        <Option value="usa">Νομός Ευρυτανίας</Option>
                        <Option value="usa">Νομός Φωκίδας</Option>
                        <Option value="usa">Νομός Φθιώτιδας</Option>
                        <Option value="usa">Νομός Βοιωτίας</Option>
                        <Option value="usa">Νομός Χαλκιδικής</Option>

                    </Select>
                </Form.Item>

                <Form.Item
                    name="select-multiple"
                    label="Χρώμα δωματίου"
                    rules={[{ required: false, message: 'Please select your color!', type: 'array' }]}
                >
                    <Select mode="multiple" placeholder="You can select more than one">
                        <Option value="red">Red</Option>
                        <Option value="green">Green</Option>
                        <Option value="blue">Blue</Option>
                        <Option value="yellow">Yellow</Option>
                        <Option value="black">Black</Option>
                        <Option value="white">White</Option>
                    </Select>
                </Form.Item>
                <Form.Item name="checkbox-group" label="Δωμάτιο">
                    <Checkbox.Group>
                        <Row>
                            <Col span={8}>
                                <Checkbox value="A" style={{ lineHeight: '32px' }}>
                                    Κουζίνα
                                        </Checkbox>
                            </Col>
                            <Col span={8}>
                                <Checkbox value="B" style={{ lineHeight: '32px', paddingRight: "10px" }}>
                                    Μπάνιο
                                        </Checkbox>
                            </Col>
                            <Col span={8}>
                                <Checkbox value="C" style={{ lineHeight: '32px' }}>
                                    Υπνοδωμάτιο
                                        </Checkbox>
                            </Col>
                            <Col span={8}>
                                <Checkbox value="F" style={{ lineHeight: '32px' }}>
                                    Άλλο
                                        </Checkbox>
                            </Col>
                        </Row>
                    </Checkbox.Group>
                </Form.Item>
                <Form.Item label="You can Upload a design that you like and send it to us">
                    <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
                        <Upload.Dragger name="files" action="/upload.do">
                            <p className="ant-upload-drag-icon">
                                <InboxOutlined />
                            </p>
                            <p className="ant-upload-text">Click or drag file to this area to upload</p>
                            <p className="ant-upload-hint">Support for a single or bulk upload.</p>
                        </Upload.Dragger>
                    </Form.Item>
                </Form.Item>

                <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
        </Button>
                </Form.Item>
            </Form>

        </Content>

    );
}
