//from scratchstats.js
  function getProjectCount() {
  try {
  var url = "http://crossorigin.me/http://scratch.mit.edu/statistics/data/daily/";
  var response = "{\"PROJECT_COUNT\": 0, \"STUDIO_COUNT\": 0, \"USER_COUNT\": 0, \"COMMENT_COUNT\": 0, \"_TS\": 0}";
  var parsed = null;
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open( "GET", url, false );
  xmlHttp.send( null );
  response = xmlHttp.responseText;
  parsed = JSON.parse(response);
  return parsed.PROJECT_COUNT;
  }
  catch(err){
    return "0";
  }
}
function getProjectJSON(projectid) {
  try {
  var url = "http://crossorigin.me/http://scratch.mit.edu/api/v1/project/".concat(projectid).concat("/?format=json");
  var response = false;
  var parsed = null;
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open( "GET", url, false );
  xmlHttp.send( null );
  response = xmlHttp.responseText;
  if (response == "{\"error_message\": \"Sorry, this request could not be processed. Please try again later.\"}") {
  return false;
  }
  if (xmlHttp.status == 400) {
  return false;
  }
  parsed = JSON.parse(response);
  return parsed;
  }
  catch(err){
    return false;
  }
}
//api
  function randomProjectURL() {
  try{
  var url = "http://crossorigin.me/http://random.org/integers/?num=1&min=1&max=".concat(getProjectCount()).concat("&col=1&base=10&format=plain&rnd=new");
  var response = "123456";
  var parsed = null;
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open( "GET", url, false );
  xmlHttp.send( null );
  response = xmlHttp.responseText;
  var jsonParsed = getProjectJSON(response);
        while (jsonParsed == false) {
          url = "http://crossorigin.me/http://random.org/integers/?num=1&min=1&max=".concat(getProjectCount()).concat("&col=1&base=10&format=plain&rnd=new");
          response = "123456";
          parsed = null;
          xmlHttp = new XMLHttpRequest();
          xmlHttp.open( "GET", url, false );
          xmlHttp.send( null );
          response = xmlHttp.responseText;
          jsonParsed = getProjectJSON(response);
        }
        var projecturl = "https://scratch.mit.edu/projects/".concat(response).concat("/");
        return projecturl;
    } catch(err) {
        return false;
  }
}
