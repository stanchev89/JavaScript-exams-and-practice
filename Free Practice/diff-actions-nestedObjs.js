
function solve(formData,origin){
    const toDelete = checkToDelete(formData,origin);
    const updateAndInsert = insertOrUpdate(formData,origin);
 return toDelete.concat(updateAndInsert);
};

function checkToDelete(formData,origin) {
    const formDataMyData = formData.myData;
    return origin.myData.reduce((acc,cur)=>{
    let toDelete = true;
    formDataMyData.forEach(obj => {
      if(obj.dataName === cur.dataName){
      toDelete = false;
      }
    });
    if(toDelete){
    cur.$method = 'delete';
    acc.push(cur)
    }
    return acc
  },[]);
};

function insertOrUpdate(formData,origin){
 return formData.myData.reduce((acc,cur)=>{
      let toInsert = true;
    origin.myData.forEach(obj =>{
        if(obj.dataName === cur.dataName){
        cur.$method = 'update';
        cur.records = recordsActions(cur.records,obj.records);
        acc.push(cur)
        toInsert = false;
      }
    });
    if(toInsert) {
      cur.$method = 'insert';
        cur.records.forEach(obj => obj.$method = 'insert');
        acc.push(cur)
    }
   return acc
 },[]);
};

function recordsActions(formDataRecords,originRecords){
    const deletedRecords = [];
    const result =  formDataRecords.reduce((acc,cur) =>{
      let toUpdate = false;
   originRecords.forEach((obj,index) =>{
      if(cur.recordNumber === obj.recordNumber){
      toUpdate = true;
      const formIndex = formDataRecords.findIndex(x => x.recordNumber === obj.recordNumber);;
      if(index !== formIndex) {
        cur.$method = 'delete';
        const copy = JSON.parse(JSON.stringify(cur));
        deletedRecords.push(copy);
      }else {
        cur.$method = 'update';
      }
      acc.push(cur)
      }
    });
     if(!toUpdate){
     cur.$method = 'insert';
     acc.push(cur);
    }
  return acc;
  },[]);
  
  result.push(...deletedRecords.map(obj =>{ 
    obj.$method = 'insert'
    return obj;
  }));
  return result.concat(recordsCheckToDelete(formDataRecords,originRecords));
}


function recordsCheckToDelete(formDataRecords,originRecords){
  return originRecords.reduce((acc,cur) => {
    let exist = false;
    formDataRecords.forEach(obj => {
    if(obj.recordNumber === cur.recordNumber){
     exist = true;
    }
  });
    if(!exist){
     cur.$method = 'delete';
     acc.push(cur)
    }
   return acc;
 },[]);
}

const origin = {
  "myData": [
    {
      "dataName": "BTV",
      "records": [
        {
          "recordNumber": 1,
          "parameters": [
            {
              "name": "news",
              "value": "",
              
            }
          ]
        },
        {
          "recordNumber": 2,
          "parameters": [
            {
              "name": "news",
              "value": "DDDD",
              
            }
          ]
        }
      ]
    },
    {
        "dataName": "NOVA",
        "records": [
          {
            "recordNumber": 1,
            "parameters": [
              {
                "name": "news",
                "value": "",
                
              }
            ]
          }
        ]
    }
  ]
}

const formData = {

  "myData": [
    {
      "dataName": "BTV",
      "records": [
        {
          "recordNumber": 2,
          "parameters": [
            {
              "name": "news",
              "value": "",
              
            }
          ]
        },
        {
          "recordNumber": 1,
          "parameters": [
            {
              "name": "news",
              "value": "DDDD",
              
            }
          ]
        }
      ]
    },
    {
        "dataName": "NOVA",
        "records": [
          {
            "recordNumber": 1,
            "parameters": [
              {
                "name": "news",
                "value": "",
                
              }
            ]
          }
        ]
    },
    {
      "dataName": "BBC",
      "records": [
        {
          "recordNumber": 1,
          "parameters": [
            {
              "name": "news",
              "value": "",
              
            }
          ]
        },
        {
          "recordNumber": 2,
          "parameters": [
            {
              "name": "news",
              "value": "",
              
            }
          ]
        },
        {
          "recordNumber": 3,
          "parameters": [
            {
              "name": "news",
              "value": "",
              
            }
          ]
        }
      ]
  }
  ]
}
const result = solve(formData,origin)
console.log(result);

  


  





