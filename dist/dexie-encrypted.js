(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("dexie"));
	else if(typeof define === 'function' && define.amd)
		define(["dexie"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("dexie")) : factory(root["dexie"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, function(__WEBPACK_EXTERNAL_MODULE_dexie__) {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../../.yarn/berry/cache/tweetnacl-npm-1.0.3-b7eef04660-10c0.zip/node_modules/tweetnacl/nacl-fast.js":
/*!**************************************************************************************************************!*\
  !*** ../../../.yarn/berry/cache/tweetnacl-npm-1.0.3-b7eef04660-10c0.zip/node_modules/tweetnacl/nacl-fast.js ***!
  \**************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

(function (nacl) {
  'use strict';

  // Ported in 2014 by Dmitry Chestnykh and Devi Mandiri.
  // Public domain.
  //
  // Implementation derived from TweetNaCl version 20140427.
  // See for details: http://tweetnacl.cr.yp.to/
  var gf = function gf(init) {
    var i,
      r = new Float64Array(16);
    if (init) for (i = 0; i < init.length; i++) r[i] = init[i];
    return r;
  };

  //  Pluggable, initialized in high-level API below.
  var randombytes = function randombytes( /* x, n */) {
    throw new Error('no PRNG');
  };
  var _0 = new Uint8Array(16);
  var _9 = new Uint8Array(32);
  _9[0] = 9;
  var gf0 = gf(),
    gf1 = gf([1]),
    _121665 = gf([0xdb41, 1]),
    D = gf([0x78a3, 0x1359, 0x4dca, 0x75eb, 0xd8ab, 0x4141, 0x0a4d, 0x0070, 0xe898, 0x7779, 0x4079, 0x8cc7, 0xfe73, 0x2b6f, 0x6cee, 0x5203]),
    D2 = gf([0xf159, 0x26b2, 0x9b94, 0xebd6, 0xb156, 0x8283, 0x149a, 0x00e0, 0xd130, 0xeef3, 0x80f2, 0x198e, 0xfce7, 0x56df, 0xd9dc, 0x2406]),
    X = gf([0xd51a, 0x8f25, 0x2d60, 0xc956, 0xa7b2, 0x9525, 0xc760, 0x692c, 0xdc5c, 0xfdd6, 0xe231, 0xc0a4, 0x53fe, 0xcd6e, 0x36d3, 0x2169]),
    Y = gf([0x6658, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666]),
    I = gf([0xa0b0, 0x4a0e, 0x1b27, 0xc4ee, 0xe478, 0xad2f, 0x1806, 0x2f43, 0xd7a7, 0x3dfb, 0x0099, 0x2b4d, 0xdf0b, 0x4fc1, 0x2480, 0x2b83]);
  function ts64(x, i, h, l) {
    x[i] = h >> 24 & 0xff;
    x[i + 1] = h >> 16 & 0xff;
    x[i + 2] = h >> 8 & 0xff;
    x[i + 3] = h & 0xff;
    x[i + 4] = l >> 24 & 0xff;
    x[i + 5] = l >> 16 & 0xff;
    x[i + 6] = l >> 8 & 0xff;
    x[i + 7] = l & 0xff;
  }
  function vn(x, xi, y, yi, n) {
    var i,
      d = 0;
    for (i = 0; i < n; i++) d |= x[xi + i] ^ y[yi + i];
    return (1 & d - 1 >>> 8) - 1;
  }
  function crypto_verify_16(x, xi, y, yi) {
    return vn(x, xi, y, yi, 16);
  }
  function crypto_verify_32(x, xi, y, yi) {
    return vn(x, xi, y, yi, 32);
  }
  function core_salsa20(o, p, k, c) {
    var j0 = c[0] & 0xff | (c[1] & 0xff) << 8 | (c[2] & 0xff) << 16 | (c[3] & 0xff) << 24,
      j1 = k[0] & 0xff | (k[1] & 0xff) << 8 | (k[2] & 0xff) << 16 | (k[3] & 0xff) << 24,
      j2 = k[4] & 0xff | (k[5] & 0xff) << 8 | (k[6] & 0xff) << 16 | (k[7] & 0xff) << 24,
      j3 = k[8] & 0xff | (k[9] & 0xff) << 8 | (k[10] & 0xff) << 16 | (k[11] & 0xff) << 24,
      j4 = k[12] & 0xff | (k[13] & 0xff) << 8 | (k[14] & 0xff) << 16 | (k[15] & 0xff) << 24,
      j5 = c[4] & 0xff | (c[5] & 0xff) << 8 | (c[6] & 0xff) << 16 | (c[7] & 0xff) << 24,
      j6 = p[0] & 0xff | (p[1] & 0xff) << 8 | (p[2] & 0xff) << 16 | (p[3] & 0xff) << 24,
      j7 = p[4] & 0xff | (p[5] & 0xff) << 8 | (p[6] & 0xff) << 16 | (p[7] & 0xff) << 24,
      j8 = p[8] & 0xff | (p[9] & 0xff) << 8 | (p[10] & 0xff) << 16 | (p[11] & 0xff) << 24,
      j9 = p[12] & 0xff | (p[13] & 0xff) << 8 | (p[14] & 0xff) << 16 | (p[15] & 0xff) << 24,
      j10 = c[8] & 0xff | (c[9] & 0xff) << 8 | (c[10] & 0xff) << 16 | (c[11] & 0xff) << 24,
      j11 = k[16] & 0xff | (k[17] & 0xff) << 8 | (k[18] & 0xff) << 16 | (k[19] & 0xff) << 24,
      j12 = k[20] & 0xff | (k[21] & 0xff) << 8 | (k[22] & 0xff) << 16 | (k[23] & 0xff) << 24,
      j13 = k[24] & 0xff | (k[25] & 0xff) << 8 | (k[26] & 0xff) << 16 | (k[27] & 0xff) << 24,
      j14 = k[28] & 0xff | (k[29] & 0xff) << 8 | (k[30] & 0xff) << 16 | (k[31] & 0xff) << 24,
      j15 = c[12] & 0xff | (c[13] & 0xff) << 8 | (c[14] & 0xff) << 16 | (c[15] & 0xff) << 24;
    var x0 = j0,
      x1 = j1,
      x2 = j2,
      x3 = j3,
      x4 = j4,
      x5 = j5,
      x6 = j6,
      x7 = j7,
      x8 = j8,
      x9 = j9,
      x10 = j10,
      x11 = j11,
      x12 = j12,
      x13 = j13,
      x14 = j14,
      x15 = j15,
      u;
    for (var i = 0; i < 20; i += 2) {
      u = x0 + x12 | 0;
      x4 ^= u << 7 | u >>> 32 - 7;
      u = x4 + x0 | 0;
      x8 ^= u << 9 | u >>> 32 - 9;
      u = x8 + x4 | 0;
      x12 ^= u << 13 | u >>> 32 - 13;
      u = x12 + x8 | 0;
      x0 ^= u << 18 | u >>> 32 - 18;
      u = x5 + x1 | 0;
      x9 ^= u << 7 | u >>> 32 - 7;
      u = x9 + x5 | 0;
      x13 ^= u << 9 | u >>> 32 - 9;
      u = x13 + x9 | 0;
      x1 ^= u << 13 | u >>> 32 - 13;
      u = x1 + x13 | 0;
      x5 ^= u << 18 | u >>> 32 - 18;
      u = x10 + x6 | 0;
      x14 ^= u << 7 | u >>> 32 - 7;
      u = x14 + x10 | 0;
      x2 ^= u << 9 | u >>> 32 - 9;
      u = x2 + x14 | 0;
      x6 ^= u << 13 | u >>> 32 - 13;
      u = x6 + x2 | 0;
      x10 ^= u << 18 | u >>> 32 - 18;
      u = x15 + x11 | 0;
      x3 ^= u << 7 | u >>> 32 - 7;
      u = x3 + x15 | 0;
      x7 ^= u << 9 | u >>> 32 - 9;
      u = x7 + x3 | 0;
      x11 ^= u << 13 | u >>> 32 - 13;
      u = x11 + x7 | 0;
      x15 ^= u << 18 | u >>> 32 - 18;
      u = x0 + x3 | 0;
      x1 ^= u << 7 | u >>> 32 - 7;
      u = x1 + x0 | 0;
      x2 ^= u << 9 | u >>> 32 - 9;
      u = x2 + x1 | 0;
      x3 ^= u << 13 | u >>> 32 - 13;
      u = x3 + x2 | 0;
      x0 ^= u << 18 | u >>> 32 - 18;
      u = x5 + x4 | 0;
      x6 ^= u << 7 | u >>> 32 - 7;
      u = x6 + x5 | 0;
      x7 ^= u << 9 | u >>> 32 - 9;
      u = x7 + x6 | 0;
      x4 ^= u << 13 | u >>> 32 - 13;
      u = x4 + x7 | 0;
      x5 ^= u << 18 | u >>> 32 - 18;
      u = x10 + x9 | 0;
      x11 ^= u << 7 | u >>> 32 - 7;
      u = x11 + x10 | 0;
      x8 ^= u << 9 | u >>> 32 - 9;
      u = x8 + x11 | 0;
      x9 ^= u << 13 | u >>> 32 - 13;
      u = x9 + x8 | 0;
      x10 ^= u << 18 | u >>> 32 - 18;
      u = x15 + x14 | 0;
      x12 ^= u << 7 | u >>> 32 - 7;
      u = x12 + x15 | 0;
      x13 ^= u << 9 | u >>> 32 - 9;
      u = x13 + x12 | 0;
      x14 ^= u << 13 | u >>> 32 - 13;
      u = x14 + x13 | 0;
      x15 ^= u << 18 | u >>> 32 - 18;
    }
    x0 = x0 + j0 | 0;
    x1 = x1 + j1 | 0;
    x2 = x2 + j2 | 0;
    x3 = x3 + j3 | 0;
    x4 = x4 + j4 | 0;
    x5 = x5 + j5 | 0;
    x6 = x6 + j6 | 0;
    x7 = x7 + j7 | 0;
    x8 = x8 + j8 | 0;
    x9 = x9 + j9 | 0;
    x10 = x10 + j10 | 0;
    x11 = x11 + j11 | 0;
    x12 = x12 + j12 | 0;
    x13 = x13 + j13 | 0;
    x14 = x14 + j14 | 0;
    x15 = x15 + j15 | 0;
    o[0] = x0 >>> 0 & 0xff;
    o[1] = x0 >>> 8 & 0xff;
    o[2] = x0 >>> 16 & 0xff;
    o[3] = x0 >>> 24 & 0xff;
    o[4] = x1 >>> 0 & 0xff;
    o[5] = x1 >>> 8 & 0xff;
    o[6] = x1 >>> 16 & 0xff;
    o[7] = x1 >>> 24 & 0xff;
    o[8] = x2 >>> 0 & 0xff;
    o[9] = x2 >>> 8 & 0xff;
    o[10] = x2 >>> 16 & 0xff;
    o[11] = x2 >>> 24 & 0xff;
    o[12] = x3 >>> 0 & 0xff;
    o[13] = x3 >>> 8 & 0xff;
    o[14] = x3 >>> 16 & 0xff;
    o[15] = x3 >>> 24 & 0xff;
    o[16] = x4 >>> 0 & 0xff;
    o[17] = x4 >>> 8 & 0xff;
    o[18] = x4 >>> 16 & 0xff;
    o[19] = x4 >>> 24 & 0xff;
    o[20] = x5 >>> 0 & 0xff;
    o[21] = x5 >>> 8 & 0xff;
    o[22] = x5 >>> 16 & 0xff;
    o[23] = x5 >>> 24 & 0xff;
    o[24] = x6 >>> 0 & 0xff;
    o[25] = x6 >>> 8 & 0xff;
    o[26] = x6 >>> 16 & 0xff;
    o[27] = x6 >>> 24 & 0xff;
    o[28] = x7 >>> 0 & 0xff;
    o[29] = x7 >>> 8 & 0xff;
    o[30] = x7 >>> 16 & 0xff;
    o[31] = x7 >>> 24 & 0xff;
    o[32] = x8 >>> 0 & 0xff;
    o[33] = x8 >>> 8 & 0xff;
    o[34] = x8 >>> 16 & 0xff;
    o[35] = x8 >>> 24 & 0xff;
    o[36] = x9 >>> 0 & 0xff;
    o[37] = x9 >>> 8 & 0xff;
    o[38] = x9 >>> 16 & 0xff;
    o[39] = x9 >>> 24 & 0xff;
    o[40] = x10 >>> 0 & 0xff;
    o[41] = x10 >>> 8 & 0xff;
    o[42] = x10 >>> 16 & 0xff;
    o[43] = x10 >>> 24 & 0xff;
    o[44] = x11 >>> 0 & 0xff;
    o[45] = x11 >>> 8 & 0xff;
    o[46] = x11 >>> 16 & 0xff;
    o[47] = x11 >>> 24 & 0xff;
    o[48] = x12 >>> 0 & 0xff;
    o[49] = x12 >>> 8 & 0xff;
    o[50] = x12 >>> 16 & 0xff;
    o[51] = x12 >>> 24 & 0xff;
    o[52] = x13 >>> 0 & 0xff;
    o[53] = x13 >>> 8 & 0xff;
    o[54] = x13 >>> 16 & 0xff;
    o[55] = x13 >>> 24 & 0xff;
    o[56] = x14 >>> 0 & 0xff;
    o[57] = x14 >>> 8 & 0xff;
    o[58] = x14 >>> 16 & 0xff;
    o[59] = x14 >>> 24 & 0xff;
    o[60] = x15 >>> 0 & 0xff;
    o[61] = x15 >>> 8 & 0xff;
    o[62] = x15 >>> 16 & 0xff;
    o[63] = x15 >>> 24 & 0xff;
  }
  function core_hsalsa20(o, p, k, c) {
    var j0 = c[0] & 0xff | (c[1] & 0xff) << 8 | (c[2] & 0xff) << 16 | (c[3] & 0xff) << 24,
      j1 = k[0] & 0xff | (k[1] & 0xff) << 8 | (k[2] & 0xff) << 16 | (k[3] & 0xff) << 24,
      j2 = k[4] & 0xff | (k[5] & 0xff) << 8 | (k[6] & 0xff) << 16 | (k[7] & 0xff) << 24,
      j3 = k[8] & 0xff | (k[9] & 0xff) << 8 | (k[10] & 0xff) << 16 | (k[11] & 0xff) << 24,
      j4 = k[12] & 0xff | (k[13] & 0xff) << 8 | (k[14] & 0xff) << 16 | (k[15] & 0xff) << 24,
      j5 = c[4] & 0xff | (c[5] & 0xff) << 8 | (c[6] & 0xff) << 16 | (c[7] & 0xff) << 24,
      j6 = p[0] & 0xff | (p[1] & 0xff) << 8 | (p[2] & 0xff) << 16 | (p[3] & 0xff) << 24,
      j7 = p[4] & 0xff | (p[5] & 0xff) << 8 | (p[6] & 0xff) << 16 | (p[7] & 0xff) << 24,
      j8 = p[8] & 0xff | (p[9] & 0xff) << 8 | (p[10] & 0xff) << 16 | (p[11] & 0xff) << 24,
      j9 = p[12] & 0xff | (p[13] & 0xff) << 8 | (p[14] & 0xff) << 16 | (p[15] & 0xff) << 24,
      j10 = c[8] & 0xff | (c[9] & 0xff) << 8 | (c[10] & 0xff) << 16 | (c[11] & 0xff) << 24,
      j11 = k[16] & 0xff | (k[17] & 0xff) << 8 | (k[18] & 0xff) << 16 | (k[19] & 0xff) << 24,
      j12 = k[20] & 0xff | (k[21] & 0xff) << 8 | (k[22] & 0xff) << 16 | (k[23] & 0xff) << 24,
      j13 = k[24] & 0xff | (k[25] & 0xff) << 8 | (k[26] & 0xff) << 16 | (k[27] & 0xff) << 24,
      j14 = k[28] & 0xff | (k[29] & 0xff) << 8 | (k[30] & 0xff) << 16 | (k[31] & 0xff) << 24,
      j15 = c[12] & 0xff | (c[13] & 0xff) << 8 | (c[14] & 0xff) << 16 | (c[15] & 0xff) << 24;
    var x0 = j0,
      x1 = j1,
      x2 = j2,
      x3 = j3,
      x4 = j4,
      x5 = j5,
      x6 = j6,
      x7 = j7,
      x8 = j8,
      x9 = j9,
      x10 = j10,
      x11 = j11,
      x12 = j12,
      x13 = j13,
      x14 = j14,
      x15 = j15,
      u;
    for (var i = 0; i < 20; i += 2) {
      u = x0 + x12 | 0;
      x4 ^= u << 7 | u >>> 32 - 7;
      u = x4 + x0 | 0;
      x8 ^= u << 9 | u >>> 32 - 9;
      u = x8 + x4 | 0;
      x12 ^= u << 13 | u >>> 32 - 13;
      u = x12 + x8 | 0;
      x0 ^= u << 18 | u >>> 32 - 18;
      u = x5 + x1 | 0;
      x9 ^= u << 7 | u >>> 32 - 7;
      u = x9 + x5 | 0;
      x13 ^= u << 9 | u >>> 32 - 9;
      u = x13 + x9 | 0;
      x1 ^= u << 13 | u >>> 32 - 13;
      u = x1 + x13 | 0;
      x5 ^= u << 18 | u >>> 32 - 18;
      u = x10 + x6 | 0;
      x14 ^= u << 7 | u >>> 32 - 7;
      u = x14 + x10 | 0;
      x2 ^= u << 9 | u >>> 32 - 9;
      u = x2 + x14 | 0;
      x6 ^= u << 13 | u >>> 32 - 13;
      u = x6 + x2 | 0;
      x10 ^= u << 18 | u >>> 32 - 18;
      u = x15 + x11 | 0;
      x3 ^= u << 7 | u >>> 32 - 7;
      u = x3 + x15 | 0;
      x7 ^= u << 9 | u >>> 32 - 9;
      u = x7 + x3 | 0;
      x11 ^= u << 13 | u >>> 32 - 13;
      u = x11 + x7 | 0;
      x15 ^= u << 18 | u >>> 32 - 18;
      u = x0 + x3 | 0;
      x1 ^= u << 7 | u >>> 32 - 7;
      u = x1 + x0 | 0;
      x2 ^= u << 9 | u >>> 32 - 9;
      u = x2 + x1 | 0;
      x3 ^= u << 13 | u >>> 32 - 13;
      u = x3 + x2 | 0;
      x0 ^= u << 18 | u >>> 32 - 18;
      u = x5 + x4 | 0;
      x6 ^= u << 7 | u >>> 32 - 7;
      u = x6 + x5 | 0;
      x7 ^= u << 9 | u >>> 32 - 9;
      u = x7 + x6 | 0;
      x4 ^= u << 13 | u >>> 32 - 13;
      u = x4 + x7 | 0;
      x5 ^= u << 18 | u >>> 32 - 18;
      u = x10 + x9 | 0;
      x11 ^= u << 7 | u >>> 32 - 7;
      u = x11 + x10 | 0;
      x8 ^= u << 9 | u >>> 32 - 9;
      u = x8 + x11 | 0;
      x9 ^= u << 13 | u >>> 32 - 13;
      u = x9 + x8 | 0;
      x10 ^= u << 18 | u >>> 32 - 18;
      u = x15 + x14 | 0;
      x12 ^= u << 7 | u >>> 32 - 7;
      u = x12 + x15 | 0;
      x13 ^= u << 9 | u >>> 32 - 9;
      u = x13 + x12 | 0;
      x14 ^= u << 13 | u >>> 32 - 13;
      u = x14 + x13 | 0;
      x15 ^= u << 18 | u >>> 32 - 18;
    }
    o[0] = x0 >>> 0 & 0xff;
    o[1] = x0 >>> 8 & 0xff;
    o[2] = x0 >>> 16 & 0xff;
    o[3] = x0 >>> 24 & 0xff;
    o[4] = x5 >>> 0 & 0xff;
    o[5] = x5 >>> 8 & 0xff;
    o[6] = x5 >>> 16 & 0xff;
    o[7] = x5 >>> 24 & 0xff;
    o[8] = x10 >>> 0 & 0xff;
    o[9] = x10 >>> 8 & 0xff;
    o[10] = x10 >>> 16 & 0xff;
    o[11] = x10 >>> 24 & 0xff;
    o[12] = x15 >>> 0 & 0xff;
    o[13] = x15 >>> 8 & 0xff;
    o[14] = x15 >>> 16 & 0xff;
    o[15] = x15 >>> 24 & 0xff;
    o[16] = x6 >>> 0 & 0xff;
    o[17] = x6 >>> 8 & 0xff;
    o[18] = x6 >>> 16 & 0xff;
    o[19] = x6 >>> 24 & 0xff;
    o[20] = x7 >>> 0 & 0xff;
    o[21] = x7 >>> 8 & 0xff;
    o[22] = x7 >>> 16 & 0xff;
    o[23] = x7 >>> 24 & 0xff;
    o[24] = x8 >>> 0 & 0xff;
    o[25] = x8 >>> 8 & 0xff;
    o[26] = x8 >>> 16 & 0xff;
    o[27] = x8 >>> 24 & 0xff;
    o[28] = x9 >>> 0 & 0xff;
    o[29] = x9 >>> 8 & 0xff;
    o[30] = x9 >>> 16 & 0xff;
    o[31] = x9 >>> 24 & 0xff;
  }
  function crypto_core_salsa20(out, inp, k, c) {
    core_salsa20(out, inp, k, c);
  }
  function crypto_core_hsalsa20(out, inp, k, c) {
    core_hsalsa20(out, inp, k, c);
  }
  var sigma = new Uint8Array([101, 120, 112, 97, 110, 100, 32, 51, 50, 45, 98, 121, 116, 101, 32, 107]);
  // "expand 32-byte k"

  function crypto_stream_salsa20_xor(c, cpos, m, mpos, b, n, k) {
    var z = new Uint8Array(16),
      x = new Uint8Array(64);
    var u, i;
    for (i = 0; i < 16; i++) z[i] = 0;
    for (i = 0; i < 8; i++) z[i] = n[i];
    while (b >= 64) {
      crypto_core_salsa20(x, z, k, sigma);
      for (i = 0; i < 64; i++) c[cpos + i] = m[mpos + i] ^ x[i];
      u = 1;
      for (i = 8; i < 16; i++) {
        u = u + (z[i] & 0xff) | 0;
        z[i] = u & 0xff;
        u >>>= 8;
      }
      b -= 64;
      cpos += 64;
      mpos += 64;
    }
    if (b > 0) {
      crypto_core_salsa20(x, z, k, sigma);
      for (i = 0; i < b; i++) c[cpos + i] = m[mpos + i] ^ x[i];
    }
    return 0;
  }
  function crypto_stream_salsa20(c, cpos, b, n, k) {
    var z = new Uint8Array(16),
      x = new Uint8Array(64);
    var u, i;
    for (i = 0; i < 16; i++) z[i] = 0;
    for (i = 0; i < 8; i++) z[i] = n[i];
    while (b >= 64) {
      crypto_core_salsa20(x, z, k, sigma);
      for (i = 0; i < 64; i++) c[cpos + i] = x[i];
      u = 1;
      for (i = 8; i < 16; i++) {
        u = u + (z[i] & 0xff) | 0;
        z[i] = u & 0xff;
        u >>>= 8;
      }
      b -= 64;
      cpos += 64;
    }
    if (b > 0) {
      crypto_core_salsa20(x, z, k, sigma);
      for (i = 0; i < b; i++) c[cpos + i] = x[i];
    }
    return 0;
  }
  function crypto_stream(c, cpos, d, n, k) {
    var s = new Uint8Array(32);
    crypto_core_hsalsa20(s, n, k, sigma);
    var sn = new Uint8Array(8);
    for (var i = 0; i < 8; i++) sn[i] = n[i + 16];
    return crypto_stream_salsa20(c, cpos, d, sn, s);
  }
  function crypto_stream_xor(c, cpos, m, mpos, d, n, k) {
    var s = new Uint8Array(32);
    crypto_core_hsalsa20(s, n, k, sigma);
    var sn = new Uint8Array(8);
    for (var i = 0; i < 8; i++) sn[i] = n[i + 16];
    return crypto_stream_salsa20_xor(c, cpos, m, mpos, d, sn, s);
  }

  /*
  * Port of Andrew Moon's Poly1305-donna-16. Public domain.
  * https://github.com/floodyberry/poly1305-donna
  */

  var poly1305 = function poly1305(key) {
    this.buffer = new Uint8Array(16);
    this.r = new Uint16Array(10);
    this.h = new Uint16Array(10);
    this.pad = new Uint16Array(8);
    this.leftover = 0;
    this.fin = 0;
    var t0, t1, t2, t3, t4, t5, t6, t7;
    t0 = key[0] & 0xff | (key[1] & 0xff) << 8;
    this.r[0] = t0 & 0x1fff;
    t1 = key[2] & 0xff | (key[3] & 0xff) << 8;
    this.r[1] = (t0 >>> 13 | t1 << 3) & 0x1fff;
    t2 = key[4] & 0xff | (key[5] & 0xff) << 8;
    this.r[2] = (t1 >>> 10 | t2 << 6) & 0x1f03;
    t3 = key[6] & 0xff | (key[7] & 0xff) << 8;
    this.r[3] = (t2 >>> 7 | t3 << 9) & 0x1fff;
    t4 = key[8] & 0xff | (key[9] & 0xff) << 8;
    this.r[4] = (t3 >>> 4 | t4 << 12) & 0x00ff;
    this.r[5] = t4 >>> 1 & 0x1ffe;
    t5 = key[10] & 0xff | (key[11] & 0xff) << 8;
    this.r[6] = (t4 >>> 14 | t5 << 2) & 0x1fff;
    t6 = key[12] & 0xff | (key[13] & 0xff) << 8;
    this.r[7] = (t5 >>> 11 | t6 << 5) & 0x1f81;
    t7 = key[14] & 0xff | (key[15] & 0xff) << 8;
    this.r[8] = (t6 >>> 8 | t7 << 8) & 0x1fff;
    this.r[9] = t7 >>> 5 & 0x007f;
    this.pad[0] = key[16] & 0xff | (key[17] & 0xff) << 8;
    this.pad[1] = key[18] & 0xff | (key[19] & 0xff) << 8;
    this.pad[2] = key[20] & 0xff | (key[21] & 0xff) << 8;
    this.pad[3] = key[22] & 0xff | (key[23] & 0xff) << 8;
    this.pad[4] = key[24] & 0xff | (key[25] & 0xff) << 8;
    this.pad[5] = key[26] & 0xff | (key[27] & 0xff) << 8;
    this.pad[6] = key[28] & 0xff | (key[29] & 0xff) << 8;
    this.pad[7] = key[30] & 0xff | (key[31] & 0xff) << 8;
  };
  poly1305.prototype.blocks = function (m, mpos, bytes) {
    var hibit = this.fin ? 0 : 1 << 11;
    var t0, t1, t2, t3, t4, t5, t6, t7, c;
    var d0, d1, d2, d3, d4, d5, d6, d7, d8, d9;
    var h0 = this.h[0],
      h1 = this.h[1],
      h2 = this.h[2],
      h3 = this.h[3],
      h4 = this.h[4],
      h5 = this.h[5],
      h6 = this.h[6],
      h7 = this.h[7],
      h8 = this.h[8],
      h9 = this.h[9];
    var r0 = this.r[0],
      r1 = this.r[1],
      r2 = this.r[2],
      r3 = this.r[3],
      r4 = this.r[4],
      r5 = this.r[5],
      r6 = this.r[6],
      r7 = this.r[7],
      r8 = this.r[8],
      r9 = this.r[9];
    while (bytes >= 16) {
      t0 = m[mpos + 0] & 0xff | (m[mpos + 1] & 0xff) << 8;
      h0 += t0 & 0x1fff;
      t1 = m[mpos + 2] & 0xff | (m[mpos + 3] & 0xff) << 8;
      h1 += (t0 >>> 13 | t1 << 3) & 0x1fff;
      t2 = m[mpos + 4] & 0xff | (m[mpos + 5] & 0xff) << 8;
      h2 += (t1 >>> 10 | t2 << 6) & 0x1fff;
      t3 = m[mpos + 6] & 0xff | (m[mpos + 7] & 0xff) << 8;
      h3 += (t2 >>> 7 | t3 << 9) & 0x1fff;
      t4 = m[mpos + 8] & 0xff | (m[mpos + 9] & 0xff) << 8;
      h4 += (t3 >>> 4 | t4 << 12) & 0x1fff;
      h5 += t4 >>> 1 & 0x1fff;
      t5 = m[mpos + 10] & 0xff | (m[mpos + 11] & 0xff) << 8;
      h6 += (t4 >>> 14 | t5 << 2) & 0x1fff;
      t6 = m[mpos + 12] & 0xff | (m[mpos + 13] & 0xff) << 8;
      h7 += (t5 >>> 11 | t6 << 5) & 0x1fff;
      t7 = m[mpos + 14] & 0xff | (m[mpos + 15] & 0xff) << 8;
      h8 += (t6 >>> 8 | t7 << 8) & 0x1fff;
      h9 += t7 >>> 5 | hibit;
      c = 0;
      d0 = c;
      d0 += h0 * r0;
      d0 += h1 * (5 * r9);
      d0 += h2 * (5 * r8);
      d0 += h3 * (5 * r7);
      d0 += h4 * (5 * r6);
      c = d0 >>> 13;
      d0 &= 0x1fff;
      d0 += h5 * (5 * r5);
      d0 += h6 * (5 * r4);
      d0 += h7 * (5 * r3);
      d0 += h8 * (5 * r2);
      d0 += h9 * (5 * r1);
      c += d0 >>> 13;
      d0 &= 0x1fff;
      d1 = c;
      d1 += h0 * r1;
      d1 += h1 * r0;
      d1 += h2 * (5 * r9);
      d1 += h3 * (5 * r8);
      d1 += h4 * (5 * r7);
      c = d1 >>> 13;
      d1 &= 0x1fff;
      d1 += h5 * (5 * r6);
      d1 += h6 * (5 * r5);
      d1 += h7 * (5 * r4);
      d1 += h8 * (5 * r3);
      d1 += h9 * (5 * r2);
      c += d1 >>> 13;
      d1 &= 0x1fff;
      d2 = c;
      d2 += h0 * r2;
      d2 += h1 * r1;
      d2 += h2 * r0;
      d2 += h3 * (5 * r9);
      d2 += h4 * (5 * r8);
      c = d2 >>> 13;
      d2 &= 0x1fff;
      d2 += h5 * (5 * r7);
      d2 += h6 * (5 * r6);
      d2 += h7 * (5 * r5);
      d2 += h8 * (5 * r4);
      d2 += h9 * (5 * r3);
      c += d2 >>> 13;
      d2 &= 0x1fff;
      d3 = c;
      d3 += h0 * r3;
      d3 += h1 * r2;
      d3 += h2 * r1;
      d3 += h3 * r0;
      d3 += h4 * (5 * r9);
      c = d3 >>> 13;
      d3 &= 0x1fff;
      d3 += h5 * (5 * r8);
      d3 += h6 * (5 * r7);
      d3 += h7 * (5 * r6);
      d3 += h8 * (5 * r5);
      d3 += h9 * (5 * r4);
      c += d3 >>> 13;
      d3 &= 0x1fff;
      d4 = c;
      d4 += h0 * r4;
      d4 += h1 * r3;
      d4 += h2 * r2;
      d4 += h3 * r1;
      d4 += h4 * r0;
      c = d4 >>> 13;
      d4 &= 0x1fff;
      d4 += h5 * (5 * r9);
      d4 += h6 * (5 * r8);
      d4 += h7 * (5 * r7);
      d4 += h8 * (5 * r6);
      d4 += h9 * (5 * r5);
      c += d4 >>> 13;
      d4 &= 0x1fff;
      d5 = c;
      d5 += h0 * r5;
      d5 += h1 * r4;
      d5 += h2 * r3;
      d5 += h3 * r2;
      d5 += h4 * r1;
      c = d5 >>> 13;
      d5 &= 0x1fff;
      d5 += h5 * r0;
      d5 += h6 * (5 * r9);
      d5 += h7 * (5 * r8);
      d5 += h8 * (5 * r7);
      d5 += h9 * (5 * r6);
      c += d5 >>> 13;
      d5 &= 0x1fff;
      d6 = c;
      d6 += h0 * r6;
      d6 += h1 * r5;
      d6 += h2 * r4;
      d6 += h3 * r3;
      d6 += h4 * r2;
      c = d6 >>> 13;
      d6 &= 0x1fff;
      d6 += h5 * r1;
      d6 += h6 * r0;
      d6 += h7 * (5 * r9);
      d6 += h8 * (5 * r8);
      d6 += h9 * (5 * r7);
      c += d6 >>> 13;
      d6 &= 0x1fff;
      d7 = c;
      d7 += h0 * r7;
      d7 += h1 * r6;
      d7 += h2 * r5;
      d7 += h3 * r4;
      d7 += h4 * r3;
      c = d7 >>> 13;
      d7 &= 0x1fff;
      d7 += h5 * r2;
      d7 += h6 * r1;
      d7 += h7 * r0;
      d7 += h8 * (5 * r9);
      d7 += h9 * (5 * r8);
      c += d7 >>> 13;
      d7 &= 0x1fff;
      d8 = c;
      d8 += h0 * r8;
      d8 += h1 * r7;
      d8 += h2 * r6;
      d8 += h3 * r5;
      d8 += h4 * r4;
      c = d8 >>> 13;
      d8 &= 0x1fff;
      d8 += h5 * r3;
      d8 += h6 * r2;
      d8 += h7 * r1;
      d8 += h8 * r0;
      d8 += h9 * (5 * r9);
      c += d8 >>> 13;
      d8 &= 0x1fff;
      d9 = c;
      d9 += h0 * r9;
      d9 += h1 * r8;
      d9 += h2 * r7;
      d9 += h3 * r6;
      d9 += h4 * r5;
      c = d9 >>> 13;
      d9 &= 0x1fff;
      d9 += h5 * r4;
      d9 += h6 * r3;
      d9 += h7 * r2;
      d9 += h8 * r1;
      d9 += h9 * r0;
      c += d9 >>> 13;
      d9 &= 0x1fff;
      c = (c << 2) + c | 0;
      c = c + d0 | 0;
      d0 = c & 0x1fff;
      c = c >>> 13;
      d1 += c;
      h0 = d0;
      h1 = d1;
      h2 = d2;
      h3 = d3;
      h4 = d4;
      h5 = d5;
      h6 = d6;
      h7 = d7;
      h8 = d8;
      h9 = d9;
      mpos += 16;
      bytes -= 16;
    }
    this.h[0] = h0;
    this.h[1] = h1;
    this.h[2] = h2;
    this.h[3] = h3;
    this.h[4] = h4;
    this.h[5] = h5;
    this.h[6] = h6;
    this.h[7] = h7;
    this.h[8] = h8;
    this.h[9] = h9;
  };
  poly1305.prototype.finish = function (mac, macpos) {
    var g = new Uint16Array(10);
    var c, mask, f, i;
    if (this.leftover) {
      i = this.leftover;
      this.buffer[i++] = 1;
      for (; i < 16; i++) this.buffer[i] = 0;
      this.fin = 1;
      this.blocks(this.buffer, 0, 16);
    }
    c = this.h[1] >>> 13;
    this.h[1] &= 0x1fff;
    for (i = 2; i < 10; i++) {
      this.h[i] += c;
      c = this.h[i] >>> 13;
      this.h[i] &= 0x1fff;
    }
    this.h[0] += c * 5;
    c = this.h[0] >>> 13;
    this.h[0] &= 0x1fff;
    this.h[1] += c;
    c = this.h[1] >>> 13;
    this.h[1] &= 0x1fff;
    this.h[2] += c;
    g[0] = this.h[0] + 5;
    c = g[0] >>> 13;
    g[0] &= 0x1fff;
    for (i = 1; i < 10; i++) {
      g[i] = this.h[i] + c;
      c = g[i] >>> 13;
      g[i] &= 0x1fff;
    }
    g[9] -= 1 << 13;
    mask = (c ^ 1) - 1;
    for (i = 0; i < 10; i++) g[i] &= mask;
    mask = ~mask;
    for (i = 0; i < 10; i++) this.h[i] = this.h[i] & mask | g[i];
    this.h[0] = (this.h[0] | this.h[1] << 13) & 0xffff;
    this.h[1] = (this.h[1] >>> 3 | this.h[2] << 10) & 0xffff;
    this.h[2] = (this.h[2] >>> 6 | this.h[3] << 7) & 0xffff;
    this.h[3] = (this.h[3] >>> 9 | this.h[4] << 4) & 0xffff;
    this.h[4] = (this.h[4] >>> 12 | this.h[5] << 1 | this.h[6] << 14) & 0xffff;
    this.h[5] = (this.h[6] >>> 2 | this.h[7] << 11) & 0xffff;
    this.h[6] = (this.h[7] >>> 5 | this.h[8] << 8) & 0xffff;
    this.h[7] = (this.h[8] >>> 8 | this.h[9] << 5) & 0xffff;
    f = this.h[0] + this.pad[0];
    this.h[0] = f & 0xffff;
    for (i = 1; i < 8; i++) {
      f = (this.h[i] + this.pad[i] | 0) + (f >>> 16) | 0;
      this.h[i] = f & 0xffff;
    }
    mac[macpos + 0] = this.h[0] >>> 0 & 0xff;
    mac[macpos + 1] = this.h[0] >>> 8 & 0xff;
    mac[macpos + 2] = this.h[1] >>> 0 & 0xff;
    mac[macpos + 3] = this.h[1] >>> 8 & 0xff;
    mac[macpos + 4] = this.h[2] >>> 0 & 0xff;
    mac[macpos + 5] = this.h[2] >>> 8 & 0xff;
    mac[macpos + 6] = this.h[3] >>> 0 & 0xff;
    mac[macpos + 7] = this.h[3] >>> 8 & 0xff;
    mac[macpos + 8] = this.h[4] >>> 0 & 0xff;
    mac[macpos + 9] = this.h[4] >>> 8 & 0xff;
    mac[macpos + 10] = this.h[5] >>> 0 & 0xff;
    mac[macpos + 11] = this.h[5] >>> 8 & 0xff;
    mac[macpos + 12] = this.h[6] >>> 0 & 0xff;
    mac[macpos + 13] = this.h[6] >>> 8 & 0xff;
    mac[macpos + 14] = this.h[7] >>> 0 & 0xff;
    mac[macpos + 15] = this.h[7] >>> 8 & 0xff;
  };
  poly1305.prototype.update = function (m, mpos, bytes) {
    var i, want;
    if (this.leftover) {
      want = 16 - this.leftover;
      if (want > bytes) want = bytes;
      for (i = 0; i < want; i++) this.buffer[this.leftover + i] = m[mpos + i];
      bytes -= want;
      mpos += want;
      this.leftover += want;
      if (this.leftover < 16) return;
      this.blocks(this.buffer, 0, 16);
      this.leftover = 0;
    }
    if (bytes >= 16) {
      want = bytes - bytes % 16;
      this.blocks(m, mpos, want);
      mpos += want;
      bytes -= want;
    }
    if (bytes) {
      for (i = 0; i < bytes; i++) this.buffer[this.leftover + i] = m[mpos + i];
      this.leftover += bytes;
    }
  };
  function crypto_onetimeauth(out, outpos, m, mpos, n, k) {
    var s = new poly1305(k);
    s.update(m, mpos, n);
    s.finish(out, outpos);
    return 0;
  }
  function crypto_onetimeauth_verify(h, hpos, m, mpos, n, k) {
    var x = new Uint8Array(16);
    crypto_onetimeauth(x, 0, m, mpos, n, k);
    return crypto_verify_16(h, hpos, x, 0);
  }
  function crypto_secretbox(c, m, d, n, k) {
    var i;
    if (d < 32) return -1;
    crypto_stream_xor(c, 0, m, 0, d, n, k);
    crypto_onetimeauth(c, 16, c, 32, d - 32, c);
    for (i = 0; i < 16; i++) c[i] = 0;
    return 0;
  }
  function crypto_secretbox_open(m, c, d, n, k) {
    var i;
    var x = new Uint8Array(32);
    if (d < 32) return -1;
    crypto_stream(x, 0, 32, n, k);
    if (crypto_onetimeauth_verify(c, 16, c, 32, d - 32, x) !== 0) return -1;
    crypto_stream_xor(m, 0, c, 0, d, n, k);
    for (i = 0; i < 32; i++) m[i] = 0;
    return 0;
  }
  function set25519(r, a) {
    var i;
    for (i = 0; i < 16; i++) r[i] = a[i] | 0;
  }
  function car25519(o) {
    var i,
      v,
      c = 1;
    for (i = 0; i < 16; i++) {
      v = o[i] + c + 65535;
      c = Math.floor(v / 65536);
      o[i] = v - c * 65536;
    }
    o[0] += c - 1 + 37 * (c - 1);
  }
  function sel25519(p, q, b) {
    var t,
      c = ~(b - 1);
    for (var i = 0; i < 16; i++) {
      t = c & (p[i] ^ q[i]);
      p[i] ^= t;
      q[i] ^= t;
    }
  }
  function pack25519(o, n) {
    var i, j, b;
    var m = gf(),
      t = gf();
    for (i = 0; i < 16; i++) t[i] = n[i];
    car25519(t);
    car25519(t);
    car25519(t);
    for (j = 0; j < 2; j++) {
      m[0] = t[0] - 0xffed;
      for (i = 1; i < 15; i++) {
        m[i] = t[i] - 0xffff - (m[i - 1] >> 16 & 1);
        m[i - 1] &= 0xffff;
      }
      m[15] = t[15] - 0x7fff - (m[14] >> 16 & 1);
      b = m[15] >> 16 & 1;
      m[14] &= 0xffff;
      sel25519(t, m, 1 - b);
    }
    for (i = 0; i < 16; i++) {
      o[2 * i] = t[i] & 0xff;
      o[2 * i + 1] = t[i] >> 8;
    }
  }
  function neq25519(a, b) {
    var c = new Uint8Array(32),
      d = new Uint8Array(32);
    pack25519(c, a);
    pack25519(d, b);
    return crypto_verify_32(c, 0, d, 0);
  }
  function par25519(a) {
    var d = new Uint8Array(32);
    pack25519(d, a);
    return d[0] & 1;
  }
  function unpack25519(o, n) {
    var i;
    for (i = 0; i < 16; i++) o[i] = n[2 * i] + (n[2 * i + 1] << 8);
    o[15] &= 0x7fff;
  }
  function A(o, a, b) {
    for (var i = 0; i < 16; i++) o[i] = a[i] + b[i];
  }
  function Z(o, a, b) {
    for (var i = 0; i < 16; i++) o[i] = a[i] - b[i];
  }
  function M(o, a, b) {
    var v,
      c,
      t0 = 0,
      t1 = 0,
      t2 = 0,
      t3 = 0,
      t4 = 0,
      t5 = 0,
      t6 = 0,
      t7 = 0,
      t8 = 0,
      t9 = 0,
      t10 = 0,
      t11 = 0,
      t12 = 0,
      t13 = 0,
      t14 = 0,
      t15 = 0,
      t16 = 0,
      t17 = 0,
      t18 = 0,
      t19 = 0,
      t20 = 0,
      t21 = 0,
      t22 = 0,
      t23 = 0,
      t24 = 0,
      t25 = 0,
      t26 = 0,
      t27 = 0,
      t28 = 0,
      t29 = 0,
      t30 = 0,
      b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3],
      b4 = b[4],
      b5 = b[5],
      b6 = b[6],
      b7 = b[7],
      b8 = b[8],
      b9 = b[9],
      b10 = b[10],
      b11 = b[11],
      b12 = b[12],
      b13 = b[13],
      b14 = b[14],
      b15 = b[15];
    v = a[0];
    t0 += v * b0;
    t1 += v * b1;
    t2 += v * b2;
    t3 += v * b3;
    t4 += v * b4;
    t5 += v * b5;
    t6 += v * b6;
    t7 += v * b7;
    t8 += v * b8;
    t9 += v * b9;
    t10 += v * b10;
    t11 += v * b11;
    t12 += v * b12;
    t13 += v * b13;
    t14 += v * b14;
    t15 += v * b15;
    v = a[1];
    t1 += v * b0;
    t2 += v * b1;
    t3 += v * b2;
    t4 += v * b3;
    t5 += v * b4;
    t6 += v * b5;
    t7 += v * b6;
    t8 += v * b7;
    t9 += v * b8;
    t10 += v * b9;
    t11 += v * b10;
    t12 += v * b11;
    t13 += v * b12;
    t14 += v * b13;
    t15 += v * b14;
    t16 += v * b15;
    v = a[2];
    t2 += v * b0;
    t3 += v * b1;
    t4 += v * b2;
    t5 += v * b3;
    t6 += v * b4;
    t7 += v * b5;
    t8 += v * b6;
    t9 += v * b7;
    t10 += v * b8;
    t11 += v * b9;
    t12 += v * b10;
    t13 += v * b11;
    t14 += v * b12;
    t15 += v * b13;
    t16 += v * b14;
    t17 += v * b15;
    v = a[3];
    t3 += v * b0;
    t4 += v * b1;
    t5 += v * b2;
    t6 += v * b3;
    t7 += v * b4;
    t8 += v * b5;
    t9 += v * b6;
    t10 += v * b7;
    t11 += v * b8;
    t12 += v * b9;
    t13 += v * b10;
    t14 += v * b11;
    t15 += v * b12;
    t16 += v * b13;
    t17 += v * b14;
    t18 += v * b15;
    v = a[4];
    t4 += v * b0;
    t5 += v * b1;
    t6 += v * b2;
    t7 += v * b3;
    t8 += v * b4;
    t9 += v * b5;
    t10 += v * b6;
    t11 += v * b7;
    t12 += v * b8;
    t13 += v * b9;
    t14 += v * b10;
    t15 += v * b11;
    t16 += v * b12;
    t17 += v * b13;
    t18 += v * b14;
    t19 += v * b15;
    v = a[5];
    t5 += v * b0;
    t6 += v * b1;
    t7 += v * b2;
    t8 += v * b3;
    t9 += v * b4;
    t10 += v * b5;
    t11 += v * b6;
    t12 += v * b7;
    t13 += v * b8;
    t14 += v * b9;
    t15 += v * b10;
    t16 += v * b11;
    t17 += v * b12;
    t18 += v * b13;
    t19 += v * b14;
    t20 += v * b15;
    v = a[6];
    t6 += v * b0;
    t7 += v * b1;
    t8 += v * b2;
    t9 += v * b3;
    t10 += v * b4;
    t11 += v * b5;
    t12 += v * b6;
    t13 += v * b7;
    t14 += v * b8;
    t15 += v * b9;
    t16 += v * b10;
    t17 += v * b11;
    t18 += v * b12;
    t19 += v * b13;
    t20 += v * b14;
    t21 += v * b15;
    v = a[7];
    t7 += v * b0;
    t8 += v * b1;
    t9 += v * b2;
    t10 += v * b3;
    t11 += v * b4;
    t12 += v * b5;
    t13 += v * b6;
    t14 += v * b7;
    t15 += v * b8;
    t16 += v * b9;
    t17 += v * b10;
    t18 += v * b11;
    t19 += v * b12;
    t20 += v * b13;
    t21 += v * b14;
    t22 += v * b15;
    v = a[8];
    t8 += v * b0;
    t9 += v * b1;
    t10 += v * b2;
    t11 += v * b3;
    t12 += v * b4;
    t13 += v * b5;
    t14 += v * b6;
    t15 += v * b7;
    t16 += v * b8;
    t17 += v * b9;
    t18 += v * b10;
    t19 += v * b11;
    t20 += v * b12;
    t21 += v * b13;
    t22 += v * b14;
    t23 += v * b15;
    v = a[9];
    t9 += v * b0;
    t10 += v * b1;
    t11 += v * b2;
    t12 += v * b3;
    t13 += v * b4;
    t14 += v * b5;
    t15 += v * b6;
    t16 += v * b7;
    t17 += v * b8;
    t18 += v * b9;
    t19 += v * b10;
    t20 += v * b11;
    t21 += v * b12;
    t22 += v * b13;
    t23 += v * b14;
    t24 += v * b15;
    v = a[10];
    t10 += v * b0;
    t11 += v * b1;
    t12 += v * b2;
    t13 += v * b3;
    t14 += v * b4;
    t15 += v * b5;
    t16 += v * b6;
    t17 += v * b7;
    t18 += v * b8;
    t19 += v * b9;
    t20 += v * b10;
    t21 += v * b11;
    t22 += v * b12;
    t23 += v * b13;
    t24 += v * b14;
    t25 += v * b15;
    v = a[11];
    t11 += v * b0;
    t12 += v * b1;
    t13 += v * b2;
    t14 += v * b3;
    t15 += v * b4;
    t16 += v * b5;
    t17 += v * b6;
    t18 += v * b7;
    t19 += v * b8;
    t20 += v * b9;
    t21 += v * b10;
    t22 += v * b11;
    t23 += v * b12;
    t24 += v * b13;
    t25 += v * b14;
    t26 += v * b15;
    v = a[12];
    t12 += v * b0;
    t13 += v * b1;
    t14 += v * b2;
    t15 += v * b3;
    t16 += v * b4;
    t17 += v * b5;
    t18 += v * b6;
    t19 += v * b7;
    t20 += v * b8;
    t21 += v * b9;
    t22 += v * b10;
    t23 += v * b11;
    t24 += v * b12;
    t25 += v * b13;
    t26 += v * b14;
    t27 += v * b15;
    v = a[13];
    t13 += v * b0;
    t14 += v * b1;
    t15 += v * b2;
    t16 += v * b3;
    t17 += v * b4;
    t18 += v * b5;
    t19 += v * b6;
    t20 += v * b7;
    t21 += v * b8;
    t22 += v * b9;
    t23 += v * b10;
    t24 += v * b11;
    t25 += v * b12;
    t26 += v * b13;
    t27 += v * b14;
    t28 += v * b15;
    v = a[14];
    t14 += v * b0;
    t15 += v * b1;
    t16 += v * b2;
    t17 += v * b3;
    t18 += v * b4;
    t19 += v * b5;
    t20 += v * b6;
    t21 += v * b7;
    t22 += v * b8;
    t23 += v * b9;
    t24 += v * b10;
    t25 += v * b11;
    t26 += v * b12;
    t27 += v * b13;
    t28 += v * b14;
    t29 += v * b15;
    v = a[15];
    t15 += v * b0;
    t16 += v * b1;
    t17 += v * b2;
    t18 += v * b3;
    t19 += v * b4;
    t20 += v * b5;
    t21 += v * b6;
    t22 += v * b7;
    t23 += v * b8;
    t24 += v * b9;
    t25 += v * b10;
    t26 += v * b11;
    t27 += v * b12;
    t28 += v * b13;
    t29 += v * b14;
    t30 += v * b15;
    t0 += 38 * t16;
    t1 += 38 * t17;
    t2 += 38 * t18;
    t3 += 38 * t19;
    t4 += 38 * t20;
    t5 += 38 * t21;
    t6 += 38 * t22;
    t7 += 38 * t23;
    t8 += 38 * t24;
    t9 += 38 * t25;
    t10 += 38 * t26;
    t11 += 38 * t27;
    t12 += 38 * t28;
    t13 += 38 * t29;
    t14 += 38 * t30;
    // t15 left as is

    // first car
    c = 1;
    v = t0 + c + 65535;
    c = Math.floor(v / 65536);
    t0 = v - c * 65536;
    v = t1 + c + 65535;
    c = Math.floor(v / 65536);
    t1 = v - c * 65536;
    v = t2 + c + 65535;
    c = Math.floor(v / 65536);
    t2 = v - c * 65536;
    v = t3 + c + 65535;
    c = Math.floor(v / 65536);
    t3 = v - c * 65536;
    v = t4 + c + 65535;
    c = Math.floor(v / 65536);
    t4 = v - c * 65536;
    v = t5 + c + 65535;
    c = Math.floor(v / 65536);
    t5 = v - c * 65536;
    v = t6 + c + 65535;
    c = Math.floor(v / 65536);
    t6 = v - c * 65536;
    v = t7 + c + 65535;
    c = Math.floor(v / 65536);
    t7 = v - c * 65536;
    v = t8 + c + 65535;
    c = Math.floor(v / 65536);
    t8 = v - c * 65536;
    v = t9 + c + 65535;
    c = Math.floor(v / 65536);
    t9 = v - c * 65536;
    v = t10 + c + 65535;
    c = Math.floor(v / 65536);
    t10 = v - c * 65536;
    v = t11 + c + 65535;
    c = Math.floor(v / 65536);
    t11 = v - c * 65536;
    v = t12 + c + 65535;
    c = Math.floor(v / 65536);
    t12 = v - c * 65536;
    v = t13 + c + 65535;
    c = Math.floor(v / 65536);
    t13 = v - c * 65536;
    v = t14 + c + 65535;
    c = Math.floor(v / 65536);
    t14 = v - c * 65536;
    v = t15 + c + 65535;
    c = Math.floor(v / 65536);
    t15 = v - c * 65536;
    t0 += c - 1 + 37 * (c - 1);

    // second car
    c = 1;
    v = t0 + c + 65535;
    c = Math.floor(v / 65536);
    t0 = v - c * 65536;
    v = t1 + c + 65535;
    c = Math.floor(v / 65536);
    t1 = v - c * 65536;
    v = t2 + c + 65535;
    c = Math.floor(v / 65536);
    t2 = v - c * 65536;
    v = t3 + c + 65535;
    c = Math.floor(v / 65536);
    t3 = v - c * 65536;
    v = t4 + c + 65535;
    c = Math.floor(v / 65536);
    t4 = v - c * 65536;
    v = t5 + c + 65535;
    c = Math.floor(v / 65536);
    t5 = v - c * 65536;
    v = t6 + c + 65535;
    c = Math.floor(v / 65536);
    t6 = v - c * 65536;
    v = t7 + c + 65535;
    c = Math.floor(v / 65536);
    t7 = v - c * 65536;
    v = t8 + c + 65535;
    c = Math.floor(v / 65536);
    t8 = v - c * 65536;
    v = t9 + c + 65535;
    c = Math.floor(v / 65536);
    t9 = v - c * 65536;
    v = t10 + c + 65535;
    c = Math.floor(v / 65536);
    t10 = v - c * 65536;
    v = t11 + c + 65535;
    c = Math.floor(v / 65536);
    t11 = v - c * 65536;
    v = t12 + c + 65535;
    c = Math.floor(v / 65536);
    t12 = v - c * 65536;
    v = t13 + c + 65535;
    c = Math.floor(v / 65536);
    t13 = v - c * 65536;
    v = t14 + c + 65535;
    c = Math.floor(v / 65536);
    t14 = v - c * 65536;
    v = t15 + c + 65535;
    c = Math.floor(v / 65536);
    t15 = v - c * 65536;
    t0 += c - 1 + 37 * (c - 1);
    o[0] = t0;
    o[1] = t1;
    o[2] = t2;
    o[3] = t3;
    o[4] = t4;
    o[5] = t5;
    o[6] = t6;
    o[7] = t7;
    o[8] = t8;
    o[9] = t9;
    o[10] = t10;
    o[11] = t11;
    o[12] = t12;
    o[13] = t13;
    o[14] = t14;
    o[15] = t15;
  }
  function S(o, a) {
    M(o, a, a);
  }
  function inv25519(o, i) {
    var c = gf();
    var a;
    for (a = 0; a < 16; a++) c[a] = i[a];
    for (a = 253; a >= 0; a--) {
      S(c, c);
      if (a !== 2 && a !== 4) M(c, c, i);
    }
    for (a = 0; a < 16; a++) o[a] = c[a];
  }
  function pow2523(o, i) {
    var c = gf();
    var a;
    for (a = 0; a < 16; a++) c[a] = i[a];
    for (a = 250; a >= 0; a--) {
      S(c, c);
      if (a !== 1) M(c, c, i);
    }
    for (a = 0; a < 16; a++) o[a] = c[a];
  }
  function crypto_scalarmult(q, n, p) {
    var z = new Uint8Array(32);
    var x = new Float64Array(80),
      r,
      i;
    var a = gf(),
      b = gf(),
      c = gf(),
      d = gf(),
      e = gf(),
      f = gf();
    for (i = 0; i < 31; i++) z[i] = n[i];
    z[31] = n[31] & 127 | 64;
    z[0] &= 248;
    unpack25519(x, p);
    for (i = 0; i < 16; i++) {
      b[i] = x[i];
      d[i] = a[i] = c[i] = 0;
    }
    a[0] = d[0] = 1;
    for (i = 254; i >= 0; --i) {
      r = z[i >>> 3] >>> (i & 7) & 1;
      sel25519(a, b, r);
      sel25519(c, d, r);
      A(e, a, c);
      Z(a, a, c);
      A(c, b, d);
      Z(b, b, d);
      S(d, e);
      S(f, a);
      M(a, c, a);
      M(c, b, e);
      A(e, a, c);
      Z(a, a, c);
      S(b, a);
      Z(c, d, f);
      M(a, c, _121665);
      A(a, a, d);
      M(c, c, a);
      M(a, d, f);
      M(d, b, x);
      S(b, e);
      sel25519(a, b, r);
      sel25519(c, d, r);
    }
    for (i = 0; i < 16; i++) {
      x[i + 16] = a[i];
      x[i + 32] = c[i];
      x[i + 48] = b[i];
      x[i + 64] = d[i];
    }
    var x32 = x.subarray(32);
    var x16 = x.subarray(16);
    inv25519(x32, x32);
    M(x16, x16, x32);
    pack25519(q, x16);
    return 0;
  }
  function crypto_scalarmult_base(q, n) {
    return crypto_scalarmult(q, n, _9);
  }
  function crypto_box_keypair(y, x) {
    randombytes(x, 32);
    return crypto_scalarmult_base(y, x);
  }
  function crypto_box_beforenm(k, y, x) {
    var s = new Uint8Array(32);
    crypto_scalarmult(s, x, y);
    return crypto_core_hsalsa20(k, _0, s, sigma);
  }
  var crypto_box_afternm = crypto_secretbox;
  var crypto_box_open_afternm = crypto_secretbox_open;
  function crypto_box(c, m, d, n, y, x) {
    var k = new Uint8Array(32);
    crypto_box_beforenm(k, y, x);
    return crypto_box_afternm(c, m, d, n, k);
  }
  function crypto_box_open(m, c, d, n, y, x) {
    var k = new Uint8Array(32);
    crypto_box_beforenm(k, y, x);
    return crypto_box_open_afternm(m, c, d, n, k);
  }
  var K = [0x428a2f98, 0xd728ae22, 0x71374491, 0x23ef65cd, 0xb5c0fbcf, 0xec4d3b2f, 0xe9b5dba5, 0x8189dbbc, 0x3956c25b, 0xf348b538, 0x59f111f1, 0xb605d019, 0x923f82a4, 0xaf194f9b, 0xab1c5ed5, 0xda6d8118, 0xd807aa98, 0xa3030242, 0x12835b01, 0x45706fbe, 0x243185be, 0x4ee4b28c, 0x550c7dc3, 0xd5ffb4e2, 0x72be5d74, 0xf27b896f, 0x80deb1fe, 0x3b1696b1, 0x9bdc06a7, 0x25c71235, 0xc19bf174, 0xcf692694, 0xe49b69c1, 0x9ef14ad2, 0xefbe4786, 0x384f25e3, 0x0fc19dc6, 0x8b8cd5b5, 0x240ca1cc, 0x77ac9c65, 0x2de92c6f, 0x592b0275, 0x4a7484aa, 0x6ea6e483, 0x5cb0a9dc, 0xbd41fbd4, 0x76f988da, 0x831153b5, 0x983e5152, 0xee66dfab, 0xa831c66d, 0x2db43210, 0xb00327c8, 0x98fb213f, 0xbf597fc7, 0xbeef0ee4, 0xc6e00bf3, 0x3da88fc2, 0xd5a79147, 0x930aa725, 0x06ca6351, 0xe003826f, 0x14292967, 0x0a0e6e70, 0x27b70a85, 0x46d22ffc, 0x2e1b2138, 0x5c26c926, 0x4d2c6dfc, 0x5ac42aed, 0x53380d13, 0x9d95b3df, 0x650a7354, 0x8baf63de, 0x766a0abb, 0x3c77b2a8, 0x81c2c92e, 0x47edaee6, 0x92722c85, 0x1482353b, 0xa2bfe8a1, 0x4cf10364, 0xa81a664b, 0xbc423001, 0xc24b8b70, 0xd0f89791, 0xc76c51a3, 0x0654be30, 0xd192e819, 0xd6ef5218, 0xd6990624, 0x5565a910, 0xf40e3585, 0x5771202a, 0x106aa070, 0x32bbd1b8, 0x19a4c116, 0xb8d2d0c8, 0x1e376c08, 0x5141ab53, 0x2748774c, 0xdf8eeb99, 0x34b0bcb5, 0xe19b48a8, 0x391c0cb3, 0xc5c95a63, 0x4ed8aa4a, 0xe3418acb, 0x5b9cca4f, 0x7763e373, 0x682e6ff3, 0xd6b2b8a3, 0x748f82ee, 0x5defb2fc, 0x78a5636f, 0x43172f60, 0x84c87814, 0xa1f0ab72, 0x8cc70208, 0x1a6439ec, 0x90befffa, 0x23631e28, 0xa4506ceb, 0xde82bde9, 0xbef9a3f7, 0xb2c67915, 0xc67178f2, 0xe372532b, 0xca273ece, 0xea26619c, 0xd186b8c7, 0x21c0c207, 0xeada7dd6, 0xcde0eb1e, 0xf57d4f7f, 0xee6ed178, 0x06f067aa, 0x72176fba, 0x0a637dc5, 0xa2c898a6, 0x113f9804, 0xbef90dae, 0x1b710b35, 0x131c471b, 0x28db77f5, 0x23047d84, 0x32caab7b, 0x40c72493, 0x3c9ebe0a, 0x15c9bebc, 0x431d67c4, 0x9c100d4c, 0x4cc5d4be, 0xcb3e42b6, 0x597f299c, 0xfc657e2a, 0x5fcb6fab, 0x3ad6faec, 0x6c44198c, 0x4a475817];
  function crypto_hashblocks_hl(hh, hl, m, n) {
    var wh = new Int32Array(16),
      wl = new Int32Array(16),
      bh0,
      bh1,
      bh2,
      bh3,
      bh4,
      bh5,
      bh6,
      bh7,
      bl0,
      bl1,
      bl2,
      bl3,
      bl4,
      bl5,
      bl6,
      bl7,
      th,
      tl,
      i,
      j,
      h,
      l,
      a,
      b,
      c,
      d;
    var ah0 = hh[0],
      ah1 = hh[1],
      ah2 = hh[2],
      ah3 = hh[3],
      ah4 = hh[4],
      ah5 = hh[5],
      ah6 = hh[6],
      ah7 = hh[7],
      al0 = hl[0],
      al1 = hl[1],
      al2 = hl[2],
      al3 = hl[3],
      al4 = hl[4],
      al5 = hl[5],
      al6 = hl[6],
      al7 = hl[7];
    var pos = 0;
    while (n >= 128) {
      for (i = 0; i < 16; i++) {
        j = 8 * i + pos;
        wh[i] = m[j + 0] << 24 | m[j + 1] << 16 | m[j + 2] << 8 | m[j + 3];
        wl[i] = m[j + 4] << 24 | m[j + 5] << 16 | m[j + 6] << 8 | m[j + 7];
      }
      for (i = 0; i < 80; i++) {
        bh0 = ah0;
        bh1 = ah1;
        bh2 = ah2;
        bh3 = ah3;
        bh4 = ah4;
        bh5 = ah5;
        bh6 = ah6;
        bh7 = ah7;
        bl0 = al0;
        bl1 = al1;
        bl2 = al2;
        bl3 = al3;
        bl4 = al4;
        bl5 = al5;
        bl6 = al6;
        bl7 = al7;

        // add
        h = ah7;
        l = al7;
        a = l & 0xffff;
        b = l >>> 16;
        c = h & 0xffff;
        d = h >>> 16;

        // Sigma1
        h = (ah4 >>> 14 | al4 << 32 - 14) ^ (ah4 >>> 18 | al4 << 32 - 18) ^ (al4 >>> 41 - 32 | ah4 << 32 - (41 - 32));
        l = (al4 >>> 14 | ah4 << 32 - 14) ^ (al4 >>> 18 | ah4 << 32 - 18) ^ (ah4 >>> 41 - 32 | al4 << 32 - (41 - 32));
        a += l & 0xffff;
        b += l >>> 16;
        c += h & 0xffff;
        d += h >>> 16;

        // Ch
        h = ah4 & ah5 ^ ~ah4 & ah6;
        l = al4 & al5 ^ ~al4 & al6;
        a += l & 0xffff;
        b += l >>> 16;
        c += h & 0xffff;
        d += h >>> 16;

        // K
        h = K[i * 2];
        l = K[i * 2 + 1];
        a += l & 0xffff;
        b += l >>> 16;
        c += h & 0xffff;
        d += h >>> 16;

        // w
        h = wh[i % 16];
        l = wl[i % 16];
        a += l & 0xffff;
        b += l >>> 16;
        c += h & 0xffff;
        d += h >>> 16;
        b += a >>> 16;
        c += b >>> 16;
        d += c >>> 16;
        th = c & 0xffff | d << 16;
        tl = a & 0xffff | b << 16;

        // add
        h = th;
        l = tl;
        a = l & 0xffff;
        b = l >>> 16;
        c = h & 0xffff;
        d = h >>> 16;

        // Sigma0
        h = (ah0 >>> 28 | al0 << 32 - 28) ^ (al0 >>> 34 - 32 | ah0 << 32 - (34 - 32)) ^ (al0 >>> 39 - 32 | ah0 << 32 - (39 - 32));
        l = (al0 >>> 28 | ah0 << 32 - 28) ^ (ah0 >>> 34 - 32 | al0 << 32 - (34 - 32)) ^ (ah0 >>> 39 - 32 | al0 << 32 - (39 - 32));
        a += l & 0xffff;
        b += l >>> 16;
        c += h & 0xffff;
        d += h >>> 16;

        // Maj
        h = ah0 & ah1 ^ ah0 & ah2 ^ ah1 & ah2;
        l = al0 & al1 ^ al0 & al2 ^ al1 & al2;
        a += l & 0xffff;
        b += l >>> 16;
        c += h & 0xffff;
        d += h >>> 16;
        b += a >>> 16;
        c += b >>> 16;
        d += c >>> 16;
        bh7 = c & 0xffff | d << 16;
        bl7 = a & 0xffff | b << 16;

        // add
        h = bh3;
        l = bl3;
        a = l & 0xffff;
        b = l >>> 16;
        c = h & 0xffff;
        d = h >>> 16;
        h = th;
        l = tl;
        a += l & 0xffff;
        b += l >>> 16;
        c += h & 0xffff;
        d += h >>> 16;
        b += a >>> 16;
        c += b >>> 16;
        d += c >>> 16;
        bh3 = c & 0xffff | d << 16;
        bl3 = a & 0xffff | b << 16;
        ah1 = bh0;
        ah2 = bh1;
        ah3 = bh2;
        ah4 = bh3;
        ah5 = bh4;
        ah6 = bh5;
        ah7 = bh6;
        ah0 = bh7;
        al1 = bl0;
        al2 = bl1;
        al3 = bl2;
        al4 = bl3;
        al5 = bl4;
        al6 = bl5;
        al7 = bl6;
        al0 = bl7;
        if (i % 16 === 15) {
          for (j = 0; j < 16; j++) {
            // add
            h = wh[j];
            l = wl[j];
            a = l & 0xffff;
            b = l >>> 16;
            c = h & 0xffff;
            d = h >>> 16;
            h = wh[(j + 9) % 16];
            l = wl[(j + 9) % 16];
            a += l & 0xffff;
            b += l >>> 16;
            c += h & 0xffff;
            d += h >>> 16;

            // sigma0
            th = wh[(j + 1) % 16];
            tl = wl[(j + 1) % 16];
            h = (th >>> 1 | tl << 32 - 1) ^ (th >>> 8 | tl << 32 - 8) ^ th >>> 7;
            l = (tl >>> 1 | th << 32 - 1) ^ (tl >>> 8 | th << 32 - 8) ^ (tl >>> 7 | th << 32 - 7);
            a += l & 0xffff;
            b += l >>> 16;
            c += h & 0xffff;
            d += h >>> 16;

            // sigma1
            th = wh[(j + 14) % 16];
            tl = wl[(j + 14) % 16];
            h = (th >>> 19 | tl << 32 - 19) ^ (tl >>> 61 - 32 | th << 32 - (61 - 32)) ^ th >>> 6;
            l = (tl >>> 19 | th << 32 - 19) ^ (th >>> 61 - 32 | tl << 32 - (61 - 32)) ^ (tl >>> 6 | th << 32 - 6);
            a += l & 0xffff;
            b += l >>> 16;
            c += h & 0xffff;
            d += h >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d += c >>> 16;
            wh[j] = c & 0xffff | d << 16;
            wl[j] = a & 0xffff | b << 16;
          }
        }
      }

      // add
      h = ah0;
      l = al0;
      a = l & 0xffff;
      b = l >>> 16;
      c = h & 0xffff;
      d = h >>> 16;
      h = hh[0];
      l = hl[0];
      a += l & 0xffff;
      b += l >>> 16;
      c += h & 0xffff;
      d += h >>> 16;
      b += a >>> 16;
      c += b >>> 16;
      d += c >>> 16;
      hh[0] = ah0 = c & 0xffff | d << 16;
      hl[0] = al0 = a & 0xffff | b << 16;
      h = ah1;
      l = al1;
      a = l & 0xffff;
      b = l >>> 16;
      c = h & 0xffff;
      d = h >>> 16;
      h = hh[1];
      l = hl[1];
      a += l & 0xffff;
      b += l >>> 16;
      c += h & 0xffff;
      d += h >>> 16;
      b += a >>> 16;
      c += b >>> 16;
      d += c >>> 16;
      hh[1] = ah1 = c & 0xffff | d << 16;
      hl[1] = al1 = a & 0xffff | b << 16;
      h = ah2;
      l = al2;
      a = l & 0xffff;
      b = l >>> 16;
      c = h & 0xffff;
      d = h >>> 16;
      h = hh[2];
      l = hl[2];
      a += l & 0xffff;
      b += l >>> 16;
      c += h & 0xffff;
      d += h >>> 16;
      b += a >>> 16;
      c += b >>> 16;
      d += c >>> 16;
      hh[2] = ah2 = c & 0xffff | d << 16;
      hl[2] = al2 = a & 0xffff | b << 16;
      h = ah3;
      l = al3;
      a = l & 0xffff;
      b = l >>> 16;
      c = h & 0xffff;
      d = h >>> 16;
      h = hh[3];
      l = hl[3];
      a += l & 0xffff;
      b += l >>> 16;
      c += h & 0xffff;
      d += h >>> 16;
      b += a >>> 16;
      c += b >>> 16;
      d += c >>> 16;
      hh[3] = ah3 = c & 0xffff | d << 16;
      hl[3] = al3 = a & 0xffff | b << 16;
      h = ah4;
      l = al4;
      a = l & 0xffff;
      b = l >>> 16;
      c = h & 0xffff;
      d = h >>> 16;
      h = hh[4];
      l = hl[4];
      a += l & 0xffff;
      b += l >>> 16;
      c += h & 0xffff;
      d += h >>> 16;
      b += a >>> 16;
      c += b >>> 16;
      d += c >>> 16;
      hh[4] = ah4 = c & 0xffff | d << 16;
      hl[4] = al4 = a & 0xffff | b << 16;
      h = ah5;
      l = al5;
      a = l & 0xffff;
      b = l >>> 16;
      c = h & 0xffff;
      d = h >>> 16;
      h = hh[5];
      l = hl[5];
      a += l & 0xffff;
      b += l >>> 16;
      c += h & 0xffff;
      d += h >>> 16;
      b += a >>> 16;
      c += b >>> 16;
      d += c >>> 16;
      hh[5] = ah5 = c & 0xffff | d << 16;
      hl[5] = al5 = a & 0xffff | b << 16;
      h = ah6;
      l = al6;
      a = l & 0xffff;
      b = l >>> 16;
      c = h & 0xffff;
      d = h >>> 16;
      h = hh[6];
      l = hl[6];
      a += l & 0xffff;
      b += l >>> 16;
      c += h & 0xffff;
      d += h >>> 16;
      b += a >>> 16;
      c += b >>> 16;
      d += c >>> 16;
      hh[6] = ah6 = c & 0xffff | d << 16;
      hl[6] = al6 = a & 0xffff | b << 16;
      h = ah7;
      l = al7;
      a = l & 0xffff;
      b = l >>> 16;
      c = h & 0xffff;
      d = h >>> 16;
      h = hh[7];
      l = hl[7];
      a += l & 0xffff;
      b += l >>> 16;
      c += h & 0xffff;
      d += h >>> 16;
      b += a >>> 16;
      c += b >>> 16;
      d += c >>> 16;
      hh[7] = ah7 = c & 0xffff | d << 16;
      hl[7] = al7 = a & 0xffff | b << 16;
      pos += 128;
      n -= 128;
    }
    return n;
  }
  function crypto_hash(out, m, n) {
    var hh = new Int32Array(8),
      hl = new Int32Array(8),
      x = new Uint8Array(256),
      i,
      b = n;
    hh[0] = 0x6a09e667;
    hh[1] = 0xbb67ae85;
    hh[2] = 0x3c6ef372;
    hh[3] = 0xa54ff53a;
    hh[4] = 0x510e527f;
    hh[5] = 0x9b05688c;
    hh[6] = 0x1f83d9ab;
    hh[7] = 0x5be0cd19;
    hl[0] = 0xf3bcc908;
    hl[1] = 0x84caa73b;
    hl[2] = 0xfe94f82b;
    hl[3] = 0x5f1d36f1;
    hl[4] = 0xade682d1;
    hl[5] = 0x2b3e6c1f;
    hl[6] = 0xfb41bd6b;
    hl[7] = 0x137e2179;
    crypto_hashblocks_hl(hh, hl, m, n);
    n %= 128;
    for (i = 0; i < n; i++) x[i] = m[b - n + i];
    x[n] = 128;
    n = 256 - 128 * (n < 112 ? 1 : 0);
    x[n - 9] = 0;
    ts64(x, n - 8, b / 0x20000000 | 0, b << 3);
    crypto_hashblocks_hl(hh, hl, x, n);
    for (i = 0; i < 8; i++) ts64(out, 8 * i, hh[i], hl[i]);
    return 0;
  }
  function add(p, q) {
    var a = gf(),
      b = gf(),
      c = gf(),
      d = gf(),
      e = gf(),
      f = gf(),
      g = gf(),
      h = gf(),
      t = gf();
    Z(a, p[1], p[0]);
    Z(t, q[1], q[0]);
    M(a, a, t);
    A(b, p[0], p[1]);
    A(t, q[0], q[1]);
    M(b, b, t);
    M(c, p[3], q[3]);
    M(c, c, D2);
    M(d, p[2], q[2]);
    A(d, d, d);
    Z(e, b, a);
    Z(f, d, c);
    A(g, d, c);
    A(h, b, a);
    M(p[0], e, f);
    M(p[1], h, g);
    M(p[2], g, f);
    M(p[3], e, h);
  }
  function cswap(p, q, b) {
    var i;
    for (i = 0; i < 4; i++) {
      sel25519(p[i], q[i], b);
    }
  }
  function pack(r, p) {
    var tx = gf(),
      ty = gf(),
      zi = gf();
    inv25519(zi, p[2]);
    M(tx, p[0], zi);
    M(ty, p[1], zi);
    pack25519(r, ty);
    r[31] ^= par25519(tx) << 7;
  }
  function scalarmult(p, q, s) {
    var b, i;
    set25519(p[0], gf0);
    set25519(p[1], gf1);
    set25519(p[2], gf1);
    set25519(p[3], gf0);
    for (i = 255; i >= 0; --i) {
      b = s[i / 8 | 0] >> (i & 7) & 1;
      cswap(p, q, b);
      add(q, p);
      add(p, p);
      cswap(p, q, b);
    }
  }
  function scalarbase(p, s) {
    var q = [gf(), gf(), gf(), gf()];
    set25519(q[0], X);
    set25519(q[1], Y);
    set25519(q[2], gf1);
    M(q[3], X, Y);
    scalarmult(p, q, s);
  }
  function crypto_sign_keypair(pk, sk, seeded) {
    var d = new Uint8Array(64);
    var p = [gf(), gf(), gf(), gf()];
    var i;
    if (!seeded) randombytes(sk, 32);
    crypto_hash(d, sk, 32);
    d[0] &= 248;
    d[31] &= 127;
    d[31] |= 64;
    scalarbase(p, d);
    pack(pk, p);
    for (i = 0; i < 32; i++) sk[i + 32] = pk[i];
    return 0;
  }
  var L = new Float64Array([0xed, 0xd3, 0xf5, 0x5c, 0x1a, 0x63, 0x12, 0x58, 0xd6, 0x9c, 0xf7, 0xa2, 0xde, 0xf9, 0xde, 0x14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0x10]);
  function modL(r, x) {
    var carry, i, j, k;
    for (i = 63; i >= 32; --i) {
      carry = 0;
      for (j = i - 32, k = i - 12; j < k; ++j) {
        x[j] += carry - 16 * x[i] * L[j - (i - 32)];
        carry = Math.floor((x[j] + 128) / 256);
        x[j] -= carry * 256;
      }
      x[j] += carry;
      x[i] = 0;
    }
    carry = 0;
    for (j = 0; j < 32; j++) {
      x[j] += carry - (x[31] >> 4) * L[j];
      carry = x[j] >> 8;
      x[j] &= 255;
    }
    for (j = 0; j < 32; j++) x[j] -= carry * L[j];
    for (i = 0; i < 32; i++) {
      x[i + 1] += x[i] >> 8;
      r[i] = x[i] & 255;
    }
  }
  function reduce(r) {
    var x = new Float64Array(64),
      i;
    for (i = 0; i < 64; i++) x[i] = r[i];
    for (i = 0; i < 64; i++) r[i] = 0;
    modL(r, x);
  }

  // Note: difference from C - smlen returned, not passed as argument.
  function crypto_sign(sm, m, n, sk) {
    var d = new Uint8Array(64),
      h = new Uint8Array(64),
      r = new Uint8Array(64);
    var i,
      j,
      x = new Float64Array(64);
    var p = [gf(), gf(), gf(), gf()];
    crypto_hash(d, sk, 32);
    d[0] &= 248;
    d[31] &= 127;
    d[31] |= 64;
    var smlen = n + 64;
    for (i = 0; i < n; i++) sm[64 + i] = m[i];
    for (i = 0; i < 32; i++) sm[32 + i] = d[32 + i];
    crypto_hash(r, sm.subarray(32), n + 32);
    reduce(r);
    scalarbase(p, r);
    pack(sm, p);
    for (i = 32; i < 64; i++) sm[i] = sk[i];
    crypto_hash(h, sm, n + 64);
    reduce(h);
    for (i = 0; i < 64; i++) x[i] = 0;
    for (i = 0; i < 32; i++) x[i] = r[i];
    for (i = 0; i < 32; i++) {
      for (j = 0; j < 32; j++) {
        x[i + j] += h[i] * d[j];
      }
    }
    modL(sm.subarray(32), x);
    return smlen;
  }
  function unpackneg(r, p) {
    var t = gf(),
      chk = gf(),
      num = gf(),
      den = gf(),
      den2 = gf(),
      den4 = gf(),
      den6 = gf();
    set25519(r[2], gf1);
    unpack25519(r[1], p);
    S(num, r[1]);
    M(den, num, D);
    Z(num, num, r[2]);
    A(den, r[2], den);
    S(den2, den);
    S(den4, den2);
    M(den6, den4, den2);
    M(t, den6, num);
    M(t, t, den);
    pow2523(t, t);
    M(t, t, num);
    M(t, t, den);
    M(t, t, den);
    M(r[0], t, den);
    S(chk, r[0]);
    M(chk, chk, den);
    if (neq25519(chk, num)) M(r[0], r[0], I);
    S(chk, r[0]);
    M(chk, chk, den);
    if (neq25519(chk, num)) return -1;
    if (par25519(r[0]) === p[31] >> 7) Z(r[0], gf0, r[0]);
    M(r[3], r[0], r[1]);
    return 0;
  }
  function crypto_sign_open(m, sm, n, pk) {
    var i;
    var t = new Uint8Array(32),
      h = new Uint8Array(64);
    var p = [gf(), gf(), gf(), gf()],
      q = [gf(), gf(), gf(), gf()];
    if (n < 64) return -1;
    if (unpackneg(q, pk)) return -1;
    for (i = 0; i < n; i++) m[i] = sm[i];
    for (i = 0; i < 32; i++) m[i + 32] = pk[i];
    crypto_hash(h, m, n);
    reduce(h);
    scalarmult(p, q, h);
    scalarbase(q, sm.subarray(32));
    add(p, q);
    pack(t, p);
    n -= 64;
    if (crypto_verify_32(sm, 0, t, 0)) {
      for (i = 0; i < n; i++) m[i] = 0;
      return -1;
    }
    for (i = 0; i < n; i++) m[i] = sm[i + 64];
    return n;
  }
  var crypto_secretbox_KEYBYTES = 32,
    crypto_secretbox_NONCEBYTES = 24,
    crypto_secretbox_ZEROBYTES = 32,
    crypto_secretbox_BOXZEROBYTES = 16,
    crypto_scalarmult_BYTES = 32,
    crypto_scalarmult_SCALARBYTES = 32,
    crypto_box_PUBLICKEYBYTES = 32,
    crypto_box_SECRETKEYBYTES = 32,
    crypto_box_BEFORENMBYTES = 32,
    crypto_box_NONCEBYTES = crypto_secretbox_NONCEBYTES,
    crypto_box_ZEROBYTES = crypto_secretbox_ZEROBYTES,
    crypto_box_BOXZEROBYTES = crypto_secretbox_BOXZEROBYTES,
    crypto_sign_BYTES = 64,
    crypto_sign_PUBLICKEYBYTES = 32,
    crypto_sign_SECRETKEYBYTES = 64,
    crypto_sign_SEEDBYTES = 32,
    crypto_hash_BYTES = 64;
  nacl.lowlevel = {
    crypto_core_hsalsa20: crypto_core_hsalsa20,
    crypto_stream_xor: crypto_stream_xor,
    crypto_stream: crypto_stream,
    crypto_stream_salsa20_xor: crypto_stream_salsa20_xor,
    crypto_stream_salsa20: crypto_stream_salsa20,
    crypto_onetimeauth: crypto_onetimeauth,
    crypto_onetimeauth_verify: crypto_onetimeauth_verify,
    crypto_verify_16: crypto_verify_16,
    crypto_verify_32: crypto_verify_32,
    crypto_secretbox: crypto_secretbox,
    crypto_secretbox_open: crypto_secretbox_open,
    crypto_scalarmult: crypto_scalarmult,
    crypto_scalarmult_base: crypto_scalarmult_base,
    crypto_box_beforenm: crypto_box_beforenm,
    crypto_box_afternm: crypto_box_afternm,
    crypto_box: crypto_box,
    crypto_box_open: crypto_box_open,
    crypto_box_keypair: crypto_box_keypair,
    crypto_hash: crypto_hash,
    crypto_sign: crypto_sign,
    crypto_sign_keypair: crypto_sign_keypair,
    crypto_sign_open: crypto_sign_open,
    crypto_secretbox_KEYBYTES: crypto_secretbox_KEYBYTES,
    crypto_secretbox_NONCEBYTES: crypto_secretbox_NONCEBYTES,
    crypto_secretbox_ZEROBYTES: crypto_secretbox_ZEROBYTES,
    crypto_secretbox_BOXZEROBYTES: crypto_secretbox_BOXZEROBYTES,
    crypto_scalarmult_BYTES: crypto_scalarmult_BYTES,
    crypto_scalarmult_SCALARBYTES: crypto_scalarmult_SCALARBYTES,
    crypto_box_PUBLICKEYBYTES: crypto_box_PUBLICKEYBYTES,
    crypto_box_SECRETKEYBYTES: crypto_box_SECRETKEYBYTES,
    crypto_box_BEFORENMBYTES: crypto_box_BEFORENMBYTES,
    crypto_box_NONCEBYTES: crypto_box_NONCEBYTES,
    crypto_box_ZEROBYTES: crypto_box_ZEROBYTES,
    crypto_box_BOXZEROBYTES: crypto_box_BOXZEROBYTES,
    crypto_sign_BYTES: crypto_sign_BYTES,
    crypto_sign_PUBLICKEYBYTES: crypto_sign_PUBLICKEYBYTES,
    crypto_sign_SECRETKEYBYTES: crypto_sign_SECRETKEYBYTES,
    crypto_sign_SEEDBYTES: crypto_sign_SEEDBYTES,
    crypto_hash_BYTES: crypto_hash_BYTES,
    gf: gf,
    D: D,
    L: L,
    pack25519: pack25519,
    unpack25519: unpack25519,
    M: M,
    A: A,
    S: S,
    Z: Z,
    pow2523: pow2523,
    add: add,
    set25519: set25519,
    modL: modL,
    scalarmult: scalarmult,
    scalarbase: scalarbase
  };

  /* High-level API */

  function checkLengths(k, n) {
    if (k.length !== crypto_secretbox_KEYBYTES) throw new Error('bad key size');
    if (n.length !== crypto_secretbox_NONCEBYTES) throw new Error('bad nonce size');
  }
  function checkBoxLengths(pk, sk) {
    if (pk.length !== crypto_box_PUBLICKEYBYTES) throw new Error('bad public key size');
    if (sk.length !== crypto_box_SECRETKEYBYTES) throw new Error('bad secret key size');
  }
  function checkArrayTypes() {
    for (var i = 0; i < arguments.length; i++) {
      if (!(arguments[i] instanceof Uint8Array)) throw new TypeError('unexpected type, use Uint8Array');
    }
  }
  function cleanup(arr) {
    for (var i = 0; i < arr.length; i++) arr[i] = 0;
  }
  nacl.randomBytes = function (n) {
    var b = new Uint8Array(n);
    randombytes(b, n);
    return b;
  };
  nacl.secretbox = function (msg, nonce, key) {
    checkArrayTypes(msg, nonce, key);
    checkLengths(key, nonce);
    var m = new Uint8Array(crypto_secretbox_ZEROBYTES + msg.length);
    var c = new Uint8Array(m.length);
    for (var i = 0; i < msg.length; i++) m[i + crypto_secretbox_ZEROBYTES] = msg[i];
    crypto_secretbox(c, m, m.length, nonce, key);
    return c.subarray(crypto_secretbox_BOXZEROBYTES);
  };
  nacl.secretbox.open = function (box, nonce, key) {
    checkArrayTypes(box, nonce, key);
    checkLengths(key, nonce);
    var c = new Uint8Array(crypto_secretbox_BOXZEROBYTES + box.length);
    var m = new Uint8Array(c.length);
    for (var i = 0; i < box.length; i++) c[i + crypto_secretbox_BOXZEROBYTES] = box[i];
    if (c.length < 32) return null;
    if (crypto_secretbox_open(m, c, c.length, nonce, key) !== 0) return null;
    return m.subarray(crypto_secretbox_ZEROBYTES);
  };
  nacl.secretbox.keyLength = crypto_secretbox_KEYBYTES;
  nacl.secretbox.nonceLength = crypto_secretbox_NONCEBYTES;
  nacl.secretbox.overheadLength = crypto_secretbox_BOXZEROBYTES;
  nacl.scalarMult = function (n, p) {
    checkArrayTypes(n, p);
    if (n.length !== crypto_scalarmult_SCALARBYTES) throw new Error('bad n size');
    if (p.length !== crypto_scalarmult_BYTES) throw new Error('bad p size');
    var q = new Uint8Array(crypto_scalarmult_BYTES);
    crypto_scalarmult(q, n, p);
    return q;
  };
  nacl.scalarMult.base = function (n) {
    checkArrayTypes(n);
    if (n.length !== crypto_scalarmult_SCALARBYTES) throw new Error('bad n size');
    var q = new Uint8Array(crypto_scalarmult_BYTES);
    crypto_scalarmult_base(q, n);
    return q;
  };
  nacl.scalarMult.scalarLength = crypto_scalarmult_SCALARBYTES;
  nacl.scalarMult.groupElementLength = crypto_scalarmult_BYTES;
  nacl.box = function (msg, nonce, publicKey, secretKey) {
    var k = nacl.box.before(publicKey, secretKey);
    return nacl.secretbox(msg, nonce, k);
  };
  nacl.box.before = function (publicKey, secretKey) {
    checkArrayTypes(publicKey, secretKey);
    checkBoxLengths(publicKey, secretKey);
    var k = new Uint8Array(crypto_box_BEFORENMBYTES);
    crypto_box_beforenm(k, publicKey, secretKey);
    return k;
  };
  nacl.box.after = nacl.secretbox;
  nacl.box.open = function (msg, nonce, publicKey, secretKey) {
    var k = nacl.box.before(publicKey, secretKey);
    return nacl.secretbox.open(msg, nonce, k);
  };
  nacl.box.open.after = nacl.secretbox.open;
  nacl.box.keyPair = function () {
    var pk = new Uint8Array(crypto_box_PUBLICKEYBYTES);
    var sk = new Uint8Array(crypto_box_SECRETKEYBYTES);
    crypto_box_keypair(pk, sk);
    return {
      publicKey: pk,
      secretKey: sk
    };
  };
  nacl.box.keyPair.fromSecretKey = function (secretKey) {
    checkArrayTypes(secretKey);
    if (secretKey.length !== crypto_box_SECRETKEYBYTES) throw new Error('bad secret key size');
    var pk = new Uint8Array(crypto_box_PUBLICKEYBYTES);
    crypto_scalarmult_base(pk, secretKey);
    return {
      publicKey: pk,
      secretKey: new Uint8Array(secretKey)
    };
  };
  nacl.box.publicKeyLength = crypto_box_PUBLICKEYBYTES;
  nacl.box.secretKeyLength = crypto_box_SECRETKEYBYTES;
  nacl.box.sharedKeyLength = crypto_box_BEFORENMBYTES;
  nacl.box.nonceLength = crypto_box_NONCEBYTES;
  nacl.box.overheadLength = nacl.secretbox.overheadLength;
  nacl.sign = function (msg, secretKey) {
    checkArrayTypes(msg, secretKey);
    if (secretKey.length !== crypto_sign_SECRETKEYBYTES) throw new Error('bad secret key size');
    var signedMsg = new Uint8Array(crypto_sign_BYTES + msg.length);
    crypto_sign(signedMsg, msg, msg.length, secretKey);
    return signedMsg;
  };
  nacl.sign.open = function (signedMsg, publicKey) {
    checkArrayTypes(signedMsg, publicKey);
    if (publicKey.length !== crypto_sign_PUBLICKEYBYTES) throw new Error('bad public key size');
    var tmp = new Uint8Array(signedMsg.length);
    var mlen = crypto_sign_open(tmp, signedMsg, signedMsg.length, publicKey);
    if (mlen < 0) return null;
    var m = new Uint8Array(mlen);
    for (var i = 0; i < m.length; i++) m[i] = tmp[i];
    return m;
  };
  nacl.sign.detached = function (msg, secretKey) {
    var signedMsg = nacl.sign(msg, secretKey);
    var sig = new Uint8Array(crypto_sign_BYTES);
    for (var i = 0; i < sig.length; i++) sig[i] = signedMsg[i];
    return sig;
  };
  nacl.sign.detached.verify = function (msg, sig, publicKey) {
    checkArrayTypes(msg, sig, publicKey);
    if (sig.length !== crypto_sign_BYTES) throw new Error('bad signature size');
    if (publicKey.length !== crypto_sign_PUBLICKEYBYTES) throw new Error('bad public key size');
    var sm = new Uint8Array(crypto_sign_BYTES + msg.length);
    var m = new Uint8Array(crypto_sign_BYTES + msg.length);
    var i;
    for (i = 0; i < crypto_sign_BYTES; i++) sm[i] = sig[i];
    for (i = 0; i < msg.length; i++) sm[i + crypto_sign_BYTES] = msg[i];
    return crypto_sign_open(m, sm, sm.length, publicKey) >= 0;
  };
  nacl.sign.keyPair = function () {
    var pk = new Uint8Array(crypto_sign_PUBLICKEYBYTES);
    var sk = new Uint8Array(crypto_sign_SECRETKEYBYTES);
    crypto_sign_keypair(pk, sk);
    return {
      publicKey: pk,
      secretKey: sk
    };
  };
  nacl.sign.keyPair.fromSecretKey = function (secretKey) {
    checkArrayTypes(secretKey);
    if (secretKey.length !== crypto_sign_SECRETKEYBYTES) throw new Error('bad secret key size');
    var pk = new Uint8Array(crypto_sign_PUBLICKEYBYTES);
    for (var i = 0; i < pk.length; i++) pk[i] = secretKey[32 + i];
    return {
      publicKey: pk,
      secretKey: new Uint8Array(secretKey)
    };
  };
  nacl.sign.keyPair.fromSeed = function (seed) {
    checkArrayTypes(seed);
    if (seed.length !== crypto_sign_SEEDBYTES) throw new Error('bad seed size');
    var pk = new Uint8Array(crypto_sign_PUBLICKEYBYTES);
    var sk = new Uint8Array(crypto_sign_SECRETKEYBYTES);
    for (var i = 0; i < 32; i++) sk[i] = seed[i];
    crypto_sign_keypair(pk, sk, true);
    return {
      publicKey: pk,
      secretKey: sk
    };
  };
  nacl.sign.publicKeyLength = crypto_sign_PUBLICKEYBYTES;
  nacl.sign.secretKeyLength = crypto_sign_SECRETKEYBYTES;
  nacl.sign.seedLength = crypto_sign_SEEDBYTES;
  nacl.sign.signatureLength = crypto_sign_BYTES;
  nacl.hash = function (msg) {
    checkArrayTypes(msg);
    var h = new Uint8Array(crypto_hash_BYTES);
    crypto_hash(h, msg, msg.length);
    return h;
  };
  nacl.hash.hashLength = crypto_hash_BYTES;
  nacl.verify = function (x, y) {
    checkArrayTypes(x, y);
    // Zero length arguments are considered not equal.
    if (x.length === 0 || y.length === 0) return false;
    if (x.length !== y.length) return false;
    return vn(x, 0, y, 0, x.length) === 0 ? true : false;
  };
  nacl.setPRNG = function (fn) {
    randombytes = fn;
  };
  (function () {
    // Initialize PRNG if environment provides CSPRNG.
    // If not, methods calling randombytes will throw.
    var crypto = typeof self !== 'undefined' ? self.crypto || self.msCrypto : null;
    if (crypto && crypto.getRandomValues) {
      // Browsers.
      var QUOTA = 65536;
      nacl.setPRNG(function (x, n) {
        var i,
          v = new Uint8Array(n);
        for (i = 0; i < n; i += QUOTA) {
          crypto.getRandomValues(v.subarray(i, i + Math.min(n - i, QUOTA)));
        }
        for (i = 0; i < n; i++) x[i] = v[i];
        cleanup(v);
      });
    } else if (true) {
      // Node.js.
      crypto = __webpack_require__(/*! crypto */ "?bb00");
      if (crypto && crypto.randomBytes) {
        nacl.setPRNG(function (x, n) {
          var i,
            v = crypto.randomBytes(n);
          for (i = 0; i < n; i++) x[i] = v[i];
          cleanup(v);
        });
      }
    }
  })();
})( true && module.exports ? module.exports : self.nacl = self.nacl || {});

