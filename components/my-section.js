let pathName=new URL(import.meta.url).pathname
let name=pathName.split("/").pop().replace(".js", "")

export default class mySection extends HTMLElement{

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
        Promise.resolve(mySection.components()).then(html=>{
            this.shadowRoot.innerHTML=html
            this.MyButton=this.shadowRoot.querySelector(".btnSection");
            this.MyButton.addEventListener("click", this.handleEvent.bind(this))
        })

    }
}

customElements.define(name, mySection) 

