class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo.toLowerCase()) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque = 'ataque desconhecido';
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Criando instâncias de cada tipo de herói
let mago = new Heroi("Merlin", 70, "Mago");
let guerreiro = new Heroi("Arthur", 30, "Guerreiro");
let monge = new Heroi("Liu Kang", 25, "Monge");
let ninja = new Heroi("Scorpion", 35, "Ninja");

// Cada herói usando o método atacar
mago.atacar();
guerreiro.atacar();
monge.atacar();
ninja.atacar();