/***/ }),

/***/ "../../../.yarn/berry/cache/typeson-registry-npm-1.0.0-alpha.38-9e856b1ea8-10c0.zip/node_modules/typeson-registry/presets/array-nonindex-keys.js":
/*!*******************************************************************************************************************************************************!*\
  !*** ../../../.yarn/berry/cache/typeson-registry-npm-1.0.0-alpha.38-9e856b1ea8-10c0.zip/node_modules/typeson-registry/presets/array-nonindex-keys.js ***!
  \*******************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var arrayNonindexKeys = [{
  arrayNonindexKeys: {
    testPlainObjects: true,
    test: function test(x, stateObj) {
      if (Array.isArray(x)) {
        if (
        // By avoiding serializing arrays into objects which
        //  have only positive-integer keys, we reduce
        //  size and improve revival performance; arrays with
        //  non-index keys will be larger however
        Object.keys(x).some(function (k) {
          //  No need to check for `isNaN` or
          //   `isNaN(Number.parseInt())` as `NaN` will be
          //   treated as a string.
          //  No need to do check as
          //   `Number.parseInt(Number())` since scientific
          //   notation will be pre-resolved if a number
          //   was given, and it will otherwise be a string
          return String(Number.parseInt(k)) !== k;
        })) {
          stateObj.iterateIn = 'object';
          stateObj.addLength = true;
        }
        return true;
      }
      return false;
    },
    replace: function replace(a, stateObj) {
      // Catch sparse undefined
      stateObj.iterateUnsetNumeric = true;
      return a;
    },
    revive: function revive(o) {
      if (Array.isArray(o)) {
        return o;
      }
      var arr = [];
      // No map here as may be a sparse array (including
      //   with `length` set)
      // Todo: Reenable when Node `engines` >= 7
      // Object.entries(o).forEach(([key, val]) => {
      Object.keys(o).forEach(function (key) {
        var val = o[key];
        arr[key] = val;
      });
      return arr;
    }
  }
}, {
  sparseUndefined: {
    test: function test(x, stateObj) {
      return typeof x === 'undefined' && stateObj.ownKeys === false;
    },
    replace: function replace(n) {
      return 0;
    },
    revive: function revive(s) {
      return undefined;
    } // Will avoid adding anything
  }
}];
/* harmony default export */ __webpack_exports__["default"] = (arrayNonindexKeys);

