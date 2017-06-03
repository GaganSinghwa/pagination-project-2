let studentList = document.getElementsByClassName('student-item'); // getting all the student list.
let pageSize = 10; // how many students should be on the page.
let pageCount = Math.ceil(studentList.length/pageSize); // geting the page numbers rounded.
const $paginationDiv = $('.pagination'); //selecting the class pagination


// creating the pages for the how many students are there.
function pagination()  {
  let ul = $('<ul></ul>'); //creating unorder list tags
  for (let i = 1; i <= pageCount; i++) { //looping over the page count
    let li = $('<li></li>'); //creating list for the  for each item.
    let anchor = $('<a href="#">' + i + '</a>');
    $(li).append(anchor); // appending li tag with a tag.
    $(ul).append(li); // appending ul(students)  with li(students)
    $paginationDiv.append(ul); // pagination  appening to all the ul.
  }
}
pagination();
// showing the 10 students.
let listStudents = (pageNum) => {
  $(studentList).hide() //hiding the students
  let student =[]; //creating empty array for the students
    for (let i = 0; i < studentList.length; i++){ // looping over the student list
      if ( i >= pageNum * pageSize && i <= (pageNum * pageSize) + pageSize - 1){
       student.push($(studentList[i]))// pushing the 10 students to page
     $(studentList[i]).show(); // showing the students  that are suppose to be on the page.

    }
  }
  return student;
}
$(listStudents(0));

// Defines which students show up when each page is clicked.
function displayPage() {
  // let student = [];
  let $pages = $('.pagination ul li'); //selecting class pagination unoreder list and list inside.
  for (let i = 0; i < pageCount; i++) { // looping over the page until i is less than the pageCount.
    $($pages[i]).click(function() { //when clicked on each page..
        return $(listStudents(i));
    });

  }
}

displayPage();

// let searchStudent = () => {
//     let searchInput = $("<input></input>")
//     let studentEmail = $("#email");
//     let studentName = $("h3");
//     if (studentEmail === student-item){
//       for (let i = 0; i < studentEmail.length; i++){
//         studentEmail[i] + studentName;
//       } else if(!studentEmail === student-item){
//           alert("This user is not in the list of the students");
//         }
//       }
//     }
