import React, {Component} from 'react';

export const PageDiseases = (props) => {
	if(props.loading)
		return <h2>Loading...</h2>;
	return (
		<ul className="media-list">
			{props.data.map((item) => (
				<li key={item.id} className="list-item">{item.name}</li>
			))}
		</ul>
	);

}