/***/ }),

/***/ "../../../.yarn/berry/cache/typeson-registry-npm-1.0.0-alpha.38-9e856b1ea8-10c0.zip/node_modules/typeson-registry/presets/builtin.js":
/*!*******************************************************************************************************************************************!*\
  !*** ../../../.yarn/berry/cache/typeson-registry-npm-1.0.0-alpha.38-9e856b1ea8-10c0.zip/node_modules/typeson-registry/presets/builtin.js ***!
  \*******************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _array_nonindex_keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array-nonindex-keys.js */ "../../../.yarn/berry/cache/typeson-registry-npm-1.0.0-alpha.38-9e856b1ea8-10c0.zip/node_modules/typeson-registry/presets/array-nonindex-keys.js");
/* harmony import */ var _types_undef_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/undef.js */ "../../../.yarn/berry/cache/typeson-registry-npm-1.0.0-alpha.38-9e856b1ea8-10c0.zip/node_modules/typeson-registry/types/undef.js");
/* harmony import */ var _types_primitive_objects_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types/primitive-objects.js */ "../../../.yarn/berry/cache/typeson-registry-npm-1.0.0-alpha.38-9e856b1ea8-10c0.zip/node_modules/typeson-registry/types/primitive-objects.js");
/* harmony import */ var _special_numbers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./special-numbers.js */ "../../../.yarn/berry/cache/typeson-registry-npm-1.0.0-alpha.38-9e856b1ea8-10c0.zip/node_modules/typeson-registry/presets/special-numbers.js");
/* harmony import */ var _types_date_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../types/date.js */ "../../../.yarn/berry/cache/typeson-registry-npm-1.0.0-alpha.38-9e856b1ea8-10c0.zip/node_modules/typeson-registry/types/date.js");
/* harmony import */ var _types_error_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../types/error.js */ "../../../.yarn/berry/cache/typeson-registry-npm-1.0.0-alpha.38-9e856b1ea8-10c0.zip/node_modules/typeson-registry/types/error.js");
/* harmony import */ var _types_errors_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../types/errors.js */ "../../../.yarn/berry/cache/typeson-registry-npm-1.0.0-alpha.38-9e856b1ea8-10c0.zip/node_modules/typeson-registry/types/errors.js");
/* harmony import */ var _types_regexp_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../types/regexp.js */ "../../../.yarn/berry/cache/typeson-registry-npm-1.0.0-alpha.38-9e856b1ea8-10c0.zip/node_modules/typeson-registry/types/regexp.js");
/* harmony import */ var _types_map_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../types/map.js */ "../../../.yarn/berry/cache/typeson-registry-npm-1.0.0-alpha.38-9e856b1ea8-10c0.zip/node_modules/typeson-registry/types/map.js");
/* harmony import */ var _types_set_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../types/set.js */ "../../../.yarn/berry/cache/typeson-registry-npm-1.0.0-alpha.38-9e856b1ea8-10c0.zip/node_modules/typeson-registry/types/set.js");
/* harmony import */ var _types_arraybuffer_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../types/arraybuffer.js */ "../../../.yarn/berry/cache/typeson-registry-npm-1.0.0-alpha.38-9e856b1ea8-10c0.zip/node_modules/typeson-registry/types/arraybuffer.js");
/* harmony import */ var _types_typed_arrays_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../types/typed-arrays.js */ "../../../.yarn/berry/cache/typeson-registry-npm-1.0.0-alpha.38-9e856b1ea8-10c0.zip/node_modules/typeson-registry/types/typed-arrays.js");
/* harmony import */ var _types_dataview_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../types/dataview.js */ "../../../.yarn/berry/cache/typeson-registry-npm-1.0.0-alpha.38-9e856b1ea8-10c0.zip/node_modules/typeson-registry/types/dataview.js");
/* harmony import */ var _types_intl_types_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../types/intl-types.js */ "../../../.yarn/berry/cache/typeson-registry-npm-1.0.0-alpha.38-9e856b1ea8-10c0.zip/node_modules/typeson-registry/types/intl-types.js");
/* harmony import */ var _types_bigint_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../types/bigint.js */ "../../../.yarn/berry/cache/typeson-registry-npm-1.0.0-alpha.38-9e856b1ea8-10c0.zip/node_modules/typeson-registry/types/bigint.js");
/* harmony import */ var _types_bigint_object_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../types/bigint-object.js */ "../../../.yarn/berry/cache/typeson-registry-npm-1.0.0-alpha.38-9e856b1ea8-10c0.zip/node_modules/typeson-registry/types/bigint-object.js");
/* This preset includes types that are built-in into the JavaScript
    language itself, this should work universally.

  Types that were added in ES6 or beyond will be checked before inclusion
   so that this module can be consumed by both ES5 and ES6 environments.

  Some types cannot be encapsulated because their inner state is private:
    `WeakMap`, `WeakSet`.

  The Function type is not included because their closures would not be
    serialized, so a revived Function that uses closures would not behave
    as expected.

  Symbols are similarly not included.
*/

















