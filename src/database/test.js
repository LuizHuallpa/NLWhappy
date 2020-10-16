const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {

    // Insert data
   await saveOrphanage(db, {
    lat: "-22.9281815",
    lng:   "-47.0141569",
    name: "Lar das meninas",
    about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
    whatsapp:"96875025",
    images: [
        "https://images.unsplash.com/photo-1565742863375-85d007f0ad40?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
        "https://images.unsplash.com/photo-1474138452695-d27840ebf07e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",    
    ].toString(),

    instructions: "Venha como se sentir a vontade e traga muito amor e panciência para dar.",

    opening_hours:"Horário de visitas das 8 as 18",
    open_on_weekends:"1"



},)

    //data query

    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)
    
    //query by id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id= "1"')
    console.log(orphanage)

    // //delete data from the sheet
    // console.log(await db.run("DELETE FROM orphanages WHERE id = '4'"))
    // console.log(await db.run("DELETE FROM orphanages WHERE id = '5'"))

})