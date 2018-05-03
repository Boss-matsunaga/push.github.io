Push.Permission.request(onGranted, onDenied);

Push.create('Hello World!')

Push.create("Hello world!", {
    body: "How's it hangin'?",
    icon: '/icon.png',
    timeout: 4000,
    onClick: function () {
        window.focus();
        this.close();
    }
});

