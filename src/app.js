function load() {
    // eslint-disable-next-line no-console
    console.log('Loaded2');
}

load();

// eslint-disable-next-line no-undef
if (module.hot) {
    // eslint-disable-next-line no-undef
    module.hot.accept(function() {
        load();
    });
}
