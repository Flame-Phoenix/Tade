import React, { useState } from 'react';
import { Col, Layout, Slider, Row, InputNumber, Checkbox } from 'antd';
import './Products.css';
import ShoppingCart from '../ShoppingCart/ShoppingCart.js';

const { Sider, Content } = Layout;
const CheckboxGroup = Checkbox.Group;

const plainOptions = ['Κουζίνα', 'Σαλόνι', 'Κρεβατοκάμαρα'];
const defaultCheckedList = [];

const Products = () => {

    const [inputValue, setInputValue] = useState(1);
    const [checkedList, setCheckedList] = useState(defaultCheckedList);
    const [indeterminate, setIndeterminate] = useState(true);
    const [checkAll, setCheckAll] = useState(false);

    const onChangeList = checkedList => {
        setIndeterminate(!!checkedList.length && checkedList.length < plainOptions.length);
        setCheckAll(checkedList.length === plainOptions.length);
        setCheckedList(checkedList);
    };

    const onCheckAllChange = e => {
        setCheckAll(e.target.checked)
        setCheckedList(e.target.checked ? plainOptions : []);
        setIndeterminate(false);
        ;
    };

    const onChange = value => {
        setInputValue(value);
    };

    return (
        <>
            <Sider className="sider"
                width={"25%"}
            >
                <Row className="slider">
                    Price
                    <Col style={{ padding: "10px" }} span={12}>

                        <Slider
                            min={1}
                            max={5000}
                            onChange={onChange}
                            value={typeof inputValue === 'number' ? inputValue : 0}
                        />
                    </Col>
                    <Col span={4}>
                        <InputNumber
                            min={1}
                            max={5000}
                            style={{ margin: '0 16px' }}
                            value={inputValue}
                            onChange={onChange}
                        />
                    </Col>
                </Row>
                <div>
                    <Checkbox
                        style={{color:"white",fontSize:"30px"}}
                        indeterminate={indeterminate}
                        onChange={onCheckAllChange}
                        checked={checkAll}
                    >
                        Check all
                    </Checkbox>
                </div>
                
                <CheckboxGroup
                    style={{WebkitTextFillColor:"white"}}
                    options={plainOptions}
                    value={checkedList}
                    onChange={onChangeList}
                />
            </Sider>
            <Content style={{display:'grid',justifyContent:'center'}}>
                <ShoppingCart/>
            </Content>
        </>
    );
}


export default Products;