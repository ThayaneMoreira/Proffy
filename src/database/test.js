const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
// inserir dados

    proffyValue = {
        name: "Thayane Moreira", 
        avatar: "https://avatars1.githubusercontent.com/u/67449365?s=460&u=14a300632bdd23f68a3033252bf524107faae6b9&v=4",
        whatsapp: "(11) 95227-0724", 
        bio: "Entusiasta das melhores tecnologias de Biologia avançada. Apaixonada pela vida!"
    }

    classValue = {
        subject: 1, 
        cost: "20" 
        // o proffy_id virá pelo banco
    }

    classScheduleValues = [
    {
        weekday: 1, 
        time_from: 720, 
        time_to: 1220
    },
    {
        weekday: 0,
        time_from: 520, 
        time_to: 1220
    }
]


// await createProffy(db, {proffyValue, classValue, classScheduleValues})
// consultar os dados inseridos

// todos os proffys
const selectedProffys = await db.all("SELECT * FROM proffys")
// console.log(selectedProffys)

// Consultar as classes de um determinado professor
// e trazer junto os dados do professor
const selectClassesAndProffys = await db.all(`
    SELECT classes.*, proffys.*
    FROM proffys
    JOIN classes ON (classes.proffy_id = proffys.id)
    WHERE classes.proffy_id = 1;
`)
 //   console.log(selectClassesAndProffys)

 // O horário que a pessoa trabalha, por exemplo, das 08h - 18h
 // O horário do time_from precisa ser menor ou igual ao horário solicitado
 // O time_to precisa ser acima

 const selectClassesSchedules = await db.all (`
    SELECT class_schedule.*
    FROM classes_schedule
    WHERE class_schedule.class_id = "1"
    AND class_schedule.weekday = "0"
    AND class_schedule.time_from <= "1300"
    AND class_schedule.time_to > "1300"
 `)

 //console.log(selectClassesSchedules)
})
