import {Component} from "react";
import React from 'react';
import '../styles/WorkExperience.css';
import {Divider, Card, Row, Col} from 'antd';
import HRV from '../img/HRVSignal.png';
import HEART from '../img/heart.png';
import NEURON from '../img/neuron1.png';

class Experience extends Component {
    state = {
        langList: ['Java', 'Python', 'C++', 'SQL', 'React', 'CSS', 'HTML'],
        imageWrapper: "image-holder-wrapper",
        data: [{
            title: 'Fixcell', value: <ul className='ul-left' style={{}}>
                <p>Opensource solution for modifying and correcting irregular Neuron skeletons </p>
            </ul>, date: "2021-2022", row: 0, img: NEURON, imageWrapper: "image-holder-wrapper", id: 1,  classType: "ant-card-hoverable wrapper-card image-holder"
        }, {
            title: 'Microfluidics', value: <ul className='ul-left' style={{}}>
                <p>Developed and tested a functional prototype for interfacing with CELLINKS 3d bioprinted
                    constructs</p>
            </ul>, date: "2022", row: 0, img: HEART, imageWrapper: "image-holder-wrapper", id: 2,  classType: "ant-card-hoverable wrapper-card image-holder"
        }, {
            title: 'HRV Monitor', value: <ul className='ul-left'>
                <p>Created a Heart Rate Variability (HRV) monitor using an Arduino MEGA2560 and pulse sensor </p>
            </ul>, date: 2021, row: 0, img: HRV, imageWrapper: "image-holder-wrapper", id: 3, classType: "ant-card-hoverable wrapper-card image-holder"
        },],
        matches: window.matchMedia("(min-width: 950px)").matches,
    };

    handleHover(item) {
        const i = this.state.data;

        i.forEach(element => {
            if (element.id === item.id) {
                item.imageWrapper = "image-holder-wrapper-hov";
                item.classType = "ant-card-hoverable wrapper-card image-holder boxy-Shadow";
            }
        })
        this.setState({data: i})
    };

    handleExit(item) {
        const i = this.state.data;
        i.forEach(element => {
            if (element.id === item.id) {
                item.imageWrapper = "image-holder-wrapper";
                item.classType = "ant-card-hoverable wrapper-card image-holder";
            }
        })
        this.setState({data: i})
    };


    render() {
        const {data} = this.state;
        return (<div className='intersect'>
                <div style={{marginTop: "30%", marginBottom: "30%"}}>
                    <div style={{width: "100%"}}>
                        <Divider orientation="left">
                            <h2>Experience</h2>
                        </Divider>
                    </div>
                    {this.state.matches && (
                        <Row gutter={20} align="stretch" justify="space-around" style={{paddingTop: 20}}>
                            <>
                                {/* eslint-disable-next-line array-callback-return */}
                                {data.map(item => {
                                    if (item.row === 0) {
                                        return (<Col span={7}>
                                            <Card className={item.classType}
                                                  title={item.title}
                                                  bordered={false}
                                                  extra={item.date}
                                                  style={{height: "100%", borderRadius: 10}}
                                                  cover={<img className={item.imageWrapper} alt="example" src={item.img}
                                                              style={{scale: "100%", width: "100%", maxHeight: 150}}/>}
                                                  onMouseOver={() => this.handleHover(item)}
                                                  onMouseLeave={() => this.handleExit(item)}>
                                                {item.value}
                                            </Card>
                                        </Col>)
                                    }
                                })}
                            </>
                        </Row>)}


                    {!this.state.matches && (

                        <Col style={{
                            paddingTop: 20,
                            alignItems: "center",
                            justifyContent: "center",
                            display: "flex",
                            flexDirection: "column"
                        }}>
                            <>
                                {/* eslint-disable-next-line array-callback-return */}
                                {data.map(item => {
                                    if (item.row === 0) {
                                        return (<Card className={item.classType}
                                                      title={item.title} bordered={false}
                                                      extra={item.date} style={{
                                                height: "100%",
                                                borderRadius: 10,
                                                margin: "2em 2em",
                                                maxWidth: "300px",
                                                alignContent: "center"
                                            }}
                                                      cover={<img className={item.imageWrapper} alt="example"
                                                                  src={item.img}
                                                                  style={{
                                                                      scale: "100%",
                                                                      width: "100%",
                                                                      maxHeight: 150
                                                                  }}/>}
                                                      onMouseOver={() => this.handleHover(item)}
                                                      onMouseLeave={() => this.handleExit(item)}>
                                                {item.value}
                                            </Card>)
                                    }
                                })}
                            </>
                        </Col>)}
                </div>
            </div>)
    };

    handler = e => this.setState({matches: e.matches});

    componentDidMount() {
        window.matchMedia("(min-width: 950px)").addEventListener('change', this.handler);
    }

    componentWillUnmount() {
        window.removeEventListener('change', this.handler);
    }
}

export default Experience;