var expObj = [_types_undef_js__WEBPACK_IMPORTED_MODULE_1__["default"],
// ES5
_array_nonindex_keys_js__WEBPACK_IMPORTED_MODULE_0__["default"], _types_primitive_objects_js__WEBPACK_IMPORTED_MODULE_2__["default"], _special_numbers_js__WEBPACK_IMPORTED_MODULE_3__["default"], _types_date_js__WEBPACK_IMPORTED_MODULE_4__["default"], _types_error_js__WEBPACK_IMPORTED_MODULE_5__["default"], _types_errors_js__WEBPACK_IMPORTED_MODULE_6__["default"], _types_regexp_js__WEBPACK_IMPORTED_MODULE_7__["default"]].concat(
// ES2015 (ES6)
/* istanbul ignore next */
typeof Map === 'function' ? _types_map_js__WEBPACK_IMPORTED_MODULE_8__["default"] : [], /* istanbul ignore next */
typeof Set === 'function' ? _types_set_js__WEBPACK_IMPORTED_MODULE_9__["default"] : [], /* istanbul ignore next */
typeof ArrayBuffer === 'function' ? _types_arraybuffer_js__WEBPACK_IMPORTED_MODULE_10__["default"] : [], /* istanbul ignore next */
typeof Uint8Array === 'function' ? _types_typed_arrays_js__WEBPACK_IMPORTED_MODULE_11__["default"] : [], /* istanbul ignore next */
typeof DataView === 'function' ? _types_dataview_js__WEBPACK_IMPORTED_MODULE_12__["default"] : [], /* istanbul ignore next */
typeof Intl !== 'undefined' ? _types_intl_types_js__WEBPACK_IMPORTED_MODULE_13__["default"] : [], /* istanbul ignore next */
typeof BigInt !== 'undefined' ? [_types_bigint_js__WEBPACK_IMPORTED_MODULE_14__["default"], _types_bigint_object_js__WEBPACK_IMPORTED_MODULE_15__["default"]] : []);
/* harmony default export */ __webpack_exports__["default"] = (expObj);

