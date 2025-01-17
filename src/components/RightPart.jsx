import '../styles/RightPart.css';

const TimeTaken = "2min" ;


const RightPart = () =>{
  
  return(

  <div className="right-area">

    <div className="upper-sec">

      <div className="box">
        <div>
          <i class="fi fi-br-angle-square-down"></i>
          <span className="heading-text">Compare Accuracy</span>
        </div>
      </div>
      <div className="box">
        <div>
          <i class="fi fi-br-angle-square-down"></i>
          <span className="heading-text">Compare Accuracy</span>
        </div>
      </div>
      <div className="box">
        <div>
          <i class="fi fi-br-angle-square-down"></i>
          <span className="heading-text">Compare Accuracy</span>
        </div>
      </div>

    </div>


    <div className="middle-sec">

      <div className="box-1">
        <div>
          <i class="fi fi-ss-stairs"></i>
          <span className="heading-text">Imrovements</span>
        </div>
        <span>Subject Understanding</span>
        <div className="tags">
          <span>Geography</span>
          <span>Politics</span>
          <span>Current Affairs</span>
          <span>General Studies</span>
          <span>Mathematics</span>
          <span>Social Studies</span>
          <span>English Literature</span>
          <span>Indian History</span>
          <span>Economics</span>
        </div>
      </div>

      <div className="box-2">
        <div>
          <i class="fi fi-br-clock-up-arrow"></i>
          <span className="heading-text">Response Time</span>
        </div>
        
        <span className='res-time-box'>Std Time - {TimeTaken}</span>
        <div className="res-area">
          <div>
            <span >60</span>
            <span>%</span>
            <span >Ans took</span>
            <span>&uarr;</span>
            <span >{TimeTaken}</span>
          </div>
          <span></span>
          <span>You are <span >slow</span>!</span>
        </div>
      </div>

      <div className="box-3">
        <div>
          <i class="fi fi-ss-stairs"></i>
          <span className="heading-text">Approach Data</span>
        </div>
        <div className="data-box">
          <span>25<span >%</span></span>
          <span>Based on</span>
          <span>Facts</span>
        </div>
        <div className="data-box">
          <span>31<span>%</span></span>
          <span>Based on</span>
          <span>Analysis</span>
        </div>
        <div className="data-box">
          <span>19<span>%</span></span>
          <span>Based on</span>
          <span>Elimination</span>
        </div>
        <div className="data-box">
          <span>24<span>%</span></span>
          <span>Based on</span>
          <span>Guess</span>
        </div>
      </div>

      <div className="box-4">
        <div>
          <i className="fi fi-rr-sparkles"></i>
          <span className="heading-text">Suggestions</span>
        </div>
        <div className='sug-block'>
          <div>
            <span>Q. 1-12</span>
            <span>Q. 12-32</span>
            <span>Q. 32-40</span>
          </div>
          <div >
            <span>40<span>sec</span></span>
            <span>1.5<span>min</span></span>
            <span>3<span>min</span></span>
          </div>
          <div>
            <span>Easy</span>
            <span>Medium</span>
            <span>Hard</span>
          </div>
        </div>
      </div>
    </div>


    <div className="lower-sec">

      <div className="compare-box">
        <div>
          <i class="fi fi-rs-code-compare"></i>
          <span>Compare Accuracy</span>
        </div>
        
        <div className='content'>
          <span>Accuracy</span>
          <div className="percent">
            <span>100%</span>
            <span>75%</span>
            <span>50%</span>
            <span>25%</span>
            <span>0%</span>
          </div>
          <div className= "graph"> 
              <div className="time">
                <div></div>
                <span>10<span>MIN</span></span>
                <span className='active'>15<span>MIN</span></span>
                <span>30<span>MIN</span></span>
                <span>45<span>MIN</span></span>
              </div>
          
            <div className='bar-area'>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div className="actual-bars">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div> 
            </div>
            <div className='numbers'>
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
              <span>6</span>
              <span>7</span>
            </div>
            <div>Slots</div>
          </div>
        </div>
      </div>

      <div className="time-box">
        <div>
          <i class="fi fi-rs-alarm-exclamation"></i>
          <span>Time Taken</span>
        </div>
        <div className="scale-box">

          <div className="red-line"></div>
          <div className="green-line"></div>
          <div className="blue-line"></div>

          <div className='scale-num'>
          <div className="long"></div>
          <span className="m f">10<span>sec</span></span>
          </div>
          <div className="short"></div>
          <div className="short"></div>
          <div className="short"></div>
          <div className="short"></div>
          <div className='scale-num'>
            <div className="long"></div>
            <span className="m">20</span>
          </div>
          <div className="short"></div>
          <div className="short"></div>
          <div className="short"></div>
          <div className="short"></div>
          <div className='scale-num'>
            <div className="long"></div>
            <span className="m">30</span>
          </div>
          <div className="short"></div>
          <div className="short"></div>
          <div className="short"></div>
          <div className="short"></div>
          <div className='scale-num'>
            <div className="long"></div>
            <span className="m">40</span>
          </div>
          <div className="short"></div>
          <div className="short"></div>
          <div className="short"></div>
          <div className="short"></div>
          <div className='scale-num'>
            <div className="long"></div>
            <span className="m">50</span>
          </div>
          <div className="short"></div>
          <div className="short"></div>
          <div className="short"></div>
          <div className="short"></div>
          <div className='scale-num'>
            <div className="long"></div>
            <span className="m">60</span>
          </div>
          <div className="short"></div>
          <div className="short"></div>
          <div className="short"></div>
          <div className="short"></div>
          <div className='scale-num'>
            <div className="long"></div>
            <span className="m">70</span>
          </div>
          <div className="short"></div>
          <div className="short"></div>
          <div className="short"></div>
          <div className="short"></div>
          <div className='scale-num'>
            <div className="long"></div>
            <span className="m">80</span>
          </div>
          <div className="short"></div>
          <div className="short"></div>
          <div className="short"></div>
          <div className="short"></div>
          <div className='scale-num'>
            <div className="long"></div>
            <span className="m">90</span>
          </div> 
      
        </div>
        <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</span>

        <div className="scale-box beta">

          <div className="red-line"></div>
          <div className="green-line"></div>
          <div className="blue-line"></div>

          <div className='scale-num'>
          <div className="long"></div>
          <span className="m f">4<span>sec</span></span>
          </div>
          <div className="short"></div>
          <div className="short"></div>
          <div className="short"></div>
          <div className="short"></div>
          <div className='scale-num'>
            <div className="long"></div>
            <span className="m">3</span>
          </div>
          <div className="short"></div>
          <div className="short"></div>
          <div className="short"></div>
          <div className="short"></div>
          <div className='scale-num'>
            <div className="long"></div>
            <span className="m">2</span>
          </div>
          <div className="short"></div>
          <div className="short"></div>
          <div className="short"></div>
          <div className="short"></div>
          <div className='scale-num'>
            <div className="long"></div>
            <span className="m">1</span>
          </div>
          <div className="short"></div>
          <div className="short"></div>
          <div className="short"></div>
          <div className="short"></div>
          <div className='scale-num'>
            <div className="long"></div>
            <span className="m">0</span>
          </div>
          <div className="short"></div>
          <div className="short"></div>
          <div className="short"></div>
          <div className="short"></div>
          <div className='scale-num'>
            <div className="long"></div>
            <span className="m">1</span>
          </div>
          <div className="short"></div>
          <div className="short"></div>
          <div className="short"></div>
          <div className="short"></div>
          <div className='scale-num'>
            <div className="long"></div>
            <span className="m">2</span>
          </div>
          <div className="short"></div>
          <div className="short"></div>
          <div className="short"></div>
          <div className="short"></div>
          <div className='scale-num'>
            <div className="long"></div>
            <span className="m">3</span>
          </div>
          <div className="short"></div>
          <div className="short"></div>
          <div className="short"></div>
          <div className="short"></div>
          <div className='scale-num'>
            <div className="long"></div>
            <span className="m">4</span>
          </div> 

        </div>

        <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</span>
      </div>

    </div>
  </div>

  )

}

export default RightPart;