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
			<a onClick={() => this.setState({selDisease: item.name})} class="list-group-item">{item.name}</a>
		)
	})

  return (
		<div className="row ml-2">
			<div className="col-md-3">
				<div className="list-group">
					{list}
				</div>
			</div>
			<div className="col-md-9">
				<DisplayType disease={this.state.diseases.filter((item) => item.name === this.state.selDisease)[0]} />
			</div>
		</div>
  );
};
}

export default Diseases;