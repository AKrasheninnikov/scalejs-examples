﻿/*global define*/
define([
    'scalejs!application',
    'app/demo/demoModule'
], function (
    application,
    demo
) {
    'use strict';

    application.registerModule(demo);

    application.run();
});

