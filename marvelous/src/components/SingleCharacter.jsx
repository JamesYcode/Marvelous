import React from 'react';

function SingleCharacter(props) {
  return(
    <div className='single-character'>
      {props.characterName.map(info => (
        <div className='single-character' key={info.id}>
          <h1>{info.name}</h1>
          <img src={info.thumbnail.path + '/standard_fantastic.jpg'} alt='Images Not Available' />
          <p>{info.description}</p>
          <p>Comics Available: {info.comics.available}</p>
        </div>
      ))}
    </div>
  )
}

export default SingleCharacter;
