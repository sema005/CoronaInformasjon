(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["favorites"],{

/***/ "./src/firestore.js":
/*!**************************!*\
  !*** ./src/firestore.js ***!
  \**************************/
/*! exports provided: db */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "db", function() { return db; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.esm.js");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");
  
  
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAnt6ca6MRpfkePRv4PgJ_qbYz0GaPlG3c",
    authDomain: "corona-information-808f4.firebaseapp.com",
    databaseURL: "https://corona-information-808f4.firebaseio.com",
    projectId: "corona-information-808f4",
    storageBucket: "corona-information-808f4.appspot.com",
    messagingSenderId: "251331616167",
    appId: "1:251331616167:web:fb3a4db42c43b3e8da6a82",
    measurementId: "G-R6N0D5V6W3"
  };
  // Initialize Firebase
  firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].initializeApp(firebaseConfig);
  /*
  firebase.analytics();
  */


  const db = firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].firestore()

/***/ }),

/***/ "./src/routes/favorites.svelte":
/*!*************************************!*\
  !*** ./src/routes/favorites.svelte ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/index.mjs");
/* harmony import */ var _firestore_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firestore.js */ "./src/firestore.js");
/* src/routes/favorites.svelte generated by Svelte v3.22.2 */


const { console: console_1 } = svelte_internal__WEBPACK_IMPORTED_MODULE_0__["globals"];


const file = "src/routes/favorites.svelte";

function add_css() {
	var style = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("style");
	style.id = "svelte-la63gw-style";
	style.textContent = "div.svelte-la63gw{min-height:100vh;max-width:100vw;background-color:#1b1b30}h1.svelte-la63gw{text-align:center}.white.svelte-la63gw{color:white}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmF2b3JpdGVzLnN2ZWx0ZSIsInNvdXJjZXMiOlsiZmF2b3JpdGVzLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuXHRpbXBvcnQgeyBvbk1vdW50IH0gZnJvbSBcInN2ZWx0ZVwiXG4gICAgaW1wb3J0IHsgZGIgfSBmcm9tIFwiLi4vZmlyZXN0b3JlLmpzXCJcblxuICAgIGxldCBmYXZvcml0ZXMgPSBbXVxuXG5cbiAgICBkYi5jb2xsZWN0aW9uKFwiZmF2b3JpdGVcIikuZG9jKGl0ZW0ubikuZGVsZXRlKCkudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJEb2N1bWVudCBzdWNjZXNzZnVsbHkgZGVsZXRlZCFcIik7XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHJlbW92aW5nIGRvY3VtZW50OiBcIiwgZXJyb3IpO1xuICAgIH0pO1xuXG5cbjwvc2NyaXB0PlxuXG4gICAgPGRpdj5cbiAgICAgICA8aDEgY2xhc3M9XCJ3aGl0ZSBcIj5GYXZvcml0ZXM8L2gxPlxuICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8dGFibGU+XG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICA8dGg+Q291bnRyeSBuYW1lPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoPkluZmVjdGVkPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoPkRlYXRoczwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aD5SZWNvdmVyZWQ8L3RoPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgIHsjZWFjaCBmYXZvcml0ZXMgYXMgZmF2b3JpdGV9XG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICA8dGg+e2Zhdm9yaXRlLm5hbWV9PC90aD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICB7L2VhY2h9XG4gICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG5cbjxzdHlsZT5cbiAgICBkaXYge1xuICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDB2dzs7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxYjFiMzA7XG4gICAgfVxuICAgIGgxIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuICAgIC53aGl0ZSB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG48L3N0eWxlPiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQ0ksR0FBRyxjQUFDLENBQUMsQUFDRCxVQUFVLENBQUUsS0FBSyxDQUNqQixTQUFTLENBQUUsS0FBSyxDQUNoQixnQkFBZ0IsQ0FBRSxPQUFPLEFBQzdCLENBQUMsQUFDRCxFQUFFLGNBQUMsQ0FBQyxBQUNBLFVBQVUsQ0FBRSxNQUFNLEFBQ3RCLENBQUMsQUFFRCxNQUFNLGNBQUMsQ0FBQyxBQUNKLEtBQUssQ0FBRSxLQUFLLEFBQ2hCLENBQUMifQ== */";
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(document.head, style);
}

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[1] = list[i];
	return child_ctx;
}

