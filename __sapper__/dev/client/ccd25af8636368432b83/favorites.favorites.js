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
/* harmony import */ var _firestore_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../firestore.js */ "./src/firestore.js");
/* src/components/Favorite.svelte generated by Svelte v3.22.2 */


const { console: console_1 } = svelte_internal__WEBPACK_IMPORTED_MODULE_0__["globals"];

const file = "src/components/Favorite.svelte";

function add_css() {
	var style = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("style");
	style.id = "svelte-1xy0gar-style";
	style.textContent = "section.svelte-1xy0gar{display:grid;grid-template-columns:2fr 1fr 1fr 1fr 1fr;gap:1rem;padding:1rem;align-items:center;border-bottom:1px solid #ccc;color:white\n    }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmF2b3JpdGUuc3ZlbHRlIiwic291cmNlcyI6WyJGYXZvcml0ZS5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbiAgICBpbXBvcnQgeyBkYiB9IGZyb20gXCIuLi9maXJlc3RvcmUuanNcIlxuICAgIGV4cG9ydCBsZXQgZmF2b3JpdGVzQ291bnRyeVxuXG5cblxuXG4gICAgY29uc3QgZGVsZXRlRmF2b3JpdGUgPSAoKSA9PiB7XG4gICAgXG4gICAgZGIuY29sbGVjdGlvbihcImZhdm9yaXRlc1wiKS5kb2MoZmF2b3JpdGVzQ291bnRyeS5uYW1lKS5kZWxldGUoKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkRvY3VtZW50IHN1Y2Nlc3NmdWxseSBkZWxldGVkIVwiKTtcbiAgICB9KS5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgcmVtb3ZpbmcgZG9jdW1lbnQ6IFwiLCBlcnJvcik7XG4gICAgfSk7XG59XG5cbjwvc2NyaXB0PlxuICAgIDxzZWN0aW9uPlxuICAgICAgICA8ZGl2PntmYXZvcml0ZXNDb3VudHJ5Lm5hbWV9PC9kaXY+XG4gICAgICAgIDxkaXY+e2Zhdm9yaXRlc0NvdW50cnkuaW5mZWN0ZWR9PC9kaXY+XG4gICAgICAgIDxkaXY+e2Zhdm9yaXRlc0NvdW50cnkuZGVhdGh9PC9kaXY+XG4gICAgICAgIDxkaXY+e2Zhdm9yaXRlc0NvdW50cnkucmVjb3ZlcmVkfTwvZGl2PlxuICAgICAgICA8YnV0dG9uIG9uOmNsaWNrPXtkZWxldGVGYXZvcml0ZX0+RGVsZXRlPC9idXR0b24+XG4gICAgPC9zZWN0aW9uPlxuXG5cbjxzdHlsZT5cbiAgICBzZWN0aW9uIHtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyIDFmciAxZnIgMWZyO1xuICAgICAgICBnYXA6IDFyZW07XG4gICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICBjb2xvcjogd2hpdGVcbiAgICB9XG48L3N0eWxlPiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQkksT0FBTyxlQUFDLENBQUMsQUFDTCxPQUFPLENBQUUsSUFBSSxDQUNiLHFCQUFxQixDQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQzFDLEdBQUcsQ0FBRSxJQUFJLENBQ1QsT0FBTyxDQUFFLElBQUksQ0FDYixXQUFXLENBQUUsTUFBTSxDQUNuQixhQUFhLENBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQzdCLEtBQUssQ0FBRSxLQUFLO0lBQ2hCLENBQUMifQ== */";
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(document.head, style);
}

