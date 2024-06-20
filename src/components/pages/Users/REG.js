import About from '../about/about.js';
import Registration from './regitration-page/registration.js';
import Profil from './Profil/Profil.js';

function REG() {
  return (
    <div>
      <div id="regitration">
        <Registration />
        <About />
      </div>
      <div id="profil">
        <Profil />
        <About />
      </div>
    </div>
  );
}
export default REG;
