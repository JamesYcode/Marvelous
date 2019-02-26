import React from 'react';

function Pages(props){
  return(
    <div>
      <form>
        <button onClick={(e) => {
          e.preventDefault();
          const page = parseInt(e.target.value);
          props.resetCharacter();
          props.selectPage(page);
        }} value={props.pageNumber}>{props.pageNumber + 1}</button>
        <button onClick={(e) => {
          e.preventDefault();
          const page = parseInt(e.target.value);
          props.resetCharacter();
          props.selectPage(page);
        }} value={props.pageNumber + 1}>{props.pageNumber + 2}</button>
        <button onClick={(e) => {
          e.preventDefault();
          const page = parseInt(e.target.value);
          props.resetCharacter();
          props.selectPage(page);
        }} value={props.pageNumber + 2}>{props.pageNumber + 3}</button>
        <button onClick={props.nextPage}>next</button>
      </form>
    </div>
  )
}

export default Pages;