/***/ }),

/***/ "../../../.yarn/berry/cache/typeson-registry-npm-1.0.0-alpha.38-9e856b1ea8-10c0.zip/node_modules/typeson-registry/presets/special-numbers.js":
/*!***************************************************************************************************************************************************!*\
  !*** ../../../.yarn/berry/cache/typeson-registry-npm-1.0.0-alpha.38-9e856b1ea8-10c0.zip/node_modules/typeson-registry/presets/special-numbers.js ***!
  \***************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types_nan_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/nan.js */ "../../../.yarn/berry/cache/typeson-registry-npm-1.0.0-alpha.38-9e856b1ea8-10c0.zip/node_modules/typeson-registry/types/nan.js");
/* harmony import */ var _types_infinity_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/infinity.js */ "../../../.yarn/berry/cache/typeson-registry-npm-1.0.0-alpha.38-9e856b1ea8-10c0.zip/node_modules/typeson-registry/types/infinity.js");
/* harmony import */ var _types_negative_infinity_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types/negative-infinity.js */ "../../../.yarn/berry/cache/typeson-registry-npm-1.0.0-alpha.38-9e856b1ea8-10c0.zip/node_modules/typeson-registry/types/negative-infinity.js");



var specialNumbers = [_types_nan_js__WEBPACK_IMPORTED_MODULE_0__["default"], _types_infinity_js__WEBPACK_IMPORTED_MODULE_1__["default"], _types_negative_infinity_js__WEBPACK_IMPORTED_MODULE_2__["default"]];
/* harmony default export */ __webpack_exports__["default"] = (specialNumbers);

/***/ }),

/***/ "../../../.yarn/berry/cache/typeson-registry-npm-1.0.0-alpha.38-9e856b1ea8-10c0.zip/node_modules/typeson-registry/types/arraybuffer.js":
/*!*********************************************************************************************************************************************!*\
  !*** ../../../.yarn/berry/cache/typeson-registry-npm-1.0.0-alpha.38-9e856b1ea8-10c0.zip/node_modules/typeson-registry/types/arraybuffer.js ***!
  \*********************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var typeson__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! typeson */ "./.yarn/__virtual__/typeson-virtual-5b28fe396c/4/.yarn/berry/cache/typeson-npm-5.18.2-176b9d4ed8-10c0.zip/node_modules/typeson/dist/typeson.js");
/* harmony import */ var typeson__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(typeson__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var base64_arraybuffer_es6__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! base64-arraybuffer-es6 */ "./.yarn/__virtual__/base64-arraybuffer-es6-virtual-7c001f2643/4/.yarn/berry/cache/base64-arraybuffer-es6-npm-0.6.0-59f5d0f035-10c0.zip/node_modules/base64-arraybuffer-es6/dist/base64-arraybuffer-es.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }


var arraybuffer = {
  arraybuffer: {
    test: function test(x) {
      return typeson__WEBPACK_IMPORTED_MODULE_0___default().toStringTag(x) === 'ArrayBuffer';
    },
    replace: function replace(b, stateObj) {
      if (!stateObj.buffers) {
        stateObj.buffers = [];
      }
      var index = stateObj.buffers.indexOf(b);
      if (index > -1) {
        return {
          index: index
        };
      }
      stateObj.buffers.push(b);
      return (0,base64_arraybuffer_es6__WEBPACK_IMPORTED_MODULE_1__.encode)(b);
    },
    revive: function revive(b64, stateObj) {
      if (!stateObj.buffers) {
        stateObj.buffers = [];
      }
      if (_typeof(b64) === 'object') {
        return stateObj.buffers[b64.index];
      }
      var buffer = (0,base64_arraybuffer_es6__WEBPACK_IMPORTED_MODULE_1__.decode)(b64);
      stateObj.buffers.push(buffer);
      return buffer;
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (arraybuffer);

// See also typed-arrays!

/***/ }),

/***/ "../../../.yarn/berry/cache/typeson-registry-npm-1.0.0-alpha.38-9e856b1ea8-10c0.zip/node_modules/typeson-registry/types/bigint-object.js":
/*!***********************************************************************************************************************************************!*\
  !*** ../../../.yarn/berry/cache/typeson-registry-npm-1.0.0-alpha.38-9e856b1ea8-10c0.zip/node_modules/typeson-registry/types/bigint-object.js ***!
  \***********************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var typeson__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! typeson */ "./.yarn/__virtual__/typeson-virtual-5b28fe396c/4/.yarn/berry/cache/typeson-npm-5.18.2-176b9d4ed8-10c0.zip/node_modules/typeson/dist/typeson.js");
/* harmony import */ var typeson__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(typeson__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/* globals BigInt */

var bigintObject = {
  bigintObject: {
    test: function test(x) {
      return _typeof(x) === 'object' && typeson__WEBPACK_IMPORTED_MODULE_0___default().hasConstructorOf(x, BigInt);
    },
    replace: function replace(n) {
      return String(n);
    },
    revive: function revive(s) {
      // Filed this to avoid error: https://github.com/eslint/eslint/issues/11810
      // eslint-disable-next-line no-new-object
      return new Object(BigInt(s));
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (bigintObject);

/***/ }),

/***/ "../../../.yarn/berry/cache/typeson-registry-npm-1.0.0-alpha.38-9e856b1ea8-10c0.zip/node_modules/typeson-registry/types/bigint.js":
/*!****************************************************************************************************************************************!*\
  !*** ../../../.yarn/berry/cache/typeson-registry-npm-1.0.0-alpha.38-9e856b1ea8-10c0.zip/node_modules/typeson-registry/types/bigint.js ***!
  \****************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* globals BigInt */

var bigint = {
  bigint: {
    test: function test(x) {
      return typeof x === 'bigint';
    },
    replace: function replace(n) {
      return String(n);
    },
    revive: function revive(s) {
      return BigInt(s);
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (bigint);

/***/ }),

/***/ "../../../.yarn/berry/cache/typeson-registry-npm-1.0.0-alpha.38-9e856b1ea8-10c0.zip/node_modules/typeson-registry/types/dataview.js":
/*!******************************************************************************************************************************************!*\
  !*** ../../../.yarn/berry/cache/typeson-registry-npm-1.0.0-alpha.38-9e856b1ea8-10c0.zip/node_modules/typeson-registry/types/dataview.js ***!
  \******************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var typeson__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! typeson */ "./.yarn/__virtual__/typeson-virtual-5b28fe396c/4/.yarn/berry/cache/typeson-npm-5.18.2-176b9d4ed8-10c0.zip/node_modules/typeson/dist/typeson.js");
/* harmony import */ var typeson__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(typeson__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var base64_arraybuffer_es6__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! base64-arraybuffer-es6 */ "./.yarn/__virtual__/base64-arraybuffer-es6-virtual-7c001f2643/4/.yarn/berry/cache/base64-arraybuffer-es6-npm-0.6.0-59f5d0f035-10c0.zip/node_modules/base64-arraybuffer-es6/dist/base64-arraybuffer-es.js");


var dataview = {
  dataview: {
    test: function test(x) {
      return typeson__WEBPACK_IMPORTED_MODULE_0___default().toStringTag(x) === 'DataView';
    },
    replace: function replace(_ref, stateObj) {
      var buffer = _ref.buffer,
        byteOffset = _ref.byteOffset,
        byteLength = _ref.byteLength;
      if (!stateObj.buffers) {
        stateObj.buffers = [];
      }
      var index = stateObj.buffers.indexOf(buffer);
      if (index > -1) {
        return {
          index: index,
          byteOffset: byteOffset,
          byteLength: byteLength
        };
      }
      stateObj.buffers.push(buffer);
      return {
        encoded: (0,base64_arraybuffer_es6__WEBPACK_IMPORTED_MODULE_1__.encode)(buffer),
        byteOffset: byteOffset,
        byteLength: byteLength
      };
    },
    revive: function revive(b64Obj, stateObj) {
      if (!stateObj.buffers) {
        stateObj.buffers = [];
      }
      var byteOffset = b64Obj.byteOffset,
        byteLength = b64Obj.byteLength,
        encoded = b64Obj.encoded,
        index = b64Obj.index;
      var buffer;
      if ('index' in b64Obj) {
        buffer = stateObj.buffers[index];
      } else {
        buffer = (0,base64_arraybuffer_es6__WEBPACK_IMPORTED_MODULE_1__.decode)(encoded);
        stateObj.buffers.push(buffer);
      }
      return new DataView(buffer, byteOffset, byteLength);
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (dataview);

/***/ }),

/***/ "../../../.yarn/berry/cache/typeson-registry-npm-1.0.0-alpha.38-9e856b1ea8-10c0.zip/node_modules/typeson-registry/types/date.js":
/*!**************************************************************************************************************************************!*\
  !*** ../../../.yarn/berry/cache/typeson-registry-npm-1.0.0-alpha.38-9e856b1ea8-10c0.zip/node_modules/typeson-registry/types/date.js ***!
  \**************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var typeson__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! typeson */ "./.yarn/__virtual__/typeson-virtual-5b28fe396c/4/.yarn/berry/cache/typeson-npm-5.18.2-176b9d4ed8-10c0.zip/node_modules/typeson/dist/typeson.js");
/* harmony import */ var typeson__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(typeson__WEBPACK_IMPORTED_MODULE_0__);

var date = {
  date: {
    test: function test(x) {
      return typeson__WEBPACK_IMPORTED_MODULE_0___default().toStringTag(x) === 'Date';
    },
    replace: function replace(dt) {
      var time = dt.getTime();
      if (Number.isNaN(time)) {
        return 'NaN';
      }
      return time;
    },
    revive: function revive(time) {
      if (time === 'NaN') {
        return new Date(Number.NaN);
      }
      return new Date(time);
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (date);

/***/ }),

/***/ "../../../.yarn/berry/cache/typeson-registry-npm-1.0.0-alpha.38-9e856b1ea8-10c0.zip/node_modules/typeson-registry/types/error.js":
/*!***************************************************************************************************************************************!*\
  !*** ../../../.yarn/berry/cache/typeson-registry-npm-1.0.0-alpha.38-9e856b1ea8-10c0.zip/node_modules/typeson-registry/types/error.js ***!
  \***************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var typeson__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! typeson */ "./.yarn/__virtual__/typeson-virtual-5b28fe396c/4/.yarn/berry/cache/typeson-npm-5.18.2-176b9d4ed8-10c0.zip/node_modules/typeson/dist/typeson.js");
/* harmony import */ var typeson__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(typeson__WEBPACK_IMPORTED_MODULE_0__);

var error = {
  error: {
    test: function test(x) {
      return typeson__WEBPACK_IMPORTED_MODULE_0___default().toStringTag(x) === 'Error';
    },
    replace: function replace(_ref) {
      var name = _ref.name,
        message = _ref.message;
      return {
        name: name,
        message: message
      };
    },
    revive: function revive(_ref2) {
      var name = _ref2.name,
        message = _ref2.message;
      var e = new Error(message);
      e.name = name;
      return e;
    }
  }
};
// See also errors.js that may be registered after having registered this type.

/* harmony default export */ __webpack_exports__["default"] = (error);

/***/ }),

/***/ "../../../.yarn/berry/cache/typeson-registry-npm-1.0.0-alpha.38-9e856b1ea8-10c0.zip/node_modules/typeson-registry/types/errors.js":
/*!****************************************************************************************************************************************!*\
  !*** ../../../.yarn/berry/cache/typeson-registry-npm-1.0.0-alpha.38-9e856b1ea8-10c0.zip/node_modules/typeson-registry/types/errors.js ***!
  \****************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var typeson__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! typeson */ "./.yarn/__virtual__/typeson-virtual-5b28fe396c/4/.yarn/berry/cache/typeson-npm-5.18.2-176b9d4ed8-10c0.zip/node_modules/typeson/dist/typeson.js");
/* harmony import */ var typeson__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(typeson__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-env browser, node */


/* istanbul ignore next */
var _global = typeof self === 'undefined' ? __webpack_require__.g : self;
var errors = {};
// Comprises all built-in errors.
['TypeError', 'RangeError', 'SyntaxError', 'ReferenceError', 'EvalError', 'URIError', 'InternalError' // non-standard
].forEach(function (errName) {
  var Cnstrctr = _global[errName];
  if (Cnstrctr) {
    errors[errName.toLowerCase()] = {
      test: function test(x) {
        return typeson__WEBPACK_IMPORTED_MODULE_0___default().hasConstructorOf(x, Cnstrctr);
      },
      replace: function replace(e) {
        return e.message;
      },
      revive: function revive(message) {
        return new Cnstrctr(message);
      }
    };
  }
});
/* harmony default export */ __webpack_exports__["default"] = (errors);

/***/ }),

/***/ "../../../.yarn/berry/cache/typeson-registry-npm-1.0.0-alpha.38-9e856b1ea8-10c0.zip/node_modules/typeson-registry/types/infinity.js":
/*!******************************************************************************************************************************************!*\
  !*** ../../../.yarn/berry/cache/typeson-registry-npm-1.0.0-alpha.38-9e856b1ea8-10c0.zip/node_modules/typeson-registry/types/infinity.js ***!
  \******************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var infinity = {
  infinity: {
    test: function test(x) {
      return x === Infinity;
    },
    replace: function replace(n) {
      return 'Infinity';
    },
    revive: function revive(s) {
      return Infinity;
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (infinity);

/***/ }),

/***/ "../../../.yarn/berry/cache/typeson-registry-npm-1.0.0-alpha.38-9e856b1ea8-10c0.zip/node_modules/typeson-registry/types/intl-types.js":
/*!********************************************************************************************************************************************!*\
  !*** ../../../.yarn/berry/cache/typeson-registry-npm-1.0.0-alpha.38-9e856b1ea8-10c0.zip/node_modules/typeson-registry/types/intl-types.js ***!
  \********************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var typeson__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! typeson */ "./.yarn/__virtual__/typeson-virtual-5b28fe396c/4/.yarn/berry/cache/typeson-npm-5.18.2-176b9d4ed8-10c0.zip/node_modules/typeson/dist/typeson.js");
/* harmony import */ var typeson__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(typeson__WEBPACK_IMPORTED_MODULE_0__);

