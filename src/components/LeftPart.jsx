import '../styles/LeftPart.css';
import resultpic from '../imgs/result-pic.png';
import topper from '../imgs/topper.jpeg';


const totalScore = 240;


const LeftPart = () => {
  return(
  
      <div className="left-area">

        <div className="upper">
          <div  ><img src={resultpic} className="result-pic" /></div>
          <span>Your Result!</span>
          <span>All your insights & details in one place</span>
        </div>

        <div className="middle">
          <div className="your-box">
            <div className="tick-div"><i class="fi fi-tr-clipboard-check"></i></div>
            <div className="your-score-box">
              <span>YOU'VE PASSED</span>
              <div>
                <span>136</span>
                <span>/{totalScore}</span>
              </div>
            </div>
            <div className="your-accuracy">
              <span>76%</span>
              <span>Accuracy</span>
            </div>
          </div>

          <div className="topper-box">
            <div className="topper-score-box">
              <div className="topper-pic"><img src={topper}/></div>
              <div className="topper-score">
                <span>Top Score</span>
                <span>230</span>
                <span>/{totalScore}</span>
              </div>
            </div>
            <div className="topper-name-acc">
              <div>
                <span >By</span>
                <strong>Parth Akotkar</strong>
              </div>
              <span><strong>92% </strong>ACCURACY</span>
            </div>
          </div>

          <div className="improve-box">
            <div>Improve Your Marks</div>
            <div>Improve your marks by practicing more.</div> 
          </div>
          <button className='practice-btn'>Practice more</button>
        </div>

        <div className="lower">
          <span >Revisit Paper</span>
          <span >Challenge your friends by simply sharing a link to this test</span>
          <button className="visit-btn"><i class="fi fi-rr-file-import"></i>Visit</button>
          <span className="instructions"><i class="fi fi-rr-info"></i>Instructions for how to upload your handwritten material in given</span>
        </div>

      </div>



  )
}
export default LeftPart;