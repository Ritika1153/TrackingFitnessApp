class Student{
static studentData = {};
static setValue(key,value)
{
    this.studentData[key]= value;
}
static getValue(key)
{
    return this.studentData[key];
}
static clearData()
{
    this.studentData = {};
}
static getjsonString()
{
   return JSON.stringify(this.studentData)
     
    //var jsonstring = 
}
}
export default Student;