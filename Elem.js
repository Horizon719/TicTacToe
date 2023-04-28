class Elem{
    constructor(TAROLO, id){
        this.id = id;
        TAROLO.append(`
            <div class="elem"><p></p></div>
        `);
        this.ELEM = $(".elem:last-child");
        this.P = this.ELEM.children("p");
        this.ELEM.on("click", () => {
            this.esemenyTrigger()
        })
    }

    setElem(ertek) {
        this.P.html(ertek);
    }

    esemenyTrigger(){
        const esemeny = new CustomEvent("elemKattintas", {
            detail: this
          });
        window.dispatchEvent(esemeny);
    }
}

export default Elem
