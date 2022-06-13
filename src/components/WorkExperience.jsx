import {Component} from "react";
import React from 'react';
import '../styles/WorkExperience.css'
import {Divider, Tabs} from 'antd';

const {TabPane} = Tabs;

class WorkExperience extends Component {
    state = {
        tabList: [{
            name: "Martinos", value: <ol>
                <p>Primarily focused on histological analysis and diffusion MRI simulation</p>
                <p>Created an image processing pipeline and user interface to fix disconnected segments in cells</p>
                <p>Generated surface and volume meshes for diffusion MRI simulation in Spin Doctor</p>
                <p>Presented at the annual conference for the International Society for Magnetic Resonance in
                    Medicine.
                </p>
            </ol>, key: "0"
        }, {
            name: "RESIST", value: <ul>
                <p>Created a cell counting program that worked in parallel with image reconstruction software.</p>
                <p>Debugged a program that quantified the tissue present in histological images of the lungs and
                    aorta
                </p>
                <p>Performed daily In Vivo experiments and measurements for the majority of the lab’s studies</p>
                <p>Coordinated with graduate students to design and perform two acute cotinine studies.</p>
                <p>Prepared the lab for a safety audit. Ensured all chemical and animal protocols were up to
                    standard
                </p>
                <p>Designed and installed components for the wildland fire study</p>
            </ul>, key: "1"
        }],

        wrapperClassName: 'transition-wrapper-w',
        observe: true
    };


    render() {
        return (//Fill in about me
            <div>
                <div className={this.state.wrapperClassName} style={{marginTop: "30%", marginBottom: "30%"}}>
                    <div style={{width: "80%"}}>
                        <Divider orientation="center">
                            <h2>Work</h2>
                        </Divider>
                    </div>
                    <div className="row flex justify-content-lg-start">
                        <div>
                            <Tabs defaultActiveKey="0" tabPosition='left' style={{height: "auto"}}>
                                {this.state.tabList.map(t => {
                                    return (<TabPane tab={t.name} key={t.key} style={{width: "80%"}}>
                                        {t.value}
                                    </TabPane>)
                                })}
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>

        );
    }

    updateDimensions = () => {
        if (this.state.observe) {
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    const ratio = entry.intersectionRatio;
                    if (entry.intersectionRatio > 0) {
                        switch (true) {
                            case (ratio > 0.25):
                                this.setState({wrapperClassName: 'work-wrapper'});
                                // observer.unobserve(document.querySelector('.transition-wrapper'));
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
                observer.observe(document.querySelector('.transition-wrapper-w'));
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

export default WorkExperience;