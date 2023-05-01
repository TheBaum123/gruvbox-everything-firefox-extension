const inject = document.createElement("style")
inject.innerText = `
    :root {
        --contentBackground: #282828 !important;
        --documentBackground: #282828 !important;
        --textColor: #fbf1c7 !important;
        --textColorLight: #fbf1c7 !important;
        --textColorLighter: #fbf1c7 !important;
        --focusText: #ebdbb2 !important;
        --focusBackground: #fe8019 !important;
        --selectionBackground: #fe8019 !important;
        --selectionBorder: #b8bb26 !important;
        --headerBackground: #1d2021 !important;
    }
`
document.head.appendChild(inject)