var IntlCollator = {
  test: function test(x) {
    return typeson__WEBPACK_IMPORTED_MODULE_0___default().hasConstructorOf(x, Intl.Collator);
  },
  replace: function replace(c) {
    return c.resolvedOptions();
  },
  revive: function revive(options) {
    return new Intl.Collator(options.locale, options);
  }
};
var IntlDateTimeFormat = {
  test: function test(x) {
    return typeson__WEBPACK_IMPORTED_MODULE_0___default().hasConstructorOf(x, Intl.DateTimeFormat);
  },
  replace: function replace(dtf) {
    return dtf.resolvedOptions();
  },
  revive: function revive(options) {
    return new Intl.DateTimeFormat(options.locale, options);
  }
};
var IntlNumberFormat = {
  test: function test(x) {
    return typeson__WEBPACK_IMPORTED_MODULE_0___default().hasConstructorOf(x, Intl.NumberFormat);
  },
  replace: function replace(nf) {
    return nf.resolvedOptions();
  },
  revive: function revive(options) {
    return new Intl.NumberFormat(options.locale, options);
  }
};
var intlTypes = {
  IntlCollator: IntlCollator,
  IntlDateTimeFormat: IntlDateTimeFormat,
  IntlNumberFormat: IntlNumberFormat
};
/* harmony default export */ __webpack_exports__["default"] = (intlTypes);

/***/ }),

/***/ "../../../.yarn/berry/cache/typeson-registry-npm-1.0.0-alpha.38-9e856b1ea8-10c0.zip/node_modules/typeson-registry/types/map.js":
/*!*************************************************************************************************************************************!*\
  !*** ../../../.yarn/berry/cache/typeson-registry-npm-1.0.0-alpha.38-9e856b1ea8-10c0.zip/node_modules/typeson-registry/types/map.js ***!
  \*************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var typeson__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! typeson */ "./.yarn/__virtual__/typeson-virtual-5b28fe396c/4/.yarn/berry/cache/typeson-npm-5.18.2-176b9d4ed8-10c0.zip/node_modules/typeson/dist/typeson.js");
/* harmony import */ var typeson__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(typeson__WEBPACK_IMPORTED_MODULE_0__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var map = {
  map: {
    test: function test(x) {
      return typeson__WEBPACK_IMPORTED_MODULE_0___default().toStringTag(x) === 'Map';
    },
    replace: function replace(mp) {
      return _toConsumableArray(mp.entries());
    },
    revive: function revive(entries) {
      return new Map(entries);
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (map);

/***/ }),

/***/ "../../../.yarn/berry/cache/typeson-registry-npm-1.0.0-alpha.38-9e856b1ea8-10c0.zip/node_modules/typeson-registry/types/nan.js":
/*!*************************************************************************************************************************************!*\
  !*** ../../../.yarn/berry/cache/typeson-registry-npm-1.0.0-alpha.38-9e856b1ea8-10c0.zip/node_modules/typeson-registry/types/nan.js ***!
  \*************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var nan = {
  nan: {
    test: function test(x) {
      return Number.isNaN(x);
    },
    replace: function replace(n) {
      return 'NaN';
    },
    revive: function revive(s) {
      return Number.NaN;
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (nan);

/***/ }),

/***/ "../../../.yarn/berry/cache/typeson-registry-npm-1.0.0-alpha.38-9e856b1ea8-10c0.zip/node_modules/typeson-registry/types/negative-infinity.js":
/*!***************************************************************************************************************************************************!*\
  !*** ../../../.yarn/berry/cache/typeson-registry-npm-1.0.0-alpha.38-9e856b1ea8-10c0.zip/node_modules/typeson-registry/types/negative-infinity.js ***!
  \***************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var negativeInfinity = {
  negativeInfinity: {
    test: function test(x) {
      return x === -Infinity;
    },
    replace: function replace(n) {
      return '-Infinity';
    },
    revive: function revive(s) {
      return -Infinity;
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (negativeInfinity);

/***/ }),

/***/ "../../../.yarn/berry/cache/typeson-registry-npm-1.0.0-alpha.38-9e856b1ea8-10c0.zip/node_modules/typeson-registry/types/primitive-objects.js":
/*!***************************************************************************************************************************************************!*\
  !*** ../../../.yarn/berry/cache/typeson-registry-npm-1.0.0-alpha.38-9e856b1ea8-10c0.zip/node_modules/typeson-registry/types/primitive-objects.js ***!
  \***************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var typeson__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! typeson */ "./.yarn/__virtual__/typeson-virtual-5b28fe396c/4/.yarn/berry/cache/typeson-npm-5.18.2-176b9d4ed8-10c0.zip/node_modules/typeson/dist/typeson.js");
/* harmony import */ var typeson__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(typeson__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
// This module is for objectified primitives (such as `new Number(3)` or
//      `new String("foo")`)
/* eslint-disable no-new-wrappers, unicorn/new-for-builtins */

var primitiveObjects = {
  // String Object (not primitive string which need no type spec)
  StringObject: {
    test: function test(x) {
      return typeson__WEBPACK_IMPORTED_MODULE_0___default().toStringTag(x) === 'String' && _typeof(x) === 'object';
    },
    replace: function replace(s) {
      return String(s);
    },
    // convert to primitive string
    revive: function revive(s) {
      return new String(s);
    } // Revive to an objectified string
  },
  // Boolean Object (not primitive boolean which need no type spec)
  BooleanObject: {
    test: function test(x) {
      return typeson__WEBPACK_IMPORTED_MODULE_0___default().toStringTag(x) === 'Boolean' && _typeof(x) === 'object';
    },
    replace: function replace(b) {
      return Boolean(b);
    },
    // convert to primitive boolean
    revive: function revive(b) {
      // Revive to an objectified Boolean
      return new Boolean(b);
    }
  },
  // Number Object (not primitive number which need no type spec)
  NumberObject: {
    test: function test(x) {
      return typeson__WEBPACK_IMPORTED_MODULE_0___default().toStringTag(x) === 'Number' && _typeof(x) === 'object';
    },
    replace: function replace(n) {
      return Number(n);
    },
    // convert to primitive number
    revive: function revive(n) {
      return new Number(n);
    } // Revive to an objectified number
  }
};
/* eslint-enable no-new-wrappers, unicorn/new-for-builtins */

/* harmony default export */ __webpack_exports__["default"] = (primitiveObjects);

/***/ }),

/***/ "../../../.yarn/berry/cache/typeson-registry-npm-1.0.0-alpha.38-9e856b1ea8-10c0.zip/node_modules/typeson-registry/types/regexp.js":
/*!****************************************************************************************************************************************!*\
  !*** ../../../.yarn/berry/cache/typeson-registry-npm-1.0.0-alpha.38-9e856b1ea8-10c0.zip/node_modules/typeson-registry/types/regexp.js ***!
  \****************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var typeson__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! typeson */ "./.yarn/__virtual__/typeson-virtual-5b28fe396c/4/.yarn/berry/cache/typeson-npm-5.18.2-176b9d4ed8-10c0.zip/node_modules/typeson/dist/typeson.js");
/* harmony import */ var typeson__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(typeson__WEBPACK_IMPORTED_MODULE_0__);

var regexp = {
  regexp: {
    test: function test(x) {
      return typeson__WEBPACK_IMPORTED_MODULE_0___default().toStringTag(x) === 'RegExp';
    },
    replace: function replace(rexp) {
      return {
        source: rexp.source,
        flags: (rexp.global ? 'g' : '') + (rexp.ignoreCase ? 'i' : '') + (rexp.multiline ? 'm' : '') + (rexp.sticky ? 'y' : '') + (rexp.unicode ? 'u' : '')
      };
    },
    revive: function revive(_ref) {
      var source = _ref.source,
        flags = _ref.flags;
      return new RegExp(source, flags);
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (regexp);

/***/ }),

/***/ "../../../.yarn/berry/cache/typeson-registry-npm-1.0.0-alpha.38-9e856b1ea8-10c0.zip/node_modules/typeson-registry/types/set.js":
/*!*************************************************************************************************************************************!*\
  !*** ../../../.yarn/berry/cache/typeson-registry-npm-1.0.0-alpha.38-9e856b1ea8-10c0.zip/node_modules/typeson-registry/types/set.js ***!
  \*************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var typeson__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! typeson */ "./.yarn/__virtual__/typeson-virtual-5b28fe396c/4/.yarn/berry/cache/typeson-npm-5.18.2-176b9d4ed8-10c0.zip/node_modules/typeson/dist/typeson.js");
/* harmony import */ var typeson__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(typeson__WEBPACK_IMPORTED_MODULE_0__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var set = {
  set: {
    test: function test(x) {
      return typeson__WEBPACK_IMPORTED_MODULE_0___default().toStringTag(x) === 'Set';
    },
    replace: function replace(st) {
      return _toConsumableArray(st.values());
    },
    revive: function revive(values) {
      return new Set(values);
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (set);

/***/ }),

/***/ "../../../.yarn/berry/cache/typeson-registry-npm-1.0.0-alpha.38-9e856b1ea8-10c0.zip/node_modules/typeson-registry/types/typed-arrays.js":
/*!**********************************************************************************************************************************************!*\
  !*** ../../../.yarn/berry/cache/typeson-registry-npm-1.0.0-alpha.38-9e856b1ea8-10c0.zip/node_modules/typeson-registry/types/typed-arrays.js ***!
  \**********************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var typeson__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! typeson */ "./.yarn/__virtual__/typeson-virtual-5b28fe396c/4/.yarn/berry/cache/typeson-npm-5.18.2-176b9d4ed8-10c0.zip/node_modules/typeson/dist/typeson.js");
/* harmony import */ var typeson__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(typeson__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var base64_arraybuffer_es6__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! base64-arraybuffer-es6 */ "./.yarn/__virtual__/base64-arraybuffer-es6-virtual-7c001f2643/4/.yarn/berry/cache/base64-arraybuffer-es6-npm-0.6.0-59f5d0f035-10c0.zip/node_modules/base64-arraybuffer-es6/dist/base64-arraybuffer-es.js");
/* eslint-env browser, node */



/* istanbul ignore next */
var _global = typeof self === 'undefined' ? __webpack_require__.g : self;
var typedArrays = {};
['Int8Array', 'Uint8Array', 'Uint8ClampedArray', 'Int16Array', 'Uint16Array', 'Int32Array', 'Uint32Array', 'Float32Array', 'Float64Array'].forEach(function (typeName) {
  var arrType = typeName;
  var TypedArray = _global[arrType];
  /* istanbul ignore if */
  if (!TypedArray) {
    return;
  }
  typedArrays[typeName.toLowerCase()] = {
    test: function test(x) {
      return typeson__WEBPACK_IMPORTED_MODULE_0___default().toStringTag(x) === arrType;
    },
    replace: function replace(_ref, stateObj) {
      var buffer = _ref.buffer,
        byteOffset = _ref.byteOffset,
        l = _ref.length;
      if (!stateObj.buffers) {
        stateObj.buffers = [];
      }
      var index = stateObj.buffers.indexOf(buffer);
      if (index > -1) {
        return {
          index: index,
          byteOffset: byteOffset,
          length: l
        };
      }
      stateObj.buffers.push(buffer);
      return {
        encoded: (0,base64_arraybuffer_es6__WEBPACK_IMPORTED_MODULE_1__.encode)(buffer),
        byteOffset: byteOffset,
        length: l
      };
    },
    revive: function revive(b64Obj, stateObj) {
      if (!stateObj.buffers) {
        stateObj.buffers = [];
      }
      var byteOffset = b64Obj.byteOffset,
        len = b64Obj.length,
        encoded = b64Obj.encoded,
        index = b64Obj.index;
      var buffer;
      if ('index' in b64Obj) {
        buffer = stateObj.buffers[index];
      } else {
        buffer = (0,base64_arraybuffer_es6__WEBPACK_IMPORTED_MODULE_1__.decode)(encoded);
        stateObj.buffers.push(buffer);
      }
      return new TypedArray(buffer, byteOffset, len);
    }
  };
});
/* harmony default export */ __webpack_exports__["default"] = (typedArrays);

/***/ }),

/***/ "../../../.yarn/berry/cache/typeson-registry-npm-1.0.0-alpha.38-9e856b1ea8-10c0.zip/node_modules/typeson-registry/types/undef.js":
/*!***************************************************************************************************************************************!*\
  !*** ../../../.yarn/berry/cache/typeson-registry-npm-1.0.0-alpha.38-9e856b1ea8-10c0.zip/node_modules/typeson-registry/types/undef.js ***!
  \***************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var typeson__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! typeson */ "./.yarn/__virtual__/typeson-virtual-5b28fe396c/4/.yarn/berry/cache/typeson-npm-5.18.2-176b9d4ed8-10c0.zip/node_modules/typeson/dist/typeson.js");
/* harmony import */ var typeson__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(typeson__WEBPACK_IMPORTED_MODULE_0__);
// This does not preserve `undefined` in sparse arrays; see the `undefined`
//  or `sparse-undefined` preset

var undef = {
  undef: {
    test: function test(x, stateObj) {
      return typeof x === 'undefined' && (stateObj.ownKeys || !('ownKeys' in stateObj));
    },
    replace: function replace(n) {
      return 0;
    },
    revive: function revive(s) {
      // Will add `undefined` (returning `undefined` would instead
      //   avoid explicitly setting)
      return new (typeson__WEBPACK_IMPORTED_MODULE_0___default().Undefined)();
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (undef);

/***/ }),

/***/ "./.yarn/__virtual__/base64-arraybuffer-es6-virtual-7c001f2643/4/.yarn/berry/cache/base64-arraybuffer-es6-npm-0.6.0-59f5d0f035-10c0.zip/node_modules/base64-arraybuffer-es6/dist/base64-arraybuffer-es.js":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/base64-arraybuffer-es6-virtual-7c001f2643/4/.yarn/berry/cache/base64-arraybuffer-es6-npm-0.6.0-59f5d0f035-10c0.zip/node_modules/base64-arraybuffer-es6/dist/base64-arraybuffer-es.js ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "decode": function() { return /* binding */ decode; },
/* harmony export */   "encode": function() { return /* binding */ encode; }
/* harmony export */ });
/* eslint-disable node/no-unsupported-features/es-syntax */

/*
 * base64-arraybuffer
 * https://github.com/niklasvh/base64-arraybuffer
 *
 * Copyright (c) 2017 Brett Zamir, 2012 Niklas von Hertzen
 * Licensed under the MIT license.
 */
var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'; // Use a lookup table to find the index.

var lookup = new Uint8Array(256);
for (var i = 0; i < chars.length; i++) {
  lookup[chars.charCodeAt(i)] = i;
}
/**
 * @param {ArrayBuffer} arraybuffer
 * @param {Integer} byteOffset
 * @param {Integer} lngth
 * @returns {string}
 */

var encode = function encode(arraybuffer, byteOffset, lngth) {
  if (lngth === null || lngth === undefined) {
    lngth = arraybuffer.byteLength; // Needed for Safari
  }

  var bytes = new Uint8Array(arraybuffer, byteOffset || 0,
  // Default needed for Safari
  lngth);
  var len = bytes.length;
  var base64 = '';
  for (var _i = 0; _i < len; _i += 3) {
    base64 += chars[bytes[_i] >> 2];
    base64 += chars[(bytes[_i] & 3) << 4 | bytes[_i + 1] >> 4];
    base64 += chars[(bytes[_i + 1] & 15) << 2 | bytes[_i + 2] >> 6];
    base64 += chars[bytes[_i + 2] & 63];
  }
  if (len % 3 === 2) {
    base64 = base64.slice(0, -1) + '=';
  } else if (len % 3 === 1) {
    base64 = base64.slice(0, -2) + '==';
  }
  return base64;
};
/**
 * @param {string} base64
 * @returns {ArrayBuffer}
 */

var decode = function decode(base64) {
  var len = base64.length;
  var bufferLength = base64.length * 0.75;
  var p = 0;
  var encoded1, encoded2, encoded3, encoded4;
  if (base64[base64.length - 1] === '=') {
    bufferLength--;
    if (base64[base64.length - 2] === '=') {
      bufferLength--;
    }
  }
  var arraybuffer = new ArrayBuffer(bufferLength),
    bytes = new Uint8Array(arraybuffer);
  for (var _i2 = 0; _i2 < len; _i2 += 4) {
    encoded1 = lookup[base64.charCodeAt(_i2)];
    encoded2 = lookup[base64.charCodeAt(_i2 + 1)];
    encoded3 = lookup[base64.charCodeAt(_i2 + 2)];
    encoded4 = lookup[base64.charCodeAt(_i2 + 3)];
    bytes[p++] = encoded1 << 2 | encoded2 >> 4;
    bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
    bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
  }
  return arraybuffer;
};


/***/ }),

