import 'rc-steps/assets/index.css';
import 'rc-steps/assets/iconfont.css';
import './nextStep.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Steps, { Step } from 'rc-steps';

function generateRandomSteps() {
  const n = Math.floor(Math.random() * 3) + 3;
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push({
      title: `步骤${(i + 1)}`,
    });
  }
  return arr;
}
const steps = generateRandomSteps();

class App extends React.Component {

    state = {
      currentStep: Math.floor(Math.random() * steps.length),
    };

    render() {

        const cs = this.state.currentStep;

      return(

        this.stepsRefs = [];

          <form className="my-step-form">
            <div>这个demo随机生成3~6个步骤，初始随机进行到其中一个步骤</div>
            <div>当前正在执行第{cs + 1}步</div>
            <div className="my-step-container">
              <Steps current={cs}>
                {
                  steps.map((s, i) => {
                    return (
                      <Step ref={c => this.stepsRefs[i] = c}
                        key={i}
                        title={s.title}
                      />
                    );
                  })
                }
              </Steps>
            </div>

            <div><button type="button" onClick={this.nextStep}>下一步</button></div>
          </form>


      )
    };

}

export default App;
