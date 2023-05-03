let pathName=new URL(import.meta.url).pathname
let name=pathName.split("/").pop().replace(".js", "")
console.log(name);

export default class mySelection extends HTMLElement{

    static async components(){
        return await ( await fetch(pathName.replace(".js", ".html"))).text()

    }

    constructor(){
        super()

        this.attachShadow({mode:"open"})

        Promise.resolve(mySelection.components()).then(html=>{
            this.shadowRoot.innerHTML=html
        })

        console.log("etiqueta selectionb lista");
    }
}

customElements.define(name, mySelection) 

