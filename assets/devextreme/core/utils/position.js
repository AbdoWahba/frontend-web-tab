/**
 * DevExtreme (core/utils/position.js)
 * Version: 19.1.5
 * Build date: Tue Jul 30 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */
"use strict";
var config = require("../config");
var getDefaultAlignment = function(isRtlEnabled) {
    var rtlEnabled = isRtlEnabled || config().rtlEnabled;
    return rtlEnabled ? "right" : "left"
};
exports.getDefaultAlignment = getDefaultAlignment;
