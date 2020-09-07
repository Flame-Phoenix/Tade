import React, { useState } from "react";
import "./Home.css";
import { Layout, Menu, Card, Row, Carousel, Typography, Space, Modal } from 'antd';



const { Text, Title } = Typography;
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { Meta } = Card;

export default function Home() {

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
        <Layout style={{ minHeight: '100vh', fontFamily: "Dancing Script" }}>
            <Header style={{ background: "black" }}>
                <div className="logo" ></div>
                <Menu style={{ background: "black" }} selectable={false} theme="dark" mode="horizontal">
                    <Menu.Item style={{ fontSize: "70px", color: "white", paddingRight: "50%" }}>Tade</Menu.Item>
                    <Menu.Item key="1">Επικοινωνία</Menu.Item>
                    <Menu.Item key="2">Έπιπλα Κουζίνας</Menu.Item>
                    <Menu.Item key="3">Προιόντα</Menu.Item>
                </Menu>
            </Header>
            <Layout className="site-layout" style={{backgroundColor:'rgb(240, 240, 240)'}}>
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
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        <div style={{ paddingBottom: 100, paddingLeft: 40, borderBlock: "10px", borderStyle: "solid" ,borderRadius:'20px'}}>
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
                <Footer style={{ textAlign: 'center' }}>Ant Design Created by Thanos Karakostas</Footer>
            </Layout>
        </Layout>

    );
}
