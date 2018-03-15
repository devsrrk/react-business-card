import React from 'react';
import InputUi from '../UIcomponent/InputUi';
import ButtonUi from '../UIcomponent/ButtonUi';

const cardForm = ( props ) => {

    return (
        <div className='cardForm'>
            <InputUi 
                id='name' 
                name='이름 : ' 
                value={ props.value.name }
				changed={ props.changed }
            />
            <InputUi
				id='email' 
				name='이메일 : ' 
                value={ props.value.email }
                changed={ props.changed }
			/>
            <InputUi 
				id='tel' 
				name='연락처 : ' 
                value={ props.value.tel }
                changed={ props.changed }
			/>
            <ButtonUi 
				id='regBtn' 
				name='명함등록'
                clicked={ props.clicked }
			/>	
        </div>
    );
}

export default cardForm;