/***/ "./.yarn/__virtual__/typeson-virtual-5b28fe396c/4/.yarn/berry/cache/typeson-npm-5.18.2-176b9d4ed8-10c0.zip/node_modules/typeson/dist/typeson.js":
/*!******************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/typeson-virtual-5b28fe396c/4/.yarn/berry/cache/typeson-npm-5.18.2-176b9d4ed8-10c0.zip/node_modules/typeson/dist/typeson.js ***!
  \******************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof2(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _typeof2(obj) { "@babel/helpers - typeof"; return _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof2(obj); }
(function (global, factory) {
  ( false ? 0 : _typeof2(exports)) === 'object' && "object" !== 'undefined' ? module.exports = factory() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (0);
})(this, function () {
  'use strict';

  function _typeof(obj) {
    if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
      _typeof = function _typeof(obj) {
        return _typeof2(obj);
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
      };
    }
    return _typeof(obj);
  }
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }
  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
        args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);
        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(undefined);
      });
    };
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
    return target;
  }
  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
  }
  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];
      return arr2;
    }
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }
  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }
  function _iterableToArrayLimit(arr, i) {
    if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
      return;
    }
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }

  /**
   * We keep this function minimized so if using two instances of this
   *   library, where one is minimized and one is not, it will still work
   *   with `hasConstructorOf`.
   * With ES6 classes, we may be able to simply use `class TypesonPromise
   *   extends Promise` and add a string tag for detection.
   * @param {function} f
   */
  // eslint-disable-next-line max-len
  // eslint-disable-next-line block-spacing, space-before-function-paren, space-before-blocks, space-infix-ops, semi, promise/avoid-new
  var TypesonPromise = function TypesonPromise(f) {
    _classCallCheck(this, TypesonPromise);
    this.p = new Promise(f);
  }; // eslint-disable-next-line max-len
  // class TypesonPromise extends Promise {get[Symbol.toStringTag](){return 'TypesonPromise'};} // eslint-disable-line keyword-spacing, space-before-function-paren, space-before-blocks, block-spacing, semi

  TypesonPromise.__typeson__type__ = 'TypesonPromise'; // Note: core-js-bundle provides a `Symbol` polyfill

  /* istanbul ignore else */

  if (typeof Symbol !== 'undefined') {
    // Ensure `isUserObject` will return `false` for `TypesonPromise`
    TypesonPromise.prototype[Symbol.toStringTag] = 'TypesonPromise';
  }
  /**
   *
   * @param {function} [onFulfilled]
   * @param {function} [onRejected]
   * @returns {TypesonPromise}
   */

  TypesonPromise.prototype.then = function (onFulfilled, onRejected) {
    var _this = this;
    return new TypesonPromise(function (typesonResolve, typesonReject) {
      // eslint-disable-next-line promise/catch-or-return
      _this.p.then(function (res) {
        // eslint-disable-next-line promise/always-return
        typesonResolve(onFulfilled ? onFulfilled(res) : res);
      })["catch"](function (res) {
        return onRejected ? onRejected(res) : Promise.reject(res);
      }).then(typesonResolve, typesonReject);
    });
  };
  /**
   *
   * @param {function} onRejected
   * @returns {TypesonPromise}
   */

  TypesonPromise.prototype["catch"] = function (onRejected) {
    return this.then(null, onRejected);
  };
  /**
   *
   * @param {Any} v
   * @returns {TypesonPromise}
   */

  TypesonPromise.resolve = function (v) {
    return new TypesonPromise(function (typesonResolve) {
      typesonResolve(v);
    });
  };
  /**
   *
   * @param {Any} v
   * @returns {TypesonPromise}
   */

  TypesonPromise.reject = function (v) {
    return new TypesonPromise(function (typesonResolve, typesonReject) {
      typesonReject(v);
    });
  };
  ['all', 'race'].forEach(function (meth) {
    /**
     *
     * @param {Promise[]} promArr
     * @returns {TypesonPromise}
     */
    TypesonPromise[meth] = function (promArr) {
      return new TypesonPromise(function (typesonResolve, typesonReject) {
        // eslint-disable-next-line promise/catch-or-return
        Promise[meth](promArr.map(function (prom) {
          return prom && prom.constructor && prom.constructor.__typeson__type__ === 'TypesonPromise' ? prom.p : prom;
        })).then(typesonResolve, typesonReject);
      });
    };
  });
  var _ref = {},
    toStr = _ref.toString,
    hasOwn = {}.hasOwnProperty,
    getProto = Object.getPrototypeOf,
    fnToString = hasOwn.toString;
  /**
   * Second argument not in use internally, but provided for utility.
   * @param {Any} v
   * @param {boolean} catchCheck
   * @returns {boolean}
   */

  function isThenable(v, catchCheck) {
    return isObject(v) && typeof v.then === 'function' && (!catchCheck || typeof v["catch"] === 'function');
  }
  /**
   *
   * @param {Any} val
   * @returns {string}
   */

  function toStringTag(val) {
    return toStr.call(val).slice(8, -1);
  }
  /**
   * This function is dependent on both constructors
   *   being identical so any minimization is expected of both.
   * @param {Any} a
   * @param {function} b
   * @returns {boolean}
   */

  function hasConstructorOf(a, b) {
    if (!a || _typeof(a) !== 'object') {
      return false;
    }
    var proto = getProto(a);
    if (!proto) {
      return b === null;
    }
    var Ctor = hasOwn.call(proto, 'constructor') && proto.constructor;
    if (typeof Ctor !== 'function') {
      return b === null;
    }
    if (b === Ctor) {
      return true;
    }
    if (b !== null && fnToString.call(Ctor) === fnToString.call(b)) {
      return true;
    }
    if (typeof b === 'function' && typeof Ctor.__typeson__type__ === 'string' && Ctor.__typeson__type__ === b.__typeson__type__) {
      return true;
    }
    return false;
  }
  /**
   *
   * @param {Any} val
   * @returns {boolean}
   */

  function isPlainObject(val) {
    // Mirrors jQuery's
    if (!val || toStringTag(val) !== 'Object') {
      return false;
    }
    var proto = getProto(val);
    if (!proto) {
      // `Object.create(null)`
      return true;
    }
    return hasConstructorOf(val, Object);
  }
  /**
   *
   * @param {Any} val
   * @returns {boolean}
   */

  function isUserObject(val) {
    if (!val || toStringTag(val) !== 'Object') {
      return false;
    }
    var proto = getProto(val);
    if (!proto) {
      // `Object.create(null)`
      return true;
    }
    return hasConstructorOf(val, Object) || isUserObject(proto);
  }
  /**
   *
   * @param {Any} v
   * @returns {boolean}
   */

  function isObject(v) {
    return v && _typeof(v) === 'object';
  }
  /**
   *
   * @param {string} keyPathComponent
   * @returns {string}
   */

  function escapeKeyPathComponent(keyPathComponent) {
    return keyPathComponent.replace(/~/g, '~0').replace(/\./g, '~1');
  }
  /**
   *
   * @param {string} keyPathComponent
   * @returns {string}
   */

  function unescapeKeyPathComponent(keyPathComponent) {
    return keyPathComponent.replace(/~1/g, '.').replace(/~0/g, '~');
  }
  /**
   * @param {PlainObject|GenericArray} obj
   * @param {string} keyPath
   * @returns {Any}
   */

  function getByKeyPath(obj, keyPath) {
    if (keyPath === '') {
      return obj;
    }
    var period = keyPath.indexOf('.');
    if (period > -1) {
      var innerObj = obj[unescapeKeyPathComponent(keyPath.slice(0, period))];
      return innerObj === undefined ? undefined : getByKeyPath(innerObj, keyPath.slice(period + 1));
    }
    return obj[unescapeKeyPathComponent(keyPath)];
  }
  /**
   *
   * @param {PlainObject} obj
   * @param {string} keyPath
   * @param {Any} value
   * @returns {Any}
   */

  function setAtKeyPath(obj, keyPath, value) {
    if (keyPath === '') {
      return value;
    }
    var period = keyPath.indexOf('.');
    if (period > -1) {
      var innerObj = obj[unescapeKeyPathComponent(keyPath.slice(0, period))];
      return setAtKeyPath(innerObj, keyPath.slice(period + 1), value);
    }
    obj[unescapeKeyPathComponent(keyPath)] = value;
    return obj;
  }
  /**
   *
   * @param {external:JSON} value
   * @returns {"null"|"array"|"undefined"|"boolean"|"number"|"string"|
   *  "object"|"symbol"}
   */

  function getJSONType(value) {
    return value === null ? 'null' : Array.isArray(value) ? 'array' : _typeof(value);
  }
  var keys = Object.keys,
    isArray = Array.isArray,
    hasOwn$1 = {}.hasOwnProperty,
    internalStateObjPropsToIgnore = ['type', 'replaced', 'iterateIn', 'iterateUnsetNumeric'];
  /**
   * Handle plain object revivers first so reference setting can use
   * revived type (e.g., array instead of object); assumes revived
   * has same structure or will otherwise break subsequent references.
   * @param {PlainObjectType} a
   * @param {PlainObjectType} b
   * @returns {1|-1|boolean}
   */

  function nestedPathsFirst(a, b) {
    if (a.keypath === '') {
      return -1;
    }
    var as = a.keypath.match(/\./g) || 0;
    var bs = b.keypath.match(/\./g) || 0;
    if (as) {
      as = as.length;
    }
    if (bs) {
      bs = bs.length;
    }
    return as > bs ? -1 : as < bs ? 1 : a.keypath < b.keypath ? -1 : a.keypath > b.keypath;
  }
  /**
   * An instance of this class can be used to call `stringify()` and `parse()`.
   * Typeson resolves cyclic references by default. Can also be extended to
   * support custom types using the register() method.
   *
   * @class
   * @param {{cyclic: boolean}} [options] - if cyclic (default true),
   *   cyclic references will be handled gracefully.
   */

  var Typeson = /*#__PURE__*/
  function () {
    function Typeson(options) {
      _classCallCheck(this, Typeson);
      this.options = options; // Replacers signature: replace (value). Returns falsy if not
      //   replacing. Otherwise ['Date', value.getTime()]

      this.plainObjectReplacers = [];
      this.nonplainObjectReplacers = []; // Revivers: [{type => reviver}, {plain: boolean}].
      //   Sample: [{'Date': value => new Date(value)}, {plain: false}]

      this.revivers = {};
      /** Types registered via `register()`. */

      this.types = {};
    }
    /**
    * @typedef {null|boolean|number|string|GenericArray|PlainObject} JSON
    */

    /**
    * @callback JSONReplacer
    * @param {""|string} key
    * @param {JSON} value
    * @returns {number|string|boolean|null|PlainObject|undefined}
    * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#The%20replacer%20parameter
    */

    /**
     * Serialize given object to Typeson.
     * Initial arguments work identical to those of `JSON.stringify`.
     * The `replacer` argument has nothing to do with our replacers.
     * @param {Any} obj
     * @param {JSONReplacer|string[]} replacer
     * @param {number|string} space
     * @param {object} opts
     * @returns {string|Promise} Promise resolves to a string
     */

    _createClass(Typeson, [{
      key: "stringify",
      value: function stringify(obj, replacer, space, opts) {
        opts = _objectSpread2({}, this.options, {}, opts, {
          stringification: true
        });
        var encapsulated = this.encapsulate(obj, null, opts);
        if (isArray(encapsulated)) {
          return JSON.stringify(encapsulated[0], replacer, space);
        }
        return encapsulated.then(function (res) {
          return JSON.stringify(res, replacer, space);
        });
      }
      /**
       * Also sync but throws on non-sync result.
       * @param {Any} obj
       * @param {JSONReplacer|string[]} replacer
       * @param {number|string} space
       * @param {object} opts
       * @returns {string}
       */
    }, {
      key: "stringifySync",
      value: function stringifySync(obj, replacer, space, opts) {
        return this.stringify(obj, replacer, space, _objectSpread2({
          throwOnBadSyncType: true
        }, opts, {
          sync: true
        }));
      }
      /**
       *
       * @param {Any} obj
       * @param {JSONReplacer|string[]} replacer
       * @param {number|string} space
       * @param {object} opts
       * @returns {Promise<string>}
       */
    }, {
      key: "stringifyAsync",
      value: function stringifyAsync(obj, replacer, space, opts) {
        return this.stringify(obj, replacer, space, _objectSpread2({
          throwOnBadSyncType: true
        }, opts, {
          sync: false
        }));
      }
      /**
       * Parse Typeson back into an obejct.
       * Initial arguments works identical to those of `JSON.parse()`.
       * @param {string} text
       * @param {function} reviver This JSON reviver has nothing to do with
       *   our revivers.
       * @param {object} opts
       * @returns {external:JSON}
       */
    }, {
      key: "parse",
      value: function parse(text, reviver, opts) {
        opts = _objectSpread2({}, this.options, {}, opts, {
          parse: true
        });
        return this.revive(JSON.parse(text, reviver), opts);
      }
      /**
      * Also sync but throws on non-sync result.
      * @param {string} text
      * @param {function} reviver This JSON reviver has nothing to do with
      *   our revivers.
      * @param {object} opts
      * @returns {external:JSON}
      */
    }, {
      key: "parseSync",
      value: function parseSync(text, reviver, opts) {
        return this.parse(text, reviver, _objectSpread2({
          throwOnBadSyncType: true
        }, opts, {
          sync: true
        }));
      }
      /**
      * @param {string} text
      * @param {function} reviver This JSON reviver has nothing to do with
      *   our revivers.
      * @param {object} opts
      * @returns {Promise} Resolves to `external:JSON`
      */
    }, {
      key: "parseAsync",
      value: function parseAsync(text, reviver, opts) {
        return this.parse(text, reviver, _objectSpread2({
          throwOnBadSyncType: true
        }, opts, {
          sync: false
        }));
      }
      /**
       *
       * @param {Any} obj
       * @param {object} stateObj
       * @param {object} [opts={}]
       * @returns {string[]|false}
       */
    }, {
      key: "specialTypeNames",
      value: function specialTypeNames(obj, stateObj) {
        var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        opts.returnTypeNames = true;
        return this.encapsulate(obj, stateObj, opts);
      }
      /**
       *
       * @param {Any} obj
       * @param {PlainObject} stateObj
       * @param {PlainObject} [opts={}]
       * @returns {Promise|GenericArray|PlainObject|string|false}
       */
    }, {
      key: "rootTypeName",
      value: function rootTypeName(obj, stateObj) {
        var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        opts.iterateNone = true;
        return this.encapsulate(obj, stateObj, opts);
      }
      /**
       * Encapsulate a complex object into a plain Object by replacing
       * registered types with plain objects representing the types data.
       *
       * This method is used internally by `Typeson.stringify()`.
       * @param {Any} obj - Object to encapsulate.
       * @param {PlainObject} stateObj
       * @param {PlainObject} opts
       * @returns {Promise|GenericArray|PlainObject|string|false}
       */
    }, {
      key: "encapsulate",
      value: function encapsulate(obj, stateObj, opts) {
        opts = _objectSpread2({
          sync: true
        }, this.options, {}, opts);
        var _opts = opts,
          sync = _opts.sync;
        var that = this,
          types = {},
          refObjs = [],
          // For checking cyclic references
          refKeys = [],
          // For checking cyclic references
          promisesDataRoot = []; // Clone the object deeply while at the same time replacing any
        //   special types or cyclic reference:

        var cyclic = 'cyclic' in opts ? opts.cyclic : true;
        var _opts2 = opts,
          encapsulateObserver = _opts2.encapsulateObserver;
        var ret = _encapsulate('', obj, cyclic, stateObj || {}, promisesDataRoot);
        /**
         *
         * @param {Any} ret
         * @returns {GenericArray|PlainObject|string|false}
         */

        function finish(ret) {
          // Add `$types` to result only if we ever bumped into a
          //  special type (or special case where object has own `$types`)
          var typeNames = Object.values(types);
          if (opts.iterateNone) {
            if (typeNames.length) {
              return typeNames[0];
            }
            return Typeson.getJSONType(ret);
          }
          if (typeNames.length) {
            if (opts.returnTypeNames) {
              return _toConsumableArray(new Set(typeNames));
            } // Special if array (or a primitive) was serialized
            //   because JSON would ignore custom `$types` prop on it

            if (!ret || !isPlainObject(ret) ||
            // Also need to handle if this is an object with its
            //   own `$types` property (to avoid ambiguity)
            hasOwn$1.call(ret, '$types')) {
              ret = {
                $: ret,
                $types: {
                  $: types
                }
              };
            } else {
              ret.$types = types;
            } // No special types
          } else if (isObject(ret) && hasOwn$1.call(ret, '$types')) {
            ret = {
              $: ret,
              $types: true
            };
          }
          if (opts.returnTypeNames) {
            return false;
          }
          return ret;
        }
        /**
         *
         * @param {Any} ret
         * @param {GenericArray} promisesData
         * @returns {Promise<Any>}
         */

        function checkPromises(_x, _x2) {
          return _checkPromises.apply(this, arguments);
        }
        /**
         *
         * @param {object} stateObj
         * @param {object} ownKeysObj
         * @param {function} cb
         * @returns {undefined}
         */

        function _checkPromises() {
          _checkPromises = _asyncToGenerator( /*#__PURE__*/
          _regeneratorRuntime().mark(function _callee2(ret, promisesData) {
            var promResults;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return Promise.all(promisesData.map(function (pd) {
                      return pd[1].p;
                    }));
                  case 2:
                    promResults = _context2.sent;
                    _context2.next = 5;
                    return Promise.all(promResults.map( /*#__PURE__*/
                    function () {
                      var _ref = _asyncToGenerator( /*#__PURE__*/
                      _regeneratorRuntime().mark(function _callee(promResult) {
                        var newPromisesData, _promisesData$splice, _promisesData$splice2, prData, _prData, keyPath, cyclic, stateObj, parentObj, key, detectedType, encaps, isTypesonPromise, encaps2;
                        return _regeneratorRuntime().wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                newPromisesData = [];
                                _promisesData$splice = promisesData.splice(0, 1), _promisesData$splice2 = _slicedToArray(_promisesData$splice, 1), prData = _promisesData$splice2[0];
                                _prData = _slicedToArray(prData, 7), keyPath = _prData[0], cyclic = _prData[2], stateObj = _prData[3], parentObj = _prData[4], key = _prData[5], detectedType = _prData[6];
                                encaps = _encapsulate(keyPath, promResult, cyclic, stateObj, newPromisesData, true, detectedType);
                                isTypesonPromise = hasConstructorOf(encaps, TypesonPromise); // Handle case where an embedded custom type itself
                                //   returns a `Typeson.Promise`

                                if (!(keyPath && isTypesonPromise)) {
                                  _context.next = 11;
                                  break;
                                }
                                _context.next = 8;
                                return encaps.p;
                              case 8:
                                encaps2 = _context.sent;
                                parentObj[key] = encaps2;
                                return _context.abrupt("return", checkPromises(ret, newPromisesData));
                              case 11:
                                if (keyPath) {
                                  parentObj[key] = encaps;
                                } else if (isTypesonPromise) {
                                  ret = encaps.p;
                                } else {
                                  // If this is itself a `Typeson.Promise` (because the
                                  //   original value supplied was a `Promise` or
                                  //   because the supplied custom type value resolved
                                  //   to one), returning it below will be fine since
                                  //   a `Promise` is expected anyways given current
                                  //   config (and if not a `Promise`, it will be ready
                                  //   as the resolve value)
                                  ret = encaps;
                                }
                                return _context.abrupt("return", checkPromises(ret, newPromisesData));
                              case 13:
                              case "end":
                                return _context.stop();
                            }
                          }
                        }, _callee);
                      }));
                      return function (_x3) {
                        return _ref.apply(this, arguments);
                      };
                    }()));
                  case 5:
                    return _context2.abrupt("return", ret);
                  case 6:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));
          return _checkPromises.apply(this, arguments);
        }
        function _adaptBuiltinStateObjectProperties(stateObj, ownKeysObj, cb) {
          Object.assign(stateObj, ownKeysObj);
          var vals = internalStateObjPropsToIgnore.map(function (prop) {
            var tmp = stateObj[prop];
            delete stateObj[prop];
            return tmp;
          }); // eslint-disable-next-line callback-return

          cb();
          internalStateObjPropsToIgnore.forEach(function (prop, i) {
            stateObj[prop] = vals[i];
          });
        }
        /**
         *
         * @param {string} keypath
         * @param {Any} value
         * @param {boolean} cyclic
         * @param {PlainObject} stateObj
         * @param {boolean} promisesData
         * @param {boolean} resolvingTypesonPromise
         * @param {string} detectedType
         * @returns {Any}
         */

        function _encapsulate(keypath, value, cyclic, stateObj, promisesData, resolvingTypesonPromise, detectedType) {
          var ret;
          var observerData = {};
          var $typeof = _typeof(value);
          var runObserver = encapsulateObserver ? function (obj) {
            var type = detectedType || stateObj.type || Typeson.getJSONType(value);
            encapsulateObserver(Object.assign(obj || observerData, {
              keypath: keypath,
              value: value,
              cyclic: cyclic,
              stateObj: stateObj,
              promisesData: promisesData,
              resolvingTypesonPromise: resolvingTypesonPromise,
              awaitingTypesonPromise: hasConstructorOf(value, TypesonPromise)
            }, {
              type: type
            }));
          } : null;
          if (['string', 'boolean', 'number', 'undefined'].includes($typeof)) {
            if (value === undefined || $typeof === 'number' && (isNaN(value) || value === -Infinity || value === Infinity)) {
              if (stateObj.replaced) {
                ret = value;
              } else {
                ret = replace(keypath, value, stateObj, promisesData, false, resolvingTypesonPromise, runObserver);
              }
              if (ret !== value) {
                observerData = {
                  replaced: ret
                };
              }
            } else {
              ret = value;
            }
            if (runObserver) {
              runObserver();
            }
            return ret;
          }
          if (value === null) {
            if (runObserver) {
              runObserver();
            }
            return value;
          }
          if (cyclic && !stateObj.iterateIn && !stateObj.iterateUnsetNumeric && value && _typeof(value) === 'object') {
            // Options set to detect cyclic references and be able
            //   to rewrite them.
            var refIndex = refObjs.indexOf(value);
            if (refIndex < 0) {
              if (cyclic === true) {
                refObjs.push(value);
                refKeys.push(keypath);
              }
            } else {
              types[keypath] = '#';
              if (runObserver) {
                runObserver({
                  cyclicKeypath: refKeys[refIndex]
                });
              }
              return '#' + refKeys[refIndex];
            }
          }
          var isPlainObj = isPlainObject(value);
          var isArr = isArray(value);
          var replaced =
          // Running replace will cause infinite loop as will test
          //   positive again
          (isPlainObj || isArr) && (!that.plainObjectReplacers.length || stateObj.replaced) || stateObj.iterateIn ?
          // Optimization: if plain object and no plain-object
          //   replacers, don't try finding a replacer
          value : replace(keypath, value, stateObj, promisesData, isPlainObj || isArr, null, runObserver);
          var clone;
          if (replaced !== value) {
            ret = replaced;
            observerData = {
              replaced: replaced
            };
          } else {
            // eslint-disable-next-line no-lonely-if
            if (keypath === '' && hasConstructorOf(value, TypesonPromise)) {
              promisesData.push([keypath, value, cyclic, stateObj, undefined, undefined, stateObj.type]);
              ret = value;
            } else if (isArr && stateObj.iterateIn !== 'object' || stateObj.iterateIn === 'array') {
              clone = new Array(value.length);
              observerData = {
                clone: clone
              };
            } else if (!['function', 'symbol'].includes(_typeof(value)) && !('toJSON' in value) && !hasConstructorOf(value, TypesonPromise) && !hasConstructorOf(value, Promise) && !hasConstructorOf(value, ArrayBuffer) || isPlainObj || stateObj.iterateIn === 'object') {
              clone = {};
              if (stateObj.addLength) {
                clone.length = value.length;
              }
              observerData = {
                clone: clone
              };
            } else {
              ret = value; // Only clone vanilla objects and arrays
            }
          }

          if (runObserver) {
            runObserver();
          }
          if (opts.iterateNone) {
            return clone || ret;
          }
          if (!clone) {
            return ret;
          } // Iterate object or array

          if (stateObj.iterateIn) {
            var _loop = function _loop(key) {
              var ownKeysObj = {
                ownKeys: hasOwn$1.call(value, key)
              };
              _adaptBuiltinStateObjectProperties(stateObj, ownKeysObj, function () {
                var kp = keypath + (keypath ? '.' : '') + escapeKeyPathComponent(key);
                var val = _encapsulate(kp, value[key], Boolean(cyclic), stateObj, promisesData, resolvingTypesonPromise);
                if (hasConstructorOf(val, TypesonPromise)) {
                  promisesData.push([kp, val, Boolean(cyclic), stateObj, clone, key, stateObj.type]);
                } else if (val !== undefined) {
                  clone[key] = val;
                }
              });
            };

            // eslint-disable-next-line guard-for-in
            for (var key in value) {
              _loop(key);
            }
            if (runObserver) {
              runObserver({
                endIterateIn: true,
                end: true
              });
            }
          } else {
            // Note: Non-indexes on arrays won't survive stringify so
            //  somewhat wasteful for arrays, but so too is iterating
            //  all numeric indexes on sparse arrays when not wanted
            //  or filtering own keys for positive integers
            keys(value).forEach(function (key) {
              var kp = keypath + (keypath ? '.' : '') + escapeKeyPathComponent(key);
              var ownKeysObj = {
                ownKeys: true
              };
              _adaptBuiltinStateObjectProperties(stateObj, ownKeysObj, function () {
                var val = _encapsulate(kp, value[key], Boolean(cyclic), stateObj, promisesData, resolvingTypesonPromise);
                if (hasConstructorOf(val, TypesonPromise)) {
                  promisesData.push([kp, val, Boolean(cyclic), stateObj, clone, key, stateObj.type]);
                } else if (val !== undefined) {
                  clone[key] = val;
                }
              });
            });
            if (runObserver) {
              runObserver({
                endIterateOwn: true,
                end: true
              });
            }
          } // Iterate array for non-own numeric properties (we can't
          //   replace the prior loop though as it iterates non-integer
          //   keys)

          if (stateObj.iterateUnsetNumeric) {
            var vl = value.length;
            var _loop2 = function _loop2(i) {
              if (!(i in value)) {
                // No need to escape numeric
                var kp = keypath + (keypath ? '.' : '') + i;
                var ownKeysObj = {
                  ownKeys: false
                };
                _adaptBuiltinStateObjectProperties(stateObj, ownKeysObj, function () {
                  var val = _encapsulate(kp, undefined, Boolean(cyclic), stateObj, promisesData, resolvingTypesonPromise);
                  if (hasConstructorOf(val, TypesonPromise)) {
                    promisesData.push([kp, val, Boolean(cyclic), stateObj, clone, i, stateObj.type]);
                  } else if (val !== undefined) {
                    clone[i] = val;
                  }
                });
              }
            };
            for (var i = 0; i < vl; i++) {
              _loop2(i);
            }
            if (runObserver) {
              runObserver({
                endIterateUnsetNumeric: true,
                end: true
              });
            }
          }
          return clone;
        }
        /**
         *
         * @param {string} keypath
         * @param {Any} value
         * @param {PlainObject} stateObj
         * @param {GenericArray} promisesData
         * @param {boolean} plainObject
         * @param {boolean} resolvingTypesonPromise
         * @param {function} [runObserver]
         * @returns {*}
         */

        function replace(keypath, value, stateObj, promisesData, plainObject, resolvingTypesonPromise, runObserver) {
          // Encapsulate registered types
          var replacers = plainObject ? that.plainObjectReplacers : that.nonplainObjectReplacers;
          var i = replacers.length;
          while (i--) {
            var replacer = replacers[i];
            if (replacer.test(value, stateObj)) {
              var type = replacer.type;
              if (that.revivers[type]) {
                // Record the type only if a corresponding reviver
                //   exists. This is to support specs where only
                //   replacement is done.
                // For example, ensuring deep cloning of the object,
                //   or replacing a type to its equivalent without
                //   the need to revive it.
                var existing = types[keypath]; // type can comprise an array of types (see test
                //   "should support intermediate types")

                types[keypath] = existing ? [type].concat(existing) : type;
              }
              Object.assign(stateObj, {
                type: type,
                replaced: true
              });
              if ((sync || !replacer.replaceAsync) && !replacer.replace) {
                if (runObserver) {
                  runObserver({
                    typeDetected: true
                  });
                }
                return _encapsulate(keypath, value, cyclic && 'readonly', stateObj, promisesData, resolvingTypesonPromise, type);
              }
              if (runObserver) {
                runObserver({
                  replacing: true
                });
              } // Now, also traverse the result in case it contains its
              //   own types to replace

              var replaceMethod = sync || !replacer.replaceAsync ? 'replace' : 'replaceAsync';
              return _encapsulate(keypath, replacer[replaceMethod](value, stateObj), cyclic && 'readonly', stateObj, promisesData, resolvingTypesonPromise, type);
            }
          }
          return value;
        }
        return promisesDataRoot.length ? sync && opts.throwOnBadSyncType ? function () {
          throw new TypeError('Sync method requested but async result obtained');
        }() : Promise.resolve(checkPromises(ret, promisesDataRoot)).then(finish) : !sync && opts.throwOnBadSyncType ? function () {
          throw new TypeError('Async method requested but sync result obtained');
        }() // If this is a synchronous request for stringification, yet
        //   a promise is the result, we don't want to resolve leading
        //   to an async result, so we return an array to avoid
        //   ambiguity
        : opts.stringification && sync ? [finish(ret)] : sync ? finish(ret) : Promise.resolve(finish(ret));
      }
      /**
       * Also sync but throws on non-sync result.
       * @param {*} obj
       * @param {object} stateObj
       * @param {object} opts
       * @returns {*}
       */
    }, {
      key: "encapsulateSync",
      value: function encapsulateSync(obj, stateObj, opts) {
        return this.encapsulate(obj, stateObj, _objectSpread2({
          throwOnBadSyncType: true
        }, opts, {
          sync: true
        }));
      }
      /**
       * @param {*} obj
       * @param {object} stateObj
       * @param {object} opts
       * @returns {*}
       */
    }, {
      key: "encapsulateAsync",
      value: function encapsulateAsync(obj, stateObj, opts) {
        return this.encapsulate(obj, stateObj, _objectSpread2({
          throwOnBadSyncType: true
        }, opts, {
          sync: false
        }));
      }
      /**
       * Revive an encapsulated object.
       * This method is used internally by `Typeson.parse()`.
       * @param {object} obj - Object to revive. If it has `$types` member, the
       *   properties that are listed there will be replaced with its true type
       *   instead of just plain objects.
       * @param {object} opts
       * @throws TypeError If mismatch between sync/async type and result
       * @returns {Promise|*} If async, returns a Promise that resolves to `*`
       */
    }, {
      key: "revive",
      value: function revive(obj, opts) {
        var types = obj && obj.$types; // No type info added. Revival not needed.

        if (!types) {
          return obj;
        } // Object happened to have own `$types` property but with
        //   no actual types, so we unescape and return that object

        if (types === true) {
          return obj.$;
        }
        opts = _objectSpread2({
          sync: true
        }, this.options, {}, opts);
        var _opts3 = opts,
          sync = _opts3.sync;
        var keyPathResolutions = [];
        var stateObj = {};
        var ignore$Types = true; // Special when root object is not a trivial Object, it will
        //   be encapsulated in `$`. It will also be encapsulated in
        //   `$` if it has its own `$` property to avoid ambiguity

        if (types.$ && isPlainObject(types.$)) {
          obj = obj.$;
          types = types.$;
          ignore$Types = false;
        }
        var that = this;
        /**
         * @callback RevivalReducer
         * @param {Any} value
         * @param {string} type
         * @returns {Any}
         */

        /**
         *
         * @param {string} type
         * @param {Any} val
         * @returns {[type]} [description]
         */

        function executeReviver(type, val) {
          var _ref2 = that.revivers[type] || [],
            _ref3 = _slicedToArray(_ref2, 1),
            reviver = _ref3[0];
          if (!reviver) {
            throw new Error('Unregistered type: ' + type);
          } // Only `sync` expected here, as problematic async would
          //  be missing both `reviver` and `reviverAsync`, and
          //  encapsulation shouldn't have added types, so
          //  should have made an early exit

          if (sync && !('revive' in reviver)) {
            // Just return value as is
            return val;
          }
          return reviver[sync && reviver.revive ? 'revive' : !sync && reviver.reviveAsync ? 'reviveAsync' : 'revive'](val, stateObj);
        }
        /**
         *
         * @returns {void|TypesonPromise<void>}
         */

        function revivePlainObjects() {
          // const references = [];
          // const reviveTypes = [];
          var plainObjectTypes = [];
          Object.entries(types).forEach(function (_ref4) {
            var _ref5 = _slicedToArray(_ref4, 2),
              keypath = _ref5[0],
              type = _ref5[1];
            if (type === '#') {
              /*
              references.push({
                  keypath,
                  reference: getByKeyPath(obj, keypath)
              });
              */
              return;
            }
            [].concat(type).forEach(function (type) {
              var _ref6 = that.revivers[type] || [null, {}],
                _ref7 = _slicedToArray(_ref6, 2),
                plain = _ref7[1].plain;
              if (!plain) {
                // reviveTypes.push({keypath, type});
                return;
              }
              plainObjectTypes.push({
                keypath: keypath,
                type: type
              });
              delete types[keypath]; // Avoid repeating
            });
          });

          if (!plainObjectTypes.length) {
            return undefined;
          } // console.log(plainObjectTypes.sort(nestedPathsFirst));

          /**
          * @typedef {PlainObject} PlainObjectType
          * @property {string} keypath
          * @property {string} type
          */

          return plainObjectTypes.sort(nestedPathsFirst).reduce(function reducer(possibleTypesonPromise, _ref8) {
            var keypath = _ref8.keypath,
              type = _ref8.type;
            if (isThenable(possibleTypesonPromise)) {
              return possibleTypesonPromise.then(function (val) {
                return reducer(val, {
                  keypath: keypath,
                  type: type
                });
              });
            } // console.log('obj', JSON.stringify(keypath), obj);

            var val = getByKeyPath(obj, keypath);
            val = executeReviver(type, val);
            if (hasConstructorOf(val, TypesonPromise)) {
              return val.then(function (v) {
                var newVal = setAtKeyPath(obj, keypath, v);
                if (newVal === v) {
                  obj = newVal;
                }
                return undefined;
              });
            }
            var newVal = setAtKeyPath(obj, keypath, val);
            if (newVal === val) {
              obj = newVal;
            }
            return undefined;
          }, undefined // This argument must be explicit
          ); // references.forEach(({keypath, reference}) => {});
          // reviveTypes.sort(nestedPathsFirst).forEach(() => {});
        }

        var revivalPromises = [];
        /**
         *
         * @param {string} keypath
         * @param {Any} value
         * @param {?(Array|object)} target
         * @param {Array|object} [clone]
         * @param {string} [key]
         * @returns {Any}
         */

        function _revive(keypath, value, target, clone, key) {
          if (ignore$Types && keypath === '$types') {
            return undefined;
          }
          var type = types[keypath];
          var isArr = isArray(value);
          if (isArr || isPlainObject(value)) {
            var _clone = isArr ? new Array(value.length) : {}; // Iterate object or array

            keys(value).forEach(function (k) {
              var val = _revive(keypath + (keypath ? '.' : '') + escapeKeyPathComponent(k), value[k], target || _clone, _clone, k);
              var set = function set(v) {
                if (hasConstructorOf(v, Undefined)) {
                  _clone[k] = undefined;
                } else if (v !== undefined) {
                  _clone[k] = v;
                }
                return v;
              };
              if (hasConstructorOf(val, TypesonPromise)) {
                revivalPromises.push(val.then(function (ret) {
                  return set(ret);
                }));
              } else {
                set(val);
              }
            });
            value = _clone; // Try to resolve cyclic reference as soon as available

            while (keyPathResolutions.length) {
              var _keyPathResolutions$ = _slicedToArray(keyPathResolutions[0], 4),
                _target = _keyPathResolutions$[0],
                keyPath = _keyPathResolutions$[1],
                _clone2 = _keyPathResolutions$[2],
                k = _keyPathResolutions$[3];
              var val = getByKeyPath(_target, keyPath); // Typeson.Undefined not expected here as not cyclic or
              //   `undefined`

              if (val !== undefined) {
                _clone2[k] = val;
              } else {
                break;
              }
              keyPathResolutions.splice(0, 1);
            }
          }
          if (!type) {
            return value;
          }
          if (type === '#') {
            var _ret = getByKeyPath(target, value.slice(1));
            if (_ret === undefined) {
              // Cyclic reference not yet available
              keyPathResolutions.push([target, value.slice(1), clone, key]);
            }
            return _ret;
          } // `type` can be an array here

          return [].concat(type).reduce(function reducer(val, typ) {
            if (hasConstructorOf(val, TypesonPromise)) {
              return val.then(function (v) {
                // TypesonPromise here too
                return reducer(v, typ);
              });
            }
            return executeReviver(typ, val);
          }, value);
        }
        /**
         *
         * @param {Any} retrn
         * @returns {undefined|Any}
         */

        function checkUndefined(retrn) {
          return hasConstructorOf(retrn, Undefined) ? undefined : retrn;
        }
        var possibleTypesonPromise = revivePlainObjects();
        var ret;
        if (hasConstructorOf(possibleTypesonPromise, TypesonPromise)) {
          ret = possibleTypesonPromise.then(function () {
            return obj;
          });
        } else {
          ret = _revive('', obj, null);
          if (revivalPromises.length) {
            // Ensure children resolved
            ret = TypesonPromise.resolve(ret).then(function (r) {
              return TypesonPromise.all([
              // May be a TypesonPromise or not
              r].concat(revivalPromises));
            }).then(function (_ref9) {
              var _ref10 = _slicedToArray(_ref9, 1),
                r = _ref10[0];
              return r;
            });
          }
        }
        return isThenable(ret) ? sync && opts.throwOnBadSyncType ? function () {
          throw new TypeError('Sync method requested but async result obtained');
        }() : hasConstructorOf(ret, TypesonPromise) ? ret.p.then(checkUndefined) : ret : !sync && opts.throwOnBadSyncType ? function () {
          throw new TypeError('Async method requested but sync result obtained');
        }() : sync ? checkUndefined(ret) : Promise.resolve(checkUndefined(ret));
      }
      /**
       * Also sync but throws on non-sync result.
       * @param {Any} obj
       * @param {object} opts
       * @returns {Any}
       */
    }, {
      key: "reviveSync",
      value: function reviveSync(obj, opts) {
        return this.revive(obj, _objectSpread2({
          throwOnBadSyncType: true
        }, opts, {
          sync: true
        }));
      }
      /**
      * @param {Any} obj
      * @param {object} opts
      * @returns {Promise} Resolves to `*`
      */
    }, {
      key: "reviveAsync",
      value: function reviveAsync(obj, opts) {
        return this.revive(obj, _objectSpread2({
          throwOnBadSyncType: true
        }, opts, {
          sync: false
        }));
      }
      /**
       * Register types.
       * For examples on how to use this method, see
       *   {@link https://github.com/dfahlander/typeson-registry/tree/master/types}.
       * @param {object.<string,Function[]>[]} typeSpecSets - Types and
       *   their functions [test, encapsulate, revive];
       * @param {object} opts
       * @returns {Typeson}
       */
    }, {
      key: "register",
      value: function register(typeSpecSets, opts) {
        opts = opts || {};
        [].concat(typeSpecSets).forEach(function R(typeSpec) {
          var _this = this;

          // Allow arrays of arrays of arrays...
          if (isArray(typeSpec)) {
            return typeSpec.map(function (typSpec) {
              return R.call(_this, typSpec);
            });
          }
          typeSpec && keys(typeSpec).forEach(function (typeId) {
            if (typeId === '#') {
              throw new TypeError('# cannot be used as a type name as it is reserved ' + 'for cyclic objects');
            } else if (Typeson.JSON_TYPES.includes(typeId)) {
              throw new TypeError('Plain JSON object types are reserved as type names');
            }
            var spec = typeSpec[typeId];
            var replacers = spec && spec.testPlainObjects ? this.plainObjectReplacers : this.nonplainObjectReplacers;
            var existingReplacer = replacers.filter(function (r) {
              return r.type === typeId;
            });
            if (existingReplacer.length) {
              // Remove existing spec and replace with this one.
              replacers.splice(replacers.indexOf(existingReplacer[0]), 1);
              delete this.revivers[typeId];
              delete this.types[typeId];
            }
            if (typeof spec === 'function') {
              // Support registering just a class without replacer/reviver
              var Class = spec;
              spec = {
                test: function test(x) {
                  return x && x.constructor === Class;
                },
                replace: function replace(x) {
                  return _objectSpread2({}, x);
                },
                revive: function revive(x) {
                  return Object.assign(Object.create(Class.prototype), x);
                }
              };
            } else if (isArray(spec)) {
              var _spec = spec,
                _spec2 = _slicedToArray(_spec, 3),
                test = _spec2[0],
                replace = _spec2[1],
                revive = _spec2[2];
              spec = {
                test: test,
                replace: replace,
                revive: revive
              };
            }
            if (!spec || !spec.test) {
              return;
            }
            var replacerObj = {
              type: typeId,
              test: spec.test.bind(spec)
            };
            if (spec.replace) {
              replacerObj.replace = spec.replace.bind(spec);
            }
            if (spec.replaceAsync) {
              replacerObj.replaceAsync = spec.replaceAsync.bind(spec);
            }
            var start = typeof opts.fallback === 'number' ? opts.fallback : opts.fallback ? 0 : Infinity;
            if (spec.testPlainObjects) {
              this.plainObjectReplacers.splice(start, 0, replacerObj);
            } else {
              this.nonplainObjectReplacers.splice(start, 0, replacerObj);
            } // Todo: We might consider a testAsync type

            if (spec.revive || spec.reviveAsync) {
              var reviverObj = {};
              if (spec.revive) {
                reviverObj.revive = spec.revive.bind(spec);
              }
              if (spec.reviveAsync) {
                reviverObj.reviveAsync = spec.reviveAsync.bind(spec);
              }
              this.revivers[typeId] = [reviverObj, {
                plain: spec.testPlainObjects
              }];
            } // Record to be retrieved via public types property.

            this.types[typeId] = spec;
          }, this);
        }, this);
        return this;
      }
    }]);
    return Typeson;
  }();
  /**
   * We keep this function minimized so if using two instances of this
   * library, where one is minimized and one is not, it will still work
   * with `hasConstructorOf`.
   * @class
   */

  var Undefined = function Undefined() {
    _classCallCheck(this, Undefined);
  }; // eslint-disable-line space-before-blocks

  Undefined.__typeson__type__ = 'TypesonUndefined'; // The following provide classes meant to avoid clashes with other values
  // To insist `undefined` should be added

  Typeson.Undefined = Undefined; // To support async encapsulation/stringification

  Typeson.Promise = TypesonPromise; // Some fundamental type-checking utilities

  Typeson.isThenable = isThenable;
  Typeson.toStringTag = toStringTag;
  Typeson.hasConstructorOf = hasConstructorOf;
  Typeson.isObject = isObject;
  Typeson.isPlainObject = isPlainObject;
  Typeson.isUserObject = isUserObject;
  Typeson.escapeKeyPathComponent = escapeKeyPathComponent;
  Typeson.unescapeKeyPathComponent = unescapeKeyPathComponent;
  Typeson.getByKeyPath = getByKeyPath;
  Typeson.getJSONType = getJSONType;
  Typeson.JSON_TYPES = ['null', 'boolean', 'number', 'string', 'array', 'object'];
  return Typeson;
});

