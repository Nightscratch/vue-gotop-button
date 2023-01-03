import GoTopButton from './GoTopButton.vue'

export default {
    install: (app, options) => {
        const version = Number(app.version.split('.')[0])
        if (version < 3) {
            throw Error('GoTopButton plugin requires Vue 3');
        }
        app.component('GoTopBtn', GoTopButton)
    }
}