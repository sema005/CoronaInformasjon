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
	style.id = "svelte-atl9ay-style";
	style.textContent = "table.svelte-atl9ay{color:white}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmF2b3JpdGVzLnN2ZWx0ZSIsInNvdXJjZXMiOlsiZmF2b3JpdGVzLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuXHRpbXBvcnQgeyBvbk1vdW50IH0gZnJvbSBcInN2ZWx0ZVwiXG4gICAgaW1wb3J0IHsgZGIgfSBmcm9tIFwiLi4vZmlyZXN0b3JlLmpzXCJcblxuICAgIGxldCBmYXZvcml0ZXMgPSBbXVxuXG4gICAgZmF2b3JpdGVzID0gZGIuY29sbGVjdGlvblxuXG5cbmNvbnN0IGRlbGV0ZUZhdm9yaXRlID0gKCkgPT4ge1xuICAgIFxuICAgIGRiLmNvbGxlY3Rpb24oXCJmYXZvcml0ZVwiKS5kb2MoZmF2b3JpdGVzLm5hbWUpLmRlbGV0ZSgpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRG9jdW1lbnQgc3VjY2Vzc2Z1bGx5IGRlbGV0ZWQhXCIpO1xuICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciByZW1vdmluZyBkb2N1bWVudDogXCIsIGVycm9yKTtcbiAgICB9KTtcbn1cblxuXG48L3NjcmlwdD5cblxuICAgIDxkaXY+XG4gICAgICAgPGgxIGNsYXNzPVwid2hpdGUgXCI+RmF2b3JpdGVzPC9oMT5cbiAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHRhYmxlPlxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgPHRoPkNvdW50cnkgbmFtZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aD5JbmZlY3RlZDwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aD5EZWF0aHM8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGg+UmVjb3ZlcmVkPC90aD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICB7I2VhY2ggZmF2b3JpdGVzIGFzIGZhdm9yaXRlfVxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgPHRoPntmYXZvcml0ZS5uYW1lfTwvdGg+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgey9lYWNofVxuICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuXG48c3R5bGU+XG4gICAgdGFibGUge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuPC9zdHlsZT4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMENJLEtBQUssY0FBQyxDQUFDLEFBQ0gsS0FBSyxDQUFFLEtBQUssQUFDaEIsQ0FBQyJ9 */";
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(document.head, style);
}

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[2] = list[i];
	return child_ctx;
}

