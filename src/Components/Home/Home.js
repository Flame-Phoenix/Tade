import React, { useState } from "react";
import "./Home.css";
import {
    Modal,
    Layout,
    Menu,
    Card,
    Row,
    Carousel,
    Typography,
    Space,
    Form,
    Select,
    Button,
    Upload,
    Checkbox,
    Col, Input
} from 'antd';
import {
    PhoneOutlined,
    MobileOutlined,
    InboxOutlined,
    MailOutlined
} from '@ant-design/icons';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;


const { Text, Title, Paragraph } = Typography;
const { Content } = Layout;
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


export default function Home() {
    const { Option } = Select;

    const [center, setCenter] = useState({ lat: 59.95, lng: 30.33 });
    const [zoom, setZoom] = useState(11);
    const onFinish = values => {
        console.log('Received values of form: ', values);
    };
    function onChange(a, b, c) {
        console.log(a, b, c);
    }
    const [visible, setVisible] = useState(false);
    const [image, setImage] = useState("");

    const showModal = (e) => {
        setVisible(true);
        setImage(e);
    };

    const handleOk = e => {
        console.log(e);
        setVisible(false);
    };

    const handleCancel = e => {
        console.log(e);
        setVisible(false);
    }

    const contentStyle = {
        height: '50vh',
        width: '100%',
        color: '#fff',
        // lineHeight: '160px',
        textAlign: 'center',
        paddingLeft: "15%",
        paddingRight: "20%",
        background: 'grey',
        border: '1px solid ',
        borderBottomLeftRadius: "50%",
        borderBottomRightRadius: "20%",
        borderTopLeftRadius: "20%",
        borderTopRightRadius: ' 50%',


    };

    return (
        <>
            <Carousel effect="fade" afterChange={onChange} autoplay>
                <div>
                    <img style={contentStyle} alt="Kitchen" src="../../slider-kitchens.jpg" />
                </div>
                <div>
                    <img style={contentStyle} alt="Kitchen" src="https://cdn.trendswoodfinishing.com/wp-content/uploads/2016/03/glass-doorcab.jpg" />
                </div>
                <div>
                    <img style={contentStyle} alt="Kitchen" src="https://media.architecturaldigest.com/photos/5ea85f9f442ae00007c8b9d2/16:9/w_2560%2Cc_limit/GettyImages-1131001476.jpg" />
                </div>
                <div>
                    <img style={contentStyle} alt="Kitchen" src="https://cdn11.bigcommerce.com/s-r7ihvq/images/stencil/original/carousel/59/HomeSlider2.png?c=3" />
                </div>
            </Carousel>
            <Content style={{ margin: '0 16px' }}>
                <div className="site-layout-background" style={{ padding: 24, minHeight: 360, marginTop: 50 }}>
                    <div style={{ display: "flex", justifyContent: "space-evenly", marginBottom: 50 }}>
                        <div style={{ display: "flex", flexDirection: "column", margin: 5 }}>
                            <Title>Έπιπλα Κουζίνας</Title>
                            <img className="categories"
                                width={"450vh"}
                                height={"100%"}
                                src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ph163819-priority-1580934887.jpg"
                            />

                        </div>
                        <div style={{ display: "flex", flexDirection: "column", margin: 5 }}>
                            <Title>Προιόντα</Title>
                            <img className="categories"
                                width={"100%"}
                                height={"100%"}
                                src="https://scontent.fath7-1.fna.fbcdn.net/v/t1.0-9/89155761_2744886835627657_5378214024359968768_n.jpg?_nc_cat=104&_nc_sid=dd9801&_nc_ohc=ooGrVenfZ4kAX9CiOut&_nc_ht=scontent.fath7-1.fna&oh=5c61e30378c8cca82a8d197520146298&oe=5F8D5040"
                            />

                        </div>
                        <div style={{ display: "flex", flexDirection: "column", margin: 5 }}>
                            <Title>Επικοινωνία</Title>
                            <img className="categories"
                                width={"100%"}
                                height={"100%"}
                                src="https://cdn.shopify.com/s/files/1/1094/9426/files/nunawading-store-hero-image-800x400_faaedbd3-aed0-4fd4-92fa-6722f9affbe9.jpg?v=1494567040"
                            />

                        </div>
                    </div>
                    <div style={{ paddingBottom: 100, paddingLeft: 40, borderBlock: "10px", borderStyle: "solid", borderRadius: '20px' }}>
                        <Title>Who are we?</Title>
                        <Space></Space>
                        <Text style={{ fontSize: "20px", padding: 40 }}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at nibh eget turpis tincidunt lobortis. Vestibulum rhoncus urna tortor, non dictum libero rhoncus id. Donec ut mattis dolor. Pellentesque a iaculis tortor. Vestibulum lorem erat, finibus ac interdum nec, tristique at sem. Praesent nibh mauris, consectetur in tincidunt ut, rhoncus vulputate arcu. Integer semper nunc quis purus cursus aliquet. Mauris ut ligula erat. Curabitur ornare, eros sed eleifend elementum, purus velit volutpat ipsum, ut efficitur libero justo non lorem. Integer accumsan at diam eu venenatis. Morbi egestas arcu est, quis sollicitudin purus dignissim a.

                        Maecenas fermentum erat orci, id porttitor massa congue sit amet. Ut tristique interdum vestibulum. Ut tempor scelerisque egestas. Sed sollicitudin sodales risus, eu viverra urna maximus eget. Morbi lacinia justo dui, at placerat lectus fringilla et. Sed vel leo in enim tristique pellentesque. Sed quis turpis ac erat vestibulum lacinia gravida et ex. Donec vehicula vehicula elit, eu consequat tortor interdum ut. Vestibulum eu neque at dolor ultrices porttitor. Pellentesque accumsan fringilla sollicitudin. Cras imperdiet diam sed mollis porta. Curabitur id tellus pretium, tristique elit et, hendrerit odio. Proin vel arcu mi. Aenean pharetra, dolor sed aliquet pretium, enim augue porta ligula, quis eleifend turpis augue maximus turpis. Maecenas sed nunc egestas, egestas arcu et, tincidunt sapien. Vestibulum vitae ligula nulla.
                        </Text>
                    </div>
                    <Row gutter={16} style={{ justifyContent: "space-between", paddingTop: 20 }}>
                        <Card
                            onClick={(e) => showModal("https://www.fylliana.gr/images/categories/epipla-tileorasis---syntheseis-tileorasi.jpg", e)}
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src="https://www.fylliana.gr/images/categories/epipla-tileorasis---syntheseis-tileorasi.jpg" />}
                        >
                            <Meta title="Europe Street beat" description="www.instagram.com" />

                        </Card>
                        <Card
                            onClick={(e) => showModal("https://panosoikia.gr/wp-content/uploads/2017/09/blog-epipla-saloniou-simvoules.jpg", e)}
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src="https://panosoikia.gr/wp-content/uploads/2017/09/blog-epipla-saloniou-simvoules.jpg" />}
                        >
                            <Meta title="Europe Street beat" description="www.instagram.com" />
                        </Card>
                        <Card
                            onClick={(e) => showModal("https://easystoneshop.com/_resources/fabuwood/rooms/Nexus%20Slate%20Frost/1%20Kitchen.jpg", e)}
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src="https://easystoneshop.com/_resources/fabuwood/rooms/Nexus%20Slate%20Frost/1%20Kitchen.jpg" />}
                        >
                            <Meta title="Europe Street beat" description="www.instagram.com" />
                        </Card>
                        <Card
                            onClick={(e) => showModal("https://ivdesign.gr/images/template-content/oikiaka%20epipla.jpg", e)}
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src="https://ivdesign.gr/images/template-content/oikiaka%20epipla.jpg" />}
                        >
                            <Meta title="Europe Street beat" description="www.instagram.com" />
                        </Card>
                        <Card
                            onClick={(e) => showModal("https://www.epipla-mavrogiannis.com/wp-content/uploads/2015/04/%CF%84%CF%81%CE%B1%CF%80%CE%B5%CE%B6%CE%B1%CF%81%CE%B9%CE%B5%CF%82-4-8.jpg", e)}
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src="https://www.epipla-mavrogiannis.com/wp-content/uploads/2015/04/%CF%84%CF%81%CE%B1%CF%80%CE%B5%CE%B6%CE%B1%CF%81%CE%B9%CE%B5%CF%82-4-8.jpg" />}
                        >
                            <Meta title="Europe Street beat" description="www.instagram.com" />
                        </Card>
                        <Modal
                            width="685px"
                            footer={null}
                            visible={visible}
                            onOk={handleOk}
                            onCancel={handleCancel}
                        >
                            <img alt="image" src={image} style={{ width: "640px", height: "480px" }} />

                        </Modal>
                    </Row>
                </div>
            </Content>
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
        </>

    );
}
