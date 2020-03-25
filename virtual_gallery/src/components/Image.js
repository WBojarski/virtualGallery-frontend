import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
export default function Image({ image }) {
	return <img className="single-photo" src={image.primaryImageSmall} />;
}
