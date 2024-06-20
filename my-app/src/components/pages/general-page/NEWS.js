// import '@babel/plugin-proposal-private-property-in-object'
import Sliderforum from '../general-page/forum-said-slider/sider-forum.js'
import Sliderclass from '../general-page/forum-said-slider/sider-class.js'
import News from "../general-page/news-block/news-all.js"
import About from "../about/about.js"


function NEWS() {
  return (
      <div id='general'>
        <div class='flex-container'>
          <Sliderforum/>
          <News/>
          <Sliderclass/>
        </div>
        <About/>
      </div>
  );

}

export default NEWS;