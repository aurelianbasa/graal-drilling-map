var size = 0;
var placement = 'point';
function categories_Grades_10(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case '[\'0.1031\', \'0.1373\', \'0.1394\', \'0.1473\', \'0.1511\', \'0.16\', \'0.181\', \'0.1924\', \'0.2052\', \'0.218\', \'0.2189\', \'0.23\', \'0.233\', \'0.2347\', \'0.2368\', \'0.2581\', \'0.2626\', \'0.2652\', \'0.2706\', \'0.28\', \'0.285\', \'0.2881\', \'0.31\', \'0.3121\', \'0.3137\', \'0.3145\', \'0.3162\', \'0.3212\', \'0.3286\', \'0.33\', \'0.3323\', \'0.34\', \'0.3497\', \'0.35\', \'0.3543\', \'0.3565\', \'0.3568\', \'0.366\', \'0.37\', \'0.3705\', \'0.3828\', \'0.3902\', \'0.3927\', \'0.4\', \'0.4042\', \'0.408\', \'0.4146\', \'0.42\', \'0.425\', \'0.4312\', \'0.4321\', \'0.439\', \'0.447\', \'0.4496\', \'0.45\', \'0.462\', \'0.4695\', \'0.4739\', \'0.474\', \'0.4861\', \'0.4945\', \'0.5\']':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(17,4,255,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '[\'0.505\', \'0.5099\', \'0.51\', \'0.52\', \'0.5215\', \'0.5276\', \'0.53\', \'0.5487\', \'0.5533\', \'0.5539\', \'0.5565\', \'0.5592\', \'0.56\', \'0.57\', \'0.5842\', \'0.59\', \'0.5923\', \'0.5933\', \'0.6\', \'0.6188\', \'0.625\', \'0.6285\', \'0.64\', \'0.6433\', \'0.65\', \'0.66\', \'0.6614\', \'0.6663\', \'0.669\', \'0.67\', \'0.6791\', \'0.7\', \'0.7022\', \'0.7038\', \'0.7073\', \'0.7165\', \'0.7235\', \'0.7247\', \'0.75\', \'0.7502\', \'0.76\', \'0.7832\', \'0.7888\', \'0.792\', \'0.8\', \'0.8029\', \'0.815\', \'0.85\', \'0.8538\', \'0.86\', \'0.8654\', \'0.8663\', \'0.8764\', \'0.8808\', \'0.8824\', \'0.9064\', \'0.9077\', \'0.9128\', \'0.92\', \'0.9376\', \'0.9511\', \'0.9616\', \'0.9725\', \'0.9879\']':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,251,1,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '[\'1.005\', \'1.0081\', \'1.0215\', \'1.0264\', \'1.0306\', \'1.0366\', \'1.0371\', \'1.04\', \'1.0503\', \'1.0596\', \'1.08\', \'1.1005\', \'1.105\', \'1.12\', \'1.1482\', \'1.1562\', \'1.1647\', \'1.1793\', \'1.1825\', \'1.1952\', \'1.213\', \'1.2201\', \'1.222\', \'1.2281\', \'1.2284\', \'1.2454\', \'1.2479\', \'1.26\', \'1.2711\', \'1.2832\', \'1.2889\', \'1.2909\', \'1.2978\', \'1.3\', \'1.3014\', \'1.31\', \'1.3236\', \'1.35\', \'1.3509\', \'1.3632\', \'1.37\', \'1.385\', \'1.3856\', \'1.39\', \'1.3905\', \'1.4324\', \'1.45\', \'1.4539\', \'1.47\', \'1.4805\', \'1.4821\', \'1.4882\', \'1.4965\']':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,0,4,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '[\'1.5006\', \'1.5088\', \'1.582\', \'1.62\', \'1.651\', \'1.77\', \'1.7777\', \'1.7911\']':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(247,7,231,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Grades_10 = function(feature, resolution){
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
    
var style = categories_Grades_10(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
