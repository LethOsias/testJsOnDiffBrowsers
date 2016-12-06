//test commit for appmixer
(function(document) {
  //format: m/d/yyyy h:m am
  function formatDate(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear() + " " + strTime;
  }

  var now = new Date();
  var formattedNow = formatDate(now);
  var timezoneOffset = new Date().getTimezoneOffset();
  var inputValue = formattedNow + "; " + timezoneOffset;
  var input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("name", "clientdata");
  input.setAttribute("value", inputValue);
  document.forms[0].appendChild(input);
})(document);
