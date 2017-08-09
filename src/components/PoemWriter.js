import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poemInput: '',
      validPoem: false
    };
  }

  updateInput = (event) => {
    let poem = event.target.value.split("\n")
    this.setState({
      poemInput: event.target.value
    })
    // console.log(poem.length)
    if (poem.length === 3) {
      this.checkPoem(poem)
    }
  }

  checkPoem = (poem) => {
    let counter_check = 0
    // if (poem.length === 3) {
    // debugger
      if (poem[0].toString().trim().split(" ").length === 5){
        counter_check +=1
        // console.log(`this is counter: ${counter_check}`)
      }
      if (poem[1].toString().trim().split(" ").length === 3) {
        counter_check +=1
      }
      if (poem[2].toString().trim().split(" ").length === 5) {
        counter_check +=1
        // debugger
        // console.log(`this is counter: ${counter_check}`)
      }
      if (counter_check === 3){
        this.setState({
          validPoem: true
        })
      } else {
        this.setState({
          validPoem: false
        })
      }
    // }



  }

  render() {
    console.log(this.state.poemInput)
      if (!this.state.validPoem) {
        return (
          <div>
            <textarea onChange={this.updateInput}
              rows="3"
              cols="60"
            />
            <div
            id="poem-validation-error"
            style={{color: 'red'}}
            >
            This poem is not written in the right structure!
            </div>
          </div>
        )
      } else {
        return (
          <div>
            <textarea onChange={this.updateInput}
              rows="3"
              cols="60"
            />
          </div>
        )
      }
  }
}

export default PoemWriter;
