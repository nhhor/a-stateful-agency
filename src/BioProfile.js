import React from 'react';
import './App.css';
import PropTypes from 'prop-types';



class BioProfile extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      garyThanks: 7,
      muggyThanks: 3,
      uncannyThanks: 5
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    let number = this.state.garyThanks
    this.setState({garyThanks: number +1});
    console.log('formVisibleOnPage is currently set to:' + this.state.garyThanks);
  }

  render(){

    return (

      <div className='BioProfileClass'>
      <h1 className='BioProfileH1'>Profile: x.person</h1>
      <h3 className='BioProfileH3'>Appreciation:<span>{this.state.garyThanks}</span></h3>
      <button onClick={this.handleClick}>Thanks</button>


      <style jsx>{`
        .BioProfileClass {
          background-color: rgba(25, 50, 0, .5);
          border-radius: 25px;
          overflow: auto;
          position: absolute;
          bottom: 0px;
          right: 0px;
          width: 50%;
          height: 300px;
        }

        .BioProfileH1 {
          align: center;
        }

        .BioProfileH3 {
          align: center;
        }
        `}</style>

        </div>
      );
    }
  }

  BioProfile.propTypes = {
    onNewTicketCreation: PropTypes.func
  };


  export default BioProfile;
