"use strict";

import {library} from '@fortawesome/fontawesome-svg-core'
import {fab} from '@fortawesome/free-brands-svg-icons'
import {fas} from '@fortawesome/free-solid-svg-icons'

import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import Buefy from "buefy";
import "buefy/dist/buefy.css";

import {Icon} from "leaflet";
import "leaflet-rotatedmarker"
import MarkerIcon2x from "leaflet/dist/images/marker-icon-2x.png"
import MarkerIcon from "leaflet/dist/images/marker-icon.png"
import MarkerShadow from "leaflet/dist/images/marker-shadow.png"

import "leaflet/dist/leaflet.css"

import Vue from "vue";
import {LCircleMarker, LControl, LMap, LMarker, LPolygon, LTileLayer} from "vue2-leaflet";
import "../css/index.css";

import datastore from "./datastore";
import {methods} from "./methods";
import {patch} from "./utils";

patch();
library.add(fab, fas);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.component('l-circle-marker', LCircleMarker);
Vue.component("l-control", LControl);
Vue.component("l-map", LMap);
Vue.component("l-marker", LMarker);
Vue.component('l-polygon', LPolygon);
Vue.component("l-tile-layer", LTileLayer);

delete Icon.Default.prototype._getIconUrl;

Icon.Default.mergeOptions({
    iconRetinaUrl: MarkerIcon2x,
    iconUrl: MarkerIcon,
    shadowUrl: MarkerShadow,
});

Vue.config.devtools = true;
Vue.use(Buefy);

const app = new Vue({
    el: "#main",
    data: datastore.state,
    methods: methods,
});

window.app = app;  // To make it available for debugging and such
