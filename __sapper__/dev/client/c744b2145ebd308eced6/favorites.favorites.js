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
	style.textContent = "div.svelte-la63gw{min-height:100vh;max-width:100vw;background-color:#1b1b30}h1.svelte-la63gw{text-align:center}.white.svelte-la63gw{color:white}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmF2b3JpdGVzLnN2ZWx0ZSIsInNvdXJjZXMiOlsiZmF2b3JpdGVzLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuXHRpbXBvcnQgeyBvbk1vdW50IH0gZnJvbSBcInN2ZWx0ZVwiXG4gICAgaW1wb3J0IHsgZGIgfSBmcm9tIFwiLi4vZmlyZXN0b3JlLmpzXCJcblxuICAgIGxldCBmYXZvcml0ZXMgPSBbXVxuXG5jb25zdCBkZWxldGVGYXZvcml0ZSA9ICgpID0+IHtcbiAgICBcbiAgICBkYi5jb2xsZWN0aW9uKFwiZmF2b3JpdGVcIikuZG9jKGZhdm9yaXRlcy5uYW1lKS5kZWxldGUoKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkRvY3VtZW50IHN1Y2Nlc3NmdWxseSBkZWxldGVkIVwiKTtcbiAgICB9KS5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgcmVtb3ZpbmcgZG9jdW1lbnQ6IFwiLCBlcnJvcik7XG4gICAgfSk7XG5cbn1cblxuPC9zY3JpcHQ+XG5cbiAgICA8ZGl2PlxuICAgICAgIDxoMSBjbGFzcz1cIndoaXRlIFwiPkZhdm9yaXRlczwvaDE+XG4gICAgICAgPGRpdj5cbiAgICAgICAgICAgIDx0YWJsZT5cbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0aD5Db3VudHJ5IG5hbWU8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGg+SW5mZWN0ZWQ8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGg+RGVhdGhzPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoPlJlY292ZXJlZDwvdGg+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgeyNlYWNoIGZhdm9yaXRlcyBhcyBmYXZvcml0ZX1cbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0aD57ZmF2b3JpdGUubmFtZX08L3RoPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgIHsvZWFjaH1cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cblxuPHN0eWxlPlxuICAgIGRpdiB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgICBtYXgtd2lkdGg6IDEwMHZ3OztcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFiMWIzMDtcbiAgICB9XG4gICAgaDEge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLndoaXRlIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbjwvc3R5bGU+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVDSSxHQUFHLGNBQUMsQ0FBQyxBQUNELFVBQVUsQ0FBRSxLQUFLLENBQ2pCLFNBQVMsQ0FBRSxLQUFLLENBQ2hCLGdCQUFnQixDQUFFLE9BQU8sQUFDN0IsQ0FBQyxBQUNELEVBQUUsY0FBQyxDQUFDLEFBQ0EsVUFBVSxDQUFFLE1BQU0sQUFDdEIsQ0FBQyxBQUVELE1BQU0sY0FBQyxDQUFDLEFBQ0osS0FBSyxDQUFFLEtBQUssQUFDaEIsQ0FBQyJ9 */";
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(document.head, style);
}

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[2] = list[i];
	return child_ctx;
}

