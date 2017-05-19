let studentList = document.getElementsByClassName('student-item'); // getting all the student list.
const $paginationDiv = $('.pagination');
const perPage = 10;
const pageCount = studentList.length/perPage;


function addPagination()  {
  let ul = $('<ul></ul>');
  for (let i = 1; i <= pageCount; i++) {
    let li = $('<li></li>');
    let anchor = $('<a href="#">' + i + '</a>');
    $(li).append(anchor);
    $(ul).append(li);
    $paginationDiv.append(ul);
  }
}
addPagination();
// Lists the 10 students per page based on which page is clicked
function listStudents(page) {
  for (let i = 0; i <= studentList.length; i++) {
      $(studentList[i]).hide();
    if (i >= page * 10 && i <= (page * 10) + 9) {
      $(studentList[i]).show();
    }
  }
}
listStudents(0);
// Defines which students show up when according to the listStudents function
function displayPage() {
  let $pages = $('.pagination ul li');
  for (let i = 0; i < pageCount; i++) {
    $($pages[i]).click(function() {
      return listStudents(i);
    });
  }
}




displayPage();
