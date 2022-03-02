(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["PDFAnnotateRender"] = factory();
	else
		root["PDFAnnotateRender"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _adapter_StoreAdapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _adapter_LocalStoreAdapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);
/* harmony import */ var _adapter_LocalUserStoreAdapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20);
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(23);
/* harmony import */ var _utils_uuid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(18);
/* harmony import */ var _UI_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5);









/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  findAnnotationAtPoint: _UI_utils__WEBPACK_IMPORTED_MODULE_7__.findAnnotationAtPoint,
  findSVGContainer: _UI_utils__WEBPACK_IMPORTED_MODULE_7__.findSVGContainer,
  convertToScreenPoint: _UI_utils__WEBPACK_IMPORTED_MODULE_7__.convertToScreenPoint,

  /**
   * Abstract class that needs to be defined so PDFJSAnnotate
   * knows how to communicate with your server.
   */
  StoreAdapter: _adapter_StoreAdapter__WEBPACK_IMPORTED_MODULE_0__["default"],

  /**
   * Implementation of StoreAdapter that stores annotation data to localStorage.
   */
  LocalStoreAdapter: _adapter_LocalStoreAdapter__WEBPACK_IMPORTED_MODULE_1__["default"],

  /**
   * Implementation of StoreAdapter that stores annotation data to localStorage particular
   * to a specific user
   */
  LocalUserStoreAdapter: _adapter_LocalUserStoreAdapter__WEBPACK_IMPORTED_MODULE_2__["default"],

  /**
   * Abstract instance of StoreAdapter
   */
  __storeAdapter: new _adapter_StoreAdapter__WEBPACK_IMPORTED_MODULE_0__["default"](),

  /**
   * Getter for the underlying StoreAdapter property
   *
   * @return {StoreAdapter}
   */
  getStoreAdapter() {
    return this.__storeAdapter;
  },

  /**
   * Setter for the underlying StoreAdapter property
   *
   * @param {StoreAdapter} adapter The StoreAdapter implementation to be used.
   */
  setStoreAdapter(adapter) {
    // TODO this throws an error when bundled
    // if (!(adapter instanceof StoreAdapter)) {
    //   throw new Error('adapter must be an instance of StoreAdapter');
    // }

    this.__storeAdapter = adapter;
  },

  /**
   * UI is a helper for instrumenting UI interactions for creating,
   * editing, and deleting annotations in the browser.
   */
  UI: _UI__WEBPACK_IMPORTED_MODULE_4__["default"],

  /**
   * Render the annotations for a page in the PDF Document
   *
   * @param {SVGElement} svg The SVG element that annotations should be rendered to
   * @param {PageViewport} viewport The PDFPage.getViewport data
   * @param {Object} data The StoreAdapter.getAnnotations data
   * @return {Promise}
   */
  render: _render__WEBPACK_IMPORTED_MODULE_3__["default"],

  /**
   * Convenience method for getting annotation data
   *
   * @alias StoreAdapter.getAnnotations
   * @param {String} documentId The ID of the document
   * @param {String} pageNumber The page number
   * @return {Promise}
   */
  getAnnotations(documentId, pageNumber) {
    return this.getStoreAdapter().getAnnotations(...arguments);
  },

  config: _config__WEBPACK_IMPORTED_MODULE_5__["default"],

  uuid: _utils_uuid__WEBPACK_IMPORTED_MODULE_6__["default"]
});


/***/ }),
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StoreAdapter)
/* harmony export */ });
/* harmony import */ var _utils_abstractFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _UI_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
// Disable JSDoc as it cannot really deal with the odd way that the functions are defined
/* eslint valid-jsdoc: 0 */




// Adapter should never be invoked publicly
class StoreAdapter {
  /**
   * Create a new StoreAdapter instance
   *
   * @param {Object} [definition] The definition to use for overriding abstract methods
   */
  constructor(definition = {}) {
    // Copy each function from definition if it is a function we know about
    Object.keys(definition).forEach((key) => {
      if (typeof definition[key] === 'function' &&
          typeof this[key] === 'function') {
        this[key] = definition[key];
      }
    });
  }

  /**
   * Get all the annotations for a given document and page number.
   *
   * @param {String} documentId The ID for the document the annotations belong to
   * @param {Number} pageNumber The number of the page the annotations belong to
   * @return {Promise} Promise that returns with list of annotations for document and page
   */
  __getAnnotations(documentId, pageNumber) { (0,_utils_abstractFunction__WEBPACK_IMPORTED_MODULE_0__["default"])('getAnnotations'); }
  get getAnnotations() { return this.__getAnnotations; }
  set getAnnotations(fn) {
    this.__getAnnotations = function getAnnotations(documentId, pageNumber) {
      return fn(...arguments).then((annotations) => {
        // TODO may be best to have this happen on the server
        if (annotations.annotations) {
          annotations.annotations.forEach((a) => {
            a.documentId = documentId;
          });
        }
        return annotations;
      });
    };
  }

  /**
   * Get the definition for a specific annotation.
   *
   * @param {String} documentId The ID for the document the annotation belongs to
   * @param {String} annotationId The ID for the annotation
   * @return {Promise} Promise that returns the requested annotation
   */
  getAnnotation(documentId, annotationId) { (0,_utils_abstractFunction__WEBPACK_IMPORTED_MODULE_0__["default"])('getAnnotation'); }

  /**
   * Add an annotation
   *
   * @param {String} documentId The ID for the document to add the annotation to
   * @param {String} pageNumber The page number to add the annotation to
   * @param {Object} annotation The definition for the new annotation
   * @return {Promise} Promise that returns with the added annotation
   */
  __addAnnotation(documentId, pageNumber, annotation) { (0,_utils_abstractFunction__WEBPACK_IMPORTED_MODULE_0__["default"])('addAnnotation'); }
  get addAnnotation() { return this.__addAnnotation; }
  set addAnnotation(fn) {
    this.__addAnnotation = function addAnnotation(documentId, pageNumber, annotation) {
      return fn(...arguments).then((annotation) => {
        (0,_UI_event__WEBPACK_IMPORTED_MODULE_1__.fireEvent)('annotation:add', documentId, pageNumber, annotation);
        return annotation;
      });
    };
  }

  /**
   * Edit an annotation
   *
   * @param {String} documentId The ID for the document
   * @param {String} pageNumber the page number of the annotation
   * @param {Object} annotation The definition of the modified annotation
   * @return {Promise} Promise that returns with the edited annotation
   */
  __editAnnotation(documentId, pageNumber, annotation) { (0,_utils_abstractFunction__WEBPACK_IMPORTED_MODULE_0__["default"])('editAnnotation'); }
  get editAnnotation() { return this.__editAnnotation; }
  set editAnnotation(fn) {
    this.__editAnnotation = function editAnnotation(documentId, annotationId, annotation) {
      return fn(...arguments).then((annotation) => {
        (0,_UI_event__WEBPACK_IMPORTED_MODULE_1__.fireEvent)('annotation:edit', documentId, annotationId, annotation);
        return annotation;
      });
    };
  }

  /**
   * Delete an annotation
   *
   * @param {String} documentId The ID for the document
   * @param {String} annotationId The ID for the annotation
   * @return {Promise} Promise that returns with boolean if annotation was deleted
   */
  __deleteAnnotation(documentId, annotationId) { (0,_utils_abstractFunction__WEBPACK_IMPORTED_MODULE_0__["default"])('deleteAnnotation'); }
  get deleteAnnotation() { return this.__deleteAnnotation; }
  set deleteAnnotation(fn) {
    this.__deleteAnnotation = function deleteAnnotation(documentId, annotationId) {
      return fn(...arguments).then((success) => {
        if (success) {
          (0,_UI_event__WEBPACK_IMPORTED_MODULE_1__.fireEvent)('annotation:delete', documentId, annotationId);
        }
        return success;
      });
    };
  }

  /**
   * Get all the comments for an annotation
   *
   * @param {String} documentId The ID for the document
   * @param {String} annotationId The ID for the annotation
   * @return {Promise} Promise that returns with comments for annotation
   */
  getComments(documentId, annotationId) { (0,_utils_abstractFunction__WEBPACK_IMPORTED_MODULE_0__["default"])('getComments'); }

  /**
   * Add a new comment
   *
   * @param {String} documentId The ID for the document
   * @param {String} annotationId The ID for the annotation
   * @param {Object} content The definition of the comment
   * @return {Promise} Promise that returns with the added comment
   */
  __addComment(documentId, annotationId, content) { (0,_utils_abstractFunction__WEBPACK_IMPORTED_MODULE_0__["default"])('addComment'); }
  get addComment() { return this.__addComment; }
  set addComment(fn) {
    this.__addComment = function addComment(documentId, annotationId, content) {
      return fn(...arguments).then((comment) => {
        (0,_UI_event__WEBPACK_IMPORTED_MODULE_1__.fireEvent)('comment:add', documentId, annotationId, comment);
        return comment;
      });
    };
  }

  /**
   * Delete a comment
   *
   * @param {String} documentId The ID for the document
   * @param {String} commentId The ID for the comment
   * @return {Promise} Promise that returns with boolean if comment was deleted
   */
  __deleteComment(documentId, commentId) { (0,_utils_abstractFunction__WEBPACK_IMPORTED_MODULE_0__["default"])('deleteComment'); }
  get deleteComment() { return this.__deleteComment; }
  set deleteComment(fn) {
    this.__deleteComment = function deleteComment(documentId, commentId) {
      return fn(...arguments).then((success) => {
        if (success) {
          (0,_UI_event__WEBPACK_IMPORTED_MODULE_1__.fireEvent)('comment:delete', documentId, commentId);
        }
        return success;
      });
    };
  }
}


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ abstractFunction)
/* harmony export */ });
/**
 * Throw an Error for an abstract function that hasn't been implemented.
 *
 * @param {String} name The name of the abstract function
 */
function abstractFunction(name) {
  throw new Error(name + ' is not implemented');
}


/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fireEvent": () => (/* binding */ fireEvent),
/* harmony export */   "addEventListener": () => (/* binding */ addEventListener),
/* harmony export */   "removeEventListener": () => (/* binding */ removeEventListener)
/* harmony export */ });
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);



const emitter = new (events__WEBPACK_IMPORTED_MODULE_0___default())();

let clickNode;

/**
 * Handle document.click event
 *
 * @param {Event} e The DOM event to be handled
 */
document.addEventListener('click', function handleDocumentClick(e) {
  if (!(0,_utils__WEBPACK_IMPORTED_MODULE_1__.findSVGAtPoint)(e.clientX, e.clientY)) {
    return;
  }

  let target = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.findAnnotationAtPoint)(e.clientX, e.clientY);

  // Emit annotation:blur if clickNode is no longer clicked
  if (clickNode && clickNode !== target) {
    emitter.emit('annotation:blur', clickNode);
  }

  // Emit annotation:click if target was clicked
  if (target) {
    emitter.emit('annotation:click', target);
  }

  clickNode = target;
});

// let mouseOverNode;
// document.addEventListener('mousemove', function handleDocumentMousemove(e) {
//   let target = findAnnotationAtPoint(e.clientX, e.clientY);
//
//   // Emit annotation:mouseout if target was mouseout'd
//   if (mouseOverNode && !target) {
//     emitter.emit('annotation:mouseout', mouseOverNode);
//   }
//
//   // Emit annotation:mouseover if target was mouseover'd
//   if (target && mouseOverNode !== target) {
//     emitter.emit('annotation:mouseover', target);
//   }
//
//   mouseOverNode = target;
// });

function fireEvent() { emitter.emit(...arguments); };
function addEventListener() { emitter.on(...arguments); };
function removeEventListener() { emitter.removeListener(...arguments); };


/***/ }),
/* 4 */
/***/ ((module) => {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function errorListener(err) {
      emitter.removeListener(name, resolver);
      reject(err);
    }

    function resolver() {
      if (typeof emitter.removeListener === 'function') {
        emitter.removeListener('error', errorListener);
      }
      resolve([].slice.call(arguments));
    };

    eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });
    if (name !== 'error') {
      addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
    }
  });
}

function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
  if (typeof emitter.on === 'function') {
    eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
  }
}

function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
  if (typeof emitter.on === 'function') {
    if (flags.once) {
      emitter.once(name, listener);
    } else {
      emitter.on(name, listener);
    }
  } else if (typeof emitter.addEventListener === 'function') {
    // EventTarget does not have `error` event semantics like Node
    // EventEmitters, we do not listen for `error` events here.
    emitter.addEventListener(name, function wrapListener(arg) {
      // IE does not have builtin `{ once: true }` support so we
      // have to do it manually.
      if (flags.once) {
        emitter.removeEventListener(name, wrapListener);
      }
      listener(arg);
    });
  } else {
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
  }
}


/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BORDER_COLOR": () => (/* binding */ BORDER_COLOR),
/* harmony export */   "findSVGContainer": () => (/* binding */ findSVGContainer),
/* harmony export */   "findSVGAtPoint": () => (/* binding */ findSVGAtPoint),
/* harmony export */   "findAnnotationAtPoint": () => (/* binding */ findAnnotationAtPoint),
/* harmony export */   "pointIntersectsRect": () => (/* binding */ pointIntersectsRect),
/* harmony export */   "getOffsetAnnotationRect": () => (/* binding */ getOffsetAnnotationRect),
/* harmony export */   "scaleUp": () => (/* binding */ scaleUp),
/* harmony export */   "convertToSvgRect": () => (/* binding */ convertToSvgRect),
/* harmony export */   "convertToSvgPoint": () => (/* binding */ convertToSvgPoint),
/* harmony export */   "convertToScreenPoint": () => (/* binding */ convertToScreenPoint),
/* harmony export */   "scaleDown": () => (/* binding */ scaleDown),
/* harmony export */   "getScroll": () => (/* binding */ getScroll),
/* harmony export */   "getOffset": () => (/* binding */ getOffset),
/* harmony export */   "disableUserSelect": () => (/* binding */ disableUserSelect),
/* harmony export */   "enableUserSelect": () => (/* binding */ enableUserSelect),
/* harmony export */   "getMetadata": () => (/* binding */ getMetadata)
/* harmony export */ });
/* harmony import */ var _render_appendChild__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _utils_mathUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);



const BORDER_COLOR = "#00BFFF";

const userSelectStyleSheet = document.createElement("style");
userSelectStyleSheet.innerHTML = `
body {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
`;

userSelectStyleSheet.setAttribute("data-pdf-annotate-user-select", "true");

/**
 * Find the SVGElement that contains all the annotations for a page
 *
 * @param {Element} node An annotation within that container
 * @return {SVGElement} The container SVG or null if it can't be found
 */
function findSVGContainer(node) {
  let parentNode = node;

  while ((parentNode = parentNode.parentNode) && parentNode !== document) {
    if (parentNode.nodeName.toUpperCase() === "SVG" && parentNode.getAttribute("data-pdf-annotate-container") === "true") {
      return parentNode;
    }
  }

  return null;
}

/**
 * Find an SVGElement container at a given point
 *
 * @param {Number} x The x coordinate of the point
 * @param {Number} y The y coordinate of the point
 * @return {SVGElement} The container SVG or null if one can't be found
 */
function findSVGAtPoint(x, y) {
  let elements = document.querySelectorAll('svg[data-pdf-annotate-container="true"]');

  for (let i = 0, l = elements.length; i < l; i++) {
    let el = elements[i];
    let rect = el.getBoundingClientRect();

    if (pointIntersectsRect(x, y, rect)) {
      return el;
    }
  }

  return null;
}

/**
 * Find an Element that represents an annotation at a given point.
 *
 * @param {Number} x The x coordinate of the point
 * @param {Number} y The y coordinate of the point
 * @return {Element|null} The annotation element or null if one can't be found
 */
function findAnnotationAtPoint(x, y) {
  let svg = findSVGAtPoint(x, y);

  if (!svg) {
    return;
  }

  let elements = svg.querySelectorAll("[data-pdf-annotate-type]");
  for (let element of elements) {
    if (pointIntersectsRect(x, y, element.getBoundingClientRect())) {
      return element;
    }
  }

  return null;
}

/**
 * Determine if a point intersects a rect
 *
 * @param {Number} x The x coordinate of the point
 * @param {Number} y The y coordinate of the point
 * @param {Object} rect The points of a rect (likely from getBoundingClientRect)
 * @return {Boolean} True if a collision occurs, otherwise false
 */
function pointIntersectsRect(x, y, rect) {
  return y >= rect.top && y <= rect.bottom && x >= rect.left && x <= rect.right;
}

/**
 * Get the rect of an annotation element accounting for offset.
 *
 * @param {Element} el The element to get the rect of
 * @return {Object} The dimensions of the element
 */
function getOffsetAnnotationRect(el) {
  let rect = el.getBoundingClientRect();
  let { width, height } = rect;
  let extraOffsetWidth = 0;
  let extraOffsetHeight = 0;
  if (["line", "path"].indexOf(el.tagName.toLowerCase()) > -1 && el.getBBox) {
    let bbox = el.getBBox();
    extraOffsetWidth = (rect.width - bbox.width) / 2;
    extraOffsetHeight = (rect.height - bbox.height) / 2;
    width = bbox.width;
    height = bbox.height;
  }
  let { offsetLeft, offsetTop } = getOffset(el);
  return {
    top: rect.top - offsetTop + extraOffsetHeight,
    left: rect.left - offsetLeft + extraOffsetWidth,
    bottom: rect.bottom - offsetTop - extraOffsetHeight,
    right: rect.right - offsetLeft - extraOffsetWidth,
    width: width,
    height: height,
  };
}

/**
 * Adjust scale from normalized scale (100%) to rendered scale.
 *
 * @param {SVGElement} svg The SVG to gather metadata from
 * @param {Object} rect A map of numeric values to scale
 * @return {Object} A copy of `rect` with values scaled up
 */
function scaleUp(svg, rect) {
  let result = {};
  let { viewport } = getMetadata(svg);

  Object.keys(rect).forEach((key) => {
    result[key] = rect[key] * viewport.scale;
  });

  return result;
}

function convertToSvgRect(rect, svg, viewport) {
  let pt1 = [rect.x, rect.y];
  let pt2 = [rect.x + rect.width, rect.y + rect.height];

  pt1 = convertToSvgPoint(pt1, svg, viewport);
  pt2 = convertToSvgPoint(pt2, svg, viewport);

  return {
    x: Math.min(pt1[0], pt2[0]),
    y: Math.min(pt1[1], pt2[1]),
    width: Math.abs(pt2[0] - pt1[0]),
    height: Math.abs(pt2[1] - pt1[1]),
  };
}

function convertToSvgPoint(pt, svg, viewport) {
  viewport = viewport || getMetadata(svg).viewport;

  let xform = [1, 0, 0, 1, 0, 0];
  xform = (0,_utils_mathUtils__WEBPACK_IMPORTED_MODULE_1__.scale)(xform, viewport.scale, viewport.scale);
  xform = (0,_utils_mathUtils__WEBPACK_IMPORTED_MODULE_1__.rotate)(xform, viewport.rotation);

  let offset = (0,_render_appendChild__WEBPACK_IMPORTED_MODULE_0__.getTranslation)(viewport);
  xform = (0,_utils_mathUtils__WEBPACK_IMPORTED_MODULE_1__.translate)(xform, offset.x, offset.y);

  return (0,_utils_mathUtils__WEBPACK_IMPORTED_MODULE_1__.applyInverseTransform)(pt, xform);
}

function convertToScreenPoint(pt, svg, viewport) {
  viewport = viewport || getMetadata(svg).viewport;

  let xform = [1, 0, 0, 1, 0, 0];
  xform = (0,_utils_mathUtils__WEBPACK_IMPORTED_MODULE_1__.scale)(xform, viewport.scale, viewport.scale);
  xform = (0,_utils_mathUtils__WEBPACK_IMPORTED_MODULE_1__.rotate)(xform, viewport.rotation);

  let offset = (0,_render_appendChild__WEBPACK_IMPORTED_MODULE_0__.getTranslation)(viewport);
  xform = (0,_utils_mathUtils__WEBPACK_IMPORTED_MODULE_1__.translate)(xform, offset.x, offset.y);

  return (0,_utils_mathUtils__WEBPACK_IMPORTED_MODULE_1__.applyTransform)(pt, xform);
}

/**
 * Adjust scale from rendered scale to a normalized scale (100%).
 *
 * @param {SVGElement} svg The SVG to gather metadata from
 * @param {Object} rect A map of numeric values to scale
 * @return {Object} A copy of `rect` with values scaled down
 */
function scaleDown(svg, rect) {
  let result = {};
  let { viewport } = getMetadata(svg);

  Object.keys(rect).forEach((key) => {
    result[key] = rect[key] / viewport.scale;
  });

  return result;
}

/**
 * Get the scroll position of an element, accounting for parent elements
 *
 * @param {Element} el The element to get the scroll position for
 * @return {Object} The scrollTop and scrollLeft position
 */
function getScroll(el) {
  let scrollTop = 0;
  let scrollLeft = 0;
  let parentNode = el;

  while ((parentNode = parentNode.parentNode) && parentNode !== document) {
    scrollTop += parentNode.scrollTop;
    scrollLeft += parentNode.scrollLeft;
  }

  return { scrollTop, scrollLeft };
}

/**
 * Get the offset position of an element, accounting for parent elements
 *
 * @param {Element} el The element to get the offset position for
 * @return {Object} The offsetTop and offsetLeft position
 */
function getOffset(el) {
  let parentNode = el;

  while ((parentNode = parentNode.parentNode) && parentNode !== document) {
    if (parentNode.nodeName.toUpperCase() === "SVG") {
      break;
    }
  }

  let rect = parentNode.getBoundingClientRect();

  return { offsetLeft: rect.left, offsetTop: rect.top };
}

/**
 * Disable user ability to select text on page
 */
function disableUserSelect() {
  if (!userSelectStyleSheet.parentNode) {
    document.head.appendChild(userSelectStyleSheet);
  }
}

/**
 * Enable user ability to select text on page
 */
function enableUserSelect() {
  if (userSelectStyleSheet.parentNode) {
    userSelectStyleSheet.parentNode.removeChild(userSelectStyleSheet);
  }
}

/**
 * Get the metadata for a SVG container
 *
 * @param {SVGElement} svg The SVG container to get metadata for
 */
function getMetadata(svg) {
  return {
    documentId: svg.getAttribute("data-pdf-annotate-document"),
    pageNumber: parseInt(svg.getAttribute("data-pdf-annotate-page"), 10),
    viewport: JSON.parse(svg.getAttribute("data-pdf-annotate-viewport")),
  };
}


/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTranslation": () => (/* binding */ getTranslation),
/* harmony export */   "appendChild": () => (/* binding */ appendChild),
/* harmony export */   "transformChild": () => (/* binding */ transformChild),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _renderLine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _renderPath__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _renderPoint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _renderRect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);
/* harmony import */ var _renderText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13);
/* harmony import */ var _renderCircle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14);
/* harmony import */ var _renderArrow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15);








const isFirefox = /firefox/i.test(navigator.userAgent);

/**
 * Get the x/y translation to be used for transforming the annotations
 * based on the rotation of the viewport.
 *
 * @param {Object} viewport The viewport data from the page
 * @return {Object}
 */
function getTranslation(viewport) {
  let x;
  let y;

  // Modulus 360 on the rotation so that we only
  // have to worry about four possible values.
  switch (viewport.rotation % 360) {
    case 0:
      x = y = 0;
      break;
    case 90:
      x = 0;
      y = (viewport.width / viewport.scale) * -1;
      break;
    case 180:
      x = (viewport.width / viewport.scale) * -1;
      y = (viewport.height / viewport.scale) * -1;
      break;
    case 270:
      x = (viewport.height / viewport.scale) * -1;
      y = 0;
      break;
  }

  return { x, y };
}

/**
 * Transform the rotation and scale of a node using SVG's native transform attribute.
 *
 * @param {Node} node The node to be transformed
 * @param {Object} viewport The page's viewport data
 * @return {Node}
 */
function transform(node, viewport) {
  let trans = getTranslation(viewport);

  // Let SVG natively transform the element
  node.setAttribute('transform', `scale(${viewport.scale}) rotate(${viewport.rotation}) translate(${trans.x}, ${trans.y})`);

  // Manually adjust x/y for nested SVG nodes
  if (!isFirefox && node.nodeName.toLowerCase() === 'svg') {
    node.setAttribute('x', parseInt(node.getAttribute('x'), 10) * viewport.scale);
    node.setAttribute('y', parseInt(node.getAttribute('y'), 10) * viewport.scale);

    let x = parseInt(node.getAttribute('x', 10));
    let y = parseInt(node.getAttribute('y', 10));
    let width = parseInt(node.getAttribute('width'), 10);
    let height = parseInt(node.getAttribute('height'), 10);
    let path = node.querySelector('path');
    let svg = path.parentNode;

    // Scale width/height
    [node, svg, path, node.querySelector('rect')].forEach((n) => {
      n.setAttribute('width', parseInt(n.getAttribute('width'), 10) * viewport.scale);
      n.setAttribute('height', parseInt(n.getAttribute('height'), 10) * viewport.scale);
    });

    // Transform path but keep scale at 100% since it will be handled natively
    transform(path, Object.assign({}, viewport, { scale: 1 }));

    switch (viewport.rotation % 360) {
      case 90:
        node.setAttribute('x', viewport.width - y - width);
        node.setAttribute('y', x);
        svg.setAttribute('x', 1);
        svg.setAttribute('y', 0);
        break;
      case 180:
        node.setAttribute('x', viewport.width - x - width);
        node.setAttribute('y', viewport.height - y - height);
        svg.setAttribute('y', 2);
        break;
      case 270:
        node.setAttribute('x', y);
        node.setAttribute('y', viewport.height - x - height);
        svg.setAttribute('x', -1);
        svg.setAttribute('y', 0);
        break;
    }
  }

  return node;
}

/**
 * Append an annotation as a child of an SVG.
 *
 * @param {SVGElement} svg The SVG element to append the annotation to
 * @param {Object} annotation The annotation definition to render and append
 * @param {Object} viewport The page's viewport data
 * @return {SVGElement} A node that was created and appended by this function
 */
function appendChild(svg, annotation, viewport) {
  if (!viewport) {
    viewport = JSON.parse(svg.getAttribute('data-pdf-annotate-viewport'));
  }

  let child;
  switch (annotation.type) {
    case 'area':
    case 'highlight':
      child = (0,_renderRect__WEBPACK_IMPORTED_MODULE_3__["default"])(annotation);
      break;
    case 'circle':
    case 'fillcircle':
    case 'emptycircle':
      child = (0,_renderCircle__WEBPACK_IMPORTED_MODULE_5__["default"])(annotation);
      break;
    case 'strikeout':
      child = (0,_renderLine__WEBPACK_IMPORTED_MODULE_0__["default"])(annotation);
      break;
    case 'point':
      child = (0,_renderPoint__WEBPACK_IMPORTED_MODULE_2__["default"])(annotation);
      break;
    case 'textbox':
      child = (0,_renderText__WEBPACK_IMPORTED_MODULE_4__["default"])(annotation);
      break;
    case 'drawing':
      child = (0,_renderPath__WEBPACK_IMPORTED_MODULE_1__["default"])(annotation);
      break;
    case 'arrow':
      child = (0,_renderArrow__WEBPACK_IMPORTED_MODULE_6__["default"])(annotation);
      break;
  }

  // If no type was provided for an annotation it will result in node being null.
  // Skip appending/transforming if node doesn't exist.
  if (child) {
    // Set attributes
    child.setAttribute('data-pdf-annotate-id', annotation.uuid);
    child.setAttribute('aria-hidden', true);

    // Dynamically set any other attributes associated with annotation that is not related to drawing it
    Object.keys(annotation).filter((key) => {
      return ['color', 'x', 'y', 'cx', 'cy', 'color', 'documentId', 'lines', 'page',
        'width', 'class', 'content', 'size', 'rotation', 'r'].indexOf(key) === -1;
    }).forEach((key) => {
      child.setAttribute(`data-pdf-annotate-${key}`, annotation[key]);
    });

    svg.appendChild(transform(child, viewport));
  }

  return child;
}

/**
 * Transform a child annotation of an SVG.
 *
 * @param {SVGElement} svg The SVG element with the child annotation
 * @param {Object} child The SVG child to transform
 * @param {Object} viewport The page's viewport data
 * @return {SVGElement} A node that was transformed by this function
 */
function transformChild(svg, child, viewport) {
  if (!viewport) {
    viewport = JSON.parse(svg.getAttribute('data-pdf-annotate-viewport'));
  }

  // If no type was provided for an annotation it will result in node being null.
  // Skip transforming if node doesn't exist.
  if (child) {
    child = transform(child, viewport);
  }

  return child;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  /**
   * Get the x/y translation to be used for transforming the annotations
   * based on the rotation of the viewport.
   */
  getTranslation,

  /**
   * Append an SVG child for an annotation
   */
  appendChild,

  /**
   * Transform an existing SVG child
   */
  transformChild
});


/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderLine)
/* harmony export */ });
/* harmony import */ var _utils_setAttributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _utils_normalizeColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);



/**
 * Create SVGLineElements from an annotation definition.
 * This is used for anntations of type `strikeout`.
 *
 * @param {Object} a The annotation definition
 * @return {SVGGElement} A group of all lines to be rendered
 */
function renderLine(a) {
  let group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  (0,_utils_setAttributes__WEBPACK_IMPORTED_MODULE_0__["default"])(group, {
    stroke: (0,_utils_normalizeColor__WEBPACK_IMPORTED_MODULE_1__["default"])(a.color || '#f00'),
    strokeWidth: 1
  });

  a.rectangles.forEach((r) => {
    let line = document.createElementNS('http://www.w3.org/2000/svg', 'line');

    (0,_utils_setAttributes__WEBPACK_IMPORTED_MODULE_0__["default"])(line, {
      x1: r.x,
      y1: r.y,
      x2: r.x + r.width,
      y2: r.y
    });

    group.appendChild(line);
  });

  return group;
}


/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setAttributes)
/* harmony export */ });
const UPPER_REGEX = /[A-Z]/g;

// Don't convert these attributes from camelCase to hyphenated-attributes
const BLACKLIST = [
  'viewBox'
];

let keyCase = (key) => {
  if (BLACKLIST.indexOf(key) === -1) {
    key = key.replace(UPPER_REGEX, match => '-' + match.toLowerCase());
  }
  return key;
};

/**
 * Set attributes for a node from a map
 *
 * @param {Node} node The node to set attributes on
 * @param {Object} attributes The map of key/value pairs to use for attributes
 */
function setAttributes(node, attributes) {
  Object.keys(attributes).forEach((key) => {
    node.setAttribute(keyCase(key), attributes[key]);
  });
}


/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ normalizeColor)
/* harmony export */ });
const REGEX_HASHLESS_HEX = /^([a-f0-9]{6}|[a-f0-9]{3})$/i;

/**
 * Normalize a color value
 *
 * @param {String} color The color to normalize
 * @return {String}
 */
function normalizeColor(color) {
  if (REGEX_HASHLESS_HEX.test(color)) {
    color = `#${color}`;
  }
  return color;
}


/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderPath)
/* harmony export */ });
/* harmony import */ var _utils_setAttributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _utils_normalizeColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);



/**
 * Create SVGPathElement from an annotation definition.
 * This is used for anntations of type `drawing`.
 *
 * @param {Object} a The annotation definition
 * @return {SVGPathElement} The path to be rendered
 */
function renderPath(a) {
  let d = [];
  let path = document.createElementNS('http://www.w3.org/2000/svg', 'path');

  if (a.lines.length > 0) {
    d.push(`M${a.lines[0][0]} ${a.lines[0][1]}`);
    for (let i = 1, l = a.lines.length; i < l; i++) {
      let p1 = a.lines[i];
      let p2 = a.lines[i + 1];
      if (p2) {
        d.push(`L${p1[0]} ${p1[1]}`);
      }
    }
  }

  /*

   if(a.lines.length>2) {
    var p1 = a.lines[0];
    var p2 = a.lines[a.lines.length-1];

    var p3 = []; //arrow
    var p4 = [];
    var p0 = []; //arrow intersection

    if (p2) {
      var k = -(p2[0]-p1[0])/(p2[1]-p1[1]);

      var deltaX = 3;
      p0[0] = p1[0]+0.8*(p2[0]-p1[0]);
      p0[1] = p1[1]+0.8*(p2[1]-p1[1]);

      p3[0] = p0[0] + deltaX;
      p3[1] = p0[1] + k*deltaX;

      p4[0] = p0[0] - deltaX;
      p4[1] = p0[1] - k*deltaX;

      if(Math.abs(p2[1]-p1[1]) < 20) {

        p3[0] = p0[0] ;
        p3[1] = p0[1] + deltaX*1;

        p4[0] = p0[0] ;
        p4[1] = p0[1] - deltaX*1;

      }

      d.push(`M${p1[0]} ${p1[1]} ${p2[0]} ${p2[1]}`);
       //d.push(`M${p1[0]} ${p1[1]} ${p2[0]} ${p2[1]}`);
      d.push(`M${p2[0]} ${p2[1]} ${p3[0]} ${p3[1]}`);
      d.push(`M${p3[0]} ${p3[1]} ${p4[0]} ${p4[1]}`);
      d.push(`M${p4[0]} ${p4[1]} ${p2[0]} ${p2[1]}`);
     }
    } */

  (0,_utils_setAttributes__WEBPACK_IMPORTED_MODULE_0__["default"])(path, {
    d: `${d.join(' ')}`, // `${d.join(' ')}Z`,
    stroke: (0,_utils_normalizeColor__WEBPACK_IMPORTED_MODULE_1__["default"])(a.color || '#000'),
    strokeWidth: a.width || 1,
    fill: 'none'
  });

  return path;
}


/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderPoint)
/* harmony export */ });
/* harmony import */ var _utils_setAttributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);


const SIZE = 25;
const D = 'M499.968 214.336q-113.832 0 -212.877 38.781t-157.356 104.625 -58.311 142.29q0 62.496 39.897 119.133t112.437 97.929l48.546 27.9 -15.066 53.568q-13.392 50.778 -39.06 95.976 84.816 -35.154 153.45 -95.418l23.994 -21.204 31.806 3.348q38.502 4.464 72.54 4.464 113.832 0 212.877 -38.781t157.356 -104.625 58.311 -142.29 -58.311 -142.29 -157.356 -104.625 -212.877 -38.781z';

/**
 * Create SVGElement from an annotation definition.
 * This is used for anntations of type `comment`.
 *
 * @param {Object} a The annotation definition
 * @return {SVGElement} A svg to be rendered
 */
function renderPoint(a) {
  let outerSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  let innerSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  let rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  let path = document.createElementNS('http://www.w3.org/2000/svg', 'path');

  (0,_utils_setAttributes__WEBPACK_IMPORTED_MODULE_0__["default"])(outerSVG, {
    width: SIZE,
    height: SIZE,
    x: a.x,
    y: a.y
  });

  (0,_utils_setAttributes__WEBPACK_IMPORTED_MODULE_0__["default"])(innerSVG, {
    width: SIZE,
    height: SIZE,
    x: 0,
    y: (SIZE * 0.05) * -1,
    viewBox: '0 0 1000 1000'
  });

  (0,_utils_setAttributes__WEBPACK_IMPORTED_MODULE_0__["default"])(rect, {
    width: SIZE,
    height: SIZE,
    stroke: '#000',
    fill: '#ff0'
  });

  (0,_utils_setAttributes__WEBPACK_IMPORTED_MODULE_0__["default"])(path, {
    d: D,
    strokeWidth: 50,
    stroke: '#000',
    fill: '#fff'
  });

  innerSVG.appendChild(path);
  outerSVG.appendChild(rect);
  outerSVG.appendChild(innerSVG);

  return outerSVG;
}


/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderRect)
/* harmony export */ });
/* harmony import */ var _utils_setAttributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _utils_normalizeColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);



/**
 * Create SVGRectElements from an annotation definition.
 * This is used for anntations of type `area` and `highlight`.
 *
 * @param {Object} a The annotation definition
 * @return {SVGGElement|SVGRectElement} A group of all rects to be rendered
 */
function renderRect(a) {
  if (a.type === 'highlight') {
    let group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    (0,_utils_setAttributes__WEBPACK_IMPORTED_MODULE_0__["default"])(group, {
      fill: (0,_utils_normalizeColor__WEBPACK_IMPORTED_MODULE_1__["default"])(a.color || '#ff0'),
      fillOpacity: 0.2
    });

    a.rectangles.forEach((r) => {
      group.appendChild(createRect(r));
    });

    return group;
  }
  else {
    let rect = createRect(a);
    (0,_utils_setAttributes__WEBPACK_IMPORTED_MODULE_0__["default"])(rect, {
      stroke: (0,_utils_normalizeColor__WEBPACK_IMPORTED_MODULE_1__["default"])(a.color || '#f00'),
      fill: 'none'
    });

    return rect;
  }
}

function createRect(r) {
  let rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');

  (0,_utils_setAttributes__WEBPACK_IMPORTED_MODULE_0__["default"])(rect, {
    x: r.x,
    y: r.y,
    width: r.width,
    height: r.height
  });

  return rect;
}


/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderText)
/* harmony export */ });
/* harmony import */ var _utils_setAttributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _utils_normalizeColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);



/**
 * Create SVGTextElement from an annotation definition.
 * This is used for anntations of type `textbox`.
 *
 * @param {Object} a The annotation definition
 * @return {SVGTextElement} A text to be rendered
 */
function renderText(a) {
  // Text should be rendered at 0 degrees relative to
  // document rotation
  let text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  (0,_utils_setAttributes__WEBPACK_IMPORTED_MODULE_0__["default"])(text, {
    x: a.x,
    y: a.y,
    fill: (0,_utils_normalizeColor__WEBPACK_IMPORTED_MODULE_1__["default"])(a.color || '#000'),
    fontSize: a.size,
    transform: `rotate(${a.rotation})`,
    style: 'white-space: pre'
  });
  text.innerHTML = a.content;

  let g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  g.appendChild(text);

  return g;
}


/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderCircle)
/* harmony export */ });
/* harmony import */ var _utils_setAttributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _utils_normalizeColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);



/**
 * Create an SVGCircleElement from an annotation definition.
 * This is used for annotations of type `circle`.
 *
 * @param {Object} a The annotation definition
 * @return {SVGGElement|SVGCircleElement} A circle to be rendered
 */
function renderCircle(a) {
  let circle = createCircle(a);
  let color = (0,_utils_normalizeColor__WEBPACK_IMPORTED_MODULE_1__["default"])(a.color || '#f00');

  if (a.type === 'circle') {
    (0,_utils_setAttributes__WEBPACK_IMPORTED_MODULE_0__["default"])(circle, {
      stroke: color,
      fill: 'none',
      'stroke-width': 5
    });
  }
  if (a.type === 'emptycircle') {
    (0,_utils_setAttributes__WEBPACK_IMPORTED_MODULE_0__["default"])(circle, {
      stroke: color,
      fill: 'none',
      'stroke-width': 2
    });
  }

  if (a.type === 'fillcircle') {
    (0,_utils_setAttributes__WEBPACK_IMPORTED_MODULE_0__["default"])(circle, {
      stroke: color,
      fill: color,
      'stroke-width': 5
    });
  }

  return circle;
}

function createCircle(a) {
  let circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  (0,_utils_setAttributes__WEBPACK_IMPORTED_MODULE_0__["default"])(circle, {
    cx: a.cx,
    cy: a.cy,
    r: a.r
  });

  return circle;
}


/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderArrow)
/* harmony export */ });
/* harmony import */ var _utils_setAttributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _utils_normalizeColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var _utils_mathUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);




/**
 * Create SVGPathElement from an annotation definition.
 * This is used for anntations of type `drawing`.
 *
 * @param {Object} a The annotation definition
 * @return {SVGPathElement} The path to be rendered
 */
function renderArrow(a) {
  let arrow = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');

  if (a.lines.length === 2) {
    let p1 = a.lines[0];
    let p2 = a.lines[a.lines.length - 1];

    let arrowLength = 40;
    let pt0 = (0,_utils_mathUtils__WEBPACK_IMPORTED_MODULE_2__.makePoint)(p1[0], p1[1], 0);
    let pt1 = (0,_utils_mathUtils__WEBPACK_IMPORTED_MODULE_2__.makePoint)(p2[0], p2[1], 0);
    let x = (0,_utils_mathUtils__WEBPACK_IMPORTED_MODULE_2__.makeVectorFromPoints)(pt0, pt1);
    let unitX = (0,_utils_mathUtils__WEBPACK_IMPORTED_MODULE_2__.unitVector)(x);
    pt1 = (0,_utils_mathUtils__WEBPACK_IMPORTED_MODULE_2__.addVector)(pt0, (0,_utils_mathUtils__WEBPACK_IMPORTED_MODULE_2__.multiplyVector)(unitX, arrowLength));
    x = (0,_utils_mathUtils__WEBPACK_IMPORTED_MODULE_2__.makeVectorFromPoints)(pt0, pt1);
    let unitZ = (0,_utils_mathUtils__WEBPACK_IMPORTED_MODULE_2__.makeVector)(0, 0, 1);
    let unitY = (0,_utils_mathUtils__WEBPACK_IMPORTED_MODULE_2__.unitVector)((0,_utils_mathUtils__WEBPACK_IMPORTED_MODULE_2__.crossProduct)(unitX, unitZ));
    let thickness = a.width || 10;

    let A = (0,_utils_mathUtils__WEBPACK_IMPORTED_MODULE_2__.addVector)(pt0, (0,_utils_mathUtils__WEBPACK_IMPORTED_MODULE_2__.multiplyVector)(unitY, thickness * 0.5));
    let B = (0,_utils_mathUtils__WEBPACK_IMPORTED_MODULE_2__.addVector)(A, (0,_utils_mathUtils__WEBPACK_IMPORTED_MODULE_2__.multiplyVector)(unitX, (0,_utils_mathUtils__WEBPACK_IMPORTED_MODULE_2__.magnitude)(x) - thickness * 2.0));
    let C = (0,_utils_mathUtils__WEBPACK_IMPORTED_MODULE_2__.addVector)(B, (0,_utils_mathUtils__WEBPACK_IMPORTED_MODULE_2__.multiplyVector)(unitY, thickness));
    let D = pt1;
    let G = (0,_utils_mathUtils__WEBPACK_IMPORTED_MODULE_2__.addVector)(pt0, (0,_utils_mathUtils__WEBPACK_IMPORTED_MODULE_2__.multiplyVector)((0,_utils_mathUtils__WEBPACK_IMPORTED_MODULE_2__.negateVector)(unitY), thickness * 0.5));
    let F = (0,_utils_mathUtils__WEBPACK_IMPORTED_MODULE_2__.addVector)(G, (0,_utils_mathUtils__WEBPACK_IMPORTED_MODULE_2__.multiplyVector)(unitX, (0,_utils_mathUtils__WEBPACK_IMPORTED_MODULE_2__.magnitude)(x) - thickness * 2.0));
    let E = (0,_utils_mathUtils__WEBPACK_IMPORTED_MODULE_2__.addVector)(F, (0,_utils_mathUtils__WEBPACK_IMPORTED_MODULE_2__.multiplyVector)((0,_utils_mathUtils__WEBPACK_IMPORTED_MODULE_2__.negateVector)(unitY), thickness));

    let points = '' +
      A.x + ',' + A.y + ' ' +
      B.x + ',' + B.y + ' ' +
      C.x + ',' + C.y + ' ' +
      D.x + ',' + D.y + ' ' +
      E.x + ',' + E.y + ' ' +
      F.x + ',' + F.y + ' ' +
      G.x + ',' + G.y;

    (0,_utils_setAttributes__WEBPACK_IMPORTED_MODULE_0__["default"])(arrow, {
      points: points,
      stroke: (0,_utils_normalizeColor__WEBPACK_IMPORTED_MODULE_1__["default"])(a.color || '#000'),
      fill: (0,_utils_normalizeColor__WEBPACK_IMPORTED_MODULE_1__["default"])(a.color || '#000')
    });
  }

  return arrow;
}


/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "applyTransform": () => (/* binding */ applyTransform),
/* harmony export */   "applyInverseTransform": () => (/* binding */ applyInverseTransform),
/* harmony export */   "transform": () => (/* binding */ transform),
/* harmony export */   "translate": () => (/* binding */ translate),
/* harmony export */   "rotate": () => (/* binding */ rotate),
/* harmony export */   "scale": () => (/* binding */ scale),
/* harmony export */   "makePoint": () => (/* binding */ makePoint),
/* harmony export */   "makeVector": () => (/* binding */ makeVector),
/* harmony export */   "makeVectorFromPoints": () => (/* binding */ makeVectorFromPoints),
/* harmony export */   "addVector": () => (/* binding */ addVector),
/* harmony export */   "multiplyVector": () => (/* binding */ multiplyVector),
/* harmony export */   "magnitude": () => (/* binding */ magnitude),
/* harmony export */   "negateVector": () => (/* binding */ negateVector),
/* harmony export */   "unitVector": () => (/* binding */ unitVector),
/* harmony export */   "crossProduct": () => (/* binding */ crossProduct)
/* harmony export */ });
// Transform point by matrix
//
function applyTransform(p, m) {
  return [
    p[0] * m[0] + p[1] * m[2] + m[4],
    p[0] * m[1] + p[1] * m[3] + m[5]
  ];
};

// Transform point by matrix inverse
//
function applyInverseTransform(p, m) {
  let d = m[0] * m[3] - m[1] * m[2];
  return [
    (p[0] * m[3] - p[1] * m[2] + m[2] * m[5] - m[4] * m[3]) / d,
    (-p[0] * m[1] + p[1] * m[0] + m[4] * m[1] - m[5] * m[0]) / d
  ];
};

// Concatenates two transformation matrices together and returns the result.
function transform(m1, m2) {
  return [
    m1[0] * m2[0] + m1[2] * m2[1],
    m1[1] * m2[0] + m1[3] * m2[1],
    m1[0] * m2[2] + m1[2] * m2[3],
    m1[1] * m2[2] + m1[3] * m2[3],
    m1[0] * m2[4] + m1[2] * m2[5] + m1[4],
    m1[1] * m2[4] + m1[3] * m2[5] + m1[5]
  ];
};

function translate(m, x, y) {
  return [
    m[0],
    m[1],
    m[2],
    m[3],
    m[0] * x + m[2] * y + m[4],
    m[1] * x + m[3] * y + m[5]
  ];
};

function rotate(m, angle) {
  angle = angle * Math.PI / 180;

  let cosValue = Math.cos(angle);
  let sinValue = Math.sin(angle);

  return [
    m[0] * cosValue + m[2] * sinValue,
    m[1] * cosValue + m[3] * sinValue,
    m[0] * (-sinValue) + m[2] * cosValue,
    m[1] * (-sinValue) + m[3] * cosValue,
    m[4],
    m[5]
  ];
};

function scale(m, x, y) {
  return [
    m[0] * x,
    m[1] * x,
    m[2] * y,
    m[3] * y,
    m[4],
    m[5]
  ];
};

function makePoint(x, y, z) {
  return { x: x, y: y, z: z };
};

function makeVector(xcoord, ycoord, zcoord) {
  return { xcoord: xcoord, ycoord: ycoord, zcoord: zcoord };
};

function makeVectorFromPoints(pt1, pt2) {
  let xcoord = pt2.x - pt1.x;
  let ycoord = pt2.y - pt1.y;
  let zcoord = pt2.z - pt1.z;
  return makeVector(xcoord, ycoord, zcoord);
};

function addVector(pt, v) {
  return makePoint(pt.x + v.xcoord, pt.y + v.ycoord, pt.z + v.zcoord);
};

function multiplyVector(v, scalar) {
  return makeVector(v.xcoord * scalar, v.ycoord * scalar, v.zcoord * scalar);
};

function magnitude(v) {
  return Math.sqrt(
    Math.pow(v.xcoord, 2) + Math.pow(v.ycoord, 2) + Math.pow(v.zcoord, 2)
  );
};

function negateVector(v) {
  return multiplyVector(v, -1);
};

function unitVector(v) {
  let mag = magnitude(v);
  let xcoord = v.xcoord / mag;
  let ycoord = v.ycoord / mag;
  let zcoord = v.zcoord / mag;
  return makeVector(xcoord, ycoord, zcoord);
};

function crossProduct(u, v) {
  //
  // u X v = < u2*v3 - u3*v2,
  //           u3*v1 - u1*v3,
  //           u1*v2 - u2*v1 >
  let xcoord = u.ycoord * v.zcoord - u.zcoord * v.ycoord;
  let ycoord = u.zcoord * v.xcoord - u.xcoord * v.zcoord;
  let zcoord = u.xcoord * v.ycoord - u.ycoord * v.xcoord;
  return makeVector(xcoord, ycoord, zcoord);
};


/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LocalStoreAdapter)
/* harmony export */ });
/* harmony import */ var _utils_uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var _StoreAdapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);



// StoreAdapter for working with localStorage
// This is ideal for testing, examples, and prototyping
class LocalStoreAdapter extends _StoreAdapter__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor() {
    super({
      getAnnotations(documentId, pageNumber) {
        return new Promise((resolve, reject) => {
          let annotations = getAnnotations(documentId).filter((i) => {
            return i.page === pageNumber && i.class === 'Annotation';
          });

          resolve({
            documentId,
            pageNumber,
            annotations
          });
        });
      }
    });

    this.getAnnotation = (documentId, annotationId) => {
      return Promise.resolve(getAnnotations(documentId)[findAnnotation(documentId, annotationId)]);
    };

    this.addAnnotation = (documentId, pageNumber, annotation) => {
      return new Promise((resolve, reject) => {
        annotation.class = 'Annotation';
        annotation.uuid = (0,_utils_uuid__WEBPACK_IMPORTED_MODULE_0__["default"])();
        annotation.page = pageNumber;

        let annotations = getAnnotations(documentId);
        annotations.push(annotation);
        updateAnnotations(documentId, annotations);

        resolve(annotation);
      });
    };

    this.editAnnotation = (documentId, annotationId, annotation) => {
      return new Promise((resolve, reject) => {
        let annotations = getAnnotations(documentId);
        annotations[findAnnotation(documentId, annotationId)] = annotation;
        updateAnnotations(documentId, annotations);
        resolve(annotation);
      });
    };

    this.deleteAnnotation = (documentId, annotationId) => {
      return new Promise((resolve, reject) => {
        let annotation = getAnnotations(documentId).filter(i => i.uuid === annotationId)[0] || {};
        if (!annotation) {
          return reject('Could not find annotation');
        }
        let index = findAnnotation(documentId, annotationId);
        if (index > -1) {
          let annotations = getAnnotations(documentId);
          annotations.splice(index, 1);
          updateAnnotations(documentId, annotations);
        }

        resolve(true);
      });
    };

    this.getComments = (documentId, annotationId) => {
      return new Promise((resolve, reject) => {
        resolve(getAnnotations(documentId).filter((i) => {
          return i.class === 'Comment' && i.annotation === annotationId;
        }));
      });
    };

    this.addComment = (documentId, annotationId, content) => {
      return new Promise((resolve, reject) => {
        let comment = {
          class: 'Comment',
          uuid: (0,_utils_uuid__WEBPACK_IMPORTED_MODULE_0__["default"])(),
          annotation: annotationId,
          content: content
        };

        let annotations = getAnnotations(documentId);
        annotations.push(comment);
        updateAnnotations(documentId, annotations);

        resolve(comment);
      });
    };

    this.deleteComment = (documentId, commentId) => {
      return new Promise((resolve, reject) => {
        let comment = getAnnotations(documentId).filter(i => i.uuid === commentId)[0] || {};
        if (!comment) {
          return reject('Could not find annotation');
        }
        let index = -1;
        let annotations = getAnnotations(documentId);
        for (let i = 0, l = annotations.length; i < l; i++) {
          if (annotations[i].uuid === commentId) {
            index = i;
            break;
          }
        }

        if (index > -1) {
          annotations.splice(index, 1);
          updateAnnotations(documentId, annotations);
        }

        resolve(true);
      });
    };
  }
}

function getAnnotations(documentId) {
  return JSON.parse(localStorage.getItem(`${documentId}/annotations`)) || [];
}

function updateAnnotations(documentId, annotations) {
  localStorage.setItem(`${documentId}/annotations`, JSON.stringify(annotations));
}
/**
 *
 * @param {String} documentId Document id of the annotation
 * @param {String} annotationId The id of the annotation
 *
 * This function finds all the annotation made by one user.
 *
 * @return {int} The index of the annotation in localstorage
 */
function findAnnotation(documentId, annotationId) {
  let index = -1;
  let annotations = getAnnotations(documentId);
  for (let i = 0, l = annotations.length; i < l; i++) {
    if (annotations[i].uuid === annotationId) {
      index = i;
      break;
    }
  }
  return index;
}


/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ uuid)
/* harmony export */ });
const REGEXP = /[xy]/g;
const PATTERN = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';

function replacement(c) {
  let r = Math.random() * 16 | 0;
  let v = c === 'x' ? r : (r & 0x3 | 0x8);
  return v.toString(16);
}

/**
 * Generate a univierally unique identifier
 *
 * @return {String} A UUID
 */
function uuid() {
  return PATTERN.replace(REGEXP, replacement);
}


/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LocalUserStoreAdapter)
/* harmony export */ });
/* harmony import */ var _utils_uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var _StoreAdapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);



// StoreAdapter for working with localStorage and associated user id
// This is ideal for testing, examples, and prototyping
class LocalUserStoreAdapter extends _StoreAdapter__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(userId = 'user', globalEdit = false) {
    super({
      getAnnotations(documentId, pageNumber) {
        return new Promise((resolve, reject) => {
          let annotations = getAllAnnotations(documentId).filter((i) => {
            return i.page === pageNumber && i.class === 'Annotation';
          });

          resolve({
            documentId,
            pageNumber,
            annotations
          });
        });
      }
    });

    this._userId = userId;
    this._globalEdit = globalEdit;

    this.getAnnotation = (documentId, annotationId) => {
      return Promise.resolve(getAnnotations(documentId, this._userId)[findAnnotation(documentId, this._userId, annotationId)]);
    };

    this.addAnnotation = (documentId, pageNumber, annotation) => {
      return new Promise((resolve, reject) => {
        annotation.class = 'Annotation';
        annotation.uuid = (0,_utils_uuid__WEBPACK_IMPORTED_MODULE_0__["default"])();
        annotation.page = pageNumber;
        annotation.userId = this._userId;

        let annotations = getAnnotations(documentId, this._userId);
        annotations.push(annotation);
        updateAnnotations(documentId, this._userId, annotations);

        resolve(annotation);
      });
    };

    this.editAnnotation = (documentId, annotationId, annotation) => {
      return new Promise((resolve, reject) => {
        if (!this._globalEdit && annotation.userId && annotation.userId !== this._userId) {
          reject('Non-matching userId');
        }
        let annotations = getAnnotations(documentId, annotation.userId);
        annotations[findAnnotation(documentId, annotation.userId, annotationId)] = annotation;
        updateAnnotations(documentId, annotation.userId, annotations);
        resolve(annotation);
      });
    };

    this.deleteAnnotation = (documentId, annotationId) => {
      return new Promise((resolve, reject) => {
        let annotation = getAllAnnotations(documentId).filter(i => i.uuid === annotationId)[0] || {};
        if (!annotation) {
          return reject('Could not find annotation');
        }
        else if (!this._globalEdit && annotation.userId && annotation.userId !== this._userId) {
          return reject('Non-matching userId');
        }
        let index = findAnnotation(documentId, annotation.userId, annotationId);
        if (index > -1) {
          let annotations = getAnnotations(documentId, annotation.userId);
          annotations.splice(index, 1);
          updateAnnotations(documentId, annotation.userId, annotations);
        }

        resolve(true);
      });
    };

    this.getComments = (documentId, annotationId) => {
      return new Promise((resolve, reject) => {
        resolve(getAnnotations(documentId, this._userId).filter((i) => {
          return i.class === 'Comment' && i.annotation === annotationId;
        }));
      });
    };

    this.addComment = (documentId, annotationId, content) => {
      return new Promise((resolve, reject) => {
        let comment = {
          class: 'Comment',
          uuid: (0,_utils_uuid__WEBPACK_IMPORTED_MODULE_0__["default"])(),
          annotation: annotationId,
          content: content,
          userId: this._userId
        };

        let annotations = getAnnotations(documentId, this._userId);
        annotations.push(comment);
        updateAnnotations(documentId, this._userId, annotations);

        resolve(comment);
      });
    };

    this.deleteComment = (documentId, commentId) => {
      return new Promise((resolve, reject) => {
        let comment = getAllAnnotations(documentId).filter(i => i.uuid === commentId)[0] || {};
        if (!comment) {
          return reject('Could not find annotation');
        }
        else if (!this._globalEdit && comment.userId && comment.userId !== this._userId) {
          return reject('Non-matching userId');
        }
        let index = -1;
        let annotations = getAnnotations(documentId, comment.userId);
        for (let i = 0, l = annotations.length; i < l; i++) {
          if (annotations[i].uuid === commentId) {
            index = i;
            break;
          }
        }

        if (index > -1) {
          annotations.splice(index, 1);
          updateAnnotations(documentId, comment.userId, annotations);
        }

        resolve(true);
      });
    };
  }

  get userId() {
    return this._userId;
  }
}

function getAllAnnotations(documentId) {
  let all_annotations = [];
  let re = new RegExp(`${documentId}/(.*)/annotations`);
  for (let i = 0; i < localStorage.length; i++) {
    if (localStorage.key(i).search(re) > -1) {
      all_annotations.push(...JSON.parse(localStorage.getItem(localStorage.key(i))));
    }
  }
  return all_annotations;
}

function getAnnotations(documentId, userId) {
  return JSON.parse(localStorage.getItem(`${documentId}/${userId}/annotations`)) || [];
}

function updateAnnotations(documentId, userId, annotations) {
  localStorage.setItem(`${documentId}/${userId}/annotations`, JSON.stringify(annotations));
}
/**
 *
 * @param {String} documentId Document id of the annotation
 * @param {String} userId User id of the annotation
 * @param {String} annotationId The id of the annotation
 *
 * This function finds all the annotation made by one user.
 *
 * @return {int} The index of the annotation in localstorage
 */
function findAnnotation(documentId, userId, annotationId) {
  let index = -1;
  let annotations = getAnnotations(documentId, userId);
  for (let i = 0, l = annotations.length; i < l; i++) {
    if (annotations[i].uuid === annotationId) {
      index = i;
      break;
    }
  }
  return index;
}


/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _appendChild__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);


/**
 * Render the response from PDFJSAnnotate.getStoreAdapter().getAnnotations to SVG
 *
 * @param {SVGElement} svg The SVG element to render the annotations to
 * @param {Object} viewport The page viewport data
 * @param {Object} data The response from PDFJSAnnotate.getStoreAdapter().getAnnotations
 * @return {Promise} Settled once rendering has completed
 *  A settled Promise will be either:
 *    - fulfilled: SVGElement
 *    - rejected: Error
 */
function render(svg, viewport, data) {
  return new Promise((resolve, reject) => {
    // Reset the content of the SVG
    svg.setAttribute('data-pdf-annotate-container', true);
    svg.setAttribute('data-pdf-annotate-viewport', JSON.stringify(viewport));
    svg.removeAttribute('data-pdf-annotate-document');
    svg.removeAttribute('data-pdf-annotate-page');

    // If there's no data nothing can be done
    if (!data) {
      svg.innerHTML = '';
      return resolve(svg);
    }

    svg.setAttribute('data-pdf-annotate-document', data.documentId);
    svg.setAttribute('data-pdf-annotate-page', data.pageNumber);

    // Make sure annotations is an array
    if (!Array.isArray(data.annotations) || data.annotations.length === 0) {
      return resolve(svg);
    }

    // Append or transform annotation to svg
    data.annotations.forEach((a) => {
      let node = svg.querySelector('[data-pdf-annotate-id="' + a.uuid + '"]');
      if (node) {
        (0,_appendChild__WEBPACK_IMPORTED_MODULE_0__.transformChild)(svg, node, viewport);
      }
      else {
        (0,_appendChild__WEBPACK_IMPORTED_MODULE_0__.appendChild)(svg, a, viewport);
      }
    });

    resolve(svg);
  });
}


/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22);
/* harmony import */ var _pen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24);
/* harmony import */ var _arrow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25);
/* harmony import */ var _eraser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26);
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(27);
/* harmony import */ var _rect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(28);
/* harmony import */ var _circle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(29);
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(30);
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(31);











/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  addEventListener: _event__WEBPACK_IMPORTED_MODULE_0__.addEventListener,
  removeEventListener: _event__WEBPACK_IMPORTED_MODULE_0__.removeEventListener,
  fireEvent: _event__WEBPACK_IMPORTED_MODULE_0__.fireEvent,

  disableEdit: _edit__WEBPACK_IMPORTED_MODULE_1__.disableEdit,
  enableEdit: _edit__WEBPACK_IMPORTED_MODULE_1__.enableEdit,

  disablePen: _pen__WEBPACK_IMPORTED_MODULE_2__.disablePen,
  enablePen: _pen__WEBPACK_IMPORTED_MODULE_2__.enablePen,
  setPen: _pen__WEBPACK_IMPORTED_MODULE_2__.setPen,

  disablePoint: _point__WEBPACK_IMPORTED_MODULE_5__.disablePoint,
  enablePoint: _point__WEBPACK_IMPORTED_MODULE_5__.enablePoint,

  disableRect: _rect__WEBPACK_IMPORTED_MODULE_6__.disableRect,
  enableRect: _rect__WEBPACK_IMPORTED_MODULE_6__.enableRect,

  disableCircle: _circle__WEBPACK_IMPORTED_MODULE_7__.disableCircle,
  enableCircle: _circle__WEBPACK_IMPORTED_MODULE_7__.enableCircle,
  setCircle: _circle__WEBPACK_IMPORTED_MODULE_7__.setCircle,
  addCircle: _circle__WEBPACK_IMPORTED_MODULE_7__.addCircle,

  disableArrow: _arrow__WEBPACK_IMPORTED_MODULE_3__.disableArrow,
  enableArrow: _arrow__WEBPACK_IMPORTED_MODULE_3__.enableArrow,
  setArrow: _arrow__WEBPACK_IMPORTED_MODULE_3__.setArrow,

  disableEraser: _eraser__WEBPACK_IMPORTED_MODULE_4__.disableEraser,
  enableEraser: _eraser__WEBPACK_IMPORTED_MODULE_4__.enableEraser,

  disableText: _text__WEBPACK_IMPORTED_MODULE_8__.disableText,
  enableText: _text__WEBPACK_IMPORTED_MODULE_8__.enableText,
  setText: _text__WEBPACK_IMPORTED_MODULE_8__.setText,

  createPage: _page__WEBPACK_IMPORTED_MODULE_9__.createPage,
  renderPage: _page__WEBPACK_IMPORTED_MODULE_9__.renderPage
});


/***/ }),
/* 22 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "enableEdit": () => (/* binding */ enableEdit),
/* harmony export */   "disableEdit": () => (/* binding */ disableEdit)
/* harmony export */ });
/* harmony import */ var _PDFJSAnnotate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23);
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);





let _enabled = false;
let isDragging = false;
let overlay;
let dragOffsetX, dragOffsetY, dragStartX, dragStartY;
const OVERLAY_BORDER_SIZE = 3;

/**
 * Create an overlay for editing an annotation.
 *
 * @param {Element} target The annotation element to apply overlay for
 */
function createEditOverlay(target) {
  destroyEditOverlay();

  overlay = document.createElement('div');
  let anchor = document.createElement('a');
  let parentNode = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.findSVGContainer)(target).parentNode;
  let id = target.getAttribute('data-pdf-annotate-id');
  let rect = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getOffsetAnnotationRect)(target);
  let styleLeft = rect.left - OVERLAY_BORDER_SIZE;
  let styleTop = rect.top - OVERLAY_BORDER_SIZE;

  overlay.setAttribute('id', 'pdf-annotate-edit-overlay');
  overlay.setAttribute('data-target-id', id);
  overlay.style.boxSizing = 'content-box';
  overlay.style.position = 'absolute';
  overlay.style.top = `${styleTop}px`;
  overlay.style.left = `${styleLeft}px`;
  overlay.style.width = `${rect.width}px`;
  overlay.style.height = `${rect.height}px`;
  overlay.style.border = `${OVERLAY_BORDER_SIZE}px solid ${_utils__WEBPACK_IMPORTED_MODULE_3__.BORDER_COLOR}`;
  overlay.style.borderRadius = `${OVERLAY_BORDER_SIZE}px`;
  overlay.style.zIndex = 20100;

  anchor.innerHTML = '×';
  anchor.setAttribute('href', 'javascript://');
  anchor.style.background = '#fff';
  anchor.style.borderRadius = '20px';
  anchor.style.border = '1px solid #bbb';
  anchor.style.color = '#bbb';
  anchor.style.fontSize = '16px';
  anchor.style.padding = '2px';
  anchor.style.textAlign = 'center';
  anchor.style.textDecoration = 'none';
  anchor.style.position = 'absolute';
  anchor.style.top = '-13px';
  anchor.style.right = '-13px';
  anchor.style.width = '25px';
  anchor.style.height = '25px';

  overlay.appendChild(anchor);
  parentNode.appendChild(overlay);
  document.addEventListener('click', handleDocumentClick);
  document.addEventListener('keyup', handleDocumentKeyup);
  document.addEventListener('mousedown', handleDocumentMousedown);
  anchor.addEventListener('click', deleteAnnotation);
  anchor.addEventListener('mouseover', () => {
    anchor.style.color = '#35A4DC';
    anchor.style.borderColor = '#999';
    anchor.style.boxShadow = '0 1px 1px #ccc';
  });
  anchor.addEventListener('mouseout', () => {
    anchor.style.color = '#bbb';
    anchor.style.borderColor = '#bbb';
    anchor.style.boxShadow = '';
  });
  overlay.addEventListener('mouseover', () => {
    if (!isDragging) { anchor.style.display = ''; }
  });
  overlay.addEventListener('mouseout', () => {
    anchor.style.display = 'none';
  });
}

/**
 * Destroy the edit overlay if it exists.
 */
function destroyEditOverlay() {
  if (overlay) {
    overlay.parentNode.removeChild(overlay);
    overlay = null;
  }

  document.removeEventListener('click', handleDocumentClick);
  document.removeEventListener('keyup', handleDocumentKeyup);
  document.removeEventListener('mousedown', handleDocumentMousedown);
  document.removeEventListener('mousemove', handleDocumentMousemove);
  document.removeEventListener('mouseup', handleDocumentMouseup);
  (0,_utils__WEBPACK_IMPORTED_MODULE_3__.enableUserSelect)();
}

/**
 * Delete currently selected annotation
 */
function deleteAnnotation() {
  if (!overlay) {
    return;
  }

  let annotationId = overlay.getAttribute('data-target-id');
  let svg = overlay.parentNode.querySelector(_config__WEBPACK_IMPORTED_MODULE_1__["default"].annotationSvgQuery());
  let { documentId } = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getMetadata)(svg);

  _PDFJSAnnotate__WEBPACK_IMPORTED_MODULE_0__["default"].getStoreAdapter().deleteAnnotation(documentId, annotationId).then(() => {
    let nodes = document.querySelectorAll(`[data-pdf-annotate-id="${annotationId}"]`);

    [...nodes].forEach((n) => {
      n.parentNode.removeChild(n);
    });
  });

  destroyEditOverlay();
}

/**
 * Handle document.click event
 *
 * @param {Event} e The DOM event that needs to be handled
 */
function handleDocumentClick(e) {
  if (!(0,_utils__WEBPACK_IMPORTED_MODULE_3__.findSVGAtPoint)(e.clientX, e.clientY)) { return; }

  // Remove current overlay
  let overlay = document.getElementById('pdf-annotate-edit-overlay');
  if (overlay) {
    if (isDragging || e.target === overlay) {
      return;
    }

    destroyEditOverlay();
  }
}

/**
 * Handle document.keyup event
 *
 * @param {KeyboardEvent} e The DOM event that needs to be handled
 */
function handleDocumentKeyup(e) {
  // keyCode is deprecated, so prefer the newer "key" method if possible
  let keyTest;
  if (e.key) {
    keyTest = e.key.toLowerCase() === 'delete' || e.key.toLowerCase() === 'backspace';
  }
  else {
    keyTest = e.keyCode === 8 || e.keyCode === 46;
  }
  if (overlay && keyTest &&
      e.target.nodeName.toLowerCase() !== 'textarea' &&
      e.target.nodeName.toLowerCase() !== 'input') {
    e.preventDefault();
    deleteAnnotation();
  }
}

/**
 * Handle document.mousedown event
 *
 * @param {Event} e The DOM event that needs to be handled
 */
function handleDocumentMousedown(e) {
  if (e.target !== overlay) {
    return;
  }

  // Highlight and strikeout annotations are bound to text within the document.
  // It doesn't make sense to allow repositioning these types of annotations.
  let annotationId = overlay.getAttribute('data-target-id');
  let target = document.querySelector(`[data-pdf-annotate-id="${annotationId}"]`);
  let type = target.getAttribute('data-pdf-annotate-type');

  if (type === 'highlight' || type === 'strikeout') { return; }

  isDragging = true;
  dragOffsetX = e.clientX;
  dragOffsetY = e.clientY;
  dragStartX = overlay.offsetLeft;
  dragStartY = overlay.offsetTop;

  overlay.style.background = 'rgba(255, 255, 255, 0.7)';
  overlay.style.cursor = 'move';
  overlay.querySelector('a').style.display = 'none';

  document.addEventListener('mousemove', handleDocumentMousemove);
  document.addEventListener('mouseup', handleDocumentMouseup);
  (0,_utils__WEBPACK_IMPORTED_MODULE_3__.disableUserSelect)();
}

/**
 * Handle document.mousemove event
 *
 * @param {Event} e The DOM event that needs to be handled
 */
function handleDocumentMousemove(e) {
  let parentNode = overlay.parentNode;
  let rect = parentNode.getBoundingClientRect();
  let y = (dragStartY + (e.clientY - dragOffsetY));
  let x = (dragStartX + (e.clientX - dragOffsetX));
  let minY = 0;
  let maxY = rect.height;
  let minX = 0;
  let maxX = rect.width;

  if (y > minY && y + overlay.offsetHeight < maxY) {
    overlay.style.top = `${y}px`;
  }

  if (x > minX && x + overlay.offsetWidth < maxX) {
    overlay.style.left = `${x}px`;
  }
}

/**
 * Handle document.mouseup event
 *
 * @param {Event} e The DOM event that needs to be handled
 */
function handleDocumentMouseup(e) {
  let annotationId = overlay.getAttribute('data-target-id');
  let target = document.querySelectorAll(`[data-pdf-annotate-id="${annotationId}"]`);
  let type = target[0].getAttribute('data-pdf-annotate-type');
  let svg = overlay.parentNode.querySelector(_config__WEBPACK_IMPORTED_MODULE_1__["default"].annotationSvgQuery());
  let { documentId } = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getMetadata)(svg);

  overlay.querySelector('a').style.display = '';

  _PDFJSAnnotate__WEBPACK_IMPORTED_MODULE_0__["default"].getStoreAdapter().getAnnotation(documentId, annotationId).then((annotation) => {
    let attribX = 'x';
    let attribY = 'y';
    if (['circle', 'fillcircle', 'emptycircle'].indexOf(type) > -1) {
      attribX = 'cx';
      attribY = 'cy';
    }

    if (type === 'point') {
      // Broken
      /*
      [...target].forEach((t, i) => {
        let moveTo = {
          x: overlay.offsetLeft + 3,
          y: overlay.offsetTop + 3
        };
        t.setAttribute(attribX, moveTo.x);
        t.setAttribute(attribY, moveTo.y);
        annotation[attribX] = moveTo.x;
        annotation[attribY] = moveTo.y;
      });
      */
      return;
    }
    else if (['area', 'highlight', 'textbox', 'circle', 'fillcircle', 'emptycircle'].indexOf(type) > -1) {
      let modelStart = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.convertToSvgPoint)([dragStartX, dragStartY], svg);
      let modelEnd = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.convertToSvgPoint)([overlay.offsetLeft, overlay.offsetTop], svg);
      let modelDelta = {
        x: modelEnd[0] - modelStart[0],
        y: modelEnd[1] - modelStart[1]
      };

      if (type === 'textbox') {
        target = [target[0].firstChild];
      }

      [...target].forEach((t, i) => {
        let modelX = parseInt(t.getAttribute(attribX), 10);
        let modelY = parseInt(t.getAttribute(attribY), 10);
        if (modelDelta.y !== 0) {
          modelY = modelY + modelDelta.y;

          t.setAttribute(attribY, modelY);
          if (annotation.rectangles && i < annotation.rectangles.length) {
            annotation.rectangles[i].y = modelY;
          }
          else if (annotation[attribY]) {
            annotation[attribY] = modelY;
          }
        }
        if (modelDelta.x !== 0) {
          modelX = modelX + modelDelta.x;

          t.setAttribute(attribX, modelX);
          if (annotation.rectangles && i < annotation.rectangles.length) {
            annotation.rectangles[i].x = modelX;
          }
          else if (annotation[attribX]) {
            annotation[attribX] = modelX;
          }
        }
      });
    }
    else if (type === 'strikeout') {
      return;
    //   let { deltaX, deltaY } = getDelta('x1', 'y1');
    //   [...target].forEach(target, (t, i) => {
    //     if (deltaY !== 0) {
    //       t.setAttribute('y1', parseInt(t.getAttribute('y1'), 10) + deltaY);
    //       t.setAttribute('y2', parseInt(t.getAttribute('y2'), 10) + deltaY);
    //       annotation.rectangles[i].y = parseInt(t.getAttribute('y1'), 10);
    //     }
    //     if (deltaX !== 0) {
    //       t.setAttribute('x1', parseInt(t.getAttribute('x1'), 10) + deltaX);
    //       t.setAttribute('x2', parseInt(t.getAttribute('x2'), 10) + deltaX);
    //       annotation.rectangles[i].x = parseInt(t.getAttribute('x1'), 10);
    //     }
    //   });
    }
    else if (type === 'drawing' || type === 'arrow') {
      // Do nothing as currently broken
      /*
      let modelStart = convertToSvgPoint([dragStartX, dragStartY], svg);
      let modelEnd = convertToSvgPoint([overlay.offsetLeft, overlay.offsetTop], svg);
      let modelDelta = {
        x: modelEnd[0] - modelStart[0],
        y: modelEnd[1] - modelStart[1]
      };

      annotation.lines.forEach((line, i) => {
        let [x, y] = annotation.lines[i];
        annotation.lines[i][0] = x + modelDelta.x;
        annotation.lines[i][1] = y + modelDelta.y;
      });

      target[0].parentNode.removeChild(target[0]);
      appendChild(svg, annotation);
      */
      return;
    }

    _PDFJSAnnotate__WEBPACK_IMPORTED_MODULE_0__["default"].getStoreAdapter().editAnnotation(documentId, annotationId, annotation);
  });

  setTimeout(() => {
    isDragging = false;
  }, 0);

  overlay.style.background = '';
  overlay.style.cursor = '';

  document.removeEventListener('mousemove', handleDocumentMousemove);
  document.removeEventListener('mouseup', handleDocumentMouseup);
  (0,_utils__WEBPACK_IMPORTED_MODULE_3__.enableUserSelect)();
}

/**
 * Handle annotation.click event
 *
 * @param {Element} e The annotation element that was clicked
 */
function handleAnnotationClick(target) {
  createEditOverlay(target);
}

/**
 * Enable edit mode behavior.
 */
function enableEdit() {
  if (_enabled) {
    return;
  }

  _enabled = true;
  (0,_event__WEBPACK_IMPORTED_MODULE_2__.addEventListener)('annotation:click', handleAnnotationClick);
};

/**
 * Disable edit mode behavior.
 */
function disableEdit() {
  destroyEditOverlay();

  if (!_enabled) {
    return;
  }

  _enabled = false;
  (0,_event__WEBPACK_IMPORTED_MODULE_2__.removeEventListener)('annotation:click', handleAnnotationClick);
};



/***/ }),
/* 23 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  annotationLayerName: 'annotationLayer',
  textLayerName: 'textLayer',
  annotationSvgQuery: function() {
    return 'svg.' + this.annotationLayerName;
  },
  annotationClassQuery: function() {
    return '.' + this.annotationLayerName;
  },
  textClassQuery: function() {
    return '.' + this.textLayerName;
  }
});


/***/ }),
/* 24 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setPen": () => (/* binding */ setPen),
/* harmony export */   "getPen": () => (/* binding */ getPen),
/* harmony export */   "enablePen": () => (/* binding */ enablePen),
/* harmony export */   "disablePen": () => (/* binding */ disablePen)
/* harmony export */ });
/* harmony import */ var _PDFJSAnnotate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _render_appendChild__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);




let _enabled = false;
let _candraw = false;
let _penSize;
let _penColor;
let path;
let lines = [];

/**
 * Handle document.touchdown or document.pointerdown event
 * @param {PointerEvent} e The DOM event to be handled
 */
function handleDocumentPointerdown(e) {
  path = null;
  lines = [];
  _candraw = true;
  /* if (!e.srcElement.classList.contains('annotationLayer')) {
    return;
  } */
  e.preventDefault();
}

/**
 * Handle document.pointerup event
 *
 * @param {PointerEvent} e The DOM event to be handled
 */
function handleDocumentPointerup(e) {
  saveToStorage(e.clientX, e.clientY);
}

function saveToStorage(x, y) {
  _candraw = false;
  let svg;
  if (lines.length > 1 && (svg = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.findSVGAtPoint)(x, y))) {
    let { documentId, pageNumber } = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getMetadata)(svg);
    _PDFJSAnnotate__WEBPACK_IMPORTED_MODULE_0__["default"].getStoreAdapter().addAnnotation(documentId, pageNumber, {
      type: 'drawing',
      width: _penSize,
      color: _penColor,
      lines
    }).then((annotation) => {
      if (path) {
        svg.removeChild(path);
      }

      (0,_render_appendChild__WEBPACK_IMPORTED_MODULE_1__.appendChild)(svg, annotation);
    });
  }
}

/**
 * Handle document.mousemove event
 *
 * @param {PointerEvent} e The DOM event to be handled
 */
function handleDocumentPointermove(e) {
  if (_candraw) {
    savePoint(e.clientX, e.clientY);
  }
}

/**
 * Handle document.keyup event
 *
 * @param {KeyboardEvent} e The DOM event to be handled
 * } e The DOM event to be handled
 */
function handleDocumentKeyup(e) {
  // Cancel rect if Esc is pressed
  if (e.keyCode === 27) {
    lines = null;
    path.parentNode.removeChild(path);
    document.removeEventListener('pointermove', handleDocumentPointermove);
    document.removeEventListener('pointerup', handleDocumentPointerup);
  }
}

/**
 * Save a point to the line being drawn.
 *
 * @param {Number} x The x coordinate of the point
 * @param {Number} y The y coordinate of the point
 */
function savePoint(x, y) {
  let svg = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.findSVGAtPoint)(x, y);
  if (!svg) {
    return;
  }

  let rect = svg.getBoundingClientRect();
  let point = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.convertToSvgPoint)([
    x - rect.left,
    y - rect.top
  ], svg);
  point[0] = point[0].toFixed(2);
  point[1] = point[1].toFixed(2);
  lines.push(point);

  if (lines.length <= 1) {
    return;
  }

  if (path) {
    svg.removeChild(path);
  }

  path = (0,_render_appendChild__WEBPACK_IMPORTED_MODULE_1__.appendChild)(svg, {
    type: 'drawing',
    color: _penColor,
    width: _penSize,
    lines
  });
}

/**
 * Set the attributes of the pen.
 *
 * @param {Number} penSize The size of the lines drawn by the pen, rounded to 2 decimal places
 * @param {String} penColor The color of the lines drawn by the pen
 */
function setPen(penSize = 1, penColor = '000000') {
  _penSize = Math.round(parseFloat(penSize) * 1e2) / 1e2;
  _penColor = penColor;
}

/**
 * Return pen attributes of the pen
 *
 * @return {Object} Object with size and color
 */
function getPen() {
  return {
    size: _penSize,
    color: _penColor
  };
}

/**
 * Enable the pen behavior
 */
function enablePen() {
  if (_enabled) {
    return;
  }

  _enabled = true;
  // Chrome and Firefox has different behaviors with how pen works, so we need different events.
  document.addEventListener('pointerdown', handleDocumentPointerdown);
  document.addEventListener('pointermove', handleDocumentPointermove);
  document.addEventListener('pointerup', handleDocumentPointerup);

  document.addEventListener('keyup', handleDocumentKeyup);
  (0,_utils__WEBPACK_IMPORTED_MODULE_2__.disableUserSelect)();
}

/**
 * Disable the pen behavior
 */
function disablePen() {
  if (!_enabled) {
    return;
  }

  _enabled = false;
  document.removeEventListener('pointerdown', handleDocumentPointerdown);
  document.removeEventListener('pointermove', handleDocumentPointermove);
  document.removeEventListener('pointerup', handleDocumentPointerup);

  document.removeEventListener('keyup', handleDocumentKeyup);
  (0,_utils__WEBPACK_IMPORTED_MODULE_2__.enableUserSelect)();
}


/***/ }),
/* 25 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setArrow": () => (/* binding */ setArrow),
/* harmony export */   "enableArrow": () => (/* binding */ enableArrow),
/* harmony export */   "disableArrow": () => (/* binding */ disableArrow)
/* harmony export */ });
/* harmony import */ var _PDFJSAnnotate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _render_appendChild__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);




let _enabled = false;
let _penSize;
let _penColor;
let path;
let lines;
let originY;
let originX;

/**
 * Handle document.mousedown event
 */
function handleDocumentMousedown(e) {
  let target = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.findAnnotationAtPoint)(e.clientX, e.clientY);
  if (target === null) {
    return;
  }

  let type = target.getAttribute('data-pdf-annotate-type');
  if (type !== 'circle' && type !== 'fillcircle' && type !== 'emptycircle') {
    return;
  }

  let svg = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.findSVGContainer)(target);
  let { documentId } = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getMetadata)(svg);
  let annotationId = target.getAttribute('data-pdf-annotate-id');

  _PDFJSAnnotate__WEBPACK_IMPORTED_MODULE_0__["default"].getStoreAdapter().getAnnotation(documentId, annotationId).then((annotation) => {
    if (annotation) {
      path = null;
      lines = [];

      let point = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.convertToScreenPoint)([
        annotation.cx,
        annotation.cy
      ], svg);

      let rect = svg.getBoundingClientRect();

      originX = point[0] + rect.left;
      originY = point[1] + rect.top;

      document.addEventListener('mousemove', handleDocumentMousemove);
      document.addEventListener('mouseup', handleDocumentMouseup);
    }
  });
}

/**
 * Handle document.mouseup event
 *
 * @param {Event} e The DOM event to be handled
 */
function handleDocumentMouseup(e) {
  let svg;
  if (lines.length > 1 && (svg = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.findSVGAtPoint)(e.clientX, e.clientY))) {
    let { documentId, pageNumber } = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getMetadata)(svg);

    _PDFJSAnnotate__WEBPACK_IMPORTED_MODULE_0__["default"].getStoreAdapter().addAnnotation(documentId, pageNumber, {
      type: 'arrow',
      width: _penSize,
      color: _penColor,
      lines
    }).then((annotation) => {
      if (path) {
        svg.removeChild(path);
      }

      (0,_render_appendChild__WEBPACK_IMPORTED_MODULE_1__.appendChild)(svg, annotation);
    });
  }

  document.removeEventListener('mousemove', handleDocumentMousemove);
  document.removeEventListener('mouseup', handleDocumentMouseup);
}

/**
 * Handle document.mousemove event
 *
 * @param {Event} e The DOM event to be handled
 */
function handleDocumentMousemove(e) {
  let x = lines.length === 0 ? originX : e.clientX;
  let y = lines.length === 0 ? originY : e.clientY;

  savePoint(x, y);
}

/**
 * Handle document.keyup event
 *
 * @param {Event} e The DOM event to be handled
 */
function handleDocumentKeyup(e) {
  // Cancel rect if Esc is pressed
  if (e.keyCode === 27) {
    lines = null;
    path.parentNode.removeChild(path);
    document.removeEventListener('mousemove', handleDocumentMousemove);
    document.removeEventListener('mouseup', handleDocumentMouseup);
  }
}

/**
 * Save a point to the line being drawn.
 *
 * @param {Number} x The x coordinate of the point
 * @param {Number} y The y coordinate of the point
 */
function savePoint(x, y) {
  let svg = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.findSVGAtPoint)(x, y);
  if (!svg) {
    return;
  }

  let rect = svg.getBoundingClientRect();
  let point = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.convertToSvgPoint)([
    x - rect.left,
    y - rect.top
  ], svg);

  if (lines.length < 2) {
    lines.push(point);
    return;
  }
  else {
    lines[1] = point; // update end point
  }

  if (path) {
    svg.removeChild(path);
  }

  path = (0,_render_appendChild__WEBPACK_IMPORTED_MODULE_1__.appendChild)(svg, {
    type: 'arrow',
    color: _penColor,
    width: _penSize,
    lines
  });
}

/**
 * Set the attributes of the pen.
 *
 * @param {Number} penSize The size of the lines drawn by the pen
 * @param {String} penColor The color of the lines drawn by the pen
 */
function setArrow(penSize = 10, penColor = '0000FF') {
  _penSize = parseInt(penSize, 10);
  _penColor = penColor;
}

/**
 * Enable the pen behavior
 */
function enableArrow() {
  if (_enabled) { return; }

  _enabled = true;
  document.addEventListener('mousedown', handleDocumentMousedown);
  document.addEventListener('keyup', handleDocumentKeyup);
  (0,_utils__WEBPACK_IMPORTED_MODULE_2__.disableUserSelect)();
}

/**
 * Disable the pen behavior
 */
function disableArrow() {
  if (!_enabled) { return; }

  _enabled = false;
  document.removeEventListener('mousedown', handleDocumentMousedown);
  document.removeEventListener('keyup', handleDocumentKeyup);
  (0,_utils__WEBPACK_IMPORTED_MODULE_2__.enableUserSelect)();
}



/***/ }),
/* 26 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "enableEraser": () => (/* binding */ enableEraser),
/* harmony export */   "disableEraser": () => (/* binding */ disableEraser)
/* harmony export */ });
/* harmony import */ var _PDFJSAnnotate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);



let _canerase = false;
let previousPoint = null;

/**
 *
 * @param {PointerEvent} e DOM event to handle
 */
function handleDocumentDown(e) {
  _canerase = true;
  previousPoint = [e.clientX, e.clientY];
}

/**
 *
 * @param {PointerEvent} e DOM event to handle
 */
function handleDocumentUp(e) {
  _canerase = false;
  erase((0,_utils__WEBPACK_IMPORTED_MODULE_1__.findAnnotationAtPoint)(e.clientX, e.clientY));
}

/**
 *
 * @param {PointerEvent} e DOM event to handle
 */
function handleDocumentMouseMove(e) {
  if (!_canerase) {
    return;
  }

  // This algorithm attempts to get the various points between the last
  // PointerEvent and this one
  let check = [];
  let diffX = Math.abs(previousPoint[0] - e.clientX);
  let diffY = Math.abs(previousPoint[1] - e.clientY);
  if (diffX >= 1 || diffY >= 1) {
    let maxSteps = Math.round(Math.max(diffX, diffY));
    let subStepSize = Math.min(diffX, diffY) / maxSteps;
    let smallerTest = diffX < diffY;
    let startPoint = [
      Math.min(previousPoint[0], e.clientX),
      Math.min(previousPoint[1], e.clientY)
    ];
    for (let i = 0; i < maxSteps; i++) {
      if (smallerTest) {
        check.push([Math.round(startPoint[0] + (subStepSize * i)), Math.round(startPoint[1] + i)]);
      }
      else {
        check.push([Math.round(startPoint[0] + i), Math.round(startPoint[1] + (subStepSize * i))]);
      }
    }
  }
  for (let point of check) {
    erase((0,_utils__WEBPACK_IMPORTED_MODULE_1__.findAnnotationAtPoint)(point[0], point[1]));
  }
  previousPoint = [e.clientX, e.clientY];
}

function erase(target) {
  if (!_canerase) {
    return;
  }

  if (target) {
    let { documentId } = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getMetadata)(target.parentElement);
    let annotationId = target.getAttribute('data-pdf-annotate-id');
    _PDFJSAnnotate__WEBPACK_IMPORTED_MODULE_0__["default"].getStoreAdapter().deleteAnnotation(documentId, annotationId).then(() => {
      let nodes = document.querySelectorAll(`[data-pdf-annotate-id="${annotationId}"]`);
      [...nodes].forEach((n) => {
        n.parentNode.removeChild(n);
      });
    });
  }
}

function enableEraser() {
  document.addEventListener('pointermove', handleDocumentMouseMove);
  document.addEventListener('pointerdown', handleDocumentDown);
  document.addEventListener('pointerup', handleDocumentUp);
}

function disableEraser() {
  document.removeEventListener('pointermove', handleDocumentMouseMove);
  document.removeEventListener('pointerdown', handleDocumentDown);
  document.removeEventListener('pointerup', handleDocumentUp);
}


/***/ }),
/* 27 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "enablePoint": () => (/* binding */ enablePoint),
/* harmony export */   "disablePoint": () => (/* binding */ disablePoint)
/* harmony export */ });
/* harmony import */ var _PDFJSAnnotate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _render_appendChild__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);




let _enabled = false;
let input;

/**
 * Handle document.mouseup event
 *
 * @param {Event} The DOM event to be handled
 */
function handleDocumentMouseup(e) {
  if (input || !(0,_utils__WEBPACK_IMPORTED_MODULE_2__.findSVGAtPoint)(e.clientX, e.clientY)) {
    return;
  }

  input = document.createElement('input');
  input.setAttribute('id', 'pdf-annotate-point-input');
  input.setAttribute('placeholder', 'Enter comment');
  input.style.border = `3px solid ${_utils__WEBPACK_IMPORTED_MODULE_2__.BORDER_COLOR}`;
  input.style.borderRadius = '3px';
  input.style.position = 'absolute';
  input.style.top = `${e.clientY}px`;
  input.style.left = `${e.clientX}px`;

  input.addEventListener('blur', handleInputBlur);
  input.addEventListener('keyup', handleInputKeyup);

  document.body.appendChild(input);
  input.focus();
}

/**
 * Handle input.blur event
 */
function handleInputBlur() {
  savePoint();
}

/**
 * Handle input.keyup event
 *
 * @param {Event} e The DOM event to handle
 */
function handleInputKeyup(e) {
  if (e.keyCode === 27) {
    closeInput();
  }
  else if (e.keyCode === 13) {
    savePoint();
  }
}

/**
 * Save a new point annotation from input
 */
function savePoint() {
  if (input.value.trim().length > 0) {
    let clientX = parseInt(input.style.left, 10);
    let clientY = parseInt(input.style.top, 10);
    let content = input.value.trim();
    let svg = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.findSVGAtPoint)(clientX, clientY);
    if (!svg) {
      return;
    }

    let rect = svg.getBoundingClientRect();
    let { documentId, pageNumber } = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getMetadata)(svg);
    let annotation = Object.assign({
      type: 'point'
    }, (0,_utils__WEBPACK_IMPORTED_MODULE_2__.scaleDown)(svg, {
      x: clientX - rect.left,
      y: clientY - rect.top
    }));

    _PDFJSAnnotate__WEBPACK_IMPORTED_MODULE_0__["default"].getStoreAdapter().addAnnotation(documentId, pageNumber, annotation)
      .then((annotation) => {
        _PDFJSAnnotate__WEBPACK_IMPORTED_MODULE_0__["default"].getStoreAdapter().addComment(
          documentId,
          annotation.uuid,
          content
        );

        (0,_render_appendChild__WEBPACK_IMPORTED_MODULE_1__.appendChild)(svg, annotation);
      });
  }

  closeInput();
}

/**
 * Close the input element
 */
function closeInput() {
  input.removeEventListener('blur', handleInputBlur);
  input.removeEventListener('keyup', handleInputKeyup);
  document.body.removeChild(input);
  input = null;
}

/**
 * Enable point annotation behavior
 */
function enablePoint() {
  if (_enabled) { return; }

  _enabled = true;
  document.addEventListener('mouseup', handleDocumentMouseup);
}

/**
 * Disable point annotation behavior
 */
function disablePoint() {
  if (!_enabled) { return; }

  _enabled = false;
  document.removeEventListener('mouseup', handleDocumentMouseup);
}



/***/ }),
/* 28 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "enableRect": () => (/* binding */ enableRect),
/* harmony export */   "disableRect": () => (/* binding */ disableRect)
/* harmony export */ });
/* harmony import */ var _PDFJSAnnotate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23);
/* harmony import */ var _render_appendChild__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);





let _enabled = false;
let _type;
let overlay;
let originY;
let originX;

/**
 * Get the current window selection as rects
 *
 * @return {Array} An Array of rects
 */
function getSelectionRects() {
  try {
    let selection = window.getSelection();
    let range = selection.getRangeAt(0);
    let rects = range.getClientRects();

    if (rects.length > 0 && rects[0].width > 0 && rects[0].height > 0) {
      return rects;
    }
  } catch (e) {}

  return null;
}

/**
 * Handle document.mousedown event
 *
 * @param {Event} e The DOM event to handle
 */
function handleDocumentMousedown(e) {
  let svg;
  if (_type !== "area" || !(svg = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.findSVGAtPoint)(e.clientX, e.clientY))) {
    return;
  }

  let rect = svg.getBoundingClientRect();
  originY = e.clientY;
  originX = e.clientX;

  overlay = document.createElement("div");
  overlay.style.position = "absolute";
  overlay.style.top = `${originY - rect.top}px`;
  overlay.style.left = `${originX - rect.left}px`;
  overlay.style.border = `3px solid ${_utils__WEBPACK_IMPORTED_MODULE_3__.BORDER_COLOR}`;
  overlay.style.borderRadius = "3px";
  svg.parentNode.appendChild(overlay);

  document.addEventListener("mousemove", handleDocumentMousemove);
  (0,_utils__WEBPACK_IMPORTED_MODULE_3__.disableUserSelect)();
}

/**
 * Handle document.mousemove event
 *
 * @param {Event} e The DOM event to handle
 */
function handleDocumentMousemove(e) {
  let svg = overlay.parentNode.querySelector(_config__WEBPACK_IMPORTED_MODULE_1__["default"].annotationSvgQuery());
  let rect = svg.getBoundingClientRect();

  if (originX + (e.clientX - originX) < rect.right) {
    overlay.style.width = `${e.clientX - originX}px`;
  }

  if (originY + (e.clientY - originY) < rect.bottom) {
    overlay.style.height = `${e.clientY - originY}px`;
  }
}

/**
 * Handle document.mouseup event
 *
 * @param {Event} e The DOM event to handle
 */
function handleDocumentMouseup(e) {
  let rects;
  if (_type !== "area" && (rects = getSelectionRects())) {
    saveRect(
      _type,
      [...rects].map((r) => {
        return {
          top: r.top,
          left: r.left,
          width: r.width,
          height: r.height,
        };
      })
    );
  } else if (_type === "area" && overlay) {
    let svg = overlay.parentNode.querySelector(_config__WEBPACK_IMPORTED_MODULE_1__["default"].annotationSvgQuery());
    let rect = svg.getBoundingClientRect();
    saveRect(_type, [
      {
        top: parseInt(overlay.style.top, 10) + rect.top,
        left: parseInt(overlay.style.left, 10) + rect.left,
        width: parseInt(overlay.style.width, 10),
        height: parseInt(overlay.style.height, 10),
      },
    ]);

    overlay.parentNode.removeChild(overlay);
    overlay = null;

    document.removeEventListener("mousemove", handleDocumentMousemove);
    (0,_utils__WEBPACK_IMPORTED_MODULE_3__.enableUserSelect)();
  }
}

/**
 * Handle document.keyup event
 *
 * @param {Event} e The DOM event to handle
 */
function handleDocumentKeyup(e) {
  // Cancel rect if Esc is pressed
  if (e.keyCode === 27) {
    let selection = window.getSelection();
    selection.removeAllRanges();
    if (overlay && overlay.parentNode) {
      overlay.parentNode.removeChild(overlay);
      overlay = null;
      document.removeEventListener("mousemove", handleDocumentMousemove);
    }
  }
}

/**
 * Save a rect annotation
 *
 * @param {String} type The type of rect (area, highlight, strikeout)
 * @param {Array} rects The rects to use for annotation
 * @param {String} color The color of the rects
 */
function saveRect(type, rects, color) {
  let svg = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.findSVGAtPoint)(rects[0].left, rects[0].top);
  let annotation;

  if (!svg) {
    return;
  }

  let boundingRect = svg.getBoundingClientRect();

  if (!color) {
    if (type === "highlight") {
      color = "FFFF00";
    } else if (type === "strikeout") {
      color = "FF0000";
    }
  }

  // Initialize the annotation
  annotation = {
    type,
    color,
    rectangles: [...rects]
      .map((r) => {
        let offset = 0;

        if (type === "strikeout") {
          offset = r.height / 2;
        }

        return (0,_utils__WEBPACK_IMPORTED_MODULE_3__.convertToSvgRect)(
          {
            y: r.top + offset - boundingRect.top,
            x: r.left - boundingRect.left,
            width: r.width,
            height: r.height,
          },
          svg
        );
      })
      .filter((r) => r.width > 0 && r.height > 0 && r.x > -1 && r.y > -1),
  };

  // Short circuit if no rectangles exist
  if (annotation.rectangles.length === 0) {
    return;
  }

  // Special treatment for area as it only supports a single rect
  if (type === "area") {
    let rect = annotation.rectangles[0];
    delete annotation.rectangles;
    annotation.x = rect.x;
    annotation.y = rect.y;
    annotation.width = rect.width;
    annotation.height = rect.height;
  }

  let { documentId, pageNumber } = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getMetadata)(svg);

  // Add the annotation
  _PDFJSAnnotate__WEBPACK_IMPORTED_MODULE_0__["default"].getStoreAdapter()
    .addAnnotation(documentId, pageNumber, annotation)
    .then((annotation) => {
      (0,_render_appendChild__WEBPACK_IMPORTED_MODULE_2__.appendChild)(svg, annotation);
    });
}

/**
 * Enable rect behavior
 */
function enableRect(type) {
  _type = type;

  if (_enabled) {
    return;
  }

  _enabled = false;
  document.addEventListener("mouseup", handleDocumentMouseup);
  document.addEventListener("mousedown", handleDocumentMousedown);
  document.addEventListener("keyup", handleDocumentKeyup);
}

/**
 * Disable rect behavior
 */
function disableRect() {
  if (!_enabled) {
    return;
  }

  _enabled = false;
  document.removeEventListener("mouseup", handleDocumentMouseup);
  document.removeEventListener("mousedown", handleDocumentMousedown);
  document.removeEventListener("keyup", handleDocumentKeyup);
}


/***/ }),
/* 29 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setCircle": () => (/* binding */ setCircle),
/* harmony export */   "enableCircle": () => (/* binding */ enableCircle),
/* harmony export */   "disableCircle": () => (/* binding */ disableCircle),
/* harmony export */   "addCircle": () => (/* binding */ addCircle)
/* harmony export */ });
/* harmony import */ var _PDFJSAnnotate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _render_appendChild__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);




let _enabled = false;
let _type;
let _circleRadius = 10;
let _circleColor = '0000FF';

/**
 * Set the attributes of the pen.
 *
 * @param {Number} circleRadius The radius of the circle
 * @param {String} circleColor The color of the circle
 */
function setCircle(circleRadius = 10, circleColor = '0000FF') {
  _circleRadius = parseInt(circleRadius, 10);
  _circleColor = circleColor;
}

/**
 * Handle document.mouseup event
 *
 * @param {Event} e The DOM event to handle
 */
function handleDocumentMouseup(e) {
  let svg = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.findSVGAtPoint)(e.clientX, e.clientY);
  if (!svg) {
    return;
  }
  let rect = svg.getBoundingClientRect();
  saveCircle(svg, _type, {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top
  }, _circleRadius, _circleColor);
}

/**
 * Save a circle annotation
 *
 * @param {SVGElement} svg
 * @param {String} type The type of circle (circle, emptycircle, fillcircle)
 * @param {Object} pt The point to use for annotation
 * @param {float} radius
 * @param {String} color The color of the rects
 */
function saveCircle(svg, type, pt, radius, color) {
  // Initialize the annotation
  let svg_pt = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.convertToSvgPoint)([ pt.x, pt.y ], svg);
  let annotation = {
    type,
    color,
    cx: svg_pt[0],
    cy: svg_pt[1],
    r: radius
  };

  let { documentId, pageNumber } = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getMetadata)(svg);

  // Add the annotation
  _PDFJSAnnotate__WEBPACK_IMPORTED_MODULE_0__["default"].getStoreAdapter().addAnnotation(documentId, pageNumber, annotation)
    .then((annotation) => {
      (0,_render_appendChild__WEBPACK_IMPORTED_MODULE_1__.appendChild)(svg, annotation);
    });
}

/**
 * Enable circle behavior
 */
function enableCircle(type) {
  _type = type;

  if (_enabled) { return; }

  _enabled = true;
  document.addEventListener('mouseup', handleDocumentMouseup);
}

/**
 * Disable circle behavior
 */
function disableCircle() {
  if (!_enabled) { return; }

  _enabled = false;
  document.removeEventListener('mouseup', handleDocumentMouseup);
}

function addCircle(type, e) {
  let oldType = _type;
  _type = type;
  handleDocumentMouseup(e);
  _type = oldType;
}


/***/ }),
/* 30 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setText": () => (/* binding */ setText),
/* harmony export */   "enableText": () => (/* binding */ enableText),
/* harmony export */   "disableText": () => (/* binding */ disableText)
/* harmony export */ });
/* harmony import */ var _PDFJSAnnotate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _render_appendChild__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);




let _enabled = false;
let input;
let _textSize;
let _textColor;

/**
 * Handle document.mouseup event
 *
 * @param {Event} e The DOM event to handle
 */
function handleDocumentMouseup(e) {
  if (input || !(0,_utils__WEBPACK_IMPORTED_MODULE_2__.findSVGAtPoint)(e.clientX, e.clientY)) {
    return;
  }

  input = document.createElement('input');
  input.setAttribute('id', 'pdf-annotate-text-input');
  input.setAttribute('placeholder', 'Enter text');
  input.style.border = `3px solid ${_utils__WEBPACK_IMPORTED_MODULE_2__.BORDER_COLOR}`;
  input.style.borderRadius = '3px';
  input.style.position = 'absolute';
  input.style.top = `${e.clientY}px`;
  input.style.left = `${e.clientX}px`;
  input.style.fontSize = `${_textSize}px`;
  input.style.zIndex = '41';
  input.addEventListener('blur', handleInputBlur);
  input.addEventListener('keyup', handleInputKeyup);

  document.body.appendChild(input);
  input.focus();
}

/**
 * Handle input.blur event
 */
function handleInputBlur() {
  saveText();
}

/**
 * Handle input.keyup event
 *
 * @param {Event} e The DOM event to handle
 */
function handleInputKeyup(e) {
  if (e.keyCode === 27) {
    closeInput();
  }
  else if (e.keyCode === 13) {
    saveText();
  }
}

/**
 * Save a text annotation from input
 */
function saveText() {
  let value = (input.value) ? input.value.replace(/ +$/, '') : '';
  if (value.length > 0) {
    let clientX = parseInt(input.style.left, 10);
    let clientY = parseInt(input.style.top, 10);
    let svg = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.findSVGAtPoint)(clientX, clientY);
    if (!svg) {
      return;
    }
    let height = _textSize;
    let { documentId, pageNumber, viewport } = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getMetadata)(svg);
    let scale = 1 / viewport.scale;
    let rect = svg.getBoundingClientRect();
    let pt = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.convertToSvgPoint)([
      clientX - rect.left,
      clientY - rect.top + height], svg, viewport);
    let annotation = {
      type: 'textbox',
      size: _textSize * scale,
      color: _textColor,
      content: value,
      x: pt[0],
      y: pt[1],
      rotation: -viewport.rotation
    };

    _PDFJSAnnotate__WEBPACK_IMPORTED_MODULE_0__["default"].getStoreAdapter().addAnnotation(documentId, pageNumber, annotation)
      .then((annotation) => {
        (0,_render_appendChild__WEBPACK_IMPORTED_MODULE_1__.appendChild)(svg, annotation);
      });
  }

  closeInput();
}

/**
 * Close the input
 */
function closeInput() {
  if (input) {
    input.removeEventListener('blur', handleInputBlur);
    input.removeEventListener('keyup', handleInputKeyup);
    document.body.removeChild(input);
    input = null;
  }
}

/**
 * Set the text attributes
 *
 * @param {Number} textSize The size of the text
 * @param {String} textColor The color of the text
 */
function setText(textSize = 12, textColor = '000000') {
  _textSize = parseInt(textSize, 10);
  _textColor = textColor;
}

/**
 * Enable text behavior
 */
function enableText() {
  if (_enabled) {
    return;
  }

  _enabled = true;
  document.addEventListener('mouseup', handleDocumentMouseup);
}

/**
 * Disable text behavior
 */
function disableText() {
  if (!_enabled) { return; }

  _enabled = false;
  document.removeEventListener('mouseup', handleDocumentMouseup);
}



/***/ }),
/* 31 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPage": () => (/* binding */ createPage),
/* harmony export */   "renderPage": () => (/* binding */ renderPage)
/* harmony export */ });
/* harmony import */ var _PDFJSAnnotate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23);
/* harmony import */ var _a11y_renderScreenReaderHints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32);




// Template for creating a new page
const PAGE_TEMPLATE = `
  <div style="visibility: hidden;" class="page" data-loaded="false">
    <div class="canvasWrapper">
      <canvas></canvas>
    </div>
    <svg class="` + _config__WEBPACK_IMPORTED_MODULE_1__["default"].annotationLayerName + `"></svg>
    <div class="` + _config__WEBPACK_IMPORTED_MODULE_1__["default"].textLayerName + `"></div>
  </div>
`;

/**
 * Create a new page to be appended to the DOM.
 *
 * @param {Number} pageNumber The page number that is being created
 * @return {HTMLElement}
 */
function createPage(pageNumber) {
  let temp = document.createElement('div');
  temp.innerHTML = PAGE_TEMPLATE;

  let page = temp.children[0];
  let canvas = page.querySelector('canvas');

  page.setAttribute('id', `pageContainer${pageNumber}`);
  page.setAttribute('data-page-number', pageNumber);

  canvas.mozOpaque = true;
  canvas.setAttribute('id', `page${pageNumber}`);

  return page;
}

/**
 * Render a page that has already been created.
 *
 * @param {Number} pageNumber The page number to be rendered
 * @param {Object} renderOptions The options for rendering
 * @return {Promise} Settled once rendering has completed
 *  A settled Promise will be either:
 *    - fulfilled: [pdfPage, annotations]
 *    - rejected: Error
 */
function renderPage(pageNumber, renderOptions) {
  let {
    documentId,
    pdfDocument,
    scale,
    rotate
  } = renderOptions;

  // Load the page and annotations
  return Promise.all([
    pdfDocument.getPage(pageNumber),
    _PDFJSAnnotate__WEBPACK_IMPORTED_MODULE_0__["default"].getAnnotations(documentId, pageNumber)
  ]).then(([pdfPage, annotations]) => {
    let page = document.getElementById(`pageContainer${pageNumber}`);
    let svg = page.querySelector(_config__WEBPACK_IMPORTED_MODULE_1__["default"].annotationClassQuery());
    let canvas = page.querySelector('.canvasWrapper canvas');
    let canvasContext = canvas.getContext('2d', {alpha: false});
    let totalRotation = (rotate + pdfPage.rotate) % 360;
    let viewport = pdfPage.getViewport({scale: scale, rotation: totalRotation});
    let transform = scalePage(pageNumber, viewport, canvasContext);

    // Render the page
    return Promise.all([
      pdfPage.render({ canvasContext, viewport, transform }).promise,
      _PDFJSAnnotate__WEBPACK_IMPORTED_MODULE_0__["default"].render(svg, viewport, annotations)
    ]).then(() => {
      // Text content is needed for a11y, but is also necessary for creating
      // highlight and strikeout annotations which require selecting text.
      return pdfPage.getTextContent({normalizeWhitespace: true}).then((textContent) => {
        return new Promise((resolve, reject) => {
          // Render text layer for a11y of text content
          let textLayer = page.querySelector(_config__WEBPACK_IMPORTED_MODULE_1__["default"].textClassQuery());
          let textLayerFactory = new pdfjsViewer.DefaultTextLayerFactory();
          let textLayerBuilder = textLayerFactory.createTextLayerBuilder(textLayer, pageNumber - 1, viewport);
          textLayerBuilder.setTextContent(textContent);
          textLayerBuilder.render();

          // Enable a11y for annotations
          // Timeout is needed to wait for `textLayerBuilder.render`
          setTimeout(() => {
            try {
              (0,_a11y_renderScreenReaderHints__WEBPACK_IMPORTED_MODULE_2__["default"])(annotations.annotations);
              resolve();
            }
            catch (e) {
              reject(e);
            }
          });
        });
      });
    }).then(() => {
      // Indicate that the page was loaded
      page.setAttribute('data-loaded', 'true');

      return [pdfPage, annotations];
    });
  });
}

/**
 * Scale the elements of a page.
 *
 * @param {Number} pageNumber The page number to be scaled
 * @param {Object} viewport The viewport of the PDF page (see pdfPage.getViewport(scale, rotate))
 * @param {Object} context The canvas context that the PDF page is rendered to
 * @return {Array} The transform data for rendering the PDF page
 */
function scalePage(pageNumber, viewport, context) {
  let page = document.getElementById(`pageContainer${pageNumber}`);
  let canvas = page.querySelector('.canvasWrapper canvas');
  let svg = page.querySelector(_config__WEBPACK_IMPORTED_MODULE_1__["default"].annotationClassQuery());
  let wrapper = page.querySelector('.canvasWrapper');
  let textLayer = page.querySelector(_config__WEBPACK_IMPORTED_MODULE_1__["default"].textClassQuery());
  let outputScale = getOutputScale(context);
  let transform = !outputScale.scaled ? null : [outputScale.sx, 0, 0, outputScale.sy, 0, 0];
  let sfx = approximateFraction(outputScale.sx);
  let sfy = approximateFraction(outputScale.sy);

  // Adjust width/height for scale
  page.style.visibility = '';
  canvas.width = roundToDivide(viewport.width * outputScale.sx, sfx[0]);
  canvas.height = roundToDivide(viewport.height * outputScale.sy, sfy[0]);
  canvas.style.width = roundToDivide(viewport.width, sfx[1]) + 'px';
  canvas.style.height = roundToDivide(viewport.height, sfx[1]) + 'px';
  svg.setAttribute('width', viewport.width);
  svg.setAttribute('height', viewport.height);
  svg.style.width = `${viewport.width}px`;
  svg.style.height = `${viewport.height}px`;
  page.style.width = `${viewport.width}px`;
  page.style.height = `${viewport.height}px`;
  wrapper.style.width = `${viewport.width}px`;
  wrapper.style.height = `${viewport.height}px`;
  textLayer.style.width = `${viewport.width}px`;
  textLayer.style.height = `${viewport.height}px`;

  return transform;
}

/**
 * Approximates a float number as a fraction using Farey sequence (max order of 8).
 *
 * @param {Number} x Positive float number
 * @return {Array} Estimated fraction: the first array item is a numerator,
 *                 the second one is a denominator.
 */
function approximateFraction(x) {
  // Fast path for int numbers or their inversions.
  if (Math.floor(x) === x) {
    return [x, 1];
  }

  const xinv = 1 / x;
  const limit = 8;
  if (xinv > limit) {
    return [1, limit];
  }
  else if (Math.floor(xinv) === xinv) {
    return [1, xinv];
  }

  const x_ = x > 1 ? xinv : x;

  // a/b and c/d are neighbours in Farey sequence.
  let a = 0; let b = 1; let c = 1; let d = 1;

  // Limit search to order 8.
  while (true) {
    // Generating next term in sequence (order of q).
    let p = a + c; let q = b + d;
    if (q > limit) {
      break;
    }
    if (x_ <= p / q) {
      c = p; d = q;
    }
    else {
      a = p; b = q;
    }
  }

  // Select closest of neighbours to x.
  if (x_ - a / b < c / d - x_) {
    return x_ === x ? [a, b] : [b, a];
  }
  else {
    return x_ === x ? [c, d] : [d, c];
  }
}

function getOutputScale(ctx) {
  let devicePixelRatio = window.devicePixelRatio || 1;
  let backingStoreRatio = ctx.webkitBackingStorePixelRatio ||
                          ctx.mozBackingStorePixelRatio ||
                          ctx.msBackingStorePixelRatio ||
                          ctx.oBackingStorePixelRatio ||
                          ctx.backingStorePixelRatio || 1;
  let pixelRatio = devicePixelRatio / backingStoreRatio;
  return {
    sx: pixelRatio,
    sy: pixelRatio,
    scaled: pixelRatio !== 1
  };
}

function roundToDivide(x, div) {
  let r = x % div;
  return r === 0 ? x : Math.round(x - r + div);
}


/***/ }),
/* 32 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderScreenReaderHints)
/* harmony export */ });
/* harmony import */ var _insertScreenReaderHint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);
/* harmony import */ var _initEventHandlers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39);



// TODO This is not the right place for this to live
(0,_initEventHandlers__WEBPACK_IMPORTED_MODULE_1__["default"])();

/**
 * Insert hints into the DOM for screen readers.
 *
 * @param {Array} annotations The annotations that hints are inserted for
 */
function renderScreenReaderHints(annotations) {
  annotations = Array.isArray(annotations) ? annotations : [];

  // Insert hints for each type
  Object.keys(SORT_TYPES).forEach((type) => {
    let sortBy = SORT_TYPES[type];
    annotations
      .filter((a) => a.type === type)
      .sort(sortBy)
      .forEach((a, i) => (0,_insertScreenReaderHint__WEBPACK_IMPORTED_MODULE_0__["default"])(a, i + 1));
  });
}

// Sort annotations first by y, then by x.
// This allows hints to be injected in the order they appear,
// which makes numbering them easier.
function sortByPoint(a, b) {
  if (a.y < b.y) {
    return a.x - b.x;
  }
  else {
    return 1;
  }
}

// Sort annotation by it's first rectangle
function sortByRectPoint(a, b) {
  return sortByPoint(a.rectangles[0], b.rectangles[0]);
}

// Sort annotation by it's first line
function sortByLinePoint(a, b) {
  let lineA = a.lines[0];
  let lineB = b.lines[0];
  return sortByPoint(
    {x: lineA[0], y: lineA[1]},
    {x: lineB[0], y: lineB[1]}
  );
}

// Arrange supported types and associated sort methods
const SORT_TYPES = {
  'highlight': sortByRectPoint,
  'strikeout': sortByRectPoint,
  'drawing': sortByLinePoint,
  'textbox': sortByPoint,
  'point': sortByPoint,
  'area': sortByPoint
};



/***/ }),
/* 33 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ insertScreenReaderHint)
/* harmony export */ });
/* harmony import */ var _createScreenReaderOnly__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);
/* harmony import */ var _insertElementWithinChildren__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
/* harmony import */ var _insertElementWithinElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36);
/* harmony import */ var _renderScreenReaderComments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37);





// Annotation types that support comments
const COMMENT_TYPES = ['highlight', 'point', 'area', 'circle', 'emptycircle', 'fillcircle'];

/**
 * Insert a hint into the DOM for screen readers for a specific annotation.
 *
 * @param {Object} annotation The annotation to insert a hint for
 * @param {Number} num The number of the annotation out of all annotations of the same type
 */
function insertScreenReaderHint(annotation, num = 0) {
  switch (annotation.type) {
    case 'highlight':
    case 'strikeout':
      let rects = annotation.rectangles;
      let first = rects[0];
      let last = rects[rects.length - 1];

      (0,_insertElementWithinElement__WEBPACK_IMPORTED_MODULE_2__["default"])(
        (0,_createScreenReaderOnly__WEBPACK_IMPORTED_MODULE_0__["default"])(`Begin ${annotation.type} annotation ${num}`, annotation.uuid),
        first.x, first.y, annotation.page, true
      );

      (0,_insertElementWithinElement__WEBPACK_IMPORTED_MODULE_2__["default"])(
        (0,_createScreenReaderOnly__WEBPACK_IMPORTED_MODULE_0__["default"])(`End ${annotation.type} annotation ${num}`, `${annotation.uuid}-end`),
        last.x + last.width, last.y, annotation.page, false
      );
      break;

    case 'textbox':
    case 'point':
      let text = annotation.type === 'textbox' ? ` (content: ${annotation.content})` : '';

      (0,_insertElementWithinChildren__WEBPACK_IMPORTED_MODULE_1__["default"])(
        (0,_createScreenReaderOnly__WEBPACK_IMPORTED_MODULE_0__["default"])(`${annotation.type} annotation ${num}${text}`, annotation.uuid),
        annotation.x, annotation.y, annotation.page
      );
      break;

    case 'drawing':
    case 'area':
      let x = typeof annotation.x !== 'undefined' ? annotation.x : annotation.lines[0][0];
      let y = typeof annotation.y !== 'undefined' ? annotation.y : annotation.lines[0][1];

      (0,_insertElementWithinChildren__WEBPACK_IMPORTED_MODULE_1__["default"])(
        (0,_createScreenReaderOnly__WEBPACK_IMPORTED_MODULE_0__["default"])(`Unlabeled drawing`, annotation.uuid),
        x, y, annotation.page
      );
      break;

    case 'circle':
    case 'fillcircle':
    case 'emptycircle':
      let x2 = typeof annotation.cx !== 'undefined' ? annotation.cx : annotation.lines[0][0];
      let y2 = typeof annotation.cy !== 'undefined' ? annotation.cy : annotation.lines[0][1];

      (0,_insertElementWithinChildren__WEBPACK_IMPORTED_MODULE_1__["default"])(
        (0,_createScreenReaderOnly__WEBPACK_IMPORTED_MODULE_0__["default"])(`Unlabeled drawing`, annotation.uuid),
        x2, y2, annotation.page
      );
      break;
  }

  // Include comments in screen reader hint
  if (COMMENT_TYPES.includes(annotation.type)) {
    (0,_renderScreenReaderComments__WEBPACK_IMPORTED_MODULE_3__["default"])(annotation.documentId, annotation.uuid);
  }
}


/***/ }),
/* 34 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createScreenReaderOnly)
/* harmony export */ });
/**
 * Create a node that is only visible to screen readers
 *
 * @param {String} content The text content that should be read by screen reader
 * @param {String} [annotationId] The ID of the annotation assocaited
 * @return {Element} An Element that is only visible to screen readers
 */
function createScreenReaderOnly(content, annotationId) {
  let node = document.createElement('div');
  let text = document.createTextNode(content);
  node.appendChild(text);
  node.setAttribute('id', `pdf-annotate-screenreader-${annotationId}`);
  node.style.position = 'absolute';
  node.style.left = '-10000px';
  node.style.top = 'auto';
  node.style.width = '1px';
  node.style.height = '1px';
  node.style.overflow = 'hidden';
  return node;
}


/***/ }),
/* 35 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ insertElementWithinChildren)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
/* harmony import */ var _insertElementWithinElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36);
/* harmony import */ var _UI_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);




/**
 * Insert an element at a point within the document.
 * This algorithm will try to insert between elements if possible.
 * It will however use `insertElementWithinElement` if it is more accurate.
 *
 * @param {Element} el The element to be inserted
 * @param {Number} x The x coordinate of the point
 * @param {Number} y The y coordinate of the point
 * @param {Number} pageNumber The page number to limit elements to
 * @return {Boolean} True if element was able to be inserted, otherwise false
 */
function insertElementWithinChildren(el, x, y, pageNumber) {
  // Try and use most accurate method of inserting within an element
  if ((0,_insertElementWithinElement__WEBPACK_IMPORTED_MODULE_1__["default"])(el, x, y, pageNumber, true)) {
    return true;
  }

  // Fall back to inserting between elements
  let svg = document.querySelector(`svg[data-pdf-annotate-page="${pageNumber}"]`);
  let rect = svg.getBoundingClientRect();
  let nodes = [...svg.parentNode.querySelectorAll(_config__WEBPACK_IMPORTED_MODULE_0__["default"].textClassQuery() + ' > div')];

  y = (0,_UI_utils__WEBPACK_IMPORTED_MODULE_2__.scaleUp)(svg, {y}).y + rect.top;
  x = (0,_UI_utils__WEBPACK_IMPORTED_MODULE_2__.scaleUp)(svg, {x}).x + rect.left;

  // Find the best node to insert before
  for (let i = 0, l = nodes.length; i < l; i++) {
    let n = nodes[i];
    let r = n.getBoundingClientRect();
    if (y <= r.top) {
      n.parentNode.insertBefore(el, n);
      return true;
    }
  }

  // If all else fails try to append to the bottom
  let textLayer = svg.parentNode.querySelector(_config__WEBPACK_IMPORTED_MODULE_0__["default"].textClassQuery());
  if (textLayer) {
    let textRect = textLayer.getBoundingClientRect();
    if ((0,_UI_utils__WEBPACK_IMPORTED_MODULE_2__.pointIntersectsRect)(x, y, textRect)) {
      textLayer.appendChild(el);
      return true;
    }
  }

  return false;
}


/***/ }),
/* 36 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ insertElementWithinElement)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
/* harmony import */ var _UI_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);



/**
 * Insert an element at a point within the document.
 * This algorithm will only insert within an element amidst it's text content.
 *
 * @param {Element} el The element to be inserted
 * @param {Number} x The x coordinate of the point
 * @param {Number} y The y coordinate of the point
 * @param {Number} pageNumber The page number to limit elements to
 * @param {Boolean} insertBefore Whether the element is to be inserted before or after x
 * @return {Boolean} True if element was able to be inserted, otherwise false
 */
function insertElementWithinElement(el, x, y, pageNumber, insertBefore) {
  const OFFSET_ADJUST = 2;

  // If inserting before adjust `x` by looking for element a few px to the right
  // Otherwise adjust a few px to the left
  // This is to allow a little tolerance by searching within the box, instead
  // of getting a false negative by testing right on the border.
  x = Math.max(x + (OFFSET_ADJUST * (insertBefore ? 1 : -1)), 0);

  let node = textLayerElementFromPoint(x, y + OFFSET_ADJUST, pageNumber);
  if (!node) {
    return false;
  }

  // Now that node has been found inverse the adjustment for `x`.
  // This is done to accomodate tolerance by cutting off on the outside of the
  // text boundary, instead of missing a character by cutting off within.
  x = x + (OFFSET_ADJUST * (insertBefore ? -1 : 1));

  let svg = document.querySelector(`svg[data-pdf-annotate-page="${pageNumber}"]`);
  let left = (0,_UI_utils__WEBPACK_IMPORTED_MODULE_1__.scaleDown)(svg, {left: node.getBoundingClientRect().left}).left - svg.getBoundingClientRect().left;
  let temp = node.cloneNode(true);
  let head = temp.innerHTML.split('');
  let tail = [];

  // Insert temp off screen
  temp.style.position = 'absolute';
  temp.style.top = '-10000px';
  temp.style.left = '-10000px';
  document.body.appendChild(temp);

  while (head.length) {
    // Don't insert within HTML tags
    if (head[head.length - 1] === '>') {
      while (head.length) {
        tail.unshift(head.pop());
        if (tail[0] === '<') {
          break;
        }
      }
    }

    // Check if width of temp based on current head value satisfies x
    temp.innerHTML = head.join('');
    let width = (0,_UI_utils__WEBPACK_IMPORTED_MODULE_1__.scaleDown)(svg, {width: temp.getBoundingClientRect().width}).width;
    if (left + width <= x) {
      break;
    }
    tail.unshift(head.pop());
  }

  // Update original node with new markup, including element to be inserted
  node.innerHTML = head.join('') + el.outerHTML + tail.join('');
  temp.parentNode.removeChild(temp);

  return true;
}

/**
 * Get a text layer element at a given point on a page
 *
 * @param {Number} x The x coordinate of the point
 * @param {Number} y The y coordinate of the point
 * @param {Number} pageNumber The page to limit elements to
 * @return {Element} First text layer element found at the point
 */
function textLayerElementFromPoint(x, y, pageNumber) {
  let svg = document.querySelector(`svg[data-pdf-annotate-page="${pageNumber}"]`);
  let rect = svg.getBoundingClientRect();
  y = (0,_UI_utils__WEBPACK_IMPORTED_MODULE_1__.scaleUp)(svg, {y}).y + rect.top;
  x = (0,_UI_utils__WEBPACK_IMPORTED_MODULE_1__.scaleUp)(svg, {x}).x + rect.left;
  return [...svg.parentNode.querySelectorAll(_config__WEBPACK_IMPORTED_MODULE_0__["default"].textClassQuery() + ' [data-canvas-width]')].filter((el) => {
    return (0,_UI_utils__WEBPACK_IMPORTED_MODULE_1__.pointIntersectsRect)(x, y, el.getBoundingClientRect());
  })[0];
}


/***/ }),
/* 37 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderScreenReaderComments)
/* harmony export */ });
/* harmony import */ var _PDFJSAnnotate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _insertScreenReaderComment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38);



/**
 * Insert the comments into the DOM to be available by screen reader
 *
 * Example output:
 *   <div class="screenReaderOnly">
 *    <div>Begin highlight 1</div>
 *    <ol aria-label="Comments">
 *      <li>Foo</li>
 *      <li>Bar</li>
 *      <li>Baz</li>
 *      <li>Qux</li>
 *    </ol>
 *  </div>
 *  <div>Some highlighted text goes here...</div>
 *  <div class="screenReaderOnly">End highlight 1</div>
 *
 * NOTE: `screenReaderOnly` is not a real class, just used for brevity
 *
 * @param {String} documentId The ID of the document
 * @param {String} annotationId The ID of the annotation
 * @param {Array} [comments] Optionally preloaded comments to be rendered
 * @return {Promise} Promise that once has comments, render them for screen reader
 */
function renderScreenReaderComments(documentId, annotationId, comments) {
  let promise;

  if (Array.isArray(comments)) {
    promise = Promise.resolve(comments);
  }
  else {
    promise = _PDFJSAnnotate__WEBPACK_IMPORTED_MODULE_0__["default"].getStoreAdapter().getComments(documentId, annotationId);
  }

  return promise.then((comments) => {
    // Node needs to be found by querying DOM as it may have been inserted as innerHTML
    // leaving `screenReaderNode` as an invalid reference (see `insertElementWithinElement`).
    let node = document.getElementById(`pdf-annotate-screenreader-${annotationId}`);
    if (node) {
      let list = document.createElement('ol');
      list.setAttribute('id', `pdf-annotate-screenreader-comment-list-${annotationId}`);
      list.setAttribute('aria-label', 'Comments');
      node.appendChild(list);
      comments.forEach(_insertScreenReaderComment__WEBPACK_IMPORTED_MODULE_1__["default"]);
    }
  });
}


/***/ }),
/* 38 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ insertScreenReaderComment)
/* harmony export */ });
/**
 * Insert a comment into the DOM to be available by screen reader
 *
 * @param {Object} comment The comment to be inserted
 */
function insertScreenReaderComment(comment) {
  if (!comment) {
    return;
  }

  let list = document.querySelector(`#pdf-annotate-screenreader-${comment.annotation} ol`);
  if (list) {
    let item = document.createElement('li');
    item.setAttribute('id', `pdf-annotate-screenreader-comment-${comment.uuid}`);
    item.appendChild(document.createTextNode(`${comment.content}`));
    list.appendChild(item);
  }
}


/***/ }),
/* 39 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initEventHandlers)
/* harmony export */ });
/* harmony import */ var _renderScreenReaderHints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var _insertScreenReaderComment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38);
/* harmony import */ var _renderScreenReaderComments__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37);
/* harmony import */ var _UI_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var _PDFJSAnnotate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0);






/**
 * Initialize the event handlers for keeping screen reader hints synced with data
 */
function initEventHandlers() {
  (0,_UI_event__WEBPACK_IMPORTED_MODULE_3__.addEventListener)('annotation:add', (documentId, pageNumber, annotation) => {
    reorderAnnotationsByType(documentId, pageNumber, annotation.type);
  });
  (0,_UI_event__WEBPACK_IMPORTED_MODULE_3__.addEventListener)('annotation:edit', (documentId, annotationId, annotation) => {
    reorderAnnotationsByType(documentId, annotation.page, annotation.type);
  });
  (0,_UI_event__WEBPACK_IMPORTED_MODULE_3__.addEventListener)('annotation:delete', removeAnnotation);
  (0,_UI_event__WEBPACK_IMPORTED_MODULE_3__.addEventListener)('comment:add', insertComment);
  (0,_UI_event__WEBPACK_IMPORTED_MODULE_3__.addEventListener)('comment:delete', removeComment);
}

/**
 * Reorder the annotation numbers by annotation type
 *
 * @param {String} documentId The ID of the document
 * @param {Number} pageNumber The page number of the annotations
 * @param {Strig} type The annotation type
 */
function reorderAnnotationsByType(documentId, pageNumber, type) {
  _PDFJSAnnotate__WEBPACK_IMPORTED_MODULE_4__["default"].getStoreAdapter().getAnnotations(documentId, pageNumber)
    .then((annotations) => {
      return annotations.annotations.filter((a) => {
        return a.type === type;
      });
    })
    .then((annotations) => {
      annotations.forEach((a) => {
        removeAnnotation(documentId, a.uuid);
      });

      return annotations;
    })
    .then(_renderScreenReaderHints__WEBPACK_IMPORTED_MODULE_0__["default"]);
}

/**
 * Remove the screen reader hint for an annotation
 *
 * @param {String} documentId The ID of the document
 * @param {String} annotationId The Id of the annotation
 */
function removeAnnotation(documentId, annotationId) {
  removeElementById(`pdf-annotate-screenreader-${annotationId}`);
  removeElementById(`pdf-annotate-screenreader-${annotationId}-end`);
}

/**
 * Insert a screen reader hint for a comment
 *
 * @param {String} documentId The ID of the document
 * @param {String} annotationId The ID of tha assocated annotation
 * @param {Object} comment The comment to insert a hint for
 */
function insertComment(documentId, annotationId, comment) {
  let list = document.querySelector(`pdf-annotate-screenreader-comment-list-${annotationId}`);
  let promise;

  if (!list) {
    promise = (0,_renderScreenReaderComments__WEBPACK_IMPORTED_MODULE_2__["default"])(documentId, annotationId, []).then(() => {
      list = document.querySelector(`pdf-annotate-screenreader-comment-list-${annotationId}`);
      return true;
    });
  }
  else {
    promise = Promise.resolve(true);
  }

  promise.then(() => {
    (0,_insertScreenReaderComment__WEBPACK_IMPORTED_MODULE_1__["default"])(comment);
  });
}

/**
 * Remove a screen reader hint for a comment
 *
 * @param {String} documentId The ID of the document
 * @param {String} commentId The ID of the comment
 */
function removeComment(documentId, commentId) {
  removeElementById(`pdf-annotate-screenreader-comment-${commentId}`);
}

/**
 * Remove an element from the DOM by it's ID if it exists
 *
 * @param {String} elementId The ID of the element to be removed
 */
function removeElementById(elementId) {
  let el = document.getElementById(elementId);
  if (el) {
    el.parentNode.removeChild(el);
  }
}


/***/ })
/******/ 	]);
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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(0);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7O0FBRUEsa0NBQWtDLFFBQVE7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixpQkFBaUI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSx1Q0FBdUMsUUFBUTtBQUMvQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVB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QThFLGFBQWE7QUFDM0Y7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLHNFQUF5QjtBQUM3QixHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0EseURBQXlELFVBQVU7QUFDbkU7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUN0R0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9QREZBbm5vdGF0ZVJlbmRlci93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vUERGQW5ub3RhdGVSZW5kZXIvLi9wZGYtYW5ub3RhdGUtcmVuZGVyL3NyYy9QREZKU0Fubm90YXRlLmpzIiwid2VicGFjazovL1BERkFubm90YXRlUmVuZGVyLy4vcGRmLWFubm90YXRlLXJlbmRlci9zcmMvYWRhcHRlci9TdG9yZUFkYXB0ZXIuanMiLCJ3ZWJwYWNrOi8vUERGQW5ub3RhdGVSZW5kZXIvLi9wZGYtYW5ub3RhdGUtcmVuZGVyL3NyYy91dGlscy9hYnN0cmFjdEZ1bmN0aW9uLmpzIiwid2VicGFjazovL1BERkFubm90YXRlUmVuZGVyLy4vcGRmLWFubm90YXRlLXJlbmRlci9zcmMvVUkvZXZlbnQuanMiLCJ3ZWJwYWNrOi8vUERGQW5ub3RhdGVSZW5kZXIvLi9ub2RlX21vZHVsZXMvZXZlbnRzL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly9QREZBbm5vdGF0ZVJlbmRlci8uL3BkZi1hbm5vdGF0ZS1yZW5kZXIvc3JjL1VJL3V0aWxzLmpzIiwid2VicGFjazovL1BERkFubm90YXRlUmVuZGVyLy4vcGRmLWFubm90YXRlLXJlbmRlci9zcmMvcmVuZGVyL2FwcGVuZENoaWxkLmpzIiwid2VicGFjazovL1BERkFubm90YXRlUmVuZGVyLy4vcGRmLWFubm90YXRlLXJlbmRlci9zcmMvcmVuZGVyL3JlbmRlckxpbmUuanMiLCJ3ZWJwYWNrOi8vUERGQW5ub3RhdGVSZW5kZXIvLi9wZGYtYW5ub3RhdGUtcmVuZGVyL3NyYy91dGlscy9zZXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL1BERkFubm90YXRlUmVuZGVyLy4vcGRmLWFubm90YXRlLXJlbmRlci9zcmMvdXRpbHMvbm9ybWFsaXplQ29sb3IuanMiLCJ3ZWJwYWNrOi8vUERGQW5ub3RhdGVSZW5kZXIvLi9wZGYtYW5ub3RhdGUtcmVuZGVyL3NyYy9yZW5kZXIvcmVuZGVyUGF0aC5qcyIsIndlYnBhY2s6Ly9QREZBbm5vdGF0ZVJlbmRlci8uL3BkZi1hbm5vdGF0ZS1yZW5kZXIvc3JjL3JlbmRlci9yZW5kZXJQb2ludC5qcyIsIndlYnBhY2s6Ly9QREZBbm5vdGF0ZVJlbmRlci8uL3BkZi1hbm5vdGF0ZS1yZW5kZXIvc3JjL3JlbmRlci9yZW5kZXJSZWN0LmpzIiwid2VicGFjazovL1BERkFubm90YXRlUmVuZGVyLy4vcGRmLWFubm90YXRlLXJlbmRlci9zcmMvcmVuZGVyL3JlbmRlclRleHQuanMiLCJ3ZWJwYWNrOi8vUERGQW5ub3RhdGVSZW5kZXIvLi9wZGYtYW5ub3RhdGUtcmVuZGVyL3NyYy9yZW5kZXIvcmVuZGVyQ2lyY2xlLmpzIiwid2VicGFjazovL1BERkFubm90YXRlUmVuZGVyLy4vcGRmLWFubm90YXRlLXJlbmRlci9zcmMvcmVuZGVyL3JlbmRlckFycm93LmpzIiwid2VicGFjazovL1BERkFubm90YXRlUmVuZGVyLy4vcGRmLWFubm90YXRlLXJlbmRlci9zcmMvdXRpbHMvbWF0aFV0aWxzLmpzIiwid2VicGFjazovL1BERkFubm90YXRlUmVuZGVyLy4vcGRmLWFubm90YXRlLXJlbmRlci9zcmMvYWRhcHRlci9Mb2NhbFN0b3JlQWRhcHRlci5qcyIsIndlYnBhY2s6Ly9QREZBbm5vdGF0ZVJlbmRlci8uL3BkZi1hbm5vdGF0ZS1yZW5kZXIvc3JjL3V0aWxzL3V1aWQuanMiLCJ3ZWJwYWNrOi8vUERGQW5ub3RhdGVSZW5kZXIvLi9wZGYtYW5ub3RhdGUtcmVuZGVyL3NyYy9hZGFwdGVyL0xvY2FsVXNlclN0b3JlQWRhcHRlci5qcyIsIndlYnBhY2s6Ly9QREZBbm5vdGF0ZVJlbmRlci8uL3BkZi1hbm5vdGF0ZS1yZW5kZXIvc3JjL3JlbmRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9QREZBbm5vdGF0ZVJlbmRlci8uL3BkZi1hbm5vdGF0ZS1yZW5kZXIvc3JjL1VJL2luZGV4LmpzIiwid2VicGFjazovL1BERkFubm90YXRlUmVuZGVyLy4vcGRmLWFubm90YXRlLXJlbmRlci9zcmMvVUkvZWRpdC5qcyIsIndlYnBhY2s6Ly9QREZBbm5vdGF0ZVJlbmRlci8uL3BkZi1hbm5vdGF0ZS1yZW5kZXIvc3JjL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly9QREZBbm5vdGF0ZVJlbmRlci8uL3BkZi1hbm5vdGF0ZS1yZW5kZXIvc3JjL1VJL3Blbi5qcyIsIndlYnBhY2s6Ly9QREZBbm5vdGF0ZVJlbmRlci8uL3BkZi1hbm5vdGF0ZS1yZW5kZXIvc3JjL1VJL2Fycm93LmpzIiwid2VicGFjazovL1BERkFubm90YXRlUmVuZGVyLy4vcGRmLWFubm90YXRlLXJlbmRlci9zcmMvVUkvZXJhc2VyLmpzIiwid2VicGFjazovL1BERkFubm90YXRlUmVuZGVyLy4vcGRmLWFubm90YXRlLXJlbmRlci9zcmMvVUkvcG9pbnQuanMiLCJ3ZWJwYWNrOi8vUERGQW5ub3RhdGVSZW5kZXIvLi9wZGYtYW5ub3RhdGUtcmVuZGVyL3NyYy9VSS9yZWN0LmpzIiwid2VicGFjazovL1BERkFubm90YXRlUmVuZGVyLy4vcGRmLWFubm90YXRlLXJlbmRlci9zcmMvVUkvY2lyY2xlLmpzIiwid2VicGFjazovL1BERkFubm90YXRlUmVuZGVyLy4vcGRmLWFubm90YXRlLXJlbmRlci9zcmMvVUkvdGV4dC5qcyIsIndlYnBhY2s6Ly9QREZBbm5vdGF0ZVJlbmRlci8uL3BkZi1hbm5vdGF0ZS1yZW5kZXIvc3JjL1VJL3BhZ2UuanMiLCJ3ZWJwYWNrOi8vUERGQW5ub3RhdGVSZW5kZXIvLi9wZGYtYW5ub3RhdGUtcmVuZGVyL3NyYy9hMTF5L3JlbmRlclNjcmVlblJlYWRlckhpbnRzLmpzIiwid2VicGFjazovL1BERkFubm90YXRlUmVuZGVyLy4vcGRmLWFubm90YXRlLXJlbmRlci9zcmMvYTExeS9pbnNlcnRTY3JlZW5SZWFkZXJIaW50LmpzIiwid2VicGFjazovL1BERkFubm90YXRlUmVuZGVyLy4vcGRmLWFubm90YXRlLXJlbmRlci9zcmMvYTExeS9jcmVhdGVTY3JlZW5SZWFkZXJPbmx5LmpzIiwid2VicGFjazovL1BERkFubm90YXRlUmVuZGVyLy4vcGRmLWFubm90YXRlLXJlbmRlci9zcmMvYTExeS9pbnNlcnRFbGVtZW50V2l0aGluQ2hpbGRyZW4uanMiLCJ3ZWJwYWNrOi8vUERGQW5ub3RhdGVSZW5kZXIvLi9wZGYtYW5ub3RhdGUtcmVuZGVyL3NyYy9hMTF5L2luc2VydEVsZW1lbnRXaXRoaW5FbGVtZW50LmpzIiwid2VicGFjazovL1BERkFubm90YXRlUmVuZGVyLy4vcGRmLWFubm90YXRlLXJlbmRlci9zcmMvYTExeS9yZW5kZXJTY3JlZW5SZWFkZXJDb21tZW50cy5qcyIsIndlYnBhY2s6Ly9QREZBbm5vdGF0ZVJlbmRlci8uL3BkZi1hbm5vdGF0ZS1yZW5kZXIvc3JjL2ExMXkvaW5zZXJ0U2NyZWVuUmVhZGVyQ29tbWVudC5qcyIsIndlYnBhY2s6Ly9QREZBbm5vdGF0ZVJlbmRlci8uL3BkZi1hbm5vdGF0ZS1yZW5kZXIvc3JjL2ExMXkvaW5pdEV2ZW50SGFuZGxlcnMuanMiLCJ3ZWJwYWNrOi8vUERGQW5ub3RhdGVSZW5kZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vUERGQW5ub3RhdGVSZW5kZXIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vUERGQW5ub3RhdGVSZW5kZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL1BERkFubm90YXRlUmVuZGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vUERGQW5ub3RhdGVSZW5kZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9QREZBbm5vdGF0ZVJlbmRlci93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL1BERkFubm90YXRlUmVuZGVyL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9QREZBbm5vdGF0ZVJlbmRlci93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiUERGQW5ub3RhdGVSZW5kZXJcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiUERGQW5ub3RhdGVSZW5kZXJcIl0gPSBmYWN0b3J5KCk7XG59KShzZWxmLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCJpbXBvcnQgU3RvcmVBZGFwdGVyIGZyb20gJy4vYWRhcHRlci9TdG9yZUFkYXB0ZXInO1xuaW1wb3J0IExvY2FsU3RvcmVBZGFwdGVyIGZyb20gJy4vYWRhcHRlci9Mb2NhbFN0b3JlQWRhcHRlcic7XG5pbXBvcnQgTG9jYWxVc2VyU3RvcmVBZGFwdGVyIGZyb20gJy4vYWRhcHRlci9Mb2NhbFVzZXJTdG9yZUFkYXB0ZXInO1xuaW1wb3J0IHJlbmRlciBmcm9tICcuL3JlbmRlcic7XG5pbXBvcnQgVUkgZnJvbSAnLi9VSSc7XG5pbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnJztcbmltcG9ydCB1dWlkIGZyb20gJy4vdXRpbHMvdXVpZCc7XG5pbXBvcnQge1xuICBmaW5kQW5ub3RhdGlvbkF0UG9pbnQsXG4gIGZpbmRTVkdDb250YWluZXIsXG4gIGNvbnZlcnRUb1NjcmVlblBvaW50XG59IGZyb20gJy4vVUkvdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGZpbmRBbm5vdGF0aW9uQXRQb2ludCxcbiAgZmluZFNWR0NvbnRhaW5lcixcbiAgY29udmVydFRvU2NyZWVuUG9pbnQsXG5cbiAgLyoqXG4gICAqIEFic3RyYWN0IGNsYXNzIHRoYXQgbmVlZHMgdG8gYmUgZGVmaW5lZCBzbyBQREZKU0Fubm90YXRlXG4gICAqIGtub3dzIGhvdyB0byBjb21tdW5pY2F0ZSB3aXRoIHlvdXIgc2VydmVyLlxuICAgKi9cbiAgU3RvcmVBZGFwdGVyLFxuXG4gIC8qKlxuICAgKiBJbXBsZW1lbnRhdGlvbiBvZiBTdG9yZUFkYXB0ZXIgdGhhdCBzdG9yZXMgYW5ub3RhdGlvbiBkYXRhIHRvIGxvY2FsU3RvcmFnZS5cbiAgICovXG4gIExvY2FsU3RvcmVBZGFwdGVyLFxuXG4gIC8qKlxuICAgKiBJbXBsZW1lbnRhdGlvbiBvZiBTdG9yZUFkYXB0ZXIgdGhhdCBzdG9yZXMgYW5ub3RhdGlvbiBkYXRhIHRvIGxvY2FsU3RvcmFnZSBwYXJ0aWN1bGFyXG4gICAqIHRvIGEgc3BlY2lmaWMgdXNlclxuICAgKi9cbiAgTG9jYWxVc2VyU3RvcmVBZGFwdGVyLFxuXG4gIC8qKlxuICAgKiBBYnN0cmFjdCBpbnN0YW5jZSBvZiBTdG9yZUFkYXB0ZXJcbiAgICovXG4gIF9fc3RvcmVBZGFwdGVyOiBuZXcgU3RvcmVBZGFwdGVyKCksXG5cbiAgLyoqXG4gICAqIEdldHRlciBmb3IgdGhlIHVuZGVybHlpbmcgU3RvcmVBZGFwdGVyIHByb3BlcnR5XG4gICAqXG4gICAqIEByZXR1cm4ge1N0b3JlQWRhcHRlcn1cbiAgICovXG4gIGdldFN0b3JlQWRhcHRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5fX3N0b3JlQWRhcHRlcjtcbiAgfSxcblxuICAvKipcbiAgICogU2V0dGVyIGZvciB0aGUgdW5kZXJseWluZyBTdG9yZUFkYXB0ZXIgcHJvcGVydHlcbiAgICpcbiAgICogQHBhcmFtIHtTdG9yZUFkYXB0ZXJ9IGFkYXB0ZXIgVGhlIFN0b3JlQWRhcHRlciBpbXBsZW1lbnRhdGlvbiB0byBiZSB1c2VkLlxuICAgKi9cbiAgc2V0U3RvcmVBZGFwdGVyKGFkYXB0ZXIpIHtcbiAgICAvLyBUT0RPIHRoaXMgdGhyb3dzIGFuIGVycm9yIHdoZW4gYnVuZGxlZFxuICAgIC8vIGlmICghKGFkYXB0ZXIgaW5zdGFuY2VvZiBTdG9yZUFkYXB0ZXIpKSB7XG4gICAgLy8gICB0aHJvdyBuZXcgRXJyb3IoJ2FkYXB0ZXIgbXVzdCBiZSBhbiBpbnN0YW5jZSBvZiBTdG9yZUFkYXB0ZXInKTtcbiAgICAvLyB9XG5cbiAgICB0aGlzLl9fc3RvcmVBZGFwdGVyID0gYWRhcHRlcjtcbiAgfSxcblxuICAvKipcbiAgICogVUkgaXMgYSBoZWxwZXIgZm9yIGluc3RydW1lbnRpbmcgVUkgaW50ZXJhY3Rpb25zIGZvciBjcmVhdGluZyxcbiAgICogZWRpdGluZywgYW5kIGRlbGV0aW5nIGFubm90YXRpb25zIGluIHRoZSBicm93c2VyLlxuICAgKi9cbiAgVUksXG5cbiAgLyoqXG4gICAqIFJlbmRlciB0aGUgYW5ub3RhdGlvbnMgZm9yIGEgcGFnZSBpbiB0aGUgUERGIERvY3VtZW50XG4gICAqXG4gICAqIEBwYXJhbSB7U1ZHRWxlbWVudH0gc3ZnIFRoZSBTVkcgZWxlbWVudCB0aGF0IGFubm90YXRpb25zIHNob3VsZCBiZSByZW5kZXJlZCB0b1xuICAgKiBAcGFyYW0ge1BhZ2VWaWV3cG9ydH0gdmlld3BvcnQgVGhlIFBERlBhZ2UuZ2V0Vmlld3BvcnQgZGF0YVxuICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YSBUaGUgU3RvcmVBZGFwdGVyLmdldEFubm90YXRpb25zIGRhdGFcbiAgICogQHJldHVybiB7UHJvbWlzZX1cbiAgICovXG4gIHJlbmRlcixcblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIGZvciBnZXR0aW5nIGFubm90YXRpb24gZGF0YVxuICAgKlxuICAgKiBAYWxpYXMgU3RvcmVBZGFwdGVyLmdldEFubm90YXRpb25zXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBkb2N1bWVudElkIFRoZSBJRCBvZiB0aGUgZG9jdW1lbnRcbiAgICogQHBhcmFtIHtTdHJpbmd9IHBhZ2VOdW1iZXIgVGhlIHBhZ2UgbnVtYmVyXG4gICAqIEByZXR1cm4ge1Byb21pc2V9XG4gICAqL1xuICBnZXRBbm5vdGF0aW9ucyhkb2N1bWVudElkLCBwYWdlTnVtYmVyKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RvcmVBZGFwdGVyKCkuZ2V0QW5ub3RhdGlvbnMoLi4uYXJndW1lbnRzKTtcbiAgfSxcblxuICBjb25maWcsXG5cbiAgdXVpZFxufTtcbiIsIi8vIERpc2FibGUgSlNEb2MgYXMgaXQgY2Fubm90IHJlYWxseSBkZWFsIHdpdGggdGhlIG9kZCB3YXkgdGhhdCB0aGUgZnVuY3Rpb25zIGFyZSBkZWZpbmVkXG4vKiBlc2xpbnQgdmFsaWQtanNkb2M6IDAgKi9cblxuaW1wb3J0IGFic3RyYWN0RnVuY3Rpb24gZnJvbSAnLi4vdXRpbHMvYWJzdHJhY3RGdW5jdGlvbic7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tICcuLi9VSS9ldmVudCc7XG5cbi8vIEFkYXB0ZXIgc2hvdWxkIG5ldmVyIGJlIGludm9rZWQgcHVibGljbHlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b3JlQWRhcHRlciB7XG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgU3RvcmVBZGFwdGVyIGluc3RhbmNlXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbZGVmaW5pdGlvbl0gVGhlIGRlZmluaXRpb24gdG8gdXNlIGZvciBvdmVycmlkaW5nIGFic3RyYWN0IG1ldGhvZHNcbiAgICovXG4gIGNvbnN0cnVjdG9yKGRlZmluaXRpb24gPSB7fSkge1xuICAgIC8vIENvcHkgZWFjaCBmdW5jdGlvbiBmcm9tIGRlZmluaXRpb24gaWYgaXQgaXMgYSBmdW5jdGlvbiB3ZSBrbm93IGFib3V0XG4gICAgT2JqZWN0LmtleXMoZGVmaW5pdGlvbikuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAodHlwZW9mIGRlZmluaXRpb25ba2V5XSA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgICAgIHR5cGVvZiB0aGlzW2tleV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhpc1trZXldID0gZGVmaW5pdGlvbltrZXldO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbGwgdGhlIGFubm90YXRpb25zIGZvciBhIGdpdmVuIGRvY3VtZW50IGFuZCBwYWdlIG51bWJlci5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IGRvY3VtZW50SWQgVGhlIElEIGZvciB0aGUgZG9jdW1lbnQgdGhlIGFubm90YXRpb25zIGJlbG9uZyB0b1xuICAgKiBAcGFyYW0ge051bWJlcn0gcGFnZU51bWJlciBUaGUgbnVtYmVyIG9mIHRoZSBwYWdlIHRoZSBhbm5vdGF0aW9ucyBiZWxvbmcgdG9cbiAgICogQHJldHVybiB7UHJvbWlzZX0gUHJvbWlzZSB0aGF0IHJldHVybnMgd2l0aCBsaXN0IG9mIGFubm90YXRpb25zIGZvciBkb2N1bWVudCBhbmQgcGFnZVxuICAgKi9cbiAgX19nZXRBbm5vdGF0aW9ucyhkb2N1bWVudElkLCBwYWdlTnVtYmVyKSB7IGFic3RyYWN0RnVuY3Rpb24oJ2dldEFubm90YXRpb25zJyk7IH1cbiAgZ2V0IGdldEFubm90YXRpb25zKCkgeyByZXR1cm4gdGhpcy5fX2dldEFubm90YXRpb25zOyB9XG4gIHNldCBnZXRBbm5vdGF0aW9ucyhmbikge1xuICAgIHRoaXMuX19nZXRBbm5vdGF0aW9ucyA9IGZ1bmN0aW9uIGdldEFubm90YXRpb25zKGRvY3VtZW50SWQsIHBhZ2VOdW1iZXIpIHtcbiAgICAgIHJldHVybiBmbiguLi5hcmd1bWVudHMpLnRoZW4oKGFubm90YXRpb25zKSA9PiB7XG4gICAgICAgIC8vIFRPRE8gbWF5IGJlIGJlc3QgdG8gaGF2ZSB0aGlzIGhhcHBlbiBvbiB0aGUgc2VydmVyXG4gICAgICAgIGlmIChhbm5vdGF0aW9ucy5hbm5vdGF0aW9ucykge1xuICAgICAgICAgIGFubm90YXRpb25zLmFubm90YXRpb25zLmZvckVhY2goKGEpID0+IHtcbiAgICAgICAgICAgIGEuZG9jdW1lbnRJZCA9IGRvY3VtZW50SWQ7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFubm90YXRpb25zO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGRlZmluaXRpb24gZm9yIGEgc3BlY2lmaWMgYW5ub3RhdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IGRvY3VtZW50SWQgVGhlIElEIGZvciB0aGUgZG9jdW1lbnQgdGhlIGFubm90YXRpb24gYmVsb25ncyB0b1xuICAgKiBAcGFyYW0ge1N0cmluZ30gYW5ub3RhdGlvbklkIFRoZSBJRCBmb3IgdGhlIGFubm90YXRpb25cbiAgICogQHJldHVybiB7UHJvbWlzZX0gUHJvbWlzZSB0aGF0IHJldHVybnMgdGhlIHJlcXVlc3RlZCBhbm5vdGF0aW9uXG4gICAqL1xuICBnZXRBbm5vdGF0aW9uKGRvY3VtZW50SWQsIGFubm90YXRpb25JZCkgeyBhYnN0cmFjdEZ1bmN0aW9uKCdnZXRBbm5vdGF0aW9uJyk7IH1cblxuICAvKipcbiAgICogQWRkIGFuIGFubm90YXRpb25cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IGRvY3VtZW50SWQgVGhlIElEIGZvciB0aGUgZG9jdW1lbnQgdG8gYWRkIHRoZSBhbm5vdGF0aW9uIHRvXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwYWdlTnVtYmVyIFRoZSBwYWdlIG51bWJlciB0byBhZGQgdGhlIGFubm90YXRpb24gdG9cbiAgICogQHBhcmFtIHtPYmplY3R9IGFubm90YXRpb24gVGhlIGRlZmluaXRpb24gZm9yIHRoZSBuZXcgYW5ub3RhdGlvblxuICAgKiBAcmV0dXJuIHtQcm9taXNlfSBQcm9taXNlIHRoYXQgcmV0dXJucyB3aXRoIHRoZSBhZGRlZCBhbm5vdGF0aW9uXG4gICAqL1xuICBfX2FkZEFubm90YXRpb24oZG9jdW1lbnRJZCwgcGFnZU51bWJlciwgYW5ub3RhdGlvbikgeyBhYnN0cmFjdEZ1bmN0aW9uKCdhZGRBbm5vdGF0aW9uJyk7IH1cbiAgZ2V0IGFkZEFubm90YXRpb24oKSB7IHJldHVybiB0aGlzLl9fYWRkQW5ub3RhdGlvbjsgfVxuICBzZXQgYWRkQW5ub3RhdGlvbihmbikge1xuICAgIHRoaXMuX19hZGRBbm5vdGF0aW9uID0gZnVuY3Rpb24gYWRkQW5ub3RhdGlvbihkb2N1bWVudElkLCBwYWdlTnVtYmVyLCBhbm5vdGF0aW9uKSB7XG4gICAgICByZXR1cm4gZm4oLi4uYXJndW1lbnRzKS50aGVuKChhbm5vdGF0aW9uKSA9PiB7XG4gICAgICAgIGZpcmVFdmVudCgnYW5ub3RhdGlvbjphZGQnLCBkb2N1bWVudElkLCBwYWdlTnVtYmVyLCBhbm5vdGF0aW9uKTtcbiAgICAgICAgcmV0dXJuIGFubm90YXRpb247XG4gICAgICB9KTtcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEVkaXQgYW4gYW5ub3RhdGlvblxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gZG9jdW1lbnRJZCBUaGUgSUQgZm9yIHRoZSBkb2N1bWVudFxuICAgKiBAcGFyYW0ge1N0cmluZ30gcGFnZU51bWJlciB0aGUgcGFnZSBudW1iZXIgb2YgdGhlIGFubm90YXRpb25cbiAgICogQHBhcmFtIHtPYmplY3R9IGFubm90YXRpb24gVGhlIGRlZmluaXRpb24gb2YgdGhlIG1vZGlmaWVkIGFubm90YXRpb25cbiAgICogQHJldHVybiB7UHJvbWlzZX0gUHJvbWlzZSB0aGF0IHJldHVybnMgd2l0aCB0aGUgZWRpdGVkIGFubm90YXRpb25cbiAgICovXG4gIF9fZWRpdEFubm90YXRpb24oZG9jdW1lbnRJZCwgcGFnZU51bWJlciwgYW5ub3RhdGlvbikgeyBhYnN0cmFjdEZ1bmN0aW9uKCdlZGl0QW5ub3RhdGlvbicpOyB9XG4gIGdldCBlZGl0QW5ub3RhdGlvbigpIHsgcmV0dXJuIHRoaXMuX19lZGl0QW5ub3RhdGlvbjsgfVxuICBzZXQgZWRpdEFubm90YXRpb24oZm4pIHtcbiAgICB0aGlzLl9fZWRpdEFubm90YXRpb24gPSBmdW5jdGlvbiBlZGl0QW5ub3RhdGlvbihkb2N1bWVudElkLCBhbm5vdGF0aW9uSWQsIGFubm90YXRpb24pIHtcbiAgICAgIHJldHVybiBmbiguLi5hcmd1bWVudHMpLnRoZW4oKGFubm90YXRpb24pID0+IHtcbiAgICAgICAgZmlyZUV2ZW50KCdhbm5vdGF0aW9uOmVkaXQnLCBkb2N1bWVudElkLCBhbm5vdGF0aW9uSWQsIGFubm90YXRpb24pO1xuICAgICAgICByZXR1cm4gYW5ub3RhdGlvbjtcbiAgICAgIH0pO1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIGFuIGFubm90YXRpb25cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IGRvY3VtZW50SWQgVGhlIElEIGZvciB0aGUgZG9jdW1lbnRcbiAgICogQHBhcmFtIHtTdHJpbmd9IGFubm90YXRpb25JZCBUaGUgSUQgZm9yIHRoZSBhbm5vdGF0aW9uXG4gICAqIEByZXR1cm4ge1Byb21pc2V9IFByb21pc2UgdGhhdCByZXR1cm5zIHdpdGggYm9vbGVhbiBpZiBhbm5vdGF0aW9uIHdhcyBkZWxldGVkXG4gICAqL1xuICBfX2RlbGV0ZUFubm90YXRpb24oZG9jdW1lbnRJZCwgYW5ub3RhdGlvbklkKSB7IGFic3RyYWN0RnVuY3Rpb24oJ2RlbGV0ZUFubm90YXRpb24nKTsgfVxuICBnZXQgZGVsZXRlQW5ub3RhdGlvbigpIHsgcmV0dXJuIHRoaXMuX19kZWxldGVBbm5vdGF0aW9uOyB9XG4gIHNldCBkZWxldGVBbm5vdGF0aW9uKGZuKSB7XG4gICAgdGhpcy5fX2RlbGV0ZUFubm90YXRpb24gPSBmdW5jdGlvbiBkZWxldGVBbm5vdGF0aW9uKGRvY3VtZW50SWQsIGFubm90YXRpb25JZCkge1xuICAgICAgcmV0dXJuIGZuKC4uLmFyZ3VtZW50cykudGhlbigoc3VjY2VzcykgPT4ge1xuICAgICAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgICAgIGZpcmVFdmVudCgnYW5ub3RhdGlvbjpkZWxldGUnLCBkb2N1bWVudElkLCBhbm5vdGF0aW9uSWQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYWxsIHRoZSBjb21tZW50cyBmb3IgYW4gYW5ub3RhdGlvblxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gZG9jdW1lbnRJZCBUaGUgSUQgZm9yIHRoZSBkb2N1bWVudFxuICAgKiBAcGFyYW0ge1N0cmluZ30gYW5ub3RhdGlvbklkIFRoZSBJRCBmb3IgdGhlIGFubm90YXRpb25cbiAgICogQHJldHVybiB7UHJvbWlzZX0gUHJvbWlzZSB0aGF0IHJldHVybnMgd2l0aCBjb21tZW50cyBmb3IgYW5ub3RhdGlvblxuICAgKi9cbiAgZ2V0Q29tbWVudHMoZG9jdW1lbnRJZCwgYW5ub3RhdGlvbklkKSB7IGFic3RyYWN0RnVuY3Rpb24oJ2dldENvbW1lbnRzJyk7IH1cblxuICAvKipcbiAgICogQWRkIGEgbmV3IGNvbW1lbnRcbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IGRvY3VtZW50SWQgVGhlIElEIGZvciB0aGUgZG9jdW1lbnRcbiAgICogQHBhcmFtIHtTdHJpbmd9IGFubm90YXRpb25JZCBUaGUgSUQgZm9yIHRoZSBhbm5vdGF0aW9uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjb250ZW50IFRoZSBkZWZpbml0aW9uIG9mIHRoZSBjb21tZW50XG4gICAqIEByZXR1cm4ge1Byb21pc2V9IFByb21pc2UgdGhhdCByZXR1cm5zIHdpdGggdGhlIGFkZGVkIGNvbW1lbnRcbiAgICovXG4gIF9fYWRkQ29tbWVudChkb2N1bWVudElkLCBhbm5vdGF0aW9uSWQsIGNvbnRlbnQpIHsgYWJzdHJhY3RGdW5jdGlvbignYWRkQ29tbWVudCcpOyB9XG4gIGdldCBhZGRDb21tZW50KCkgeyByZXR1cm4gdGhpcy5fX2FkZENvbW1lbnQ7IH1cbiAgc2V0IGFkZENvbW1lbnQoZm4pIHtcbiAgICB0aGlzLl9fYWRkQ29tbWVudCA9IGZ1bmN0aW9uIGFkZENvbW1lbnQoZG9jdW1lbnRJZCwgYW5ub3RhdGlvbklkLCBjb250ZW50KSB7XG4gICAgICByZXR1cm4gZm4oLi4uYXJndW1lbnRzKS50aGVuKChjb21tZW50KSA9PiB7XG4gICAgICAgIGZpcmVFdmVudCgnY29tbWVudDphZGQnLCBkb2N1bWVudElkLCBhbm5vdGF0aW9uSWQsIGNvbW1lbnQpO1xuICAgICAgICByZXR1cm4gY29tbWVudDtcbiAgICAgIH0pO1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIGEgY29tbWVudFxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gZG9jdW1lbnRJZCBUaGUgSUQgZm9yIHRoZSBkb2N1bWVudFxuICAgKiBAcGFyYW0ge1N0cmluZ30gY29tbWVudElkIFRoZSBJRCBmb3IgdGhlIGNvbW1lbnRcbiAgICogQHJldHVybiB7UHJvbWlzZX0gUHJvbWlzZSB0aGF0IHJldHVybnMgd2l0aCBib29sZWFuIGlmIGNvbW1lbnQgd2FzIGRlbGV0ZWRcbiAgICovXG4gIF9fZGVsZXRlQ29tbWVudChkb2N1bWVudElkLCBjb21tZW50SWQpIHsgYWJzdHJhY3RGdW5jdGlvbignZGVsZXRlQ29tbWVudCcpOyB9XG4gIGdldCBkZWxldGVDb21tZW50KCkgeyByZXR1cm4gdGhpcy5fX2RlbGV0ZUNvbW1lbnQ7IH1cbiAgc2V0IGRlbGV0ZUNvbW1lbnQoZm4pIHtcbiAgICB0aGlzLl9fZGVsZXRlQ29tbWVudCA9IGZ1bmN0aW9uIGRlbGV0ZUNvbW1lbnQoZG9jdW1lbnRJZCwgY29tbWVudElkKSB7XG4gICAgICByZXR1cm4gZm4oLi4uYXJndW1lbnRzKS50aGVuKChzdWNjZXNzKSA9PiB7XG4gICAgICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICAgICAgZmlyZUV2ZW50KCdjb21tZW50OmRlbGV0ZScsIGRvY3VtZW50SWQsIGNvbW1lbnRJZCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9KTtcbiAgICB9O1xuICB9XG59XG4iLCIvKipcbiAqIFRocm93IGFuIEVycm9yIGZvciBhbiBhYnN0cmFjdCBmdW5jdGlvbiB0aGF0IGhhc24ndCBiZWVuIGltcGxlbWVudGVkLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBhYnN0cmFjdCBmdW5jdGlvblxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhYnN0cmFjdEZ1bmN0aW9uKG5hbWUpIHtcbiAgdGhyb3cgbmV3IEVycm9yKG5hbWUgKyAnIGlzIG5vdCBpbXBsZW1lbnRlZCcpO1xufVxuIiwiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICdldmVudHMnO1xuaW1wb3J0IHtcbiAgZmluZEFubm90YXRpb25BdFBvaW50LFxuICBmaW5kU1ZHQXRQb2ludFxufSBmcm9tICcuL3V0aWxzJztcblxuY29uc3QgZW1pdHRlciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxubGV0IGNsaWNrTm9kZTtcblxuLyoqXG4gKiBIYW5kbGUgZG9jdW1lbnQuY2xpY2sgZXZlbnRcbiAqXG4gKiBAcGFyYW0ge0V2ZW50fSBlIFRoZSBET00gZXZlbnQgdG8gYmUgaGFuZGxlZFxuICovXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIGhhbmRsZURvY3VtZW50Q2xpY2soZSkge1xuICBpZiAoIWZpbmRTVkdBdFBvaW50KGUuY2xpZW50WCwgZS5jbGllbnRZKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGxldCB0YXJnZXQgPSBmaW5kQW5ub3RhdGlvbkF0UG9pbnQoZS5jbGllbnRYLCBlLmNsaWVudFkpO1xuXG4gIC8vIEVtaXQgYW5ub3RhdGlvbjpibHVyIGlmIGNsaWNrTm9kZSBpcyBubyBsb25nZXIgY2xpY2tlZFxuICBpZiAoY2xpY2tOb2RlICYmIGNsaWNrTm9kZSAhPT0gdGFyZ2V0KSB7XG4gICAgZW1pdHRlci5lbWl0KCdhbm5vdGF0aW9uOmJsdXInLCBjbGlja05vZGUpO1xuICB9XG5cbiAgLy8gRW1pdCBhbm5vdGF0aW9uOmNsaWNrIGlmIHRhcmdldCB3YXMgY2xpY2tlZFxuICBpZiAodGFyZ2V0KSB7XG4gICAgZW1pdHRlci5lbWl0KCdhbm5vdGF0aW9uOmNsaWNrJywgdGFyZ2V0KTtcbiAgfVxuXG4gIGNsaWNrTm9kZSA9IHRhcmdldDtcbn0pO1xuXG4vLyBsZXQgbW91c2VPdmVyTm9kZTtcbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGZ1bmN0aW9uIGhhbmRsZURvY3VtZW50TW91c2Vtb3ZlKGUpIHtcbi8vICAgbGV0IHRhcmdldCA9IGZpbmRBbm5vdGF0aW9uQXRQb2ludChlLmNsaWVudFgsIGUuY2xpZW50WSk7XG4vL1xuLy8gICAvLyBFbWl0IGFubm90YXRpb246bW91c2VvdXQgaWYgdGFyZ2V0IHdhcyBtb3VzZW91dCdkXG4vLyAgIGlmIChtb3VzZU92ZXJOb2RlICYmICF0YXJnZXQpIHtcbi8vICAgICBlbWl0dGVyLmVtaXQoJ2Fubm90YXRpb246bW91c2VvdXQnLCBtb3VzZU92ZXJOb2RlKTtcbi8vICAgfVxuLy9cbi8vICAgLy8gRW1pdCBhbm5vdGF0aW9uOm1vdXNlb3ZlciBpZiB0YXJnZXQgd2FzIG1vdXNlb3ZlcidkXG4vLyAgIGlmICh0YXJnZXQgJiYgbW91c2VPdmVyTm9kZSAhPT0gdGFyZ2V0KSB7XG4vLyAgICAgZW1pdHRlci5lbWl0KCdhbm5vdGF0aW9uOm1vdXNlb3ZlcicsIHRhcmdldCk7XG4vLyAgIH1cbi8vXG4vLyAgIG1vdXNlT3Zlck5vZGUgPSB0YXJnZXQ7XG4vLyB9KTtcblxuZXhwb3J0IGZ1bmN0aW9uIGZpcmVFdmVudCgpIHsgZW1pdHRlci5lbWl0KC4uLmFyZ3VtZW50cyk7IH07XG5leHBvcnQgZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcigpIHsgZW1pdHRlci5vbiguLi5hcmd1bWVudHMpOyB9O1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXIoKSB7IGVtaXR0ZXIucmVtb3ZlTGlzdGVuZXIoLi4uYXJndW1lbnRzKTsgfTtcbiIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSID0gdHlwZW9mIFJlZmxlY3QgPT09ICdvYmplY3QnID8gUmVmbGVjdCA6IG51bGxcbnZhciBSZWZsZWN0QXBwbHkgPSBSICYmIHR5cGVvZiBSLmFwcGx5ID09PSAnZnVuY3Rpb24nXG4gID8gUi5hcHBseVxuICA6IGZ1bmN0aW9uIFJlZmxlY3RBcHBseSh0YXJnZXQsIHJlY2VpdmVyLCBhcmdzKSB7XG4gICAgcmV0dXJuIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKHRhcmdldCwgcmVjZWl2ZXIsIGFyZ3MpO1xuICB9XG5cbnZhciBSZWZsZWN0T3duS2V5c1xuaWYgKFIgJiYgdHlwZW9mIFIub3duS2V5cyA9PT0gJ2Z1bmN0aW9uJykge1xuICBSZWZsZWN0T3duS2V5cyA9IFIub3duS2V5c1xufSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gIFJlZmxlY3RPd25LZXlzID0gZnVuY3Rpb24gUmVmbGVjdE93bktleXModGFyZ2V0KSB7XG4gICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRhcmdldClcbiAgICAgIC5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyh0YXJnZXQpKTtcbiAgfTtcbn0gZWxzZSB7XG4gIFJlZmxlY3RPd25LZXlzID0gZnVuY3Rpb24gUmVmbGVjdE93bktleXModGFyZ2V0KSB7XG4gICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRhcmdldCk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIFByb2Nlc3NFbWl0V2FybmluZyh3YXJuaW5nKSB7XG4gIGlmIChjb25zb2xlICYmIGNvbnNvbGUud2FybikgY29uc29sZS53YXJuKHdhcm5pbmcpO1xufVxuXG52YXIgTnVtYmVySXNOYU4gPSBOdW1iZXIuaXNOYU4gfHwgZnVuY3Rpb24gTnVtYmVySXNOYU4odmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9PSB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gRXZlbnRFbWl0dGVyKCkge1xuICBFdmVudEVtaXR0ZXIuaW5pdC5jYWxsKHRoaXMpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBFdmVudEVtaXR0ZXI7XG5tb2R1bGUuZXhwb3J0cy5vbmNlID0gb25jZTtcblxuLy8gQmFja3dhcmRzLWNvbXBhdCB3aXRoIG5vZGUgMC4xMC54XG5FdmVudEVtaXR0ZXIuRXZlbnRFbWl0dGVyID0gRXZlbnRFbWl0dGVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9ldmVudHMgPSB1bmRlZmluZWQ7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9ldmVudHNDb3VudCA9IDA7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9tYXhMaXN0ZW5lcnMgPSB1bmRlZmluZWQ7XG5cbi8vIEJ5IGRlZmF1bHQgRXZlbnRFbWl0dGVycyB3aWxsIHByaW50IGEgd2FybmluZyBpZiBtb3JlIHRoYW4gMTAgbGlzdGVuZXJzIGFyZVxuLy8gYWRkZWQgdG8gaXQuIFRoaXMgaXMgYSB1c2VmdWwgZGVmYXVsdCB3aGljaCBoZWxwcyBmaW5kaW5nIG1lbW9yeSBsZWFrcy5cbnZhciBkZWZhdWx0TWF4TGlzdGVuZXJzID0gMTA7XG5cbmZ1bmN0aW9uIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcImxpc3RlbmVyXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uLiBSZWNlaXZlZCB0eXBlICcgKyB0eXBlb2YgbGlzdGVuZXIpO1xuICB9XG59XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShFdmVudEVtaXR0ZXIsICdkZWZhdWx0TWF4TGlzdGVuZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBkZWZhdWx0TWF4TGlzdGVuZXJzO1xuICB9LFxuICBzZXQ6IGZ1bmN0aW9uKGFyZykge1xuICAgIGlmICh0eXBlb2YgYXJnICE9PSAnbnVtYmVyJyB8fCBhcmcgPCAwIHx8IE51bWJlcklzTmFOKGFyZykpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgdmFsdWUgb2YgXCJkZWZhdWx0TWF4TGlzdGVuZXJzXCIgaXMgb3V0IG9mIHJhbmdlLiBJdCBtdXN0IGJlIGEgbm9uLW5lZ2F0aXZlIG51bWJlci4gUmVjZWl2ZWQgJyArIGFyZyArICcuJyk7XG4gICAgfVxuICAgIGRlZmF1bHRNYXhMaXN0ZW5lcnMgPSBhcmc7XG4gIH1cbn0pO1xuXG5FdmVudEVtaXR0ZXIuaW5pdCA9IGZ1bmN0aW9uKCkge1xuXG4gIGlmICh0aGlzLl9ldmVudHMgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgdGhpcy5fZXZlbnRzID09PSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykuX2V2ZW50cykge1xuICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xuICB9XG5cbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gdGhpcy5fbWF4TGlzdGVuZXJzIHx8IHVuZGVmaW5lZDtcbn07XG5cbi8vIE9idmlvdXNseSBub3QgYWxsIEVtaXR0ZXJzIHNob3VsZCBiZSBsaW1pdGVkIHRvIDEwLiBUaGlzIGZ1bmN0aW9uIGFsbG93c1xuLy8gdGhhdCB0byBiZSBpbmNyZWFzZWQuIFNldCB0byB6ZXJvIGZvciB1bmxpbWl0ZWQuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnNldE1heExpc3RlbmVycyA9IGZ1bmN0aW9uIHNldE1heExpc3RlbmVycyhuKSB7XG4gIGlmICh0eXBlb2YgbiAhPT0gJ251bWJlcicgfHwgbiA8IDAgfHwgTnVtYmVySXNOYU4obikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVGhlIHZhbHVlIG9mIFwiblwiIGlzIG91dCBvZiByYW5nZS4gSXQgbXVzdCBiZSBhIG5vbi1uZWdhdGl2ZSBudW1iZXIuIFJlY2VpdmVkICcgKyBuICsgJy4nKTtcbiAgfVxuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSBuO1xuICByZXR1cm4gdGhpcztcbn07XG5cbmZ1bmN0aW9uIF9nZXRNYXhMaXN0ZW5lcnModGhhdCkge1xuICBpZiAodGhhdC5fbWF4TGlzdGVuZXJzID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIEV2ZW50RW1pdHRlci5kZWZhdWx0TWF4TGlzdGVuZXJzO1xuICByZXR1cm4gdGhhdC5fbWF4TGlzdGVuZXJzO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmdldE1heExpc3RlbmVycyA9IGZ1bmN0aW9uIGdldE1heExpc3RlbmVycygpIHtcbiAgcmV0dXJuIF9nZXRNYXhMaXN0ZW5lcnModGhpcyk7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbiBlbWl0KHR5cGUpIHtcbiAgdmFyIGFyZ3MgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIGFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xuICB2YXIgZG9FcnJvciA9ICh0eXBlID09PSAnZXJyb3InKTtcblxuICB2YXIgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICBpZiAoZXZlbnRzICE9PSB1bmRlZmluZWQpXG4gICAgZG9FcnJvciA9IChkb0Vycm9yICYmIGV2ZW50cy5lcnJvciA9PT0gdW5kZWZpbmVkKTtcbiAgZWxzZSBpZiAoIWRvRXJyb3IpXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIC8vIElmIHRoZXJlIGlzIG5vICdlcnJvcicgZXZlbnQgbGlzdGVuZXIgdGhlbiB0aHJvdy5cbiAgaWYgKGRvRXJyb3IpIHtcbiAgICB2YXIgZXI7XG4gICAgaWYgKGFyZ3MubGVuZ3RoID4gMClcbiAgICAgIGVyID0gYXJnc1swXTtcbiAgICBpZiAoZXIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgLy8gTm90ZTogVGhlIGNvbW1lbnRzIG9uIHRoZSBgdGhyb3dgIGxpbmVzIGFyZSBpbnRlbnRpb25hbCwgdGhleSBzaG93XG4gICAgICAvLyB1cCBpbiBOb2RlJ3Mgb3V0cHV0IGlmIHRoaXMgcmVzdWx0cyBpbiBhbiB1bmhhbmRsZWQgZXhjZXB0aW9uLlxuICAgICAgdGhyb3cgZXI7IC8vIFVuaGFuZGxlZCAnZXJyb3InIGV2ZW50XG4gICAgfVxuICAgIC8vIEF0IGxlYXN0IGdpdmUgc29tZSBraW5kIG9mIGNvbnRleHQgdG8gdGhlIHVzZXJcbiAgICB2YXIgZXJyID0gbmV3IEVycm9yKCdVbmhhbmRsZWQgZXJyb3IuJyArIChlciA/ICcgKCcgKyBlci5tZXNzYWdlICsgJyknIDogJycpKTtcbiAgICBlcnIuY29udGV4dCA9IGVyO1xuICAgIHRocm93IGVycjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgfVxuXG4gIHZhciBoYW5kbGVyID0gZXZlbnRzW3R5cGVdO1xuXG4gIGlmIChoYW5kbGVyID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIFJlZmxlY3RBcHBseShoYW5kbGVyLCB0aGlzLCBhcmdzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbGVuID0gaGFuZGxlci5sZW5ndGg7XG4gICAgdmFyIGxpc3RlbmVycyA9IGFycmF5Q2xvbmUoaGFuZGxlciwgbGVuKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKVxuICAgICAgUmVmbGVjdEFwcGx5KGxpc3RlbmVyc1tpXSwgdGhpcywgYXJncyk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmZ1bmN0aW9uIF9hZGRMaXN0ZW5lcih0YXJnZXQsIHR5cGUsIGxpc3RlbmVyLCBwcmVwZW5kKSB7XG4gIHZhciBtO1xuICB2YXIgZXZlbnRzO1xuICB2YXIgZXhpc3Rpbmc7XG5cbiAgY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcik7XG5cbiAgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHM7XG4gIGlmIChldmVudHMgPT09IHVuZGVmaW5lZCkge1xuICAgIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB0YXJnZXQuX2V2ZW50c0NvdW50ID0gMDtcbiAgfSBlbHNlIHtcbiAgICAvLyBUbyBhdm9pZCByZWN1cnNpb24gaW4gdGhlIGNhc2UgdGhhdCB0eXBlID09PSBcIm5ld0xpc3RlbmVyXCIhIEJlZm9yZVxuICAgIC8vIGFkZGluZyBpdCB0byB0aGUgbGlzdGVuZXJzLCBmaXJzdCBlbWl0IFwibmV3TGlzdGVuZXJcIi5cbiAgICBpZiAoZXZlbnRzLm5ld0xpc3RlbmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRhcmdldC5lbWl0KCduZXdMaXN0ZW5lcicsIHR5cGUsXG4gICAgICAgICAgICAgICAgICBsaXN0ZW5lci5saXN0ZW5lciA/IGxpc3RlbmVyLmxpc3RlbmVyIDogbGlzdGVuZXIpO1xuXG4gICAgICAvLyBSZS1hc3NpZ24gYGV2ZW50c2AgYmVjYXVzZSBhIG5ld0xpc3RlbmVyIGhhbmRsZXIgY291bGQgaGF2ZSBjYXVzZWQgdGhlXG4gICAgICAvLyB0aGlzLl9ldmVudHMgdG8gYmUgYXNzaWduZWQgdG8gYSBuZXcgb2JqZWN0XG4gICAgICBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcbiAgICB9XG4gICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV07XG4gIH1cblxuICBpZiAoZXhpc3RpbmcgPT09IHVuZGVmaW5lZCkge1xuICAgIC8vIE9wdGltaXplIHRoZSBjYXNlIG9mIG9uZSBsaXN0ZW5lci4gRG9uJ3QgbmVlZCB0aGUgZXh0cmEgYXJyYXkgb2JqZWN0LlxuICAgIGV4aXN0aW5nID0gZXZlbnRzW3R5cGVdID0gbGlzdGVuZXI7XG4gICAgKyt0YXJnZXQuX2V2ZW50c0NvdW50O1xuICB9IGVsc2Uge1xuICAgIGlmICh0eXBlb2YgZXhpc3RpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIEFkZGluZyB0aGUgc2Vjb25kIGVsZW1lbnQsIG5lZWQgdG8gY2hhbmdlIHRvIGFycmF5LlxuICAgICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV0gPVxuICAgICAgICBwcmVwZW5kID8gW2xpc3RlbmVyLCBleGlzdGluZ10gOiBbZXhpc3RpbmcsIGxpc3RlbmVyXTtcbiAgICAgIC8vIElmIHdlJ3ZlIGFscmVhZHkgZ290IGFuIGFycmF5LCBqdXN0IGFwcGVuZC5cbiAgICB9IGVsc2UgaWYgKHByZXBlbmQpIHtcbiAgICAgIGV4aXN0aW5nLnVuc2hpZnQobGlzdGVuZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBleGlzdGluZy5wdXNoKGxpc3RlbmVyKTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBmb3IgbGlzdGVuZXIgbGVha1xuICAgIG0gPSBfZ2V0TWF4TGlzdGVuZXJzKHRhcmdldCk7XG4gICAgaWYgKG0gPiAwICYmIGV4aXN0aW5nLmxlbmd0aCA+IG0gJiYgIWV4aXN0aW5nLndhcm5lZCkge1xuICAgICAgZXhpc3Rpbmcud2FybmVkID0gdHJ1ZTtcbiAgICAgIC8vIE5vIGVycm9yIGNvZGUgZm9yIHRoaXMgc2luY2UgaXQgaXMgYSBXYXJuaW5nXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcbiAgICAgIHZhciB3ID0gbmV3IEVycm9yKCdQb3NzaWJsZSBFdmVudEVtaXR0ZXIgbWVtb3J5IGxlYWsgZGV0ZWN0ZWQuICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZy5sZW5ndGggKyAnICcgKyBTdHJpbmcodHlwZSkgKyAnIGxpc3RlbmVycyAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FkZGVkLiBVc2UgZW1pdHRlci5zZXRNYXhMaXN0ZW5lcnMoKSB0byAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2luY3JlYXNlIGxpbWl0Jyk7XG4gICAgICB3Lm5hbWUgPSAnTWF4TGlzdGVuZXJzRXhjZWVkZWRXYXJuaW5nJztcbiAgICAgIHcuZW1pdHRlciA9IHRhcmdldDtcbiAgICAgIHcudHlwZSA9IHR5cGU7XG4gICAgICB3LmNvdW50ID0gZXhpc3RpbmcubGVuZ3RoO1xuICAgICAgUHJvY2Vzc0VtaXRXYXJuaW5nKHcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbiBhZGRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICByZXR1cm4gX2FkZExpc3RlbmVyKHRoaXMsIHR5cGUsIGxpc3RlbmVyLCBmYWxzZSk7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5wcmVwZW5kTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHByZXBlbmRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgICAgcmV0dXJuIF9hZGRMaXN0ZW5lcih0aGlzLCB0eXBlLCBsaXN0ZW5lciwgdHJ1ZSk7XG4gICAgfTtcblxuZnVuY3Rpb24gb25jZVdyYXBwZXIoKSB7XG4gIGlmICghdGhpcy5maXJlZCkge1xuICAgIHRoaXMudGFyZ2V0LnJlbW92ZUxpc3RlbmVyKHRoaXMudHlwZSwgdGhpcy53cmFwRm4pO1xuICAgIHRoaXMuZmlyZWQgPSB0cnVlO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKVxuICAgICAgcmV0dXJuIHRoaXMubGlzdGVuZXIuY2FsbCh0aGlzLnRhcmdldCk7XG4gICAgcmV0dXJuIHRoaXMubGlzdGVuZXIuYXBwbHkodGhpcy50YXJnZXQsIGFyZ3VtZW50cyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX29uY2VXcmFwKHRhcmdldCwgdHlwZSwgbGlzdGVuZXIpIHtcbiAgdmFyIHN0YXRlID0geyBmaXJlZDogZmFsc2UsIHdyYXBGbjogdW5kZWZpbmVkLCB0YXJnZXQ6IHRhcmdldCwgdHlwZTogdHlwZSwgbGlzdGVuZXI6IGxpc3RlbmVyIH07XG4gIHZhciB3cmFwcGVkID0gb25jZVdyYXBwZXIuYmluZChzdGF0ZSk7XG4gIHdyYXBwZWQubGlzdGVuZXIgPSBsaXN0ZW5lcjtcbiAgc3RhdGUud3JhcEZuID0gd3JhcHBlZDtcbiAgcmV0dXJuIHdyYXBwZWQ7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uIG9uY2UodHlwZSwgbGlzdGVuZXIpIHtcbiAgY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcik7XG4gIHRoaXMub24odHlwZSwgX29uY2VXcmFwKHRoaXMsIHR5cGUsIGxpc3RlbmVyKSk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5wcmVwZW5kT25jZUxpc3RlbmVyID1cbiAgICBmdW5jdGlvbiBwcmVwZW5kT25jZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKTtcbiAgICAgIHRoaXMucHJlcGVuZExpc3RlbmVyKHR5cGUsIF9vbmNlV3JhcCh0aGlzLCB0eXBlLCBsaXN0ZW5lcikpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuLy8gRW1pdHMgYSAncmVtb3ZlTGlzdGVuZXInIGV2ZW50IGlmIGFuZCBvbmx5IGlmIHRoZSBsaXN0ZW5lciB3YXMgcmVtb3ZlZC5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICB2YXIgbGlzdCwgZXZlbnRzLCBwb3NpdGlvbiwgaSwgb3JpZ2luYWxMaXN0ZW5lcjtcblxuICAgICAgY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcik7XG5cbiAgICAgIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcbiAgICAgIGlmIChldmVudHMgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgIGxpc3QgPSBldmVudHNbdHlwZV07XG4gICAgICBpZiAobGlzdCA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgaWYgKGxpc3QgPT09IGxpc3RlbmVyIHx8IGxpc3QubGlzdGVuZXIgPT09IGxpc3RlbmVyKSB7XG4gICAgICAgIGlmICgtLXRoaXMuX2V2ZW50c0NvdW50ID09PSAwKVxuICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGRlbGV0ZSBldmVudHNbdHlwZV07XG4gICAgICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lcilcbiAgICAgICAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBsaXN0Lmxpc3RlbmVyIHx8IGxpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgbGlzdCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwb3NpdGlvbiA9IC0xO1xuXG4gICAgICAgIGZvciAoaSA9IGxpc3QubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICBpZiAobGlzdFtpXSA9PT0gbGlzdGVuZXIgfHwgbGlzdFtpXS5saXN0ZW5lciA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgICAgIG9yaWdpbmFsTGlzdGVuZXIgPSBsaXN0W2ldLmxpc3RlbmVyO1xuICAgICAgICAgICAgcG9zaXRpb24gPSBpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBvc2l0aW9uIDwgMClcbiAgICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgICBpZiAocG9zaXRpb24gPT09IDApXG4gICAgICAgICAgbGlzdC5zaGlmdCgpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBzcGxpY2VPbmUobGlzdCwgcG9zaXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxpc3QubGVuZ3RoID09PSAxKVxuICAgICAgICAgIGV2ZW50c1t0eXBlXSA9IGxpc3RbMF07XG5cbiAgICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lciAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBvcmlnaW5hbExpc3RlbmVyIHx8IGxpc3RlbmVyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vZmYgPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9XG4gICAgZnVuY3Rpb24gcmVtb3ZlQWxsTGlzdGVuZXJzKHR5cGUpIHtcbiAgICAgIHZhciBsaXN0ZW5lcnMsIGV2ZW50cywgaTtcblxuICAgICAgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICAgICAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgLy8gbm90IGxpc3RlbmluZyBmb3IgcmVtb3ZlTGlzdGVuZXIsIG5vIG5lZWQgdG8gZW1pdFxuICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnRzW3R5cGVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpZiAoLS10aGlzLl9ldmVudHNDb3VudCA9PT0gMClcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgZGVsZXRlIGV2ZW50c1t0eXBlXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgLy8gZW1pdCByZW1vdmVMaXN0ZW5lciBmb3IgYWxsIGxpc3RlbmVycyBvbiBhbGwgZXZlbnRzXG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGV2ZW50cyk7XG4gICAgICAgIHZhciBrZXk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgICBpZiAoa2V5ID09PSAncmVtb3ZlTGlzdGVuZXInKSBjb250aW51ZTtcbiAgICAgICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycyhrZXkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKCdyZW1vdmVMaXN0ZW5lcicpO1xuICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICBsaXN0ZW5lcnMgPSBldmVudHNbdHlwZV07XG5cbiAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXJzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzKTtcbiAgICAgIH0gZWxzZSBpZiAobGlzdGVuZXJzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8gTElGTyBvcmRlclxuICAgICAgICBmb3IgKGkgPSBsaXN0ZW5lcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyc1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuZnVuY3Rpb24gX2xpc3RlbmVycyh0YXJnZXQsIHR5cGUsIHVud3JhcCkge1xuICB2YXIgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHM7XG5cbiAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBbXTtcblxuICB2YXIgZXZsaXN0ZW5lciA9IGV2ZW50c1t0eXBlXTtcbiAgaWYgKGV2bGlzdGVuZXIgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gW107XG5cbiAgaWYgKHR5cGVvZiBldmxpc3RlbmVyID09PSAnZnVuY3Rpb24nKVxuICAgIHJldHVybiB1bndyYXAgPyBbZXZsaXN0ZW5lci5saXN0ZW5lciB8fCBldmxpc3RlbmVyXSA6IFtldmxpc3RlbmVyXTtcblxuICByZXR1cm4gdW53cmFwID9cbiAgICB1bndyYXBMaXN0ZW5lcnMoZXZsaXN0ZW5lcikgOiBhcnJheUNsb25lKGV2bGlzdGVuZXIsIGV2bGlzdGVuZXIubGVuZ3RoKTtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lcnMgPSBmdW5jdGlvbiBsaXN0ZW5lcnModHlwZSkge1xuICByZXR1cm4gX2xpc3RlbmVycyh0aGlzLCB0eXBlLCB0cnVlKTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmF3TGlzdGVuZXJzID0gZnVuY3Rpb24gcmF3TGlzdGVuZXJzKHR5cGUpIHtcbiAgcmV0dXJuIF9saXN0ZW5lcnModGhpcywgdHlwZSwgZmFsc2UpO1xufTtcblxuRXZlbnRFbWl0dGVyLmxpc3RlbmVyQ291bnQgPSBmdW5jdGlvbihlbWl0dGVyLCB0eXBlKSB7XG4gIGlmICh0eXBlb2YgZW1pdHRlci5saXN0ZW5lckNvdW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGVtaXR0ZXIubGlzdGVuZXJDb3VudCh0eXBlKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbGlzdGVuZXJDb3VudC5jYWxsKGVtaXR0ZXIsIHR5cGUpO1xuICB9XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVyQ291bnQgPSBsaXN0ZW5lckNvdW50O1xuZnVuY3Rpb24gbGlzdGVuZXJDb3VudCh0eXBlKSB7XG4gIHZhciBldmVudHMgPSB0aGlzLl9ldmVudHM7XG5cbiAgaWYgKGV2ZW50cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGV2bGlzdGVuZXIgPSBldmVudHNbdHlwZV07XG5cbiAgICBpZiAodHlwZW9mIGV2bGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH0gZWxzZSBpZiAoZXZsaXN0ZW5lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZXZsaXN0ZW5lci5sZW5ndGg7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIDA7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZXZlbnROYW1lcyA9IGZ1bmN0aW9uIGV2ZW50TmFtZXMoKSB7XG4gIHJldHVybiB0aGlzLl9ldmVudHNDb3VudCA+IDAgPyBSZWZsZWN0T3duS2V5cyh0aGlzLl9ldmVudHMpIDogW107XG59O1xuXG5mdW5jdGlvbiBhcnJheUNsb25lKGFyciwgbikge1xuICB2YXIgY29weSA9IG5ldyBBcnJheShuKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBuOyArK2kpXG4gICAgY29weVtpXSA9IGFycltpXTtcbiAgcmV0dXJuIGNvcHk7XG59XG5cbmZ1bmN0aW9uIHNwbGljZU9uZShsaXN0LCBpbmRleCkge1xuICBmb3IgKDsgaW5kZXggKyAxIDwgbGlzdC5sZW5ndGg7IGluZGV4KyspXG4gICAgbGlzdFtpbmRleF0gPSBsaXN0W2luZGV4ICsgMV07XG4gIGxpc3QucG9wKCk7XG59XG5cbmZ1bmN0aW9uIHVud3JhcExpc3RlbmVycyhhcnIpIHtcbiAgdmFyIHJldCA9IG5ldyBBcnJheShhcnIubGVuZ3RoKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXQubGVuZ3RoOyArK2kpIHtcbiAgICByZXRbaV0gPSBhcnJbaV0ubGlzdGVuZXIgfHwgYXJyW2ldO1xuICB9XG4gIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIG9uY2UoZW1pdHRlciwgbmFtZSkge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIGZ1bmN0aW9uIGVycm9yTGlzdGVuZXIoZXJyKSB7XG4gICAgICBlbWl0dGVyLnJlbW92ZUxpc3RlbmVyKG5hbWUsIHJlc29sdmVyKTtcbiAgICAgIHJlamVjdChlcnIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc29sdmVyKCkge1xuICAgICAgaWYgKHR5cGVvZiBlbWl0dGVyLnJlbW92ZUxpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGVtaXR0ZXIucmVtb3ZlTGlzdGVuZXIoJ2Vycm9yJywgZXJyb3JMaXN0ZW5lcik7XG4gICAgICB9XG4gICAgICByZXNvbHZlKFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKSk7XG4gICAgfTtcblxuICAgIGV2ZW50VGFyZ2V0QWdub3N0aWNBZGRMaXN0ZW5lcihlbWl0dGVyLCBuYW1lLCByZXNvbHZlciwgeyBvbmNlOiB0cnVlIH0pO1xuICAgIGlmIChuYW1lICE9PSAnZXJyb3InKSB7XG4gICAgICBhZGRFcnJvckhhbmRsZXJJZkV2ZW50RW1pdHRlcihlbWl0dGVyLCBlcnJvckxpc3RlbmVyLCB7IG9uY2U6IHRydWUgfSk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkRXJyb3JIYW5kbGVySWZFdmVudEVtaXR0ZXIoZW1pdHRlciwgaGFuZGxlciwgZmxhZ3MpIHtcbiAgaWYgKHR5cGVvZiBlbWl0dGVyLm9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZXZlbnRUYXJnZXRBZ25vc3RpY0FkZExpc3RlbmVyKGVtaXR0ZXIsICdlcnJvcicsIGhhbmRsZXIsIGZsYWdzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBldmVudFRhcmdldEFnbm9zdGljQWRkTGlzdGVuZXIoZW1pdHRlciwgbmFtZSwgbGlzdGVuZXIsIGZsYWdzKSB7XG4gIGlmICh0eXBlb2YgZW1pdHRlci5vbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGlmIChmbGFncy5vbmNlKSB7XG4gICAgICBlbWl0dGVyLm9uY2UobmFtZSwgbGlzdGVuZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbWl0dGVyLm9uKG5hbWUsIGxpc3RlbmVyKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZW9mIGVtaXR0ZXIuYWRkRXZlbnRMaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIEV2ZW50VGFyZ2V0IGRvZXMgbm90IGhhdmUgYGVycm9yYCBldmVudCBzZW1hbnRpY3MgbGlrZSBOb2RlXG4gICAgLy8gRXZlbnRFbWl0dGVycywgd2UgZG8gbm90IGxpc3RlbiBmb3IgYGVycm9yYCBldmVudHMgaGVyZS5cbiAgICBlbWl0dGVyLmFkZEV2ZW50TGlzdGVuZXIobmFtZSwgZnVuY3Rpb24gd3JhcExpc3RlbmVyKGFyZykge1xuICAgICAgLy8gSUUgZG9lcyBub3QgaGF2ZSBidWlsdGluIGB7IG9uY2U6IHRydWUgfWAgc3VwcG9ydCBzbyB3ZVxuICAgICAgLy8gaGF2ZSB0byBkbyBpdCBtYW51YWxseS5cbiAgICAgIGlmIChmbGFncy5vbmNlKSB7XG4gICAgICAgIGVtaXR0ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihuYW1lLCB3cmFwTGlzdGVuZXIpO1xuICAgICAgfVxuICAgICAgbGlzdGVuZXIoYXJnKTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJlbWl0dGVyXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEV2ZW50RW1pdHRlci4gUmVjZWl2ZWQgdHlwZSAnICsgdHlwZW9mIGVtaXR0ZXIpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBnZXRUcmFuc2xhdGlvbiB9IGZyb20gXCIuLi9yZW5kZXIvYXBwZW5kQ2hpbGRcIjtcbmltcG9ydCB7IGFwcGx5VHJhbnNmb3JtLCBhcHBseUludmVyc2VUcmFuc2Zvcm0sIHRyYW5zbGF0ZSwgcm90YXRlLCBzY2FsZSB9IGZyb20gXCIuLi91dGlscy9tYXRoVXRpbHNcIjtcblxuZXhwb3J0IGNvbnN0IEJPUkRFUl9DT0xPUiA9IFwiIzAwQkZGRlwiO1xuXG5jb25zdCB1c2VyU2VsZWN0U3R5bGVTaGVldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbnVzZXJTZWxlY3RTdHlsZVNoZWV0LmlubmVySFRNTCA9IGBcbmJvZHkge1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuYDtcblxudXNlclNlbGVjdFN0eWxlU2hlZXQuc2V0QXR0cmlidXRlKFwiZGF0YS1wZGYtYW5ub3RhdGUtdXNlci1zZWxlY3RcIiwgXCJ0cnVlXCIpO1xuXG4vKipcbiAqIEZpbmQgdGhlIFNWR0VsZW1lbnQgdGhhdCBjb250YWlucyBhbGwgdGhlIGFubm90YXRpb25zIGZvciBhIHBhZ2VcbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IG5vZGUgQW4gYW5ub3RhdGlvbiB3aXRoaW4gdGhhdCBjb250YWluZXJcbiAqIEByZXR1cm4ge1NWR0VsZW1lbnR9IFRoZSBjb250YWluZXIgU1ZHIG9yIG51bGwgaWYgaXQgY2FuJ3QgYmUgZm91bmRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpbmRTVkdDb250YWluZXIobm9kZSkge1xuICBsZXQgcGFyZW50Tm9kZSA9IG5vZGU7XG5cbiAgd2hpbGUgKChwYXJlbnROb2RlID0gcGFyZW50Tm9kZS5wYXJlbnROb2RlKSAmJiBwYXJlbnROb2RlICE9PSBkb2N1bWVudCkge1xuICAgIGlmIChwYXJlbnROb2RlLm5vZGVOYW1lLnRvVXBwZXJDYXNlKCkgPT09IFwiU1ZHXCIgJiYgcGFyZW50Tm9kZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBkZi1hbm5vdGF0ZS1jb250YWluZXJcIikgPT09IFwidHJ1ZVwiKSB7XG4gICAgICByZXR1cm4gcGFyZW50Tm9kZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKiBGaW5kIGFuIFNWR0VsZW1lbnQgY29udGFpbmVyIGF0IGEgZ2l2ZW4gcG9pbnRcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0geCBUaGUgeCBjb29yZGluYXRlIG9mIHRoZSBwb2ludFxuICogQHBhcmFtIHtOdW1iZXJ9IHkgVGhlIHkgY29vcmRpbmF0ZSBvZiB0aGUgcG9pbnRcbiAqIEByZXR1cm4ge1NWR0VsZW1lbnR9IFRoZSBjb250YWluZXIgU1ZHIG9yIG51bGwgaWYgb25lIGNhbid0IGJlIGZvdW5kXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaW5kU1ZHQXRQb2ludCh4LCB5KSB7XG4gIGxldCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3N2Z1tkYXRhLXBkZi1hbm5vdGF0ZS1jb250YWluZXI9XCJ0cnVlXCJdJyk7XG5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBlbGVtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgZWwgPSBlbGVtZW50c1tpXTtcbiAgICBsZXQgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgaWYgKHBvaW50SW50ZXJzZWN0c1JlY3QoeCwgeSwgcmVjdCkpIHtcbiAgICAgIHJldHVybiBlbDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKiBGaW5kIGFuIEVsZW1lbnQgdGhhdCByZXByZXNlbnRzIGFuIGFubm90YXRpb24gYXQgYSBnaXZlbiBwb2ludC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0geCBUaGUgeCBjb29yZGluYXRlIG9mIHRoZSBwb2ludFxuICogQHBhcmFtIHtOdW1iZXJ9IHkgVGhlIHkgY29vcmRpbmF0ZSBvZiB0aGUgcG9pbnRcbiAqIEByZXR1cm4ge0VsZW1lbnR8bnVsbH0gVGhlIGFubm90YXRpb24gZWxlbWVudCBvciBudWxsIGlmIG9uZSBjYW4ndCBiZSBmb3VuZFxuICovXG5leHBvcnQgZnVuY3Rpb24gZmluZEFubm90YXRpb25BdFBvaW50KHgsIHkpIHtcbiAgbGV0IHN2ZyA9IGZpbmRTVkdBdFBvaW50KHgsIHkpO1xuXG4gIGlmICghc3ZnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbGV0IGVsZW1lbnRzID0gc3ZnLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1wZGYtYW5ub3RhdGUtdHlwZV1cIik7XG4gIGZvciAobGV0IGVsZW1lbnQgb2YgZWxlbWVudHMpIHtcbiAgICBpZiAocG9pbnRJbnRlcnNlY3RzUmVjdCh4LCB5LCBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpKSkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgcG9pbnQgaW50ZXJzZWN0cyBhIHJlY3RcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0geCBUaGUgeCBjb29yZGluYXRlIG9mIHRoZSBwb2ludFxuICogQHBhcmFtIHtOdW1iZXJ9IHkgVGhlIHkgY29vcmRpbmF0ZSBvZiB0aGUgcG9pbnRcbiAqIEBwYXJhbSB7T2JqZWN0fSByZWN0IFRoZSBwb2ludHMgb2YgYSByZWN0IChsaWtlbHkgZnJvbSBnZXRCb3VuZGluZ0NsaWVudFJlY3QpXG4gKiBAcmV0dXJuIHtCb29sZWFufSBUcnVlIGlmIGEgY29sbGlzaW9uIG9jY3Vycywgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwb2ludEludGVyc2VjdHNSZWN0KHgsIHksIHJlY3QpIHtcbiAgcmV0dXJuIHkgPj0gcmVjdC50b3AgJiYgeSA8PSByZWN0LmJvdHRvbSAmJiB4ID49IHJlY3QubGVmdCAmJiB4IDw9IHJlY3QucmlnaHQ7XG59XG5cbi8qKlxuICogR2V0IHRoZSByZWN0IG9mIGFuIGFubm90YXRpb24gZWxlbWVudCBhY2NvdW50aW5nIGZvciBvZmZzZXQuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbCBUaGUgZWxlbWVudCB0byBnZXQgdGhlIHJlY3Qgb2ZcbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIGRpbWVuc2lvbnMgb2YgdGhlIGVsZW1lbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldE9mZnNldEFubm90YXRpb25SZWN0KGVsKSB7XG4gIGxldCByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIGxldCB7IHdpZHRoLCBoZWlnaHQgfSA9IHJlY3Q7XG4gIGxldCBleHRyYU9mZnNldFdpZHRoID0gMDtcbiAgbGV0IGV4dHJhT2Zmc2V0SGVpZ2h0ID0gMDtcbiAgaWYgKFtcImxpbmVcIiwgXCJwYXRoXCJdLmluZGV4T2YoZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpKSA+IC0xICYmIGVsLmdldEJCb3gpIHtcbiAgICBsZXQgYmJveCA9IGVsLmdldEJCb3goKTtcbiAgICBleHRyYU9mZnNldFdpZHRoID0gKHJlY3Qud2lkdGggLSBiYm94LndpZHRoKSAvIDI7XG4gICAgZXh0cmFPZmZzZXRIZWlnaHQgPSAocmVjdC5oZWlnaHQgLSBiYm94LmhlaWdodCkgLyAyO1xuICAgIHdpZHRoID0gYmJveC53aWR0aDtcbiAgICBoZWlnaHQgPSBiYm94LmhlaWdodDtcbiAgfVxuICBsZXQgeyBvZmZzZXRMZWZ0LCBvZmZzZXRUb3AgfSA9IGdldE9mZnNldChlbCk7XG4gIHJldHVybiB7XG4gICAgdG9wOiByZWN0LnRvcCAtIG9mZnNldFRvcCArIGV4dHJhT2Zmc2V0SGVpZ2h0LFxuICAgIGxlZnQ6IHJlY3QubGVmdCAtIG9mZnNldExlZnQgKyBleHRyYU9mZnNldFdpZHRoLFxuICAgIGJvdHRvbTogcmVjdC5ib3R0b20gLSBvZmZzZXRUb3AgLSBleHRyYU9mZnNldEhlaWdodCxcbiAgICByaWdodDogcmVjdC5yaWdodCAtIG9mZnNldExlZnQgLSBleHRyYU9mZnNldFdpZHRoLFxuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBoZWlnaHQ6IGhlaWdodCxcbiAgfTtcbn1cblxuLyoqXG4gKiBBZGp1c3Qgc2NhbGUgZnJvbSBub3JtYWxpemVkIHNjYWxlICgxMDAlKSB0byByZW5kZXJlZCBzY2FsZS5cbiAqXG4gKiBAcGFyYW0ge1NWR0VsZW1lbnR9IHN2ZyBUaGUgU1ZHIHRvIGdhdGhlciBtZXRhZGF0YSBmcm9tXG4gKiBAcGFyYW0ge09iamVjdH0gcmVjdCBBIG1hcCBvZiBudW1lcmljIHZhbHVlcyB0byBzY2FsZVxuICogQHJldHVybiB7T2JqZWN0fSBBIGNvcHkgb2YgYHJlY3RgIHdpdGggdmFsdWVzIHNjYWxlZCB1cFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2NhbGVVcChzdmcsIHJlY3QpIHtcbiAgbGV0IHJlc3VsdCA9IHt9O1xuICBsZXQgeyB2aWV3cG9ydCB9ID0gZ2V0TWV0YWRhdGEoc3ZnKTtcblxuICBPYmplY3Qua2V5cyhyZWN0KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICByZXN1bHRba2V5XSA9IHJlY3Rba2V5XSAqIHZpZXdwb3J0LnNjYWxlO1xuICB9KTtcblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29udmVydFRvU3ZnUmVjdChyZWN0LCBzdmcsIHZpZXdwb3J0KSB7XG4gIGxldCBwdDEgPSBbcmVjdC54LCByZWN0LnldO1xuICBsZXQgcHQyID0gW3JlY3QueCArIHJlY3Qud2lkdGgsIHJlY3QueSArIHJlY3QuaGVpZ2h0XTtcblxuICBwdDEgPSBjb252ZXJ0VG9TdmdQb2ludChwdDEsIHN2Zywgdmlld3BvcnQpO1xuICBwdDIgPSBjb252ZXJ0VG9TdmdQb2ludChwdDIsIHN2Zywgdmlld3BvcnQpO1xuXG4gIHJldHVybiB7XG4gICAgeDogTWF0aC5taW4ocHQxWzBdLCBwdDJbMF0pLFxuICAgIHk6IE1hdGgubWluKHB0MVsxXSwgcHQyWzFdKSxcbiAgICB3aWR0aDogTWF0aC5hYnMocHQyWzBdIC0gcHQxWzBdKSxcbiAgICBoZWlnaHQ6IE1hdGguYWJzKHB0MlsxXSAtIHB0MVsxXSksXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0VG9TdmdQb2ludChwdCwgc3ZnLCB2aWV3cG9ydCkge1xuICB2aWV3cG9ydCA9IHZpZXdwb3J0IHx8IGdldE1ldGFkYXRhKHN2Zykudmlld3BvcnQ7XG5cbiAgbGV0IHhmb3JtID0gWzEsIDAsIDAsIDEsIDAsIDBdO1xuICB4Zm9ybSA9IHNjYWxlKHhmb3JtLCB2aWV3cG9ydC5zY2FsZSwgdmlld3BvcnQuc2NhbGUpO1xuICB4Zm9ybSA9IHJvdGF0ZSh4Zm9ybSwgdmlld3BvcnQucm90YXRpb24pO1xuXG4gIGxldCBvZmZzZXQgPSBnZXRUcmFuc2xhdGlvbih2aWV3cG9ydCk7XG4gIHhmb3JtID0gdHJhbnNsYXRlKHhmb3JtLCBvZmZzZXQueCwgb2Zmc2V0LnkpO1xuXG4gIHJldHVybiBhcHBseUludmVyc2VUcmFuc2Zvcm0ocHQsIHhmb3JtKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRUb1NjcmVlblBvaW50KHB0LCBzdmcsIHZpZXdwb3J0KSB7XG4gIHZpZXdwb3J0ID0gdmlld3BvcnQgfHwgZ2V0TWV0YWRhdGEoc3ZnKS52aWV3cG9ydDtcblxuICBsZXQgeGZvcm0gPSBbMSwgMCwgMCwgMSwgMCwgMF07XG4gIHhmb3JtID0gc2NhbGUoeGZvcm0sIHZpZXdwb3J0LnNjYWxlLCB2aWV3cG9ydC5zY2FsZSk7XG4gIHhmb3JtID0gcm90YXRlKHhmb3JtLCB2aWV3cG9ydC5yb3RhdGlvbik7XG5cbiAgbGV0IG9mZnNldCA9IGdldFRyYW5zbGF0aW9uKHZpZXdwb3J0KTtcbiAgeGZvcm0gPSB0cmFuc2xhdGUoeGZvcm0sIG9mZnNldC54LCBvZmZzZXQueSk7XG5cbiAgcmV0dXJuIGFwcGx5VHJhbnNmb3JtKHB0LCB4Zm9ybSk7XG59XG5cbi8qKlxuICogQWRqdXN0IHNjYWxlIGZyb20gcmVuZGVyZWQgc2NhbGUgdG8gYSBub3JtYWxpemVkIHNjYWxlICgxMDAlKS5cbiAqXG4gKiBAcGFyYW0ge1NWR0VsZW1lbnR9IHN2ZyBUaGUgU1ZHIHRvIGdhdGhlciBtZXRhZGF0YSBmcm9tXG4gKiBAcGFyYW0ge09iamVjdH0gcmVjdCBBIG1hcCBvZiBudW1lcmljIHZhbHVlcyB0byBzY2FsZVxuICogQHJldHVybiB7T2JqZWN0fSBBIGNvcHkgb2YgYHJlY3RgIHdpdGggdmFsdWVzIHNjYWxlZCBkb3duXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzY2FsZURvd24oc3ZnLCByZWN0KSB7XG4gIGxldCByZXN1bHQgPSB7fTtcbiAgbGV0IHsgdmlld3BvcnQgfSA9IGdldE1ldGFkYXRhKHN2Zyk7XG5cbiAgT2JqZWN0LmtleXMocmVjdCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgcmVzdWx0W2tleV0gPSByZWN0W2tleV0gLyB2aWV3cG9ydC5zY2FsZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIHNjcm9sbCBwb3NpdGlvbiBvZiBhbiBlbGVtZW50LCBhY2NvdW50aW5nIGZvciBwYXJlbnQgZWxlbWVudHNcbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsIFRoZSBlbGVtZW50IHRvIGdldCB0aGUgc2Nyb2xsIHBvc2l0aW9uIGZvclxuICogQHJldHVybiB7T2JqZWN0fSBUaGUgc2Nyb2xsVG9wIGFuZCBzY3JvbGxMZWZ0IHBvc2l0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY3JvbGwoZWwpIHtcbiAgbGV0IHNjcm9sbFRvcCA9IDA7XG4gIGxldCBzY3JvbGxMZWZ0ID0gMDtcbiAgbGV0IHBhcmVudE5vZGUgPSBlbDtcblxuICB3aGlsZSAoKHBhcmVudE5vZGUgPSBwYXJlbnROb2RlLnBhcmVudE5vZGUpICYmIHBhcmVudE5vZGUgIT09IGRvY3VtZW50KSB7XG4gICAgc2Nyb2xsVG9wICs9IHBhcmVudE5vZGUuc2Nyb2xsVG9wO1xuICAgIHNjcm9sbExlZnQgKz0gcGFyZW50Tm9kZS5zY3JvbGxMZWZ0O1xuICB9XG5cbiAgcmV0dXJuIHsgc2Nyb2xsVG9wLCBzY3JvbGxMZWZ0IH07XG59XG5cbi8qKlxuICogR2V0IHRoZSBvZmZzZXQgcG9zaXRpb24gb2YgYW4gZWxlbWVudCwgYWNjb3VudGluZyBmb3IgcGFyZW50IGVsZW1lbnRzXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbCBUaGUgZWxlbWVudCB0byBnZXQgdGhlIG9mZnNldCBwb3NpdGlvbiBmb3JcbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIG9mZnNldFRvcCBhbmQgb2Zmc2V0TGVmdCBwb3NpdGlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0T2Zmc2V0KGVsKSB7XG4gIGxldCBwYXJlbnROb2RlID0gZWw7XG5cbiAgd2hpbGUgKChwYXJlbnROb2RlID0gcGFyZW50Tm9kZS5wYXJlbnROb2RlKSAmJiBwYXJlbnROb2RlICE9PSBkb2N1bWVudCkge1xuICAgIGlmIChwYXJlbnROb2RlLm5vZGVOYW1lLnRvVXBwZXJDYXNlKCkgPT09IFwiU1ZHXCIpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGxldCByZWN0ID0gcGFyZW50Tm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICByZXR1cm4geyBvZmZzZXRMZWZ0OiByZWN0LmxlZnQsIG9mZnNldFRvcDogcmVjdC50b3AgfTtcbn1cblxuLyoqXG4gKiBEaXNhYmxlIHVzZXIgYWJpbGl0eSB0byBzZWxlY3QgdGV4dCBvbiBwYWdlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaXNhYmxlVXNlclNlbGVjdCgpIHtcbiAgaWYgKCF1c2VyU2VsZWN0U3R5bGVTaGVldC5wYXJlbnROb2RlKSB7XG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCh1c2VyU2VsZWN0U3R5bGVTaGVldCk7XG4gIH1cbn1cblxuLyoqXG4gKiBFbmFibGUgdXNlciBhYmlsaXR5IHRvIHNlbGVjdCB0ZXh0IG9uIHBhZ2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVuYWJsZVVzZXJTZWxlY3QoKSB7XG4gIGlmICh1c2VyU2VsZWN0U3R5bGVTaGVldC5wYXJlbnROb2RlKSB7XG4gICAgdXNlclNlbGVjdFN0eWxlU2hlZXQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh1c2VyU2VsZWN0U3R5bGVTaGVldCk7XG4gIH1cbn1cblxuLyoqXG4gKiBHZXQgdGhlIG1ldGFkYXRhIGZvciBhIFNWRyBjb250YWluZXJcbiAqXG4gKiBAcGFyYW0ge1NWR0VsZW1lbnR9IHN2ZyBUaGUgU1ZHIGNvbnRhaW5lciB0byBnZXQgbWV0YWRhdGEgZm9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRNZXRhZGF0YShzdmcpIHtcbiAgcmV0dXJuIHtcbiAgICBkb2N1bWVudElkOiBzdmcuZ2V0QXR0cmlidXRlKFwiZGF0YS1wZGYtYW5ub3RhdGUtZG9jdW1lbnRcIiksXG4gICAgcGFnZU51bWJlcjogcGFyc2VJbnQoc3ZnLmdldEF0dHJpYnV0ZShcImRhdGEtcGRmLWFubm90YXRlLXBhZ2VcIiksIDEwKSxcbiAgICB2aWV3cG9ydDogSlNPTi5wYXJzZShzdmcuZ2V0QXR0cmlidXRlKFwiZGF0YS1wZGYtYW5ub3RhdGUtdmlld3BvcnRcIikpLFxuICB9O1xufVxuIiwiaW1wb3J0IHJlbmRlckxpbmUgZnJvbSAnLi9yZW5kZXJMaW5lJztcbmltcG9ydCByZW5kZXJQYXRoIGZyb20gJy4vcmVuZGVyUGF0aCc7XG5pbXBvcnQgcmVuZGVyUG9pbnQgZnJvbSAnLi9yZW5kZXJQb2ludCc7XG5pbXBvcnQgcmVuZGVyUmVjdCBmcm9tICcuL3JlbmRlclJlY3QnO1xuaW1wb3J0IHJlbmRlclRleHQgZnJvbSAnLi9yZW5kZXJUZXh0JztcbmltcG9ydCByZW5kZXJDaXJjbGUgZnJvbSAnLi9yZW5kZXJDaXJjbGUnO1xuaW1wb3J0IHJlbmRlckFycm93IGZyb20gJy4vcmVuZGVyQXJyb3cnO1xuXG5jb25zdCBpc0ZpcmVmb3ggPSAvZmlyZWZveC9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG5cbi8qKlxuICogR2V0IHRoZSB4L3kgdHJhbnNsYXRpb24gdG8gYmUgdXNlZCBmb3IgdHJhbnNmb3JtaW5nIHRoZSBhbm5vdGF0aW9uc1xuICogYmFzZWQgb24gdGhlIHJvdGF0aW9uIG9mIHRoZSB2aWV3cG9ydC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmlld3BvcnQgVGhlIHZpZXdwb3J0IGRhdGEgZnJvbSB0aGUgcGFnZVxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VHJhbnNsYXRpb24odmlld3BvcnQpIHtcbiAgbGV0IHg7XG4gIGxldCB5O1xuXG4gIC8vIE1vZHVsdXMgMzYwIG9uIHRoZSByb3RhdGlvbiBzbyB0aGF0IHdlIG9ubHlcbiAgLy8gaGF2ZSB0byB3b3JyeSBhYm91dCBmb3VyIHBvc3NpYmxlIHZhbHVlcy5cbiAgc3dpdGNoICh2aWV3cG9ydC5yb3RhdGlvbiAlIDM2MCkge1xuICAgIGNhc2UgMDpcbiAgICAgIHggPSB5ID0gMDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgOTA6XG4gICAgICB4ID0gMDtcbiAgICAgIHkgPSAodmlld3BvcnQud2lkdGggLyB2aWV3cG9ydC5zY2FsZSkgKiAtMTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMTgwOlxuICAgICAgeCA9ICh2aWV3cG9ydC53aWR0aCAvIHZpZXdwb3J0LnNjYWxlKSAqIC0xO1xuICAgICAgeSA9ICh2aWV3cG9ydC5oZWlnaHQgLyB2aWV3cG9ydC5zY2FsZSkgKiAtMTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMjcwOlxuICAgICAgeCA9ICh2aWV3cG9ydC5oZWlnaHQgLyB2aWV3cG9ydC5zY2FsZSkgKiAtMTtcbiAgICAgIHkgPSAwO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4geyB4LCB5IH07XG59XG5cbi8qKlxuICogVHJhbnNmb3JtIHRoZSByb3RhdGlvbiBhbmQgc2NhbGUgb2YgYSBub2RlIHVzaW5nIFNWRydzIG5hdGl2ZSB0cmFuc2Zvcm0gYXR0cmlidXRlLlxuICpcbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZSBUaGUgbm9kZSB0byBiZSB0cmFuc2Zvcm1lZFxuICogQHBhcmFtIHtPYmplY3R9IHZpZXdwb3J0IFRoZSBwYWdlJ3Mgdmlld3BvcnQgZGF0YVxuICogQHJldHVybiB7Tm9kZX1cbiAqL1xuZnVuY3Rpb24gdHJhbnNmb3JtKG5vZGUsIHZpZXdwb3J0KSB7XG4gIGxldCB0cmFucyA9IGdldFRyYW5zbGF0aW9uKHZpZXdwb3J0KTtcblxuICAvLyBMZXQgU1ZHIG5hdGl2ZWx5IHRyYW5zZm9ybSB0aGUgZWxlbWVudFxuICBub2RlLnNldEF0dHJpYnV0ZSgndHJhbnNmb3JtJywgYHNjYWxlKCR7dmlld3BvcnQuc2NhbGV9KSByb3RhdGUoJHt2aWV3cG9ydC5yb3RhdGlvbn0pIHRyYW5zbGF0ZSgke3RyYW5zLnh9LCAke3RyYW5zLnl9KWApO1xuXG4gIC8vIE1hbnVhbGx5IGFkanVzdCB4L3kgZm9yIG5lc3RlZCBTVkcgbm9kZXNcbiAgaWYgKCFpc0ZpcmVmb3ggJiYgbm9kZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnc3ZnJykge1xuICAgIG5vZGUuc2V0QXR0cmlidXRlKCd4JywgcGFyc2VJbnQobm9kZS5nZXRBdHRyaWJ1dGUoJ3gnKSwgMTApICogdmlld3BvcnQuc2NhbGUpO1xuICAgIG5vZGUuc2V0QXR0cmlidXRlKCd5JywgcGFyc2VJbnQobm9kZS5nZXRBdHRyaWJ1dGUoJ3knKSwgMTApICogdmlld3BvcnQuc2NhbGUpO1xuXG4gICAgbGV0IHggPSBwYXJzZUludChub2RlLmdldEF0dHJpYnV0ZSgneCcsIDEwKSk7XG4gICAgbGV0IHkgPSBwYXJzZUludChub2RlLmdldEF0dHJpYnV0ZSgneScsIDEwKSk7XG4gICAgbGV0IHdpZHRoID0gcGFyc2VJbnQobm9kZS5nZXRBdHRyaWJ1dGUoJ3dpZHRoJyksIDEwKTtcbiAgICBsZXQgaGVpZ2h0ID0gcGFyc2VJbnQobm9kZS5nZXRBdHRyaWJ1dGUoJ2hlaWdodCcpLCAxMCk7XG4gICAgbGV0IHBhdGggPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJ3BhdGgnKTtcbiAgICBsZXQgc3ZnID0gcGF0aC5wYXJlbnROb2RlO1xuXG4gICAgLy8gU2NhbGUgd2lkdGgvaGVpZ2h0XG4gICAgW25vZGUsIHN2ZywgcGF0aCwgbm9kZS5xdWVyeVNlbGVjdG9yKCdyZWN0JyldLmZvckVhY2goKG4pID0+IHtcbiAgICAgIG4uc2V0QXR0cmlidXRlKCd3aWR0aCcsIHBhcnNlSW50KG4uZ2V0QXR0cmlidXRlKCd3aWR0aCcpLCAxMCkgKiB2aWV3cG9ydC5zY2FsZSk7XG4gICAgICBuLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgcGFyc2VJbnQobi5nZXRBdHRyaWJ1dGUoJ2hlaWdodCcpLCAxMCkgKiB2aWV3cG9ydC5zY2FsZSk7XG4gICAgfSk7XG5cbiAgICAvLyBUcmFuc2Zvcm0gcGF0aCBidXQga2VlcCBzY2FsZSBhdCAxMDAlIHNpbmNlIGl0IHdpbGwgYmUgaGFuZGxlZCBuYXRpdmVseVxuICAgIHRyYW5zZm9ybShwYXRoLCBPYmplY3QuYXNzaWduKHt9LCB2aWV3cG9ydCwgeyBzY2FsZTogMSB9KSk7XG5cbiAgICBzd2l0Y2ggKHZpZXdwb3J0LnJvdGF0aW9uICUgMzYwKSB7XG4gICAgICBjYXNlIDkwOlxuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZSgneCcsIHZpZXdwb3J0LndpZHRoIC0geSAtIHdpZHRoKTtcbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoJ3knLCB4KTtcbiAgICAgICAgc3ZnLnNldEF0dHJpYnV0ZSgneCcsIDEpO1xuICAgICAgICBzdmcuc2V0QXR0cmlidXRlKCd5JywgMCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxODA6XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKCd4Jywgdmlld3BvcnQud2lkdGggLSB4IC0gd2lkdGgpO1xuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZSgneScsIHZpZXdwb3J0LmhlaWdodCAtIHkgLSBoZWlnaHQpO1xuICAgICAgICBzdmcuc2V0QXR0cmlidXRlKCd5JywgMik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyNzA6XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKCd4JywgeSk7XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKCd5Jywgdmlld3BvcnQuaGVpZ2h0IC0geCAtIGhlaWdodCk7XG4gICAgICAgIHN2Zy5zZXRBdHRyaWJ1dGUoJ3gnLCAtMSk7XG4gICAgICAgIHN2Zy5zZXRBdHRyaWJ1dGUoJ3knLCAwKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5vZGU7XG59XG5cbi8qKlxuICogQXBwZW5kIGFuIGFubm90YXRpb24gYXMgYSBjaGlsZCBvZiBhbiBTVkcuXG4gKlxuICogQHBhcmFtIHtTVkdFbGVtZW50fSBzdmcgVGhlIFNWRyBlbGVtZW50IHRvIGFwcGVuZCB0aGUgYW5ub3RhdGlvbiB0b1xuICogQHBhcmFtIHtPYmplY3R9IGFubm90YXRpb24gVGhlIGFubm90YXRpb24gZGVmaW5pdGlvbiB0byByZW5kZXIgYW5kIGFwcGVuZFxuICogQHBhcmFtIHtPYmplY3R9IHZpZXdwb3J0IFRoZSBwYWdlJ3Mgdmlld3BvcnQgZGF0YVxuICogQHJldHVybiB7U1ZHRWxlbWVudH0gQSBub2RlIHRoYXQgd2FzIGNyZWF0ZWQgYW5kIGFwcGVuZGVkIGJ5IHRoaXMgZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZENoaWxkKHN2ZywgYW5ub3RhdGlvbiwgdmlld3BvcnQpIHtcbiAgaWYgKCF2aWV3cG9ydCkge1xuICAgIHZpZXdwb3J0ID0gSlNPTi5wYXJzZShzdmcuZ2V0QXR0cmlidXRlKCdkYXRhLXBkZi1hbm5vdGF0ZS12aWV3cG9ydCcpKTtcbiAgfVxuXG4gIGxldCBjaGlsZDtcbiAgc3dpdGNoIChhbm5vdGF0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdhcmVhJzpcbiAgICBjYXNlICdoaWdobGlnaHQnOlxuICAgICAgY2hpbGQgPSByZW5kZXJSZWN0KGFubm90YXRpb24pO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnY2lyY2xlJzpcbiAgICBjYXNlICdmaWxsY2lyY2xlJzpcbiAgICBjYXNlICdlbXB0eWNpcmNsZSc6XG4gICAgICBjaGlsZCA9IHJlbmRlckNpcmNsZShhbm5vdGF0aW9uKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3N0cmlrZW91dCc6XG4gICAgICBjaGlsZCA9IHJlbmRlckxpbmUoYW5ub3RhdGlvbik7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdwb2ludCc6XG4gICAgICBjaGlsZCA9IHJlbmRlclBvaW50KGFubm90YXRpb24pO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAndGV4dGJveCc6XG4gICAgICBjaGlsZCA9IHJlbmRlclRleHQoYW5ub3RhdGlvbik7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdkcmF3aW5nJzpcbiAgICAgIGNoaWxkID0gcmVuZGVyUGF0aChhbm5vdGF0aW9uKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2Fycm93JzpcbiAgICAgIGNoaWxkID0gcmVuZGVyQXJyb3coYW5ub3RhdGlvbik7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIC8vIElmIG5vIHR5cGUgd2FzIHByb3ZpZGVkIGZvciBhbiBhbm5vdGF0aW9uIGl0IHdpbGwgcmVzdWx0IGluIG5vZGUgYmVpbmcgbnVsbC5cbiAgLy8gU2tpcCBhcHBlbmRpbmcvdHJhbnNmb3JtaW5nIGlmIG5vZGUgZG9lc24ndCBleGlzdC5cbiAgaWYgKGNoaWxkKSB7XG4gICAgLy8gU2V0IGF0dHJpYnV0ZXNcbiAgICBjaGlsZC5zZXRBdHRyaWJ1dGUoJ2RhdGEtcGRmLWFubm90YXRlLWlkJywgYW5ub3RhdGlvbi51dWlkKTtcbiAgICBjaGlsZC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgdHJ1ZSk7XG5cbiAgICAvLyBEeW5hbWljYWxseSBzZXQgYW55IG90aGVyIGF0dHJpYnV0ZXMgYXNzb2NpYXRlZCB3aXRoIGFubm90YXRpb24gdGhhdCBpcyBub3QgcmVsYXRlZCB0byBkcmF3aW5nIGl0XG4gICAgT2JqZWN0LmtleXMoYW5ub3RhdGlvbikuZmlsdGVyKChrZXkpID0+IHtcbiAgICAgIHJldHVybiBbJ2NvbG9yJywgJ3gnLCAneScsICdjeCcsICdjeScsICdjb2xvcicsICdkb2N1bWVudElkJywgJ2xpbmVzJywgJ3BhZ2UnLFxuICAgICAgICAnd2lkdGgnLCAnY2xhc3MnLCAnY29udGVudCcsICdzaXplJywgJ3JvdGF0aW9uJywgJ3InXS5pbmRleE9mKGtleSkgPT09IC0xO1xuICAgIH0pLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY2hpbGQuc2V0QXR0cmlidXRlKGBkYXRhLXBkZi1hbm5vdGF0ZS0ke2tleX1gLCBhbm5vdGF0aW9uW2tleV0pO1xuICAgIH0pO1xuXG4gICAgc3ZnLmFwcGVuZENoaWxkKHRyYW5zZm9ybShjaGlsZCwgdmlld3BvcnQpKTtcbiAgfVxuXG4gIHJldHVybiBjaGlsZDtcbn1cblxuLyoqXG4gKiBUcmFuc2Zvcm0gYSBjaGlsZCBhbm5vdGF0aW9uIG9mIGFuIFNWRy5cbiAqXG4gKiBAcGFyYW0ge1NWR0VsZW1lbnR9IHN2ZyBUaGUgU1ZHIGVsZW1lbnQgd2l0aCB0aGUgY2hpbGQgYW5ub3RhdGlvblxuICogQHBhcmFtIHtPYmplY3R9IGNoaWxkIFRoZSBTVkcgY2hpbGQgdG8gdHJhbnNmb3JtXG4gKiBAcGFyYW0ge09iamVjdH0gdmlld3BvcnQgVGhlIHBhZ2UncyB2aWV3cG9ydCBkYXRhXG4gKiBAcmV0dXJuIHtTVkdFbGVtZW50fSBBIG5vZGUgdGhhdCB3YXMgdHJhbnNmb3JtZWQgYnkgdGhpcyBmdW5jdGlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtQ2hpbGQoc3ZnLCBjaGlsZCwgdmlld3BvcnQpIHtcbiAgaWYgKCF2aWV3cG9ydCkge1xuICAgIHZpZXdwb3J0ID0gSlNPTi5wYXJzZShzdmcuZ2V0QXR0cmlidXRlKCdkYXRhLXBkZi1hbm5vdGF0ZS12aWV3cG9ydCcpKTtcbiAgfVxuXG4gIC8vIElmIG5vIHR5cGUgd2FzIHByb3ZpZGVkIGZvciBhbiBhbm5vdGF0aW9uIGl0IHdpbGwgcmVzdWx0IGluIG5vZGUgYmVpbmcgbnVsbC5cbiAgLy8gU2tpcCB0cmFuc2Zvcm1pbmcgaWYgbm9kZSBkb2Vzbid0IGV4aXN0LlxuICBpZiAoY2hpbGQpIHtcbiAgICBjaGlsZCA9IHRyYW5zZm9ybShjaGlsZCwgdmlld3BvcnQpO1xuICB9XG5cbiAgcmV0dXJuIGNoaWxkO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIC8qKlxuICAgKiBHZXQgdGhlIHgveSB0cmFuc2xhdGlvbiB0byBiZSB1c2VkIGZvciB0cmFuc2Zvcm1pbmcgdGhlIGFubm90YXRpb25zXG4gICAqIGJhc2VkIG9uIHRoZSByb3RhdGlvbiBvZiB0aGUgdmlld3BvcnQuXG4gICAqL1xuICBnZXRUcmFuc2xhdGlvbixcblxuICAvKipcbiAgICogQXBwZW5kIGFuIFNWRyBjaGlsZCBmb3IgYW4gYW5ub3RhdGlvblxuICAgKi9cbiAgYXBwZW5kQ2hpbGQsXG5cbiAgLyoqXG4gICAqIFRyYW5zZm9ybSBhbiBleGlzdGluZyBTVkcgY2hpbGRcbiAgICovXG4gIHRyYW5zZm9ybUNoaWxkXG59O1xuIiwiaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSAnLi4vdXRpbHMvc2V0QXR0cmlidXRlcyc7XG5pbXBvcnQgbm9ybWFsaXplQ29sb3IgZnJvbSAnLi4vdXRpbHMvbm9ybWFsaXplQ29sb3InO1xuXG4vKipcbiAqIENyZWF0ZSBTVkdMaW5lRWxlbWVudHMgZnJvbSBhbiBhbm5vdGF0aW9uIGRlZmluaXRpb24uXG4gKiBUaGlzIGlzIHVzZWQgZm9yIGFubnRhdGlvbnMgb2YgdHlwZSBgc3RyaWtlb3V0YC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYSBUaGUgYW5ub3RhdGlvbiBkZWZpbml0aW9uXG4gKiBAcmV0dXJuIHtTVkdHRWxlbWVudH0gQSBncm91cCBvZiBhbGwgbGluZXMgdG8gYmUgcmVuZGVyZWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyTGluZShhKSB7XG4gIGxldCBncm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnZycpO1xuICBzZXRBdHRyaWJ1dGVzKGdyb3VwLCB7XG4gICAgc3Ryb2tlOiBub3JtYWxpemVDb2xvcihhLmNvbG9yIHx8ICcjZjAwJyksXG4gICAgc3Ryb2tlV2lkdGg6IDFcbiAgfSk7XG5cbiAgYS5yZWN0YW5nbGVzLmZvckVhY2goKHIpID0+IHtcbiAgICBsZXQgbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnbGluZScpO1xuXG4gICAgc2V0QXR0cmlidXRlcyhsaW5lLCB7XG4gICAgICB4MTogci54LFxuICAgICAgeTE6IHIueSxcbiAgICAgIHgyOiByLnggKyByLndpZHRoLFxuICAgICAgeTI6IHIueVxuICAgIH0pO1xuXG4gICAgZ3JvdXAuYXBwZW5kQ2hpbGQobGluZSk7XG4gIH0pO1xuXG4gIHJldHVybiBncm91cDtcbn1cbiIsImNvbnN0IFVQUEVSX1JFR0VYID0gL1tBLVpdL2c7XG5cbi8vIERvbid0IGNvbnZlcnQgdGhlc2UgYXR0cmlidXRlcyBmcm9tIGNhbWVsQ2FzZSB0byBoeXBoZW5hdGVkLWF0dHJpYnV0ZXNcbmNvbnN0IEJMQUNLTElTVCA9IFtcbiAgJ3ZpZXdCb3gnXG5dO1xuXG5sZXQga2V5Q2FzZSA9IChrZXkpID0+IHtcbiAgaWYgKEJMQUNLTElTVC5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAga2V5ID0ga2V5LnJlcGxhY2UoVVBQRVJfUkVHRVgsIG1hdGNoID0+ICctJyArIG1hdGNoLnRvTG93ZXJDYXNlKCkpO1xuICB9XG4gIHJldHVybiBrZXk7XG59O1xuXG4vKipcbiAqIFNldCBhdHRyaWJ1dGVzIGZvciBhIG5vZGUgZnJvbSBhIG1hcFxuICpcbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZSBUaGUgbm9kZSB0byBzZXQgYXR0cmlidXRlcyBvblxuICogQHBhcmFtIHtPYmplY3R9IGF0dHJpYnV0ZXMgVGhlIG1hcCBvZiBrZXkvdmFsdWUgcGFpcnMgdG8gdXNlIGZvciBhdHRyaWJ1dGVzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldEF0dHJpYnV0ZXMobm9kZSwgYXR0cmlidXRlcykge1xuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBub2RlLnNldEF0dHJpYnV0ZShrZXlDYXNlKGtleSksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xufVxuIiwiY29uc3QgUkVHRVhfSEFTSExFU1NfSEVYID0gL14oW2EtZjAtOV17Nn18W2EtZjAtOV17M30pJC9pO1xuXG4vKipcbiAqIE5vcm1hbGl6ZSBhIGNvbG9yIHZhbHVlXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGNvbG9yIFRoZSBjb2xvciB0byBub3JtYWxpemVcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm9ybWFsaXplQ29sb3IoY29sb3IpIHtcbiAgaWYgKFJFR0VYX0hBU0hMRVNTX0hFWC50ZXN0KGNvbG9yKSkge1xuICAgIGNvbG9yID0gYCMke2NvbG9yfWA7XG4gIH1cbiAgcmV0dXJuIGNvbG9yO1xufVxuIiwiaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSAnLi4vdXRpbHMvc2V0QXR0cmlidXRlcyc7XG5pbXBvcnQgbm9ybWFsaXplQ29sb3IgZnJvbSAnLi4vdXRpbHMvbm9ybWFsaXplQ29sb3InO1xuXG4vKipcbiAqIENyZWF0ZSBTVkdQYXRoRWxlbWVudCBmcm9tIGFuIGFubm90YXRpb24gZGVmaW5pdGlvbi5cbiAqIFRoaXMgaXMgdXNlZCBmb3IgYW5udGF0aW9ucyBvZiB0eXBlIGBkcmF3aW5nYC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYSBUaGUgYW5ub3RhdGlvbiBkZWZpbml0aW9uXG4gKiBAcmV0dXJuIHtTVkdQYXRoRWxlbWVudH0gVGhlIHBhdGggdG8gYmUgcmVuZGVyZWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyUGF0aChhKSB7XG4gIGxldCBkID0gW107XG4gIGxldCBwYXRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdwYXRoJyk7XG5cbiAgaWYgKGEubGluZXMubGVuZ3RoID4gMCkge1xuICAgIGQucHVzaChgTSR7YS5saW5lc1swXVswXX0gJHthLmxpbmVzWzBdWzFdfWApO1xuICAgIGZvciAobGV0IGkgPSAxLCBsID0gYS5saW5lcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBwMSA9IGEubGluZXNbaV07XG4gICAgICBsZXQgcDIgPSBhLmxpbmVzW2kgKyAxXTtcbiAgICAgIGlmIChwMikge1xuICAgICAgICBkLnB1c2goYEwke3AxWzBdfSAke3AxWzFdfWApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qXG5cbiAgIGlmKGEubGluZXMubGVuZ3RoPjIpIHtcbiAgICB2YXIgcDEgPSBhLmxpbmVzWzBdO1xuICAgIHZhciBwMiA9IGEubGluZXNbYS5saW5lcy5sZW5ndGgtMV07XG5cbiAgICB2YXIgcDMgPSBbXTsgLy9hcnJvd1xuICAgIHZhciBwNCA9IFtdO1xuICAgIHZhciBwMCA9IFtdOyAvL2Fycm93IGludGVyc2VjdGlvblxuXG4gICAgaWYgKHAyKSB7XG4gICAgICB2YXIgayA9IC0ocDJbMF0tcDFbMF0pLyhwMlsxXS1wMVsxXSk7XG5cbiAgICAgIHZhciBkZWx0YVggPSAzO1xuICAgICAgcDBbMF0gPSBwMVswXSswLjgqKHAyWzBdLXAxWzBdKTtcbiAgICAgIHAwWzFdID0gcDFbMV0rMC44KihwMlsxXS1wMVsxXSk7XG5cbiAgICAgIHAzWzBdID0gcDBbMF0gKyBkZWx0YVg7XG4gICAgICBwM1sxXSA9IHAwWzFdICsgaypkZWx0YVg7XG5cbiAgICAgIHA0WzBdID0gcDBbMF0gLSBkZWx0YVg7XG4gICAgICBwNFsxXSA9IHAwWzFdIC0gaypkZWx0YVg7XG5cbiAgICAgIGlmKE1hdGguYWJzKHAyWzFdLXAxWzFdKSA8IDIwKSB7XG5cbiAgICAgICAgcDNbMF0gPSBwMFswXSA7XG4gICAgICAgIHAzWzFdID0gcDBbMV0gKyBkZWx0YVgqMTtcblxuICAgICAgICBwNFswXSA9IHAwWzBdIDtcbiAgICAgICAgcDRbMV0gPSBwMFsxXSAtIGRlbHRhWCoxO1xuXG4gICAgICB9XG5cbiAgICAgIGQucHVzaChgTSR7cDFbMF19ICR7cDFbMV19ICR7cDJbMF19ICR7cDJbMV19YCk7XG4gICAgICAgLy9kLnB1c2goYE0ke3AxWzBdfSAke3AxWzFdfSAke3AyWzBdfSAke3AyWzFdfWApO1xuICAgICAgZC5wdXNoKGBNJHtwMlswXX0gJHtwMlsxXX0gJHtwM1swXX0gJHtwM1sxXX1gKTtcbiAgICAgIGQucHVzaChgTSR7cDNbMF19ICR7cDNbMV19ICR7cDRbMF19ICR7cDRbMV19YCk7XG4gICAgICBkLnB1c2goYE0ke3A0WzBdfSAke3A0WzFdfSAke3AyWzBdfSAke3AyWzFdfWApO1xuICAgICB9XG4gICAgfSAqL1xuXG4gIHNldEF0dHJpYnV0ZXMocGF0aCwge1xuICAgIGQ6IGAke2Quam9pbignICcpfWAsIC8vIGAke2Quam9pbignICcpfVpgLFxuICAgIHN0cm9rZTogbm9ybWFsaXplQ29sb3IoYS5jb2xvciB8fCAnIzAwMCcpLFxuICAgIHN0cm9rZVdpZHRoOiBhLndpZHRoIHx8IDEsXG4gICAgZmlsbDogJ25vbmUnXG4gIH0pO1xuXG4gIHJldHVybiBwYXRoO1xufVxuIiwiaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSAnLi4vdXRpbHMvc2V0QXR0cmlidXRlcyc7XG5cbmNvbnN0IFNJWkUgPSAyNTtcbmNvbnN0IEQgPSAnTTQ5OS45NjggMjE0LjMzNnEtMTEzLjgzMiAwIC0yMTIuODc3IDM4Ljc4MXQtMTU3LjM1NiAxMDQuNjI1IC01OC4zMTEgMTQyLjI5cTAgNjIuNDk2IDM5Ljg5NyAxMTkuMTMzdDExMi40MzcgOTcuOTI5bDQ4LjU0NiAyNy45IC0xNS4wNjYgNTMuNTY4cS0xMy4zOTIgNTAuNzc4IC0zOS4wNiA5NS45NzYgODQuODE2IC0zNS4xNTQgMTUzLjQ1IC05NS40MThsMjMuOTk0IC0yMS4yMDQgMzEuODA2IDMuMzQ4cTM4LjUwMiA0LjQ2NCA3Mi41NCA0LjQ2NCAxMTMuODMyIDAgMjEyLjg3NyAtMzguNzgxdDE1Ny4zNTYgLTEwNC42MjUgNTguMzExIC0xNDIuMjkgLTU4LjMxMSAtMTQyLjI5IC0xNTcuMzU2IC0xMDQuNjI1IC0yMTIuODc3IC0zOC43ODF6JztcblxuLyoqXG4gKiBDcmVhdGUgU1ZHRWxlbWVudCBmcm9tIGFuIGFubm90YXRpb24gZGVmaW5pdGlvbi5cbiAqIFRoaXMgaXMgdXNlZCBmb3IgYW5udGF0aW9ucyBvZiB0eXBlIGBjb21tZW50YC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYSBUaGUgYW5ub3RhdGlvbiBkZWZpbml0aW9uXG4gKiBAcmV0dXJuIHtTVkdFbGVtZW50fSBBIHN2ZyB0byBiZSByZW5kZXJlZFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJQb2ludChhKSB7XG4gIGxldCBvdXRlclNWRyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJyk7XG4gIGxldCBpbm5lclNWRyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJyk7XG4gIGxldCByZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdyZWN0Jyk7XG4gIGxldCBwYXRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdwYXRoJyk7XG5cbiAgc2V0QXR0cmlidXRlcyhvdXRlclNWRywge1xuICAgIHdpZHRoOiBTSVpFLFxuICAgIGhlaWdodDogU0laRSxcbiAgICB4OiBhLngsXG4gICAgeTogYS55XG4gIH0pO1xuXG4gIHNldEF0dHJpYnV0ZXMoaW5uZXJTVkcsIHtcbiAgICB3aWR0aDogU0laRSxcbiAgICBoZWlnaHQ6IFNJWkUsXG4gICAgeDogMCxcbiAgICB5OiAoU0laRSAqIDAuMDUpICogLTEsXG4gICAgdmlld0JveDogJzAgMCAxMDAwIDEwMDAnXG4gIH0pO1xuXG4gIHNldEF0dHJpYnV0ZXMocmVjdCwge1xuICAgIHdpZHRoOiBTSVpFLFxuICAgIGhlaWdodDogU0laRSxcbiAgICBzdHJva2U6ICcjMDAwJyxcbiAgICBmaWxsOiAnI2ZmMCdcbiAgfSk7XG5cbiAgc2V0QXR0cmlidXRlcyhwYXRoLCB7XG4gICAgZDogRCxcbiAgICBzdHJva2VXaWR0aDogNTAsXG4gICAgc3Ryb2tlOiAnIzAwMCcsXG4gICAgZmlsbDogJyNmZmYnXG4gIH0pO1xuXG4gIGlubmVyU1ZHLmFwcGVuZENoaWxkKHBhdGgpO1xuICBvdXRlclNWRy5hcHBlbmRDaGlsZChyZWN0KTtcbiAgb3V0ZXJTVkcuYXBwZW5kQ2hpbGQoaW5uZXJTVkcpO1xuXG4gIHJldHVybiBvdXRlclNWRztcbn1cbiIsImltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gJy4uL3V0aWxzL3NldEF0dHJpYnV0ZXMnO1xuaW1wb3J0IG5vcm1hbGl6ZUNvbG9yIGZyb20gJy4uL3V0aWxzL25vcm1hbGl6ZUNvbG9yJztcblxuLyoqXG4gKiBDcmVhdGUgU1ZHUmVjdEVsZW1lbnRzIGZyb20gYW4gYW5ub3RhdGlvbiBkZWZpbml0aW9uLlxuICogVGhpcyBpcyB1c2VkIGZvciBhbm50YXRpb25zIG9mIHR5cGUgYGFyZWFgIGFuZCBgaGlnaGxpZ2h0YC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYSBUaGUgYW5ub3RhdGlvbiBkZWZpbml0aW9uXG4gKiBAcmV0dXJuIHtTVkdHRWxlbWVudHxTVkdSZWN0RWxlbWVudH0gQSBncm91cCBvZiBhbGwgcmVjdHMgdG8gYmUgcmVuZGVyZWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyUmVjdChhKSB7XG4gIGlmIChhLnR5cGUgPT09ICdoaWdobGlnaHQnKSB7XG4gICAgbGV0IGdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdnJyk7XG4gICAgc2V0QXR0cmlidXRlcyhncm91cCwge1xuICAgICAgZmlsbDogbm9ybWFsaXplQ29sb3IoYS5jb2xvciB8fCAnI2ZmMCcpLFxuICAgICAgZmlsbE9wYWNpdHk6IDAuMlxuICAgIH0pO1xuXG4gICAgYS5yZWN0YW5nbGVzLmZvckVhY2goKHIpID0+IHtcbiAgICAgIGdyb3VwLmFwcGVuZENoaWxkKGNyZWF0ZVJlY3QocikpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGdyb3VwO1xuICB9XG4gIGVsc2Uge1xuICAgIGxldCByZWN0ID0gY3JlYXRlUmVjdChhKTtcbiAgICBzZXRBdHRyaWJ1dGVzKHJlY3QsIHtcbiAgICAgIHN0cm9rZTogbm9ybWFsaXplQ29sb3IoYS5jb2xvciB8fCAnI2YwMCcpLFxuICAgICAgZmlsbDogJ25vbmUnXG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVjdDtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVSZWN0KHIpIHtcbiAgbGV0IHJlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3JlY3QnKTtcblxuICBzZXRBdHRyaWJ1dGVzKHJlY3QsIHtcbiAgICB4OiByLngsXG4gICAgeTogci55LFxuICAgIHdpZHRoOiByLndpZHRoLFxuICAgIGhlaWdodDogci5oZWlnaHRcbiAgfSk7XG5cbiAgcmV0dXJuIHJlY3Q7XG59XG4iLCJpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tICcuLi91dGlscy9zZXRBdHRyaWJ1dGVzJztcbmltcG9ydCBub3JtYWxpemVDb2xvciBmcm9tICcuLi91dGlscy9ub3JtYWxpemVDb2xvcic7XG5cbi8qKlxuICogQ3JlYXRlIFNWR1RleHRFbGVtZW50IGZyb20gYW4gYW5ub3RhdGlvbiBkZWZpbml0aW9uLlxuICogVGhpcyBpcyB1c2VkIGZvciBhbm50YXRpb25zIG9mIHR5cGUgYHRleHRib3hgLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBhIFRoZSBhbm5vdGF0aW9uIGRlZmluaXRpb25cbiAqIEByZXR1cm4ge1NWR1RleHRFbGVtZW50fSBBIHRleHQgdG8gYmUgcmVuZGVyZWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyVGV4dChhKSB7XG4gIC8vIFRleHQgc2hvdWxkIGJlIHJlbmRlcmVkIGF0IDAgZGVncmVlcyByZWxhdGl2ZSB0b1xuICAvLyBkb2N1bWVudCByb3RhdGlvblxuICBsZXQgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAndGV4dCcpO1xuICBzZXRBdHRyaWJ1dGVzKHRleHQsIHtcbiAgICB4OiBhLngsXG4gICAgeTogYS55LFxuICAgIGZpbGw6IG5vcm1hbGl6ZUNvbG9yKGEuY29sb3IgfHwgJyMwMDAnKSxcbiAgICBmb250U2l6ZTogYS5zaXplLFxuICAgIHRyYW5zZm9ybTogYHJvdGF0ZSgke2Eucm90YXRpb259KWAsXG4gICAgc3R5bGU6ICd3aGl0ZS1zcGFjZTogcHJlJ1xuICB9KTtcbiAgdGV4dC5pbm5lckhUTUwgPSBhLmNvbnRlbnQ7XG5cbiAgbGV0IGcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ2cnKTtcbiAgZy5hcHBlbmRDaGlsZCh0ZXh0KTtcblxuICByZXR1cm4gZztcbn1cbiIsImltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gJy4uL3V0aWxzL3NldEF0dHJpYnV0ZXMnO1xuaW1wb3J0IG5vcm1hbGl6ZUNvbG9yIGZyb20gJy4uL3V0aWxzL25vcm1hbGl6ZUNvbG9yJztcblxuLyoqXG4gKiBDcmVhdGUgYW4gU1ZHQ2lyY2xlRWxlbWVudCBmcm9tIGFuIGFubm90YXRpb24gZGVmaW5pdGlvbi5cbiAqIFRoaXMgaXMgdXNlZCBmb3IgYW5ub3RhdGlvbnMgb2YgdHlwZSBgY2lyY2xlYC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYSBUaGUgYW5ub3RhdGlvbiBkZWZpbml0aW9uXG4gKiBAcmV0dXJuIHtTVkdHRWxlbWVudHxTVkdDaXJjbGVFbGVtZW50fSBBIGNpcmNsZSB0byBiZSByZW5kZXJlZFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJDaXJjbGUoYSkge1xuICBsZXQgY2lyY2xlID0gY3JlYXRlQ2lyY2xlKGEpO1xuICBsZXQgY29sb3IgPSBub3JtYWxpemVDb2xvcihhLmNvbG9yIHx8ICcjZjAwJyk7XG5cbiAgaWYgKGEudHlwZSA9PT0gJ2NpcmNsZScpIHtcbiAgICBzZXRBdHRyaWJ1dGVzKGNpcmNsZSwge1xuICAgICAgc3Ryb2tlOiBjb2xvcixcbiAgICAgIGZpbGw6ICdub25lJyxcbiAgICAgICdzdHJva2Utd2lkdGgnOiA1XG4gICAgfSk7XG4gIH1cbiAgaWYgKGEudHlwZSA9PT0gJ2VtcHR5Y2lyY2xlJykge1xuICAgIHNldEF0dHJpYnV0ZXMoY2lyY2xlLCB7XG4gICAgICBzdHJva2U6IGNvbG9yLFxuICAgICAgZmlsbDogJ25vbmUnLFxuICAgICAgJ3N0cm9rZS13aWR0aCc6IDJcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChhLnR5cGUgPT09ICdmaWxsY2lyY2xlJykge1xuICAgIHNldEF0dHJpYnV0ZXMoY2lyY2xlLCB7XG4gICAgICBzdHJva2U6IGNvbG9yLFxuICAgICAgZmlsbDogY29sb3IsXG4gICAgICAnc3Ryb2tlLXdpZHRoJzogNVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGNpcmNsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ2lyY2xlKGEpIHtcbiAgbGV0IGNpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnY2lyY2xlJyk7XG4gIHNldEF0dHJpYnV0ZXMoY2lyY2xlLCB7XG4gICAgY3g6IGEuY3gsXG4gICAgY3k6IGEuY3ksXG4gICAgcjogYS5yXG4gIH0pO1xuXG4gIHJldHVybiBjaXJjbGU7XG59XG4iLCJpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tICcuLi91dGlscy9zZXRBdHRyaWJ1dGVzJztcbmltcG9ydCBub3JtYWxpemVDb2xvciBmcm9tICcuLi91dGlscy9ub3JtYWxpemVDb2xvcic7XG5pbXBvcnQge1xuICBtYWtlUG9pbnQsIG1ha2VWZWN0b3IsIG1ha2VWZWN0b3JGcm9tUG9pbnRzLFxuICBtYWduaXR1ZGUsIHVuaXRWZWN0b3IsIGNyb3NzUHJvZHVjdCxcbiAgYWRkVmVjdG9yLCBtdWx0aXBseVZlY3RvciwgbmVnYXRlVmVjdG9yXG59IGZyb20gJy4uL3V0aWxzL21hdGhVdGlscyc7XG5cbi8qKlxuICogQ3JlYXRlIFNWR1BhdGhFbGVtZW50IGZyb20gYW4gYW5ub3RhdGlvbiBkZWZpbml0aW9uLlxuICogVGhpcyBpcyB1c2VkIGZvciBhbm50YXRpb25zIG9mIHR5cGUgYGRyYXdpbmdgLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBhIFRoZSBhbm5vdGF0aW9uIGRlZmluaXRpb25cbiAqIEByZXR1cm4ge1NWR1BhdGhFbGVtZW50fSBUaGUgcGF0aCB0byBiZSByZW5kZXJlZFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJBcnJvdyhhKSB7XG4gIGxldCBhcnJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAncG9seWdvbicpO1xuXG4gIGlmIChhLmxpbmVzLmxlbmd0aCA9PT0gMikge1xuICAgIGxldCBwMSA9IGEubGluZXNbMF07XG4gICAgbGV0IHAyID0gYS5saW5lc1thLmxpbmVzLmxlbmd0aCAtIDFdO1xuXG4gICAgbGV0IGFycm93TGVuZ3RoID0gNDA7XG4gICAgbGV0IHB0MCA9IG1ha2VQb2ludChwMVswXSwgcDFbMV0sIDApO1xuICAgIGxldCBwdDEgPSBtYWtlUG9pbnQocDJbMF0sIHAyWzFdLCAwKTtcbiAgICBsZXQgeCA9IG1ha2VWZWN0b3JGcm9tUG9pbnRzKHB0MCwgcHQxKTtcbiAgICBsZXQgdW5pdFggPSB1bml0VmVjdG9yKHgpO1xuICAgIHB0MSA9IGFkZFZlY3RvcihwdDAsIG11bHRpcGx5VmVjdG9yKHVuaXRYLCBhcnJvd0xlbmd0aCkpO1xuICAgIHggPSBtYWtlVmVjdG9yRnJvbVBvaW50cyhwdDAsIHB0MSk7XG4gICAgbGV0IHVuaXRaID0gbWFrZVZlY3RvcigwLCAwLCAxKTtcbiAgICBsZXQgdW5pdFkgPSB1bml0VmVjdG9yKGNyb3NzUHJvZHVjdCh1bml0WCwgdW5pdFopKTtcbiAgICBsZXQgdGhpY2tuZXNzID0gYS53aWR0aCB8fCAxMDtcblxuICAgIGxldCBBID0gYWRkVmVjdG9yKHB0MCwgbXVsdGlwbHlWZWN0b3IodW5pdFksIHRoaWNrbmVzcyAqIDAuNSkpO1xuICAgIGxldCBCID0gYWRkVmVjdG9yKEEsIG11bHRpcGx5VmVjdG9yKHVuaXRYLCBtYWduaXR1ZGUoeCkgLSB0aGlja25lc3MgKiAyLjApKTtcbiAgICBsZXQgQyA9IGFkZFZlY3RvcihCLCBtdWx0aXBseVZlY3Rvcih1bml0WSwgdGhpY2tuZXNzKSk7XG4gICAgbGV0IEQgPSBwdDE7XG4gICAgbGV0IEcgPSBhZGRWZWN0b3IocHQwLCBtdWx0aXBseVZlY3RvcihuZWdhdGVWZWN0b3IodW5pdFkpLCB0aGlja25lc3MgKiAwLjUpKTtcbiAgICBsZXQgRiA9IGFkZFZlY3RvcihHLCBtdWx0aXBseVZlY3Rvcih1bml0WCwgbWFnbml0dWRlKHgpIC0gdGhpY2tuZXNzICogMi4wKSk7XG4gICAgbGV0IEUgPSBhZGRWZWN0b3IoRiwgbXVsdGlwbHlWZWN0b3IobmVnYXRlVmVjdG9yKHVuaXRZKSwgdGhpY2tuZXNzKSk7XG5cbiAgICBsZXQgcG9pbnRzID0gJycgK1xuICAgICAgQS54ICsgJywnICsgQS55ICsgJyAnICtcbiAgICAgIEIueCArICcsJyArIEIueSArICcgJyArXG4gICAgICBDLnggKyAnLCcgKyBDLnkgKyAnICcgK1xuICAgICAgRC54ICsgJywnICsgRC55ICsgJyAnICtcbiAgICAgIEUueCArICcsJyArIEUueSArICcgJyArXG4gICAgICBGLnggKyAnLCcgKyBGLnkgKyAnICcgK1xuICAgICAgRy54ICsgJywnICsgRy55O1xuXG4gICAgc2V0QXR0cmlidXRlcyhhcnJvdywge1xuICAgICAgcG9pbnRzOiBwb2ludHMsXG4gICAgICBzdHJva2U6IG5vcm1hbGl6ZUNvbG9yKGEuY29sb3IgfHwgJyMwMDAnKSxcbiAgICAgIGZpbGw6IG5vcm1hbGl6ZUNvbG9yKGEuY29sb3IgfHwgJyMwMDAnKVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGFycm93O1xufVxuIiwiLy8gVHJhbnNmb3JtIHBvaW50IGJ5IG1hdHJpeFxuLy9cbmV4cG9ydCBmdW5jdGlvbiBhcHBseVRyYW5zZm9ybShwLCBtKSB7XG4gIHJldHVybiBbXG4gICAgcFswXSAqIG1bMF0gKyBwWzFdICogbVsyXSArIG1bNF0sXG4gICAgcFswXSAqIG1bMV0gKyBwWzFdICogbVszXSArIG1bNV1cbiAgXTtcbn07XG5cbi8vIFRyYW5zZm9ybSBwb2ludCBieSBtYXRyaXggaW52ZXJzZVxuLy9cbmV4cG9ydCBmdW5jdGlvbiBhcHBseUludmVyc2VUcmFuc2Zvcm0ocCwgbSkge1xuICBsZXQgZCA9IG1bMF0gKiBtWzNdIC0gbVsxXSAqIG1bMl07XG4gIHJldHVybiBbXG4gICAgKHBbMF0gKiBtWzNdIC0gcFsxXSAqIG1bMl0gKyBtWzJdICogbVs1XSAtIG1bNF0gKiBtWzNdKSAvIGQsXG4gICAgKC1wWzBdICogbVsxXSArIHBbMV0gKiBtWzBdICsgbVs0XSAqIG1bMV0gLSBtWzVdICogbVswXSkgLyBkXG4gIF07XG59O1xuXG4vLyBDb25jYXRlbmF0ZXMgdHdvIHRyYW5zZm9ybWF0aW9uIG1hdHJpY2VzIHRvZ2V0aGVyIGFuZCByZXR1cm5zIHRoZSByZXN1bHQuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtKG0xLCBtMikge1xuICByZXR1cm4gW1xuICAgIG0xWzBdICogbTJbMF0gKyBtMVsyXSAqIG0yWzFdLFxuICAgIG0xWzFdICogbTJbMF0gKyBtMVszXSAqIG0yWzFdLFxuICAgIG0xWzBdICogbTJbMl0gKyBtMVsyXSAqIG0yWzNdLFxuICAgIG0xWzFdICogbTJbMl0gKyBtMVszXSAqIG0yWzNdLFxuICAgIG0xWzBdICogbTJbNF0gKyBtMVsyXSAqIG0yWzVdICsgbTFbNF0sXG4gICAgbTFbMV0gKiBtMls0XSArIG0xWzNdICogbTJbNV0gKyBtMVs1XVxuICBdO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zbGF0ZShtLCB4LCB5KSB7XG4gIHJldHVybiBbXG4gICAgbVswXSxcbiAgICBtWzFdLFxuICAgIG1bMl0sXG4gICAgbVszXSxcbiAgICBtWzBdICogeCArIG1bMl0gKiB5ICsgbVs0XSxcbiAgICBtWzFdICogeCArIG1bM10gKiB5ICsgbVs1XVxuICBdO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZShtLCBhbmdsZSkge1xuICBhbmdsZSA9IGFuZ2xlICogTWF0aC5QSSAvIDE4MDtcblxuICBsZXQgY29zVmFsdWUgPSBNYXRoLmNvcyhhbmdsZSk7XG4gIGxldCBzaW5WYWx1ZSA9IE1hdGguc2luKGFuZ2xlKTtcblxuICByZXR1cm4gW1xuICAgIG1bMF0gKiBjb3NWYWx1ZSArIG1bMl0gKiBzaW5WYWx1ZSxcbiAgICBtWzFdICogY29zVmFsdWUgKyBtWzNdICogc2luVmFsdWUsXG4gICAgbVswXSAqICgtc2luVmFsdWUpICsgbVsyXSAqIGNvc1ZhbHVlLFxuICAgIG1bMV0gKiAoLXNpblZhbHVlKSArIG1bM10gKiBjb3NWYWx1ZSxcbiAgICBtWzRdLFxuICAgIG1bNV1cbiAgXTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBzY2FsZShtLCB4LCB5KSB7XG4gIHJldHVybiBbXG4gICAgbVswXSAqIHgsXG4gICAgbVsxXSAqIHgsXG4gICAgbVsyXSAqIHksXG4gICAgbVszXSAqIHksXG4gICAgbVs0XSxcbiAgICBtWzVdXG4gIF07XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZVBvaW50KHgsIHksIHopIHtcbiAgcmV0dXJuIHsgeDogeCwgeTogeSwgejogeiB9O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VWZWN0b3IoeGNvb3JkLCB5Y29vcmQsIHpjb29yZCkge1xuICByZXR1cm4geyB4Y29vcmQ6IHhjb29yZCwgeWNvb3JkOiB5Y29vcmQsIHpjb29yZDogemNvb3JkIH07XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZVZlY3RvckZyb21Qb2ludHMocHQxLCBwdDIpIHtcbiAgbGV0IHhjb29yZCA9IHB0Mi54IC0gcHQxLng7XG4gIGxldCB5Y29vcmQgPSBwdDIueSAtIHB0MS55O1xuICBsZXQgemNvb3JkID0gcHQyLnogLSBwdDEuejtcbiAgcmV0dXJuIG1ha2VWZWN0b3IoeGNvb3JkLCB5Y29vcmQsIHpjb29yZCk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkVmVjdG9yKHB0LCB2KSB7XG4gIHJldHVybiBtYWtlUG9pbnQocHQueCArIHYueGNvb3JkLCBwdC55ICsgdi55Y29vcmQsIHB0LnogKyB2Lnpjb29yZCk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbHlWZWN0b3Iodiwgc2NhbGFyKSB7XG4gIHJldHVybiBtYWtlVmVjdG9yKHYueGNvb3JkICogc2NhbGFyLCB2Lnljb29yZCAqIHNjYWxhciwgdi56Y29vcmQgKiBzY2FsYXIpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIG1hZ25pdHVkZSh2KSB7XG4gIHJldHVybiBNYXRoLnNxcnQoXG4gICAgTWF0aC5wb3codi54Y29vcmQsIDIpICsgTWF0aC5wb3codi55Y29vcmQsIDIpICsgTWF0aC5wb3codi56Y29vcmQsIDIpXG4gICk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gbmVnYXRlVmVjdG9yKHYpIHtcbiAgcmV0dXJuIG11bHRpcGx5VmVjdG9yKHYsIC0xKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiB1bml0VmVjdG9yKHYpIHtcbiAgbGV0IG1hZyA9IG1hZ25pdHVkZSh2KTtcbiAgbGV0IHhjb29yZCA9IHYueGNvb3JkIC8gbWFnO1xuICBsZXQgeWNvb3JkID0gdi55Y29vcmQgLyBtYWc7XG4gIGxldCB6Y29vcmQgPSB2Lnpjb29yZCAvIG1hZztcbiAgcmV0dXJuIG1ha2VWZWN0b3IoeGNvb3JkLCB5Y29vcmQsIHpjb29yZCk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gY3Jvc3NQcm9kdWN0KHUsIHYpIHtcbiAgLy9cbiAgLy8gdSBYIHYgPSA8IHUyKnYzIC0gdTMqdjIsXG4gIC8vICAgICAgICAgICB1Myp2MSAtIHUxKnYzLFxuICAvLyAgICAgICAgICAgdTEqdjIgLSB1Mip2MSA+XG4gIGxldCB4Y29vcmQgPSB1Lnljb29yZCAqIHYuemNvb3JkIC0gdS56Y29vcmQgKiB2Lnljb29yZDtcbiAgbGV0IHljb29yZCA9IHUuemNvb3JkICogdi54Y29vcmQgLSB1Lnhjb29yZCAqIHYuemNvb3JkO1xuICBsZXQgemNvb3JkID0gdS54Y29vcmQgKiB2Lnljb29yZCAtIHUueWNvb3JkICogdi54Y29vcmQ7XG4gIHJldHVybiBtYWtlVmVjdG9yKHhjb29yZCwgeWNvb3JkLCB6Y29vcmQpO1xufTtcbiIsImltcG9ydCB1dWlkIGZyb20gJy4uL3V0aWxzL3V1aWQnO1xuaW1wb3J0IFN0b3JlQWRhcHRlciBmcm9tICcuL1N0b3JlQWRhcHRlcic7XG5cbi8vIFN0b3JlQWRhcHRlciBmb3Igd29ya2luZyB3aXRoIGxvY2FsU3RvcmFnZVxuLy8gVGhpcyBpcyBpZGVhbCBmb3IgdGVzdGluZywgZXhhbXBsZXMsIGFuZCBwcm90b3R5cGluZ1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9jYWxTdG9yZUFkYXB0ZXIgZXh0ZW5kcyBTdG9yZUFkYXB0ZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcih7XG4gICAgICBnZXRBbm5vdGF0aW9ucyhkb2N1bWVudElkLCBwYWdlTnVtYmVyKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgbGV0IGFubm90YXRpb25zID0gZ2V0QW5ub3RhdGlvbnMoZG9jdW1lbnRJZCkuZmlsdGVyKChpKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gaS5wYWdlID09PSBwYWdlTnVtYmVyICYmIGkuY2xhc3MgPT09ICdBbm5vdGF0aW9uJztcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgZG9jdW1lbnRJZCxcbiAgICAgICAgICAgIHBhZ2VOdW1iZXIsXG4gICAgICAgICAgICBhbm5vdGF0aW9uc1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuZ2V0QW5ub3RhdGlvbiA9IChkb2N1bWVudElkLCBhbm5vdGF0aW9uSWQpID0+IHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZ2V0QW5ub3RhdGlvbnMoZG9jdW1lbnRJZClbZmluZEFubm90YXRpb24oZG9jdW1lbnRJZCwgYW5ub3RhdGlvbklkKV0pO1xuICAgIH07XG5cbiAgICB0aGlzLmFkZEFubm90YXRpb24gPSAoZG9jdW1lbnRJZCwgcGFnZU51bWJlciwgYW5ub3RhdGlvbikgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgYW5ub3RhdGlvbi5jbGFzcyA9ICdBbm5vdGF0aW9uJztcbiAgICAgICAgYW5ub3RhdGlvbi51dWlkID0gdXVpZCgpO1xuICAgICAgICBhbm5vdGF0aW9uLnBhZ2UgPSBwYWdlTnVtYmVyO1xuXG4gICAgICAgIGxldCBhbm5vdGF0aW9ucyA9IGdldEFubm90YXRpb25zKGRvY3VtZW50SWQpO1xuICAgICAgICBhbm5vdGF0aW9ucy5wdXNoKGFubm90YXRpb24pO1xuICAgICAgICB1cGRhdGVBbm5vdGF0aW9ucyhkb2N1bWVudElkLCBhbm5vdGF0aW9ucyk7XG5cbiAgICAgICAgcmVzb2x2ZShhbm5vdGF0aW9uKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICB0aGlzLmVkaXRBbm5vdGF0aW9uID0gKGRvY3VtZW50SWQsIGFubm90YXRpb25JZCwgYW5ub3RhdGlvbikgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgbGV0IGFubm90YXRpb25zID0gZ2V0QW5ub3RhdGlvbnMoZG9jdW1lbnRJZCk7XG4gICAgICAgIGFubm90YXRpb25zW2ZpbmRBbm5vdGF0aW9uKGRvY3VtZW50SWQsIGFubm90YXRpb25JZCldID0gYW5ub3RhdGlvbjtcbiAgICAgICAgdXBkYXRlQW5ub3RhdGlvbnMoZG9jdW1lbnRJZCwgYW5ub3RhdGlvbnMpO1xuICAgICAgICByZXNvbHZlKGFubm90YXRpb24pO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHRoaXMuZGVsZXRlQW5ub3RhdGlvbiA9IChkb2N1bWVudElkLCBhbm5vdGF0aW9uSWQpID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGxldCBhbm5vdGF0aW9uID0gZ2V0QW5ub3RhdGlvbnMoZG9jdW1lbnRJZCkuZmlsdGVyKGkgPT4gaS51dWlkID09PSBhbm5vdGF0aW9uSWQpWzBdIHx8IHt9O1xuICAgICAgICBpZiAoIWFubm90YXRpb24pIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KCdDb3VsZCBub3QgZmluZCBhbm5vdGF0aW9uJyk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGluZGV4ID0gZmluZEFubm90YXRpb24oZG9jdW1lbnRJZCwgYW5ub3RhdGlvbklkKTtcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICBsZXQgYW5ub3RhdGlvbnMgPSBnZXRBbm5vdGF0aW9ucyhkb2N1bWVudElkKTtcbiAgICAgICAgICBhbm5vdGF0aW9ucy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgIHVwZGF0ZUFubm90YXRpb25zKGRvY3VtZW50SWQsIGFubm90YXRpb25zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgdGhpcy5nZXRDb21tZW50cyA9IChkb2N1bWVudElkLCBhbm5vdGF0aW9uSWQpID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHJlc29sdmUoZ2V0QW5ub3RhdGlvbnMoZG9jdW1lbnRJZCkuZmlsdGVyKChpKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGkuY2xhc3MgPT09ICdDb21tZW50JyAmJiBpLmFubm90YXRpb24gPT09IGFubm90YXRpb25JZDtcbiAgICAgICAgfSkpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHRoaXMuYWRkQ29tbWVudCA9IChkb2N1bWVudElkLCBhbm5vdGF0aW9uSWQsIGNvbnRlbnQpID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGxldCBjb21tZW50ID0ge1xuICAgICAgICAgIGNsYXNzOiAnQ29tbWVudCcsXG4gICAgICAgICAgdXVpZDogdXVpZCgpLFxuICAgICAgICAgIGFubm90YXRpb246IGFubm90YXRpb25JZCxcbiAgICAgICAgICBjb250ZW50OiBjb250ZW50XG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IGFubm90YXRpb25zID0gZ2V0QW5ub3RhdGlvbnMoZG9jdW1lbnRJZCk7XG4gICAgICAgIGFubm90YXRpb25zLnB1c2goY29tbWVudCk7XG4gICAgICAgIHVwZGF0ZUFubm90YXRpb25zKGRvY3VtZW50SWQsIGFubm90YXRpb25zKTtcblxuICAgICAgICByZXNvbHZlKGNvbW1lbnQpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHRoaXMuZGVsZXRlQ29tbWVudCA9IChkb2N1bWVudElkLCBjb21tZW50SWQpID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGxldCBjb21tZW50ID0gZ2V0QW5ub3RhdGlvbnMoZG9jdW1lbnRJZCkuZmlsdGVyKGkgPT4gaS51dWlkID09PSBjb21tZW50SWQpWzBdIHx8IHt9O1xuICAgICAgICBpZiAoIWNvbW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KCdDb3VsZCBub3QgZmluZCBhbm5vdGF0aW9uJyk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGluZGV4ID0gLTE7XG4gICAgICAgIGxldCBhbm5vdGF0aW9ucyA9IGdldEFubm90YXRpb25zKGRvY3VtZW50SWQpO1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGFubm90YXRpb25zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgIGlmIChhbm5vdGF0aW9uc1tpXS51dWlkID09PSBjb21tZW50SWQpIHtcbiAgICAgICAgICAgIGluZGV4ID0gaTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgYW5ub3RhdGlvbnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICB1cGRhdGVBbm5vdGF0aW9ucyhkb2N1bWVudElkLCBhbm5vdGF0aW9ucyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRBbm5vdGF0aW9ucyhkb2N1bWVudElkKSB7XG4gIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGAke2RvY3VtZW50SWR9L2Fubm90YXRpb25zYCkpIHx8IFtdO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVBbm5vdGF0aW9ucyhkb2N1bWVudElkLCBhbm5vdGF0aW9ucykge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgJHtkb2N1bWVudElkfS9hbm5vdGF0aW9uc2AsIEpTT04uc3RyaW5naWZ5KGFubm90YXRpb25zKSk7XG59XG4vKipcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZG9jdW1lbnRJZCBEb2N1bWVudCBpZCBvZiB0aGUgYW5ub3RhdGlvblxuICogQHBhcmFtIHtTdHJpbmd9IGFubm90YXRpb25JZCBUaGUgaWQgb2YgdGhlIGFubm90YXRpb25cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIGZpbmRzIGFsbCB0aGUgYW5ub3RhdGlvbiBtYWRlIGJ5IG9uZSB1c2VyLlxuICpcbiAqIEByZXR1cm4ge2ludH0gVGhlIGluZGV4IG9mIHRoZSBhbm5vdGF0aW9uIGluIGxvY2Fsc3RvcmFnZVxuICovXG5mdW5jdGlvbiBmaW5kQW5ub3RhdGlvbihkb2N1bWVudElkLCBhbm5vdGF0aW9uSWQpIHtcbiAgbGV0IGluZGV4ID0gLTE7XG4gIGxldCBhbm5vdGF0aW9ucyA9IGdldEFubm90YXRpb25zKGRvY3VtZW50SWQpO1xuICBmb3IgKGxldCBpID0gMCwgbCA9IGFubm90YXRpb25zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGlmIChhbm5vdGF0aW9uc1tpXS51dWlkID09PSBhbm5vdGF0aW9uSWQpIHtcbiAgICAgIGluZGV4ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gaW5kZXg7XG59XG4iLCJjb25zdCBSRUdFWFAgPSAvW3h5XS9nO1xuY29uc3QgUEFUVEVSTiA9ICd4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHgnO1xuXG5mdW5jdGlvbiByZXBsYWNlbWVudChjKSB7XG4gIGxldCByID0gTWF0aC5yYW5kb20oKSAqIDE2IHwgMDtcbiAgbGV0IHYgPSBjID09PSAneCcgPyByIDogKHIgJiAweDMgfCAweDgpO1xuICByZXR1cm4gdi50b1N0cmluZygxNik7XG59XG5cbi8qKlxuICogR2VuZXJhdGUgYSB1bml2aWVyYWxseSB1bmlxdWUgaWRlbnRpZmllclxuICpcbiAqIEByZXR1cm4ge1N0cmluZ30gQSBVVUlEXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHV1aWQoKSB7XG4gIHJldHVybiBQQVRURVJOLnJlcGxhY2UoUkVHRVhQLCByZXBsYWNlbWVudCk7XG59XG4iLCJpbXBvcnQgdXVpZCBmcm9tICcuLi91dGlscy91dWlkJztcbmltcG9ydCBTdG9yZUFkYXB0ZXIgZnJvbSAnLi9TdG9yZUFkYXB0ZXInO1xuXG4vLyBTdG9yZUFkYXB0ZXIgZm9yIHdvcmtpbmcgd2l0aCBsb2NhbFN0b3JhZ2UgYW5kIGFzc29jaWF0ZWQgdXNlciBpZFxuLy8gVGhpcyBpcyBpZGVhbCBmb3IgdGVzdGluZywgZXhhbXBsZXMsIGFuZCBwcm90b3R5cGluZ1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9jYWxVc2VyU3RvcmVBZGFwdGVyIGV4dGVuZHMgU3RvcmVBZGFwdGVyIHtcbiAgY29uc3RydWN0b3IodXNlcklkID0gJ3VzZXInLCBnbG9iYWxFZGl0ID0gZmFsc2UpIHtcbiAgICBzdXBlcih7XG4gICAgICBnZXRBbm5vdGF0aW9ucyhkb2N1bWVudElkLCBwYWdlTnVtYmVyKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgbGV0IGFubm90YXRpb25zID0gZ2V0QWxsQW5ub3RhdGlvbnMoZG9jdW1lbnRJZCkuZmlsdGVyKChpKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gaS5wYWdlID09PSBwYWdlTnVtYmVyICYmIGkuY2xhc3MgPT09ICdBbm5vdGF0aW9uJztcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgZG9jdW1lbnRJZCxcbiAgICAgICAgICAgIHBhZ2VOdW1iZXIsXG4gICAgICAgICAgICBhbm5vdGF0aW9uc1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuX3VzZXJJZCA9IHVzZXJJZDtcbiAgICB0aGlzLl9nbG9iYWxFZGl0ID0gZ2xvYmFsRWRpdDtcblxuICAgIHRoaXMuZ2V0QW5ub3RhdGlvbiA9IChkb2N1bWVudElkLCBhbm5vdGF0aW9uSWQpID0+IHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZ2V0QW5ub3RhdGlvbnMoZG9jdW1lbnRJZCwgdGhpcy5fdXNlcklkKVtmaW5kQW5ub3RhdGlvbihkb2N1bWVudElkLCB0aGlzLl91c2VySWQsIGFubm90YXRpb25JZCldKTtcbiAgICB9O1xuXG4gICAgdGhpcy5hZGRBbm5vdGF0aW9uID0gKGRvY3VtZW50SWQsIHBhZ2VOdW1iZXIsIGFubm90YXRpb24pID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGFubm90YXRpb24uY2xhc3MgPSAnQW5ub3RhdGlvbic7XG4gICAgICAgIGFubm90YXRpb24udXVpZCA9IHV1aWQoKTtcbiAgICAgICAgYW5ub3RhdGlvbi5wYWdlID0gcGFnZU51bWJlcjtcbiAgICAgICAgYW5ub3RhdGlvbi51c2VySWQgPSB0aGlzLl91c2VySWQ7XG5cbiAgICAgICAgbGV0IGFubm90YXRpb25zID0gZ2V0QW5ub3RhdGlvbnMoZG9jdW1lbnRJZCwgdGhpcy5fdXNlcklkKTtcbiAgICAgICAgYW5ub3RhdGlvbnMucHVzaChhbm5vdGF0aW9uKTtcbiAgICAgICAgdXBkYXRlQW5ub3RhdGlvbnMoZG9jdW1lbnRJZCwgdGhpcy5fdXNlcklkLCBhbm5vdGF0aW9ucyk7XG5cbiAgICAgICAgcmVzb2x2ZShhbm5vdGF0aW9uKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICB0aGlzLmVkaXRBbm5vdGF0aW9uID0gKGRvY3VtZW50SWQsIGFubm90YXRpb25JZCwgYW5ub3RhdGlvbikgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLl9nbG9iYWxFZGl0ICYmIGFubm90YXRpb24udXNlcklkICYmIGFubm90YXRpb24udXNlcklkICE9PSB0aGlzLl91c2VySWQpIHtcbiAgICAgICAgICByZWplY3QoJ05vbi1tYXRjaGluZyB1c2VySWQnKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgYW5ub3RhdGlvbnMgPSBnZXRBbm5vdGF0aW9ucyhkb2N1bWVudElkLCBhbm5vdGF0aW9uLnVzZXJJZCk7XG4gICAgICAgIGFubm90YXRpb25zW2ZpbmRBbm5vdGF0aW9uKGRvY3VtZW50SWQsIGFubm90YXRpb24udXNlcklkLCBhbm5vdGF0aW9uSWQpXSA9IGFubm90YXRpb247XG4gICAgICAgIHVwZGF0ZUFubm90YXRpb25zKGRvY3VtZW50SWQsIGFubm90YXRpb24udXNlcklkLCBhbm5vdGF0aW9ucyk7XG4gICAgICAgIHJlc29sdmUoYW5ub3RhdGlvbik7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgdGhpcy5kZWxldGVBbm5vdGF0aW9uID0gKGRvY3VtZW50SWQsIGFubm90YXRpb25JZCkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgbGV0IGFubm90YXRpb24gPSBnZXRBbGxBbm5vdGF0aW9ucyhkb2N1bWVudElkKS5maWx0ZXIoaSA9PiBpLnV1aWQgPT09IGFubm90YXRpb25JZClbMF0gfHwge307XG4gICAgICAgIGlmICghYW5ub3RhdGlvbikge1xuICAgICAgICAgIHJldHVybiByZWplY3QoJ0NvdWxkIG5vdCBmaW5kIGFubm90YXRpb24nKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghdGhpcy5fZ2xvYmFsRWRpdCAmJiBhbm5vdGF0aW9uLnVzZXJJZCAmJiBhbm5vdGF0aW9uLnVzZXJJZCAhPT0gdGhpcy5fdXNlcklkKSB7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdCgnTm9uLW1hdGNoaW5nIHVzZXJJZCcpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBpbmRleCA9IGZpbmRBbm5vdGF0aW9uKGRvY3VtZW50SWQsIGFubm90YXRpb24udXNlcklkLCBhbm5vdGF0aW9uSWQpO1xuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgIGxldCBhbm5vdGF0aW9ucyA9IGdldEFubm90YXRpb25zKGRvY3VtZW50SWQsIGFubm90YXRpb24udXNlcklkKTtcbiAgICAgICAgICBhbm5vdGF0aW9ucy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgIHVwZGF0ZUFubm90YXRpb25zKGRvY3VtZW50SWQsIGFubm90YXRpb24udXNlcklkLCBhbm5vdGF0aW9ucyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHRoaXMuZ2V0Q29tbWVudHMgPSAoZG9jdW1lbnRJZCwgYW5ub3RhdGlvbklkKSA9PiB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICByZXNvbHZlKGdldEFubm90YXRpb25zKGRvY3VtZW50SWQsIHRoaXMuX3VzZXJJZCkuZmlsdGVyKChpKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGkuY2xhc3MgPT09ICdDb21tZW50JyAmJiBpLmFubm90YXRpb24gPT09IGFubm90YXRpb25JZDtcbiAgICAgICAgfSkpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHRoaXMuYWRkQ29tbWVudCA9IChkb2N1bWVudElkLCBhbm5vdGF0aW9uSWQsIGNvbnRlbnQpID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGxldCBjb21tZW50ID0ge1xuICAgICAgICAgIGNsYXNzOiAnQ29tbWVudCcsXG4gICAgICAgICAgdXVpZDogdXVpZCgpLFxuICAgICAgICAgIGFubm90YXRpb246IGFubm90YXRpb25JZCxcbiAgICAgICAgICBjb250ZW50OiBjb250ZW50LFxuICAgICAgICAgIHVzZXJJZDogdGhpcy5fdXNlcklkXG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IGFubm90YXRpb25zID0gZ2V0QW5ub3RhdGlvbnMoZG9jdW1lbnRJZCwgdGhpcy5fdXNlcklkKTtcbiAgICAgICAgYW5ub3RhdGlvbnMucHVzaChjb21tZW50KTtcbiAgICAgICAgdXBkYXRlQW5ub3RhdGlvbnMoZG9jdW1lbnRJZCwgdGhpcy5fdXNlcklkLCBhbm5vdGF0aW9ucyk7XG5cbiAgICAgICAgcmVzb2x2ZShjb21tZW50KTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICB0aGlzLmRlbGV0ZUNvbW1lbnQgPSAoZG9jdW1lbnRJZCwgY29tbWVudElkKSA9PiB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBsZXQgY29tbWVudCA9IGdldEFsbEFubm90YXRpb25zKGRvY3VtZW50SWQpLmZpbHRlcihpID0+IGkudXVpZCA9PT0gY29tbWVudElkKVswXSB8fCB7fTtcbiAgICAgICAgaWYgKCFjb21tZW50KSB7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdCgnQ291bGQgbm90IGZpbmQgYW5ub3RhdGlvbicpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCF0aGlzLl9nbG9iYWxFZGl0ICYmIGNvbW1lbnQudXNlcklkICYmIGNvbW1lbnQudXNlcklkICE9PSB0aGlzLl91c2VySWQpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KCdOb24tbWF0Y2hpbmcgdXNlcklkJyk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGluZGV4ID0gLTE7XG4gICAgICAgIGxldCBhbm5vdGF0aW9ucyA9IGdldEFubm90YXRpb25zKGRvY3VtZW50SWQsIGNvbW1lbnQudXNlcklkKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBhbm5vdGF0aW9ucy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICBpZiAoYW5ub3RhdGlvbnNbaV0udXVpZCA9PT0gY29tbWVudElkKSB7XG4gICAgICAgICAgICBpbmRleCA9IGk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgIGFubm90YXRpb25zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgdXBkYXRlQW5ub3RhdGlvbnMoZG9jdW1lbnRJZCwgY29tbWVudC51c2VySWQsIGFubm90YXRpb25zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9XG5cbiAgZ2V0IHVzZXJJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdXNlcklkO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldEFsbEFubm90YXRpb25zKGRvY3VtZW50SWQpIHtcbiAgbGV0IGFsbF9hbm5vdGF0aW9ucyA9IFtdO1xuICBsZXQgcmUgPSBuZXcgUmVnRXhwKGAke2RvY3VtZW50SWR9LyguKikvYW5ub3RhdGlvbnNgKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb2NhbFN0b3JhZ2UubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAobG9jYWxTdG9yYWdlLmtleShpKS5zZWFyY2gocmUpID4gLTEpIHtcbiAgICAgIGFsbF9hbm5vdGF0aW9ucy5wdXNoKC4uLkpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0obG9jYWxTdG9yYWdlLmtleShpKSkpKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFsbF9hbm5vdGF0aW9ucztcbn1cblxuZnVuY3Rpb24gZ2V0QW5ub3RhdGlvbnMoZG9jdW1lbnRJZCwgdXNlcklkKSB7XG4gIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGAke2RvY3VtZW50SWR9LyR7dXNlcklkfS9hbm5vdGF0aW9uc2ApKSB8fCBbXTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlQW5ub3RhdGlvbnMoZG9jdW1lbnRJZCwgdXNlcklkLCBhbm5vdGF0aW9ucykge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgJHtkb2N1bWVudElkfS8ke3VzZXJJZH0vYW5ub3RhdGlvbnNgLCBKU09OLnN0cmluZ2lmeShhbm5vdGF0aW9ucykpO1xufVxuLyoqXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGRvY3VtZW50SWQgRG9jdW1lbnQgaWQgb2YgdGhlIGFubm90YXRpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSB1c2VySWQgVXNlciBpZCBvZiB0aGUgYW5ub3RhdGlvblxuICogQHBhcmFtIHtTdHJpbmd9IGFubm90YXRpb25JZCBUaGUgaWQgb2YgdGhlIGFubm90YXRpb25cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIGZpbmRzIGFsbCB0aGUgYW5ub3RhdGlvbiBtYWRlIGJ5IG9uZSB1c2VyLlxuICpcbiAqIEByZXR1cm4ge2ludH0gVGhlIGluZGV4IG9mIHRoZSBhbm5vdGF0aW9uIGluIGxvY2Fsc3RvcmFnZVxuICovXG5mdW5jdGlvbiBmaW5kQW5ub3RhdGlvbihkb2N1bWVudElkLCB1c2VySWQsIGFubm90YXRpb25JZCkge1xuICBsZXQgaW5kZXggPSAtMTtcbiAgbGV0IGFubm90YXRpb25zID0gZ2V0QW5ub3RhdGlvbnMoZG9jdW1lbnRJZCwgdXNlcklkKTtcbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBhbm5vdGF0aW9ucy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBpZiAoYW5ub3RhdGlvbnNbaV0udXVpZCA9PT0gYW5ub3RhdGlvbklkKSB7XG4gICAgICBpbmRleCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGluZGV4O1xufVxuIiwiaW1wb3J0IHsgYXBwZW5kQ2hpbGQsIHRyYW5zZm9ybUNoaWxkIH0gZnJvbSAnLi9hcHBlbmRDaGlsZCc7XG5cbi8qKlxuICogUmVuZGVyIHRoZSByZXNwb25zZSBmcm9tIFBERkpTQW5ub3RhdGUuZ2V0U3RvcmVBZGFwdGVyKCkuZ2V0QW5ub3RhdGlvbnMgdG8gU1ZHXG4gKlxuICogQHBhcmFtIHtTVkdFbGVtZW50fSBzdmcgVGhlIFNWRyBlbGVtZW50IHRvIHJlbmRlciB0aGUgYW5ub3RhdGlvbnMgdG9cbiAqIEBwYXJhbSB7T2JqZWN0fSB2aWV3cG9ydCBUaGUgcGFnZSB2aWV3cG9ydCBkYXRhXG4gKiBAcGFyYW0ge09iamVjdH0gZGF0YSBUaGUgcmVzcG9uc2UgZnJvbSBQREZKU0Fubm90YXRlLmdldFN0b3JlQWRhcHRlcigpLmdldEFubm90YXRpb25zXG4gKiBAcmV0dXJuIHtQcm9taXNlfSBTZXR0bGVkIG9uY2UgcmVuZGVyaW5nIGhhcyBjb21wbGV0ZWRcbiAqICBBIHNldHRsZWQgUHJvbWlzZSB3aWxsIGJlIGVpdGhlcjpcbiAqICAgIC0gZnVsZmlsbGVkOiBTVkdFbGVtZW50XG4gKiAgICAtIHJlamVjdGVkOiBFcnJvclxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXIoc3ZnLCB2aWV3cG9ydCwgZGF0YSkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIC8vIFJlc2V0IHRoZSBjb250ZW50IG9mIHRoZSBTVkdcbiAgICBzdmcuc2V0QXR0cmlidXRlKCdkYXRhLXBkZi1hbm5vdGF0ZS1jb250YWluZXInLCB0cnVlKTtcbiAgICBzdmcuc2V0QXR0cmlidXRlKCdkYXRhLXBkZi1hbm5vdGF0ZS12aWV3cG9ydCcsIEpTT04uc3RyaW5naWZ5KHZpZXdwb3J0KSk7XG4gICAgc3ZnLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1wZGYtYW5ub3RhdGUtZG9jdW1lbnQnKTtcbiAgICBzdmcucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXBkZi1hbm5vdGF0ZS1wYWdlJyk7XG5cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGRhdGEgbm90aGluZyBjYW4gYmUgZG9uZVxuICAgIGlmICghZGF0YSkge1xuICAgICAgc3ZnLmlubmVySFRNTCA9ICcnO1xuICAgICAgcmV0dXJuIHJlc29sdmUoc3ZnKTtcbiAgICB9XG5cbiAgICBzdmcuc2V0QXR0cmlidXRlKCdkYXRhLXBkZi1hbm5vdGF0ZS1kb2N1bWVudCcsIGRhdGEuZG9jdW1lbnRJZCk7XG4gICAgc3ZnLnNldEF0dHJpYnV0ZSgnZGF0YS1wZGYtYW5ub3RhdGUtcGFnZScsIGRhdGEucGFnZU51bWJlcik7XG5cbiAgICAvLyBNYWtlIHN1cmUgYW5ub3RhdGlvbnMgaXMgYW4gYXJyYXlcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZGF0YS5hbm5vdGF0aW9ucykgfHwgZGF0YS5hbm5vdGF0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiByZXNvbHZlKHN2Zyk7XG4gICAgfVxuXG4gICAgLy8gQXBwZW5kIG9yIHRyYW5zZm9ybSBhbm5vdGF0aW9uIHRvIHN2Z1xuICAgIGRhdGEuYW5ub3RhdGlvbnMuZm9yRWFjaCgoYSkgPT4ge1xuICAgICAgbGV0IG5vZGUgPSBzdmcucXVlcnlTZWxlY3RvcignW2RhdGEtcGRmLWFubm90YXRlLWlkPVwiJyArIGEudXVpZCArICdcIl0nKTtcbiAgICAgIGlmIChub2RlKSB7XG4gICAgICAgIHRyYW5zZm9ybUNoaWxkKHN2Zywgbm9kZSwgdmlld3BvcnQpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGFwcGVuZENoaWxkKHN2ZywgYSwgdmlld3BvcnQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmVzb2x2ZShzdmcpO1xuICB9KTtcbn1cbiIsImltcG9ydCB7IGFkZEV2ZW50TGlzdGVuZXIsIHJlbW92ZUV2ZW50TGlzdGVuZXIsIGZpcmVFdmVudCB9IGZyb20gJy4vZXZlbnQnO1xuaW1wb3J0IHsgZGlzYWJsZUVkaXQsIGVuYWJsZUVkaXQgfSBmcm9tICcuL2VkaXQnO1xuaW1wb3J0IHsgZGlzYWJsZVBlbiwgZW5hYmxlUGVuLCBzZXRQZW4gfSBmcm9tICcuL3Blbic7XG5pbXBvcnQgeyBkaXNhYmxlQXJyb3csIGVuYWJsZUFycm93LCBzZXRBcnJvdyB9IGZyb20gJy4vYXJyb3cnO1xuaW1wb3J0IHsgZGlzYWJsZUVyYXNlciwgZW5hYmxlRXJhc2VyIH0gZnJvbSAnLi9lcmFzZXInO1xuaW1wb3J0IHsgZGlzYWJsZVBvaW50LCBlbmFibGVQb2ludCB9IGZyb20gJy4vcG9pbnQnO1xuaW1wb3J0IHsgZGlzYWJsZVJlY3QsIGVuYWJsZVJlY3QgfSBmcm9tICcuL3JlY3QnO1xuaW1wb3J0IHsgZGlzYWJsZUNpcmNsZSwgZW5hYmxlQ2lyY2xlLCBzZXRDaXJjbGUsIGFkZENpcmNsZSB9IGZyb20gJy4vY2lyY2xlJztcbmltcG9ydCB7IGRpc2FibGVUZXh0LCBlbmFibGVUZXh0LCBzZXRUZXh0IH0gZnJvbSAnLi90ZXh0JztcbmltcG9ydCB7IGNyZWF0ZVBhZ2UsIHJlbmRlclBhZ2UgfSBmcm9tICcuL3BhZ2UnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGFkZEV2ZW50TGlzdGVuZXIsXG4gIHJlbW92ZUV2ZW50TGlzdGVuZXIsXG4gIGZpcmVFdmVudCxcblxuICBkaXNhYmxlRWRpdCxcbiAgZW5hYmxlRWRpdCxcblxuICBkaXNhYmxlUGVuLFxuICBlbmFibGVQZW4sXG4gIHNldFBlbixcblxuICBkaXNhYmxlUG9pbnQsXG4gIGVuYWJsZVBvaW50LFxuXG4gIGRpc2FibGVSZWN0LFxuICBlbmFibGVSZWN0LFxuXG4gIGRpc2FibGVDaXJjbGUsXG4gIGVuYWJsZUNpcmNsZSxcbiAgc2V0Q2lyY2xlLFxuICBhZGRDaXJjbGUsXG5cbiAgZGlzYWJsZUFycm93LFxuICBlbmFibGVBcnJvdyxcbiAgc2V0QXJyb3csXG5cbiAgZGlzYWJsZUVyYXNlcixcbiAgZW5hYmxlRXJhc2VyLFxuXG4gIGRpc2FibGVUZXh0LFxuICBlbmFibGVUZXh0LFxuICBzZXRUZXh0LFxuXG4gIGNyZWF0ZVBhZ2UsXG4gIHJlbmRlclBhZ2Vcbn07XG4iLCJpbXBvcnQgUERGSlNBbm5vdGF0ZSBmcm9tICcuLi9QREZKU0Fubm90YXRlJztcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCB7XG4gIGFkZEV2ZW50TGlzdGVuZXIsXG4gIHJlbW92ZUV2ZW50TGlzdGVuZXJcbn0gZnJvbSAnLi9ldmVudCc7XG5pbXBvcnQge1xuICBCT1JERVJfQ09MT1IsXG4gIGRpc2FibGVVc2VyU2VsZWN0LFxuICBlbmFibGVVc2VyU2VsZWN0LFxuICBmaW5kU1ZHQ29udGFpbmVyLFxuICBmaW5kU1ZHQXRQb2ludCxcbiAgZ2V0T2Zmc2V0QW5ub3RhdGlvblJlY3QsXG4gIGdldE1ldGFkYXRhLFxuICBjb252ZXJ0VG9TdmdQb2ludFxufSBmcm9tICcuL3V0aWxzJztcblxubGV0IF9lbmFibGVkID0gZmFsc2U7XG5sZXQgaXNEcmFnZ2luZyA9IGZhbHNlO1xubGV0IG92ZXJsYXk7XG5sZXQgZHJhZ09mZnNldFgsIGRyYWdPZmZzZXRZLCBkcmFnU3RhcnRYLCBkcmFnU3RhcnRZO1xuY29uc3QgT1ZFUkxBWV9CT1JERVJfU0laRSA9IDM7XG5cbi8qKlxuICogQ3JlYXRlIGFuIG92ZXJsYXkgZm9yIGVkaXRpbmcgYW4gYW5ub3RhdGlvbi5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IHRhcmdldCBUaGUgYW5ub3RhdGlvbiBlbGVtZW50IHRvIGFwcGx5IG92ZXJsYXkgZm9yXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUVkaXRPdmVybGF5KHRhcmdldCkge1xuICBkZXN0cm95RWRpdE92ZXJsYXkoKTtcblxuICBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxldCBhbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGxldCBwYXJlbnROb2RlID0gZmluZFNWR0NvbnRhaW5lcih0YXJnZXQpLnBhcmVudE5vZGU7XG4gIGxldCBpZCA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcGRmLWFubm90YXRlLWlkJyk7XG4gIGxldCByZWN0ID0gZ2V0T2Zmc2V0QW5ub3RhdGlvblJlY3QodGFyZ2V0KTtcbiAgbGV0IHN0eWxlTGVmdCA9IHJlY3QubGVmdCAtIE9WRVJMQVlfQk9SREVSX1NJWkU7XG4gIGxldCBzdHlsZVRvcCA9IHJlY3QudG9wIC0gT1ZFUkxBWV9CT1JERVJfU0laRTtcblxuICBvdmVybGF5LnNldEF0dHJpYnV0ZSgnaWQnLCAncGRmLWFubm90YXRlLWVkaXQtb3ZlcmxheScpO1xuICBvdmVybGF5LnNldEF0dHJpYnV0ZSgnZGF0YS10YXJnZXQtaWQnLCBpZCk7XG4gIG92ZXJsYXkuc3R5bGUuYm94U2l6aW5nID0gJ2NvbnRlbnQtYm94JztcbiAgb3ZlcmxheS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gIG92ZXJsYXkuc3R5bGUudG9wID0gYCR7c3R5bGVUb3B9cHhgO1xuICBvdmVybGF5LnN0eWxlLmxlZnQgPSBgJHtzdHlsZUxlZnR9cHhgO1xuICBvdmVybGF5LnN0eWxlLndpZHRoID0gYCR7cmVjdC53aWR0aH1weGA7XG4gIG92ZXJsYXkuc3R5bGUuaGVpZ2h0ID0gYCR7cmVjdC5oZWlnaHR9cHhgO1xuICBvdmVybGF5LnN0eWxlLmJvcmRlciA9IGAke09WRVJMQVlfQk9SREVSX1NJWkV9cHggc29saWQgJHtCT1JERVJfQ09MT1J9YDtcbiAgb3ZlcmxheS5zdHlsZS5ib3JkZXJSYWRpdXMgPSBgJHtPVkVSTEFZX0JPUkRFUl9TSVpFfXB4YDtcbiAgb3ZlcmxheS5zdHlsZS56SW5kZXggPSAyMDEwMDtcblxuICBhbmNob3IuaW5uZXJIVE1MID0gJ8OXJztcbiAgYW5jaG9yLnNldEF0dHJpYnV0ZSgnaHJlZicsICdqYXZhc2NyaXB0Oi8vJyk7XG4gIGFuY2hvci5zdHlsZS5iYWNrZ3JvdW5kID0gJyNmZmYnO1xuICBhbmNob3Iuc3R5bGUuYm9yZGVyUmFkaXVzID0gJzIwcHgnO1xuICBhbmNob3Iuc3R5bGUuYm9yZGVyID0gJzFweCBzb2xpZCAjYmJiJztcbiAgYW5jaG9yLnN0eWxlLmNvbG9yID0gJyNiYmInO1xuICBhbmNob3Iuc3R5bGUuZm9udFNpemUgPSAnMTZweCc7XG4gIGFuY2hvci5zdHlsZS5wYWRkaW5nID0gJzJweCc7XG4gIGFuY2hvci5zdHlsZS50ZXh0QWxpZ24gPSAnY2VudGVyJztcbiAgYW5jaG9yLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ25vbmUnO1xuICBhbmNob3Iuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICBhbmNob3Iuc3R5bGUudG9wID0gJy0xM3B4JztcbiAgYW5jaG9yLnN0eWxlLnJpZ2h0ID0gJy0xM3B4JztcbiAgYW5jaG9yLnN0eWxlLndpZHRoID0gJzI1cHgnO1xuICBhbmNob3Iuc3R5bGUuaGVpZ2h0ID0gJzI1cHgnO1xuXG4gIG92ZXJsYXkuYXBwZW5kQ2hpbGQoYW5jaG9yKTtcbiAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZChvdmVybGF5KTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVEb2N1bWVudENsaWNrKTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBoYW5kbGVEb2N1bWVudEtleXVwKTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgaGFuZGxlRG9jdW1lbnRNb3VzZWRvd24pO1xuICBhbmNob3IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZWxldGVBbm5vdGF0aW9uKTtcbiAgYW5jaG9yLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHtcbiAgICBhbmNob3Iuc3R5bGUuY29sb3IgPSAnIzM1QTREQyc7XG4gICAgYW5jaG9yLnN0eWxlLmJvcmRlckNvbG9yID0gJyM5OTknO1xuICAgIGFuY2hvci5zdHlsZS5ib3hTaGFkb3cgPSAnMCAxcHggMXB4ICNjY2MnO1xuICB9KTtcbiAgYW5jaG9yLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKCkgPT4ge1xuICAgIGFuY2hvci5zdHlsZS5jb2xvciA9ICcjYmJiJztcbiAgICBhbmNob3Iuc3R5bGUuYm9yZGVyQ29sb3IgPSAnI2JiYic7XG4gICAgYW5jaG9yLnN0eWxlLmJveFNoYWRvdyA9ICcnO1xuICB9KTtcbiAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB7XG4gICAgaWYgKCFpc0RyYWdnaW5nKSB7IGFuY2hvci5zdHlsZS5kaXNwbGF5ID0gJyc7IH1cbiAgfSk7XG4gIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoKSA9PiB7XG4gICAgYW5jaG9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH0pO1xufVxuXG4vKipcbiAqIERlc3Ryb3kgdGhlIGVkaXQgb3ZlcmxheSBpZiBpdCBleGlzdHMuXG4gKi9cbmZ1bmN0aW9uIGRlc3Ryb3lFZGl0T3ZlcmxheSgpIHtcbiAgaWYgKG92ZXJsYXkpIHtcbiAgICBvdmVybGF5LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQob3ZlcmxheSk7XG4gICAgb3ZlcmxheSA9IG51bGw7XG4gIH1cblxuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZURvY3VtZW50Q2xpY2spO1xuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIGhhbmRsZURvY3VtZW50S2V5dXApO1xuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBoYW5kbGVEb2N1bWVudE1vdXNlZG93bik7XG4gIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGhhbmRsZURvY3VtZW50TW91c2Vtb3ZlKTtcbiAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGhhbmRsZURvY3VtZW50TW91c2V1cCk7XG4gIGVuYWJsZVVzZXJTZWxlY3QoKTtcbn1cblxuLyoqXG4gKiBEZWxldGUgY3VycmVudGx5IHNlbGVjdGVkIGFubm90YXRpb25cbiAqL1xuZnVuY3Rpb24gZGVsZXRlQW5ub3RhdGlvbigpIHtcbiAgaWYgKCFvdmVybGF5KSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbGV0IGFubm90YXRpb25JZCA9IG92ZXJsYXkuZ2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldC1pZCcpO1xuICBsZXQgc3ZnID0gb3ZlcmxheS5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoY29uZmlnLmFubm90YXRpb25TdmdRdWVyeSgpKTtcbiAgbGV0IHsgZG9jdW1lbnRJZCB9ID0gZ2V0TWV0YWRhdGEoc3ZnKTtcblxuICBQREZKU0Fubm90YXRlLmdldFN0b3JlQWRhcHRlcigpLmRlbGV0ZUFubm90YXRpb24oZG9jdW1lbnRJZCwgYW5ub3RhdGlvbklkKS50aGVuKCgpID0+IHtcbiAgICBsZXQgbm9kZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS1wZGYtYW5ub3RhdGUtaWQ9XCIke2Fubm90YXRpb25JZH1cIl1gKTtcblxuICAgIFsuLi5ub2Rlc10uZm9yRWFjaCgobikgPT4ge1xuICAgICAgbi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG4pO1xuICAgIH0pO1xuICB9KTtcblxuICBkZXN0cm95RWRpdE92ZXJsYXkoKTtcbn1cblxuLyoqXG4gKiBIYW5kbGUgZG9jdW1lbnQuY2xpY2sgZXZlbnRcbiAqXG4gKiBAcGFyYW0ge0V2ZW50fSBlIFRoZSBET00gZXZlbnQgdGhhdCBuZWVkcyB0byBiZSBoYW5kbGVkXG4gKi9cbmZ1bmN0aW9uIGhhbmRsZURvY3VtZW50Q2xpY2soZSkge1xuICBpZiAoIWZpbmRTVkdBdFBvaW50KGUuY2xpZW50WCwgZS5jbGllbnRZKSkgeyByZXR1cm47IH1cblxuICAvLyBSZW1vdmUgY3VycmVudCBvdmVybGF5XG4gIGxldCBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BkZi1hbm5vdGF0ZS1lZGl0LW92ZXJsYXknKTtcbiAgaWYgKG92ZXJsYXkpIHtcbiAgICBpZiAoaXNEcmFnZ2luZyB8fCBlLnRhcmdldCA9PT0gb3ZlcmxheSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGRlc3Ryb3lFZGl0T3ZlcmxheSgpO1xuICB9XG59XG5cbi8qKlxuICogSGFuZGxlIGRvY3VtZW50LmtleXVwIGV2ZW50XG4gKlxuICogQHBhcmFtIHtLZXlib2FyZEV2ZW50fSBlIFRoZSBET00gZXZlbnQgdGhhdCBuZWVkcyB0byBiZSBoYW5kbGVkXG4gKi9cbmZ1bmN0aW9uIGhhbmRsZURvY3VtZW50S2V5dXAoZSkge1xuICAvLyBrZXlDb2RlIGlzIGRlcHJlY2F0ZWQsIHNvIHByZWZlciB0aGUgbmV3ZXIgXCJrZXlcIiBtZXRob2QgaWYgcG9zc2libGVcbiAgbGV0IGtleVRlc3Q7XG4gIGlmIChlLmtleSkge1xuICAgIGtleVRlc3QgPSBlLmtleS50b0xvd2VyQ2FzZSgpID09PSAnZGVsZXRlJyB8fCBlLmtleS50b0xvd2VyQ2FzZSgpID09PSAnYmFja3NwYWNlJztcbiAgfVxuICBlbHNlIHtcbiAgICBrZXlUZXN0ID0gZS5rZXlDb2RlID09PSA4IHx8IGUua2V5Q29kZSA9PT0gNDY7XG4gIH1cbiAgaWYgKG92ZXJsYXkgJiYga2V5VGVzdCAmJlxuICAgICAgZS50YXJnZXQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSAhPT0gJ3RleHRhcmVhJyAmJlxuICAgICAgZS50YXJnZXQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSAhPT0gJ2lucHV0Jykge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBkZWxldGVBbm5vdGF0aW9uKCk7XG4gIH1cbn1cblxuLyoqXG4gKiBIYW5kbGUgZG9jdW1lbnQubW91c2Vkb3duIGV2ZW50XG4gKlxuICogQHBhcmFtIHtFdmVudH0gZSBUaGUgRE9NIGV2ZW50IHRoYXQgbmVlZHMgdG8gYmUgaGFuZGxlZFxuICovXG5mdW5jdGlvbiBoYW5kbGVEb2N1bWVudE1vdXNlZG93bihlKSB7XG4gIGlmIChlLnRhcmdldCAhPT0gb3ZlcmxheSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIEhpZ2hsaWdodCBhbmQgc3RyaWtlb3V0IGFubm90YXRpb25zIGFyZSBib3VuZCB0byB0ZXh0IHdpdGhpbiB0aGUgZG9jdW1lbnQuXG4gIC8vIEl0IGRvZXNuJ3QgbWFrZSBzZW5zZSB0byBhbGxvdyByZXBvc2l0aW9uaW5nIHRoZXNlIHR5cGVzIG9mIGFubm90YXRpb25zLlxuICBsZXQgYW5ub3RhdGlvbklkID0gb3ZlcmxheS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0LWlkJyk7XG4gIGxldCB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1wZGYtYW5ub3RhdGUtaWQ9XCIke2Fubm90YXRpb25JZH1cIl1gKTtcbiAgbGV0IHR5cGUgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXBkZi1hbm5vdGF0ZS10eXBlJyk7XG5cbiAgaWYgKHR5cGUgPT09ICdoaWdobGlnaHQnIHx8IHR5cGUgPT09ICdzdHJpa2VvdXQnKSB7IHJldHVybjsgfVxuXG4gIGlzRHJhZ2dpbmcgPSB0cnVlO1xuICBkcmFnT2Zmc2V0WCA9IGUuY2xpZW50WDtcbiAgZHJhZ09mZnNldFkgPSBlLmNsaWVudFk7XG4gIGRyYWdTdGFydFggPSBvdmVybGF5Lm9mZnNldExlZnQ7XG4gIGRyYWdTdGFydFkgPSBvdmVybGF5Lm9mZnNldFRvcDtcblxuICBvdmVybGF5LnN0eWxlLmJhY2tncm91bmQgPSAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpJztcbiAgb3ZlcmxheS5zdHlsZS5jdXJzb3IgPSAnbW92ZSc7XG4gIG92ZXJsYXkucXVlcnlTZWxlY3RvcignYScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgaGFuZGxlRG9jdW1lbnRNb3VzZW1vdmUpO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgaGFuZGxlRG9jdW1lbnRNb3VzZXVwKTtcbiAgZGlzYWJsZVVzZXJTZWxlY3QoKTtcbn1cblxuLyoqXG4gKiBIYW5kbGUgZG9jdW1lbnQubW91c2Vtb3ZlIGV2ZW50XG4gKlxuICogQHBhcmFtIHtFdmVudH0gZSBUaGUgRE9NIGV2ZW50IHRoYXQgbmVlZHMgdG8gYmUgaGFuZGxlZFxuICovXG5mdW5jdGlvbiBoYW5kbGVEb2N1bWVudE1vdXNlbW92ZShlKSB7XG4gIGxldCBwYXJlbnROb2RlID0gb3ZlcmxheS5wYXJlbnROb2RlO1xuICBsZXQgcmVjdCA9IHBhcmVudE5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIGxldCB5ID0gKGRyYWdTdGFydFkgKyAoZS5jbGllbnRZIC0gZHJhZ09mZnNldFkpKTtcbiAgbGV0IHggPSAoZHJhZ1N0YXJ0WCArIChlLmNsaWVudFggLSBkcmFnT2Zmc2V0WCkpO1xuICBsZXQgbWluWSA9IDA7XG4gIGxldCBtYXhZID0gcmVjdC5oZWlnaHQ7XG4gIGxldCBtaW5YID0gMDtcbiAgbGV0IG1heFggPSByZWN0LndpZHRoO1xuXG4gIGlmICh5ID4gbWluWSAmJiB5ICsgb3ZlcmxheS5vZmZzZXRIZWlnaHQgPCBtYXhZKSB7XG4gICAgb3ZlcmxheS5zdHlsZS50b3AgPSBgJHt5fXB4YDtcbiAgfVxuXG4gIGlmICh4ID4gbWluWCAmJiB4ICsgb3ZlcmxheS5vZmZzZXRXaWR0aCA8IG1heFgpIHtcbiAgICBvdmVybGF5LnN0eWxlLmxlZnQgPSBgJHt4fXB4YDtcbiAgfVxufVxuXG4vKipcbiAqIEhhbmRsZSBkb2N1bWVudC5tb3VzZXVwIGV2ZW50XG4gKlxuICogQHBhcmFtIHtFdmVudH0gZSBUaGUgRE9NIGV2ZW50IHRoYXQgbmVlZHMgdG8gYmUgaGFuZGxlZFxuICovXG5mdW5jdGlvbiBoYW5kbGVEb2N1bWVudE1vdXNldXAoZSkge1xuICBsZXQgYW5ub3RhdGlvbklkID0gb3ZlcmxheS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0LWlkJyk7XG4gIGxldCB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS1wZGYtYW5ub3RhdGUtaWQ9XCIke2Fubm90YXRpb25JZH1cIl1gKTtcbiAgbGV0IHR5cGUgPSB0YXJnZXRbMF0uZ2V0QXR0cmlidXRlKCdkYXRhLXBkZi1hbm5vdGF0ZS10eXBlJyk7XG4gIGxldCBzdmcgPSBvdmVybGF5LnBhcmVudE5vZGUucXVlcnlTZWxlY3Rvcihjb25maWcuYW5ub3RhdGlvblN2Z1F1ZXJ5KCkpO1xuICBsZXQgeyBkb2N1bWVudElkIH0gPSBnZXRNZXRhZGF0YShzdmcpO1xuXG4gIG92ZXJsYXkucXVlcnlTZWxlY3RvcignYScpLnN0eWxlLmRpc3BsYXkgPSAnJztcblxuICBQREZKU0Fubm90YXRlLmdldFN0b3JlQWRhcHRlcigpLmdldEFubm90YXRpb24oZG9jdW1lbnRJZCwgYW5ub3RhdGlvbklkKS50aGVuKChhbm5vdGF0aW9uKSA9PiB7XG4gICAgbGV0IGF0dHJpYlggPSAneCc7XG4gICAgbGV0IGF0dHJpYlkgPSAneSc7XG4gICAgaWYgKFsnY2lyY2xlJywgJ2ZpbGxjaXJjbGUnLCAnZW1wdHljaXJjbGUnXS5pbmRleE9mKHR5cGUpID4gLTEpIHtcbiAgICAgIGF0dHJpYlggPSAnY3gnO1xuICAgICAgYXR0cmliWSA9ICdjeSc7XG4gICAgfVxuXG4gICAgaWYgKHR5cGUgPT09ICdwb2ludCcpIHtcbiAgICAgIC8vIEJyb2tlblxuICAgICAgLypcbiAgICAgIFsuLi50YXJnZXRdLmZvckVhY2goKHQsIGkpID0+IHtcbiAgICAgICAgbGV0IG1vdmVUbyA9IHtcbiAgICAgICAgICB4OiBvdmVybGF5Lm9mZnNldExlZnQgKyAzLFxuICAgICAgICAgIHk6IG92ZXJsYXkub2Zmc2V0VG9wICsgM1xuICAgICAgICB9O1xuICAgICAgICB0LnNldEF0dHJpYnV0ZShhdHRyaWJYLCBtb3ZlVG8ueCk7XG4gICAgICAgIHQuc2V0QXR0cmlidXRlKGF0dHJpYlksIG1vdmVUby55KTtcbiAgICAgICAgYW5ub3RhdGlvblthdHRyaWJYXSA9IG1vdmVUby54O1xuICAgICAgICBhbm5vdGF0aW9uW2F0dHJpYlldID0gbW92ZVRvLnk7XG4gICAgICB9KTtcbiAgICAgICovXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGVsc2UgaWYgKFsnYXJlYScsICdoaWdobGlnaHQnLCAndGV4dGJveCcsICdjaXJjbGUnLCAnZmlsbGNpcmNsZScsICdlbXB0eWNpcmNsZSddLmluZGV4T2YodHlwZSkgPiAtMSkge1xuICAgICAgbGV0IG1vZGVsU3RhcnQgPSBjb252ZXJ0VG9TdmdQb2ludChbZHJhZ1N0YXJ0WCwgZHJhZ1N0YXJ0WV0sIHN2Zyk7XG4gICAgICBsZXQgbW9kZWxFbmQgPSBjb252ZXJ0VG9TdmdQb2ludChbb3ZlcmxheS5vZmZzZXRMZWZ0LCBvdmVybGF5Lm9mZnNldFRvcF0sIHN2Zyk7XG4gICAgICBsZXQgbW9kZWxEZWx0YSA9IHtcbiAgICAgICAgeDogbW9kZWxFbmRbMF0gLSBtb2RlbFN0YXJ0WzBdLFxuICAgICAgICB5OiBtb2RlbEVuZFsxXSAtIG1vZGVsU3RhcnRbMV1cbiAgICAgIH07XG5cbiAgICAgIGlmICh0eXBlID09PSAndGV4dGJveCcpIHtcbiAgICAgICAgdGFyZ2V0ID0gW3RhcmdldFswXS5maXJzdENoaWxkXTtcbiAgICAgIH1cblxuICAgICAgWy4uLnRhcmdldF0uZm9yRWFjaCgodCwgaSkgPT4ge1xuICAgICAgICBsZXQgbW9kZWxYID0gcGFyc2VJbnQodC5nZXRBdHRyaWJ1dGUoYXR0cmliWCksIDEwKTtcbiAgICAgICAgbGV0IG1vZGVsWSA9IHBhcnNlSW50KHQuZ2V0QXR0cmlidXRlKGF0dHJpYlkpLCAxMCk7XG4gICAgICAgIGlmIChtb2RlbERlbHRhLnkgIT09IDApIHtcbiAgICAgICAgICBtb2RlbFkgPSBtb2RlbFkgKyBtb2RlbERlbHRhLnk7XG5cbiAgICAgICAgICB0LnNldEF0dHJpYnV0ZShhdHRyaWJZLCBtb2RlbFkpO1xuICAgICAgICAgIGlmIChhbm5vdGF0aW9uLnJlY3RhbmdsZXMgJiYgaSA8IGFubm90YXRpb24ucmVjdGFuZ2xlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGFubm90YXRpb24ucmVjdGFuZ2xlc1tpXS55ID0gbW9kZWxZO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmIChhbm5vdGF0aW9uW2F0dHJpYlldKSB7XG4gICAgICAgICAgICBhbm5vdGF0aW9uW2F0dHJpYlldID0gbW9kZWxZO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobW9kZWxEZWx0YS54ICE9PSAwKSB7XG4gICAgICAgICAgbW9kZWxYID0gbW9kZWxYICsgbW9kZWxEZWx0YS54O1xuXG4gICAgICAgICAgdC5zZXRBdHRyaWJ1dGUoYXR0cmliWCwgbW9kZWxYKTtcbiAgICAgICAgICBpZiAoYW5ub3RhdGlvbi5yZWN0YW5nbGVzICYmIGkgPCBhbm5vdGF0aW9uLnJlY3RhbmdsZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBhbm5vdGF0aW9uLnJlY3RhbmdsZXNbaV0ueCA9IG1vZGVsWDtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZiAoYW5ub3RhdGlvblthdHRyaWJYXSkge1xuICAgICAgICAgICAgYW5ub3RhdGlvblthdHRyaWJYXSA9IG1vZGVsWDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAnc3RyaWtlb3V0Jykge1xuICAgICAgcmV0dXJuO1xuICAgIC8vICAgbGV0IHsgZGVsdGFYLCBkZWx0YVkgfSA9IGdldERlbHRhKCd4MScsICd5MScpO1xuICAgIC8vICAgWy4uLnRhcmdldF0uZm9yRWFjaCh0YXJnZXQsICh0LCBpKSA9PiB7XG4gICAgLy8gICAgIGlmIChkZWx0YVkgIT09IDApIHtcbiAgICAvLyAgICAgICB0LnNldEF0dHJpYnV0ZSgneTEnLCBwYXJzZUludCh0LmdldEF0dHJpYnV0ZSgneTEnKSwgMTApICsgZGVsdGFZKTtcbiAgICAvLyAgICAgICB0LnNldEF0dHJpYnV0ZSgneTInLCBwYXJzZUludCh0LmdldEF0dHJpYnV0ZSgneTInKSwgMTApICsgZGVsdGFZKTtcbiAgICAvLyAgICAgICBhbm5vdGF0aW9uLnJlY3RhbmdsZXNbaV0ueSA9IHBhcnNlSW50KHQuZ2V0QXR0cmlidXRlKCd5MScpLCAxMCk7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgaWYgKGRlbHRhWCAhPT0gMCkge1xuICAgIC8vICAgICAgIHQuc2V0QXR0cmlidXRlKCd4MScsIHBhcnNlSW50KHQuZ2V0QXR0cmlidXRlKCd4MScpLCAxMCkgKyBkZWx0YVgpO1xuICAgIC8vICAgICAgIHQuc2V0QXR0cmlidXRlKCd4MicsIHBhcnNlSW50KHQuZ2V0QXR0cmlidXRlKCd4MicpLCAxMCkgKyBkZWx0YVgpO1xuICAgIC8vICAgICAgIGFubm90YXRpb24ucmVjdGFuZ2xlc1tpXS54ID0gcGFyc2VJbnQodC5nZXRBdHRyaWJ1dGUoJ3gxJyksIDEwKTtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgfSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdkcmF3aW5nJyB8fCB0eXBlID09PSAnYXJyb3cnKSB7XG4gICAgICAvLyBEbyBub3RoaW5nIGFzIGN1cnJlbnRseSBicm9rZW5cbiAgICAgIC8qXG4gICAgICBsZXQgbW9kZWxTdGFydCA9IGNvbnZlcnRUb1N2Z1BvaW50KFtkcmFnU3RhcnRYLCBkcmFnU3RhcnRZXSwgc3ZnKTtcbiAgICAgIGxldCBtb2RlbEVuZCA9IGNvbnZlcnRUb1N2Z1BvaW50KFtvdmVybGF5Lm9mZnNldExlZnQsIG92ZXJsYXkub2Zmc2V0VG9wXSwgc3ZnKTtcbiAgICAgIGxldCBtb2RlbERlbHRhID0ge1xuICAgICAgICB4OiBtb2RlbEVuZFswXSAtIG1vZGVsU3RhcnRbMF0sXG4gICAgICAgIHk6IG1vZGVsRW5kWzFdIC0gbW9kZWxTdGFydFsxXVxuICAgICAgfTtcblxuICAgICAgYW5ub3RhdGlvbi5saW5lcy5mb3JFYWNoKChsaW5lLCBpKSA9PiB7XG4gICAgICAgIGxldCBbeCwgeV0gPSBhbm5vdGF0aW9uLmxpbmVzW2ldO1xuICAgICAgICBhbm5vdGF0aW9uLmxpbmVzW2ldWzBdID0geCArIG1vZGVsRGVsdGEueDtcbiAgICAgICAgYW5ub3RhdGlvbi5saW5lc1tpXVsxXSA9IHkgKyBtb2RlbERlbHRhLnk7XG4gICAgICB9KTtcblxuICAgICAgdGFyZ2V0WzBdLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGFyZ2V0WzBdKTtcbiAgICAgIGFwcGVuZENoaWxkKHN2ZywgYW5ub3RhdGlvbik7XG4gICAgICAqL1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIFBERkpTQW5ub3RhdGUuZ2V0U3RvcmVBZGFwdGVyKCkuZWRpdEFubm90YXRpb24oZG9jdW1lbnRJZCwgYW5ub3RhdGlvbklkLCBhbm5vdGF0aW9uKTtcbiAgfSk7XG5cbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgaXNEcmFnZ2luZyA9IGZhbHNlO1xuICB9LCAwKTtcblxuICBvdmVybGF5LnN0eWxlLmJhY2tncm91bmQgPSAnJztcbiAgb3ZlcmxheS5zdHlsZS5jdXJzb3IgPSAnJztcblxuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBoYW5kbGVEb2N1bWVudE1vdXNlbW92ZSk7XG4gIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBoYW5kbGVEb2N1bWVudE1vdXNldXApO1xuICBlbmFibGVVc2VyU2VsZWN0KCk7XG59XG5cbi8qKlxuICogSGFuZGxlIGFubm90YXRpb24uY2xpY2sgZXZlbnRcbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGUgVGhlIGFubm90YXRpb24gZWxlbWVudCB0aGF0IHdhcyBjbGlja2VkXG4gKi9cbmZ1bmN0aW9uIGhhbmRsZUFubm90YXRpb25DbGljayh0YXJnZXQpIHtcbiAgY3JlYXRlRWRpdE92ZXJsYXkodGFyZ2V0KTtcbn1cblxuLyoqXG4gKiBFbmFibGUgZWRpdCBtb2RlIGJlaGF2aW9yLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZW5hYmxlRWRpdCgpIHtcbiAgaWYgKF9lbmFibGVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgX2VuYWJsZWQgPSB0cnVlO1xuICBhZGRFdmVudExpc3RlbmVyKCdhbm5vdGF0aW9uOmNsaWNrJywgaGFuZGxlQW5ub3RhdGlvbkNsaWNrKTtcbn07XG5cbi8qKlxuICogRGlzYWJsZSBlZGl0IG1vZGUgYmVoYXZpb3IuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaXNhYmxlRWRpdCgpIHtcbiAgZGVzdHJveUVkaXRPdmVybGF5KCk7XG5cbiAgaWYgKCFfZW5hYmxlZCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIF9lbmFibGVkID0gZmFsc2U7XG4gIHJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Fubm90YXRpb246Y2xpY2snLCBoYW5kbGVBbm5vdGF0aW9uQ2xpY2spO1xufTtcblxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICBhbm5vdGF0aW9uTGF5ZXJOYW1lOiAnYW5ub3RhdGlvbkxheWVyJyxcbiAgdGV4dExheWVyTmFtZTogJ3RleHRMYXllcicsXG4gIGFubm90YXRpb25TdmdRdWVyeTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuICdzdmcuJyArIHRoaXMuYW5ub3RhdGlvbkxheWVyTmFtZTtcbiAgfSxcbiAgYW5ub3RhdGlvbkNsYXNzUXVlcnk6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAnLicgKyB0aGlzLmFubm90YXRpb25MYXllck5hbWU7XG4gIH0sXG4gIHRleHRDbGFzc1F1ZXJ5OiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gJy4nICsgdGhpcy50ZXh0TGF5ZXJOYW1lO1xuICB9XG59O1xuIiwiaW1wb3J0IFBERkpTQW5ub3RhdGUgZnJvbSAnLi4vUERGSlNBbm5vdGF0ZSc7XG5pbXBvcnQgeyBhcHBlbmRDaGlsZCB9IGZyb20gJy4uL3JlbmRlci9hcHBlbmRDaGlsZCc7XG5pbXBvcnQge1xuICBkaXNhYmxlVXNlclNlbGVjdCxcbiAgZW5hYmxlVXNlclNlbGVjdCxcbiAgZmluZFNWR0F0UG9pbnQsXG4gIGdldE1ldGFkYXRhLFxuICBjb252ZXJ0VG9TdmdQb2ludFxufSBmcm9tICcuL3V0aWxzJztcblxubGV0IF9lbmFibGVkID0gZmFsc2U7XG5sZXQgX2NhbmRyYXcgPSBmYWxzZTtcbmxldCBfcGVuU2l6ZTtcbmxldCBfcGVuQ29sb3I7XG5sZXQgcGF0aDtcbmxldCBsaW5lcyA9IFtdO1xuXG4vKipcbiAqIEhhbmRsZSBkb2N1bWVudC50b3VjaGRvd24gb3IgZG9jdW1lbnQucG9pbnRlcmRvd24gZXZlbnRcbiAqIEBwYXJhbSB7UG9pbnRlckV2ZW50fSBlIFRoZSBET00gZXZlbnQgdG8gYmUgaGFuZGxlZFxuICovXG5mdW5jdGlvbiBoYW5kbGVEb2N1bWVudFBvaW50ZXJkb3duKGUpIHtcbiAgcGF0aCA9IG51bGw7XG4gIGxpbmVzID0gW107XG4gIF9jYW5kcmF3ID0gdHJ1ZTtcbiAgLyogaWYgKCFlLnNyY0VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhbm5vdGF0aW9uTGF5ZXInKSkge1xuICAgIHJldHVybjtcbiAgfSAqL1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG59XG5cbi8qKlxuICogSGFuZGxlIGRvY3VtZW50LnBvaW50ZXJ1cCBldmVudFxuICpcbiAqIEBwYXJhbSB7UG9pbnRlckV2ZW50fSBlIFRoZSBET00gZXZlbnQgdG8gYmUgaGFuZGxlZFxuICovXG5mdW5jdGlvbiBoYW5kbGVEb2N1bWVudFBvaW50ZXJ1cChlKSB7XG4gIHNhdmVUb1N0b3JhZ2UoZS5jbGllbnRYLCBlLmNsaWVudFkpO1xufVxuXG5mdW5jdGlvbiBzYXZlVG9TdG9yYWdlKHgsIHkpIHtcbiAgX2NhbmRyYXcgPSBmYWxzZTtcbiAgbGV0IHN2ZztcbiAgaWYgKGxpbmVzLmxlbmd0aCA+IDEgJiYgKHN2ZyA9IGZpbmRTVkdBdFBvaW50KHgsIHkpKSkge1xuICAgIGxldCB7IGRvY3VtZW50SWQsIHBhZ2VOdW1iZXIgfSA9IGdldE1ldGFkYXRhKHN2Zyk7XG4gICAgUERGSlNBbm5vdGF0ZS5nZXRTdG9yZUFkYXB0ZXIoKS5hZGRBbm5vdGF0aW9uKGRvY3VtZW50SWQsIHBhZ2VOdW1iZXIsIHtcbiAgICAgIHR5cGU6ICdkcmF3aW5nJyxcbiAgICAgIHdpZHRoOiBfcGVuU2l6ZSxcbiAgICAgIGNvbG9yOiBfcGVuQ29sb3IsXG4gICAgICBsaW5lc1xuICAgIH0pLnRoZW4oKGFubm90YXRpb24pID0+IHtcbiAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgIHN2Zy5yZW1vdmVDaGlsZChwYXRoKTtcbiAgICAgIH1cblxuICAgICAgYXBwZW5kQ2hpbGQoc3ZnLCBhbm5vdGF0aW9uKTtcbiAgICB9KTtcbiAgfVxufVxuXG4vKipcbiAqIEhhbmRsZSBkb2N1bWVudC5tb3VzZW1vdmUgZXZlbnRcbiAqXG4gKiBAcGFyYW0ge1BvaW50ZXJFdmVudH0gZSBUaGUgRE9NIGV2ZW50IHRvIGJlIGhhbmRsZWRcbiAqL1xuZnVuY3Rpb24gaGFuZGxlRG9jdW1lbnRQb2ludGVybW92ZShlKSB7XG4gIGlmIChfY2FuZHJhdykge1xuICAgIHNhdmVQb2ludChlLmNsaWVudFgsIGUuY2xpZW50WSk7XG4gIH1cbn1cblxuLyoqXG4gKiBIYW5kbGUgZG9jdW1lbnQua2V5dXAgZXZlbnRcbiAqXG4gKiBAcGFyYW0ge0tleWJvYXJkRXZlbnR9IGUgVGhlIERPTSBldmVudCB0byBiZSBoYW5kbGVkXG4gKiB9IGUgVGhlIERPTSBldmVudCB0byBiZSBoYW5kbGVkXG4gKi9cbmZ1bmN0aW9uIGhhbmRsZURvY3VtZW50S2V5dXAoZSkge1xuICAvLyBDYW5jZWwgcmVjdCBpZiBFc2MgaXMgcHJlc3NlZFxuICBpZiAoZS5rZXlDb2RlID09PSAyNykge1xuICAgIGxpbmVzID0gbnVsbDtcbiAgICBwYXRoLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocGF0aCk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9pbnRlcm1vdmUnLCBoYW5kbGVEb2N1bWVudFBvaW50ZXJtb3ZlKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdwb2ludGVydXAnLCBoYW5kbGVEb2N1bWVudFBvaW50ZXJ1cCk7XG4gIH1cbn1cblxuLyoqXG4gKiBTYXZlIGEgcG9pbnQgdG8gdGhlIGxpbmUgYmVpbmcgZHJhd24uXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHggVGhlIHggY29vcmRpbmF0ZSBvZiB0aGUgcG9pbnRcbiAqIEBwYXJhbSB7TnVtYmVyfSB5IFRoZSB5IGNvb3JkaW5hdGUgb2YgdGhlIHBvaW50XG4gKi9cbmZ1bmN0aW9uIHNhdmVQb2ludCh4LCB5KSB7XG4gIGxldCBzdmcgPSBmaW5kU1ZHQXRQb2ludCh4LCB5KTtcbiAgaWYgKCFzdmcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBsZXQgcmVjdCA9IHN2Zy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgbGV0IHBvaW50ID0gY29udmVydFRvU3ZnUG9pbnQoW1xuICAgIHggLSByZWN0LmxlZnQsXG4gICAgeSAtIHJlY3QudG9wXG4gIF0sIHN2Zyk7XG4gIHBvaW50WzBdID0gcG9pbnRbMF0udG9GaXhlZCgyKTtcbiAgcG9pbnRbMV0gPSBwb2ludFsxXS50b0ZpeGVkKDIpO1xuICBsaW5lcy5wdXNoKHBvaW50KTtcblxuICBpZiAobGluZXMubGVuZ3RoIDw9IDEpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAocGF0aCkge1xuICAgIHN2Zy5yZW1vdmVDaGlsZChwYXRoKTtcbiAgfVxuXG4gIHBhdGggPSBhcHBlbmRDaGlsZChzdmcsIHtcbiAgICB0eXBlOiAnZHJhd2luZycsXG4gICAgY29sb3I6IF9wZW5Db2xvcixcbiAgICB3aWR0aDogX3BlblNpemUsXG4gICAgbGluZXNcbiAgfSk7XG59XG5cbi8qKlxuICogU2V0IHRoZSBhdHRyaWJ1dGVzIG9mIHRoZSBwZW4uXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHBlblNpemUgVGhlIHNpemUgb2YgdGhlIGxpbmVzIGRyYXduIGJ5IHRoZSBwZW4sIHJvdW5kZWQgdG8gMiBkZWNpbWFsIHBsYWNlc1xuICogQHBhcmFtIHtTdHJpbmd9IHBlbkNvbG9yIFRoZSBjb2xvciBvZiB0aGUgbGluZXMgZHJhd24gYnkgdGhlIHBlblxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0UGVuKHBlblNpemUgPSAxLCBwZW5Db2xvciA9ICcwMDAwMDAnKSB7XG4gIF9wZW5TaXplID0gTWF0aC5yb3VuZChwYXJzZUZsb2F0KHBlblNpemUpICogMWUyKSAvIDFlMjtcbiAgX3BlbkNvbG9yID0gcGVuQ29sb3I7XG59XG5cbi8qKlxuICogUmV0dXJuIHBlbiBhdHRyaWJ1dGVzIG9mIHRoZSBwZW5cbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R9IE9iamVjdCB3aXRoIHNpemUgYW5kIGNvbG9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRQZW4oKSB7XG4gIHJldHVybiB7XG4gICAgc2l6ZTogX3BlblNpemUsXG4gICAgY29sb3I6IF9wZW5Db2xvclxuICB9O1xufVxuXG4vKipcbiAqIEVuYWJsZSB0aGUgcGVuIGJlaGF2aW9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlbmFibGVQZW4oKSB7XG4gIGlmIChfZW5hYmxlZCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIF9lbmFibGVkID0gdHJ1ZTtcbiAgLy8gQ2hyb21lIGFuZCBGaXJlZm94IGhhcyBkaWZmZXJlbnQgYmVoYXZpb3JzIHdpdGggaG93IHBlbiB3b3Jrcywgc28gd2UgbmVlZCBkaWZmZXJlbnQgZXZlbnRzLlxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsIGhhbmRsZURvY3VtZW50UG9pbnRlcmRvd24pO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVybW92ZScsIGhhbmRsZURvY3VtZW50UG9pbnRlcm1vdmUpO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVydXAnLCBoYW5kbGVEb2N1bWVudFBvaW50ZXJ1cCk7XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBoYW5kbGVEb2N1bWVudEtleXVwKTtcbiAgZGlzYWJsZVVzZXJTZWxlY3QoKTtcbn1cblxuLyoqXG4gKiBEaXNhYmxlIHRoZSBwZW4gYmVoYXZpb3JcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpc2FibGVQZW4oKSB7XG4gIGlmICghX2VuYWJsZWQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBfZW5hYmxlZCA9IGZhbHNlO1xuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsIGhhbmRsZURvY3VtZW50UG9pbnRlcmRvd24pO1xuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdwb2ludGVybW92ZScsIGhhbmRsZURvY3VtZW50UG9pbnRlcm1vdmUpO1xuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdwb2ludGVydXAnLCBoYW5kbGVEb2N1bWVudFBvaW50ZXJ1cCk7XG5cbiAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBoYW5kbGVEb2N1bWVudEtleXVwKTtcbiAgZW5hYmxlVXNlclNlbGVjdCgpO1xufVxuIiwiaW1wb3J0IFBERkpTQW5ub3RhdGUgZnJvbSAnLi4vUERGSlNBbm5vdGF0ZSc7XG5pbXBvcnQgeyBhcHBlbmRDaGlsZCB9IGZyb20gJy4uL3JlbmRlci9hcHBlbmRDaGlsZCc7XG5pbXBvcnQge1xuICBkaXNhYmxlVXNlclNlbGVjdCxcbiAgZW5hYmxlVXNlclNlbGVjdCxcbiAgZmluZFNWR0F0UG9pbnQsXG4gIGZpbmRTVkdDb250YWluZXIsXG4gIGdldE1ldGFkYXRhLFxuICBjb252ZXJ0VG9TdmdQb2ludCxcbiAgY29udmVydFRvU2NyZWVuUG9pbnQsXG4gIGZpbmRBbm5vdGF0aW9uQXRQb2ludFxufSBmcm9tICcuL3V0aWxzJztcblxubGV0IF9lbmFibGVkID0gZmFsc2U7XG5sZXQgX3BlblNpemU7XG5sZXQgX3BlbkNvbG9yO1xubGV0IHBhdGg7XG5sZXQgbGluZXM7XG5sZXQgb3JpZ2luWTtcbmxldCBvcmlnaW5YO1xuXG4vKipcbiAqIEhhbmRsZSBkb2N1bWVudC5tb3VzZWRvd24gZXZlbnRcbiAqL1xuZnVuY3Rpb24gaGFuZGxlRG9jdW1lbnRNb3VzZWRvd24oZSkge1xuICBsZXQgdGFyZ2V0ID0gZmluZEFubm90YXRpb25BdFBvaW50KGUuY2xpZW50WCwgZS5jbGllbnRZKTtcbiAgaWYgKHRhcmdldCA9PT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGxldCB0eXBlID0gdGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1wZGYtYW5ub3RhdGUtdHlwZScpO1xuICBpZiAodHlwZSAhPT0gJ2NpcmNsZScgJiYgdHlwZSAhPT0gJ2ZpbGxjaXJjbGUnICYmIHR5cGUgIT09ICdlbXB0eWNpcmNsZScpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBsZXQgc3ZnID0gZmluZFNWR0NvbnRhaW5lcih0YXJnZXQpO1xuICBsZXQgeyBkb2N1bWVudElkIH0gPSBnZXRNZXRhZGF0YShzdmcpO1xuICBsZXQgYW5ub3RhdGlvbklkID0gdGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1wZGYtYW5ub3RhdGUtaWQnKTtcblxuICBQREZKU0Fubm90YXRlLmdldFN0b3JlQWRhcHRlcigpLmdldEFubm90YXRpb24oZG9jdW1lbnRJZCwgYW5ub3RhdGlvbklkKS50aGVuKChhbm5vdGF0aW9uKSA9PiB7XG4gICAgaWYgKGFubm90YXRpb24pIHtcbiAgICAgIHBhdGggPSBudWxsO1xuICAgICAgbGluZXMgPSBbXTtcblxuICAgICAgbGV0IHBvaW50ID0gY29udmVydFRvU2NyZWVuUG9pbnQoW1xuICAgICAgICBhbm5vdGF0aW9uLmN4LFxuICAgICAgICBhbm5vdGF0aW9uLmN5XG4gICAgICBdLCBzdmcpO1xuXG4gICAgICBsZXQgcmVjdCA9IHN2Zy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgb3JpZ2luWCA9IHBvaW50WzBdICsgcmVjdC5sZWZ0O1xuICAgICAgb3JpZ2luWSA9IHBvaW50WzFdICsgcmVjdC50b3A7XG5cbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGhhbmRsZURvY3VtZW50TW91c2Vtb3ZlKTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBoYW5kbGVEb2N1bWVudE1vdXNldXApO1xuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogSGFuZGxlIGRvY3VtZW50Lm1vdXNldXAgZXZlbnRcbiAqXG4gKiBAcGFyYW0ge0V2ZW50fSBlIFRoZSBET00gZXZlbnQgdG8gYmUgaGFuZGxlZFxuICovXG5mdW5jdGlvbiBoYW5kbGVEb2N1bWVudE1vdXNldXAoZSkge1xuICBsZXQgc3ZnO1xuICBpZiAobGluZXMubGVuZ3RoID4gMSAmJiAoc3ZnID0gZmluZFNWR0F0UG9pbnQoZS5jbGllbnRYLCBlLmNsaWVudFkpKSkge1xuICAgIGxldCB7IGRvY3VtZW50SWQsIHBhZ2VOdW1iZXIgfSA9IGdldE1ldGFkYXRhKHN2Zyk7XG5cbiAgICBQREZKU0Fubm90YXRlLmdldFN0b3JlQWRhcHRlcigpLmFkZEFubm90YXRpb24oZG9jdW1lbnRJZCwgcGFnZU51bWJlciwge1xuICAgICAgdHlwZTogJ2Fycm93JyxcbiAgICAgIHdpZHRoOiBfcGVuU2l6ZSxcbiAgICAgIGNvbG9yOiBfcGVuQ29sb3IsXG4gICAgICBsaW5lc1xuICAgIH0pLnRoZW4oKGFubm90YXRpb24pID0+IHtcbiAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgIHN2Zy5yZW1vdmVDaGlsZChwYXRoKTtcbiAgICAgIH1cblxuICAgICAgYXBwZW5kQ2hpbGQoc3ZnLCBhbm5vdGF0aW9uKTtcbiAgICB9KTtcbiAgfVxuXG4gIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGhhbmRsZURvY3VtZW50TW91c2Vtb3ZlKTtcbiAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGhhbmRsZURvY3VtZW50TW91c2V1cCk7XG59XG5cbi8qKlxuICogSGFuZGxlIGRvY3VtZW50Lm1vdXNlbW92ZSBldmVudFxuICpcbiAqIEBwYXJhbSB7RXZlbnR9IGUgVGhlIERPTSBldmVudCB0byBiZSBoYW5kbGVkXG4gKi9cbmZ1bmN0aW9uIGhhbmRsZURvY3VtZW50TW91c2Vtb3ZlKGUpIHtcbiAgbGV0IHggPSBsaW5lcy5sZW5ndGggPT09IDAgPyBvcmlnaW5YIDogZS5jbGllbnRYO1xuICBsZXQgeSA9IGxpbmVzLmxlbmd0aCA9PT0gMCA/IG9yaWdpblkgOiBlLmNsaWVudFk7XG5cbiAgc2F2ZVBvaW50KHgsIHkpO1xufVxuXG4vKipcbiAqIEhhbmRsZSBkb2N1bWVudC5rZXl1cCBldmVudFxuICpcbiAqIEBwYXJhbSB7RXZlbnR9IGUgVGhlIERPTSBldmVudCB0byBiZSBoYW5kbGVkXG4gKi9cbmZ1bmN0aW9uIGhhbmRsZURvY3VtZW50S2V5dXAoZSkge1xuICAvLyBDYW5jZWwgcmVjdCBpZiBFc2MgaXMgcHJlc3NlZFxuICBpZiAoZS5rZXlDb2RlID09PSAyNykge1xuICAgIGxpbmVzID0gbnVsbDtcbiAgICBwYXRoLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocGF0aCk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgaGFuZGxlRG9jdW1lbnRNb3VzZW1vdmUpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBoYW5kbGVEb2N1bWVudE1vdXNldXApO1xuICB9XG59XG5cbi8qKlxuICogU2F2ZSBhIHBvaW50IHRvIHRoZSBsaW5lIGJlaW5nIGRyYXduLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSB4IFRoZSB4IGNvb3JkaW5hdGUgb2YgdGhlIHBvaW50XG4gKiBAcGFyYW0ge051bWJlcn0geSBUaGUgeSBjb29yZGluYXRlIG9mIHRoZSBwb2ludFxuICovXG5mdW5jdGlvbiBzYXZlUG9pbnQoeCwgeSkge1xuICBsZXQgc3ZnID0gZmluZFNWR0F0UG9pbnQoeCwgeSk7XG4gIGlmICghc3ZnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbGV0IHJlY3QgPSBzdmcuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIGxldCBwb2ludCA9IGNvbnZlcnRUb1N2Z1BvaW50KFtcbiAgICB4IC0gcmVjdC5sZWZ0LFxuICAgIHkgLSByZWN0LnRvcFxuICBdLCBzdmcpO1xuXG4gIGlmIChsaW5lcy5sZW5ndGggPCAyKSB7XG4gICAgbGluZXMucHVzaChwb2ludCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGVsc2Uge1xuICAgIGxpbmVzWzFdID0gcG9pbnQ7IC8vIHVwZGF0ZSBlbmQgcG9pbnRcbiAgfVxuXG4gIGlmIChwYXRoKSB7XG4gICAgc3ZnLnJlbW92ZUNoaWxkKHBhdGgpO1xuICB9XG5cbiAgcGF0aCA9IGFwcGVuZENoaWxkKHN2Zywge1xuICAgIHR5cGU6ICdhcnJvdycsXG4gICAgY29sb3I6IF9wZW5Db2xvcixcbiAgICB3aWR0aDogX3BlblNpemUsXG4gICAgbGluZXNcbiAgfSk7XG59XG5cbi8qKlxuICogU2V0IHRoZSBhdHRyaWJ1dGVzIG9mIHRoZSBwZW4uXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHBlblNpemUgVGhlIHNpemUgb2YgdGhlIGxpbmVzIGRyYXduIGJ5IHRoZSBwZW5cbiAqIEBwYXJhbSB7U3RyaW5nfSBwZW5Db2xvciBUaGUgY29sb3Igb2YgdGhlIGxpbmVzIGRyYXduIGJ5IHRoZSBwZW5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldEFycm93KHBlblNpemUgPSAxMCwgcGVuQ29sb3IgPSAnMDAwMEZGJykge1xuICBfcGVuU2l6ZSA9IHBhcnNlSW50KHBlblNpemUsIDEwKTtcbiAgX3BlbkNvbG9yID0gcGVuQ29sb3I7XG59XG5cbi8qKlxuICogRW5hYmxlIHRoZSBwZW4gYmVoYXZpb3JcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVuYWJsZUFycm93KCkge1xuICBpZiAoX2VuYWJsZWQpIHsgcmV0dXJuOyB9XG5cbiAgX2VuYWJsZWQgPSB0cnVlO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBoYW5kbGVEb2N1bWVudE1vdXNlZG93bik7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgaGFuZGxlRG9jdW1lbnRLZXl1cCk7XG4gIGRpc2FibGVVc2VyU2VsZWN0KCk7XG59XG5cbi8qKlxuICogRGlzYWJsZSB0aGUgcGVuIGJlaGF2aW9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaXNhYmxlQXJyb3coKSB7XG4gIGlmICghX2VuYWJsZWQpIHsgcmV0dXJuOyB9XG5cbiAgX2VuYWJsZWQgPSBmYWxzZTtcbiAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgaGFuZGxlRG9jdW1lbnRNb3VzZWRvd24pO1xuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIGhhbmRsZURvY3VtZW50S2V5dXApO1xuICBlbmFibGVVc2VyU2VsZWN0KCk7XG59XG5cbiIsImltcG9ydCBQREZKU0Fubm90YXRlIGZyb20gJy4uL1BERkpTQW5ub3RhdGUnO1xuaW1wb3J0IHtcbiAgZmluZEFubm90YXRpb25BdFBvaW50LFxuICBnZXRNZXRhZGF0YVxufSBmcm9tICcuL3V0aWxzJztcblxubGV0IF9jYW5lcmFzZSA9IGZhbHNlO1xubGV0IHByZXZpb3VzUG9pbnQgPSBudWxsO1xuXG4vKipcbiAqXG4gKiBAcGFyYW0ge1BvaW50ZXJFdmVudH0gZSBET00gZXZlbnQgdG8gaGFuZGxlXG4gKi9cbmZ1bmN0aW9uIGhhbmRsZURvY3VtZW50RG93bihlKSB7XG4gIF9jYW5lcmFzZSA9IHRydWU7XG4gIHByZXZpb3VzUG9pbnQgPSBbZS5jbGllbnRYLCBlLmNsaWVudFldO1xufVxuXG4vKipcbiAqXG4gKiBAcGFyYW0ge1BvaW50ZXJFdmVudH0gZSBET00gZXZlbnQgdG8gaGFuZGxlXG4gKi9cbmZ1bmN0aW9uIGhhbmRsZURvY3VtZW50VXAoZSkge1xuICBfY2FuZXJhc2UgPSBmYWxzZTtcbiAgZXJhc2UoZmluZEFubm90YXRpb25BdFBvaW50KGUuY2xpZW50WCwgZS5jbGllbnRZKSk7XG59XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7UG9pbnRlckV2ZW50fSBlIERPTSBldmVudCB0byBoYW5kbGVcbiAqL1xuZnVuY3Rpb24gaGFuZGxlRG9jdW1lbnRNb3VzZU1vdmUoZSkge1xuICBpZiAoIV9jYW5lcmFzZSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIFRoaXMgYWxnb3JpdGhtIGF0dGVtcHRzIHRvIGdldCB0aGUgdmFyaW91cyBwb2ludHMgYmV0d2VlbiB0aGUgbGFzdFxuICAvLyBQb2ludGVyRXZlbnQgYW5kIHRoaXMgb25lXG4gIGxldCBjaGVjayA9IFtdO1xuICBsZXQgZGlmZlggPSBNYXRoLmFicyhwcmV2aW91c1BvaW50WzBdIC0gZS5jbGllbnRYKTtcbiAgbGV0IGRpZmZZID0gTWF0aC5hYnMocHJldmlvdXNQb2ludFsxXSAtIGUuY2xpZW50WSk7XG4gIGlmIChkaWZmWCA+PSAxIHx8IGRpZmZZID49IDEpIHtcbiAgICBsZXQgbWF4U3RlcHMgPSBNYXRoLnJvdW5kKE1hdGgubWF4KGRpZmZYLCBkaWZmWSkpO1xuICAgIGxldCBzdWJTdGVwU2l6ZSA9IE1hdGgubWluKGRpZmZYLCBkaWZmWSkgLyBtYXhTdGVwcztcbiAgICBsZXQgc21hbGxlclRlc3QgPSBkaWZmWCA8IGRpZmZZO1xuICAgIGxldCBzdGFydFBvaW50ID0gW1xuICAgICAgTWF0aC5taW4ocHJldmlvdXNQb2ludFswXSwgZS5jbGllbnRYKSxcbiAgICAgIE1hdGgubWluKHByZXZpb3VzUG9pbnRbMV0sIGUuY2xpZW50WSlcbiAgICBdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF4U3RlcHM7IGkrKykge1xuICAgICAgaWYgKHNtYWxsZXJUZXN0KSB7XG4gICAgICAgIGNoZWNrLnB1c2goW01hdGgucm91bmQoc3RhcnRQb2ludFswXSArIChzdWJTdGVwU2l6ZSAqIGkpKSwgTWF0aC5yb3VuZChzdGFydFBvaW50WzFdICsgaSldKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjaGVjay5wdXNoKFtNYXRoLnJvdW5kKHN0YXJ0UG9pbnRbMF0gKyBpKSwgTWF0aC5yb3VuZChzdGFydFBvaW50WzFdICsgKHN1YlN0ZXBTaXplICogaSkpXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGZvciAobGV0IHBvaW50IG9mIGNoZWNrKSB7XG4gICAgZXJhc2UoZmluZEFubm90YXRpb25BdFBvaW50KHBvaW50WzBdLCBwb2ludFsxXSkpO1xuICB9XG4gIHByZXZpb3VzUG9pbnQgPSBbZS5jbGllbnRYLCBlLmNsaWVudFldO1xufVxuXG5mdW5jdGlvbiBlcmFzZSh0YXJnZXQpIHtcbiAgaWYgKCFfY2FuZXJhc2UpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAodGFyZ2V0KSB7XG4gICAgbGV0IHsgZG9jdW1lbnRJZCB9ID0gZ2V0TWV0YWRhdGEodGFyZ2V0LnBhcmVudEVsZW1lbnQpO1xuICAgIGxldCBhbm5vdGF0aW9uSWQgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXBkZi1hbm5vdGF0ZS1pZCcpO1xuICAgIFBERkpTQW5ub3RhdGUuZ2V0U3RvcmVBZGFwdGVyKCkuZGVsZXRlQW5ub3RhdGlvbihkb2N1bWVudElkLCBhbm5vdGF0aW9uSWQpLnRoZW4oKCkgPT4ge1xuICAgICAgbGV0IG5vZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtcGRmLWFubm90YXRlLWlkPVwiJHthbm5vdGF0aW9uSWR9XCJdYCk7XG4gICAgICBbLi4ubm9kZXNdLmZvckVhY2goKG4pID0+IHtcbiAgICAgICAgbi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG4pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVuYWJsZUVyYXNlcigpIHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcm1vdmUnLCBoYW5kbGVEb2N1bWVudE1vdXNlTW92ZSk7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJkb3duJywgaGFuZGxlRG9jdW1lbnREb3duKTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcnVwJywgaGFuZGxlRG9jdW1lbnRVcCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNhYmxlRXJhc2VyKCkge1xuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdwb2ludGVybW92ZScsIGhhbmRsZURvY3VtZW50TW91c2VNb3ZlKTtcbiAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCBoYW5kbGVEb2N1bWVudERvd24pO1xuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdwb2ludGVydXAnLCBoYW5kbGVEb2N1bWVudFVwKTtcbn1cbiIsImltcG9ydCBQREZKU0Fubm90YXRlIGZyb20gJy4uL1BERkpTQW5ub3RhdGUnO1xuaW1wb3J0IHsgYXBwZW5kQ2hpbGQgfSBmcm9tICcuLi9yZW5kZXIvYXBwZW5kQ2hpbGQnO1xuaW1wb3J0IHtcbiAgQk9SREVSX0NPTE9SLFxuICBmaW5kU1ZHQXRQb2ludCxcbiAgZ2V0TWV0YWRhdGEsXG4gIHNjYWxlRG93blxufSBmcm9tICcuL3V0aWxzJztcblxubGV0IF9lbmFibGVkID0gZmFsc2U7XG5sZXQgaW5wdXQ7XG5cbi8qKlxuICogSGFuZGxlIGRvY3VtZW50Lm1vdXNldXAgZXZlbnRcbiAqXG4gKiBAcGFyYW0ge0V2ZW50fSBUaGUgRE9NIGV2ZW50IHRvIGJlIGhhbmRsZWRcbiAqL1xuZnVuY3Rpb24gaGFuZGxlRG9jdW1lbnRNb3VzZXVwKGUpIHtcbiAgaWYgKGlucHV0IHx8ICFmaW5kU1ZHQXRQb2ludChlLmNsaWVudFgsIGUuY2xpZW50WSkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAncGRmLWFubm90YXRlLXBvaW50LWlucHV0Jyk7XG4gIGlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnRW50ZXIgY29tbWVudCcpO1xuICBpbnB1dC5zdHlsZS5ib3JkZXIgPSBgM3B4IHNvbGlkICR7Qk9SREVSX0NPTE9SfWA7XG4gIGlucHV0LnN0eWxlLmJvcmRlclJhZGl1cyA9ICczcHgnO1xuICBpbnB1dC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gIGlucHV0LnN0eWxlLnRvcCA9IGAke2UuY2xpZW50WX1weGA7XG4gIGlucHV0LnN0eWxlLmxlZnQgPSBgJHtlLmNsaWVudFh9cHhgO1xuXG4gIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBoYW5kbGVJbnB1dEJsdXIpO1xuICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGhhbmRsZUlucHV0S2V5dXApO1xuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICBpbnB1dC5mb2N1cygpO1xufVxuXG4vKipcbiAqIEhhbmRsZSBpbnB1dC5ibHVyIGV2ZW50XG4gKi9cbmZ1bmN0aW9uIGhhbmRsZUlucHV0Qmx1cigpIHtcbiAgc2F2ZVBvaW50KCk7XG59XG5cbi8qKlxuICogSGFuZGxlIGlucHV0LmtleXVwIGV2ZW50XG4gKlxuICogQHBhcmFtIHtFdmVudH0gZSBUaGUgRE9NIGV2ZW50IHRvIGhhbmRsZVxuICovXG5mdW5jdGlvbiBoYW5kbGVJbnB1dEtleXVwKGUpIHtcbiAgaWYgKGUua2V5Q29kZSA9PT0gMjcpIHtcbiAgICBjbG9zZUlucHV0KCk7XG4gIH1cbiAgZWxzZSBpZiAoZS5rZXlDb2RlID09PSAxMykge1xuICAgIHNhdmVQb2ludCgpO1xuICB9XG59XG5cbi8qKlxuICogU2F2ZSBhIG5ldyBwb2ludCBhbm5vdGF0aW9uIGZyb20gaW5wdXRcbiAqL1xuZnVuY3Rpb24gc2F2ZVBvaW50KCkge1xuICBpZiAoaW5wdXQudmFsdWUudHJpbSgpLmxlbmd0aCA+IDApIHtcbiAgICBsZXQgY2xpZW50WCA9IHBhcnNlSW50KGlucHV0LnN0eWxlLmxlZnQsIDEwKTtcbiAgICBsZXQgY2xpZW50WSA9IHBhcnNlSW50KGlucHV0LnN0eWxlLnRvcCwgMTApO1xuICAgIGxldCBjb250ZW50ID0gaW5wdXQudmFsdWUudHJpbSgpO1xuICAgIGxldCBzdmcgPSBmaW5kU1ZHQXRQb2ludChjbGllbnRYLCBjbGllbnRZKTtcbiAgICBpZiAoIXN2Zykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCByZWN0ID0gc3ZnLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGxldCB7IGRvY3VtZW50SWQsIHBhZ2VOdW1iZXIgfSA9IGdldE1ldGFkYXRhKHN2Zyk7XG4gICAgbGV0IGFubm90YXRpb24gPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHR5cGU6ICdwb2ludCdcbiAgICB9LCBzY2FsZURvd24oc3ZnLCB7XG4gICAgICB4OiBjbGllbnRYIC0gcmVjdC5sZWZ0LFxuICAgICAgeTogY2xpZW50WSAtIHJlY3QudG9wXG4gICAgfSkpO1xuXG4gICAgUERGSlNBbm5vdGF0ZS5nZXRTdG9yZUFkYXB0ZXIoKS5hZGRBbm5vdGF0aW9uKGRvY3VtZW50SWQsIHBhZ2VOdW1iZXIsIGFubm90YXRpb24pXG4gICAgICAudGhlbigoYW5ub3RhdGlvbikgPT4ge1xuICAgICAgICBQREZKU0Fubm90YXRlLmdldFN0b3JlQWRhcHRlcigpLmFkZENvbW1lbnQoXG4gICAgICAgICAgZG9jdW1lbnRJZCxcbiAgICAgICAgICBhbm5vdGF0aW9uLnV1aWQsXG4gICAgICAgICAgY29udGVudFxuICAgICAgICApO1xuXG4gICAgICAgIGFwcGVuZENoaWxkKHN2ZywgYW5ub3RhdGlvbik7XG4gICAgICB9KTtcbiAgfVxuXG4gIGNsb3NlSW5wdXQoKTtcbn1cblxuLyoqXG4gKiBDbG9zZSB0aGUgaW5wdXQgZWxlbWVudFxuICovXG5mdW5jdGlvbiBjbG9zZUlucHV0KCkge1xuICBpbnB1dC5yZW1vdmVFdmVudExpc3RlbmVyKCdibHVyJywgaGFuZGxlSW5wdXRCbHVyKTtcbiAgaW5wdXQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBoYW5kbGVJbnB1dEtleXVwKTtcbiAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChpbnB1dCk7XG4gIGlucHV0ID0gbnVsbDtcbn1cblxuLyoqXG4gKiBFbmFibGUgcG9pbnQgYW5ub3RhdGlvbiBiZWhhdmlvclxuICovXG5leHBvcnQgZnVuY3Rpb24gZW5hYmxlUG9pbnQoKSB7XG4gIGlmIChfZW5hYmxlZCkgeyByZXR1cm47IH1cblxuICBfZW5hYmxlZCA9IHRydWU7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBoYW5kbGVEb2N1bWVudE1vdXNldXApO1xufVxuXG4vKipcbiAqIERpc2FibGUgcG9pbnQgYW5ub3RhdGlvbiBiZWhhdmlvclxuICovXG5leHBvcnQgZnVuY3Rpb24gZGlzYWJsZVBvaW50KCkge1xuICBpZiAoIV9lbmFibGVkKSB7IHJldHVybjsgfVxuXG4gIF9lbmFibGVkID0gZmFsc2U7XG4gIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBoYW5kbGVEb2N1bWVudE1vdXNldXApO1xufVxuXG4iLCJpbXBvcnQgUERGSlNBbm5vdGF0ZSBmcm9tIFwiLi4vUERGSlNBbm5vdGF0ZVwiO1xuaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi4vY29uZmlnXCI7XG5pbXBvcnQgeyBhcHBlbmRDaGlsZCB9IGZyb20gXCIuLi9yZW5kZXIvYXBwZW5kQ2hpbGRcIjtcbmltcG9ydCB7IEJPUkRFUl9DT0xPUiwgZGlzYWJsZVVzZXJTZWxlY3QsIGVuYWJsZVVzZXJTZWxlY3QsIGZpbmRTVkdBdFBvaW50LCBnZXRNZXRhZGF0YSwgY29udmVydFRvU3ZnUmVjdCB9IGZyb20gXCIuL3V0aWxzXCI7XG5cbmxldCBfZW5hYmxlZCA9IGZhbHNlO1xubGV0IF90eXBlO1xubGV0IG92ZXJsYXk7XG5sZXQgb3JpZ2luWTtcbmxldCBvcmlnaW5YO1xuXG4vKipcbiAqIEdldCB0aGUgY3VycmVudCB3aW5kb3cgc2VsZWN0aW9uIGFzIHJlY3RzXG4gKlxuICogQHJldHVybiB7QXJyYXl9IEFuIEFycmF5IG9mIHJlY3RzXG4gKi9cbmZ1bmN0aW9uIGdldFNlbGVjdGlvblJlY3RzKCkge1xuICB0cnkge1xuICAgIGxldCBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XG4gICAgbGV0IHJhbmdlID0gc2VsZWN0aW9uLmdldFJhbmdlQXQoMCk7XG4gICAgbGV0IHJlY3RzID0gcmFuZ2UuZ2V0Q2xpZW50UmVjdHMoKTtcblxuICAgIGlmIChyZWN0cy5sZW5ndGggPiAwICYmIHJlY3RzWzBdLndpZHRoID4gMCAmJiByZWN0c1swXS5oZWlnaHQgPiAwKSB7XG4gICAgICByZXR1cm4gcmVjdHM7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7fVxuXG4gIHJldHVybiBudWxsO1xufVxuXG4vKipcbiAqIEhhbmRsZSBkb2N1bWVudC5tb3VzZWRvd24gZXZlbnRcbiAqXG4gKiBAcGFyYW0ge0V2ZW50fSBlIFRoZSBET00gZXZlbnQgdG8gaGFuZGxlXG4gKi9cbmZ1bmN0aW9uIGhhbmRsZURvY3VtZW50TW91c2Vkb3duKGUpIHtcbiAgbGV0IHN2ZztcbiAgaWYgKF90eXBlICE9PSBcImFyZWFcIiB8fCAhKHN2ZyA9IGZpbmRTVkdBdFBvaW50KGUuY2xpZW50WCwgZS5jbGllbnRZKSkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBsZXQgcmVjdCA9IHN2Zy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgb3JpZ2luWSA9IGUuY2xpZW50WTtcbiAgb3JpZ2luWCA9IGUuY2xpZW50WDtcblxuICBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgb3ZlcmxheS5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgb3ZlcmxheS5zdHlsZS50b3AgPSBgJHtvcmlnaW5ZIC0gcmVjdC50b3B9cHhgO1xuICBvdmVybGF5LnN0eWxlLmxlZnQgPSBgJHtvcmlnaW5YIC0gcmVjdC5sZWZ0fXB4YDtcbiAgb3ZlcmxheS5zdHlsZS5ib3JkZXIgPSBgM3B4IHNvbGlkICR7Qk9SREVSX0NPTE9SfWA7XG4gIG92ZXJsYXkuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCIzcHhcIjtcbiAgc3ZnLnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBoYW5kbGVEb2N1bWVudE1vdXNlbW92ZSk7XG4gIGRpc2FibGVVc2VyU2VsZWN0KCk7XG59XG5cbi8qKlxuICogSGFuZGxlIGRvY3VtZW50Lm1vdXNlbW92ZSBldmVudFxuICpcbiAqIEBwYXJhbSB7RXZlbnR9IGUgVGhlIERPTSBldmVudCB0byBoYW5kbGVcbiAqL1xuZnVuY3Rpb24gaGFuZGxlRG9jdW1lbnRNb3VzZW1vdmUoZSkge1xuICBsZXQgc3ZnID0gb3ZlcmxheS5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoY29uZmlnLmFubm90YXRpb25TdmdRdWVyeSgpKTtcbiAgbGV0IHJlY3QgPSBzdmcuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgaWYgKG9yaWdpblggKyAoZS5jbGllbnRYIC0gb3JpZ2luWCkgPCByZWN0LnJpZ2h0KSB7XG4gICAgb3ZlcmxheS5zdHlsZS53aWR0aCA9IGAke2UuY2xpZW50WCAtIG9yaWdpblh9cHhgO1xuICB9XG5cbiAgaWYgKG9yaWdpblkgKyAoZS5jbGllbnRZIC0gb3JpZ2luWSkgPCByZWN0LmJvdHRvbSkge1xuICAgIG92ZXJsYXkuc3R5bGUuaGVpZ2h0ID0gYCR7ZS5jbGllbnRZIC0gb3JpZ2luWX1weGA7XG4gIH1cbn1cblxuLyoqXG4gKiBIYW5kbGUgZG9jdW1lbnQubW91c2V1cCBldmVudFxuICpcbiAqIEBwYXJhbSB7RXZlbnR9IGUgVGhlIERPTSBldmVudCB0byBoYW5kbGVcbiAqL1xuZnVuY3Rpb24gaGFuZGxlRG9jdW1lbnRNb3VzZXVwKGUpIHtcbiAgbGV0IHJlY3RzO1xuICBpZiAoX3R5cGUgIT09IFwiYXJlYVwiICYmIChyZWN0cyA9IGdldFNlbGVjdGlvblJlY3RzKCkpKSB7XG4gICAgc2F2ZVJlY3QoXG4gICAgICBfdHlwZSxcbiAgICAgIFsuLi5yZWN0c10ubWFwKChyKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdG9wOiByLnRvcCxcbiAgICAgICAgICBsZWZ0OiByLmxlZnQsXG4gICAgICAgICAgd2lkdGg6IHIud2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiByLmhlaWdodCxcbiAgICAgICAgfTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfSBlbHNlIGlmIChfdHlwZSA9PT0gXCJhcmVhXCIgJiYgb3ZlcmxheSkge1xuICAgIGxldCBzdmcgPSBvdmVybGF5LnBhcmVudE5vZGUucXVlcnlTZWxlY3Rvcihjb25maWcuYW5ub3RhdGlvblN2Z1F1ZXJ5KCkpO1xuICAgIGxldCByZWN0ID0gc3ZnLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHNhdmVSZWN0KF90eXBlLCBbXG4gICAgICB7XG4gICAgICAgIHRvcDogcGFyc2VJbnQob3ZlcmxheS5zdHlsZS50b3AsIDEwKSArIHJlY3QudG9wLFxuICAgICAgICBsZWZ0OiBwYXJzZUludChvdmVybGF5LnN0eWxlLmxlZnQsIDEwKSArIHJlY3QubGVmdCxcbiAgICAgICAgd2lkdGg6IHBhcnNlSW50KG92ZXJsYXkuc3R5bGUud2lkdGgsIDEwKSxcbiAgICAgICAgaGVpZ2h0OiBwYXJzZUludChvdmVybGF5LnN0eWxlLmhlaWdodCwgMTApLFxuICAgICAgfSxcbiAgICBdKTtcblxuICAgIG92ZXJsYXkucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChvdmVybGF5KTtcbiAgICBvdmVybGF5ID0gbnVsbDtcblxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgaGFuZGxlRG9jdW1lbnRNb3VzZW1vdmUpO1xuICAgIGVuYWJsZVVzZXJTZWxlY3QoKTtcbiAgfVxufVxuXG4vKipcbiAqIEhhbmRsZSBkb2N1bWVudC5rZXl1cCBldmVudFxuICpcbiAqIEBwYXJhbSB7RXZlbnR9IGUgVGhlIERPTSBldmVudCB0byBoYW5kbGVcbiAqL1xuZnVuY3Rpb24gaGFuZGxlRG9jdW1lbnRLZXl1cChlKSB7XG4gIC8vIENhbmNlbCByZWN0IGlmIEVzYyBpcyBwcmVzc2VkXG4gIGlmIChlLmtleUNvZGUgPT09IDI3KSB7XG4gICAgbGV0IHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcbiAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XG4gICAgaWYgKG92ZXJsYXkgJiYgb3ZlcmxheS5wYXJlbnROb2RlKSB7XG4gICAgICBvdmVybGF5LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQob3ZlcmxheSk7XG4gICAgICBvdmVybGF5ID0gbnVsbDtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgaGFuZGxlRG9jdW1lbnRNb3VzZW1vdmUpO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFNhdmUgYSByZWN0IGFubm90YXRpb25cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZSBUaGUgdHlwZSBvZiByZWN0IChhcmVhLCBoaWdobGlnaHQsIHN0cmlrZW91dClcbiAqIEBwYXJhbSB7QXJyYXl9IHJlY3RzIFRoZSByZWN0cyB0byB1c2UgZm9yIGFubm90YXRpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBjb2xvciBUaGUgY29sb3Igb2YgdGhlIHJlY3RzXG4gKi9cbmZ1bmN0aW9uIHNhdmVSZWN0KHR5cGUsIHJlY3RzLCBjb2xvcikge1xuICBsZXQgc3ZnID0gZmluZFNWR0F0UG9pbnQocmVjdHNbMF0ubGVmdCwgcmVjdHNbMF0udG9wKTtcbiAgbGV0IGFubm90YXRpb247XG5cbiAgaWYgKCFzdmcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBsZXQgYm91bmRpbmdSZWN0ID0gc3ZnLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gIGlmICghY29sb3IpIHtcbiAgICBpZiAodHlwZSA9PT0gXCJoaWdobGlnaHRcIikge1xuICAgICAgY29sb3IgPSBcIkZGRkYwMFwiO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJzdHJpa2VvdXRcIikge1xuICAgICAgY29sb3IgPSBcIkZGMDAwMFwiO1xuICAgIH1cbiAgfVxuXG4gIC8vIEluaXRpYWxpemUgdGhlIGFubm90YXRpb25cbiAgYW5ub3RhdGlvbiA9IHtcbiAgICB0eXBlLFxuICAgIGNvbG9yLFxuICAgIHJlY3RhbmdsZXM6IFsuLi5yZWN0c11cbiAgICAgIC5tYXAoKHIpID0+IHtcbiAgICAgICAgbGV0IG9mZnNldCA9IDA7XG5cbiAgICAgICAgaWYgKHR5cGUgPT09IFwic3RyaWtlb3V0XCIpIHtcbiAgICAgICAgICBvZmZzZXQgPSByLmhlaWdodCAvIDI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29udmVydFRvU3ZnUmVjdChcbiAgICAgICAgICB7XG4gICAgICAgICAgICB5OiByLnRvcCArIG9mZnNldCAtIGJvdW5kaW5nUmVjdC50b3AsXG4gICAgICAgICAgICB4OiByLmxlZnQgLSBib3VuZGluZ1JlY3QubGVmdCxcbiAgICAgICAgICAgIHdpZHRoOiByLndpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiByLmhlaWdodCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN2Z1xuICAgICAgICApO1xuICAgICAgfSlcbiAgICAgIC5maWx0ZXIoKHIpID0+IHIud2lkdGggPiAwICYmIHIuaGVpZ2h0ID4gMCAmJiByLnggPiAtMSAmJiByLnkgPiAtMSksXG4gIH07XG5cbiAgLy8gU2hvcnQgY2lyY3VpdCBpZiBubyByZWN0YW5nbGVzIGV4aXN0XG4gIGlmIChhbm5vdGF0aW9uLnJlY3RhbmdsZXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gU3BlY2lhbCB0cmVhdG1lbnQgZm9yIGFyZWEgYXMgaXQgb25seSBzdXBwb3J0cyBhIHNpbmdsZSByZWN0XG4gIGlmICh0eXBlID09PSBcImFyZWFcIikge1xuICAgIGxldCByZWN0ID0gYW5ub3RhdGlvbi5yZWN0YW5nbGVzWzBdO1xuICAgIGRlbGV0ZSBhbm5vdGF0aW9uLnJlY3RhbmdsZXM7XG4gICAgYW5ub3RhdGlvbi54ID0gcmVjdC54O1xuICAgIGFubm90YXRpb24ueSA9IHJlY3QueTtcbiAgICBhbm5vdGF0aW9uLndpZHRoID0gcmVjdC53aWR0aDtcbiAgICBhbm5vdGF0aW9uLmhlaWdodCA9IHJlY3QuaGVpZ2h0O1xuICB9XG5cbiAgbGV0IHsgZG9jdW1lbnRJZCwgcGFnZU51bWJlciB9ID0gZ2V0TWV0YWRhdGEoc3ZnKTtcblxuICAvLyBBZGQgdGhlIGFubm90YXRpb25cbiAgUERGSlNBbm5vdGF0ZS5nZXRTdG9yZUFkYXB0ZXIoKVxuICAgIC5hZGRBbm5vdGF0aW9uKGRvY3VtZW50SWQsIHBhZ2VOdW1iZXIsIGFubm90YXRpb24pXG4gICAgLnRoZW4oKGFubm90YXRpb24pID0+IHtcbiAgICAgIGFwcGVuZENoaWxkKHN2ZywgYW5ub3RhdGlvbik7XG4gICAgfSk7XG59XG5cbi8qKlxuICogRW5hYmxlIHJlY3QgYmVoYXZpb3JcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVuYWJsZVJlY3QodHlwZSkge1xuICBfdHlwZSA9IHR5cGU7XG5cbiAgaWYgKF9lbmFibGVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgX2VuYWJsZWQgPSBmYWxzZTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgaGFuZGxlRG9jdW1lbnRNb3VzZXVwKTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBoYW5kbGVEb2N1bWVudE1vdXNlZG93bik7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBoYW5kbGVEb2N1bWVudEtleXVwKTtcbn1cblxuLyoqXG4gKiBEaXNhYmxlIHJlY3QgYmVoYXZpb3JcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpc2FibGVSZWN0KCkge1xuICBpZiAoIV9lbmFibGVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgX2VuYWJsZWQgPSBmYWxzZTtcbiAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgaGFuZGxlRG9jdW1lbnRNb3VzZXVwKTtcbiAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBoYW5kbGVEb2N1bWVudE1vdXNlZG93bik7XG4gIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBoYW5kbGVEb2N1bWVudEtleXVwKTtcbn1cbiIsImltcG9ydCBQREZKU0Fubm90YXRlIGZyb20gJy4uL1BERkpTQW5ub3RhdGUnO1xuaW1wb3J0IHsgYXBwZW5kQ2hpbGQgfSBmcm9tICcuLi9yZW5kZXIvYXBwZW5kQ2hpbGQnO1xuaW1wb3J0IHtcbiAgZmluZFNWR0F0UG9pbnQsXG4gIGdldE1ldGFkYXRhLFxuICBjb252ZXJ0VG9TdmdQb2ludFxufSBmcm9tICcuL3V0aWxzJztcblxubGV0IF9lbmFibGVkID0gZmFsc2U7XG5sZXQgX3R5cGU7XG5sZXQgX2NpcmNsZVJhZGl1cyA9IDEwO1xubGV0IF9jaXJjbGVDb2xvciA9ICcwMDAwRkYnO1xuXG4vKipcbiAqIFNldCB0aGUgYXR0cmlidXRlcyBvZiB0aGUgcGVuLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBjaXJjbGVSYWRpdXMgVGhlIHJhZGl1cyBvZiB0aGUgY2lyY2xlXG4gKiBAcGFyYW0ge1N0cmluZ30gY2lyY2xlQ29sb3IgVGhlIGNvbG9yIG9mIHRoZSBjaXJjbGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldENpcmNsZShjaXJjbGVSYWRpdXMgPSAxMCwgY2lyY2xlQ29sb3IgPSAnMDAwMEZGJykge1xuICBfY2lyY2xlUmFkaXVzID0gcGFyc2VJbnQoY2lyY2xlUmFkaXVzLCAxMCk7XG4gIF9jaXJjbGVDb2xvciA9IGNpcmNsZUNvbG9yO1xufVxuXG4vKipcbiAqIEhhbmRsZSBkb2N1bWVudC5tb3VzZXVwIGV2ZW50XG4gKlxuICogQHBhcmFtIHtFdmVudH0gZSBUaGUgRE9NIGV2ZW50IHRvIGhhbmRsZVxuICovXG5mdW5jdGlvbiBoYW5kbGVEb2N1bWVudE1vdXNldXAoZSkge1xuICBsZXQgc3ZnID0gZmluZFNWR0F0UG9pbnQoZS5jbGllbnRYLCBlLmNsaWVudFkpO1xuICBpZiAoIXN2Zykge1xuICAgIHJldHVybjtcbiAgfVxuICBsZXQgcmVjdCA9IHN2Zy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgc2F2ZUNpcmNsZShzdmcsIF90eXBlLCB7XG4gICAgeDogZS5jbGllbnRYIC0gcmVjdC5sZWZ0LFxuICAgIHk6IGUuY2xpZW50WSAtIHJlY3QudG9wXG4gIH0sIF9jaXJjbGVSYWRpdXMsIF9jaXJjbGVDb2xvcik7XG59XG5cbi8qKlxuICogU2F2ZSBhIGNpcmNsZSBhbm5vdGF0aW9uXG4gKlxuICogQHBhcmFtIHtTVkdFbGVtZW50fSBzdmdcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIFRoZSB0eXBlIG9mIGNpcmNsZSAoY2lyY2xlLCBlbXB0eWNpcmNsZSwgZmlsbGNpcmNsZSlcbiAqIEBwYXJhbSB7T2JqZWN0fSBwdCBUaGUgcG9pbnQgdG8gdXNlIGZvciBhbm5vdGF0aW9uXG4gKiBAcGFyYW0ge2Zsb2F0fSByYWRpdXNcbiAqIEBwYXJhbSB7U3RyaW5nfSBjb2xvciBUaGUgY29sb3Igb2YgdGhlIHJlY3RzXG4gKi9cbmZ1bmN0aW9uIHNhdmVDaXJjbGUoc3ZnLCB0eXBlLCBwdCwgcmFkaXVzLCBjb2xvcikge1xuICAvLyBJbml0aWFsaXplIHRoZSBhbm5vdGF0aW9uXG4gIGxldCBzdmdfcHQgPSBjb252ZXJ0VG9TdmdQb2ludChbIHB0LngsIHB0LnkgXSwgc3ZnKTtcbiAgbGV0IGFubm90YXRpb24gPSB7XG4gICAgdHlwZSxcbiAgICBjb2xvcixcbiAgICBjeDogc3ZnX3B0WzBdLFxuICAgIGN5OiBzdmdfcHRbMV0sXG4gICAgcjogcmFkaXVzXG4gIH07XG5cbiAgbGV0IHsgZG9jdW1lbnRJZCwgcGFnZU51bWJlciB9ID0gZ2V0TWV0YWRhdGEoc3ZnKTtcblxuICAvLyBBZGQgdGhlIGFubm90YXRpb25cbiAgUERGSlNBbm5vdGF0ZS5nZXRTdG9yZUFkYXB0ZXIoKS5hZGRBbm5vdGF0aW9uKGRvY3VtZW50SWQsIHBhZ2VOdW1iZXIsIGFubm90YXRpb24pXG4gICAgLnRoZW4oKGFubm90YXRpb24pID0+IHtcbiAgICAgIGFwcGVuZENoaWxkKHN2ZywgYW5ub3RhdGlvbik7XG4gICAgfSk7XG59XG5cbi8qKlxuICogRW5hYmxlIGNpcmNsZSBiZWhhdmlvclxuICovXG5leHBvcnQgZnVuY3Rpb24gZW5hYmxlQ2lyY2xlKHR5cGUpIHtcbiAgX3R5cGUgPSB0eXBlO1xuXG4gIGlmIChfZW5hYmxlZCkgeyByZXR1cm47IH1cblxuICBfZW5hYmxlZCA9IHRydWU7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBoYW5kbGVEb2N1bWVudE1vdXNldXApO1xufVxuXG4vKipcbiAqIERpc2FibGUgY2lyY2xlIGJlaGF2aW9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaXNhYmxlQ2lyY2xlKCkge1xuICBpZiAoIV9lbmFibGVkKSB7IHJldHVybjsgfVxuXG4gIF9lbmFibGVkID0gZmFsc2U7XG4gIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBoYW5kbGVEb2N1bWVudE1vdXNldXApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQ2lyY2xlKHR5cGUsIGUpIHtcbiAgbGV0IG9sZFR5cGUgPSBfdHlwZTtcbiAgX3R5cGUgPSB0eXBlO1xuICBoYW5kbGVEb2N1bWVudE1vdXNldXAoZSk7XG4gIF90eXBlID0gb2xkVHlwZTtcbn1cbiIsImltcG9ydCBQREZKU0Fubm90YXRlIGZyb20gJy4uL1BERkpTQW5ub3RhdGUnO1xuaW1wb3J0IHsgYXBwZW5kQ2hpbGQgfSBmcm9tICcuLi9yZW5kZXIvYXBwZW5kQ2hpbGQnO1xuaW1wb3J0IHtcbiAgQk9SREVSX0NPTE9SLFxuICBmaW5kU1ZHQXRQb2ludCxcbiAgZ2V0TWV0YWRhdGEsXG4gIGNvbnZlcnRUb1N2Z1BvaW50XG59IGZyb20gJy4vdXRpbHMnO1xuXG5sZXQgX2VuYWJsZWQgPSBmYWxzZTtcbmxldCBpbnB1dDtcbmxldCBfdGV4dFNpemU7XG5sZXQgX3RleHRDb2xvcjtcblxuLyoqXG4gKiBIYW5kbGUgZG9jdW1lbnQubW91c2V1cCBldmVudFxuICpcbiAqIEBwYXJhbSB7RXZlbnR9IGUgVGhlIERPTSBldmVudCB0byBoYW5kbGVcbiAqL1xuZnVuY3Rpb24gaGFuZGxlRG9jdW1lbnRNb3VzZXVwKGUpIHtcbiAgaWYgKGlucHV0IHx8ICFmaW5kU1ZHQXRQb2ludChlLmNsaWVudFgsIGUuY2xpZW50WSkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAncGRmLWFubm90YXRlLXRleHQtaW5wdXQnKTtcbiAgaW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdFbnRlciB0ZXh0Jyk7XG4gIGlucHV0LnN0eWxlLmJvcmRlciA9IGAzcHggc29saWQgJHtCT1JERVJfQ09MT1J9YDtcbiAgaW5wdXQuc3R5bGUuYm9yZGVyUmFkaXVzID0gJzNweCc7XG4gIGlucHV0LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgaW5wdXQuc3R5bGUudG9wID0gYCR7ZS5jbGllbnRZfXB4YDtcbiAgaW5wdXQuc3R5bGUubGVmdCA9IGAke2UuY2xpZW50WH1weGA7XG4gIGlucHV0LnN0eWxlLmZvbnRTaXplID0gYCR7X3RleHRTaXplfXB4YDtcbiAgaW5wdXQuc3R5bGUuekluZGV4ID0gJzQxJztcbiAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGhhbmRsZUlucHV0Qmx1cik7XG4gIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgaGFuZGxlSW5wdXRLZXl1cCk7XG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpbnB1dCk7XG4gIGlucHV0LmZvY3VzKCk7XG59XG5cbi8qKlxuICogSGFuZGxlIGlucHV0LmJsdXIgZXZlbnRcbiAqL1xuZnVuY3Rpb24gaGFuZGxlSW5wdXRCbHVyKCkge1xuICBzYXZlVGV4dCgpO1xufVxuXG4vKipcbiAqIEhhbmRsZSBpbnB1dC5rZXl1cCBldmVudFxuICpcbiAqIEBwYXJhbSB7RXZlbnR9IGUgVGhlIERPTSBldmVudCB0byBoYW5kbGVcbiAqL1xuZnVuY3Rpb24gaGFuZGxlSW5wdXRLZXl1cChlKSB7XG4gIGlmIChlLmtleUNvZGUgPT09IDI3KSB7XG4gICAgY2xvc2VJbnB1dCgpO1xuICB9XG4gIGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICBzYXZlVGV4dCgpO1xuICB9XG59XG5cbi8qKlxuICogU2F2ZSBhIHRleHQgYW5ub3RhdGlvbiBmcm9tIGlucHV0XG4gKi9cbmZ1bmN0aW9uIHNhdmVUZXh0KCkge1xuICBsZXQgdmFsdWUgPSAoaW5wdXQudmFsdWUpID8gaW5wdXQudmFsdWUucmVwbGFjZSgvICskLywgJycpIDogJyc7XG4gIGlmICh2YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgbGV0IGNsaWVudFggPSBwYXJzZUludChpbnB1dC5zdHlsZS5sZWZ0LCAxMCk7XG4gICAgbGV0IGNsaWVudFkgPSBwYXJzZUludChpbnB1dC5zdHlsZS50b3AsIDEwKTtcbiAgICBsZXQgc3ZnID0gZmluZFNWR0F0UG9pbnQoY2xpZW50WCwgY2xpZW50WSk7XG4gICAgaWYgKCFzdmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IGhlaWdodCA9IF90ZXh0U2l6ZTtcbiAgICBsZXQgeyBkb2N1bWVudElkLCBwYWdlTnVtYmVyLCB2aWV3cG9ydCB9ID0gZ2V0TWV0YWRhdGEoc3ZnKTtcbiAgICBsZXQgc2NhbGUgPSAxIC8gdmlld3BvcnQuc2NhbGU7XG4gICAgbGV0IHJlY3QgPSBzdmcuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgbGV0IHB0ID0gY29udmVydFRvU3ZnUG9pbnQoW1xuICAgICAgY2xpZW50WCAtIHJlY3QubGVmdCxcbiAgICAgIGNsaWVudFkgLSByZWN0LnRvcCArIGhlaWdodF0sIHN2Zywgdmlld3BvcnQpO1xuICAgIGxldCBhbm5vdGF0aW9uID0ge1xuICAgICAgdHlwZTogJ3RleHRib3gnLFxuICAgICAgc2l6ZTogX3RleHRTaXplICogc2NhbGUsXG4gICAgICBjb2xvcjogX3RleHRDb2xvcixcbiAgICAgIGNvbnRlbnQ6IHZhbHVlLFxuICAgICAgeDogcHRbMF0sXG4gICAgICB5OiBwdFsxXSxcbiAgICAgIHJvdGF0aW9uOiAtdmlld3BvcnQucm90YXRpb25cbiAgICB9O1xuXG4gICAgUERGSlNBbm5vdGF0ZS5nZXRTdG9yZUFkYXB0ZXIoKS5hZGRBbm5vdGF0aW9uKGRvY3VtZW50SWQsIHBhZ2VOdW1iZXIsIGFubm90YXRpb24pXG4gICAgICAudGhlbigoYW5ub3RhdGlvbikgPT4ge1xuICAgICAgICBhcHBlbmRDaGlsZChzdmcsIGFubm90YXRpb24pO1xuICAgICAgfSk7XG4gIH1cblxuICBjbG9zZUlucHV0KCk7XG59XG5cbi8qKlxuICogQ2xvc2UgdGhlIGlucHV0XG4gKi9cbmZ1bmN0aW9uIGNsb3NlSW5wdXQoKSB7XG4gIGlmIChpbnB1dCkge1xuICAgIGlucHV0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2JsdXInLCBoYW5kbGVJbnB1dEJsdXIpO1xuICAgIGlucHV0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXVwJywgaGFuZGxlSW5wdXRLZXl1cCk7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChpbnB1dCk7XG4gICAgaW5wdXQgPSBudWxsO1xuICB9XG59XG5cbi8qKlxuICogU2V0IHRoZSB0ZXh0IGF0dHJpYnV0ZXNcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gdGV4dFNpemUgVGhlIHNpemUgb2YgdGhlIHRleHRcbiAqIEBwYXJhbSB7U3RyaW5nfSB0ZXh0Q29sb3IgVGhlIGNvbG9yIG9mIHRoZSB0ZXh0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRUZXh0KHRleHRTaXplID0gMTIsIHRleHRDb2xvciA9ICcwMDAwMDAnKSB7XG4gIF90ZXh0U2l6ZSA9IHBhcnNlSW50KHRleHRTaXplLCAxMCk7XG4gIF90ZXh0Q29sb3IgPSB0ZXh0Q29sb3I7XG59XG5cbi8qKlxuICogRW5hYmxlIHRleHQgYmVoYXZpb3JcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVuYWJsZVRleHQoKSB7XG4gIGlmIChfZW5hYmxlZCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIF9lbmFibGVkID0gdHJ1ZTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGhhbmRsZURvY3VtZW50TW91c2V1cCk7XG59XG5cbi8qKlxuICogRGlzYWJsZSB0ZXh0IGJlaGF2aW9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaXNhYmxlVGV4dCgpIHtcbiAgaWYgKCFfZW5hYmxlZCkgeyByZXR1cm47IH1cblxuICBfZW5hYmxlZCA9IGZhbHNlO1xuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgaGFuZGxlRG9jdW1lbnRNb3VzZXVwKTtcbn1cblxuIiwiaW1wb3J0IFBERkpTQW5ub3RhdGUgZnJvbSAnLi4vUERGSlNBbm5vdGF0ZSc7XG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgcmVuZGVyU2NyZWVuUmVhZGVySGludHMgZnJvbSAnLi4vYTExeS9yZW5kZXJTY3JlZW5SZWFkZXJIaW50cyc7XG5cbi8vIFRlbXBsYXRlIGZvciBjcmVhdGluZyBhIG5ldyBwYWdlXG5jb25zdCBQQUdFX1RFTVBMQVRFID0gYFxuICA8ZGl2IHN0eWxlPVwidmlzaWJpbGl0eTogaGlkZGVuO1wiIGNsYXNzPVwicGFnZVwiIGRhdGEtbG9hZGVkPVwiZmFsc2VcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY2FudmFzV3JhcHBlclwiPlxuICAgICAgPGNhbnZhcz48L2NhbnZhcz5cbiAgICA8L2Rpdj5cbiAgICA8c3ZnIGNsYXNzPVwiYCArIGNvbmZpZy5hbm5vdGF0aW9uTGF5ZXJOYW1lICsgYFwiPjwvc3ZnPlxuICAgIDxkaXYgY2xhc3M9XCJgICsgY29uZmlnLnRleHRMYXllck5hbWUgKyBgXCI+PC9kaXY+XG4gIDwvZGl2PlxuYDtcblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgcGFnZSB0byBiZSBhcHBlbmRlZCB0byB0aGUgRE9NLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBwYWdlTnVtYmVyIFRoZSBwYWdlIG51bWJlciB0aGF0IGlzIGJlaW5nIGNyZWF0ZWRcbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUGFnZShwYWdlTnVtYmVyKSB7XG4gIGxldCB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRlbXAuaW5uZXJIVE1MID0gUEFHRV9URU1QTEFURTtcblxuICBsZXQgcGFnZSA9IHRlbXAuY2hpbGRyZW5bMF07XG4gIGxldCBjYW52YXMgPSBwYWdlLnF1ZXJ5U2VsZWN0b3IoJ2NhbnZhcycpO1xuXG4gIHBhZ2Uuc2V0QXR0cmlidXRlKCdpZCcsIGBwYWdlQ29udGFpbmVyJHtwYWdlTnVtYmVyfWApO1xuICBwYWdlLnNldEF0dHJpYnV0ZSgnZGF0YS1wYWdlLW51bWJlcicsIHBhZ2VOdW1iZXIpO1xuXG4gIGNhbnZhcy5tb3pPcGFxdWUgPSB0cnVlO1xuICBjYW52YXMuc2V0QXR0cmlidXRlKCdpZCcsIGBwYWdlJHtwYWdlTnVtYmVyfWApO1xuXG4gIHJldHVybiBwYWdlO1xufVxuXG4vKipcbiAqIFJlbmRlciBhIHBhZ2UgdGhhdCBoYXMgYWxyZWFkeSBiZWVuIGNyZWF0ZWQuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHBhZ2VOdW1iZXIgVGhlIHBhZ2UgbnVtYmVyIHRvIGJlIHJlbmRlcmVkXG4gKiBAcGFyYW0ge09iamVjdH0gcmVuZGVyT3B0aW9ucyBUaGUgb3B0aW9ucyBmb3IgcmVuZGVyaW5nXG4gKiBAcmV0dXJuIHtQcm9taXNlfSBTZXR0bGVkIG9uY2UgcmVuZGVyaW5nIGhhcyBjb21wbGV0ZWRcbiAqICBBIHNldHRsZWQgUHJvbWlzZSB3aWxsIGJlIGVpdGhlcjpcbiAqICAgIC0gZnVsZmlsbGVkOiBbcGRmUGFnZSwgYW5ub3RhdGlvbnNdXG4gKiAgICAtIHJlamVjdGVkOiBFcnJvclxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyUGFnZShwYWdlTnVtYmVyLCByZW5kZXJPcHRpb25zKSB7XG4gIGxldCB7XG4gICAgZG9jdW1lbnRJZCxcbiAgICBwZGZEb2N1bWVudCxcbiAgICBzY2FsZSxcbiAgICByb3RhdGVcbiAgfSA9IHJlbmRlck9wdGlvbnM7XG5cbiAgLy8gTG9hZCB0aGUgcGFnZSBhbmQgYW5ub3RhdGlvbnNcbiAgcmV0dXJuIFByb21pc2UuYWxsKFtcbiAgICBwZGZEb2N1bWVudC5nZXRQYWdlKHBhZ2VOdW1iZXIpLFxuICAgIFBERkpTQW5ub3RhdGUuZ2V0QW5ub3RhdGlvbnMoZG9jdW1lbnRJZCwgcGFnZU51bWJlcilcbiAgXSkudGhlbigoW3BkZlBhZ2UsIGFubm90YXRpb25zXSkgPT4ge1xuICAgIGxldCBwYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHBhZ2VDb250YWluZXIke3BhZ2VOdW1iZXJ9YCk7XG4gICAgbGV0IHN2ZyA9IHBhZ2UucXVlcnlTZWxlY3Rvcihjb25maWcuYW5ub3RhdGlvbkNsYXNzUXVlcnkoKSk7XG4gICAgbGV0IGNhbnZhcyA9IHBhZ2UucXVlcnlTZWxlY3RvcignLmNhbnZhc1dyYXBwZXIgY2FudmFzJyk7XG4gICAgbGV0IGNhbnZhc0NvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnLCB7YWxwaGE6IGZhbHNlfSk7XG4gICAgbGV0IHRvdGFsUm90YXRpb24gPSAocm90YXRlICsgcGRmUGFnZS5yb3RhdGUpICUgMzYwO1xuICAgIGxldCB2aWV3cG9ydCA9IHBkZlBhZ2UuZ2V0Vmlld3BvcnQoe3NjYWxlOiBzY2FsZSwgcm90YXRpb246IHRvdGFsUm90YXRpb259KTtcbiAgICBsZXQgdHJhbnNmb3JtID0gc2NhbGVQYWdlKHBhZ2VOdW1iZXIsIHZpZXdwb3J0LCBjYW52YXNDb250ZXh0KTtcblxuICAgIC8vIFJlbmRlciB0aGUgcGFnZVxuICAgIHJldHVybiBQcm9taXNlLmFsbChbXG4gICAgICBwZGZQYWdlLnJlbmRlcih7IGNhbnZhc0NvbnRleHQsIHZpZXdwb3J0LCB0cmFuc2Zvcm0gfSkucHJvbWlzZSxcbiAgICAgIFBERkpTQW5ub3RhdGUucmVuZGVyKHN2Zywgdmlld3BvcnQsIGFubm90YXRpb25zKVxuICAgIF0pLnRoZW4oKCkgPT4ge1xuICAgICAgLy8gVGV4dCBjb250ZW50IGlzIG5lZWRlZCBmb3IgYTExeSwgYnV0IGlzIGFsc28gbmVjZXNzYXJ5IGZvciBjcmVhdGluZ1xuICAgICAgLy8gaGlnaGxpZ2h0IGFuZCBzdHJpa2VvdXQgYW5ub3RhdGlvbnMgd2hpY2ggcmVxdWlyZSBzZWxlY3RpbmcgdGV4dC5cbiAgICAgIHJldHVybiBwZGZQYWdlLmdldFRleHRDb250ZW50KHtub3JtYWxpemVXaGl0ZXNwYWNlOiB0cnVlfSkudGhlbigodGV4dENvbnRlbnQpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAvLyBSZW5kZXIgdGV4dCBsYXllciBmb3IgYTExeSBvZiB0ZXh0IGNvbnRlbnRcbiAgICAgICAgICBsZXQgdGV4dExheWVyID0gcGFnZS5xdWVyeVNlbGVjdG9yKGNvbmZpZy50ZXh0Q2xhc3NRdWVyeSgpKTtcbiAgICAgICAgICBsZXQgdGV4dExheWVyRmFjdG9yeSA9IG5ldyBwZGZqc1ZpZXdlci5EZWZhdWx0VGV4dExheWVyRmFjdG9yeSgpO1xuICAgICAgICAgIGxldCB0ZXh0TGF5ZXJCdWlsZGVyID0gdGV4dExheWVyRmFjdG9yeS5jcmVhdGVUZXh0TGF5ZXJCdWlsZGVyKHRleHRMYXllciwgcGFnZU51bWJlciAtIDEsIHZpZXdwb3J0KTtcbiAgICAgICAgICB0ZXh0TGF5ZXJCdWlsZGVyLnNldFRleHRDb250ZW50KHRleHRDb250ZW50KTtcbiAgICAgICAgICB0ZXh0TGF5ZXJCdWlsZGVyLnJlbmRlcigpO1xuXG4gICAgICAgICAgLy8gRW5hYmxlIGExMXkgZm9yIGFubm90YXRpb25zXG4gICAgICAgICAgLy8gVGltZW91dCBpcyBuZWVkZWQgdG8gd2FpdCBmb3IgYHRleHRMYXllckJ1aWxkZXIucmVuZGVyYFxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgcmVuZGVyU2NyZWVuUmVhZGVySGludHMoYW5ub3RhdGlvbnMuYW5ub3RhdGlvbnMpO1xuICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAvLyBJbmRpY2F0ZSB0aGF0IHRoZSBwYWdlIHdhcyBsb2FkZWRcbiAgICAgIHBhZ2Uuc2V0QXR0cmlidXRlKCdkYXRhLWxvYWRlZCcsICd0cnVlJyk7XG5cbiAgICAgIHJldHVybiBbcGRmUGFnZSwgYW5ub3RhdGlvbnNdO1xuICAgIH0pO1xuICB9KTtcbn1cblxuLyoqXG4gKiBTY2FsZSB0aGUgZWxlbWVudHMgb2YgYSBwYWdlLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBwYWdlTnVtYmVyIFRoZSBwYWdlIG51bWJlciB0byBiZSBzY2FsZWRcbiAqIEBwYXJhbSB7T2JqZWN0fSB2aWV3cG9ydCBUaGUgdmlld3BvcnQgb2YgdGhlIFBERiBwYWdlIChzZWUgcGRmUGFnZS5nZXRWaWV3cG9ydChzY2FsZSwgcm90YXRlKSlcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb250ZXh0IFRoZSBjYW52YXMgY29udGV4dCB0aGF0IHRoZSBQREYgcGFnZSBpcyByZW5kZXJlZCB0b1xuICogQHJldHVybiB7QXJyYXl9IFRoZSB0cmFuc2Zvcm0gZGF0YSBmb3IgcmVuZGVyaW5nIHRoZSBQREYgcGFnZVxuICovXG5mdW5jdGlvbiBzY2FsZVBhZ2UocGFnZU51bWJlciwgdmlld3BvcnQsIGNvbnRleHQpIHtcbiAgbGV0IHBhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcGFnZUNvbnRhaW5lciR7cGFnZU51bWJlcn1gKTtcbiAgbGV0IGNhbnZhcyA9IHBhZ2UucXVlcnlTZWxlY3RvcignLmNhbnZhc1dyYXBwZXIgY2FudmFzJyk7XG4gIGxldCBzdmcgPSBwYWdlLnF1ZXJ5U2VsZWN0b3IoY29uZmlnLmFubm90YXRpb25DbGFzc1F1ZXJ5KCkpO1xuICBsZXQgd3JhcHBlciA9IHBhZ2UucXVlcnlTZWxlY3RvcignLmNhbnZhc1dyYXBwZXInKTtcbiAgbGV0IHRleHRMYXllciA9IHBhZ2UucXVlcnlTZWxlY3Rvcihjb25maWcudGV4dENsYXNzUXVlcnkoKSk7XG4gIGxldCBvdXRwdXRTY2FsZSA9IGdldE91dHB1dFNjYWxlKGNvbnRleHQpO1xuICBsZXQgdHJhbnNmb3JtID0gIW91dHB1dFNjYWxlLnNjYWxlZCA/IG51bGwgOiBbb3V0cHV0U2NhbGUuc3gsIDAsIDAsIG91dHB1dFNjYWxlLnN5LCAwLCAwXTtcbiAgbGV0IHNmeCA9IGFwcHJveGltYXRlRnJhY3Rpb24ob3V0cHV0U2NhbGUuc3gpO1xuICBsZXQgc2Z5ID0gYXBwcm94aW1hdGVGcmFjdGlvbihvdXRwdXRTY2FsZS5zeSk7XG5cbiAgLy8gQWRqdXN0IHdpZHRoL2hlaWdodCBmb3Igc2NhbGVcbiAgcGFnZS5zdHlsZS52aXNpYmlsaXR5ID0gJyc7XG4gIGNhbnZhcy53aWR0aCA9IHJvdW5kVG9EaXZpZGUodmlld3BvcnQud2lkdGggKiBvdXRwdXRTY2FsZS5zeCwgc2Z4WzBdKTtcbiAgY2FudmFzLmhlaWdodCA9IHJvdW5kVG9EaXZpZGUodmlld3BvcnQuaGVpZ2h0ICogb3V0cHV0U2NhbGUuc3ksIHNmeVswXSk7XG4gIGNhbnZhcy5zdHlsZS53aWR0aCA9IHJvdW5kVG9EaXZpZGUodmlld3BvcnQud2lkdGgsIHNmeFsxXSkgKyAncHgnO1xuICBjYW52YXMuc3R5bGUuaGVpZ2h0ID0gcm91bmRUb0RpdmlkZSh2aWV3cG9ydC5oZWlnaHQsIHNmeFsxXSkgKyAncHgnO1xuICBzdmcuc2V0QXR0cmlidXRlKCd3aWR0aCcsIHZpZXdwb3J0LndpZHRoKTtcbiAgc3ZnLnNldEF0dHJpYnV0ZSgnaGVpZ2h0Jywgdmlld3BvcnQuaGVpZ2h0KTtcbiAgc3ZnLnN0eWxlLndpZHRoID0gYCR7dmlld3BvcnQud2lkdGh9cHhgO1xuICBzdmcuc3R5bGUuaGVpZ2h0ID0gYCR7dmlld3BvcnQuaGVpZ2h0fXB4YDtcbiAgcGFnZS5zdHlsZS53aWR0aCA9IGAke3ZpZXdwb3J0LndpZHRofXB4YDtcbiAgcGFnZS5zdHlsZS5oZWlnaHQgPSBgJHt2aWV3cG9ydC5oZWlnaHR9cHhgO1xuICB3cmFwcGVyLnN0eWxlLndpZHRoID0gYCR7dmlld3BvcnQud2lkdGh9cHhgO1xuICB3cmFwcGVyLnN0eWxlLmhlaWdodCA9IGAke3ZpZXdwb3J0LmhlaWdodH1weGA7XG4gIHRleHRMYXllci5zdHlsZS53aWR0aCA9IGAke3ZpZXdwb3J0LndpZHRofXB4YDtcbiAgdGV4dExheWVyLnN0eWxlLmhlaWdodCA9IGAke3ZpZXdwb3J0LmhlaWdodH1weGA7XG5cbiAgcmV0dXJuIHRyYW5zZm9ybTtcbn1cblxuLyoqXG4gKiBBcHByb3hpbWF0ZXMgYSBmbG9hdCBudW1iZXIgYXMgYSBmcmFjdGlvbiB1c2luZyBGYXJleSBzZXF1ZW5jZSAobWF4IG9yZGVyIG9mIDgpLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSB4IFBvc2l0aXZlIGZsb2F0IG51bWJlclxuICogQHJldHVybiB7QXJyYXl9IEVzdGltYXRlZCBmcmFjdGlvbjogdGhlIGZpcnN0IGFycmF5IGl0ZW0gaXMgYSBudW1lcmF0b3IsXG4gKiAgICAgICAgICAgICAgICAgdGhlIHNlY29uZCBvbmUgaXMgYSBkZW5vbWluYXRvci5cbiAqL1xuZnVuY3Rpb24gYXBwcm94aW1hdGVGcmFjdGlvbih4KSB7XG4gIC8vIEZhc3QgcGF0aCBmb3IgaW50IG51bWJlcnMgb3IgdGhlaXIgaW52ZXJzaW9ucy5cbiAgaWYgKE1hdGguZmxvb3IoeCkgPT09IHgpIHtcbiAgICByZXR1cm4gW3gsIDFdO1xuICB9XG5cbiAgY29uc3QgeGludiA9IDEgLyB4O1xuICBjb25zdCBsaW1pdCA9IDg7XG4gIGlmICh4aW52ID4gbGltaXQpIHtcbiAgICByZXR1cm4gWzEsIGxpbWl0XTtcbiAgfVxuICBlbHNlIGlmIChNYXRoLmZsb29yKHhpbnYpID09PSB4aW52KSB7XG4gICAgcmV0dXJuIFsxLCB4aW52XTtcbiAgfVxuXG4gIGNvbnN0IHhfID0geCA+IDEgPyB4aW52IDogeDtcblxuICAvLyBhL2IgYW5kIGMvZCBhcmUgbmVpZ2hib3VycyBpbiBGYXJleSBzZXF1ZW5jZS5cbiAgbGV0IGEgPSAwOyBsZXQgYiA9IDE7IGxldCBjID0gMTsgbGV0IGQgPSAxO1xuXG4gIC8vIExpbWl0IHNlYXJjaCB0byBvcmRlciA4LlxuICB3aGlsZSAodHJ1ZSkge1xuICAgIC8vIEdlbmVyYXRpbmcgbmV4dCB0ZXJtIGluIHNlcXVlbmNlIChvcmRlciBvZiBxKS5cbiAgICBsZXQgcCA9IGEgKyBjOyBsZXQgcSA9IGIgKyBkO1xuICAgIGlmIChxID4gbGltaXQpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBpZiAoeF8gPD0gcCAvIHEpIHtcbiAgICAgIGMgPSBwOyBkID0gcTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBhID0gcDsgYiA9IHE7XG4gICAgfVxuICB9XG5cbiAgLy8gU2VsZWN0IGNsb3Nlc3Qgb2YgbmVpZ2hib3VycyB0byB4LlxuICBpZiAoeF8gLSBhIC8gYiA8IGMgLyBkIC0geF8pIHtcbiAgICByZXR1cm4geF8gPT09IHggPyBbYSwgYl0gOiBbYiwgYV07XG4gIH1cbiAgZWxzZSB7XG4gICAgcmV0dXJuIHhfID09PSB4ID8gW2MsIGRdIDogW2QsIGNdO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldE91dHB1dFNjYWxlKGN0eCkge1xuICBsZXQgZGV2aWNlUGl4ZWxSYXRpbyA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDE7XG4gIGxldCBiYWNraW5nU3RvcmVSYXRpbyA9IGN0eC53ZWJraXRCYWNraW5nU3RvcmVQaXhlbFJhdGlvIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5tb3pCYWNraW5nU3RvcmVQaXhlbFJhdGlvIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5tc0JhY2tpbmdTdG9yZVBpeGVsUmF0aW8gfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4Lm9CYWNraW5nU3RvcmVQaXhlbFJhdGlvIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5iYWNraW5nU3RvcmVQaXhlbFJhdGlvIHx8IDE7XG4gIGxldCBwaXhlbFJhdGlvID0gZGV2aWNlUGl4ZWxSYXRpbyAvIGJhY2tpbmdTdG9yZVJhdGlvO1xuICByZXR1cm4ge1xuICAgIHN4OiBwaXhlbFJhdGlvLFxuICAgIHN5OiBwaXhlbFJhdGlvLFxuICAgIHNjYWxlZDogcGl4ZWxSYXRpbyAhPT0gMVxuICB9O1xufVxuXG5mdW5jdGlvbiByb3VuZFRvRGl2aWRlKHgsIGRpdikge1xuICBsZXQgciA9IHggJSBkaXY7XG4gIHJldHVybiByID09PSAwID8geCA6IE1hdGgucm91bmQoeCAtIHIgKyBkaXYpO1xufVxuIiwiaW1wb3J0IGluc2VydFNjcmVlblJlYWRlckhpbnQgZnJvbSAnLi9pbnNlcnRTY3JlZW5SZWFkZXJIaW50JztcbmltcG9ydCBpbml0RXZlbnRIYW5kbGVycyBmcm9tICcuL2luaXRFdmVudEhhbmRsZXJzJztcblxuLy8gVE9ETyBUaGlzIGlzIG5vdCB0aGUgcmlnaHQgcGxhY2UgZm9yIHRoaXMgdG8gbGl2ZVxuaW5pdEV2ZW50SGFuZGxlcnMoKTtcblxuLyoqXG4gKiBJbnNlcnQgaGludHMgaW50byB0aGUgRE9NIGZvciBzY3JlZW4gcmVhZGVycy5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhbm5vdGF0aW9ucyBUaGUgYW5ub3RhdGlvbnMgdGhhdCBoaW50cyBhcmUgaW5zZXJ0ZWQgZm9yXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlclNjcmVlblJlYWRlckhpbnRzKGFubm90YXRpb25zKSB7XG4gIGFubm90YXRpb25zID0gQXJyYXkuaXNBcnJheShhbm5vdGF0aW9ucykgPyBhbm5vdGF0aW9ucyA6IFtdO1xuXG4gIC8vIEluc2VydCBoaW50cyBmb3IgZWFjaCB0eXBlXG4gIE9iamVjdC5rZXlzKFNPUlRfVFlQRVMpLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICBsZXQgc29ydEJ5ID0gU09SVF9UWVBFU1t0eXBlXTtcbiAgICBhbm5vdGF0aW9uc1xuICAgICAgLmZpbHRlcigoYSkgPT4gYS50eXBlID09PSB0eXBlKVxuICAgICAgLnNvcnQoc29ydEJ5KVxuICAgICAgLmZvckVhY2goKGEsIGkpID0+IGluc2VydFNjcmVlblJlYWRlckhpbnQoYSwgaSArIDEpKTtcbiAgfSk7XG59XG5cbi8vIFNvcnQgYW5ub3RhdGlvbnMgZmlyc3QgYnkgeSwgdGhlbiBieSB4LlxuLy8gVGhpcyBhbGxvd3MgaGludHMgdG8gYmUgaW5qZWN0ZWQgaW4gdGhlIG9yZGVyIHRoZXkgYXBwZWFyLFxuLy8gd2hpY2ggbWFrZXMgbnVtYmVyaW5nIHRoZW0gZWFzaWVyLlxuZnVuY3Rpb24gc29ydEJ5UG9pbnQoYSwgYikge1xuICBpZiAoYS55IDwgYi55KSB7XG4gICAgcmV0dXJuIGEueCAtIGIueDtcbiAgfVxuICBlbHNlIHtcbiAgICByZXR1cm4gMTtcbiAgfVxufVxuXG4vLyBTb3J0IGFubm90YXRpb24gYnkgaXQncyBmaXJzdCByZWN0YW5nbGVcbmZ1bmN0aW9uIHNvcnRCeVJlY3RQb2ludChhLCBiKSB7XG4gIHJldHVybiBzb3J0QnlQb2ludChhLnJlY3RhbmdsZXNbMF0sIGIucmVjdGFuZ2xlc1swXSk7XG59XG5cbi8vIFNvcnQgYW5ub3RhdGlvbiBieSBpdCdzIGZpcnN0IGxpbmVcbmZ1bmN0aW9uIHNvcnRCeUxpbmVQb2ludChhLCBiKSB7XG4gIGxldCBsaW5lQSA9IGEubGluZXNbMF07XG4gIGxldCBsaW5lQiA9IGIubGluZXNbMF07XG4gIHJldHVybiBzb3J0QnlQb2ludChcbiAgICB7eDogbGluZUFbMF0sIHk6IGxpbmVBWzFdfSxcbiAgICB7eDogbGluZUJbMF0sIHk6IGxpbmVCWzFdfVxuICApO1xufVxuXG4vLyBBcnJhbmdlIHN1cHBvcnRlZCB0eXBlcyBhbmQgYXNzb2NpYXRlZCBzb3J0IG1ldGhvZHNcbmNvbnN0IFNPUlRfVFlQRVMgPSB7XG4gICdoaWdobGlnaHQnOiBzb3J0QnlSZWN0UG9pbnQsXG4gICdzdHJpa2VvdXQnOiBzb3J0QnlSZWN0UG9pbnQsXG4gICdkcmF3aW5nJzogc29ydEJ5TGluZVBvaW50LFxuICAndGV4dGJveCc6IHNvcnRCeVBvaW50LFxuICAncG9pbnQnOiBzb3J0QnlQb2ludCxcbiAgJ2FyZWEnOiBzb3J0QnlQb2ludFxufTtcblxuIiwiaW1wb3J0IGNyZWF0ZVNjcmVlblJlYWRlck9ubHkgZnJvbSAnLi9jcmVhdGVTY3JlZW5SZWFkZXJPbmx5JztcbmltcG9ydCBpbnNlcnRFbGVtZW50V2l0aGluQ2hpbGRyZW4gZnJvbSAnLi9pbnNlcnRFbGVtZW50V2l0aGluQ2hpbGRyZW4nO1xuaW1wb3J0IGluc2VydEVsZW1lbnRXaXRoaW5FbGVtZW50IGZyb20gJy4vaW5zZXJ0RWxlbWVudFdpdGhpbkVsZW1lbnQnO1xuaW1wb3J0IHJlbmRlclNjcmVlblJlYWRlckNvbW1lbnRzIGZyb20gJy4vcmVuZGVyU2NyZWVuUmVhZGVyQ29tbWVudHMnO1xuXG4vLyBBbm5vdGF0aW9uIHR5cGVzIHRoYXQgc3VwcG9ydCBjb21tZW50c1xuY29uc3QgQ09NTUVOVF9UWVBFUyA9IFsnaGlnaGxpZ2h0JywgJ3BvaW50JywgJ2FyZWEnLCAnY2lyY2xlJywgJ2VtcHR5Y2lyY2xlJywgJ2ZpbGxjaXJjbGUnXTtcblxuLyoqXG4gKiBJbnNlcnQgYSBoaW50IGludG8gdGhlIERPTSBmb3Igc2NyZWVuIHJlYWRlcnMgZm9yIGEgc3BlY2lmaWMgYW5ub3RhdGlvbi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYW5ub3RhdGlvbiBUaGUgYW5ub3RhdGlvbiB0byBpbnNlcnQgYSBoaW50IGZvclxuICogQHBhcmFtIHtOdW1iZXJ9IG51bSBUaGUgbnVtYmVyIG9mIHRoZSBhbm5vdGF0aW9uIG91dCBvZiBhbGwgYW5ub3RhdGlvbnMgb2YgdGhlIHNhbWUgdHlwZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbnNlcnRTY3JlZW5SZWFkZXJIaW50KGFubm90YXRpb24sIG51bSA9IDApIHtcbiAgc3dpdGNoIChhbm5vdGF0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdoaWdobGlnaHQnOlxuICAgIGNhc2UgJ3N0cmlrZW91dCc6XG4gICAgICBsZXQgcmVjdHMgPSBhbm5vdGF0aW9uLnJlY3RhbmdsZXM7XG4gICAgICBsZXQgZmlyc3QgPSByZWN0c1swXTtcbiAgICAgIGxldCBsYXN0ID0gcmVjdHNbcmVjdHMubGVuZ3RoIC0gMV07XG5cbiAgICAgIGluc2VydEVsZW1lbnRXaXRoaW5FbGVtZW50KFxuICAgICAgICBjcmVhdGVTY3JlZW5SZWFkZXJPbmx5KGBCZWdpbiAke2Fubm90YXRpb24udHlwZX0gYW5ub3RhdGlvbiAke251bX1gLCBhbm5vdGF0aW9uLnV1aWQpLFxuICAgICAgICBmaXJzdC54LCBmaXJzdC55LCBhbm5vdGF0aW9uLnBhZ2UsIHRydWVcbiAgICAgICk7XG5cbiAgICAgIGluc2VydEVsZW1lbnRXaXRoaW5FbGVtZW50KFxuICAgICAgICBjcmVhdGVTY3JlZW5SZWFkZXJPbmx5KGBFbmQgJHthbm5vdGF0aW9uLnR5cGV9IGFubm90YXRpb24gJHtudW19YCwgYCR7YW5ub3RhdGlvbi51dWlkfS1lbmRgKSxcbiAgICAgICAgbGFzdC54ICsgbGFzdC53aWR0aCwgbGFzdC55LCBhbm5vdGF0aW9uLnBhZ2UsIGZhbHNlXG4gICAgICApO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICd0ZXh0Ym94JzpcbiAgICBjYXNlICdwb2ludCc6XG4gICAgICBsZXQgdGV4dCA9IGFubm90YXRpb24udHlwZSA9PT0gJ3RleHRib3gnID8gYCAoY29udGVudDogJHthbm5vdGF0aW9uLmNvbnRlbnR9KWAgOiAnJztcblxuICAgICAgaW5zZXJ0RWxlbWVudFdpdGhpbkNoaWxkcmVuKFxuICAgICAgICBjcmVhdGVTY3JlZW5SZWFkZXJPbmx5KGAke2Fubm90YXRpb24udHlwZX0gYW5ub3RhdGlvbiAke251bX0ke3RleHR9YCwgYW5ub3RhdGlvbi51dWlkKSxcbiAgICAgICAgYW5ub3RhdGlvbi54LCBhbm5vdGF0aW9uLnksIGFubm90YXRpb24ucGFnZVxuICAgICAgKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnZHJhd2luZyc6XG4gICAgY2FzZSAnYXJlYSc6XG4gICAgICBsZXQgeCA9IHR5cGVvZiBhbm5vdGF0aW9uLnggIT09ICd1bmRlZmluZWQnID8gYW5ub3RhdGlvbi54IDogYW5ub3RhdGlvbi5saW5lc1swXVswXTtcbiAgICAgIGxldCB5ID0gdHlwZW9mIGFubm90YXRpb24ueSAhPT0gJ3VuZGVmaW5lZCcgPyBhbm5vdGF0aW9uLnkgOiBhbm5vdGF0aW9uLmxpbmVzWzBdWzFdO1xuXG4gICAgICBpbnNlcnRFbGVtZW50V2l0aGluQ2hpbGRyZW4oXG4gICAgICAgIGNyZWF0ZVNjcmVlblJlYWRlck9ubHkoYFVubGFiZWxlZCBkcmF3aW5nYCwgYW5ub3RhdGlvbi51dWlkKSxcbiAgICAgICAgeCwgeSwgYW5ub3RhdGlvbi5wYWdlXG4gICAgICApO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdjaXJjbGUnOlxuICAgIGNhc2UgJ2ZpbGxjaXJjbGUnOlxuICAgIGNhc2UgJ2VtcHR5Y2lyY2xlJzpcbiAgICAgIGxldCB4MiA9IHR5cGVvZiBhbm5vdGF0aW9uLmN4ICE9PSAndW5kZWZpbmVkJyA/IGFubm90YXRpb24uY3ggOiBhbm5vdGF0aW9uLmxpbmVzWzBdWzBdO1xuICAgICAgbGV0IHkyID0gdHlwZW9mIGFubm90YXRpb24uY3kgIT09ICd1bmRlZmluZWQnID8gYW5ub3RhdGlvbi5jeSA6IGFubm90YXRpb24ubGluZXNbMF1bMV07XG5cbiAgICAgIGluc2VydEVsZW1lbnRXaXRoaW5DaGlsZHJlbihcbiAgICAgICAgY3JlYXRlU2NyZWVuUmVhZGVyT25seShgVW5sYWJlbGVkIGRyYXdpbmdgLCBhbm5vdGF0aW9uLnV1aWQpLFxuICAgICAgICB4MiwgeTIsIGFubm90YXRpb24ucGFnZVxuICAgICAgKTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgLy8gSW5jbHVkZSBjb21tZW50cyBpbiBzY3JlZW4gcmVhZGVyIGhpbnRcbiAgaWYgKENPTU1FTlRfVFlQRVMuaW5jbHVkZXMoYW5ub3RhdGlvbi50eXBlKSkge1xuICAgIHJlbmRlclNjcmVlblJlYWRlckNvbW1lbnRzKGFubm90YXRpb24uZG9jdW1lbnRJZCwgYW5ub3RhdGlvbi51dWlkKTtcbiAgfVxufVxuIiwiLyoqXG4gKiBDcmVhdGUgYSBub2RlIHRoYXQgaXMgb25seSB2aXNpYmxlIHRvIHNjcmVlbiByZWFkZXJzXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGNvbnRlbnQgVGhlIHRleHQgY29udGVudCB0aGF0IHNob3VsZCBiZSByZWFkIGJ5IHNjcmVlbiByZWFkZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSBbYW5ub3RhdGlvbklkXSBUaGUgSUQgb2YgdGhlIGFubm90YXRpb24gYXNzb2NhaXRlZFxuICogQHJldHVybiB7RWxlbWVudH0gQW4gRWxlbWVudCB0aGF0IGlzIG9ubHkgdmlzaWJsZSB0byBzY3JlZW4gcmVhZGVyc1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVTY3JlZW5SZWFkZXJPbmx5KGNvbnRlbnQsIGFubm90YXRpb25JZCkge1xuICBsZXQgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsZXQgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNvbnRlbnQpO1xuICBub2RlLmFwcGVuZENoaWxkKHRleHQpO1xuICBub2RlLnNldEF0dHJpYnV0ZSgnaWQnLCBgcGRmLWFubm90YXRlLXNjcmVlbnJlYWRlci0ke2Fubm90YXRpb25JZH1gKTtcbiAgbm9kZS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gIG5vZGUuc3R5bGUubGVmdCA9ICctMTAwMDBweCc7XG4gIG5vZGUuc3R5bGUudG9wID0gJ2F1dG8nO1xuICBub2RlLnN0eWxlLndpZHRoID0gJzFweCc7XG4gIG5vZGUuc3R5bGUuaGVpZ2h0ID0gJzFweCc7XG4gIG5vZGUuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgcmV0dXJuIG5vZGU7XG59XG4iLCJpbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgaW5zZXJ0RWxlbWVudFdpdGhpbkVsZW1lbnQgZnJvbSAnLi9pbnNlcnRFbGVtZW50V2l0aGluRWxlbWVudCc7XG5pbXBvcnQgeyBwb2ludEludGVyc2VjdHNSZWN0LCBzY2FsZVVwIH0gZnJvbSAnLi4vVUkvdXRpbHMnO1xuXG4vKipcbiAqIEluc2VydCBhbiBlbGVtZW50IGF0IGEgcG9pbnQgd2l0aGluIHRoZSBkb2N1bWVudC5cbiAqIFRoaXMgYWxnb3JpdGhtIHdpbGwgdHJ5IHRvIGluc2VydCBiZXR3ZWVuIGVsZW1lbnRzIGlmIHBvc3NpYmxlLlxuICogSXQgd2lsbCBob3dldmVyIHVzZSBgaW5zZXJ0RWxlbWVudFdpdGhpbkVsZW1lbnRgIGlmIGl0IGlzIG1vcmUgYWNjdXJhdGUuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbCBUaGUgZWxlbWVudCB0byBiZSBpbnNlcnRlZFxuICogQHBhcmFtIHtOdW1iZXJ9IHggVGhlIHggY29vcmRpbmF0ZSBvZiB0aGUgcG9pbnRcbiAqIEBwYXJhbSB7TnVtYmVyfSB5IFRoZSB5IGNvb3JkaW5hdGUgb2YgdGhlIHBvaW50XG4gKiBAcGFyYW0ge051bWJlcn0gcGFnZU51bWJlciBUaGUgcGFnZSBudW1iZXIgdG8gbGltaXQgZWxlbWVudHMgdG9cbiAqIEByZXR1cm4ge0Jvb2xlYW59IFRydWUgaWYgZWxlbWVudCB3YXMgYWJsZSB0byBiZSBpbnNlcnRlZCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluc2VydEVsZW1lbnRXaXRoaW5DaGlsZHJlbihlbCwgeCwgeSwgcGFnZU51bWJlcikge1xuICAvLyBUcnkgYW5kIHVzZSBtb3N0IGFjY3VyYXRlIG1ldGhvZCBvZiBpbnNlcnRpbmcgd2l0aGluIGFuIGVsZW1lbnRcbiAgaWYgKGluc2VydEVsZW1lbnRXaXRoaW5FbGVtZW50KGVsLCB4LCB5LCBwYWdlTnVtYmVyLCB0cnVlKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLy8gRmFsbCBiYWNrIHRvIGluc2VydGluZyBiZXR3ZWVuIGVsZW1lbnRzXG4gIGxldCBzdmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzdmdbZGF0YS1wZGYtYW5ub3RhdGUtcGFnZT1cIiR7cGFnZU51bWJlcn1cIl1gKTtcbiAgbGV0IHJlY3QgPSBzdmcuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIGxldCBub2RlcyA9IFsuLi5zdmcucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yQWxsKGNvbmZpZy50ZXh0Q2xhc3NRdWVyeSgpICsgJyA+IGRpdicpXTtcblxuICB5ID0gc2NhbGVVcChzdmcsIHt5fSkueSArIHJlY3QudG9wO1xuICB4ID0gc2NhbGVVcChzdmcsIHt4fSkueCArIHJlY3QubGVmdDtcblxuICAvLyBGaW5kIHRoZSBiZXN0IG5vZGUgdG8gaW5zZXJ0IGJlZm9yZVxuICBmb3IgKGxldCBpID0gMCwgbCA9IG5vZGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBuID0gbm9kZXNbaV07XG4gICAgbGV0IHIgPSBuLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGlmICh5IDw9IHIudG9wKSB7XG4gICAgICBuLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsLCBuKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIC8vIElmIGFsbCBlbHNlIGZhaWxzIHRyeSB0byBhcHBlbmQgdG8gdGhlIGJvdHRvbVxuICBsZXQgdGV4dExheWVyID0gc3ZnLnBhcmVudE5vZGUucXVlcnlTZWxlY3Rvcihjb25maWcudGV4dENsYXNzUXVlcnkoKSk7XG4gIGlmICh0ZXh0TGF5ZXIpIHtcbiAgICBsZXQgdGV4dFJlY3QgPSB0ZXh0TGF5ZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgaWYgKHBvaW50SW50ZXJzZWN0c1JlY3QoeCwgeSwgdGV4dFJlY3QpKSB7XG4gICAgICB0ZXh0TGF5ZXIuYXBwZW5kQ2hpbGQoZWwpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IHtcbiAgcG9pbnRJbnRlcnNlY3RzUmVjdCxcbiAgc2NhbGVVcCxcbiAgc2NhbGVEb3duXG59IGZyb20gJy4uL1VJL3V0aWxzJztcblxuLyoqXG4gKiBJbnNlcnQgYW4gZWxlbWVudCBhdCBhIHBvaW50IHdpdGhpbiB0aGUgZG9jdW1lbnQuXG4gKiBUaGlzIGFsZ29yaXRobSB3aWxsIG9ubHkgaW5zZXJ0IHdpdGhpbiBhbiBlbGVtZW50IGFtaWRzdCBpdCdzIHRleHQgY29udGVudC5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsIFRoZSBlbGVtZW50IHRvIGJlIGluc2VydGVkXG4gKiBAcGFyYW0ge051bWJlcn0geCBUaGUgeCBjb29yZGluYXRlIG9mIHRoZSBwb2ludFxuICogQHBhcmFtIHtOdW1iZXJ9IHkgVGhlIHkgY29vcmRpbmF0ZSBvZiB0aGUgcG9pbnRcbiAqIEBwYXJhbSB7TnVtYmVyfSBwYWdlTnVtYmVyIFRoZSBwYWdlIG51bWJlciB0byBsaW1pdCBlbGVtZW50cyB0b1xuICogQHBhcmFtIHtCb29sZWFufSBpbnNlcnRCZWZvcmUgV2hldGhlciB0aGUgZWxlbWVudCBpcyB0byBiZSBpbnNlcnRlZCBiZWZvcmUgb3IgYWZ0ZXIgeFxuICogQHJldHVybiB7Qm9vbGVhbn0gVHJ1ZSBpZiBlbGVtZW50IHdhcyBhYmxlIHRvIGJlIGluc2VydGVkLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5zZXJ0RWxlbWVudFdpdGhpbkVsZW1lbnQoZWwsIHgsIHksIHBhZ2VOdW1iZXIsIGluc2VydEJlZm9yZSkge1xuICBjb25zdCBPRkZTRVRfQURKVVNUID0gMjtcblxuICAvLyBJZiBpbnNlcnRpbmcgYmVmb3JlIGFkanVzdCBgeGAgYnkgbG9va2luZyBmb3IgZWxlbWVudCBhIGZldyBweCB0byB0aGUgcmlnaHRcbiAgLy8gT3RoZXJ3aXNlIGFkanVzdCBhIGZldyBweCB0byB0aGUgbGVmdFxuICAvLyBUaGlzIGlzIHRvIGFsbG93IGEgbGl0dGxlIHRvbGVyYW5jZSBieSBzZWFyY2hpbmcgd2l0aGluIHRoZSBib3gsIGluc3RlYWRcbiAgLy8gb2YgZ2V0dGluZyBhIGZhbHNlIG5lZ2F0aXZlIGJ5IHRlc3RpbmcgcmlnaHQgb24gdGhlIGJvcmRlci5cbiAgeCA9IE1hdGgubWF4KHggKyAoT0ZGU0VUX0FESlVTVCAqIChpbnNlcnRCZWZvcmUgPyAxIDogLTEpKSwgMCk7XG5cbiAgbGV0IG5vZGUgPSB0ZXh0TGF5ZXJFbGVtZW50RnJvbVBvaW50KHgsIHkgKyBPRkZTRVRfQURKVVNULCBwYWdlTnVtYmVyKTtcbiAgaWYgKCFub2RlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gTm93IHRoYXQgbm9kZSBoYXMgYmVlbiBmb3VuZCBpbnZlcnNlIHRoZSBhZGp1c3RtZW50IGZvciBgeGAuXG4gIC8vIFRoaXMgaXMgZG9uZSB0byBhY2NvbW9kYXRlIHRvbGVyYW5jZSBieSBjdXR0aW5nIG9mZiBvbiB0aGUgb3V0c2lkZSBvZiB0aGVcbiAgLy8gdGV4dCBib3VuZGFyeSwgaW5zdGVhZCBvZiBtaXNzaW5nIGEgY2hhcmFjdGVyIGJ5IGN1dHRpbmcgb2ZmIHdpdGhpbi5cbiAgeCA9IHggKyAoT0ZGU0VUX0FESlVTVCAqIChpbnNlcnRCZWZvcmUgPyAtMSA6IDEpKTtcblxuICBsZXQgc3ZnID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc3ZnW2RhdGEtcGRmLWFubm90YXRlLXBhZ2U9XCIke3BhZ2VOdW1iZXJ9XCJdYCk7XG4gIGxldCBsZWZ0ID0gc2NhbGVEb3duKHN2Zywge2xlZnQ6IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdH0pLmxlZnQgLSBzdmcuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcbiAgbGV0IHRlbXAgPSBub2RlLmNsb25lTm9kZSh0cnVlKTtcbiAgbGV0IGhlYWQgPSB0ZW1wLmlubmVySFRNTC5zcGxpdCgnJyk7XG4gIGxldCB0YWlsID0gW107XG5cbiAgLy8gSW5zZXJ0IHRlbXAgb2ZmIHNjcmVlblxuICB0ZW1wLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgdGVtcC5zdHlsZS50b3AgPSAnLTEwMDAwcHgnO1xuICB0ZW1wLnN0eWxlLmxlZnQgPSAnLTEwMDAwcHgnO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRlbXApO1xuXG4gIHdoaWxlIChoZWFkLmxlbmd0aCkge1xuICAgIC8vIERvbid0IGluc2VydCB3aXRoaW4gSFRNTCB0YWdzXG4gICAgaWYgKGhlYWRbaGVhZC5sZW5ndGggLSAxXSA9PT0gJz4nKSB7XG4gICAgICB3aGlsZSAoaGVhZC5sZW5ndGgpIHtcbiAgICAgICAgdGFpbC51bnNoaWZ0KGhlYWQucG9wKCkpO1xuICAgICAgICBpZiAodGFpbFswXSA9PT0gJzwnKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDaGVjayBpZiB3aWR0aCBvZiB0ZW1wIGJhc2VkIG9uIGN1cnJlbnQgaGVhZCB2YWx1ZSBzYXRpc2ZpZXMgeFxuICAgIHRlbXAuaW5uZXJIVE1MID0gaGVhZC5qb2luKCcnKTtcbiAgICBsZXQgd2lkdGggPSBzY2FsZURvd24oc3ZnLCB7d2lkdGg6IHRlbXAuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGh9KS53aWR0aDtcbiAgICBpZiAobGVmdCArIHdpZHRoIDw9IHgpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICB0YWlsLnVuc2hpZnQoaGVhZC5wb3AoKSk7XG4gIH1cblxuICAvLyBVcGRhdGUgb3JpZ2luYWwgbm9kZSB3aXRoIG5ldyBtYXJrdXAsIGluY2x1ZGluZyBlbGVtZW50IHRvIGJlIGluc2VydGVkXG4gIG5vZGUuaW5uZXJIVE1MID0gaGVhZC5qb2luKCcnKSArIGVsLm91dGVySFRNTCArIHRhaWwuam9pbignJyk7XG4gIHRlbXAucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0ZW1wKTtcblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuLyoqXG4gKiBHZXQgYSB0ZXh0IGxheWVyIGVsZW1lbnQgYXQgYSBnaXZlbiBwb2ludCBvbiBhIHBhZ2VcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0geCBUaGUgeCBjb29yZGluYXRlIG9mIHRoZSBwb2ludFxuICogQHBhcmFtIHtOdW1iZXJ9IHkgVGhlIHkgY29vcmRpbmF0ZSBvZiB0aGUgcG9pbnRcbiAqIEBwYXJhbSB7TnVtYmVyfSBwYWdlTnVtYmVyIFRoZSBwYWdlIHRvIGxpbWl0IGVsZW1lbnRzIHRvXG4gKiBAcmV0dXJuIHtFbGVtZW50fSBGaXJzdCB0ZXh0IGxheWVyIGVsZW1lbnQgZm91bmQgYXQgdGhlIHBvaW50XG4gKi9cbmZ1bmN0aW9uIHRleHRMYXllckVsZW1lbnRGcm9tUG9pbnQoeCwgeSwgcGFnZU51bWJlcikge1xuICBsZXQgc3ZnID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc3ZnW2RhdGEtcGRmLWFubm90YXRlLXBhZ2U9XCIke3BhZ2VOdW1iZXJ9XCJdYCk7XG4gIGxldCByZWN0ID0gc3ZnLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICB5ID0gc2NhbGVVcChzdmcsIHt5fSkueSArIHJlY3QudG9wO1xuICB4ID0gc2NhbGVVcChzdmcsIHt4fSkueCArIHJlY3QubGVmdDtcbiAgcmV0dXJuIFsuLi5zdmcucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yQWxsKGNvbmZpZy50ZXh0Q2xhc3NRdWVyeSgpICsgJyBbZGF0YS1jYW52YXMtd2lkdGhdJyldLmZpbHRlcigoZWwpID0+IHtcbiAgICByZXR1cm4gcG9pbnRJbnRlcnNlY3RzUmVjdCh4LCB5LCBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSk7XG4gIH0pWzBdO1xufVxuIiwiaW1wb3J0IFBERkpTQW5ub3RhdGUgZnJvbSAnLi4vUERGSlNBbm5vdGF0ZSc7XG5pbXBvcnQgaW5zZXJ0U2NyZWVuUmVhZGVyQ29tbWVudCBmcm9tICcuL2luc2VydFNjcmVlblJlYWRlckNvbW1lbnQnO1xuXG4vKipcbiAqIEluc2VydCB0aGUgY29tbWVudHMgaW50byB0aGUgRE9NIHRvIGJlIGF2YWlsYWJsZSBieSBzY3JlZW4gcmVhZGVyXG4gKlxuICogRXhhbXBsZSBvdXRwdXQ6XG4gKiAgIDxkaXYgY2xhc3M9XCJzY3JlZW5SZWFkZXJPbmx5XCI+XG4gKiAgICA8ZGl2PkJlZ2luIGhpZ2hsaWdodCAxPC9kaXY+XG4gKiAgICA8b2wgYXJpYS1sYWJlbD1cIkNvbW1lbnRzXCI+XG4gKiAgICAgIDxsaT5Gb288L2xpPlxuICogICAgICA8bGk+QmFyPC9saT5cbiAqICAgICAgPGxpPkJhejwvbGk+XG4gKiAgICAgIDxsaT5RdXg8L2xpPlxuICogICAgPC9vbD5cbiAqICA8L2Rpdj5cbiAqICA8ZGl2PlNvbWUgaGlnaGxpZ2h0ZWQgdGV4dCBnb2VzIGhlcmUuLi48L2Rpdj5cbiAqICA8ZGl2IGNsYXNzPVwic2NyZWVuUmVhZGVyT25seVwiPkVuZCBoaWdobGlnaHQgMTwvZGl2PlxuICpcbiAqIE5PVEU6IGBzY3JlZW5SZWFkZXJPbmx5YCBpcyBub3QgYSByZWFsIGNsYXNzLCBqdXN0IHVzZWQgZm9yIGJyZXZpdHlcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZG9jdW1lbnRJZCBUaGUgSUQgb2YgdGhlIGRvY3VtZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gYW5ub3RhdGlvbklkIFRoZSBJRCBvZiB0aGUgYW5ub3RhdGlvblxuICogQHBhcmFtIHtBcnJheX0gW2NvbW1lbnRzXSBPcHRpb25hbGx5IHByZWxvYWRlZCBjb21tZW50cyB0byBiZSByZW5kZXJlZFxuICogQHJldHVybiB7UHJvbWlzZX0gUHJvbWlzZSB0aGF0IG9uY2UgaGFzIGNvbW1lbnRzLCByZW5kZXIgdGhlbSBmb3Igc2NyZWVuIHJlYWRlclxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJTY3JlZW5SZWFkZXJDb21tZW50cyhkb2N1bWVudElkLCBhbm5vdGF0aW9uSWQsIGNvbW1lbnRzKSB7XG4gIGxldCBwcm9taXNlO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KGNvbW1lbnRzKSkge1xuICAgIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoY29tbWVudHMpO1xuICB9XG4gIGVsc2Uge1xuICAgIHByb21pc2UgPSBQREZKU0Fubm90YXRlLmdldFN0b3JlQWRhcHRlcigpLmdldENvbW1lbnRzKGRvY3VtZW50SWQsIGFubm90YXRpb25JZCk7XG4gIH1cblxuICByZXR1cm4gcHJvbWlzZS50aGVuKChjb21tZW50cykgPT4ge1xuICAgIC8vIE5vZGUgbmVlZHMgdG8gYmUgZm91bmQgYnkgcXVlcnlpbmcgRE9NIGFzIGl0IG1heSBoYXZlIGJlZW4gaW5zZXJ0ZWQgYXMgaW5uZXJIVE1MXG4gICAgLy8gbGVhdmluZyBgc2NyZWVuUmVhZGVyTm9kZWAgYXMgYW4gaW52YWxpZCByZWZlcmVuY2UgKHNlZSBgaW5zZXJ0RWxlbWVudFdpdGhpbkVsZW1lbnRgKS5cbiAgICBsZXQgbm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwZGYtYW5ub3RhdGUtc2NyZWVucmVhZGVyLSR7YW5ub3RhdGlvbklkfWApO1xuICAgIGlmIChub2RlKSB7XG4gICAgICBsZXQgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29sJyk7XG4gICAgICBsaXN0LnNldEF0dHJpYnV0ZSgnaWQnLCBgcGRmLWFubm90YXRlLXNjcmVlbnJlYWRlci1jb21tZW50LWxpc3QtJHthbm5vdGF0aW9uSWR9YCk7XG4gICAgICBsaXN0LnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsICdDb21tZW50cycpO1xuICAgICAgbm9kZS5hcHBlbmRDaGlsZChsaXN0KTtcbiAgICAgIGNvbW1lbnRzLmZvckVhY2goaW5zZXJ0U2NyZWVuUmVhZGVyQ29tbWVudCk7XG4gICAgfVxuICB9KTtcbn1cbiIsIi8qKlxuICogSW5zZXJ0IGEgY29tbWVudCBpbnRvIHRoZSBET00gdG8gYmUgYXZhaWxhYmxlIGJ5IHNjcmVlbiByZWFkZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY29tbWVudCBUaGUgY29tbWVudCB0byBiZSBpbnNlcnRlZFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbnNlcnRTY3JlZW5SZWFkZXJDb21tZW50KGNvbW1lbnQpIHtcbiAgaWYgKCFjb21tZW50KSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbGV0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjcGRmLWFubm90YXRlLXNjcmVlbnJlYWRlci0ke2NvbW1lbnQuYW5ub3RhdGlvbn0gb2xgKTtcbiAgaWYgKGxpc3QpIHtcbiAgICBsZXQgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ2lkJywgYHBkZi1hbm5vdGF0ZS1zY3JlZW5yZWFkZXItY29tbWVudC0ke2NvbW1lbnQudXVpZH1gKTtcbiAgICBpdGVtLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGAke2NvbW1lbnQuY29udGVudH1gKSk7XG4gICAgbGlzdC5hcHBlbmRDaGlsZChpdGVtKTtcbiAgfVxufVxuIiwiaW1wb3J0IHJlbmRlclNjcmVlblJlYWRlckhpbnRzIGZyb20gJy4vcmVuZGVyU2NyZWVuUmVhZGVySGludHMnO1xuaW1wb3J0IGluc2VydFNjcmVlblJlYWRlckNvbW1lbnQgZnJvbSAnLi9pbnNlcnRTY3JlZW5SZWFkZXJDb21tZW50JztcbmltcG9ydCByZW5kZXJTY3JlZW5SZWFkZXJDb21tZW50cyBmcm9tICcuL3JlbmRlclNjcmVlblJlYWRlckNvbW1lbnRzJztcbmltcG9ydCB7IGFkZEV2ZW50TGlzdGVuZXIgfSBmcm9tICcuLi9VSS9ldmVudCc7XG5pbXBvcnQgUERGSlNBbm5vdGF0ZSBmcm9tICcuLi9QREZKU0Fubm90YXRlJztcblxuLyoqXG4gKiBJbml0aWFsaXplIHRoZSBldmVudCBoYW5kbGVycyBmb3Iga2VlcGluZyBzY3JlZW4gcmVhZGVyIGhpbnRzIHN5bmNlZCB3aXRoIGRhdGFcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdEV2ZW50SGFuZGxlcnMoKSB7XG4gIGFkZEV2ZW50TGlzdGVuZXIoJ2Fubm90YXRpb246YWRkJywgKGRvY3VtZW50SWQsIHBhZ2VOdW1iZXIsIGFubm90YXRpb24pID0+IHtcbiAgICByZW9yZGVyQW5ub3RhdGlvbnNCeVR5cGUoZG9jdW1lbnRJZCwgcGFnZU51bWJlciwgYW5ub3RhdGlvbi50eXBlKTtcbiAgfSk7XG4gIGFkZEV2ZW50TGlzdGVuZXIoJ2Fubm90YXRpb246ZWRpdCcsIChkb2N1bWVudElkLCBhbm5vdGF0aW9uSWQsIGFubm90YXRpb24pID0+IHtcbiAgICByZW9yZGVyQW5ub3RhdGlvbnNCeVR5cGUoZG9jdW1lbnRJZCwgYW5ub3RhdGlvbi5wYWdlLCBhbm5vdGF0aW9uLnR5cGUpO1xuICB9KTtcbiAgYWRkRXZlbnRMaXN0ZW5lcignYW5ub3RhdGlvbjpkZWxldGUnLCByZW1vdmVBbm5vdGF0aW9uKTtcbiAgYWRkRXZlbnRMaXN0ZW5lcignY29tbWVudDphZGQnLCBpbnNlcnRDb21tZW50KTtcbiAgYWRkRXZlbnRMaXN0ZW5lcignY29tbWVudDpkZWxldGUnLCByZW1vdmVDb21tZW50KTtcbn1cblxuLyoqXG4gKiBSZW9yZGVyIHRoZSBhbm5vdGF0aW9uIG51bWJlcnMgYnkgYW5ub3RhdGlvbiB0eXBlXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGRvY3VtZW50SWQgVGhlIElEIG9mIHRoZSBkb2N1bWVudFxuICogQHBhcmFtIHtOdW1iZXJ9IHBhZ2VOdW1iZXIgVGhlIHBhZ2UgbnVtYmVyIG9mIHRoZSBhbm5vdGF0aW9uc1xuICogQHBhcmFtIHtTdHJpZ30gdHlwZSBUaGUgYW5ub3RhdGlvbiB0eXBlXG4gKi9cbmZ1bmN0aW9uIHJlb3JkZXJBbm5vdGF0aW9uc0J5VHlwZShkb2N1bWVudElkLCBwYWdlTnVtYmVyLCB0eXBlKSB7XG4gIFBERkpTQW5ub3RhdGUuZ2V0U3RvcmVBZGFwdGVyKCkuZ2V0QW5ub3RhdGlvbnMoZG9jdW1lbnRJZCwgcGFnZU51bWJlcilcbiAgICAudGhlbigoYW5ub3RhdGlvbnMpID0+IHtcbiAgICAgIHJldHVybiBhbm5vdGF0aW9ucy5hbm5vdGF0aW9ucy5maWx0ZXIoKGEpID0+IHtcbiAgICAgICAgcmV0dXJuIGEudHlwZSA9PT0gdHlwZTtcbiAgICAgIH0pO1xuICAgIH0pXG4gICAgLnRoZW4oKGFubm90YXRpb25zKSA9PiB7XG4gICAgICBhbm5vdGF0aW9ucy5mb3JFYWNoKChhKSA9PiB7XG4gICAgICAgIHJlbW92ZUFubm90YXRpb24oZG9jdW1lbnRJZCwgYS51dWlkKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gYW5ub3RhdGlvbnM7XG4gICAgfSlcbiAgICAudGhlbihyZW5kZXJTY3JlZW5SZWFkZXJIaW50cyk7XG59XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBzY3JlZW4gcmVhZGVyIGhpbnQgZm9yIGFuIGFubm90YXRpb25cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZG9jdW1lbnRJZCBUaGUgSUQgb2YgdGhlIGRvY3VtZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gYW5ub3RhdGlvbklkIFRoZSBJZCBvZiB0aGUgYW5ub3RhdGlvblxuICovXG5mdW5jdGlvbiByZW1vdmVBbm5vdGF0aW9uKGRvY3VtZW50SWQsIGFubm90YXRpb25JZCkge1xuICByZW1vdmVFbGVtZW50QnlJZChgcGRmLWFubm90YXRlLXNjcmVlbnJlYWRlci0ke2Fubm90YXRpb25JZH1gKTtcbiAgcmVtb3ZlRWxlbWVudEJ5SWQoYHBkZi1hbm5vdGF0ZS1zY3JlZW5yZWFkZXItJHthbm5vdGF0aW9uSWR9LWVuZGApO1xufVxuXG4vKipcbiAqIEluc2VydCBhIHNjcmVlbiByZWFkZXIgaGludCBmb3IgYSBjb21tZW50XG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGRvY3VtZW50SWQgVGhlIElEIG9mIHRoZSBkb2N1bWVudFxuICogQHBhcmFtIHtTdHJpbmd9IGFubm90YXRpb25JZCBUaGUgSUQgb2YgdGhhIGFzc29jYXRlZCBhbm5vdGF0aW9uXG4gKiBAcGFyYW0ge09iamVjdH0gY29tbWVudCBUaGUgY29tbWVudCB0byBpbnNlcnQgYSBoaW50IGZvclxuICovXG5mdW5jdGlvbiBpbnNlcnRDb21tZW50KGRvY3VtZW50SWQsIGFubm90YXRpb25JZCwgY29tbWVudCkge1xuICBsZXQgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHBkZi1hbm5vdGF0ZS1zY3JlZW5yZWFkZXItY29tbWVudC1saXN0LSR7YW5ub3RhdGlvbklkfWApO1xuICBsZXQgcHJvbWlzZTtcblxuICBpZiAoIWxpc3QpIHtcbiAgICBwcm9taXNlID0gcmVuZGVyU2NyZWVuUmVhZGVyQ29tbWVudHMoZG9jdW1lbnRJZCwgYW5ub3RhdGlvbklkLCBbXSkudGhlbigoKSA9PiB7XG4gICAgICBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgcGRmLWFubm90YXRlLXNjcmVlbnJlYWRlci1jb21tZW50LWxpc3QtJHthbm5vdGF0aW9uSWR9YCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgfVxuICBlbHNlIHtcbiAgICBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKHRydWUpO1xuICB9XG5cbiAgcHJvbWlzZS50aGVuKCgpID0+IHtcbiAgICBpbnNlcnRTY3JlZW5SZWFkZXJDb21tZW50KGNvbW1lbnQpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBSZW1vdmUgYSBzY3JlZW4gcmVhZGVyIGhpbnQgZm9yIGEgY29tbWVudFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBkb2N1bWVudElkIFRoZSBJRCBvZiB0aGUgZG9jdW1lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBjb21tZW50SWQgVGhlIElEIG9mIHRoZSBjb21tZW50XG4gKi9cbmZ1bmN0aW9uIHJlbW92ZUNvbW1lbnQoZG9jdW1lbnRJZCwgY29tbWVudElkKSB7XG4gIHJlbW92ZUVsZW1lbnRCeUlkKGBwZGYtYW5ub3RhdGUtc2NyZWVucmVhZGVyLWNvbW1lbnQtJHtjb21tZW50SWR9YCk7XG59XG5cbi8qKlxuICogUmVtb3ZlIGFuIGVsZW1lbnQgZnJvbSB0aGUgRE9NIGJ5IGl0J3MgSUQgaWYgaXQgZXhpc3RzXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGVsZW1lbnRJZCBUaGUgSUQgb2YgdGhlIGVsZW1lbnQgdG8gYmUgcmVtb3ZlZFxuICovXG5mdW5jdGlvbiByZW1vdmVFbGVtZW50QnlJZChlbGVtZW50SWQpIHtcbiAgbGV0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudElkKTtcbiAgaWYgKGVsKSB7XG4gICAgZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbCk7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=