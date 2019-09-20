import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import AwsSliderStyles from 'react-awesome-slider/src/styles';
import './Home.css';

const Home = () => {
	return(
		<AwesomeSlider className='slide' cssModule={AwsSliderStyles}>
			<div data-src="https://previews.123rf.com/images/rapapazzi/rapapazzi1412/rapapazzi141200025/34917292-hand-draw-pizza-.jpg"/>
		    <div data-src="https://previews.123rf.com/images/sergeypykhonin/sergeypykhonin1707/sergeypykhonin170700093/82338069-chef-cuisinier-logo-%C3%89tiquette-ou-ic%C3%B4ne-pour-le-menu-design-ou-la-restauration-illustration-vectorielle.jpg" />
		    <div data-src="https://thumbs.gfycat.com/CreativeCleanGoldeneye-size_restricted.gif" />
	    </AwesomeSlider>
	);
}

export default Home;