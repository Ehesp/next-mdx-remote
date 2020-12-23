'use strict'

var mdx = require('@mdx-js/mdx')
var core = require('@babel/core')
var presetMinify = require('babel-preset-minify')
var t = require('@babel/types')

function _interopDefaultLegacy(e) {
  return e && typeof e === 'object' && 'default' in e ? e : { default: e }
}

var mdx__default = /*#__PURE__*/ _interopDefaultLegacy(mdx)
var presetMinify__default = /*#__PURE__*/ _interopDefaultLegacy(presetMinify)

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function () {
  __assign =
    Object.assign ||
    function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i]
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]
      }
      return t
    }
  return __assign.apply(this, arguments)
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P
      ? value
      : new P(function (resolve) {
          resolve(value)
        })
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value))
      } catch (e) {
        reject(e)
      }
    }
    function rejected(value) {
      try {
        step(generator['throw'](value))
      } catch (e) {
        reject(e)
      }
    }
    function step(result) {
      result.done
        ? resolve(result.value)
        : adopt(result.value).then(fulfilled, rejected)
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next())
  })
}

function __generator(thisArg, body) {
  var _ = {
      label: 0,
      sent: function () {
        if (t[0] & 1) throw t[1]
        return t[1]
      },
      trys: [],
      ops: [],
    },
    f,
    y,
    t,
    g
  return (
    (g = { next: verb(0), throw: verb(1), return: verb(2) }),
    typeof Symbol === 'function' &&
      (g[Symbol.iterator] = function () {
        return this
      }),
    g
  )
  function verb(n) {
    return function (v) {
      return step([n, v])
    }
  }
  function step(op) {
    if (f) throw new TypeError('Generator is already executing.')
    while (_)
      try {
        if (
          ((f = 1),
          y &&
            (t =
              op[0] & 2
                ? y['return']
                : op[0]
                ? y['throw'] || ((t = y['return']) && t.call(y), 0)
                : y.next) &&
            !(t = t.call(y, op[1])).done)
        )
          return t
        if (((y = 0), t)) op = [op[0] & 2, t.value]
        switch (op[0]) {
          case 0:
          case 1:
            t = op
            break
          case 4:
            _.label++
            return { value: op[1], done: false }
          case 5:
            _.label++
            y = op[1]
            op = [0]
            continue
          case 7:
            op = _.ops.pop()
            _.trys.pop()
            continue
          default:
            if (
              !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
              (op[0] === 6 || op[0] === 2)
            ) {
              _ = 0
              continue
            }
            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
              _.label = op[1]
              break
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1]
              t = op
              break
            }
            if (t && _.label < t[2]) {
              _.label = t[2]
              _.ops.push(op)
              break
            }
            if (t[2]) _.ops.pop()
            _.trys.pop()
            continue
        }
        op = body.call(thisArg, _)
      } catch (e) {
        op = [6, e]
        y = 0
      } finally {
        f = t = 0
      }
    if (op[0] & 5) throw op[1]
    return { value: op[0] ? op[1] : void 0, done: true }
  }
}

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = void 0

var _helperPluginUtils = require('@babel/helper-plugin-utils')

var _pluginTransformReactJsx = _interopRequireDefault(
  require('@babel/plugin-transform-react-jsx')
)

var _pluginTransformReactJsxDevelopment = _interopRequireDefault(
  require('@babel/plugin-transform-react-jsx-development')
)

var _pluginTransformReactDisplayName = _interopRequireDefault(
  require('@babel/plugin-transform-react-display-name')
)

var _pluginTransformReactPureAnnotations = _interopRequireDefault(
  require('@babel/plugin-transform-react-pure-annotations')
)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

var _default = (0, _helperPluginUtils.declare)((api, opts) => {
  api.assertVersion(7)
  let { pragma, pragmaFrag } = opts
  const {
    pure,
    throwIfNamespace = true,
    runtime = 'classic',
    importSource,
  } = opts

  if (runtime === 'classic') {
    pragma = pragma || 'React.createElement'
    pragmaFrag = pragmaFrag || 'React.Fragment'
  }

  const development = !!opts.development
  return {
    plugins: [
      [
        development
          ? _pluginTransformReactJsxDevelopment.default
          : _pluginTransformReactJsx.default,
        {
          importSource,
          pragma,
          pragmaFrag,
          runtime,
          throwIfNamespace,
          pure,
          useBuiltIns: !!opts.useBuiltIns,
          useSpread: opts.useSpread,
        },
      ],
      _pluginTransformReactDisplayName.default,
      pure !== false && _pluginTransformReactPureAnnotations.default,
    ].filter(Boolean),
  }
})

exports.default = _default

var presetReact = /*#__PURE__*/ Object.freeze({
  __proto__: null,
})

function BabelPluginMdxBrowser() {
  return {
    visitor: {
      // Remove all imports, we will add these to scope manually
      ImportDeclaration: function (path) {
        path.remove()
      },
      // The `makeShortcode` template is nice for error handling but we
      // don't need it here as we are manually injecting dependencies
      VariableDeclaration: function (path) {
        var _a, _b, _c, _d, _e
        if (path.node.declarations[0].id.name === 'makeShortcode') {
          path.remove()
        }
        // this removes any variable that is set using the `makeShortcode` function
        if (
          ((_e =
            (_d =
              (_c =
                (_b =
                  (_a = path.node) === null || _a === void 0
                    ? void 0
                    : _a.declarations) === null || _b === void 0
                  ? void 0
                  : _b[0]) === null || _c === void 0
                ? void 0
                : _c.init) === null || _d === void 0
              ? void 0
              : _d.callee) === null || _e === void 0
            ? void 0
            : _e.name) === 'makeShortcode'
        ) {
          path.remove()
        }
      },
      // Add `components.` to every custom component. That way components that are outside
      // the MDX file can be rendered by using the components object
      JSXIdentifier: function (path) {
        if (
          path.node.name[0] === path.node.name[0].toUpperCase() &&
          path.node.name !== 'MDXLayout' &&
          (path.parentPath.isJSXOpeningElement() ||
            path.parentPath.isJSXClosingElement())
        ) {
          path.replaceWith(
            t.jsxMemberExpression(t.jsxIdentifier('components'), path.node)
          )
        }
      },
    },
  }
}

function serialize(source, _a) {
  var _b
  var mdxOptions = _a.mdxOptions
  return __awaiter(this, void 0, void 0, function () {
    var code, file
    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          return [
            4 /*yield*/,
            mdx__default['default'](
              source,
              __assign(__assign({}, mdxOptions || {}), { skipExport: true })
            ),
            // Transform ES6 code into browser compatible code with Babel
          ]
        case 1:
          code = _c.sent()
          return [
            4 /*yield*/,
            core.transformAsync(code, {
              presets: [
                [presetReact, { useBuiltIns: true }],
                presetMinify__default['default'],
              ],
              plugins: [BabelPluginMdxBrowser],
              configFile: false,
            }),
            // Stripe out any first line comments
          ]
        case 2:
          file = _c.sent()
          // Stripe out any first line comments
          return [
            2 /*return*/,
            (_b = file.code) === null || _b === void 0
              ? void 0
              : _b.replace(/^\/\*.*\*\//, ''),
          ]
      }
    })
  })
}

module.exports = serialize
