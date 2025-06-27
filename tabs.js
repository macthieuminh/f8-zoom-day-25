const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const tabs = $$(".tab")
const contents = $$(".tab-content")

function renderTab(indexTab) {
    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            tabs.forEach((t) => t.classList.remove("active"))
            contents.forEach((c) => c.classList.remove("active"))

            tab.classList.add("active")
            document.getElementById(tab.dataset.tab).classList.add("active")
        })
    })
}

function keydownTab() {
    document.body.addEventListener("keydown", (e) => {
        let tab = tabs[e.key - 1]

        if (e.key - 1 < Array.from(tabs).length) {
            tabs.forEach((t) => t.classList.remove("active"))
            contents.forEach((c) => c.classList.remove("active"))
            tab.classList.add("active")
            document.getElementById(tab.dataset.tab).classList.add("active")
        } else {
            return
        }
    })
}
renderTab()
keydownTab()
