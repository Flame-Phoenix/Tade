import React, { useState, useCallback } from "react";
import CustomToggleSwitch from '../CustomToggleSwitch/CustomToggleSwitch.js';
import ModernKitchen from '../modernKitchen/ModernKitchen.js';
import ClassicKitchen from '../classicKitchen/ClassicKitchen.js';
import {
    Layout
} from 'antd';



const { Content } = Layout;







export default function Kitchen() {

    const [change, setChange] = useState(true);

    const onChange = () => {
        setChange(!change);

    }

    return (
        <>
            <div style={{ margin: '0 16px', display: "flex", justifyContent: "center" }}>
                <CustomToggleSwitch name="Kitchen" isToggled={change} onToggled={onChange} />
            </div>
            <Content style={{ margin: '0 16px', display: "flex", justifyContent: "center" }}>
                {(change) ? <ModernKitchen /> : <ClassicKitchen />}
            </Content>
        </>

    );
}
