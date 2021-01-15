// const origin = [
    // {
    //   "simFileName": "CBMI",
    //   "records": [
    //     {
    //       "recordNumber": 1,
    //       "parameters": [
    //         {
    //           "name": "msg_id",
    //           "value": "",
    //           "initialValue": ""
    //         }
    //       ]
    //     },
    //     {
    //       "recordNumber": 2,
    //       "parameters": [
    //         {
    //           "name": "msg_id",
    //           "value": "DDDD",
    //           "initialValue": ""
    //         }
    //       ]
    //     }
    //   ]
    // },
    // {
    //     "simFileName": "ACC",
    //     "records": [
    //       {
    //         "recordNumber": 1,
    //         "parameters": [
    //           {
    //             "name": "msg_id",
    //             "value": "",
    //             "initialValue": ""
    //           }
    //         ]
    //       }
    //     ]
    // }
//   ];

//   const formData = [
    // {
    //   "simFileName": "CBMI",
    //   "records": [
    //     {
    //       "recordNumber": 2,
    //       "parameters": [
    //         {
    //           "name": "msg_id",
    //           "value": "",
    //           "initialValue": ""
    //         }
    //       ]
    //     },
    //     {
    //       "recordNumber": 1,
    //       "parameters": [
    //         {
    //           "name": "msg_id",
    //           "value": "DDDD",
    //           "initialValue": ""
    //         }
    //       ]
    //     }
    //     // {
    //     //   "recordNumber": 3,
    //     //   "parameters": [
    //     //     {
    //     //       "name": "msg_id",
    //     //       "value": "DDDD",
    //     //       "initialValue": ""
    //     //     }
    //     //   ]
    //     // }
    //   ]
    // }
//   ];


//   function getRootAction(formDataChild,origin) {
//     const formDataSimFileName = formDataChild.simFileName;
//     origin.forEach(obj => {
//         const currentSimFileName = obj.simFileName;

//     })
//     const exist = origin.find(obj => obj.simFileName === formDataSimFileName);
//     return exist ? 'update' : 'insert';
//   };

//   function checkForDelete(formData,origin) {
//     let toDelete = true;
//     const output = [];
//     for(let i = 0; i < origin.length; i++) {
//         const currentOriginObj = origin[i];
//         for(let x = 0; x < formData.length; x++) {
//             const currentFormDatObj = formData[x];
//             if(currentFormDatObj.simFileName === currentOriginObj.simFileName) {
//                 toDelete = false;
//             }
//         }
//         if(toDelete) {
//             currentOriginObj.$action = 'delete';
//             for (const record of currentOriginObj.records) {
//                 record.$action = 'delete';
//             }
//             output.push(currentOriginObj);
//         }
//     }
//     return output;
//   }

//   function toDeleteAndGetRecordNumbers(child,origin) {
//     let toDelete = true;
//     const recordNumbers = [];
//     origin.forEach(obj => {
//         const records = obj?.records;
//         if(records) {
//             for (const key of records) {
//                  recordNumbers.push(key.recordNumber);
//                  if(key.recordNumber === child.recordNumber) {
//                      toDelete = false;
//                 }
//             }
//         }
        
//     })
//     return [toDelete,recordNumbers];
//   };

//   function getFormChildAction(formDataChild,origin) {
//     const [toDelete,originRecordNumbers] = toDeleteAndGetRecordNumbers(formDataChild,origin);
//     if(toDelete) {
//         return 'delete';
//     }
//     return originRecordNumbers.includes(formDataChild.recordNumber)
//         ?  'update'
//         :  'insert'
//     ;
//   };

//     const result = formData.forEach(child => {
//       child.$action = getRootAction(child,origin);
//       child.records.forEach(record => {
//           record.$action = getFormChildAction(record,origin);
//       })
//     }).join(checkForDelete(formData,origin));


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
      if(obj.simFileName === cur.simFileName){
      toDelete = false;
      }
    });
    if(toDelete){
    cur.$action = 'delete';
    acc.push(cur)
    }
    return acc
  },[]);
};

function insertOrUpdate(formData,origin){
 return formData.myData.reduce((acc,cur)=>{
      let toInsert = true;
    origin.myData.forEach(obj =>{
        if(obj.simFileName === cur.simFileName){
        cur.$action = 'update';
        cur.records = recordsActions(cur.records,obj.records);
        acc.push(cur)
        toInsert = false;
      }
    });
    if(toInsert) {
      cur.$action = 'insert';
        cur.records.forEach(obj => obj.$action = 'insert');
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
        cur.$action = 'delete';
        const copy = JSON.parse(JSON.stringify(cur));
        deletedRecords.push(copy);
      }else {
        cur.$action = 'update';
      }
      acc.push(cur)
      }
    });
     if(!toUpdate){
     cur.$action = 'insert';
     acc.push(cur);
    }
  return acc;
  },[]);
  
  result.push(...deletedRecords.map(obj =>{ 
    obj.$action = 'insert'
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
     cur.$action = 'delete';
     acc.push(cur)
    }
   return acc;
 },[]);
}

const origin = {
  "myData": [
    {
      "simFileName": "CBMI",
      "records": [
        {
          "recordNumber": 1,
          "parameters": [
            {
              "name": "msg_id",
              "value": "",
              "initialValue": ""
            }
          ]
        },
        {
          "recordNumber": 2,
          "parameters": [
            {
              "name": "msg_id",
              "value": "DDDD",
              "initialValue": ""
            }
          ]
        }
      ]
    },
    {
        "simFileName": "ACC",
        "records": [
          {
            "recordNumber": 1,
            "parameters": [
              {
                "name": "msg_id",
                "value": "",
                "initialValue": ""
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
      "simFileName": "CBMI",
      "records": [
        {
          "recordNumber": 2,
          "parameters": [
            {
              "name": "msg_id",
              "value": "",
              "initialValue": ""
            }
          ]
        },
        {
          "recordNumber": 1,
          "parameters": [
            {
              "name": "msg_id",
              "value": "DDDD",
              "initialValue": ""
            }
          ]
        }
      ]
    },
    {
        "simFileName": "ACC",
        "records": [
          {
            "recordNumber": 1,
            "parameters": [
              {
                "name": "msg_id",
                "value": "",
                "initialValue": ""
              }
            ]
          }
        ]
    },
    {
      "simFileName": "BBC",
      "records": [
        {
          "recordNumber": 1,
          "parameters": [
            {
              "name": "msg_id",
              "value": "",
              "initialValue": ""
            }
          ]
        },
        {
          "recordNumber": 2,
          "parameters": [
            {
              "name": "msg_id",
              "value": "",
              "initialValue": ""
            }
          ]
        },
        {
          "recordNumber": 3,
          "parameters": [
            {
              "name": "msg_id",
              "value": "",
              "initialValue": ""
            }
          ]
        }
      ]
  }
  ]
}
const result = solve(formData,origin)
console.log(result);

  


  





