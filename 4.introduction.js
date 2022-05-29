let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: 
    {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    }

    let editData = {
        ...data,
        name : 'MUHAMAD LUKMAN HAKIM',
        email : '93.hlukman@gmail.com',
        hooby : 'nyantai',
    }
    console.log(editData)

    let {name, address: {street, city}} = editData
let editData1 = {
    name: name,
    addrees: {
        street: street,
        city: city,
    }
}
console.log(editData1)
    