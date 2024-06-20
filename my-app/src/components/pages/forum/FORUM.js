
import Sliderforum from '../general-page/forum-said-slider/sider-forum.js'
import Sliderclass from '../general-page/forum-said-slider/sider-class.js'
import About from "../about/about.js"
import ForumQuest from '../forum/Discusion-page/All-Discusion.js'

function FORUM() {
  return (
      <div class="forum">
        <div class="allsubject">
          <Sliderforum/>
          <ForumQuest/>
          <Sliderclass/>
        </div>
        <div class="AddSubject">
          <button> Add-question </button>
        </div>
        <About/>
      </div>
  );

}

export default FORUM;