let studentList = document.getElementsByClassName('student-item'); // getting all the student list.
let pageSize = 10; // how many students should be on the page.
let pageCount = studentList.length/pageSize;
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
let listStudents = (pageNum, studentList) => {
  $(studentList).hide() //hiding the students
  let students = []; //creating emety array for the students
    for (let i = 0; i < studentList.length; i++){ // looping over the student list
      if ( i + 1 <= (pageNum * pageSize)){
     students.push(studentList[i]); // pushing the 10 students to page
     $(studentList[i]).show();

    }
  }
  return students;
}
$(listStudents(1, studentList));

// Defines which students show up when each page is clicked.
function displayPage() {
  let student = [];
  let $pages = $('.pagination ul li'); //selecting class pagination unoreder list and list inside.
  for (let i = 0; i < pageCount; i++) { // looping over the page .
    $($pages[i]).click(function() { //when clicked on each page..
      return student.push(studentList[i]); //
    });

  }
}

displayPage();
