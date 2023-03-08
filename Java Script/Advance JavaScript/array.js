let a = [2, 4, 6, 8,9,10,12];

// var result = [2, 4, 6, 8].every((e) => (e % 2 === 0))
// console.log(result)

// console.log(a.fill("Suman",2,5))

// let res = a.filter((ele) => (ele%2  === 0))
// console.log(res)

let user = {
    name: "Suman",
    age: 22,
    courseList:[],
    courseName: function (name) {
        this.courseList.push(name)
    },
    getCourseCount: function ()
    {
        return `${this.name} purchased ${this.courseList.length} Courses`
        }
    
}
user.courseName("Full Stack Web Development")
user.courseName("Full Stack Web Development")
user.courseName("Full Stack Web Development")

console.log(user.getCourseCount())