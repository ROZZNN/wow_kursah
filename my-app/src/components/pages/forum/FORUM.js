import Sliderforum from '../general-page/forum-said-slider/sider-forum.js';
import Sliderclass from '../general-page/forum-said-slider/sider-class.js';
import About from '../about/about.js';
import ForumQuest from './Discusion-page/All-Discusion.js';

function FORUM() {
  return (
    <div className="forum">
      <div className="allsubject">
        <Sliderforum />
        <ForumQuest />
        <Sliderclass />
      </div>
      <div className="AddSubject">
        <button> Add-question </button>
      </div>
      <About />
    </div>
  );
}

export default FORUM;
