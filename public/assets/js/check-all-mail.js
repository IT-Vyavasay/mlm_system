(function () {
    "use strict";
  
    let checkAll = document.querySelector('.check-all');
    checkAll.addEventListener('click', checkAllFn)
  
    function checkAllFn() {
      if (checkAll.checked) {
        document.querySelectorAll('.main-mail-checkbox input').forEach(function (e) {
          e.closest('.mail-list').classList.add('selected');
          e.checked = true;
        });
      }
      else {
        document.querySelectorAll('.main-mail-checkbox input').forEach(function (e) {
          e.closest('.mail-list').classList.remove('selected');
          e.checked = false;
        });
      }
    }
})();