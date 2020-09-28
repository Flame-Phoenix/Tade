import React , {useState} from 'react';
import {
    Modal,
    Avatar,
    Card,
    Row,
} from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import CustomPhotoAlbum from '../customPhotoAlbum/CustomPhotoAlbum.js';

const { Meta } = Card;

const ClassicKitchen = () => {

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

    return (
        <div>
            <Row gutter={16} style={{ justifyContent: "space-between", paddingTop: 20 }}>
                <Card
                    title="Classic Luminous Kitchen"
                    onClick={(e) => showModal("https://www.fylliana.gr/images/categories/epipla-tileorasis---syntheseis-tileorasi.jpg", e)}
                    hoverable
                    style={{ width: 240, margin: 10 }}
                    cover={<img alt="example" src="https://www.fylliana.gr/images/categories/epipla-tileorasis---syntheseis-tileorasi.jpg" />}
                >
                    <Meta title="By Jennifer Gilmer" description="click to see more" />

                </Card>
                <Card
                    title="Classic Luminous Kitchen"
                    onClick={(e) => showModal("https://panosoikia.gr/wp-content/uploads/2017/09/blog-epipla-saloniou-simvoules.jpg", e)}
                    hoverable
                    style={{ width: 240, margin: 10 }}
                    cover={<img alt="example" src="https://panosoikia.gr/wp-content/uploads/2017/09/blog-epipla-saloniou-simvoules.jpg" />}
                >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
                <Card
                    title="Modern Luminous Kitchen"
                    onClick={(e) => showModal("https://easystoneshop.com/_resources/fabuwood/rooms/Nexus%20Slate%20Frost/1%20Kitchen.jpg", e)}
                    hoverable
                    style={{ width: 240, margin: 10 }}
                    cover={<img alt="example" src="https://easystoneshop.com/_resources/fabuwood/rooms/Nexus%20Slate%20Frost/1%20Kitchen.jpg" />}
                >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
                <Card
                    title="Modern Luminous Kitchen"
                    onClick={(e) => showModal("https://ivdesign.gr/images/template-content/oikiaka%20epipla.jpg", e)}
                    hoverable
                    style={{ width: 240, margin: 10 }}
                    cover={<img alt="example" src="https://ivdesign.gr/images/template-content/oikiaka%20epipla.jpg" />}
                >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
                <Card
                    title="Modern Luminous Kitchen"
                    onClick={(e) => showModal("https://www.epipla-mavrogiannis.com/wp-content/uploads/2015/04/%CF%84%CF%81%CE%B1%CF%80%CE%B5%CE%B6%CE%B1%CF%81%CE%B9%CE%B5%CF%82-4-8.jpg", e)}
                    hoverable
                    style={{ width: 240, margin: 10 }}
                    cover={<img alt="example" src="https://www.epipla-mavrogiannis.com/wp-content/uploads/2015/04/%CF%84%CF%81%CE%B1%CF%80%CE%B5%CE%B6%CE%B1%CF%81%CE%B9%CE%B5%CF%82-4-8.jpg" />}
                >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
                <Modal
                    style={{ border: "1px" }}
                    width="170vh"
                    footer={null}
                    visible={visible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                >
                    <CustomPhotoAlbum />
                </Modal>
            </Row>
        </div>
    );

}

export default ClassicKitchen;