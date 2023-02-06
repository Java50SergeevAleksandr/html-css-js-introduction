export class Tabs {
    #schem
    #buttonsElements
    constructor(parentId, tabsSchem) {
        const parentElement = document.getElementById(parentId);
        if (!parentElement) {
            throw `wrong parentId ${parentId}`
        }
        this.#schem = tabsSchem;
        parentElement.innerHTML = `<div class="tabs">
            ${getTabs(this.#schem)}
        </div>`

        this.#buttonsElements = document.querySelectorAll(".tab-button");
        for (let i = 0; i < this.#buttonsElements.length; i++) {
            this.#buttonsElements[i].addEventListener("click", () => {                
                const elementsSection = document.querySelectorAll(".configurated");
                const showElement = document.getElementById(this.#buttonsElements[i].value);               
                elementsSection.forEach(elm => elm.classList.add("hidden"));
                showElement.classList.remove("hidden");               
                this.#setColor(this.#buttonsElements[i]);                
            })
        }
        
    }
    #setColor(elm) {
        this.#buttonsElements.forEach(elm => elm.classList.remove("colored"));
        elm.classList.add("colored");
    }
    
}
function getTabs(schem) {
    return schem.map(obj => `<button type="button" name="${obj.sectionSelectId}" value="${obj.sectionSelectId}" class="tab-button">${obj.tabName}</button>`).join("");
}


