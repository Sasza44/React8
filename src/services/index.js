class Service {
    getMenu(){
        return [
            {
                id: 1,
                productName: "Курячий бульйон",
                productDescription: "",
                productWeight: "365 г",
                ingredients: "Курячий бульйон, куряче філе, яйце, локшина і духмяні трави",
                price: 56,
                productImageUrl: "https://mafia.ua/storage/editor/fotos/450x450/brodo-di-galina.jpeg",
                keywords: ['гарячі страви', 'супи'],
                Weight: 365,
                stopList: false,
                ageRestrictions: false,
                like: 0
            },
            {
                id: 2,
                productName: "Сирний суп",
                productWeight: "300/60 г",
                ingredients: "Сирний крем-суп з дор блю, чеддером, вершковим сиром, беконом. Брускета з сирним кремом",
                price: 120,
                productImageUrl: "https://mafia.ua/storage/editor/fotos/450x450/syrnyj-sup.jpeg",
                keywords: ['гарячі страви', 'супи'],
                Weight: 360,
                stopList: false,
                ageRestrictions: false,
                like: 0
            },
            {
                id: 3,
                productName: "Цезар",
                productWeight: "275 г",
                ingredients: "Куряче філе на грилі, бекон, яйце, томати, салат ромен, пармезан, часникові крутони, соус Caesar",
                price: 130,
                productImageUrl: "https://mafia.ua/storage/editor/fotos/450x450/cezar_1562848584478.jpeg",
                keywords: ['салати'],
                Weight: 275,
                stopList: false,
                ageRestrictions: false,
                like: 0
            },
            {
                id: 4,
                productName: "Цитрусовий з креветками",
                productWeight: "220 г",
                ingredients: "Креветки, апельсин, грейпфрут, мікс салатів з цитрусовим соусом та мигдалем, помідори черрі",
                price: 160,
                productImageUrl: "https://mafia.ua/storage/editor/fotos/450x450/citrusovyj-s-krevetkami_1562848610626.jpeg",
                keywords: ['салати'],
                datarestoratoratin : this,
                Weight: 220,
                stopList: false,
                ageRestrictions: false,
                like: 0
            },
            {
                id: 5,
                productName: "Картопля фрі",
                productWeight: "140 г",
                ingredients: "шматочки картоплі, обсмажені у великій кількості сильно нагрітій рослинній олії",
                price: 30,
                productImageUrl: "https://mafia.ua/storage/editor/fotos/450x450/kartofel-fri_1550770471902.jpeg",
                keywords: ['гарячі страви', 'гарніри'],
                Weight: 140,
                stopList: false,
                ageRestrictions: false,
                like: 0
            },
            {
                id: 6,
                productName: "Стейк зі свинини гриль",
                productWeight: "180/150/30 г",
                ingredients: "Стейк зі свинини на грилі зі смаженою картоплею та грибами з соусом BBQ",
                price: 150,
                productImageUrl: "https://mafia.ua/storage/editor/fotos/450x450/stejk-so-cvininy-gril.jpeg",
                keywords: ['гарячі страви', 'стейки'],
                Weight: 350,
                stopList: false,
                ageRestrictions: false,
                like: 0
            },
            {
                id: 7,
                productName: "Курячі крильця в соусі",
                productWeight: "250/100 г",
                ingredients: "Курячі крильця в пряному соусі Приван, картопляні діпи",
                price: 100,
                productImageUrl: "https://mafia.ua/storage/editor/fotos/450x450/kurinye-krylyshki-v-souse_156284838828.jpeg",
                keywords: ['гарячі страви', 'мясо'],
                Weight: 350,
                stopList: false,
                ageRestrictions: false,
                like: 0
            },
            {
                id: 8,
                productName: "Наполеон із солоною карамеллю",
                productWeight: "120 г",
                ingredients: "Ніжні листкові коржі з карамельним соусом",
                price: 70,
                productImageUrl: "https://mafia.ua/storage/editor/fotos/450x450/napoleon-s-solenoj-karamelyu.jpeg",
                keywords: ['десерти'],
                Weight: 120,
                stopList: false,
                ageRestrictions: false,
                like: 0
            },
            {
                id: 9,
                productName: "Карбонара",
                productWeight: "500 г",
                ingredients: "Сир моцарела. шинка, грудинка, печериці, пармезан, помідори черрі",
                price: 175,
                productImageUrl: "https://mafia.ua/storage/editor/fotos/450x450/karbonara_1567060586370.jpeg",
                keywords: ['піца'],
                Weight: 175,
                stopList: false,
                ageRestrictions: false,
                like: 0
            },
            {
                id: 10,
                productName: "Піца мисливська",
                productWeight: "500 г",
                ingredients: "Мисливські ковбаски, молочні ковбаски, сир моцарелла, гливи, печериці, солодка цибуля, перець болгарський, соус BBQ, соус марі",
                price: 129,
                productImageUrl: "https://mafia.ua/storage/editor/fotos/450x450/picca-ohotnichya.jpeg",
                keywords: ['піца'],
                Weight: 500,
                stopList: false,
                ageRestrictions: false,
                like: 0
            },
            {
                id: 11,
                productName: "Кохання - це XXL",
                productWeight: "78шт., 1980 г",
                ingredients: "Рол №1 Рол з філе лосося, сиром Філадельфія, авокадо та огірком - 2 шт. Рол №2 Рол з крабом кімчі, авокадо та огірком в ікрі...",
                price: 900,
                productImageUrl: "https://mafia.ua/storage/editor/fotos/450x450/lyubov-eto-xxl.jpeg",
                keywords: ['суші'],
                Weight: 500,
                stopList: false,
                ageRestrictions: false,
                like: 0
            }
        ]
    }
}

export default Service;