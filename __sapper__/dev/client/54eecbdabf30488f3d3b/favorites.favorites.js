(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["favorites"],{

/***/ "./src/components/Favorite.svelte":
/*!****************************************!*\
  !*** ./src/components/Favorite.svelte ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* src/components/Favorite.svelte generated by Svelte v3.22.2 */


const { console: console_1 } = svelte_internal__WEBPACK_IMPORTED_MODULE_0__["globals"];
const file = "src/components/Favorite.svelte";

function create_fragment(ctx) {
	let section;
	let div0;
	let t0_value = /*favorite*/ ctx[0].name + "";
	let t0;
	let t1;
	let div1;
	let t2_value = /*favorite*/ ctx[0].infected + "";
	let t2;
	let t3;
	let div2;
	let t4_value = /*favorite*/ ctx[0].death + "";
	let t4;
	let t5;
	let div3;
	let t6_value = /*favorite*/ ctx[0].recovered + "";
	let t6;
	let t7;
	let button;
	let t8;
	let dispose;

	const block = {
		c: function create() {
			section = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("section");
			div0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t0_value);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t2_value);
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t4_value);
			t5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			t6 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t6_value);
			t7 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			button = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("button");
			t8 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Delete");
			this.h();
		},
		l: function claim(nodes) {
			section = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "SECTION", {});
			var section_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(section);
			div0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(section_nodes, "DIV", {});
			var div0_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div0);
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(div0_nodes, t0_value);
			div0_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(section_nodes);
			div1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(section_nodes, "DIV", {});
			var div1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div1);
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(div1_nodes, t2_value);
			div1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(section_nodes);
			div2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(section_nodes, "DIV", {});
			var div2_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div2);
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(div2_nodes, t4_value);
			div2_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(section_nodes);
			div3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(section_nodes, "DIV", {});
			var div3_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div3);
			t6 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(div3_nodes, t6_value);
			div3_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t7 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(section_nodes);
			button = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(section_nodes, "BUTTON", {});
			var button_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(button);
			t8 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(button_nodes, "Delete");
			button_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			section_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			this.h();
		},
		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div0, file, 19, 8, 344);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div1, file, 20, 8, 379);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div2, file, 21, 8, 418);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div3, file, 22, 8, 454);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(button, file, 23, 8, 494);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(section, file, 18, 4, 326);
		},
		m: function mount(target, anchor, remount) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, section, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(section, div0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div0, t0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(section, t1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(section, div1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div1, t2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(section, t3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(section, div2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div2, t4);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(section, t5);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(section, div3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div3, t6);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(section, t7);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(section, button);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(button, t8);
			if (remount) dispose();
			dispose = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen_dev"])(button, "click", /*deleteFavorite*/ ctx[1], false, false, false);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*favorite*/ 1 && t0_value !== (t0_value = /*favorite*/ ctx[0].name + "")) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data_dev"])(t0, t0_value);
			if (dirty & /*favorite*/ 1 && t2_value !== (t2_value = /*favorite*/ ctx[0].infected + "")) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data_dev"])(t2, t2_value);
			if (dirty & /*favorite*/ 1 && t4_value !== (t4_value = /*favorite*/ ctx[0].death + "")) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data_dev"])(t4, t4_value);
			if (dirty & /*favorite*/ 1 && t6_value !== (t6_value = /*favorite*/ ctx[0].recovered + "")) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data_dev"])(t6, t6_value);
		},
		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		d: function destroy(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(section);
			dispose();
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
	let { favorite } = $$props;

	const deleteFavorite = () => {
		db.collection("favorites").doc(favorite.name).delete().then(function () {
			console.log("Document successfully deleted!");
		}).catch(function (error) {
			console.error("Error removing document: ", error);
		});
	};

	const writable_props = ["favorite"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Favorite> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["validate_slots"])("Favorite", $$slots, []);

	$$self.$set = $$props => {
		if ("favorite" in $$props) $$invalidate(0, favorite = $$props.favorite);
	};

	$$self.$capture_state = () => ({ favorite, deleteFavorite });

	$$self.$inject_state = $$props => {
		if ("favorite" in $$props) $$invalidate(0, favorite = $$props.favorite);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [favorite, deleteFavorite];
}

class Favorite extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponentDev"] {
	constructor(options) {
		super(options);
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], { favorite: 0 });

		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterComponent", {
			component: this,
			tagName: "Favorite",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*favorite*/ ctx[0] === undefined && !("favorite" in props)) {
			console_1.warn("<Favorite> was created without expected prop 'favorite'");
		}
	}

	get favorite() {
		throw new Error("<Favorite>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set favorite(value) {
		throw new Error("<Favorite>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Favorite);

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
	style.textContent = "p.svelte-1cwt4o2{color:white}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmF2b3JpdGVzLnN2ZWx0ZSIsInNvdXJjZXMiOlsiZmF2b3JpdGVzLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuXHRpbXBvcnQgeyBvbk1vdW50IH0gZnJvbSBcInN2ZWx0ZVwiXG4gICAgaW1wb3J0IHsgZGIgfSBmcm9tIFwiLi4vZmlyZXN0b3JlLmpzXCJcbiAgICBpbXBvcnQgRmF2b3JpdGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvRmF2b3JpdGUuc3ZlbHRlXCJcblxuICAgIGNvbnN0IGZhdm9yaXRlcyA9IGRiLmNvbGxlY3Rpb24oXCJmYXZvcml0ZXNcIilcblxuICAgIGxldCBmYXZvcml0ZXNDb3VudHJ5ID0gW11cblxuXG4gICAgICAgIGZhdm9yaXRlcyAgIFxuICAgICAgICAub3JkZXJCeShcIm1lcmtlXCIpXG4gICAgICAgIC5vblNuYXBzaG90KHNuYXAgPT4ge1xuICAgICAgICBiaWxlciA9IHNuYXAuZG9jc1xuICAgIH0pXG5cblxuXG5cbiAgICBjb25zb2xlLmxvZyhmYXZvcml0ZXMpXG5cblxuXG5cbjwvc2NyaXB0PlxuXG4gICAgPGRpdj5cbiAgICAgICA8aDEgY2xhc3M9XCJ3aGl0ZSBcIj5GYXZvcml0ZXM8L2gxPlxuICAgICAgICB7I2VhY2ggZmF2b3JpdGVzIGFzIGZhdm9yaXRlfVxuICAgICAgICAgICAgPEZhdm9yaXRlIGZhdm9yaXRlPXtmYXZvcml0ZS5kYXRhKCl9Lz5cbiAgICAgICAgezplbHNlfVxuICAgICAgICAgICAgPHA+VSBkb250IGhhdmUgYW55IGZhdm9ydGllcyB5ZXQ8L3A+XG4gICAgICAgIHsvZWFjaH1cbiAgICA8L2Rpdj5cblxuXG48c3R5bGU+XG4gICAgcCB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG48L3N0eWxlPiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQ0ksQ0FBQyxlQUFDLENBQUMsQUFDQyxLQUFLLENBQUUsS0FBSyxBQUNoQixDQUFDIn0= */";
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(document.head, style);
}

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[2] = list[i];
	return child_ctx;
}

// (31:8) {:else}
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
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(p, file, 31, 12, 548);
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
		source: "(31:8) {:else}",
		ctx
	});

	return block;
}

