import React from 'react'

function BoxService({title,text,url="#",text_a="Learn more", textDecoration="blue"}) {
	return (
		<div className="session-servicess__flex-item">
			<h3 className="flex-item__title">{title}</h3>
			<p className="flex-item__text">{text}</p>
			<a className="flex-item__a" style={{ textDecoration: 'underline '+{textDecoration} }} href={url}>{text_a}</a>
		</div>
	)
}

export default BoxService