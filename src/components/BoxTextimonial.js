import React from 'react'

		// <span>{profetion}</span>


function BoxTextimonial({t}) {

const {foto, text, name, profetion} = t;

	return (
	
		<div className="textimonial">
		
		<div className="textimonial-img"><img src={foto} alt="" /></div>
		<p>{text}</p>
		<span className="textimonial__name">{name}</span> <br />	
		<span className="textimonial__pro">{profetion}</span>
		</div>
		
		
	)
}

export default BoxTextimonial


