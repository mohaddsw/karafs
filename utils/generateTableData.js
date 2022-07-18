export default function generateData(data,params=[]){
 let newData=[]
    data.forEach(item => {
        let obj={}
        params.forEach(param => {
            if(item[param]){
               obj[param]=item[param]
            }
        });
        newData.push(obj)
    });
    return newData

}