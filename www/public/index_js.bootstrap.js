"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwww"] = self["webpackChunkwww"] || []).push([["index_js"],{

/***/ "../pkg/snake_game.js":
/*!****************************!*\
  !*** ../pkg/snake_game.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"World\": () => (/* binding */ World),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nlet wasm;\n\nlet cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachegetUint8Memory0 = null;\nfunction getUint8Memory0() {\n    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== wasm.memory.buffer) {\n        cachegetUint8Memory0 = new Uint8Array(wasm.memory.buffer);\n    }\n    return cachegetUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n/**\n*/\nclass World {\n\n    static __wrap(ptr) {\n        const obj = Object.create(World.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        wasm.__wbg_world_free(ptr);\n    }\n    /**\n    */\n    get width() {\n        var ret = wasm.__wbg_get_world_width(this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @param {number} arg0\n    */\n    set width(arg0) {\n        wasm.__wbg_set_world_width(this.ptr, arg0);\n    }\n    /**\n    * @returns {World}\n    */\n    static new() {\n        var ret = wasm.world_new();\n        return World.__wrap(ret);\n    }\n    /**\n    * @returns {number}\n    */\n    width() {\n        var ret = wasm.__wbg_get_world_width(this.ptr);\n        return ret >>> 0;\n    }\n}\n\nasync function load(module, imports) {\n    if (typeof Response === 'function' && module instanceof Response) {\n        if (typeof WebAssembly.instantiateStreaming === 'function') {\n            try {\n                return await WebAssembly.instantiateStreaming(module, imports);\n\n            } catch (e) {\n                if (module.headers.get('Content-Type') != 'application/wasm') {\n                    console.warn(\"`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\\n\", e);\n\n                } else {\n                    throw e;\n                }\n            }\n        }\n\n        const bytes = await module.arrayBuffer();\n        return await WebAssembly.instantiate(bytes, imports);\n\n    } else {\n        const instance = await WebAssembly.instantiate(module, imports);\n\n        if (instance instanceof WebAssembly.Instance) {\n            return { instance, module };\n\n        } else {\n            return instance;\n        }\n    }\n}\n\nasync function init(input) {\n    if (typeof input === 'undefined') {\n        input = new URL(/* asset import */ __webpack_require__(/*! snake_game_bg.wasm */ \"../pkg/snake_game_bg.wasm\"), __webpack_require__.b);\n    }\n    const imports = {};\n    imports.wbg = {};\n    imports.wbg.__wbindgen_throw = function(arg0, arg1) {\n        throw new Error(getStringFromWasm0(arg0, arg1));\n    };\n\n    if (typeof input === 'string' || (typeof Request === 'function' && input instanceof Request) || (typeof URL === 'function' && input instanceof URL)) {\n        input = fetch(input);\n    }\n\n\n\n    const { instance, module } = await load(await input, imports);\n\n    wasm = instance.exports;\n    init.__wbindgen_wasm_module = module;\n\n    return wasm;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (init);\n\n\n\n//# sourceURL=webpack://www/../pkg/snake_game.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var snake_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! snake_game */ \"../pkg/snake_game.js\");\n\n\n\n\n\n\n\n(0,snake_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then(_ =>{\n\n    const World = World.new();\n    console.log(World.width);\n    const canvas = document.getElementById(\"snake-canvas\");\n    const ctx = canvas.getContext(\"2d\");\n    debugger\n    \n})\n\n//# sourceURL=webpack://www/./index.js?");

/***/ }),

/***/ "../pkg/snake_game_bg.wasm":
/*!*********************************!*\
  !*** ../pkg/snake_game_bg.wasm ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d4e417470288ad4f606e.wasm\";\n\n//# sourceURL=webpack://www/../pkg/snake_game_bg.wasm?");

/***/ })

}]);