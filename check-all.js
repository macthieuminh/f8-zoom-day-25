const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const checkboxAll = $("#checkbox__all")
const checkboxes = $$(".checkbox__input")
const countDisplay = $("#selectedCount")

function updateCount() {
    const count = Array.from(checkboxes).filter((checkbox) => checkbox.checked).length
    countDisplay.textContent = `${count} selected`

    if (count > 0 && count < checkboxes.length) {
        checkboxAll.indeterminate = true
        checkboxAll.checked = false
    } else {
        checkboxAll.indeterminate = false
        checkboxAll.checked = count === checkboxes.length
    }
}
checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", updateCount)
})
checkboxAll.addEventListener("change", function () {
    if (checkboxAll.checked) {
        checkboxes.forEach((checkbox) => {
            checkbox.checked = true
        })
        updateCount()
    } else {
        checkboxes.forEach((checkbox) => {
            checkbox.checked = false
        })
        updateCount()
    }
})
updateCount()
