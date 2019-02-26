import React from 'react';

function Pages(props){
  return(
    <div>
      <form>
        <button onClick={props.selectPage} value={props.pageNumber}>{props.pageNumber + 1}</button>
        <button onClick={props.selectPage} value={props.pageNumber + 1}>{props.pageNumber + 2}</button>
        <button onClick={props.selectPage} value={props.pageNumber + 2}>{props.pageNumber + 3}</button>
        <button onClick={props.nextPage}>next</button>
      </form>
    </div>
  )
}

export default Pages;
