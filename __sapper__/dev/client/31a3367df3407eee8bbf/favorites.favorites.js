(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["favorites"],{

/***/ "./src/components/Favorite.svelte":
/*!****************************************!*\
  !*** ./src/components/Favorite.svelte ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/svelte-loader/index.js):\nError: ParseError: Colon is expected (38:4)\n36:         width: 80vw;\n37:         mar\n38:     }\n        ^\n39: \n40:     button {\n    at /Users/sebastianm/Documents/Tema-8/Temaoppgave/CoronaInformasjon/node_modules/svelte-loader/index.js:181:12");

/***/ }),

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
/* harmony import */ var _components_Favorite_svelte__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Favorite.svelte */ "./src/components/Favorite.svelte");
/* src/routes/favorites.svelte generated by Svelte v3.22.2 */





const file = "src/routes/favorites.svelte";

function add_css() {
	var style = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("style");
	style.id = "svelte-1itkxrk-style";
	style.textContent = ".back.svelte-1itkxrk{min-width:100vw;min-height:100vh;background-color:#1b1b30}.white.svelte-1itkxrk{color:white}section.svelte-1itkxrk{display:grid;grid-template-columns:2fr 1fr 1fr 1fr 0.5fr;gap:1rem;padding:1rem;align-items:center;border-bottom:1px solid #ccc;color:white;width:80vw}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmF2b3JpdGVzLnN2ZWx0ZSIsInNvdXJjZXMiOlsiZmF2b3JpdGVzLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuXHRpbXBvcnQgeyBvbk1vdW50IH0gZnJvbSBcInN2ZWx0ZVwiXG4gICAgaW1wb3J0IHsgZGIgfSBmcm9tIFwiLi4vZmlyZXN0b3JlLmpzXCJcbiAgICBpbXBvcnQgRmF2b3JpdGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvRmF2b3JpdGUuc3ZlbHRlXCJcblxuICAgIGNvbnN0IGZhdm9yaXRlcyA9IGRiLmNvbGxlY3Rpb24oXCJmYXZvcml0ZXNcIilcblxuICAgIGxldCBmYXZvcml0ZXNDb3VudHJ5ID0gW11cblxuXG4gICAgICAgIGZhdm9yaXRlcy5vblNuYXBzaG90KHNuYXAgPT4ge1xuICAgICAgICBmYXZvcml0ZXNDb3VudHJ5ID0gc25hcC5kb2NzXG4gICAgfSlcblxuXG48L3NjcmlwdD5cblxuICAgIDxkaXYgY2xhc3M9XCJiYWNrXCI+XG4gICAgICAgPGgxIGNsYXNzPVwid2hpdGUgXCI+RmF2b3JpdGVzPC9oMT5cbiAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICA8ZGl2Pk5hbWU8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+VG90YWwgaW5mZWN0ZWQ8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+VG90YWwgZGVhdGhzPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlRvdGFsIHJlY292ZXJlZDwvZGl2PlxuICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICB7I2VhY2ggZmF2b3JpdGVzQ291bnRyeSBhcyBmYXZvcml0ZX1cbiAgICAgICAgICAgIDxGYXZvcml0ZSBmYXZvcml0ZXNDb3VudHJ5PXtmYXZvcml0ZS5kYXRhKCl9Lz5cbiAgICAgICAgezplbHNlfVxuICAgICAgICAgICAgPHA+VSBkb250IGhhdmUgYW55IGZhdm9ydGllcyB5ZXQ8L3A+XG4gICAgICAgIHsvZWFjaH1cbiAgICA8L2Rpdj5cblxuXG48c3R5bGU+XG4gICAgLmJhY2sge1xuICAgICAgICBtaW4td2lkdGg6IDEwMHZ3O1xuICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFiMWIzMDtcbiAgICB9XG4gICAgLndoaXRlIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgICBzZWN0aW9ue1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnIgMWZyIDFmciAwLjVmcjtcbiAgICAgICAgZ2FwOiAxcmVtO1xuICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB3aWR0aDogODB2dztcbiAgICB9XG48L3N0eWxlPiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQ0ksS0FBSyxlQUFDLENBQUMsQUFDSCxTQUFTLENBQUUsS0FBSyxDQUNoQixVQUFVLENBQUUsS0FBSyxDQUNqQixnQkFBZ0IsQ0FBRSxPQUFPLEFBQzdCLENBQUMsQUFDRCxNQUFNLGVBQUMsQ0FBQyxBQUNKLEtBQUssQ0FBRSxLQUFLLEFBQ2hCLENBQUMsQUFDRCxzQkFBTyxDQUFDLEFBQ0osT0FBTyxDQUFFLElBQUksQ0FDYixxQkFBcUIsQ0FBRSxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUM1QyxHQUFHLENBQUUsSUFBSSxDQUNULE9BQU8sQ0FBRSxJQUFJLENBQ2IsV0FBVyxDQUFFLE1BQU0sQ0FDbkIsYUFBYSxDQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUM3QixLQUFLLENBQUUsS0FBSyxDQUNaLEtBQUssQ0FBRSxJQUFJLEFBQ2YsQ0FBQyJ9 */";
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(document.head, style);
}

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[2] = list[i];
	return child_ctx;
}

