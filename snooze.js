TrelloPowerUp.initialize({
    'card-buttons': function(t, card) {
        return [
        // Button with a nested popup callback
        {
            icon: './images/logo.png',
            text: "Snooze Card",
            callback: function(t, card) {
                t.popup({
                    title: 'Options',
                    items: [
                        {
                            text: "2 hours",
                            callback: function(t) {
                                console.log(t);
                            }
                        },
                        {
                            text: "6 hours",
                            callback: function(t) {
                            }
                        },
                        {
                            text: "1 day",
                            callback: function(t) {
                            }
                        },
                        {
                            text: "2 days",
                            callback: function(t) {
                            }
                        },
                        {
                            text: "1 week",
                            callback: function(t) {
                            }
                        },
                        {
                            text: "2 weeks",
                            callback: function(t) {
                            }
                        },
                        {
                            text: "1 month",
                            callback: function(t) {
                            }
                        },
                        {
                            text: "2 months",
                            callback: function(t) {
                            }
                        },
                        // {
                        //     text: 'Authorize with Snooze Cards',
                        //     callback: function(t) {
                        //         t.popup({
                        //             title: 'Popup Iframe',
                        //             //url: t.signUrl('./attachment-section.html')
                        //             url: './attachment-section.html'
                        //         });
                        //     }
                        // },
                        {
                            text: "Authorize with Trello",
                            callback: function(t) {
                                t.popup({
                                    title: "Auth needed",
                                    url: 'auth-popup.html'});
                                }
                        }
                    ]
                });
            }
        }];
    },
    'format-url': function(t, options) {
        if(options.url.length > 20) {
            return {
                icon: './images/trello-icon.png'

            };
        } else {
            throw t.NotHandled("Not a handled URL");
        }
    },
    'card-from-url': function(t, options) {
        return {
            name: 'All New Cards have this name',
            desc: 'All New cards have this description'
        };
    },
    'show-settings': function(t, options) {
        t.popup({
            title: "Power-Up Settings",
            url: 'settings.html',
            height: 250
        });
    }
});