// (32:8) {#each favorites as favorite}
function create_each_block(ctx) {
	let tr;
	let th;
	let t0_value = /*favorite*/ ctx[2].name + "";
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
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(th, file, 33, 20, 783);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(tr, file, 32, 16, 758);
		},
		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, tr, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(tr, th);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(th, t0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(tr, t1);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*favorites*/ 1 && t0_value !== (t0_value = /*favorite*/ ctx[2].name + "")) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data_dev"])(t0, t0_value);
		},
		d: function destroy(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(tr);
		}
	};

	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(32:8) {#each favorites as favorite}",
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
			div1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "DIV", {});
			var div1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div1);
			h1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div1_nodes, "H1", { class: true });
			var h1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(h1);
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(h1_nodes, "Favorites");
			h1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(div1_nodes);
			div0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div1_nodes, "DIV", {});
			var div0_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div0);
			table = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div0_nodes, "TABLE", { class: true });
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
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(h1, "class", "white ");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(h1, file, 22, 7, 439);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(th0, file, 26, 20, 547);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(th1, file, 27, 20, 589);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(th2, file, 28, 20, 627);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(th3, file, 29, 20, 663);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(tr, file, 25, 16, 522);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(table, "class", "svelte-atl9ay");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(table, file, 24, 12, 498);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div0, file, 23, 7, 480);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div1, file, 21, 4, 426);
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
	favorites = _firestore_js__WEBPACK_IMPORTED_MODULE_2__["db"].collection;

	const deleteFavorite = () => {
		_firestore_js__WEBPACK_IMPORTED_MODULE_2__["db"].collection("favorite").doc(favorites.name).delete().then(function () {
			console.log("Document successfully deleted!");
		}).catch(function (error) {
			console.error("Error removing document: ", error);
		});
	};

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Favorites> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["validate_slots"])("Favorites", $$slots, []);
	$$self.$capture_state = () => ({ onMount: svelte__WEBPACK_IMPORTED_MODULE_1__["onMount"], db: _firestore_js__WEBPACK_IMPORTED_MODULE_2__["db"], favorites, deleteFavorite });

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
		if (!document.getElementById("svelte-atl9ay-style")) add_css();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZmlyZXN0b3JlLmpzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvZmF2b3JpdGVzLnN2ZWx0ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUFxQztBQUNyQyxFQUE2Qjs7QUFFN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxvREFBUTtBQUNWO0FBQ0E7QUFDQTs7O0FBR0EsRUFBUyxXQUFXLG9EQUFRLFk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJLO0FBQ087Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQStCZixHQUFRLElBQUMsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3RUFBYixHQUFRLElBQUMsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0NBRnZCLEdBQVM7Ozs7Z0NBQWQsTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OytCQUFDLEdBQVM7Ozs7K0JBQWQsTUFBSTs7Ozs7Ozs7Ozs7Ozs7OztvQ0FBSixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQTNCTixTQUFTO0NBRWIsU0FBUyxHQUFHLGdEQUFFLENBQUMsVUFBVTs7T0FHdkIsY0FBYztFQUVoQixnREFBRSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsTUFBTSxHQUFHLElBQUk7R0FDdkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0M7S0FDN0MsS0FBSyxXQUFVLEtBQUs7R0FDbkIsT0FBTyxDQUFDLEtBQUssQ0FBQywyQkFBMkIsRUFBRSxLQUFLIiwiZmlsZSI6IjFhODNmZDhiYTUxN2JiMDgxY2RjL2Zhdm9yaXRlcy5mYXZvcml0ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgIGltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2UvYXBwXCJcbiAgaW1wb3J0IFwiZmlyZWJhc2UvZmlyZXN0b3JlXCJcbiAgXG4gIC8vIFlvdXIgd2ViIGFwcCdzIEZpcmViYXNlIGNvbmZpZ3VyYXRpb25cbiAgdmFyIGZpcmViYXNlQ29uZmlnID0ge1xuICAgIGFwaUtleTogXCJBSXphU3lBbnQ2Y2E2TVJwZmtlUFJ2NFBnSl9xYll6MEdhUGxHM2NcIixcbiAgICBhdXRoRG9tYWluOiBcImNvcm9uYS1pbmZvcm1hdGlvbi04MDhmNC5maXJlYmFzZWFwcC5jb21cIixcbiAgICBkYXRhYmFzZVVSTDogXCJodHRwczovL2Nvcm9uYS1pbmZvcm1hdGlvbi04MDhmNC5maXJlYmFzZWlvLmNvbVwiLFxuICAgIHByb2plY3RJZDogXCJjb3JvbmEtaW5mb3JtYXRpb24tODA4ZjRcIixcbiAgICBzdG9yYWdlQnVja2V0OiBcImNvcm9uYS1pbmZvcm1hdGlvbi04MDhmNC5hcHBzcG90LmNvbVwiLFxuICAgIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjI1MTMzMTYxNjE2N1wiLFxuICAgIGFwcElkOiBcIjE6MjUxMzMxNjE2MTY3OndlYjpmYjNhNGRiNDJjNDNiM2U4ZGE2YTgyXCIsXG4gICAgbWVhc3VyZW1lbnRJZDogXCJHLVI2TjBENVY2VzNcIlxuICB9O1xuICAvLyBJbml0aWFsaXplIEZpcmViYXNlXG4gIGZpcmViYXNlLmluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xuICAvKlxuICBmaXJlYmFzZS5hbmFseXRpY3MoKTtcbiAgKi9cblxuXG4gIGV4cG9ydCBjb25zdCBkYiA9IGZpcmViYXNlLmZpcmVzdG9yZSgpIiwiPHNjcmlwdD5cblx0aW1wb3J0IHsgb25Nb3VudCB9IGZyb20gXCJzdmVsdGVcIlxuICAgIGltcG9ydCB7IGRiIH0gZnJvbSBcIi4uL2ZpcmVzdG9yZS5qc1wiXG5cbiAgICBsZXQgZmF2b3JpdGVzID0gW11cblxuICAgIGZhdm9yaXRlcyA9IGRiLmNvbGxlY3Rpb25cblxuXG5jb25zdCBkZWxldGVGYXZvcml0ZSA9ICgpID0+IHtcbiAgICBcbiAgICBkYi5jb2xsZWN0aW9uKFwiZmF2b3JpdGVcIikuZG9jKGZhdm9yaXRlcy5uYW1lKS5kZWxldGUoKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkRvY3VtZW50IHN1Y2Nlc3NmdWxseSBkZWxldGVkIVwiKTtcbiAgICB9KS5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgcmVtb3ZpbmcgZG9jdW1lbnQ6IFwiLCBlcnJvcik7XG4gICAgfSk7XG59XG5cblxuPC9zY3JpcHQ+XG5cbiAgICA8ZGl2PlxuICAgICAgIDxoMSBjbGFzcz1cIndoaXRlIFwiPkZhdm9yaXRlczwvaDE+XG4gICAgICAgPGRpdj5cbiAgICAgICAgICAgIDx0YWJsZT5cbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0aD5Db3VudHJ5IG5hbWU8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGg+SW5mZWN0ZWQ8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGg+RGVhdGhzPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoPlJlY292ZXJlZDwvdGg+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgeyNlYWNoIGZhdm9yaXRlcyBhcyBmYXZvcml0ZX1cbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0aD57ZmF2b3JpdGUubmFtZX08L3RoPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgIHsvZWFjaH1cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cblxuPHN0eWxlPlxuICAgIHRhYmxlIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbjwvc3R5bGU+Il0sInNvdXJjZVJvb3QiOiIifQ==