import React, { Component } from 'react';
import ParticlesComponent from 'react-particles-js';
import './Particles.css';

const particlesOptions = {
        particles: {
            line_linked: {
                enable: false,
            },
            number: {
                value: 150
            },
            size: {
                value: 5
            },
            color: {
                value: "#bd8741"
            },
            opacity: {
                value: 0.25,
                anim: {
                    speed: 1
                }
            },
            move: {
                enable: true,
                direction: "top",
                speed: 1
            },
            shape: {
                type: "edge"
            }
        },
        interactivity: {
            detect_on: "window",
            events: {
              onhover: {
                enable: true,
                mode: "bubble"
              },
              onclick: {
                enable: true,
                mode: "push"
              },
            },
            modes: {
                bubble: {
                    distance: 200,
                    size: 0,
                    opacity: 0
                }
              }
        }
};

class Particles extends Component {

    render() {

        return (
            <ParticlesComponent className='particles' params={particlesOptions} />
        );
    }
}

export default Particles;