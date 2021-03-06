﻿/*global define, setTimeout */
define([
], function (
) {
    'use strict';

    return function (sandbox) {
        var // imports
            observable = sandbox.mvvm.observable,
            observableArray = sandbox.mvvm.observableArray,
            // properties
            pages = observableArray(),
            selectedPage = observable(),
            message = observable();

        return {
            pages: pages,
            selectedPage: selectedPage,
            message: message
        };
    };
});