// (29:8) {#each favorites as favorite}
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
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(th, file, 30, 20, 751);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(tr, file, 29, 16, 726);
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
		source: "(29:8) {#each favorites as favorite}",
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
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(h1, file, 19, 7, 407);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(th0, file, 23, 20, 515);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(th1, file, 24, 20, 557);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(th2, file, 25, 20, 595);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(th3, file, 26, 20, 631);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(tr, file, 22, 16, 490);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(table, file, 21, 12, 466);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div0, "class", "svelte-la63gw");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div0, file, 20, 7, 448);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div1, "class", "svelte-la63gw");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div1, file, 18, 4, 394);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZmlyZXN0b3JlLmpzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvZmF2b3JpdGVzLnN2ZWx0ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUFxQztBQUNyQyxFQUE2Qjs7QUFFN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxvREFBUTtBQUNWO0FBQ0E7QUFDQTs7O0FBR0EsRUFBUyxXQUFXLG9EQUFRLFk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJLO0FBQ087Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQTRCZixHQUFRLElBQUMsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQ0FGdkIsR0FBUzs7OztnQ0FBZCxNQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OytCQUFDLEdBQVM7Ozs7K0JBQWQsTUFBSTs7Ozs7Ozs7Ozs7Ozs7OztvQ0FBSixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQXhCTixTQUFTOztPQUVYLGNBQWM7RUFFaEIsZ0RBQUUsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLE1BQU0sR0FBRyxJQUFJO0dBQ3ZELE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0NBQWdDO0tBQzdDLEtBQUssV0FBVSxLQUFLO0dBQ25CLE9BQU8sQ0FBQyxLQUFLLENBQUMsMkJBQTJCLEVBQUUsS0FBSyIsImZpbGUiOiJjNzQ0YjIxNDVlYmQzMDhlY2VkNi9mYXZvcml0ZXMuZmF2b3JpdGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiICBpbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlL2FwcFwiXG4gIGltcG9ydCBcImZpcmViYXNlL2ZpcmVzdG9yZVwiXG4gIFxuICAvLyBZb3VyIHdlYiBhcHAncyBGaXJlYmFzZSBjb25maWd1cmF0aW9uXG4gIHZhciBmaXJlYmFzZUNvbmZpZyA9IHtcbiAgICBhcGlLZXk6IFwiQUl6YVN5QW50NmNhNk1ScGZrZVBSdjRQZ0pfcWJZejBHYVBsRzNjXCIsXG4gICAgYXV0aERvbWFpbjogXCJjb3JvbmEtaW5mb3JtYXRpb24tODA4ZjQuZmlyZWJhc2VhcHAuY29tXCIsXG4gICAgZGF0YWJhc2VVUkw6IFwiaHR0cHM6Ly9jb3JvbmEtaW5mb3JtYXRpb24tODA4ZjQuZmlyZWJhc2Vpby5jb21cIixcbiAgICBwcm9qZWN0SWQ6IFwiY29yb25hLWluZm9ybWF0aW9uLTgwOGY0XCIsXG4gICAgc3RvcmFnZUJ1Y2tldDogXCJjb3JvbmEtaW5mb3JtYXRpb24tODA4ZjQuYXBwc3BvdC5jb21cIixcbiAgICBtZXNzYWdpbmdTZW5kZXJJZDogXCIyNTEzMzE2MTYxNjdcIixcbiAgICBhcHBJZDogXCIxOjI1MTMzMTYxNjE2Nzp3ZWI6ZmIzYTRkYjQyYzQzYjNlOGRhNmE4MlwiLFxuICAgIG1lYXN1cmVtZW50SWQ6IFwiRy1SNk4wRDVWNlczXCJcbiAgfTtcbiAgLy8gSW5pdGlhbGl6ZSBGaXJlYmFzZVxuICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcbiAgLypcbiAgZmlyZWJhc2UuYW5hbHl0aWNzKCk7XG4gICovXG5cblxuICBleHBvcnQgY29uc3QgZGIgPSBmaXJlYmFzZS5maXJlc3RvcmUoKSIsIjxzY3JpcHQ+XG5cdGltcG9ydCB7IG9uTW91bnQgfSBmcm9tIFwic3ZlbHRlXCJcbiAgICBpbXBvcnQgeyBkYiB9IGZyb20gXCIuLi9maXJlc3RvcmUuanNcIlxuXG4gICAgbGV0IGZhdm9yaXRlcyA9IFtdXG5cbmNvbnN0IGRlbGV0ZUZhdm9yaXRlID0gKCkgPT4ge1xuICAgIFxuICAgIGRiLmNvbGxlY3Rpb24oXCJmYXZvcml0ZVwiKS5kb2MoZmF2b3JpdGVzLm5hbWUpLmRlbGV0ZSgpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRG9jdW1lbnQgc3VjY2Vzc2Z1bGx5IGRlbGV0ZWQhXCIpO1xuICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciByZW1vdmluZyBkb2N1bWVudDogXCIsIGVycm9yKTtcbiAgICB9KTtcblxufVxuXG48L3NjcmlwdD5cblxuICAgIDxkaXY+XG4gICAgICAgPGgxIGNsYXNzPVwid2hpdGUgXCI+RmF2b3JpdGVzPC9oMT5cbiAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHRhYmxlPlxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgPHRoPkNvdW50cnkgbmFtZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aD5JbmZlY3RlZDwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aD5EZWF0aHM8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGg+UmVjb3ZlcmVkPC90aD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICB7I2VhY2ggZmF2b3JpdGVzIGFzIGZhdm9yaXRlfVxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgPHRoPntmYXZvcml0ZS5uYW1lfTwvdGg+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgey9lYWNofVxuICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuXG48c3R5bGU+XG4gICAgZGl2IHtcbiAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICAgIG1heC13aWR0aDogMTAwdnc7O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWIxYjMwO1xuICAgIH1cbiAgICBoMSB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICAud2hpdGUge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuPC9zdHlsZT4iXSwic291cmNlUm9vdCI6IiJ9