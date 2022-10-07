"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_src_modules_HomeModule_PostSection_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/modules/HomeModule/PostSection.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/modules/HomeModule/PostSection.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    NewPostsCard: function NewPostsCard() {
      return __webpack_require__.e(/*! import() */ "resources_js_src_components_NewPostsCard_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/NewPostsCard */ "./resources/js/src/components/NewPostsCard.vue"));
    },
    RecentComments: function RecentComments() {
      return __webpack_require__.e(/*! import() */ "resources_js_src_components_RecentComments_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/RecentComments */ "./resources/js/src/components/RecentComments.vue"));
    },
    RecentPosts: function RecentPosts() {
      return __webpack_require__.e(/*! import() */ "resources_js_src_components_RecentPosts_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/RecentPosts */ "./resources/js/src/components/RecentPosts.vue"));
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/modules/HomeModule/PostSection.vue?vue&type=template&id=1a0d7052&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/modules/HomeModule/PostSection.vue?vue&type=template&id=1a0d7052& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "px-10"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "flex flex-row justify-between gap-10"
  }, [_c("div", _vm._l(Array(6).fill(), function (item, i) {
    return _c("div", {
      key: i,
      staticClass: "py-2"
    }, [_c("NewPostsCard")], 1);
  }), 0), _vm._v(" "), _c("div", {
    staticClass: "flex flex-col gap-5"
  }, [_c("div", {
    staticClass: "py-2"
  }, [_c("RecentComments")], 1), _vm._v(" "), _c("div", {
    staticClass: "py-2"
  }, [_c("RecentPosts")], 1)])])]);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "inline-flex justify-center items-center w-full"
  }, [_c("hr", {
    staticClass: "my-8 w-full h-1.5 bg-red-500 border-0"
  }), _vm._v(" "), _c("div", {
    staticClass: "absolute px-4 bg-white -translate-x-1/2"
  }, [_c("h1", {
    staticClass: "text-2xl uppercase font-black"
  }, [_vm._v("NEW POSTS")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/src/modules/HomeModule/PostSection.vue":
/*!*************************************************************!*\
  !*** ./resources/js/src/modules/HomeModule/PostSection.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PostSection_vue_vue_type_template_id_1a0d7052___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PostSection.vue?vue&type=template&id=1a0d7052& */ "./resources/js/src/modules/HomeModule/PostSection.vue?vue&type=template&id=1a0d7052&");
/* harmony import */ var _PostSection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PostSection.vue?vue&type=script&lang=js& */ "./resources/js/src/modules/HomeModule/PostSection.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PostSection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PostSection_vue_vue_type_template_id_1a0d7052___WEBPACK_IMPORTED_MODULE_0__.render,
  _PostSection_vue_vue_type_template_id_1a0d7052___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/modules/HomeModule/PostSection.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/src/modules/HomeModule/PostSection.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/modules/HomeModule/PostSection.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostSection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PostSection.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/modules/HomeModule/PostSection.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostSection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/modules/HomeModule/PostSection.vue?vue&type=template&id=1a0d7052&":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/modules/HomeModule/PostSection.vue?vue&type=template&id=1a0d7052& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PostSection_vue_vue_type_template_id_1a0d7052___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PostSection_vue_vue_type_template_id_1a0d7052___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PostSection_vue_vue_type_template_id_1a0d7052___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PostSection.vue?vue&type=template&id=1a0d7052& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/modules/HomeModule/PostSection.vue?vue&type=template&id=1a0d7052&");


/***/ })

}]);