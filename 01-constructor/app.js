function Hero(name){
this.name = name,
this.sayName = function(){
    return `mi nombre es ${this.name}`
}
}

const names = ['chapulin','stuart','kevin','Doctor nefario','vector']

const heroes = []

names.forEach((name)=>{
    heroes.push(new Hero(name))
})

heroes.forEach((hero) => {
console.log(hero.sayName());

}
)
