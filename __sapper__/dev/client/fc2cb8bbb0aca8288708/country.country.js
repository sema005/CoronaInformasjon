(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["country"],{

/***/ "./src/components/World.svelte":
/*!*************************************!*\
  !*** ./src/components/World.svelte ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* src/components/World.svelte generated by Svelte v3.22.2 */


const file = "src/components/World.svelte";

function add_css() {
	var style = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("style");
	style.id = "svelte-bch2qw-style";
	style.textContent = "article.svelte-bch2qw{background-color:rgba(4, 4, 4, .6);padding:1rem;border-radius:10px;display:grid;max-width:15rem;max-height:16rem}article.svelte-bch2qw:hover{background-color:rgba(4, 4, 4, .2)}.white.svelte-bch2qw{color:white;text-align:center;font-size:1.8rem}.green.svelte-bch2qw{color:green}.red.svelte-bch2qw{color:red}.orange.svelte-bch2qw{color:orange}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV29ybGQuc3ZlbHRlIiwic291cmNlcyI6WyJXb3JsZC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cblxuXHRleHBvcnQgbGV0IGl0ZW1cbiAgICBleHBvcnQgbGV0IGFkZFRvRmF2b3JpdGVcblxuXG48L3NjcmlwdD5cblxuXG48YXJ0aWNsZSAgb246Y2xpY2s9e2FkZFRvRmF2b3JpdGUoaXRlbSl9PlxuXHQ8aDEgY2xhc3M9XCJ3aGl0ZVwiPntpdGVtLkNvdW50cnl9PC9oMT5cblx0PHAgY2xhc3M9XCJ0ZXh0IG9yYW5nZVwiPlRvdGFsIGluZmVjdGVkOiB7aXRlbS5Ub3RhbENvbmZpcm1lZC50b1N0cmluZygpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csIFwiLFwiKX08L3A+XG5cdDxwIGNsYXNzPVwidGV4dCByZWRcIj5Ub3RhbCBkZWF0aHM6IHtpdGVtLlRvdGFsRGVhdGhzLnRvU3RyaW5nKCkucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgXCIsXCIpfTwvcD5cblx0PHAgY2xhc3M9XCJ0ZXh0IGdyZWVuXCI+VG90YWwgcmVjb3ZlcmVkOiB7aXRlbS5Ub3RhbFJlY292ZXJlZC50b1N0cmluZygpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csIFwiLFwiKX08L3A+XG48L2FydGljbGU+XHRcdFxuXG48c3R5bGU+XG5cdGFydGljbGUge1xuXHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoNCwgNCwgNCwgLjYpO1xuXHRcdHBhZGRpbmc6IDFyZW07XG5cdFx0Ym9yZGVyLXJhZGl1czogMTBweDtcblx0XHRkaXNwbGF5OiBncmlkO1xuXHRcdG1heC13aWR0aDogMTVyZW07XG5cdFx0bWF4LWhlaWdodDogMTZyZW07XG5cdH1cblx0YXJ0aWNsZTpob3ZlciB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSg0LCA0LCA0LCAuMik7XG5cdH1cblx0LndoaXRlIHtcblx0XHRjb2xvcjogd2hpdGU7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdGZvbnQtc2l6ZTogMS44cmVtO1xuXHR9XG5cdC5ncmVlbiB7XG5cdFx0Y29sb3I6IGdyZWVuO1xuXHR9XG5cdC5yZWQge1xuXHRcdGNvbG9yOiByZWQ7XG5cdH1cblx0Lm9yYW5nZSB7XG5cdFx0Y29sb3I6IG9yYW5nZTtcblx0fVxuPC9zdHlsZT4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUJDLE9BQU8sY0FBQyxDQUFDLEFBQ1IsZ0JBQWdCLENBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FDbkMsT0FBTyxDQUFFLElBQUksQ0FDYixhQUFhLENBQUUsSUFBSSxDQUNuQixPQUFPLENBQUUsSUFBSSxDQUNiLFNBQVMsQ0FBRSxLQUFLLENBQ2hCLFVBQVUsQ0FBRSxLQUFLLEFBQ2xCLENBQUMsQUFDRCxxQkFBTyxNQUFNLEFBQUMsQ0FBQyxBQUNkLGdCQUFnQixDQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEFBQ3BDLENBQUMsQUFDRCxNQUFNLGNBQUMsQ0FBQyxBQUNQLEtBQUssQ0FBRSxLQUFLLENBQ1osVUFBVSxDQUFFLE1BQU0sQ0FDbEIsU0FBUyxDQUFFLE1BQU0sQUFDbEIsQ0FBQyxBQUNELE1BQU0sY0FBQyxDQUFDLEFBQ1AsS0FBSyxDQUFFLEtBQUssQUFDYixDQUFDLEFBQ0QsSUFBSSxjQUFDLENBQUMsQUFDTCxLQUFLLENBQUUsR0FBRyxBQUNYLENBQUMsQUFDRCxPQUFPLGNBQUMsQ0FBQyxBQUNSLEtBQUssQ0FBRSxNQUFNLEFBQ2QsQ0FBQyJ9 */";
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(document.head, style);
}

function create_fragment(ctx) {
	let article;
	let h1;
	let t0_value = /*item*/ ctx[0].Country + "";
	let t0;
	let t1;
	let p0;
	let t2;
	let t3_value = /*item*/ ctx[0].TotalConfirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "";
	let t3;
	let t4;
	let p1;
	let t5;
	let t6_value = /*item*/ ctx[0].TotalDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "";
	let t6;
	let t7;
	let p2;
	let t8;
	let t9_value = /*item*/ ctx[0].TotalRecovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "";
	let t9;
	let dispose;

	const block = {
		c: function create() {
			article = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("article");
			h1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("h1");
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t0_value);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			p0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Total infected: ");
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t3_value);
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			p1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			t5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Total deaths: ");
			t6 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t6_value);
			t7 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			p2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			t8 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Total recovered: ");
			t9 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t9_value);
			this.h();
		},
		l: function claim(nodes) {
			article = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "ARTICLE", { class: true });
			var article_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(article);
			h1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(article_nodes, "H1", { class: true });
			var h1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(h1);
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(h1_nodes, t0_value);
			h1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(article_nodes);
			p0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(article_nodes, "P", { class: true });
			var p0_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(p0);
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(p0_nodes, "Total infected: ");
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(p0_nodes, t3_value);
			p0_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(article_nodes);
			p1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(article_nodes, "P", { class: true });
			var p1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(p1);
			t5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(p1_nodes, "Total deaths: ");
			t6 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(p1_nodes, t6_value);
			p1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t7 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(article_nodes);
			p2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(article_nodes, "P", { class: true });
			var p2_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(p2);
			t8 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(p2_nodes, "Total recovered: ");
			t9 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(p2_nodes, t9_value);
			p2_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			article_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			this.h();
		},
		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(h1, "class", "white svelte-bch2qw");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(h1, file, 10, 1, 113);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(p0, "class", "text orange svelte-bch2qw");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(p0, file, 11, 1, 152);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(p1, "class", "text red svelte-bch2qw");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(p1, file, 12, 1, 267);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(p2, "class", "text green svelte-bch2qw");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(p2, file, 13, 1, 374);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(article, "class", "svelte-bch2qw");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(article, file, 9, 0, 70);
		},
		m: function mount(target, anchor, remount) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, article, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(article, h1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(h1, t0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(article, t1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(article, p0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(p0, t2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(p0, t3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(article, t4);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(article, p1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(p1, t5);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(p1, t6);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(article, t7);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(article, p2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(p2, t8);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(p2, t9);
			if (remount) dispose();

			dispose = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen_dev"])(
				article,
				"click",
				function () {
					if (Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["is_function"])(/*addToFavorite*/ ctx[1](/*item*/ ctx[0]))) /*addToFavorite*/ ctx[1](/*item*/ ctx[0]).apply(this, arguments);
				},
				false,
				false,
				false
			);
		},
		p: function update(new_ctx, [dirty]) {
			ctx = new_ctx;
			if (dirty & /*item*/ 1 && t0_value !== (t0_value = /*item*/ ctx[0].Country + "")) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data_dev"])(t0, t0_value);
			if (dirty & /*item*/ 1 && t3_value !== (t3_value = /*item*/ ctx[0].TotalConfirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "")) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data_dev"])(t3, t3_value);
			if (dirty & /*item*/ 1 && t6_value !== (t6_value = /*item*/ ctx[0].TotalDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "")) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data_dev"])(t6, t6_value);
			if (dirty & /*item*/ 1 && t9_value !== (t9_value = /*item*/ ctx[0].TotalRecovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "")) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data_dev"])(t9, t9_value);
		},
		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		d: function destroy(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(article);
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
	let { item } = $$props;
	let { addToFavorite } = $$props;
	const writable_props = ["item", "addToFavorite"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<World> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["validate_slots"])("World", $$slots, []);

	$$self.$set = $$props => {
		if ("item" in $$props) $$invalidate(0, item = $$props.item);
		if ("addToFavorite" in $$props) $$invalidate(1, addToFavorite = $$props.addToFavorite);
	};

	$$self.$capture_state = () => ({ item, addToFavorite });

	$$self.$inject_state = $$props => {
		if ("item" in $$props) $$invalidate(0, item = $$props.item);
		if ("addToFavorite" in $$props) $$invalidate(1, addToFavorite = $$props.addToFavorite);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [item, addToFavorite];
}

class World extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponentDev"] {
	constructor(options) {
		super(options);
		if (!document.getElementById("svelte-bch2qw-style")) add_css();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], { item: 0, addToFavorite: 1 });

		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterComponent", {
			component: this,
			tagName: "World",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*item*/ ctx[0] === undefined && !("item" in props)) {
			console.warn("<World> was created without expected prop 'item'");
		}

		if (/*addToFavorite*/ ctx[1] === undefined && !("addToFavorite" in props)) {
			console.warn("<World> was created without expected prop 'addToFavorite'");
		}
	}

	get item() {
		throw new Error("<World>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set item(value) {
		throw new Error("<World>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get addToFavorite() {
		throw new Error("<World>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set addToFavorite(value) {
		throw new Error("<World>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* harmony default export */ __webpack_exports__["default"] = (World);

/***/ }),

/***/ "./src/routes/country.svelte":
/*!***********************************!*\
  !*** ./src/routes/country.svelte ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _components_World_svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/World.svelte */ "./src/components/World.svelte");
/* src/routes/country.svelte generated by Svelte v3.22.2 */


const { console: console_1 } = svelte_internal__WEBPACK_IMPORTED_MODULE_0__["globals"];

const file = "src/routes/country.svelte";

function add_css() {
	var style = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("style");
	style.id = "svelte-ouswz3-style";
	style.textContent = "div.svelte-ouswz3{width:100vw;height:100vh;background-color:#1b1b30}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnRyeS5zdmVsdGUiLCJzb3VyY2VzIjpbImNvdW50cnkuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG5pbXBvcnQgV29ybGQgZnJvbSBcIi4uL2NvbXBvbmVudHMvV29ybGQuc3ZlbHRlXCJcbmV4cG9ydCBsZXQgaXRlbVxuXG5cbmNvbnNvbGUubG9nKGl0ZW0pXG48L3NjcmlwdD5cblxuPGRpdj5cbiAgICA8aDE+VGVzdDwvaDE+XG48L2Rpdj5cblxuXG48c3R5bGU+XG4gICAgZGl2IHtcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWIxYjMwOyBcbiAgICB9XG48L3N0eWxlPiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFjSSxHQUFHLGNBQUMsQ0FBQyxBQUNELEtBQUssQ0FBRSxLQUFLLENBQ1osTUFBTSxDQUFFLEtBQUssQ0FDYixnQkFBZ0IsQ0FBRSxPQUFPLEFBQzdCLENBQUMifQ== */";
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(document.head, style);
}

function create_fragment(ctx) {
	let div;
	let h1;
	let t;

	const block = {
		c: function create() {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			h1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("h1");
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Test");
			this.h();
		},
		l: function claim(nodes) {
			div = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "DIV", { class: true });
			var div_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div);
			h1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div_nodes, "H1", {});
			var h1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(h1);
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(h1_nodes, "Test");
			h1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			div_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			this.h();
		},
		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(h1, file, 9, 4, 113);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div, "class", "svelte-ouswz3");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div, file, 8, 0, 103);
		},
		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, div, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div, h1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(h1, t);
		},
		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		d: function destroy(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(div);
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
	let { item } = $$props;
	console.log(item);
	const writable_props = ["item"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Country> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["validate_slots"])("Country", $$slots, []);

	$$self.$set = $$props => {
		if ("item" in $$props) $$invalidate(0, item = $$props.item);
	};

	$$self.$capture_state = () => ({ World: _components_World_svelte__WEBPACK_IMPORTED_MODULE_1__["default"], item });

	$$self.$inject_state = $$props => {
		if ("item" in $$props) $$invalidate(0, item = $$props.item);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [item];
}

class Country extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponentDev"] {
	constructor(options) {
		super(options);
		if (!document.getElementById("svelte-ouswz3-style")) add_css();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], { item: 0 });

		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterComponent", {
			component: this,
			tagName: "Country",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*item*/ ctx[0] === undefined && !("item" in props)) {
			console_1.warn("<Country> was created without expected prop 'item'");
		}
	}

	get item() {
		throw new Error("<Country>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set item(value) {
		throw new Error("<Country>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Country);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLi9zcmMvY29tcG9uZW50cy9Xb3JsZC5zdmVsdGUiLCJ3ZWJwYWNrOi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy4vc3JjL3JvdXRlcy9jb3VudHJ5LnN2ZWx0ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7eUJBVW9CLEdBQUksSUFBQyxPQUFPOzs7Ozt5QkFDUyxHQUFJLElBQUMsY0FBYyxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsdUJBQXVCLEVBQUUsR0FBRzs7Ozs7eUJBQ3hFLEdBQUksSUFBQyxXQUFXLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxHQUFHOzs7Ozt5QkFDM0QsR0FBSSxJQUFDLGNBQWMsQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLHVCQUF1QixFQUFFLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7K0ZBSnhGLEdBQWEsYUFBQyxHQUFJLHlCQUFsQixHQUFhLGFBQUMsR0FBSTs7Ozs7Ozs7OytEQUNsQixHQUFJLElBQUMsT0FBTzsrREFDUyxHQUFJLElBQUMsY0FBYyxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsdUJBQXVCLEVBQUUsR0FBRzsrREFDeEUsR0FBSSxJQUFDLFdBQVcsQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLHVCQUF1QixFQUFFLEdBQUc7K0RBQzNELEdBQUksSUFBQyxjQUFjLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BWGhHLElBQUk7T0FDRCxhQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BQ25DLElBQUk7Q0FHZixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUkiLCJmaWxlIjoiZmMyY2I4YmJiMGFjYTgyODg3MDgvY291bnRyeS5jb3VudHJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cblxuXHRleHBvcnQgbGV0IGl0ZW1cbiAgICBleHBvcnQgbGV0IGFkZFRvRmF2b3JpdGVcblxuXG48L3NjcmlwdD5cblxuXG48YXJ0aWNsZSAgb246Y2xpY2s9e2FkZFRvRmF2b3JpdGUoaXRlbSl9PlxuXHQ8aDEgY2xhc3M9XCJ3aGl0ZVwiPntpdGVtLkNvdW50cnl9PC9oMT5cblx0PHAgY2xhc3M9XCJ0ZXh0IG9yYW5nZVwiPlRvdGFsIGluZmVjdGVkOiB7aXRlbS5Ub3RhbENvbmZpcm1lZC50b1N0cmluZygpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csIFwiLFwiKX08L3A+XG5cdDxwIGNsYXNzPVwidGV4dCByZWRcIj5Ub3RhbCBkZWF0aHM6IHtpdGVtLlRvdGFsRGVhdGhzLnRvU3RyaW5nKCkucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgXCIsXCIpfTwvcD5cblx0PHAgY2xhc3M9XCJ0ZXh0IGdyZWVuXCI+VG90YWwgcmVjb3ZlcmVkOiB7aXRlbS5Ub3RhbFJlY292ZXJlZC50b1N0cmluZygpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csIFwiLFwiKX08L3A+XG48L2FydGljbGU+XHRcdFxuXG48c3R5bGU+XG5cdGFydGljbGUge1xuXHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoNCwgNCwgNCwgLjYpO1xuXHRcdHBhZGRpbmc6IDFyZW07XG5cdFx0Ym9yZGVyLXJhZGl1czogMTBweDtcblx0XHRkaXNwbGF5OiBncmlkO1xuXHRcdG1heC13aWR0aDogMTVyZW07XG5cdFx0bWF4LWhlaWdodDogMTZyZW07XG5cdH1cblx0YXJ0aWNsZTpob3ZlciB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSg0LCA0LCA0LCAuMik7XG5cdH1cblx0LndoaXRlIHtcblx0XHRjb2xvcjogd2hpdGU7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdGZvbnQtc2l6ZTogMS44cmVtO1xuXHR9XG5cdC5ncmVlbiB7XG5cdFx0Y29sb3I6IGdyZWVuO1xuXHR9XG5cdC5yZWQge1xuXHRcdGNvbG9yOiByZWQ7XG5cdH1cblx0Lm9yYW5nZSB7XG5cdFx0Y29sb3I6IG9yYW5nZTtcblx0fVxuPC9zdHlsZT4iLCI8c2NyaXB0PlxuaW1wb3J0IFdvcmxkIGZyb20gXCIuLi9jb21wb25lbnRzL1dvcmxkLnN2ZWx0ZVwiXG5leHBvcnQgbGV0IGl0ZW1cblxuXG5jb25zb2xlLmxvZyhpdGVtKVxuPC9zY3JpcHQ+XG5cbjxkaXY+XG4gICAgPGgxPlRlc3Q8L2gxPlxuPC9kaXY+XG5cblxuPHN0eWxlPlxuICAgIGRpdiB7XG4gICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFiMWIzMDsgXG4gICAgfVxuPC9zdHlsZT4iXSwic291cmNlUm9vdCI6IiJ9