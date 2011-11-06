!function () {

  var remark = context.remark = context.remark || {}
    , config = remark.config = {}
    ;

  var load = function () {
    var remarkjs = /remark(-\d\.\d(\.\d)?)?(\.min)?\.js/i
      , scriptElements = document.getElementsByTagName('script')
      , element
      , i;

    for (i = 0; i < scriptElements.length; ++i) {
      element = scriptElements[i];

      if (remarkjs.exec(element.src)) {
        loadConfigJson(element.innerHTML.trim()); 
        break;
      }
    }
  };

  var loadConfigJson = function (jsonStr) {
    var json
      , property;

    if (jsonStr === '') {
      return;
    }
    
    try {
      json = JSON.parse(jsonStr);
    }
    catch (err) {
      alert('Parsing of remark config failed! Be sure to use valid JSON.') 
      return;
    }

    config.highlightStyle = json.highlightStyle;
  };

  load();

}(this);
