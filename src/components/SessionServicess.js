import React from 'react'
import BoxService from './BoxService'
import BoxServiceImg from './BoxServiceImg'
import image1 from '../images/desktop/image-transform.jpg'
import image2 from '../images/desktop/image-stand-out.jpg'
import image3 from '../images/desktop/image-graphic-design.jpg'
import image4 from '../images/desktop/image-photography.jpg'

function SessionServicess() {
	return (
		<div className="session-servicess">
			<div className="session-servicess__flex-container">

<BoxService className="session-servicess__flex-item" 
title="Transform your brand"
 text="  We are a full-service creative agency specializing in helping brands grow fast.´Engage your clients through compelling visuals that do most of the marketing for you."/>

<BoxServiceImg  img={image1} />
<BoxServiceImg  img={image2} />

<BoxService className="session-servicess__flex-item" 
title="Stand out to the right audience"
 text="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places."/>

<BoxServiceImg  img={image3} title="Graphic design"
text_color="gren"
 text="  Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention."/>
<BoxServiceImg  img={image4} title=" Photography" 
text_color="blue"
text=" Increase your credibility by getting the most stunning, high-quality photos that improve your business image."/>
			</div>
		</div>
	)
}


export default SessionServicess