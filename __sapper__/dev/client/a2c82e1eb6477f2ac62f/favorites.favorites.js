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
!(function webpackMissingModule() { var e = new Error("Cannot find module '..'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* src/routes/favorites.svelte generated by Svelte v3.22.2 */


const { console: console_1 } = svelte_internal__WEBPACK_IMPORTED_MODULE_0__["globals"];



const file = "src/routes/favorites.svelte";

function add_css() {
	var style = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("style");
	style.id = "svelte-atl9ay-style";
	style.textContent = "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmF2b3JpdGVzLnN2ZWx0ZSIsInNvdXJjZXMiOlsiZmF2b3JpdGVzLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuXHRpbXBvcnQgeyBvbk1vdW50IH0gZnJvbSBcInN2ZWx0ZVwiXG4gICAgaW1wb3J0IHsgZGIgfSBmcm9tIFwiLi4vZmlyZXN0b3JlLmpzXCJcbiAgICBpbXBvcnQgRmF2b3JpdGUgZnJvbSBcIi4uXCJcblxuICAgIGxldCBmYXZvcml0ZXMgPSBbXVxuXG4gICAgZmF2b3JpdGVzID0gZGIuY29sbGVjdGlvbihcImZhdm9yaXRlc1wiKTtcblxuICAgIGNvbnNvbGUubG9nKGZhdm9yaXRlcylcblxuY29uc3QgZGVsZXRlRmF2b3JpdGUgPSAoKSA9PiB7XG4gICAgXG4gICAgZGIuY29sbGVjdGlvbihcImZhdm9yaXRlc1wiKS5kb2MoZmF2b3JpdGVzLm5hbWUpLmRlbGV0ZSgpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRG9jdW1lbnQgc3VjY2Vzc2Z1bGx5IGRlbGV0ZWQhXCIpO1xuICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciByZW1vdmluZyBkb2N1bWVudDogXCIsIGVycm9yKTtcbiAgICB9KTtcbn1cblxuXG48L3NjcmlwdD5cblxuICAgIDxkaXY+XG4gICAgICAgPGgxIGNsYXNzPVwid2hpdGUgXCI+RmF2b3JpdGVzPC9oMT5cbiAgICAgICAgeyNlYWNoIGZhdm9yaXRlcyBhcyBmYXZvcml0ZX1cbiAgICAgICAgICAgIDxGYXZvcml0ZSBmYXZvcml0ZT17ZmF2b3JpdGV9Lz5cbiAgICAgICAgezplbHNlfVxuICAgICAgICAgICAgPHA+VSBkb250IGhhdmUgYW55IGZhdm9ydGllcyB5ZXQ8L3A+XG4gICAgICAgIHsvZWFjaH1cbiAgICA8L2Rpdj5cblxuXG48c3R5bGU+XG4gICAgdGFibGUge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuPC9zdHlsZT4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiJ9 */";
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(document.head, style);
}

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[2] = list[i];
	return child_ctx;
}

// (28:8) {:else}
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
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(p, file, 28, 12, 655);
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
		source: "(28:8) {:else}",
		ctx
	});

	return block;
}