// (29:8) {:else}
function create_else_block(ctx) {
	let p;
	let t;

	const block = {
		c: function create() {
			p = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("U dont have any favorties yet");
			this.h();
		},
		l: function claim(nodes) {
			p = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "P", {});
			var p_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(p);
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(p_nodes, "U dont have any favorties yet");
			p_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			this.h();
		},
		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(p, file, 29, 12, 718);
		},
		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, p, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(p, t);
		},
		d: function destroy(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(p);
		}
	};

	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterBlock", {
		block,
		id: create_else_block.name,
		type: "else",
		source: "(29:8) {:else}",
		ctx
	});

	return block;
}

// (27:8) {#each favoritesCountry as favorite}
function create_each_block(ctx) {
	let current;

	const favorite = new _components_Favorite_svelte__WEBPACK_IMPORTED_MODULE_3__["default"]({
			props: {
				favoritesCountry: /*favorite*/ ctx[2].data()
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(favorite.$$.fragment);
		},
		l: function claim(nodes) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_component"])(favorite.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(favorite, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const favorite_changes = {};
			if (dirty & /*favoritesCountry*/ 1) favorite_changes.favoritesCountry = /*favorite*/ ctx[2].data();
			favorite.$set(favorite_changes);
		},
		i: function intro(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(favorite.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(favorite.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(favorite, detaching);
		}
	};

	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(27:8) {#each favoritesCountry as favorite}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let div5;
	let h1;
	let t0;
	let t1;
	let section;
	let div0;
	let t2;
	let t3;
	let div1;
	let t4;
	let t5;
	let div2;
	let t6;
	let t7;
	let div3;
	let t8;
	let t9;
	let div4;
	let t10;
	let current;
	let each_value = /*favoritesCountry*/ ctx[0];
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["validate_each_argument"])(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const out = i => Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	let each_1_else = null;

	if (!each_value.length) {
		each_1_else = create_else_block(ctx);
	}

	const block = {
		c: function create() {
			div5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			h1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("h1");
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Favorites");
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			section = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("section");
			div0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Name");
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Total infected");
			t5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			t6 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Total deaths");
			t7 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			t8 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Total recovered");
			t9 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			t10 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			if (each_1_else) {
				each_1_else.c();
			}

			this.h();
		},
		l: function claim(nodes) {
			div5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "DIV", { class: true });
			var div5_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div5);
			h1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div5_nodes, "H1", { class: true });
			var h1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(h1);
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(h1_nodes, "Favorites");
			h1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(div5_nodes);
			section = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div5_nodes, "SECTION", { class: true });
			var section_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(section);
			div0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(section_nodes, "DIV", {});
			var div0_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div0);
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(div0_nodes, "Name");
			div0_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(section_nodes);
			div1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(section_nodes, "DIV", {});
			var div1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div1);
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(div1_nodes, "Total infected");
			div1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(section_nodes);
			div2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(section_nodes, "DIV", {});
			var div2_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div2);
			t6 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(div2_nodes, "Total deaths");
			div2_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t7 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(section_nodes);
			div3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(section_nodes, "DIV", {});
			var div3_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div3);
			t8 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(div3_nodes, "Total recovered");
			div3_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t9 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(section_nodes);
			div4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(section_nodes, "DIV", {});
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div4).forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			section_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t10 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(div5_nodes);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div5_nodes);
			}

			if (each_1_else) {
				each_1_else.l(div5_nodes);
			}

			div5_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			this.h();
		},
		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(h1, "class", "white  svelte-1itkxrk");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(h1, file, 18, 7, 350);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div0, file, 20, 12, 414);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div1, file, 21, 12, 442);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div2, file, 22, 12, 480);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div3, file, 23, 12, 516);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div4, file, 24, 12, 555);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(section, "class", "svelte-1itkxrk");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(section, file, 19, 8, 392);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div5, "class", "back svelte-1itkxrk");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div5, file, 17, 4, 324);
		},
		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, div5, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div5, h1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(h1, t0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div5, t1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div5, section);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(section, div0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div0, t2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(section, t3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(section, div1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div1, t4);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(section, t5);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(section, div2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div2, t6);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(section, t7);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(section, div3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div3, t8);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(section, t9);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(section, div4);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div5, t10);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div5, null);
			}

			if (each_1_else) {
				each_1_else.m(div5, null);
			}

			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*favoritesCountry*/ 1) {
				each_value = /*favoritesCountry*/ ctx[0];
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["validate_each_argument"])(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(each_blocks[i], 1);
						each_blocks[i].m(div5, null);
					}
				}

				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["group_outros"])();

				for (i = each_value.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["check_outros"])();

				if (each_value.length) {
					if (each_1_else) {
						each_1_else.d(1);
						each_1_else = null;
					}
				} else if (!each_1_else) {
					each_1_else = create_else_block(ctx);
					each_1_else.c();
					each_1_else.m(div5, null);
				}
			}
		},
		i: function intro(local) {
			if (current) return;

			for (let i = 0; i < each_value.length; i += 1) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(each_blocks[i]);
			}

			current = true;
		},
		o: function outro(local) {
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(each_blocks[i]);
			}

			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(div5);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_each"])(each_blocks, detaching);
			if (each_1_else) each_1_else.d();
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
	const favorites = _firestore_js__WEBPACK_IMPORTED_MODULE_2__["db"].collection("favorites");
	let favoritesCountry = [];

	favorites.onSnapshot(snap => {
		$$invalidate(0, favoritesCountry = snap.docs);
	});

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Favorites> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["validate_slots"])("Favorites", $$slots, []);

	$$self.$capture_state = () => ({
		onMount: svelte__WEBPACK_IMPORTED_MODULE_1__["onMount"],
		db: _firestore_js__WEBPACK_IMPORTED_MODULE_2__["db"],
		Favorite: _components_Favorite_svelte__WEBPACK_IMPORTED_MODULE_3__["default"],
		favorites,
		favoritesCountry
	});

	$$self.$inject_state = $$props => {
		if ("favoritesCountry" in $$props) $$invalidate(0, favoritesCountry = $$props.favoritesCountry);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [favoritesCountry];
}

