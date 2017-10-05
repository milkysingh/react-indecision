import React from 'react';
import Modal from 'react-modal';
const OptionModal=(props)=>(
   <Modal
   isOpen={!!props.selectedOption}
   onRequestClose={props.clearSelectedOption}
   contentLabel="OptionModal"
   >
   <h2>Hurray!</h2>
   {props.selectedOption&&<p>{props.selectedOption}</p>}
   <button onClick={props.clearSelectedOption}>okay</button>
   </Modal>
);
export default OptionModal;