// (27:8) {#each favorites as favorite}
function create_each_block(ctx) {
	let tr;
	let th;
	let t0_value = /*favorite*/ ctx[1].name + "";
	let t0;
	let t1;

	const block = {
		c: function create() {
			tr = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("tr");
			th = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("th");
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t0_value);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			this.h();
		},
		l: function claim(nodes) {
			tr = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "TR", {});
			var tr_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(tr);
			th = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(tr_nodes, "TH", {});
			var th_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(th);
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(th_nodes, t0_value);
			th_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(tr_nodes);
			tr_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			this.h();
		},
		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(th, file, 28, 20, 706);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(tr, file, 27, 16, 681);
		},
		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, tr, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(tr, th);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(th, t0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(tr, t1);
		},
		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		d: function destroy(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(tr);
		}
	};

	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(27:8) {#each favorites as favorite}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let div1;
	let h1;
	let t0;
	let t1;
	let div0;
	let table;
	let tr;
	let th0;
	let t2;
	let t3;
	let th1;
	let t4;
	let t5;
	let th2;
	let t6;
	let t7;
	let th3;
	let t8;
	let t9;
	let each_value = /*favorites*/ ctx[0];
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["validate_each_argument"])(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			div1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			h1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("h1");
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Favorites");
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			table = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("table");
			tr = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("tr");
			th0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("th");
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Country name");
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			th1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("th");
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Infected");
			t5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			th2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("th");
			t6 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Deaths");
			t7 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			th3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("th");
			t8 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Recovered");
			t9 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			this.h();
		},
		l: function claim(nodes) {
			div1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "DIV", { class: true });
			var div1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div1);
			h1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div1_nodes, "H1", { class: true });
			var h1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(h1);
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(h1_nodes, "Favorites");
			h1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(div1_nodes);
			div0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div1_nodes, "DIV", { class: true });
			var div0_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div0);
			table = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div0_nodes, "TABLE", {});
			var table_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(table);
			tr = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(table_nodes, "TR", {});
			var tr_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(tr);
			th0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(tr_nodes, "TH", {});
			var th0_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(th0);
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(th0_nodes, "Country name");
			th0_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(tr_nodes);
			th1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(tr_nodes, "TH", {});
			var th1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(th1);
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(th1_nodes, "Infected");
			th1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(tr_nodes);
			th2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(tr_nodes, "TH", {});
			var th2_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(th2);
			t6 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(th2_nodes, "Deaths");
			th2_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t7 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(tr_nodes);
			th3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(tr_nodes, "TH", {});
			var th3_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(th3);
			t8 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(th3_nodes, "Recovered");
			th3_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			tr_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t9 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(table_nodes);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(table_nodes);
			}

			table_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			div0_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			div1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			this.h();
		},
		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(h1, "class", "white  svelte-la63gw");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(h1, file, 17, 7, 362);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(th0, file, 21, 20, 470);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(th1, file, 22, 20, 512);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(th2, file, 23, 20, 550);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(th3, file, 24, 20, 586);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(tr, file, 20, 16, 445);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(table, file, 19, 12, 421);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div0, "class", "svelte-la63gw");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div0, file, 18, 7, 403);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div1, "class", "svelte-la63gw");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div1, file, 16, 4, 349);
		},
		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, div1, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div1, h1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(h1, t0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div1, t1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div1, div0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div0, table);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(table, tr);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(tr, th0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(th0, t2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(tr, t3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(tr, th1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(th1, t4);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(tr, t5);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(tr, th2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(th2, t6);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(tr, t7);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(tr, th3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(th3, t8);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(table, t9);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(table, null);
			}
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*favorites*/ 1) {
				each_value = /*favorites*/ ctx[0];
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["validate_each_argument"])(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(table, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		d: function destroy(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(div1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_each"])(each_blocks, detaching);
		}
	};

	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let favorites = [];

	_firestore_js__WEBPACK_IMPORTED_MODULE_2__["db"].collection("favorite").doc(item.n).delete().then(function () {
		console.log("Document successfully deleted!");
	}).catch(function (error) {
		console.error("Error removing document: ", error);
	});

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Favorites> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["validate_slots"])("Favorites", $$slots, []);
	$$self.$capture_state = () => ({ onMount: svelte__WEBPACK_IMPORTED_MODULE_1__["onMount"], db: _firestore_js__WEBPACK_IMPORTED_MODULE_2__["db"], favorites });

	$$self.$inject_state = $$props => {
		if ("favorites" in $$props) $$invalidate(0, favorites = $$props.favorites);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [favorites];
}

class Favorites extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponentDev"] {
	constructor(options) {
		super(options);
		if (!document.getElementById("svelte-la63gw-style")) add_css();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], {});

		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterComponent", {
			component: this,
			tagName: "Favorites",
			options,
			id: create_fragment.name
		});
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Favorites);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZmlyZXN0b3JlLmpzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvZmF2b3JpdGVzLnN2ZWx0ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUFxQztBQUNyQyxFQUE2Qjs7QUFFN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxvREFBUTtBQUNWO0FBQ0E7QUFDQTs7O0FBR0EsRUFBUyxXQUFXLG9EQUFRLFk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJLO0FBQ087Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQTBCZixHQUFRLElBQUMsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQ0FGdkIsR0FBUzs7OztnQ0FBZCxNQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OytCQUFDLEdBQVM7Ozs7K0JBQWQsTUFBSTs7Ozs7Ozs7Ozs7Ozs7OztvQ0FBSixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQXRCTixTQUFTOztDQUdiLGdEQUFFLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxNQUFNLEdBQUcsSUFBSTtFQUMvQyxPQUFPLENBQUMsR0FBRyxDQUFDLGdDQUFnQztJQUM3QyxLQUFLLFdBQVUsS0FBSztFQUNuQixPQUFPLENBQUMsS0FBSyxDQUFDLDJCQUEyQixFQUFFLEtBQUsiLCJmaWxlIjoiNTkwOTg3N2Q2MzE4M2I3MWY0NDcvZmF2b3JpdGVzLmZhdm9yaXRlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiAgaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZS9hcHBcIlxuICBpbXBvcnQgXCJmaXJlYmFzZS9maXJlc3RvcmVcIlxuICBcbiAgLy8gWW91ciB3ZWIgYXBwJ3MgRmlyZWJhc2UgY29uZmlndXJhdGlvblxuICB2YXIgZmlyZWJhc2VDb25maWcgPSB7XG4gICAgYXBpS2V5OiBcIkFJemFTeUFudDZjYTZNUnBma2VQUnY0UGdKX3FiWXowR2FQbEczY1wiLFxuICAgIGF1dGhEb21haW46IFwiY29yb25hLWluZm9ybWF0aW9uLTgwOGY0LmZpcmViYXNlYXBwLmNvbVwiLFxuICAgIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vY29yb25hLWluZm9ybWF0aW9uLTgwOGY0LmZpcmViYXNlaW8uY29tXCIsXG4gICAgcHJvamVjdElkOiBcImNvcm9uYS1pbmZvcm1hdGlvbi04MDhmNFwiLFxuICAgIHN0b3JhZ2VCdWNrZXQ6IFwiY29yb25hLWluZm9ybWF0aW9uLTgwOGY0LmFwcHNwb3QuY29tXCIsXG4gICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiMjUxMzMxNjE2MTY3XCIsXG4gICAgYXBwSWQ6IFwiMToyNTEzMzE2MTYxNjc6d2ViOmZiM2E0ZGI0MmM0M2IzZThkYTZhODJcIixcbiAgICBtZWFzdXJlbWVudElkOiBcIkctUjZOMEQ1VjZXM1wiXG4gIH07XG4gIC8vIEluaXRpYWxpemUgRmlyZWJhc2VcbiAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XG4gIC8qXG4gIGZpcmViYXNlLmFuYWx5dGljcygpO1xuICAqL1xuXG5cbiAgZXhwb3J0IGNvbnN0IGRiID0gZmlyZWJhc2UuZmlyZXN0b3JlKCkiLCI8c2NyaXB0PlxuXHRpbXBvcnQgeyBvbk1vdW50IH0gZnJvbSBcInN2ZWx0ZVwiXG4gICAgaW1wb3J0IHsgZGIgfSBmcm9tIFwiLi4vZmlyZXN0b3JlLmpzXCJcblxuICAgIGxldCBmYXZvcml0ZXMgPSBbXVxuXG5cbiAgICBkYi5jb2xsZWN0aW9uKFwiZmF2b3JpdGVcIikuZG9jKGl0ZW0ubikuZGVsZXRlKCkudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJEb2N1bWVudCBzdWNjZXNzZnVsbHkgZGVsZXRlZCFcIik7XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHJlbW92aW5nIGRvY3VtZW50OiBcIiwgZXJyb3IpO1xuICAgIH0pO1xuXG5cbjwvc2NyaXB0PlxuXG4gICAgPGRpdj5cbiAgICAgICA8aDEgY2xhc3M9XCJ3aGl0ZSBcIj5GYXZvcml0ZXM8L2gxPlxuICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8dGFibGU+XG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICA8dGg+Q291bnRyeSBuYW1lPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoPkluZmVjdGVkPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoPkRlYXRoczwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aD5SZWNvdmVyZWQ8L3RoPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgIHsjZWFjaCBmYXZvcml0ZXMgYXMgZmF2b3JpdGV9XG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICA8dGg+e2Zhdm9yaXRlLm5hbWV9PC90aD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICB7L2VhY2h9XG4gICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG5cbjxzdHlsZT5cbiAgICBkaXYge1xuICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDB2dzs7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxYjFiMzA7XG4gICAgfVxuICAgIGgxIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuICAgIC53aGl0ZSB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG48L3N0eWxlPiJdLCJzb3VyY2VSb290IjoiIn0=