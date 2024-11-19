

// This function is created to test creation of new array of object from existing array of object taking only needed item from object and 
// adding new item


export default function ArrayMethod (){

    let studentDetails = [
        {
            name: 'dinesh',
            age: 20,
            marks: 30,
            Grade: 'F'
        },
        {
            name: 'divi',
            age: 20,
            marks: 60,
            Grade: 'B'
        },
        {
            name: 'vignesh',
            age: 30,
            marks: 80,
            Grade: 'A'
        }]

    const newStudenDetail = studentDetails.map((student) => (
        {
            name:student.name,
            istrue:false
        }
    ));

    console.log(newStudenDetail)

    return(
        <p>This items is in console</p>
    )

};