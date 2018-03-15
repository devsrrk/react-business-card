import React from 'react';
import ButtonUi from '../UIcomponent/ButtonUi';


const cardList = ( props ) => {
    return (
        <div className='cardList'>
            {
                props.cardList.map( (card, index) => {
                    return( 
                        <li 
                            key={ index }
                            index={ index }
                        >
                            <div>
                           		이름 : { card.name }
                            </div>
							<div>
                           		이메일 : { card.email }
                            </div>
							<div>
                           		연락처 : { card.tel }
                            </div>
                            <div>
                           		즐겨찾기 : { card.favorite+'' }
                            </div>
                            <ButtonUi 
                                id='favoriteToggle'
                                clicked={ () => props.favoriteClicked(index) }
                                name='즐겨찾기'
                            />
                            <ButtonUi 
                                id='removeCard'
                                clicked={ () => props.removeClicked(index) }
                                name='삭제'
                            />
                        </li>
                    );
                } )
            }

        </div>
    );
}

export default cardList;