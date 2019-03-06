import React from 'react';
import Particles from 'react-particles-js';

const ParticlesComponent = () => {
	return (
		<Particles
			className='particle'
			params={{
				particles: {
					number: {
						value: 10,
						density: { enable: true, value_area: 800 }
					},

					shape: {
						type: [ 'circle', 'images' ],
						images: [
							{
								src: '../static/particles/particle-1.png',
								width: 25,
								height: 25
							},
							{
								src: '../static/particles/particle-2.png',
								width: 18,
								height: 18
							},
							{
								src: '../static/particles/particle-3.png',
								width: 32,
								height: 32
							},
							{
								src: '../static/particles/particle-4.png',
								width: 41,
								height: 41
							},
							{
								src: '../static/particles/particle-5.png',
								width: 22,
								height: 22
							},
							{
								src: '../static/particles/particle-6.png',
								width: 23,
								height: 23
							},
							{
								src: '../static/particles/particle-7.png',
								width: 27,
								height: 27
							},
							{
								src: '../static/particles/particle-8.png',
								width: 21,
								height: 19
							}
						]
					},
					opacity: {
						value: 0.017626369048095938,
						random: false,
						anim: { enable: false, speed: 1, opacity_min: 0.001, sync: false }
					},
					size: {
						value: 10,
						random: false
					},
					line_linked: {
						enable: false
					},
					move: {
						enable: true,
						speed: 1.25,
						direction: 'none',
						random: false,
						straight: false,
						bounce: true,
						attract: { enable: true, rotateX: 100, rotateY: 400 }
					}
				},
				retina_detect: true
			}}
		/>
	);
};

export default ParticlesComponent;
