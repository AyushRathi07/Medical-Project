import React, { Component } from 'react';
import {PageDiseases} from './pageDiseases';
import {Pagination} from './pagination';
import {data} from '../../Data/DiseasesData';
import {DisplayType} from './displayType';
import './style.css';

class Diseases extends Component {

	constructor(props){
		super(props);
		this.state = {
			diseases: data,
			selDisease: 'Arthritis'
		}
	}

  render(){

	const list = this.state.diseases.map((item) => {
		return (
			<a onClick={() => this.setState({selDisease: item.name})} class="list-group-item cursor-pointer"><strong>{item.name}</strong></a>
		)
	})

  return (
		<div className="row ml-2 mb-2 mr-1">
			<div className="col-md-3 mt-3">
				<div className="list-group scroll-y">
					{list}
				</div>
			</div>
			<div className="col-md-9 mt-2 scroll-y flex-container">
				<DisplayType disease={this.state.diseases.filter((item) => item.name === this.state.selDisease)[0]} />
			</div>
		</div>
  );
};
}

export default Diseases;