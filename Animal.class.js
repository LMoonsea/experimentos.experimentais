// export Importa a classe toda vez que precisar dela.
export class Animal {

    #nome = ''
    #especie = ''
    #familia
    #nascimento
    #metrica = {}

    constructor(nome, especie) {
        this.#nome = nome.trim()
        this.#especie = especie.trim()
        //document.write('Criando um bicho chamado ' + this.#nome + '<br>')
    }

    alimentacao() { }
    vacinar() { }

    get nome() {
        return this.#nome
    }

    set nome(nomea) {
        this.#nome = nomea.trim()
    }

}

class Biscoito { }

class Bolacha { }