function create_fragment(ctx) {
	let section;
	let div0;
	let t0_value = /*favoritesCountry*/ ctx[0].name + "";
	let t0;
	let t1;
	let div1;
	let t2_value = /*favoritesCountry*/ ctx[0].infected + "";
	let t2;
	let t3;
	let div2;
	let t4_value = /*favoritesCountry*/ ctx[0].death + "";
	let t4;
	let t5;
	let div3;
	let t6_value = /*favoritesCountry*/ ctx[0].recovered + "";
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
			section = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "SECTION", { class: true });
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
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div0, file, 18, 8, 399);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div1, file, 19, 8, 442);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div2, file, 20, 8, 489);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div3, file, 21, 8, 533);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(button, file, 22, 8, 581);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(section, "class", "svelte-1xy0gar");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(section, file, 17, 4, 381);
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
			if (dirty & /*favoritesCountry*/ 1 && t0_value !== (t0_value = /*favoritesCountry*/ ctx[0].name + "")) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data_dev"])(t0, t0_value);
			if (dirty & /*favoritesCountry*/ 1 && t2_value !== (t2_value = /*favoritesCountry*/ ctx[0].infected + "")) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data_dev"])(t2, t2_value);
			if (dirty & /*favoritesCountry*/ 1 && t4_value !== (t4_value = /*favoritesCountry*/ ctx[0].death + "")) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data_dev"])(t4, t4_value);
			if (dirty & /*favoritesCountry*/ 1 && t6_value !== (t6_value = /*favoritesCountry*/ ctx[0].recovered + "")) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data_dev"])(t6, t6_value);
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
	let { favoritesCountry } = $$props;

	const deleteFavorite = () => {
		_firestore_js__WEBPACK_IMPORTED_MODULE_1__["db"].collection("favorites").doc(favoritesCountry.name).delete().then(function () {
			console.log("Document successfully deleted!");
		}).catch(function (error) {
			console.error("Error removing document: ", error);
		});
	};

	const writable_props = ["favoritesCountry"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Favorite> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["validate_slots"])("Favorite", $$slots, []);

	$$self.$set = $$props => {
		if ("favoritesCountry" in $$props) $$invalidate(0, favoritesCountry = $$props.favoritesCountry);
	};

	$$self.$capture_state = () => ({ db: _firestore_js__WEBPACK_IMPORTED_MODULE_1__["db"], favoritesCountry, deleteFavorite });

	$$self.$inject_state = $$props => {
		if ("favoritesCountry" in $$props) $$invalidate(0, favoritesCountry = $$props.favoritesCountry);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [favoritesCountry, deleteFavorite];
}

class Favorite extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponentDev"] {
	constructor(options) {
		super(options);
		if (!document.getElementById("svelte-1xy0gar-style")) add_css();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], { favoritesCountry: 0 });

		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterComponent", {
			component: this,
			tagName: "Favorite",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*favoritesCountry*/ ctx[0] === undefined && !("favoritesCountry" in props)) {
			console_1.warn("<Favorite> was created without expected prop 'favoritesCountry'");
		}
	}

	get favoritesCountry() {
		throw new Error("<Favorite>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set favoritesCountry(value) {
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
	style.id = "svelte-txxnnj-style";
	style.textContent = ".white.svelte-txxnnj{color:white}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmF2b3JpdGVzLnN2ZWx0ZSIsInNvdXJjZXMiOlsiZmF2b3JpdGVzLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuXHRpbXBvcnQgeyBvbk1vdW50IH0gZnJvbSBcInN2ZWx0ZVwiXG4gICAgaW1wb3J0IHsgZGIgfSBmcm9tIFwiLi4vZmlyZXN0b3JlLmpzXCJcbiAgICBpbXBvcnQgRmF2b3JpdGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvRmF2b3JpdGUuc3ZlbHRlXCJcblxuICAgIGNvbnN0IGZhdm9yaXRlcyA9IGRiLmNvbGxlY3Rpb24oXCJmYXZvcml0ZXNcIilcblxuICAgIGxldCBmYXZvcml0ZXNDb3VudHJ5ID0gW11cblxuXG4gICAgICAgIGZhdm9yaXRlcy5vblNuYXBzaG90KHNuYXAgPT4ge1xuICAgICAgICBmYXZvcml0ZXNDb3VudHJ5ID0gc25hcC5kb2NzXG4gICAgfSlcblxuXG5cblxuICAgIGNvbnNvbGUubG9nKGZhdm9yaXRlcylcblxuXG5cblxuPC9zY3JpcHQ+XG5cbiAgICA8ZGl2PlxuICAgICAgIDxoMSBjbGFzcz1cIndoaXRlIFwiPkZhdm9yaXRlczwvaDE+XG4gICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgPGRpdj5OYW1lPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlRvdGFsIGluZmVjdGVkPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlRvdGFsIGRlYXRoczwvZGl2PlxuICAgICAgICAgICAgPGRpdj5Ub3RhbCByZWNvdmVyZWQ8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICB7I2VhY2ggZmF2b3JpdGVzQ291bnRyeSBhcyBmYXZvcml0ZX1cbiAgICAgICAgICAgIDxGYXZvcml0ZSBmYXZvcml0ZXNDb3VudHJ5PXtmYXZvcml0ZS5kYXRhKCl9Lz5cbiAgICAgICAgezplbHNlfVxuICAgICAgICAgICAgPHA+VSBkb250IGhhdmUgYW55IGZhdm9ydGllcyB5ZXQ8L3A+XG4gICAgICAgIHsvZWFjaH1cbiAgICA8L2Rpdj5cblxuXG48c3R5bGU+XG4gICAgLndoaXRlIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgICBcbjwvc3R5bGU+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlDSSxNQUFNLGNBQUMsQ0FBQyxBQUNKLEtBQUssQ0FBRSxLQUFLLEFBQ2hCLENBQUMifQ== */";
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(document.head, style);
}

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[2] = list[i];
	return child_ctx;
}

