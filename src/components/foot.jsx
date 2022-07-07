import React from "react";
import styled from 'styled-components';
import '../styles/NavBar.css';
import {GithubOutlined, LinkedinOutlined} from '@ant-design/icons';
import {Button} from "antd";



///////////////////////////////////////
// Styled Component
///////////////////////////////////////


const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  flex-direction: column;
  height: auto;
  min-height: 70px;
  padding: 10px 0;
  text-align: center;
`;

class Foot extends React.Component {
    state = {navRight: [{
        id: 1, value: "Github", href: "https://github.com/benjamin-sylvanus", icon: <GithubOutlined/>
    }, {

    id: 2,
    value: "LinkedIn",
    href: "https://www.linkedin.com/in/benjamin-sylvanus-930640229/",
    icon: <LinkedinOutlined/>

},]}

    render() {

        return (
            <div className={'-foot'}>
            <StyledFooter>
                    <div  style={{display:"flex",flexDirection: "row", justifyContent: "space-around", alignContent:"center", alignItems: "center"}}>
                            <Button type={"text"} ghost={true} size={"middle"} icon={this.state.navRight[1].icon}  href={this.state.navRight[1].href} >
                            </Button>
                        Designed and Built by Benjamin Sylvanus 2022
                            <Button type={"text"} ghost={true} size={"middle"} icon={this.state.navRight[0].icon} href={this.state.navRight[0].href} shape={"default"}>
                            </Button>
                        </div>
            </StyledFooter>
            </div>
        );
    }
}

export default Foot;