/***/ }),

/***/ "dexie":
/*!************************!*\
  !*** external "dexie" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_dexie__;

/***/ }),

/***/ "?bb00":
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (function() {

/* (ignored) */

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
var exports = __webpack_exports__;
/*!***************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/dexie-encrypted-virtual-e7644758b0/4/.yarn/berry/cache/dexie-encrypted-npm-1.2.2-83d274323c-10c0.zip/node_modules/dexie-encrypted/dist/index.js ***!
  \***************************************************************************************************************************************************************************/


function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
function _interopDefault(ex) {
  return ex && _typeof(ex) === 'object' && 'default' in ex ? ex['default'] : ex;
}
var Dexie = _interopDefault(__webpack_require__(/*! dexie */ "dexie"));
var nacl = _interopDefault(__webpack_require__(/*! tweetnacl */ "../../../.yarn/berry/cache/tweetnacl-npm-1.0.3-b7eef04660-10c0.zip/node_modules/tweetnacl/nacl-fast.js"));
var Typeson = _interopDefault(__webpack_require__(/*! typeson */ "./.yarn/__virtual__/typeson-virtual-5b28fe396c/4/.yarn/berry/cache/typeson-npm-5.18.2-176b9d4ed8-10c0.zip/node_modules/typeson/dist/typeson.js"));
var builtinTypes = _interopDefault(__webpack_require__(/*! typeson-registry/presets/builtin */ "../../../.yarn/berry/cache/typeson-registry-npm-1.0.0-alpha.38-9e856b1ea8-10c0.zip/node_modules/typeson-registry/presets/builtin.js"));

// Import some usable helper functions
var override = Dexie.override;
var _Promise = Dexie.Promise;
var tableEncryptionOptions = {
  DATA: 'NON_INDEXED_FIELDS',
  NON_INDEXED_FIELDS: 'NON_INDEXED_FIELDS',
  // DATA_AND_INDICES: 'DATA_AND_INDICES', // not implemented.
  WHITELIST: 'WHITELIST',
  BLACKLIST: 'BLACKLIST'
};
var cryptoOptions = tableEncryptionOptions;

/* options example: 
{
	table1: cryptoOptions.NON_INDEXED_FIELDS,
	table2: {
		type: cryptoOptions.WHITELIST,
		fields: ['harmlessData1', 'harmlessId']
	},
	table3: {
		type: cryptoOptions.BLACKLIST,
		fields: ['sensitiveField1', 'sensitiveField2']
	}
}
*/

var tson = new Typeson().register([builtinTypes]);
function overrideParseStoresSpec(origFunc) {
  return function (stores, dbSchema) {
    stores._encryptionSettings = '++id';
    origFunc.call(this, stores, dbSchema);
  };
}
function compareArrays(a, b) {
  if (a.length !== b.length) {
    return false;
  }
  for (var i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
}
var encoder = new TextEncoder();
var decoder = new TextDecoder();
function encryptObject(key, object, nonce) {
  nonce = nonce || nacl.randomBytes(nacl.secretbox.nonceLength);
  var stringToEncrypt = tson.stringify(object);
  var encoded = encoder.encode(stringToEncrypt);
  var encrypted = nacl.secretbox(encoded, nonce, key);
  var data = new Uint8Array(nonce.length + encrypted.length);
  data.set(nonce);
  data.set(encrypted, nonce.length);
  return data;
}

// this prevents changing the shape of the object so
// the underlying engine can optimize the hidden class
function hideValue(input) {
  switch (_typeof(input)) {
    case 'number':
      return 0;
    case 'string':
      return '';
    case 'boolean':
      return false;
    case 'undefined':
      return undefined;
    case 'symbol':
      return undefined;
  }
  return {};
}
function encrypt(db, keyOrPromise, cryptoSettings, onKeyChange, nonceOverride) {
  var keyPromise;
  if (keyOrPromise.then) {
    keyPromise = keyOrPromise;
  } else if (keyOrPromise instanceof Uint8Array && keyOrPromise.length === 32) {
    keyPromise = Dexie.Promise.resolve(keyOrPromise);
  } else {
    throw new Error('Dexie-encrypted requires a UInt8Array of length 32 for a encryption key.');
  }
  db.Version.prototype._parseStoresSpec = override(db.Version.prototype._parseStoresSpec, overrideParseStoresSpec);
  if (db.verno > 0) {
    // Make sure new tables are added if calling encrypt after defining versions.
    try {
      db.version(db.verno).stores({});
    } catch (error) {
      throw new Error('Dexie-encrypt: The call to encrypt() cannot be done on an open database');
    }
  }
  function encryptWithRule(table, entity, rule) {
    if (rule === undefined) {
      return entity;
    }
    var toEncrypt = {};
    if (rule.type === cryptoOptions.BLACKLIST) {
      for (var i = 0; i < rule.fields.length; i++) {
        toEncrypt[rule.fields[i]] = entity[rule.fields[i]];
        entity[rule.fields[i]] = hideValue(entity[rule.fields[i]]);
      }
    } else {
      var indices = table.schema.indexes.map(function (index) {
        return index.name;
      });
      var whitelist = rule.type === cryptoOptions.WHITELIST ? rule.fields : [];
      for (var _key in entity) {
        if (_key !== table.schema.primKey.name && entity.hasOwnProperty(_key) && indices.includes(_key) === false && whitelist.includes(_key) === false) {
          toEncrypt[_key] = entity[_key];
          entity[_key] = hideValue(entity[_key]);
        }
      }
    }
    entity.__encryptedData = encryptObject(key, toEncrypt, nonceOverride);
    return entity;
  }
  function decryptWithRule(entity, rule) {
    if (rule === undefined) {
      return entity;
    }
    if (entity && entity.__encryptedData) {
      var nonce = entity.__encryptedData.slice(0, nacl.secretbox.nonceLength);
      var message = entity.__encryptedData.slice(nacl.secretbox.nonceLength, entity.__encryptedData.length);
      var rawDecrypted = nacl.secretbox.open(message, nonce, key);
      var stringified = decoder.decode(rawDecrypted);
      var decrypted = tson.parse(stringified);
      var toReturn = {};
      for (var k in entity) {
        if (decrypted.hasOwnProperty(k)) {
          toReturn[k] = decrypted[k];
        } else if (entity.hasOwnProperty(k) && k !== '__encryptedData') {
          toReturn[k] = entity[k];
        }
      }
      return toReturn;
    }
    return entity;
  }
  var key;
  db.on('ready', function () {
    var encryptionSettings;
    try {
      encryptionSettings = db.table('_encryptionSettings');
    } catch (error) {
      throw new Error("Dexie-encrypted can't find its encryption table. You may need to bump your database version.");
    }
    return keyPromise.then(function (receivedKey) {
      if (receivedKey instanceof Uint8Array && receivedKey.length === 32) {
        key = receivedKey;
      } else {
        throw new Error('Dexie-encrypted requires a UInt8Array of length 32 for a encryption key.');
      }
    }).then(function () {
      return encryptionSettings.toCollection().last().then(function (oldSettings) {
        var changeDetectionObj = oldSettings ? oldSettings['__key_change_detection'] : null;
        var onKeyChangeResult;
        var keyChangePromise = _Promise.resolve();
        if (changeDetectionObj) {
          var nonce = changeDetectionObj.slice(0, nacl.secretbox.nonceLength);
          var message = changeDetectionObj.slice(nacl.secretbox.nonceLength, changeDetectionObj.length);
          var rawDecrypted = nacl.secretbox.open(message, nonce, key);
          if (!rawDecrypted) {
            // The key has changed. Let's call the handler
            onKeyChangeResult = onKeyChange(db);
            keyChangePromise = onKeyChangeResult.then ? onKeyChangeResult : new _Promise(function (resolve) {
              resolve(onKeyChangeResult);
            });
          }
        }
        return keyChangePromise.then(function () {
          return _Promise.all(db.tables.map(function (table) {
            var oldSetting = oldSettings ? oldSettings[table.name] : undefined;
            var newSetting = cryptoSettings[table.name];
            function setupHooks() {
              if (newSetting === undefined) {
                return;
              }
              table.hook('creating', function (primKey, obj) {
                var preservedValue = _objectSpread({}, obj);
                encryptWithRule(table, obj, newSetting);
                this.onsuccess = function () {
                  delete obj.__encryptedData;
                  Object.assign(obj, preservedValue);
                };
                this.onerror = function () {
                  delete obj.__encryptedData;
                  Object.assign(obj, preservedValue);
                };
              });
              table.hook('updating', function (modifications) {
                var encrypted = encryptWithRule(table, _objectSpread({}, this.value), newSetting);
                return encrypted;
              });
              table.hook('reading', function (obj) {
                return decryptWithRule(obj, newSetting);
              });
            }
            if (oldSetting === newSetting) {
              // no upgrade needed.
              setupHooks();
              return;
            }
            if (oldSetting === undefined || newSetting === undefined) ;else if (typeof oldSetting !== 'string' && typeof newSetting !== 'string') {
              // both non-strings. Figure out if they're the same.
              if (newSetting.type === oldSetting.type) {
                if (compareArrays(newSetting.fields, oldSetting.fields)) {
                  // no upgrade needed.
                  setupHooks();
                  return;
                }
              }
            }
            return table.toCollection().modify(function (entity, ref) {
              var decrypted = decryptWithRule(entity, oldSetting);
              ref.value = encryptWithRule(table, decrypted, newSetting);
              return true;
            }).then(setupHooks);
          }));
        });
      }).then(function () {
        return encryptionSettings.clear();
      }).then(function () {
        return encryptionSettings.put(_objectSpread({
          __key_change_detection: encryptObject(key, [1, 2, 3, 4, 5], new Uint8Array(24))
        }, cryptoSettings));
      })["catch"](function (error) {
        if (error.name === 'NotFoundError') {
          throw new Error("Dexie-encrypted can't find its encryption table. You may need to bump your database version.");
        } else {
          return _Promise.reject(error);
        }
      });
    });
  });
}
function clearAllTables(db) {
  return _Promise.all(db.tables.map(function (table) {
    return table.clear();
  }));
}
function clearEncryptedTables(_x) {
  return _clearEncryptedTables.apply(this, arguments);
}
function _clearEncryptedTables() {
  _clearEncryptedTables = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(db) {
    var encryptionSettings, promises;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return db.table('_encryptionSettings').toCollection().last();
        case 3:
          encryptionSettings = _context2.sent;
          _context2.next = 9;
          break;
        case 6:
          _context2.prev = 6;
          _context2.t0 = _context2["catch"](0);
          throw new Error("Dexie-encrypted can't find its encryption table. You may need to bump your database version.");
        case 9:
          promises = Object.keys(encryptionSettings).map( /*#__PURE__*/function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(key) {
              var encryptionSettingValue;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    encryptionSettingValue = encryptionSettings[key];
                    if (!tableEncryptionOptions[encryptionSettingValue]) {
                      _context.next = 4;
                      break;
                    }
                    _context.next = 4;
                    return db.table(key).clear();
                  case 4:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            }));
            return function (_x2) {
              return _ref.apply(this, arguments);
            };
          }());
          return _context2.abrupt("return", _Promise.all(promises));
        case 11:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 6]]);
  }));
  return _clearEncryptedTables.apply(this, arguments);
}
Object.assign(encrypt, cryptoOptions, {
  clearAllTables: clearAllTables,
  clearEncryptedTables: clearEncryptedTables
});
exports.clearAllTables = clearAllTables;
exports.clearEncryptedTables = clearEncryptedTables;
exports.cryptoOptions = cryptoOptions;
exports["default"] = encrypt;
exports.tableEncryptionOptions = tableEncryptionOptions;
}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});