// (35:8) {:else}
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
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(p, file, 35, 12, 714);
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
		source: "(35:8) {:else}",
		ctx
	});

	return block;
}

// (33:8) {#each favoritesCountry as favorite}
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
		source: "(33:8) {#each favoritesCountry as favorite}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let div4;
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
			div4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
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

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			if (each_1_else) {
				each_1_else.c();
			}

			this.h();
		},
		l: function claim(nodes) {
			div4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "DIV", {});
			var div4_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div4);
			h1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div4_nodes, "H1", { class: true });
			var h1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(h1);
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(h1_nodes, "Favorites");
			h1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(div4_nodes);
			section = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div4_nodes, "SECTION", {});
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
			section_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t9 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(div4_nodes);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div4_nodes);
			}

			if (each_1_else) {
				each_1_else.l(div4_nodes);
			}

			div4_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			this.h();
		},
		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(h1, "class", "white  svelte-txxnnj");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(h1, file, 25, 7, 370);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div0, file, 27, 12, 434);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div1, file, 28, 12, 462);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div2, file, 29, 12, 500);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div3, file, 30, 12, 536);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(section, file, 26, 8, 412);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div4, file, 24, 4, 357);
		},
		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, div4, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div4, h1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(h1, t0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div4, t1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div4, section);
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
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div4, t9);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div4, null);
			}

			if (each_1_else) {
				each_1_else.m(div4, null);
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
						each_blocks[i].m(div4, null);
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
					each_1_else.m(div4, null);
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
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(div4);
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
		if (!document.getElementById("svelte-txxnnj-style")) add_css();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9GYXZvcml0ZS5zdmVsdGUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZpcmVzdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL2Zhdm9yaXRlcy5zdmVsdGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDd0M7Ozs7Ozs7Ozs7Ozs7cUNBaUIxQixHQUFnQixJQUFDLElBQUk7Ozs7cUNBQ3JCLEdBQWdCLElBQUMsUUFBUTs7OztxQ0FDekIsR0FBZ0IsSUFBQyxLQUFLOzs7O3FDQUN0QixHQUFnQixJQUFDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0hBQ2QsR0FBYzs7O3VGQUoxQixHQUFnQixJQUFDLElBQUk7dUZBQ3JCLEdBQWdCLElBQUMsUUFBUTt1RkFDekIsR0FBZ0IsSUFBQyxLQUFLO3VGQUN0QixHQUFnQixJQUFDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FuQnpCLGdCQUFnQjs7T0FLckIsY0FBYztFQUVwQixnREFBRSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxNQUFNLEdBQUcsSUFBSTtHQUMvRCxPQUFPLENBQUMsR0FBRyxDQUFDLGdDQUFnQztLQUM3QyxLQUFLLFdBQVUsS0FBSztHQUNuQixPQUFPLENBQUMsS0FBSyxDQUFDLDJCQUEyQixFQUFFLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1p4RDtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBQXFDO0FBQ3JDLEVBQTZCOztBQUU3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLG9EQUFRO0FBQ1Y7QUFDQTtBQUNBOzs7QUFHQSxFQUFTLFdBQVcsb0RBQVEsWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJLO0FBQ087QUFDZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzttQ0E4QmhCLEdBQVEsSUFBQyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7d0ZBQWIsR0FBUSxJQUFDLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VDQUR0QyxHQUFnQjs7OztnQ0FBckIsTUFBSTs7Ozs7Ozs7OztpQkFBSixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQUFDLEdBQWdCOzs7OytCQUFyQixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7O3dCQUFKLE1BQUk7Ozs7OzttQkFBSixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7a0NBQUosTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQTNCSixTQUFTLEdBQUcsZ0RBQUUsQ0FBQyxVQUFVLENBQUMsV0FBVztLQUV2QyxnQkFBZ0I7O0NBR2hCLFNBQVMsQ0FBQyxVQUFVLENBQUMsSUFBSTtrQkFDekIsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLElBQUk7OztDQU1oQyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMiLCJmaWxlIjoiY2NkMjVhZjg2MzYzNjg0MzJiODMvZmF2b3JpdGVzLmZhdm9yaXRlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gICAgaW1wb3J0IHsgZGIgfSBmcm9tIFwiLi4vZmlyZXN0b3JlLmpzXCJcbiAgICBleHBvcnQgbGV0IGZhdm9yaXRlc0NvdW50cnlcblxuXG5cblxuICAgIGNvbnN0IGRlbGV0ZUZhdm9yaXRlID0gKCkgPT4ge1xuICAgIFxuICAgIGRiLmNvbGxlY3Rpb24oXCJmYXZvcml0ZXNcIikuZG9jKGZhdm9yaXRlc0NvdW50cnkubmFtZSkuZGVsZXRlKCkudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJEb2N1bWVudCBzdWNjZXNzZnVsbHkgZGVsZXRlZCFcIik7XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHJlbW92aW5nIGRvY3VtZW50OiBcIiwgZXJyb3IpO1xuICAgIH0pO1xufVxuXG48L3NjcmlwdD5cbiAgICA8c2VjdGlvbj5cbiAgICAgICAgPGRpdj57ZmF2b3JpdGVzQ291bnRyeS5uYW1lfTwvZGl2PlxuICAgICAgICA8ZGl2PntmYXZvcml0ZXNDb3VudHJ5LmluZmVjdGVkfTwvZGl2PlxuICAgICAgICA8ZGl2PntmYXZvcml0ZXNDb3VudHJ5LmRlYXRofTwvZGl2PlxuICAgICAgICA8ZGl2PntmYXZvcml0ZXNDb3VudHJ5LnJlY292ZXJlZH08L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiBvbjpjbGljaz17ZGVsZXRlRmF2b3JpdGV9PkRlbGV0ZTwvYnV0dG9uPlxuICAgIDwvc2VjdGlvbj5cblxuXG48c3R5bGU+XG4gICAgc2VjdGlvbiB7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmciAxZnIgMWZyIDFmcjtcbiAgICAgICAgZ2FwOiAxcmVtO1xuICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgY29sb3I6IHdoaXRlXG4gICAgfVxuPC9zdHlsZT4iLCIgIGltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2UvYXBwXCJcbiAgaW1wb3J0IFwiZmlyZWJhc2UvZmlyZXN0b3JlXCJcbiAgXG4gIC8vIFlvdXIgd2ViIGFwcCdzIEZpcmViYXNlIGNvbmZpZ3VyYXRpb25cbiAgdmFyIGZpcmViYXNlQ29uZmlnID0ge1xuICAgIGFwaUtleTogXCJBSXphU3lBbnQ2Y2E2TVJwZmtlUFJ2NFBnSl9xYll6MEdhUGxHM2NcIixcbiAgICBhdXRoRG9tYWluOiBcImNvcm9uYS1pbmZvcm1hdGlvbi04MDhmNC5maXJlYmFzZWFwcC5jb21cIixcbiAgICBkYXRhYmFzZVVSTDogXCJodHRwczovL2Nvcm9uYS1pbmZvcm1hdGlvbi04MDhmNC5maXJlYmFzZWlvLmNvbVwiLFxuICAgIHByb2plY3RJZDogXCJjb3JvbmEtaW5mb3JtYXRpb24tODA4ZjRcIixcbiAgICBzdG9yYWdlQnVja2V0OiBcImNvcm9uYS1pbmZvcm1hdGlvbi04MDhmNC5hcHBzcG90LmNvbVwiLFxuICAgIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjI1MTMzMTYxNjE2N1wiLFxuICAgIGFwcElkOiBcIjE6MjUxMzMxNjE2MTY3OndlYjpmYjNhNGRiNDJjNDNiM2U4ZGE2YTgyXCIsXG4gICAgbWVhc3VyZW1lbnRJZDogXCJHLVI2TjBENVY2VzNcIlxuICB9O1xuICAvLyBJbml0aWFsaXplIEZpcmViYXNlXG4gIGZpcmViYXNlLmluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xuICAvKlxuICBmaXJlYmFzZS5hbmFseXRpY3MoKTtcbiAgKi9cblxuXG4gIGV4cG9ydCBjb25zdCBkYiA9IGZpcmViYXNlLmZpcmVzdG9yZSgpIiwiPHNjcmlwdD5cblx0aW1wb3J0IHsgb25Nb3VudCB9IGZyb20gXCJzdmVsdGVcIlxuICAgIGltcG9ydCB7IGRiIH0gZnJvbSBcIi4uL2ZpcmVzdG9yZS5qc1wiXG4gICAgaW1wb3J0IEZhdm9yaXRlIGZyb20gXCIuLi9jb21wb25lbnRzL0Zhdm9yaXRlLnN2ZWx0ZVwiXG5cbiAgICBjb25zdCBmYXZvcml0ZXMgPSBkYi5jb2xsZWN0aW9uKFwiZmF2b3JpdGVzXCIpXG5cbiAgICBsZXQgZmF2b3JpdGVzQ291bnRyeSA9IFtdXG5cblxuICAgICAgICBmYXZvcml0ZXMub25TbmFwc2hvdChzbmFwID0+IHtcbiAgICAgICAgZmF2b3JpdGVzQ291bnRyeSA9IHNuYXAuZG9jc1xuICAgIH0pXG5cblxuXG5cbiAgICBjb25zb2xlLmxvZyhmYXZvcml0ZXMpXG5cblxuXG5cbjwvc2NyaXB0PlxuXG4gICAgPGRpdj5cbiAgICAgICA8aDEgY2xhc3M9XCJ3aGl0ZSBcIj5GYXZvcml0ZXM8L2gxPlxuICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgIDxkaXY+TmFtZTwvZGl2PlxuICAgICAgICAgICAgPGRpdj5Ub3RhbCBpbmZlY3RlZDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5Ub3RhbCBkZWF0aHM8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+VG90YWwgcmVjb3ZlcmVkPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgeyNlYWNoIGZhdm9yaXRlc0NvdW50cnkgYXMgZmF2b3JpdGV9XG4gICAgICAgICAgICA8RmF2b3JpdGUgZmF2b3JpdGVzQ291bnRyeT17ZmF2b3JpdGUuZGF0YSgpfS8+XG4gICAgICAgIHs6ZWxzZX1cbiAgICAgICAgICAgIDxwPlUgZG9udCBoYXZlIGFueSBmYXZvcnRpZXMgeWV0PC9wPlxuICAgICAgICB7L2VhY2h9XG4gICAgPC9kaXY+XG5cblxuPHN0eWxlPlxuICAgIC53aGl0ZSB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gICAgXG48L3N0eWxlPiJdLCJzb3VyY2VSb290IjoiIn0=