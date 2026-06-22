function Arrays(){
    const arr=[1,2,3,4];
    let index=arr.indexOf(3);
    const added=[...arr.slice(0,index),5,...arr.slice(index)];
    console.log(arr);
    console.log(added);
}
export default Arrays;