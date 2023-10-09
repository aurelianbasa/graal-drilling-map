var size = 0;
var placement = 'point';
function categories_Collar_17(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case '[\'GRL-22-30\', \'GRL-22-31\', \'GRL-22-32\', \'GRL-22-33\', \'GRL-22-34\', \'GRL-22-35\', \'GRL-22-36\', \'GRL-22-37\', \'GRL-22-37A\', \'GRL-22-38\', \'GRL-22-39\', \'GRL-22-40\', \'GRL-22-41\', \'GRL-22-42\', \'GRL-22-43\', \'GRL-22-44\', \'GRL-22-45\', \'GRL-22-46\', \'GRL-22-47\', \'GRL-22-48\', \'GRL-22-49\', \'GRL-22-50\', \'GRL-22-51\', \'GRL-22-52\', \'GRL-22-53\', \'GRL-22-54\', \'GRL-22-55\', \'GRL-22-56\', \'GRL-22-57\', \'GRL-22-58\', \'GRL-22-59\', \'GRL-22-60\', \'GRL-22-61\']':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 5.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(1,255,18,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '[\'NRC-21-01\', \'NRC-21-01-W1\', \'NRC-21-01-W2\', \'NRC-21-01-W3\', \'NRC-21-02\', \'NRC-21-03\', \'NRC-21-04\', \'NRC-21-05\', \'NRC-21-06\', \'NRC-21-07\', \'NRC-21-08\', \'NRC-21-09\', \'NRC-21-10\', \'NRC-21-11\', \'NRC-21-12\', \'NRC-21-13\', \'NRC-21-14\', \'NRC-21-15\', \'NRC-21-16\', \'NRC-21-17\', \'NRC-21-18\', \'NRC-21-19\', \'NRC-21-20\', \'NRC-21-21\', \'NRC-21-22\', \'NRC-22-23\', \'NRC-22-24\', \'NRC-22-25\', \'NRC-22-26\', \'NRC-22-27\', \'NRC-22-28\', \'NRC-22-29\']':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 5.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(13,158,255,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '[\'1279-00-08\', \'1279-00-09\', \'1279-00-10\', \'1279-00-15\', \'1279-00-16\', \'1279-00-17\', \'1279-00-18\', \'1279-00-19\', \'1279-00-20\', \'1279-00-21\', \'1279-00-22\', \'1279-00-23\', \'1279-00-24\', \'1279-00-25\', \'1279-00-26\', \'1279-01-35\', \'1279-01-36\', \'1279-01-37\', \'1279-03-38\', \'1279-03-39\', \'1279-03-39P\', \'1279-03-40\', \'1279-03-41\', \'1279-03-42\', \'1279-03-43\', \'1279-03-44\', \'1279-03-45\', \'1279-04-46\', \'1279-04-47\', \'1279-04-48\', \'1279-04-49\', \'1279-04-50\', \'1279-04-51\', \'MHY-97-01\', \'MHY-97-02\', \'MHY-97-03\', \'NA-97-01\', \'NA-97-02\', \'NA-97-03\', \'NA-97-04\', \'NB-97-01\', \'NB-97-02\']':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 5.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(255,255,255,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Collar_17 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Sondage");
    var labelText = "";
    size = 0;
    var labelFont = "13.0px \'Arial\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "#fafafa";
    var bufferWidth = 0.5;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_Collar_17(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
