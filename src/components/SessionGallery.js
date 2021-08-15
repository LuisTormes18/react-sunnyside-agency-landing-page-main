import React from 'react'
import img1 from '../images/desktop/image-gallery-milkbottles.jpg'
import img2 from '../images/desktop/image-gallery-orange.jpg'
import img3 from '../images/desktop/image-gallery-cone.jpg'
import img4 from '../images/desktop/image-gallery-sugarcubes.jpg'

export default function SessionGallery() {
	return (
		<div className="gallery">
			<img src={img1}  />
			<img src={img2}  />
			<img src={img3}  />
			<img src={img4}  />
		</div>
	)
}