exports.ids = [1];
exports.modules = {

/***/ "./node_modules/_babel-loader@7.1.5@babel-loader/lib/index.js!./node_modules/_vue-loader@15.2.6@vue-loader/lib/index.js?!./src/views/Test.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@15.2.6@vue-loader/lib??vue-loader-options!./src/views/Test.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  asyncData({ store, route }) {\n    return store.dispatch('getOrders');\n  },\n\n  computed: {\n    orders() {\n      return this.$store.state.orders;\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/views/Test.vue?./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@15.2.6@vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/_vue-loader@15.2.6@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_vue-loader@15.2.6@vue-loader/lib/index.js?!./src/views/Test.vue?vue&type=template&id=5b2d5ecc&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-loader@15.2.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.2.6@vue-loader/lib??vue-loader-options!./src/views/Test.vue?vue&type=template&id=5b2d5ecc& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _vm._ssrNode(\n      \"\\n  I am test\\n\\n  \" +\n        _vm._ssrList(_vm.orders, function(order) {\n          return (\n            \"<div><p>\" +\n            _vm._ssrEscape(_vm._s(order.type)) +\n            \"</p> <p>\" +\n            _vm._ssrEscape(_vm._s(order.content)) +\n            \"</p></div>\"\n          )\n        })\n    )\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/views/Test.vue?./node_modules/_vue-loader@15.2.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.2.6@vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/views/Test.vue":
/*!****************************!*\
  !*** ./src/views/Test.vue ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Test_vue_vue_type_template_id_5b2d5ecc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Test.vue?vue&type=template&id=5b2d5ecc& */ \"./src/views/Test.vue?vue&type=template&id=5b2d5ecc&\");\n/* harmony import */ var _Test_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Test.vue?vue&type=script&lang=js& */ \"./src/views/Test.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_15_2_6_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/_vue-loader@15.2.6@vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/_vue-loader@15.2.6@vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_15_2_6_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _Test_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Test_vue_vue_type_template_id_5b2d5ecc___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Test_vue_vue_type_template_id_5b2d5ecc___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"2b8f165a\"\n  \n)\n\ncomponent.options.__file = \"src/views/Test.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/views/Test.vue?");

/***/ }),

/***/ "./src/views/Test.vue?vue&type=script&lang=js&":
/*!*****************************************************!*\
  !*** ./src/views/Test.vue?vue&type=script&lang=js& ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_node_modules_vue_loader_15_2_6_vue_loader_lib_index_js_vue_loader_options_Test_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_babel-loader@7.1.5@babel-loader/lib!../../node_modules/_vue-loader@15.2.6@vue-loader/lib??vue-loader-options!./Test.vue?vue&type=script&lang=js& */ \"./node_modules/_babel-loader@7.1.5@babel-loader/lib/index.js!./node_modules/_vue-loader@15.2.6@vue-loader/lib/index.js?!./src/views/Test.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_node_modules_vue_loader_15_2_6_vue_loader_lib_index_js_vue_loader_options_Test_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/views/Test.vue?");

/***/ }),

/***/ "./src/views/Test.vue?vue&type=template&id=5b2d5ecc&":
/*!***********************************************************!*\
  !*** ./src/views/Test.vue?vue&type=template&id=5b2d5ecc& ***!
  \***********************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_15_2_6_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_6_vue_loader_lib_index_js_vue_loader_options_Test_vue_vue_type_template_id_5b2d5ecc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_vue-loader@15.2.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/_vue-loader@15.2.6@vue-loader/lib??vue-loader-options!./Test.vue?vue&type=template&id=5b2d5ecc& */ \"./node_modules/_vue-loader@15.2.6@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_vue-loader@15.2.6@vue-loader/lib/index.js?!./src/views/Test.vue?vue&type=template&id=5b2d5ecc&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_15_2_6_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_6_vue_loader_lib_index_js_vue_loader_options_Test_vue_vue_type_template_id_5b2d5ecc___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_15_2_6_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_6_vue_loader_lib_index_js_vue_loader_options_Test_vue_vue_type_template_id_5b2d5ecc___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/views/Test.vue?");

/***/ })

};;