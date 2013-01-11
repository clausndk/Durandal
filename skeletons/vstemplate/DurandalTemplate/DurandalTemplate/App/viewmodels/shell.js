﻿define(function(require) {
    var router = require('durandal/plugins/router'),
        viewModel = require('durandal/viewModel'),
        app = require('durandal/app');

    var shell = {
        activeItem: viewModel.activator(),
        router: router,
        showSpinner: ko.computed({
            read: function() {
                return !shell.activeItem() || shell.activeItem.isActivating();
            },
            deferEvaluation: true
        }),
        search: function() {
            //It's really easy to show a message box.
            //You can add custom options too. Also, it returns a promise for the user's response.
            app.showMessage('Search not yet implemented...');
        }
    };
    
    router.mapNav('welcome', 'viewmodels/welcome', 'Welcome');
    router.mapNav('flickr', 'viewmodels/flickr', 'Flickr');
    router.enable(shell.activeItem, 'welcome');

    return shell;
});