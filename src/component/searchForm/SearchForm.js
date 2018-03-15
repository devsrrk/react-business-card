import React from 'react';
import InputUi from '../UIcomponent/InputUi';
import ButtonUi from '../UIcomponent/ButtonUi';

const searchForm = ( props ) => {
    return ( 
        <div className="searchForm">
            <InputUi 
				id="keyword"
				value={ props.value.keyword }
				changed={ props.changed }
            />
			<ButtonUi 
				id="searchBtn"
				name="검색"
				clicked={ props.clicked }
			/>
        </div>
    );
}

export default searchForm;