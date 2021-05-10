import {copyClipboard} from './modules/copy-clipboard.js';
import {renderFilterSection} from './modules/filter.js';
import {headerScroll} from './modules/header-scroll.js';
import {accordeonInit} from './modules/accordion.js';
import {navToggle} from './modules/nav-toggle-mobile.js';
import {data} from './data/data.js';


copyClipboard();
renderFilterSection(data);
headerScroll();
accordeonInit();
navToggle();

