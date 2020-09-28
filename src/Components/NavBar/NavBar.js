import React, { useState } from "react";
import { Layout, Menu, Card, Row, Carousel, Typography, Space, Modal, Button } from 'antd';
import { Link } from "react-router-dom";


function MyMenu({ quantity, addToCart }) {
    return (

        <div className="item-2">
            <div><a href="#"><strong>CART</strong>
                <img src="../icon/shopping-cart.svg" width="20px" alt="" />
                {/* {addToCart == true ? circle(quantity) : null} */}
            </a></div>
            <div><a href="#"> <strong>ENGLISH</strong> / বাংলা</a></div>
        </div>

    )
}


const NavBar = () => {

    return (
        <>
            <div className="logo" ></div>
            <Menu style={{ background: "black" }} selectable={false} theme="dark" mode="horizontal">
                <Menu.Item style={{ fontSize: "70px", color: "white", paddingRight: "50%" }}><Link to='/'></Link>Tade</Menu.Item>
                <Menu.Item key="1"><Link to='/contact'></Link>Επικοινωνία</Menu.Item>
                <Menu.Item key="2"><Link to='/kitchen'></Link>Κουζίνες</Menu.Item>
                <Menu.Item key="3"><Link to='/products'></Link>Προιόντα</Menu.Item>
                <Menu.Item key="4">
                    
                </Menu.Item>
            </Menu>
        </>
    )
}

export default NavBar;