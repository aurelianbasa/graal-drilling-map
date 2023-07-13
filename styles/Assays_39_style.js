var size = 0;
var placement = 'point';
function categories_Assays_39(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case '[\'0.1\', \'0.11\', \'0.12\', \'0.13\', \'0.14\', \'0.15\', \'0.16\', \'0.17\', \'0.18\', \'0.19\', \'0.2\', \'0.21\', \'0.22\', \'0.23\', \'0.24\', \'0.25\', \'0.26\', \'0.27\', \'0.28\', \'0.29\', \'0.3\', \'0.31\', \'0.32\', \'0.33\', \'0.34\', \'0.35\', \'0.36\', \'0.37\', \'0.38\', \'0.39\', \'0.4\', \'0.41\', \'0.42\', \'0.43\', \'0.44\', \'0.45\', \'0.46\', \'0.47\', \'0.48\', \'0.49\', \'0.5\']':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(2,86,255,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 5}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '[\'0.51\', \'0.52\', \'0.53\', \'0.54\', \'0.55\', \'0.56\', \'0.57\', \'0.59\', \'0.6\', \'0.61\', \'0.62\', \'0.63\', \'0.64\', \'0.65\', \'0.67\', \'0.68\', \'0.69\', \'0.7\', \'0.72\', \'0.73\', \'0.74\', \'0.75\', \'0.76\', \'0.79\', \'0.8\', \'0.81\', \'0.82\', \'0.83\', \'0.84\', \'0.85\', \'0.86\', \'0.87\', \'0.88\', \'0.89\', \'0.9\', \'0.91\', \'0.92\', \'0.93\', \'0.94\', \'0.95\', \'0.96\', \'0.98\']':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(253,253,2,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 5}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '[\'1\', \'1.01\', \'1.02\', \'1.03\', \'1.04\', \'1.05\', \'1.06\', \'1.07\', \'1.08\', \'1.09\', \'1.1\', \'1.11\', \'1.12\', \'1.13\', \'1.14\', \'1.16\', \'1.17\', \'1.18\', \'1.19\', \'1.2\', \'1.21\', \'1.22\', \'1.23\', \'1.25\', \'1.26\', \'1.27\', \'1.28\', \'1.29\', \'1.3\', \'1.31\', \'1.32\', \'1.33\', \'1.34\', \'1.35\', \'1.36\', \'1.37\', \'1.38\', \'1.39\', \'1.4\', \'1.41\', \'1.42\', \'1.43\', \'1.44\', \'1.45\', \'1.46\', \'1.47\', \'1.48\', \'1.49\']':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(252,0,4,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 5}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '[\'1.5\', \'1.51\', \'1.52\', \'1.53\', \'1.54\', \'1.55\', \'1.56\', \'1.57\', \'1.58\', \'1.59\', \'1.6\', \'1.61\', \'1.62\', \'1.64\', \'1.66\', \'1.67\', \'1.68\', \'1.69\', \'1.7\', \'1.72\', \'1.75\', \'1.76\', \'1.77\', \'1.82\', \'1.83\', \'1.89\', \'1.93\', \'1.99\']':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(244,39,162,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 5}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '[\'2.21\', \'2.22\', \'2.36\', \'2.96\', \'3.2\']':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(158,2,197,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 5}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
default:
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(103,0,13,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 5}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Assays_39 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Ni_Eq (%)");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_Assays_39(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
