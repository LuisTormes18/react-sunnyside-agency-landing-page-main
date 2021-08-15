import React from 'react'

function BoxServiceImg({img,title=null,text="",text_color="black"}) {

	return (
		<div className="session-servicess__flex-img"
		style={{ backgroundImage: `url(${img})` }}>
		 
		 {title?
		 	<div className="flex-img__text" >
		 	<h3 className={text_color + " flex-item__title"}>{title}</h3>
		 	<p lassName={text_color + " .flex-img__text"}>{text}</p>
		 	</div>
		 	:
		 	null
		 }
		
	</div>
	)
}

export default BoxServiceImg