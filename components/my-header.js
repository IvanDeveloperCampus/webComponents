let pathName=new URL(import.meta.url).pathname;//direccion y entrar al pathname que es la ubicacion del component
let name=pathName.split("/").pop().replace(".js", "");//separa la ubicacion y retorna el ultimo elemento y le quita el .js para que quede solo el nombre de la etiqueta


export default class myHeader extends HTMLElement{
    static async components(){
        return await (await fetch(pathName.replace(".js", ".html"))).text();//llama al componente y retorna en texto
    }

    constructor(){
        super();
        this.attachShadow({mode:"open"});//reserva
    }

    handleEvent(e){
        (e.type==="click")?this.enviarWorker(e): undefined
    }

    enviarWorker(e){
        console.log(e);
    }

    connectedCallback(){
        Promise.resolve(myHeader.components()).then(html=>{
            this.shadowRoot.innerHTML=html
            this.MyButton=this.shadowRoot.querySelector(".btnHeader");
            this.MyButton.addEventListener("click", this.handleEvent.bind(this))
        })

    }
}


customElements.define(name, myHeader) //renderiza