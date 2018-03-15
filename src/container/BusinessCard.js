import React, { Component } from 'react';
import CardFrom from '../component/cardForm/CardForm';
import SearchForm from '../component/searchForm/SearchForm';
import CardList from '../component/cardList/CardList';

class BusinessCard extends Component {

    constructor( props ) {
        super( props );
	
        this.state = {
            cardForm: {
                name: '',
                email: '',
                tel: '',
                favorite: false
            },
            searchForm: {
                keyword: ''
            },
            cardList: []
        };
	}

	componentDidMount() {

        if( localStorage.data ) {
            this.setState(JSON.parse( localStorage.data ));
        }
	}

	shouldComponentUpdate( nextProps, nextState ) {
        localStorage.setItem( 'data', JSON.stringify(nextState) );
        return nextProps !== nextState;
	}

    handleChangeCardInputForm = ( event ) => {

        let cardForm = { ...this.state.cardForm };
        cardForm[event.target.id] = event.target.value;
        this.setState({
            ...this.state,
            cardForm: cardForm
        });
    }

    handleChangeSearchInputForm = ( event ) => {
        let searchForm = { ...this.state.searchForm };
        searchForm[event.target.id] = event.target.value;
        this.setState({
            ...this.state,
            searchForm
        });
    }

    handleClickRegBtn = ( event ) => {
        this.setState({
            ...this.state,
            cardList: this.state.cardList.concat( this.state.cardForm ),
            cardForm: {
                name: '',
                email: '',
                tel: '',
                favorite: false
            }
        });
    }


    handleClickSearchBtn = ( event ) => {
		let searchedList = this.data.cardList.filter( obj => {
            return obj.name.indexOf( this.state.searchForm.keyword ) !== -1;
        });
        
        this.setState({
            cardList: searchedList
        });
	}
	
	handleClickFavoriteBtn = ( index ) => {
		let cardList = [ ...this.state.cardList ];
		let card = cardList[ index ];
		card.favorite = !card.favorite;
		this.setState({
			cardList: cardList
		});
	}

	handleClickRemoveBtn = ( index ) => {
		console.log(index);
		let cardList = [ ...this.state.cardList ];
		cardList.splice( index, 1 );
		this.setState({
			cardList: cardList
		});
	}

    render() {
        return (
            <div className="businessCard">
                <CardFrom 
                    value={ this.state.cardForm }
                    changed={ this.handleChangeCardInputForm }
                    clicked={ this.handleClickRegBtn }
                />
                <SearchForm 
                    value={ this.state.searchForm }
                    changed={ this.handleChangeSearchInputForm }
                    clicked={ this.handleClickSearchBtn }
                />
                <CardList 
					cardList={ this.state.cardList }
					favoriteClicked={ this.handleClickFavoriteBtn }
					removeClicked={ this.handleClickRemoveBtn }
                />
            </div>
        );
    }
}

export default BusinessCard;