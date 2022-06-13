import {Component} from "react";
import React from 'react';
import '../styles/WorkExperience.css'
import {Divider, Card, Row, Col} from 'antd';
import HRV from '../img/HRVSignal.png'
import HEART from '../img/heart.png'
import NEURON from '../img/neuron1.png'

class Experience extends Component {


    state = {
        langList: ['Java', 'Python', 'C++', 'SQL', 'React', 'CSS', 'HTML'],
        wrapperClassName: 'transition-wrapper-e',
        observe: true,
        imageWrapper: "image-holder-wrapper",
        data: [{
            title: 'Fixcell', value: <ul className='ul-left' style={{}}>
                <p>Opensource solution for modifying and correcting irregular Neuron skeletons </p>
                {/*<p>Designed for seamless integration in the Trees Toolbox and offers an end to end solution for*/}
                {/*    generating a*/}
                {/*    simulation ready watertight mesh</p>*/}
                {/*<p>Incorperated a CLI and GUI and offer autonomous and manual corrections</p>*/}
            </ul>, date: "2021-2022", row: 0, img: NEURON, imageWrapper: "image-holder-wrapper", id: 1
        }, {
            title: 'Interface for Bioprints', value: <ul className='ul-left' style={{}}>
                {/*<p>Northeastern Capstone Design Project</p>*/}
                <p>Developed and tested a functional prototype for interfacing with CELLINKS 3d bioprinted
                    constructs</p>
                {/*<p>Developed and tested a functional prototype for interfacing with CELLINKS 3d bioprinted*/}
                {/*    constructs</p>*/}
            </ul>, date: "2022", row: 0, img: HEART, imageWrapper: "image-holder-wrapper", id: 2
        }, {
            title: 'HRV Monitor', value: <ul className='ul-left'>
                <p>Created a Heart Rate Variability (HRV) monitor using an Arduino MEGA2560 and pulse sensor </p>
                {/*<p>Successfully implemented a Beat Detection System, Signal Filtering, Beat Rejection and HRV*/}
                {/*    calculation</p>*/}
            </ul>, date: 2021, row: 0, img: HRV, imageWrapper: "image-holder-wrapper", id: 3
        }
            //{
            //     title: 'EMG Device', value: <ul className='ul-left' style={{}}>
            //         <p>Used the electromyography (EMG) sensor on a BITalino Microcontroller to control the users
            //             keyboard</p>
            //         {/*<p>Isolated the movements of specific fingers to perform a variety of keyboard shortcuts using*/}
            //         {/*    Pyautogui</p>*/}
            //     </ul>, date: 2021, row: 1, img: EMG, imageWrapper: "image-holder-wrapper", id: 4
            // }
        ]
    };

    handleHover(item) {
        const i = this.state.data;
        i.forEach(element => {
            if (element.id === item.id) {
                item.imageWrapper = "image-holder-wrapper-hov";
            }
        })
        this.setState({data: i})
    };

    handleExit(item) {
        const i = this.state.data;
        i.forEach(element => {
            if (element.id === item.id) {
                item.imageWrapper = "image-holder-wrapper";
            }
        })
        this.setState({data: i})
    };


    render() {
        const {data} = this.state
        return (
            <div className={this.state.wrapperClassName}>
                <div style={{marginTop: "30%", marginBottom: "30%"}}>
                    <div style={{width: "100%"}}>
                        <Divider orientation="left">
                            <h2>Experience</h2>
                        </Divider>
                    </div>
                    <Row gutter={20} align="stretch" justify="space-around">
                        <>
                            {/* eslint-disable-next-line array-callback-return */}
                            {data.map(item => {
                                if (item.row === 0) {
                                    return (<Col span={7}>
                                        <Card className="ant-card-hoverable wrapper-card image-holder"
                                              title={item.title} bordered={false}
                                              extra={item.date} style={{height: "100%", borderRadius: 10}}
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
                    </Row>

                    <Row gutter={20} align="stretch" justify="start" style={{paddingTop: 20}}>
                        <>
                            {/* eslint-disable-next-line array-callback-return */}
                            {data.map(item => {
                                if (item.row === 1) {
                                    return (<Col span={7}>
                                        <Card className="ant-card-hoverable wrapper-card image-holder"
                                              title={item.title} bordered={false}
                                              extra={item.date} style={{height: "100%", borderRadius: 10}}
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
                    </Row>
                </div>
            </div>

        )
    };

    updateDimensions = () => {
        if (this.state.observe) {
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    const ratio = entry.intersectionRatio;
                    if (entry.intersectionRatio > 0) {
                        switch (true) {
                            case (ratio > 0.2):
                                this.setState({wrapperClassName: 'experience-wrapper'});
                                console.log("Case: 4");
                                this.setState({observe: false});
                                break;
                            default:
                                break;

                        }
                    }
                });
            });

            if (this.state.observe) {
                observer.observe(document.querySelector('.transition-wrapper-e'));
            } else {
            }
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.updateDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.updateDimensions)
    }

}

export default Experience;