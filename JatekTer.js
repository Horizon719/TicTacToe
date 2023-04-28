import Elem from "./Elem.js";

class JatekTer {

    #jatekterLista = []
    #lepes

    constructor(){
        this.#lepes = 0;
        this.#jatekterLista = ["","","","","","","","",""];
        const TAROLO = $("#tarolo");
        for (let i = 0; i < 9; i++) {
            const ELEM = new Elem(TAROLO, i);

            $(window).on("elemKattintas", (event) =>{
                if (event.detail.P.html() != "") {
                    return;
                }
                if (this.#lepes % 2 === 0) {
                    event.detail.setElem("X");
                    this.#jatekterLista[event.detail.id] = "X";
                } else {
                    event.detail.setElem("O");
                    this.#jatekterLista[event.detail.id] = "O";
                }
                this.#lepes++;
            });
        }
    }
}
export default JatekTer