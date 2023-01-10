import './ghostbuddy/canvas'
import {player} from './ghostbuddy/player';
import {redplayer} from './ghostbuddy/redplayer';
import {star} from './ghostbuddy/points';
import {addAnimation, startAnimation} from './animation';
import {backgroundDrawer} from './ghostbuddy/background';

addAnimation(backgroundDrawer);
addAnimation(player);
addAnimation(star);
startAnimation();
//import './background'