// (26:8) {#each favorites as favorite}
function create_each_block(ctx) {
	let current;

	const favorite = new !(function webpackMissingModule() { var e = new Error("Cannot find module '..'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
			props: { favorite: /*favorite*/ ctx[2] },
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
			if (dirty & /*favorites*/ 1) favorite_changes.favorite = /*favorite*/ ctx[2];
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
		source: "(26:8) {#each favorites as favorite}",
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
	let each_value = /*favorites*/ ctx[0];
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
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(h1, file, 24, 7, 511);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div, file, 23, 4, 498);
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
			if (dirty & /*favorites*/ 1) {
				each_value = /*favorites*/ ctx[0];
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
	let favorites = [];
	favorites = _firestore_js__WEBPACK_IMPORTED_MODULE_2__["db"].collection("favorites");
	console.log(favorites);

	const deleteFavorite = () => {
		_firestore_js__WEBPACK_IMPORTED_MODULE_2__["db"].collection("favorites").doc(favorites.name).delete().then(function () {
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

	$$self.$capture_state = () => ({
		onMount: svelte__WEBPACK_IMPORTED_MODULE_1__["onMount"],
		db: _firestore_js__WEBPACK_IMPORTED_MODULE_2__["db"],
		Favorite: !(function webpackMissingModule() { var e = new Error("Cannot find module '..'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
		favorites,
		deleteFavorite
	});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZmlyZXN0b3JlLmpzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvZmF2b3JpdGVzLnN2ZWx0ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUFxQztBQUNyQyxFQUE2Qjs7QUFFN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxvREFBUTtBQUNWO0FBQ0E7QUFDQTs7O0FBR0EsRUFBUyxXQUFXLG9EQUFRLFk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCSztBQUNPO0FBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21DQXVCRyxHQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozt5RUFBUixHQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dDQUR6QixHQUFTOzs7O2dDQUFkLE1BQUk7Ozs7Ozs7Ozs7aUJBQUosTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQkFBQyxHQUFTOzs7OytCQUFkLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7d0JBQUosTUFBSTs7Ozs7O21CQUFKLE1BQUk7Ozs7Ozs7Ozs7Ozs7OztrQ0FBSixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBcEJOLFNBQVM7Q0FFYixTQUFTLEdBQUcsZ0RBQUUsQ0FBQyxVQUFVLENBQUMsV0FBVztDQUVyQyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVM7O09BRW5CLGNBQWM7RUFFaEIsZ0RBQUUsQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLE1BQU0sR0FBRyxJQUFJO0dBQ3hELE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0NBQWdDO0tBQzdDLEtBQUssV0FBVSxLQUFLO0dBQ25CLE9BQU8sQ0FBQyxLQUFLLENBQUMsMkJBQTJCLEVBQUUsS0FBSyIsImZpbGUiOiJhMmM4MmUxZWI2NDc3ZjJhYzYyZi9mYXZvcml0ZXMuZmF2b3JpdGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiICBpbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlL2FwcFwiXG4gIGltcG9ydCBcImZpcmViYXNlL2ZpcmVzdG9yZVwiXG4gIFxuICAvLyBZb3VyIHdlYiBhcHAncyBGaXJlYmFzZSBjb25maWd1cmF0aW9uXG4gIHZhciBmaXJlYmFzZUNvbmZpZyA9IHtcbiAgICBhcGlLZXk6IFwiQUl6YVN5QW50NmNhNk1ScGZrZVBSdjRQZ0pfcWJZejBHYVBsRzNjXCIsXG4gICAgYXV0aERvbWFpbjogXCJjb3JvbmEtaW5mb3JtYXRpb24tODA4ZjQuZmlyZWJhc2VhcHAuY29tXCIsXG4gICAgZGF0YWJhc2VVUkw6IFwiaHR0cHM6Ly9jb3JvbmEtaW5mb3JtYXRpb24tODA4ZjQuZmlyZWJhc2Vpby5jb21cIixcbiAgICBwcm9qZWN0SWQ6IFwiY29yb25hLWluZm9ybWF0aW9uLTgwOGY0XCIsXG4gICAgc3RvcmFnZUJ1Y2tldDogXCJjb3JvbmEtaW5mb3JtYXRpb24tODA4ZjQuYXBwc3BvdC5jb21cIixcbiAgICBtZXNzYWdpbmdTZW5kZXJJZDogXCIyNTEzMzE2MTYxNjdcIixcbiAgICBhcHBJZDogXCIxOjI1MTMzMTYxNjE2Nzp3ZWI6ZmIzYTRkYjQyYzQzYjNlOGRhNmE4MlwiLFxuICAgIG1lYXN1cmVtZW50SWQ6IFwiRy1SNk4wRDVWNlczXCJcbiAgfTtcbiAgLy8gSW5pdGlhbGl6ZSBGaXJlYmFzZVxuICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcbiAgLypcbiAgZmlyZWJhc2UuYW5hbHl0aWNzKCk7XG4gICovXG5cblxuICBleHBvcnQgY29uc3QgZGIgPSBmaXJlYmFzZS5maXJlc3RvcmUoKSIsIjxzY3JpcHQ+XG5cdGltcG9ydCB7IG9uTW91bnQgfSBmcm9tIFwic3ZlbHRlXCJcbiAgICBpbXBvcnQgeyBkYiB9IGZyb20gXCIuLi9maXJlc3RvcmUuanNcIlxuICAgIGltcG9ydCBGYXZvcml0ZSBmcm9tIFwiLi5cIlxuXG4gICAgbGV0IGZhdm9yaXRlcyA9IFtdXG5cbiAgICBmYXZvcml0ZXMgPSBkYi5jb2xsZWN0aW9uKFwiZmF2b3JpdGVzXCIpO1xuXG4gICAgY29uc29sZS5sb2coZmF2b3JpdGVzKVxuXG5jb25zdCBkZWxldGVGYXZvcml0ZSA9ICgpID0+IHtcbiAgICBcbiAgICBkYi5jb2xsZWN0aW9uKFwiZmF2b3JpdGVzXCIpLmRvYyhmYXZvcml0ZXMubmFtZSkuZGVsZXRlKCkudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJEb2N1bWVudCBzdWNjZXNzZnVsbHkgZGVsZXRlZCFcIik7XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHJlbW92aW5nIGRvY3VtZW50OiBcIiwgZXJyb3IpO1xuICAgIH0pO1xufVxuXG5cbjwvc2NyaXB0PlxuXG4gICAgPGRpdj5cbiAgICAgICA8aDEgY2xhc3M9XCJ3aGl0ZSBcIj5GYXZvcml0ZXM8L2gxPlxuICAgICAgICB7I2VhY2ggZmF2b3JpdGVzIGFzIGZhdm9yaXRlfVxuICAgICAgICAgICAgPEZhdm9yaXRlIGZhdm9yaXRlPXtmYXZvcml0ZX0vPlxuICAgICAgICB7OmVsc2V9XG4gICAgICAgICAgICA8cD5VIGRvbnQgaGF2ZSBhbnkgZmF2b3J0aWVzIHlldDwvcD5cbiAgICAgICAgey9lYWNofVxuICAgIDwvZGl2PlxuXG5cbjxzdHlsZT5cbiAgICB0YWJsZSB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG48L3N0eWxlPiJdLCJzb3VyY2VSb290IjoiIn0=