// (29:8) {#each favorites as favorite}
function create_each_block(ctx) {
	let current;

	const favorite = new _components_Favorite_svelte__WEBPACK_IMPORTED_MODULE_3__["default"]({
			props: { favorite: /*favorite*/ ctx[2].data() },
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
		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
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
		source: "(29:8) {#each favorites as favorite}",
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
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(h1, file, 27, 7, 397);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div, file, 26, 4, 384);
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
	const favorites = _firestore_js__WEBPACK_IMPORTED_MODULE_2__["db"].collection("favorites");
	let favoritesCountry = [];

	favorites.orderBy("merke").onSnapshot(snap => {
		biler = snap.docs;
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
		if ("favoritesCountry" in $$props) favoritesCountry = $$props.favoritesCountry;
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [favorites];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9GYXZvcml0ZS5zdmVsdGUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZpcmVzdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL2Zhdm9yaXRlcy5zdmVsdGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQW1CYyxHQUFRLElBQUMsSUFBSTs7Ozs2QkFDYixHQUFRLElBQUMsUUFBUTs7Ozs2QkFDakIsR0FBUSxJQUFDLEtBQUs7Ozs7NkJBQ2QsR0FBUSxJQUFDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvSEFDTixHQUFjOzs7dUVBSjFCLEdBQVEsSUFBQyxJQUFJO3VFQUNiLEdBQVEsSUFBQyxRQUFRO3VFQUNqQixHQUFRLElBQUMsS0FBSzt1RUFDZCxHQUFRLElBQUMsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQXBCakIsUUFBUTs7T0FJYixjQUFjO0VBRXBCLEVBQUUsQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLE1BQU0sR0FBRyxJQUFJO0dBQ3ZELE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0NBQWdDO0tBQzdDLEtBQUssV0FBVSxLQUFLO0dBQ25CLE9BQU8sQ0FBQyxLQUFLLENBQUMsMkJBQTJCLEVBQUUsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUFxQztBQUNyQyxFQUE2Qjs7QUFFN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxvREFBUTtBQUNWO0FBQ0E7QUFDQTs7O0FBR0EsRUFBUyxXQUFXLG9EQUFRLFk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCSztBQUNPO0FBQ2dCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bUNBMEJ4QixHQUFRLElBQUMsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0NBRDlCLEdBQVM7Ozs7Z0NBQWQsTUFBSTs7Ozs7Ozs7OztpQkFBSixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OytCQUFDLEdBQVM7Ozs7K0JBQWQsTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozt3QkFBSixNQUFJOzs7Ozs7bUJBQUosTUFBSTs7Ozs7Ozs7Ozs7Ozs7O2tDQUFKLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0F2QkosU0FBUyxHQUFHLGdEQUFFLENBQUMsVUFBVSxDQUFDLFdBQVc7S0FFdkMsZ0JBQWdCOztDQUdoQixTQUFTLENBQ1IsT0FBTyxDQUFDLE9BQU8sRUFDZixVQUFVLENBQUMsSUFBSTtFQUNoQixLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUk7OztDQU1yQixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMiLCJmaWxlIjoiNTRlZWNiZGFiZjMwNDg4ZjNkM2IvZmF2b3JpdGVzLmZhdm9yaXRlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG5cbiAgICBleHBvcnQgbGV0IGZhdm9yaXRlXG5cblxuXG4gICAgY29uc3QgZGVsZXRlRmF2b3JpdGUgPSAoKSA9PiB7XG4gICAgXG4gICAgZGIuY29sbGVjdGlvbihcImZhdm9yaXRlc1wiKS5kb2MoZmF2b3JpdGUubmFtZSkuZGVsZXRlKCkudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJEb2N1bWVudCBzdWNjZXNzZnVsbHkgZGVsZXRlZCFcIik7XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHJlbW92aW5nIGRvY3VtZW50OiBcIiwgZXJyb3IpO1xuICAgIH0pO1xufVxuXG48L3NjcmlwdD5cblxuXG4gICAgPHNlY3Rpb24+XG4gICAgICAgIDxkaXY+e2Zhdm9yaXRlLm5hbWV9PC9kaXY+XG4gICAgICAgIDxkaXY+e2Zhdm9yaXRlLmluZmVjdGVkfTwvZGl2PlxuICAgICAgICA8ZGl2PntmYXZvcml0ZS5kZWF0aH08L2Rpdj5cbiAgICAgICAgPGRpdj57ZmF2b3JpdGUucmVjb3ZlcmVkfTwvZGl2PlxuICAgICAgICA8YnV0dG9uIG9uOmNsaWNrPXtkZWxldGVGYXZvcml0ZX0+RGVsZXRlPC9idXR0b24+XG4gICAgPC9zZWN0aW9uPiIsIiAgaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZS9hcHBcIlxuICBpbXBvcnQgXCJmaXJlYmFzZS9maXJlc3RvcmVcIlxuICBcbiAgLy8gWW91ciB3ZWIgYXBwJ3MgRmlyZWJhc2UgY29uZmlndXJhdGlvblxuICB2YXIgZmlyZWJhc2VDb25maWcgPSB7XG4gICAgYXBpS2V5OiBcIkFJemFTeUFudDZjYTZNUnBma2VQUnY0UGdKX3FiWXowR2FQbEczY1wiLFxuICAgIGF1dGhEb21haW46IFwiY29yb25hLWluZm9ybWF0aW9uLTgwOGY0LmZpcmViYXNlYXBwLmNvbVwiLFxuICAgIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vY29yb25hLWluZm9ybWF0aW9uLTgwOGY0LmZpcmViYXNlaW8uY29tXCIsXG4gICAgcHJvamVjdElkOiBcImNvcm9uYS1pbmZvcm1hdGlvbi04MDhmNFwiLFxuICAgIHN0b3JhZ2VCdWNrZXQ6IFwiY29yb25hLWluZm9ybWF0aW9uLTgwOGY0LmFwcHNwb3QuY29tXCIsXG4gICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiMjUxMzMxNjE2MTY3XCIsXG4gICAgYXBwSWQ6IFwiMToyNTEzMzE2MTYxNjc6d2ViOmZiM2E0ZGI0MmM0M2IzZThkYTZhODJcIixcbiAgICBtZWFzdXJlbWVudElkOiBcIkctUjZOMEQ1VjZXM1wiXG4gIH07XG4gIC8vIEluaXRpYWxpemUgRmlyZWJhc2VcbiAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XG4gIC8qXG4gIGZpcmViYXNlLmFuYWx5dGljcygpO1xuICAqL1xuXG5cbiAgZXhwb3J0IGNvbnN0IGRiID0gZmlyZWJhc2UuZmlyZXN0b3JlKCkiLCI8c2NyaXB0PlxuXHRpbXBvcnQgeyBvbk1vdW50IH0gZnJvbSBcInN2ZWx0ZVwiXG4gICAgaW1wb3J0IHsgZGIgfSBmcm9tIFwiLi4vZmlyZXN0b3JlLmpzXCJcbiAgICBpbXBvcnQgRmF2b3JpdGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvRmF2b3JpdGUuc3ZlbHRlXCJcblxuICAgIGNvbnN0IGZhdm9yaXRlcyA9IGRiLmNvbGxlY3Rpb24oXCJmYXZvcml0ZXNcIilcblxuICAgIGxldCBmYXZvcml0ZXNDb3VudHJ5ID0gW11cblxuXG4gICAgICAgIGZhdm9yaXRlcyAgIFxuICAgICAgICAub3JkZXJCeShcIm1lcmtlXCIpXG4gICAgICAgIC5vblNuYXBzaG90KHNuYXAgPT4ge1xuICAgICAgICBiaWxlciA9IHNuYXAuZG9jc1xuICAgIH0pXG5cblxuXG5cbiAgICBjb25zb2xlLmxvZyhmYXZvcml0ZXMpXG5cblxuXG5cbjwvc2NyaXB0PlxuXG4gICAgPGRpdj5cbiAgICAgICA8aDEgY2xhc3M9XCJ3aGl0ZSBcIj5GYXZvcml0ZXM8L2gxPlxuICAgICAgICB7I2VhY2ggZmF2b3JpdGVzIGFzIGZhdm9yaXRlfVxuICAgICAgICAgICAgPEZhdm9yaXRlIGZhdm9yaXRlPXtmYXZvcml0ZS5kYXRhKCl9Lz5cbiAgICAgICAgezplbHNlfVxuICAgICAgICAgICAgPHA+VSBkb250IGhhdmUgYW55IGZhdm9ydGllcyB5ZXQ8L3A+XG4gICAgICAgIHsvZWFjaH1cbiAgICA8L2Rpdj5cblxuXG48c3R5bGU+XG4gICAgcCB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG48L3N0eWxlPiJdLCJzb3VyY2VSb290IjoiIn0=