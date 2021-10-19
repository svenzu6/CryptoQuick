// eslint-disable-next-line unicorn/prevent-abbreviations
export const getHashParams = () => {
    return window.location.hash.slice(1)
        .split('&')
        .reduce(function(initial: Record<string, any>, item) {
            if (item) {
                var parts = item.split('=')
                initial[parts[0]] = decodeURIComponent(parts[1])
            }

            return initial
        }, {})
}

// eslint-disable-next-line unicorn/prevent-abbreviations
export const removeHashParamsFromUrl = () => {
    window.history.pushState('', document.title, window.location.pathname + window.location.search)
}