(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["favorites"],{

/***/ "./src/components/Favorite.svelte":
/*!****************************************!*\
  !*** ./src/components/Favorite.svelte ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/svelte-loader/index.js):\nError: ParseError: Selector is expected (29:0)\n27: \n28: <style>\n29: <sectio\n    ^\n30: </style>\n    at /Users/sebastianm/Documents/Tema-8/Temaoppgave/CoronaInformasjon/node_modules/svelte-loader/index.js:181:12");

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


const { console: console_1 } = svelte_internal__WEBPACK_IMPORTED_MODULE_0__["globals"];



const file = "src/routes/favorites.svelte";

function add_css() {
	var style = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("style");
	style.id = "svelte-1cwt4o2-style";
	style.textContent = "p.svelte-1cwt4o2{color:white}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmF2b3JpdGVzLnN2ZWx0ZSIsInNvdXJjZXMiOlsiZmF2b3JpdGVzLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuXHRpbXBvcnQgeyBvbk1vdW50IH0gZnJvbSBcInN2ZWx0ZVwiXG4gICAgaW1wb3J0IHsgZGIgfSBmcm9tIFwiLi4vZmlyZXN0b3JlLmpzXCJcbiAgICBpbXBvcnQgRmF2b3JpdGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvRmF2b3JpdGUuc3ZlbHRlXCJcblxuICAgIGNvbnN0IGZhdm9yaXRlcyA9IGRiLmNvbGxlY3Rpb24oXCJmYXZvcml0ZXNcIilcblxuICAgIGxldCBmYXZvcml0ZXNDb3VudHJ5ID0gW11cblxuXG4gICAgICAgIGZhdm9yaXRlcy5vblNuYXBzaG90KHNuYXAgPT4ge1xuICAgICAgICBmYXZvcml0ZXNDb3VudHJ5ID0gc25hcC5kb2NzXG4gICAgfSlcblxuXG5cblxuICAgIGNvbnNvbGUubG9nKGZhdm9yaXRlcylcblxuXG5cblxuPC9zY3JpcHQ+XG5cbiAgICA8ZGl2PlxuICAgICAgIDxoMSBjbGFzcz1cIndoaXRlIFwiPkZhdm9yaXRlczwvaDE+XG4gICAgICAgIHsjZWFjaCBmYXZvcml0ZXNDb3VudHJ5IGFzIGZhdm9yaXRlfVxuICAgICAgICAgICAgPEZhdm9yaXRlIGZhdm9yaXRlc0NvdW50cnk9e2Zhdm9yaXRlLmRhdGEoKX0vPlxuICAgICAgICB7OmVsc2V9XG4gICAgICAgICAgICA8cD5VIGRvbnQgaGF2ZSBhbnkgZmF2b3J0aWVzIHlldDwvcD5cbiAgICAgICAgey9lYWNofVxuICAgIDwvZGl2PlxuXG5cbjxzdHlsZT5cbiAgICBwIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbjwvc3R5bGU+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1DSSxDQUFDLGVBQUMsQ0FBQyxBQUNDLEtBQUssQ0FBRSxLQUFLLEFBQ2hCLENBQUMifQ== */";
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
			p = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "P", { class: true });
			var p_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(p);
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(p_nodes, "U dont have any favorties yet");
			p_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			this.h();
		},
		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(p, "class", "svelte-1cwt4o2");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(p, file, 29, 12, 536);
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
	let div;
	let h1;
	let t0;
	let t1;
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
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			h1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("h1");
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Favorites");
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			if (each_1_else) {
				each_1_else.c();
			}

			this.h();
		},
		l: function claim(nodes) {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "DIV", {});
			var div_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div);
			h1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div_nodes, "H1", { class: true });
			var h1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(h1);
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(h1_nodes, "Favorites");
			h1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(div_nodes);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div_nodes);
			}

			if (each_1_else) {
				each_1_else.l(div_nodes);
			}

			div_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			this.h();
		},
		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(h1, "class", "white ");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(h1, file, 25, 7, 370);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div, file, 24, 4, 357);
		},
		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, div, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div, h1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(h1, t0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div, t1);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div, null);
			}

			if (each_1_else) {
				each_1_else.m(div, null);
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
						each_blocks[i].m(div, null);
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
					each_1_else.m(div, null);
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
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(div);
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

	console.log(favorites);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Favorites> was created with unknown prop '${key}'`);
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
		if (!document.getElementById("svelte-1cwt4o2-style")) add_css();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZmlyZXN0b3JlLmpzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvZmF2b3JpdGVzLnN2ZWx0ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBQXFDO0FBQ3JDLEVBQTZCOztBQUU3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLG9EQUFRO0FBQ1Y7QUFDQTtBQUNBOzs7QUFHQSxFQUFTLFdBQVcsb0RBQVEsWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJLO0FBQ087QUFDZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bUNBd0JoQixHQUFRLElBQUMsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dGQUFiLEdBQVEsSUFBQyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VDQUR0QyxHQUFnQjs7OztnQ0FBckIsTUFBSTs7Ozs7Ozs7OztpQkFBSixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQUFDLEdBQWdCOzs7OytCQUFyQixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7O3dCQUFKLE1BQUk7Ozs7OzttQkFBSixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7a0NBQUosTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQXJCSixTQUFTLEdBQUcsZ0RBQUUsQ0FBQyxVQUFVLENBQUMsV0FBVztLQUV2QyxnQkFBZ0I7O0NBR2hCLFNBQVMsQ0FBQyxVQUFVLENBQUMsSUFBSTtrQkFDekIsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLElBQUk7OztDQU1oQyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMiLCJmaWxlIjoiNjViNmNjOWViNmZmYzJkMjkwNDAvZmF2b3JpdGVzLmZhdm9yaXRlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiAgaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZS9hcHBcIlxuICBpbXBvcnQgXCJmaXJlYmFzZS9maXJlc3RvcmVcIlxuICBcbiAgLy8gWW91ciB3ZWIgYXBwJ3MgRmlyZWJhc2UgY29uZmlndXJhdGlvblxuICB2YXIgZmlyZWJhc2VDb25maWcgPSB7XG4gICAgYXBpS2V5OiBcIkFJemFTeUFudDZjYTZNUnBma2VQUnY0UGdKX3FiWXowR2FQbEczY1wiLFxuICAgIGF1dGhEb21haW46IFwiY29yb25hLWluZm9ybWF0aW9uLTgwOGY0LmZpcmViYXNlYXBwLmNvbVwiLFxuICAgIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vY29yb25hLWluZm9ybWF0aW9uLTgwOGY0LmZpcmViYXNlaW8uY29tXCIsXG4gICAgcHJvamVjdElkOiBcImNvcm9uYS1pbmZvcm1hdGlvbi04MDhmNFwiLFxuICAgIHN0b3JhZ2VCdWNrZXQ6IFwiY29yb25hLWluZm9ybWF0aW9uLTgwOGY0LmFwcHNwb3QuY29tXCIsXG4gICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiMjUxMzMxNjE2MTY3XCIsXG4gICAgYXBwSWQ6IFwiMToyNTEzMzE2MTYxNjc6d2ViOmZiM2E0ZGI0MmM0M2IzZThkYTZhODJcIixcbiAgICBtZWFzdXJlbWVudElkOiBcIkctUjZOMEQ1VjZXM1wiXG4gIH07XG4gIC8vIEluaXRpYWxpemUgRmlyZWJhc2VcbiAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XG4gIC8qXG4gIGZpcmViYXNlLmFuYWx5dGljcygpO1xuICAqL1xuXG5cbiAgZXhwb3J0IGNvbnN0IGRiID0gZmlyZWJhc2UuZmlyZXN0b3JlKCkiLCI8c2NyaXB0PlxuXHRpbXBvcnQgeyBvbk1vdW50IH0gZnJvbSBcInN2ZWx0ZVwiXG4gICAgaW1wb3J0IHsgZGIgfSBmcm9tIFwiLi4vZmlyZXN0b3JlLmpzXCJcbiAgICBpbXBvcnQgRmF2b3JpdGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvRmF2b3JpdGUuc3ZlbHRlXCJcblxuICAgIGNvbnN0IGZhdm9yaXRlcyA9IGRiLmNvbGxlY3Rpb24oXCJmYXZvcml0ZXNcIilcblxuICAgIGxldCBmYXZvcml0ZXNDb3VudHJ5ID0gW11cblxuXG4gICAgICAgIGZhdm9yaXRlcy5vblNuYXBzaG90KHNuYXAgPT4ge1xuICAgICAgICBmYXZvcml0ZXNDb3VudHJ5ID0gc25hcC5kb2NzXG4gICAgfSlcblxuXG5cblxuICAgIGNvbnNvbGUubG9nKGZhdm9yaXRlcylcblxuXG5cblxuPC9zY3JpcHQ+XG5cbiAgICA8ZGl2PlxuICAgICAgIDxoMSBjbGFzcz1cIndoaXRlIFwiPkZhdm9yaXRlczwvaDE+XG4gICAgICAgIHsjZWFjaCBmYXZvcml0ZXNDb3VudHJ5IGFzIGZhdm9yaXRlfVxuICAgICAgICAgICAgPEZhdm9yaXRlIGZhdm9yaXRlc0NvdW50cnk9e2Zhdm9yaXRlLmRhdGEoKX0vPlxuICAgICAgICB7OmVsc2V9XG4gICAgICAgICAgICA8cD5VIGRvbnQgaGF2ZSBhbnkgZmF2b3J0aWVzIHlldDwvcD5cbiAgICAgICAgey9lYWNofVxuICAgIDwvZGl2PlxuXG5cbjxzdHlsZT5cbiAgICBwIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbjwvc3R5bGU+Il0sInNvdXJjZVJvb3QiOiIifQ==