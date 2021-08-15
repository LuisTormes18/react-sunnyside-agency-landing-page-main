import React from 'react'
import BoxTextimonial from './BoxTextimonial'
import foto1 from '../images/image-emily.jpg'
import foto2 from '../images/image-thomas.jpg'
import foto3 from '../images/image-jennie.jpg'

function SessionTextimonials() {


	const objectTextimonials = [
	{
		foto:foto1,
		text:"We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
		name:"Emily R.",
		profetion:"Marketing Director"
	},
	{
		foto:foto2,
		text:"  Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
		name:"Thomas S.",
		profetion:"Chief Operating Officer"
	},
	{
		foto:foto3,
		text:" Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
		name:"Jennie F.",
		profetion:"Business Owner"
	}
	]

	return (
	<div className="session-textimonials">

	
		<div className="session-textimonials__title"><h2>Client testimonials</h2></div>
		
		
		<div className="textimonials">
			{
				objectTextimonials.map(( t) => (<BoxTextimonial key={t.name} t={t} />) )														
			}
		</div>

	</div>
	)
}

export default SessionTextimonials