class Favorites extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponentDev"] {
	constructor(options) {
		super(options);
		if (!document.getElementById("svelte-1itkxrk-style")) add_css();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZmlyZXN0b3JlLmpzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvZmF2b3JpdGVzLnN2ZWx0ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBQXFDO0FBQ3JDLEVBQTZCOztBQUU3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLG9EQUFRO0FBQ1Y7QUFDQTtBQUNBOzs7QUFHQSxFQUFTLFdBQVcsb0RBQVEsWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQks7QUFDTztBQUNnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21DQXdCaEIsR0FBUSxJQUFDLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3RkFBYixHQUFRLElBQUMsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1Q0FEdEMsR0FBZ0I7Ozs7Z0NBQXJCLE1BQUk7Ozs7Ozs7Ozs7aUJBQUosTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBQUMsR0FBZ0I7Ozs7K0JBQXJCLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7d0JBQUosTUFBSTs7Ozs7O21CQUFKLE1BQUk7Ozs7Ozs7Ozs7Ozs7OztrQ0FBSixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BckJKLFNBQVMsR0FBRyxnREFBRSxDQUFDLFVBQVUsQ0FBQyxXQUFXO0tBRXZDLGdCQUFnQjs7Q0FHaEIsU0FBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJO2tCQUN6QixnQkFBZ0IsR0FBRyxJQUFJLENBQUMsSUFBSSIsImZpbGUiOiIzMWEzMzY3ZGYzNDA3ZWVlOGJiZi9mYXZvcml0ZXMuZmF2b3JpdGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiICBpbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlL2FwcFwiXG4gIGltcG9ydCBcImZpcmViYXNlL2ZpcmVzdG9yZVwiXG4gIFxuICAvLyBZb3VyIHdlYiBhcHAncyBGaXJlYmFzZSBjb25maWd1cmF0aW9uXG4gIHZhciBmaXJlYmFzZUNvbmZpZyA9IHtcbiAgICBhcGlLZXk6IFwiQUl6YVN5QW50NmNhNk1ScGZrZVBSdjRQZ0pfcWJZejBHYVBsRzNjXCIsXG4gICAgYXV0aERvbWFpbjogXCJjb3JvbmEtaW5mb3JtYXRpb24tODA4ZjQuZmlyZWJhc2VhcHAuY29tXCIsXG4gICAgZGF0YWJhc2VVUkw6IFwiaHR0cHM6Ly9jb3JvbmEtaW5mb3JtYXRpb24tODA4ZjQuZmlyZWJhc2Vpby5jb21cIixcbiAgICBwcm9qZWN0SWQ6IFwiY29yb25hLWluZm9ybWF0aW9uLTgwOGY0XCIsXG4gICAgc3RvcmFnZUJ1Y2tldDogXCJjb3JvbmEtaW5mb3JtYXRpb24tODA4ZjQuYXBwc3BvdC5jb21cIixcbiAgICBtZXNzYWdpbmdTZW5kZXJJZDogXCIyNTEzMzE2MTYxNjdcIixcbiAgICBhcHBJZDogXCIxOjI1MTMzMTYxNjE2Nzp3ZWI6ZmIzYTRkYjQyYzQzYjNlOGRhNmE4MlwiLFxuICAgIG1lYXN1cmVtZW50SWQ6IFwiRy1SNk4wRDVWNlczXCJcbiAgfTtcbiAgLy8gSW5pdGlhbGl6ZSBGaXJlYmFzZVxuICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcbiAgLypcbiAgZmlyZWJhc2UuYW5hbHl0aWNzKCk7XG4gICovXG5cblxuICBleHBvcnQgY29uc3QgZGIgPSBmaXJlYmFzZS5maXJlc3RvcmUoKSIsIjxzY3JpcHQ+XG5cdGltcG9ydCB7IG9uTW91bnQgfSBmcm9tIFwic3ZlbHRlXCJcbiAgICBpbXBvcnQgeyBkYiB9IGZyb20gXCIuLi9maXJlc3RvcmUuanNcIlxuICAgIGltcG9ydCBGYXZvcml0ZSBmcm9tIFwiLi4vY29tcG9uZW50cy9GYXZvcml0ZS5zdmVsdGVcIlxuXG4gICAgY29uc3QgZmF2b3JpdGVzID0gZGIuY29sbGVjdGlvbihcImZhdm9yaXRlc1wiKVxuXG4gICAgbGV0IGZhdm9yaXRlc0NvdW50cnkgPSBbXVxuXG5cbiAgICAgICAgZmF2b3JpdGVzLm9uU25hcHNob3Qoc25hcCA9PiB7XG4gICAgICAgIGZhdm9yaXRlc0NvdW50cnkgPSBzbmFwLmRvY3NcbiAgICB9KVxuXG5cbjwvc2NyaXB0PlxuXG4gICAgPGRpdiBjbGFzcz1cImJhY2tcIj5cbiAgICAgICA8aDEgY2xhc3M9XCJ3aGl0ZSBcIj5GYXZvcml0ZXM8L2gxPlxuICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgIDxkaXY+TmFtZTwvZGl2PlxuICAgICAgICAgICAgPGRpdj5Ub3RhbCBpbmZlY3RlZDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5Ub3RhbCBkZWF0aHM8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+VG90YWwgcmVjb3ZlcmVkPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIHsjZWFjaCBmYXZvcml0ZXNDb3VudHJ5IGFzIGZhdm9yaXRlfVxuICAgICAgICAgICAgPEZhdm9yaXRlIGZhdm9yaXRlc0NvdW50cnk9e2Zhdm9yaXRlLmRhdGEoKX0vPlxuICAgICAgICB7OmVsc2V9XG4gICAgICAgICAgICA8cD5VIGRvbnQgaGF2ZSBhbnkgZmF2b3J0aWVzIHlldDwvcD5cbiAgICAgICAgey9lYWNofVxuICAgIDwvZGl2PlxuXG5cbjxzdHlsZT5cbiAgICAuYmFjayB7XG4gICAgICAgIG1pbi13aWR0aDogMTAwdnc7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWIxYjMwO1xuICAgIH1cbiAgICAud2hpdGUge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICAgIHNlY3Rpb257XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmciAxZnIgMWZyIDAuNWZyO1xuICAgICAgICBnYXA6IDFyZW07XG4gICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHdpZHRoOiA4MHZ3O1xuICAgIH1cbjwvc3R5bGU+Il0sInNvdXJjZVJvb3QiOiIifQ==