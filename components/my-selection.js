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

    }

    handleEvent(e){
        (e.type==="click")?this.enviarWorker(e): undefined
    }

    enviarWorker(e){
        console.log(e);
    }

    connectedCallback(){
        Promise.resolve(mySelection.components()).then(html=>{
            this.shadowRoot.innerHTML=html
            this.MyButton=this.shadowRoot.querySelector(".btnSelection");
            this.MyButton.addEventListener("click", this.handleEvent.bind(this))
        })
    }
}

customElements.define(name, mySelection) 

