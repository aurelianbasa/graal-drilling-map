var wms_layers = [];


        var lyr_BingMap_0 = new ol.layer.Tile({
            'title': 'Bing Map',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://ecn.dynamic.t0.tiles.virtualearth.net/comp/CompositionHandler/{q}?mkt=en-us&it=G,VE,BX,L,LA&shading=hill'
            })
        });

        var lyr_Bingsatellite_1 = new ol.layer.Tile({
            'title': 'Bing satellite',
            'type': 'base',
            'opacity': 0.600000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://ecn.t3.tiles.virtualearth.net/tiles/a{q}.jpeg?g=1'
            })
        });

    var projection_2021_Inv_Ecofor_20cm_RVB_2 = ol.proj.get('EPSG:3857');
    var projectionExtent_2021_Inv_Ecofor_20cm_RVB_2 = projection_2021_Inv_Ecofor_20cm_RVB_2.getExtent();
    var size_2021_Inv_Ecofor_20cm_RVB_2 = ol.extent.getWidth(projectionExtent_2021_Inv_Ecofor_20cm_RVB_2) / 256;
    var resolutions_2021_Inv_Ecofor_20cm_RVB_2 = new Array(14);
    var matrixIds_2021_Inv_Ecofor_20cm_RVB_2 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_2021_Inv_Ecofor_20cm_RVB_2[z] = size_2021_Inv_Ecofor_20cm_RVB_2 / Math.pow(2, z);
        matrixIds_2021_Inv_Ecofor_20cm_RVB_2[z] = z;
    }
    var lyr_2021_Inv_Ecofor_20cm_RVB_2 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                              url: "https://servicesmatriciels.mern.gouv.qc.ca/erdas-iws/ogc/wmts/Imagerie_Aeroportee_Forestiere_Historique?request=getcapabilities&service=wmts",
    attributions: ' ',
                                "layer": "Inventaire_Ecoforestier_2021_2021_Inv_Ecofor_20cm_RVB",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/png',
              projection: projection_2021_Inv_Ecofor_20cm_RVB_2,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_2021_Inv_Ecofor_20cm_RVB_2),
                resolutions: resolutions_2021_Inv_Ecofor_20cm_RVB_2,
                matrixIds: matrixIds_2021_Inv_Ecofor_20cm_RVB_2
              }),
              style: 'default',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: "2021_Inv_Ecofor_20cm_RVB",
                            opacity: 0.51,
                            
                            
                          });
var lyr_ReliefombrLiDARdgrad_3 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://geoegl.msp.gouv.qc.ca/ws/mffpecofor.fcgi",
    attributions: ' ',
                              params: {
                                "LAYERS": "lidar_ombre",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Relief ombré LiDAR (dégradé)",
                            opacity: 0.487000,
                            
                            
                          });
              wms_layers.push([lyr_ReliefombrLiDARdgrad_3, 0]);

        var lyr_ESRIStandard_4 = new ol.layer.Tile({
            'title': 'ESRI Standard',
            'type': 'base',
            'opacity': 0.685000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var lyr_PenteLiDARdgrad_5 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://geoegl.msp.gouv.qc.ca/ws/mffpecofor.fcgi",
    attributions: ' ',
                              params: {
                                "LAYERS": "lidar_pentes",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Pente LiDAR (dégradé)",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_PenteLiDARdgrad_5, 0]);
var format_Claims_6 = new ol.format.GeoJSON();
var features_Claims_6 = format_Claims_6.readFeatures(json_Claims_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Claims_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Claims_6.addFeatures(features_Claims_6);
var lyr_Claims_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Claims_6, 
                style: style_Claims_6,
                interactive: true,
                title: '<img src="styles/legend/Claims_6.png" /> Claims'
            });
var format_Propertylimits_7 = new ol.format.GeoJSON();
var features_Propertylimits_7 = format_Propertylimits_7.readFeatures(json_Propertylimits_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Propertylimits_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Propertylimits_7.addFeatures(features_Propertylimits_7);
var lyr_Propertylimits_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Propertylimits_7, 
                style: style_Propertylimits_7,
                interactive: true,
                title: '<img src="styles/legend/Propertylimits_7.png" /> Property limits'
            });
var format_Sulfidesinterceptions_8 = new ol.format.GeoJSON();
var features_Sulfidesinterceptions_8 = format_Sulfidesinterceptions_8.readFeatures(json_Sulfidesinterceptions_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sulfidesinterceptions_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sulfidesinterceptions_8.addFeatures(features_Sulfidesinterceptions_8);
var lyr_Sulfidesinterceptions_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sulfidesinterceptions_8, 
                style: style_Sulfidesinterceptions_8,
                interactive: true,
    title: 'Sulfides interceptions<br />\
    <img src="styles/legend/Sulfidesinterceptions_8_0.png" /> F1<br />\
    <img src="styles/legend/Sulfidesinterceptions_8_1.png" /> F2<br />\
    <img src="styles/legend/Sulfidesinterceptions_8_2.png" /> MZone<br />'
        });
var format_Assays_9 = new ol.format.GeoJSON();
var features_Assays_9 = format_Assays_9.readFeatures(json_Assays_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Assays_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Assays_9.addFeatures(features_Assays_9);
var lyr_Assays_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Assays_9, 
                style: style_Assays_9,
                interactive: true,
    title: 'Assays<br />\
    <img src="styles/legend/Assays_9_0.png" /> 0.1 - 0.5<br />\
    <img src="styles/legend/Assays_9_1.png" /> 0.5 - 1<br />\
    <img src="styles/legend/Assays_9_2.png" /> 1 - 1.5<br />\
    <img src="styles/legend/Assays_9_3.png" /> 1.5 - 2<br />\
    <img src="styles/legend/Assays_9_4.png" /> 2 - 4<br />\
    <img src="styles/legend/Assays_9_5.png" /> <br />'
        });
var format_Grades_10 = new ol.format.GeoJSON();
var features_Grades_10 = format_Grades_10.readFeatures(json_Grades_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Grades_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Grades_10.addFeatures(features_Grades_10);
var lyr_Grades_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Grades_10, 
                style: style_Grades_10,
                interactive: true,
    title: 'Grades<br />\
    <img src="styles/legend/Grades_10_0.png" /> 0.1 - 0.5% NiEq<br />\
    <img src="styles/legend/Grades_10_1.png" /> 0.5 - 1% NiEq<br />\
    <img src="styles/legend/Grades_10_2.png" /> 1 - 1.5% NiEq<br />\
    <img src="styles/legend/Grades_10_3.png" /> 1.5 - 2% NiEq<br />'
        });
var format_DDHCollar_11 = new ol.format.GeoJSON();
var features_DDHCollar_11 = format_DDHCollar_11.readFeatures(json_DDHCollar_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DDHCollar_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DDHCollar_11.addFeatures(features_DDHCollar_11);
var lyr_DDHCollar_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DDHCollar_11, 
                style: style_DDHCollar_11,
                interactive: true,
    title: 'DDH Collar<br />\
    <img src="styles/legend/DDHCollar_11_0.png" /> 2022 (phase 2)<br />\
    <img src="styles/legend/DDHCollar_11_1.png" /> 2021-2022 (phase 1)<br />\
    <img src="styles/legend/DDHCollar_11_2.png" /> Historical<br />'
        });
var format_Trace_12 = new ol.format.GeoJSON();
var features_Trace_12 = format_Trace_12.readFeatures(json_Trace_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Trace_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trace_12.addFeatures(features_Trace_12);
var lyr_Trace_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Trace_12, 
                style: style_Trace_12,
                interactive: true,
    title: 'Trace<br />\
    <img src="styles/legend/Trace_12_0.png" /> 2022 (phase2),Hors section,Historical,2021-2022 (phase1)<br />'
        });
var format_Sulfidesinterceptions_13 = new ol.format.GeoJSON();
var features_Sulfidesinterceptions_13 = format_Sulfidesinterceptions_13.readFeatures(json_Sulfidesinterceptions_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sulfidesinterceptions_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sulfidesinterceptions_13.addFeatures(features_Sulfidesinterceptions_13);
var lyr_Sulfidesinterceptions_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sulfidesinterceptions_13, 
                style: style_Sulfidesinterceptions_13,
                interactive: true,
    title: 'Sulfides interceptions<br />\
    <img src="styles/legend/Sulfidesinterceptions_13_0.png" /> F1<br />\
    <img src="styles/legend/Sulfidesinterceptions_13_1.png" /> F2<br />\
    <img src="styles/legend/Sulfidesinterceptions_13_2.png" /> MZone<br />'
        });
var format_Collar_14 = new ol.format.GeoJSON();
var features_Collar_14 = format_Collar_14.readFeatures(json_Collar_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Collar_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Collar_14.addFeatures(features_Collar_14);
var lyr_Collar_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Collar_14, 
                style: style_Collar_14,
                interactive: true,
    title: 'Collar<br />\
    <img src="styles/legend/Collar_14_0.png" /> 2022<br />\
    <img src="styles/legend/Collar_14_1.png" /> 2021<br />\
    <img src="styles/legend/Collar_14_2.png" /> Historical<br />'
        });
var format_Trace_15 = new ol.format.GeoJSON();
var features_Trace_15 = format_Trace_15.readFeatures(json_Trace_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Trace_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trace_15.addFeatures(features_Trace_15);
var lyr_Trace_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Trace_15, 
                style: style_Trace_15,
                interactive: true,
    title: 'Trace<br />\
    <img src="styles/legend/Trace_15_0.png" /> 2022 (phase2),Hors section,Historical,2021-2022 (phase1)<br />'
        });
var format_Sulfidesinterceptions_16 = new ol.format.GeoJSON();
var features_Sulfidesinterceptions_16 = format_Sulfidesinterceptions_16.readFeatures(json_Sulfidesinterceptions_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sulfidesinterceptions_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sulfidesinterceptions_16.addFeatures(features_Sulfidesinterceptions_16);
var lyr_Sulfidesinterceptions_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sulfidesinterceptions_16, 
                style: style_Sulfidesinterceptions_16,
                interactive: true,
    title: 'Sulfides interceptions<br />\
    <img src="styles/legend/Sulfidesinterceptions_16_0.png" /> F1<br />\
    <img src="styles/legend/Sulfidesinterceptions_16_1.png" /> F2<br />\
    <img src="styles/legend/Sulfidesinterceptions_16_2.png" /> MZone<br />'
        });
var format_Collar_17 = new ol.format.GeoJSON();
var features_Collar_17 = format_Collar_17.readFeatures(json_Collar_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Collar_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Collar_17.addFeatures(features_Collar_17);
var lyr_Collar_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Collar_17, 
                style: style_Collar_17,
                interactive: true,
    title: 'Collar<br />\
    <img src="styles/legend/Collar_17_0.png" /> 2022<br />\
    <img src="styles/legend/Collar_17_1.png" /> 2021<br />\
    <img src="styles/legend/Collar_17_2.png" /> Historical<br />'
        });
var group_Sectiondrillholedata = new ol.layer.Group({
                                layers: [lyr_Trace_15,lyr_Sulfidesinterceptions_16,lyr_Collar_17,],
                                title: "Section drillhole data"});
var group_2023 = new ol.layer.Group({
                                layers: [lyr_Sulfidesinterceptions_8,lyr_Assays_9,lyr_Grades_10,lyr_DDHCollar_11,lyr_Trace_15,lyr_Sulfidesinterceptions_16,lyr_Collar_17,],
                                title: "2023"});
var group_Property = new ol.layer.Group({
                                layers: [lyr_Claims_6,lyr_Propertylimits_7,],
                                title: "Property"});
var group_Satelliteimagery = new ol.layer.Group({
                                layers: [lyr_BingMap_0,lyr_Bingsatellite_1,lyr_2021_Inv_Ecofor_20cm_RVB_2,lyr_ReliefombrLiDARdgrad_3,lyr_ESRIStandard_4,lyr_PenteLiDARdgrad_5,],
                                title: "Satellite imagery"});

lyr_BingMap_0.setVisible(true);lyr_Bingsatellite_1.setVisible(true);lyr_2021_Inv_Ecofor_20cm_RVB_2.setVisible(true);lyr_ReliefombrLiDARdgrad_3.setVisible(true);lyr_ESRIStandard_4.setVisible(true);lyr_PenteLiDARdgrad_5.setVisible(true);lyr_Claims_6.setVisible(true);lyr_Propertylimits_7.setVisible(true);lyr_Sulfidesinterceptions_8.setVisible(true);lyr_Assays_9.setVisible(true);lyr_Grades_10.setVisible(true);lyr_DDHCollar_11.setVisible(true);lyr_Trace_12.setVisible(true);lyr_Sulfidesinterceptions_13.setVisible(true);lyr_Collar_14.setVisible(true);lyr_Trace_15.setVisible(true);lyr_Sulfidesinterceptions_16.setVisible(true);lyr_Collar_17.setVisible(true);
var layersList = [group_Satelliteimagery,group_Property,group_2023];
lyr_Claims_6.set('fieldAliases', {'fid': 'fid', 'POL_NO_SEQ': 'POL_NO_SEQ', 'TPO_CODE': 'TPO_CODE', 'TPO_DES_FR': 'TPO_DES_FR', 'TPO_DES_AN': 'TPO_DES_AN', 'FEU_NO_NOM': 'FEU_NO_NOM', 'POL_NO_RB': 'POL_NO_RB', 'CSI_CODE': 'CSI_CODE', 'CSI_NOM': 'CSI_NOM', 'RBP_NO': 'RBP_NO', 'RBP_NOM': 'RBP_NOM', 'POL_NO_LC': 'POL_NO_LC', 'POL_NO_SEC': 'POL_NO_SEC', 'LOCA': 'LOCA', 'POL_SUPRF': 'POL_SUPRF', 'TER_CODE': 'TER_CODE', 'TIT_NO': 'TIT_NO', 'STI_CODE': 'STI_CODE', 'STI_DES_FR': 'STI_DES_FR', 'STI_DES_AN': 'STI_DES_AN', 'TIT_DAT_EM': 'TIT_DAT_EM', 'TIT_DAT_EX': 'TIT_DAT_EX', 'TIT_NB_ECH': 'TIT_NB_ECH', 'TIT_NB_REN': 'TIT_NB_REN', 'TIT_DAT_AN': 'TIT_DAT_AN', 'TIT_DAT_JA': 'TIT_DAT_JA', 'TIT_CRE_CU': 'TIT_CRE_CU', 'TIT_SUPRF': 'TIT_SUPRF', 'TIT_COM_LO': 'TIT_COM_LO', 'TIT_TR_REQ': 'TIT_TR_REQ', 'TIT_DES': 'TIT_DES', 'TIT_DES_CE': 'TIT_DES_CE', 'SES_NO_SEQ': 'SES_NO_SEQ', 'SES_SEQ_FE': 'SES_SEQ_FE', 'FEU_NO_SES': 'FEU_NO_SES', 'FEU_NO': 'FEU_NO', 'TT_CODE': 'TT_CODE', 'TT_DES_FR': 'TT_DES_FR', 'TT_DES_AN': 'TT_DES_AN', 'DET_POURC': 'DET_POURC', 'DET_NO': 'DET_NO', 'DET_NOM': 'DET_NOM', 'DET_LIST': 'DET_LIST', 'DET_NUMER': 'DET_NUMER', 'TIT_DR_REQ': 'TIT_DR_REQ', });
lyr_Propertylimits_7.set('fieldAliases', {'fid': 'fid', 'POL_NO_SEQ': 'POL_NO_SEQ', 'TPO_CODE': 'TPO_CODE', 'TPO_DES_FR': 'TPO_DES_FR', 'TPO_DES_AN': 'TPO_DES_AN', 'FEU_NO_NOM': 'FEU_NO_NOM', 'POL_NO_RB': 'POL_NO_RB', 'CSI_CODE': 'CSI_CODE', 'CSI_NOM': 'CSI_NOM', 'RBP_NO': 'RBP_NO', 'RBP_NOM': 'RBP_NOM', 'POL_NO_LC': 'POL_NO_LC', 'POL_NO_SEC': 'POL_NO_SEC', 'LOCA': 'LOCA', 'POL_SUPRF': 'POL_SUPRF', 'TER_CODE': 'TER_CODE', 'TIT_NO': 'TIT_NO', 'STI_CODE': 'STI_CODE', 'STI_DES_FR': 'STI_DES_FR', 'STI_DES_AN': 'STI_DES_AN', 'TIT_DAT_EM': 'TIT_DAT_EM', 'TIT_DAT_EX': 'TIT_DAT_EX', 'TIT_NB_ECH': 'TIT_NB_ECH', 'TIT_NB_REN': 'TIT_NB_REN', 'TIT_DAT_AN': 'TIT_DAT_AN', 'TIT_DAT_JA': 'TIT_DAT_JA', 'TIT_CRE_CU': 'TIT_CRE_CU', 'TIT_SUPRF': 'TIT_SUPRF', 'TIT_COM_LO': 'TIT_COM_LO', 'TIT_TR_REQ': 'TIT_TR_REQ', 'TIT_DES': 'TIT_DES', 'TIT_DES_CE': 'TIT_DES_CE', 'SES_NO_SEQ': 'SES_NO_SEQ', 'SES_SEQ_FE': 'SES_SEQ_FE', 'FEU_NO_SES': 'FEU_NO_SES', 'FEU_NO': 'FEU_NO', 'TT_CODE': 'TT_CODE', 'TT_DES_FR': 'TT_DES_FR', 'TT_DES_AN': 'TT_DES_AN', 'DET_POURC': 'DET_POURC', 'DET_NO': 'DET_NO', 'DET_NOM': 'DET_NOM', 'DET_LIST': 'DET_LIST', 'DET_NUMER': 'DET_NUMER', 'TIT_DR_REQ': 'TIT_DR_REQ', 'fid_2': 'fid_2', 'POL_NO_S_1': 'POL_NO_S_1', 'TPO_CODE_2': 'TPO_CODE_2', 'TPO_DES__1': 'TPO_DES__1', 'TPO_DES__2': 'TPO_DES__2', 'FEU_NO_N_1': 'FEU_NO_N_1', 'POL_NO_RB_': 'POL_NO_RB_', 'CSI_CODE_2': 'CSI_CODE_2', 'CSI_NOM_2': 'CSI_NOM_2', 'RBP_NO_2': 'RBP_NO_2', 'RBP_NOM_2': 'RBP_NOM_2', 'POL_NO_LC_': 'POL_NO_LC_', 'POL_NO_S_2': 'POL_NO_S_2', 'LOCA_2': 'LOCA_2', 'POL_SUPRF_': 'POL_SUPRF_', 'TER_CODE_2': 'TER_CODE_2', 'TIT_NO_2': 'TIT_NO_2', 'STI_CODE_2': 'STI_CODE_2', 'STI_DES__1': 'STI_DES__1', 'STI_DES__2': 'STI_DES__2', 'TIT_DAT__1': 'TIT_DAT__1', 'TIT_DAT__2': 'TIT_DAT__2', 'TIT_NB_E_1': 'TIT_NB_E_1', 'TIT_NB_R_1': 'TIT_NB_R_1', 'TIT_DAT__3': 'TIT_DAT__3', 'TIT_DAT__4': 'TIT_DAT__4', 'TIT_CRE__1': 'TIT_CRE__1', 'TIT_SUPRF_': 'TIT_SUPRF_', 'TIT_COM__1': 'TIT_COM__1', 'TIT_TR_R_1': 'TIT_TR_R_1', 'TIT_DES_2': 'TIT_DES_2', 'TIT_DES__1': 'TIT_DES__1', 'SES_NO_S_1': 'SES_NO_S_1', 'SES_SEQ__1': 'SES_SEQ__1', 'FEU_NO_S_1': 'FEU_NO_S_1', 'FEU_NO_2': 'FEU_NO_2', 'TT_CODE_2': 'TT_CODE_2', 'TT_DES_FR_': 'TT_DES_FR_', 'TT_DES_AN_': 'TT_DES_AN_', 'DET_POURC_': 'DET_POURC_', 'DET_NO_2': 'DET_NO_2', 'DET_NOM_2': 'DET_NOM_2', 'DET_LIST_2': 'DET_LIST_2', 'DET_NUMER_': 'DET_NUMER_', 'TIT_DR_R_1': 'TIT_DR_R_1', 'layer': 'layer', 'path': 'path', });
lyr_Sulfidesinterceptions_8.set('fieldAliases', {'fid': 'fid', 'Projet': 'Projet', 'Sondage': 'Sondage', 'De': 'De', 'Ã€': 'Ã€', 'Titre': 'Titre', 'RÃ©sumÃ©': 'RÃ©sumÃ©', 'Description': 'Description', '_From_x': '_From_x', '_From_y': '_From_y', '_From_z': '_From_z', '_To_x': '_To_x', '_To_y': '_To_y', '_To_z': '_To_z', '_Mid_x': '_Mid_x', '_Mid_y': '_Mid_y', '_Mid_z': '_Mid_z', });
lyr_Assays_9.set('fieldAliases', {'fid': 'fid', 'Projet': 'Projet', 'Sondage': 'Sondage', 'De': 'De', 'Ã€': 'Ã€', 'Ni_Eq (%)': 'Ni_Eq (%)', 'field_6': 'field_6', 'field_7': 'field_7', '_From_x': '_From_x', '_From_y': '_From_y', '_From_z': '_From_z', '_To_x': '_To_x', '_To_y': '_To_y', '_To_z': '_To_z', '_Mid_x': '_Mid_x', '_Mid_y': '_Mid_y', '_Mid_z': '_Mid_z', });
lyr_Grades_10.set('fieldAliases', {'fid': 'fid', 'Sondage': 'Sondage', 'Zone': 'Zone', 'De': 'De', 'Ã€': 'Ã€', 'Longueur sur la carotte': 'Longueur sur la carotte', 'Ni_Eq (%)': 'Ni_Eq (%)', 'Ni_Calc (%)': 'Ni_Calc (%)', 'Cu_Calc (%)': 'Cu_Calc (%)', 'Co_Calc (%)': 'Co_Calc (%)', '_From_x': '_From_x', '_From_y': '_From_y', '_From_z': '_From_z', '_To_x': '_To_x', '_To_y': '_To_y', '_To_z': '_To_z', '_Mid_x': '_Mid_x', '_Mid_y': '_Mid_y', '_Mid_z': '_Mid_z', });
lyr_DDHCollar_11.set('fieldAliases', {'fid': 'fid', 'Projet': 'Projet', 'Sondage': 'Sondage', 'Azimut': 'Azimut', 'Plongée': 'Plongée', 'Départ': 'Départ', 'Fin': 'Fin', 'Longueur': 'Longueur', 'UTM NAD83': 'UTM NAD83', 'UTM NAD8_1': 'UTM NAD8_1', 'UTM NAD8_2': 'UTM NAD8_2', 'auxiliary_storage_labeling_show': 'auxiliary_storage_labeling_show', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', });
lyr_Trace_12.set('fieldAliases', {'fid': 'fid', 'CollarID': 'CollarID', 'SegLength': 'SegLength', });
lyr_Sulfidesinterceptions_13.set('fieldAliases', {'fid': 'fid', 'Projet': 'Projet', 'Sondage': 'Sondage', 'De': 'De', 'Ã€': 'Ã€', 'Titre': 'Titre', 'RÃ©sumÃ©': 'RÃ©sumÃ©', 'Description': 'Description', '_From_x': '_From_x', '_From_y': '_From_y', '_From_z': '_From_z', '_To_x': '_To_x', '_To_y': '_To_y', '_To_z': '_To_z', '_Mid_x': '_Mid_x', '_Mid_y': '_Mid_y', '_Mid_z': '_Mid_z', });
lyr_Collar_14.set('fieldAliases', {'fid': 'fid', 'Projet': 'Projet', 'Sondage': 'Sondage', 'Azimut': 'Azimut', 'Plongée': 'Plongée', 'Départ': 'Départ', 'Fin': 'Fin', 'Longueur': 'Longueur', 'UTM NAD83': 'UTM NAD83', 'UTM NAD8_1': 'UTM NAD8_1', 'UTM NAD8_2': 'UTM NAD8_2', });
lyr_Trace_15.set('fieldAliases', {'fid': 'fid', 'CollarID': 'CollarID', 'SegLength': 'SegLength', });
lyr_Sulfidesinterceptions_16.set('fieldAliases', {'fid': 'fid', 'Projet': 'Projet', 'Sondage': 'Sondage', 'De': 'De', 'Ã€': 'Ã€', 'Titre': 'Titre', 'RÃ©sumÃ©': 'RÃ©sumÃ©', 'Description': 'Description', '_From_x': '_From_x', '_From_y': '_From_y', '_From_z': '_From_z', '_To_x': '_To_x', '_To_y': '_To_y', '_To_z': '_To_z', '_Mid_x': '_Mid_x', '_Mid_y': '_Mid_y', '_Mid_z': '_Mid_z', });
lyr_Collar_17.set('fieldAliases', {'fid': 'fid', 'Projet': 'Projet', 'Sondage': 'Sondage', 'Azimut': 'Azimut', 'Plongée': 'Plongée', 'Départ': 'Départ', 'Fin': 'Fin', 'Longueur': 'Longueur', 'UTM NAD83': 'UTM NAD83', 'UTM NAD8_1': 'UTM NAD8_1', 'UTM NAD8_2': 'UTM NAD8_2', });
lyr_Claims_6.set('fieldImages', {'fid': 'TextEdit', 'POL_NO_SEQ': 'TextEdit', 'TPO_CODE': 'TextEdit', 'TPO_DES_FR': 'TextEdit', 'TPO_DES_AN': 'TextEdit', 'FEU_NO_NOM': 'TextEdit', 'POL_NO_RB': 'TextEdit', 'CSI_CODE': 'TextEdit', 'CSI_NOM': 'TextEdit', 'RBP_NO': 'TextEdit', 'RBP_NOM': 'TextEdit', 'POL_NO_LC': 'TextEdit', 'POL_NO_SEC': 'TextEdit', 'LOCA': 'TextEdit', 'POL_SUPRF': 'TextEdit', 'TER_CODE': 'TextEdit', 'TIT_NO': 'TextEdit', 'STI_CODE': 'TextEdit', 'STI_DES_FR': 'TextEdit', 'STI_DES_AN': 'TextEdit', 'TIT_DAT_EM': 'DateTime', 'TIT_DAT_EX': 'DateTime', 'TIT_NB_ECH': 'TextEdit', 'TIT_NB_REN': 'TextEdit', 'TIT_DAT_AN': 'DateTime', 'TIT_DAT_JA': 'DateTime', 'TIT_CRE_CU': 'TextEdit', 'TIT_SUPRF': 'TextEdit', 'TIT_COM_LO': 'TextEdit', 'TIT_TR_REQ': 'TextEdit', 'TIT_DES': 'TextEdit', 'TIT_DES_CE': 'TextEdit', 'SES_NO_SEQ': 'TextEdit', 'SES_SEQ_FE': 'TextEdit', 'FEU_NO_SES': 'TextEdit', 'FEU_NO': 'TextEdit', 'TT_CODE': 'TextEdit', 'TT_DES_FR': 'TextEdit', 'TT_DES_AN': 'TextEdit', 'DET_POURC': 'TextEdit', 'DET_NO': 'TextEdit', 'DET_NOM': 'TextEdit', 'DET_LIST': 'TextEdit', 'DET_NUMER': 'TextEdit', 'TIT_DR_REQ': 'TextEdit', });
lyr_Propertylimits_7.set('fieldImages', {'fid': 'TextEdit', 'POL_NO_SEQ': 'TextEdit', 'TPO_CODE': 'TextEdit', 'TPO_DES_FR': 'TextEdit', 'TPO_DES_AN': 'TextEdit', 'FEU_NO_NOM': 'TextEdit', 'POL_NO_RB': 'TextEdit', 'CSI_CODE': 'TextEdit', 'CSI_NOM': 'TextEdit', 'RBP_NO': 'TextEdit', 'RBP_NOM': 'TextEdit', 'POL_NO_LC': 'TextEdit', 'POL_NO_SEC': 'Range', 'LOCA': 'TextEdit', 'POL_SUPRF': 'TextEdit', 'TER_CODE': 'TextEdit', 'TIT_NO': 'TextEdit', 'STI_CODE': 'TextEdit', 'STI_DES_FR': 'TextEdit', 'STI_DES_AN': 'TextEdit', 'TIT_DAT_EM': 'DateTime', 'TIT_DAT_EX': 'DateTime', 'TIT_NB_ECH': 'Range', 'TIT_NB_REN': 'Range', 'TIT_DAT_AN': 'DateTime', 'TIT_DAT_JA': 'DateTime', 'TIT_CRE_CU': 'TextEdit', 'TIT_SUPRF': 'TextEdit', 'TIT_COM_LO': 'TextEdit', 'TIT_TR_REQ': 'TextEdit', 'TIT_DES': 'TextEdit', 'TIT_DES_CE': 'TextEdit', 'SES_NO_SEQ': 'TextEdit', 'SES_SEQ_FE': 'TextEdit', 'FEU_NO_SES': 'TextEdit', 'FEU_NO': 'TextEdit', 'TT_CODE': 'TextEdit', 'TT_DES_FR': 'TextEdit', 'TT_DES_AN': 'TextEdit', 'DET_POURC': 'TextEdit', 'DET_NO': 'TextEdit', 'DET_NOM': 'TextEdit', 'DET_LIST': 'TextEdit', 'DET_NUMER': 'TextEdit', 'TIT_DR_REQ': 'TextEdit', 'fid_2': 'TextEdit', 'POL_NO_S_1': 'TextEdit', 'TPO_CODE_2': 'TextEdit', 'TPO_DES__1': 'TextEdit', 'TPO_DES__2': 'TextEdit', 'FEU_NO_N_1': 'TextEdit', 'POL_NO_RB_': 'TextEdit', 'CSI_CODE_2': 'TextEdit', 'CSI_NOM_2': 'TextEdit', 'RBP_NO_2': 'TextEdit', 'RBP_NOM_2': 'TextEdit', 'POL_NO_LC_': 'TextEdit', 'POL_NO_S_2': 'TextEdit', 'LOCA_2': 'TextEdit', 'POL_SUPRF_': 'TextEdit', 'TER_CODE_2': 'TextEdit', 'TIT_NO_2': 'TextEdit', 'STI_CODE_2': 'TextEdit', 'STI_DES__1': 'TextEdit', 'STI_DES__2': 'TextEdit', 'TIT_DAT__1': 'DateTime', 'TIT_DAT__2': 'DateTime', 'TIT_NB_E_1': 'TextEdit', 'TIT_NB_R_1': 'TextEdit', 'TIT_DAT__3': 'DateTime', 'TIT_DAT__4': 'DateTime', 'TIT_CRE__1': 'TextEdit', 'TIT_SUPRF_': 'TextEdit', 'TIT_COM__1': 'TextEdit', 'TIT_TR_R_1': 'TextEdit', 'TIT_DES_2': 'TextEdit', 'TIT_DES__1': 'TextEdit', 'SES_NO_S_1': 'TextEdit', 'SES_SEQ__1': 'TextEdit', 'FEU_NO_S_1': 'TextEdit', 'FEU_NO_2': 'TextEdit', 'TT_CODE_2': 'TextEdit', 'TT_DES_FR_': 'TextEdit', 'TT_DES_AN_': 'TextEdit', 'DET_POURC_': 'TextEdit', 'DET_NO_2': 'TextEdit', 'DET_NOM_2': 'TextEdit', 'DET_LIST_2': 'TextEdit', 'DET_NUMER_': 'TextEdit', 'TIT_DR_R_1': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Sulfidesinterceptions_8.set('fieldImages', {'fid': 'TextEdit', 'Projet': 'TextEdit', 'Sondage': 'TextEdit', 'De': 'TextEdit', 'Ã€': 'TextEdit', 'Titre': 'TextEdit', 'RÃ©sumÃ©': 'TextEdit', 'Description': 'TextEdit', '_From_x': 'TextEdit', '_From_y': 'TextEdit', '_From_z': 'TextEdit', '_To_x': 'TextEdit', '_To_y': 'TextEdit', '_To_z': 'TextEdit', '_Mid_x': 'TextEdit', '_Mid_y': 'TextEdit', '_Mid_z': 'TextEdit', });
lyr_Assays_9.set('fieldImages', {'fid': 'TextEdit', 'Projet': 'TextEdit', 'Sondage': 'TextEdit', 'De': 'TextEdit', 'Ã€': 'TextEdit', 'Ni_Eq (%)': 'TextEdit', 'field_6': 'TextEdit', 'field_7': 'TextEdit', '_From_x': 'TextEdit', '_From_y': 'TextEdit', '_From_z': 'TextEdit', '_To_x': 'TextEdit', '_To_y': 'TextEdit', '_To_z': 'TextEdit', '_Mid_x': 'TextEdit', '_Mid_y': 'TextEdit', '_Mid_z': 'TextEdit', });
lyr_Grades_10.set('fieldImages', {'fid': 'TextEdit', 'Sondage': 'TextEdit', 'Zone': 'TextEdit', 'De': 'TextEdit', 'Ã€': 'TextEdit', 'Longueur sur la carotte': 'TextEdit', 'Ni_Eq (%)': 'TextEdit', 'Ni_Calc (%)': 'TextEdit', 'Cu_Calc (%)': 'TextEdit', 'Co_Calc (%)': 'TextEdit', '_From_x': 'TextEdit', '_From_y': 'TextEdit', '_From_z': 'TextEdit', '_To_x': 'TextEdit', '_To_y': 'TextEdit', '_To_z': 'TextEdit', '_Mid_x': 'TextEdit', '_Mid_y': 'TextEdit', '_Mid_z': 'TextEdit', });
lyr_DDHCollar_11.set('fieldImages', {'fid': 'TextEdit', 'Projet': 'TextEdit', 'Sondage': 'TextEdit', 'Azimut': 'TextEdit', 'Plongée': 'TextEdit', 'Départ': 'TextEdit', 'Fin': 'TextEdit', 'Longueur': 'TextEdit', 'UTM NAD83': 'TextEdit', 'UTM NAD8_1': 'TextEdit', 'UTM NAD8_2': 'TextEdit', 'auxiliary_storage_labeling_show': 'Hidden', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', });
lyr_Trace_12.set('fieldImages', {'fid': 'TextEdit', 'CollarID': 'TextEdit', 'SegLength': 'TextEdit', });
lyr_Sulfidesinterceptions_13.set('fieldImages', {'fid': 'TextEdit', 'Projet': 'TextEdit', 'Sondage': 'TextEdit', 'De': 'TextEdit', 'Ã€': 'TextEdit', 'Titre': 'TextEdit', 'RÃ©sumÃ©': 'TextEdit', 'Description': 'TextEdit', '_From_x': 'TextEdit', '_From_y': 'TextEdit', '_From_z': 'TextEdit', '_To_x': 'TextEdit', '_To_y': 'TextEdit', '_To_z': 'TextEdit', '_Mid_x': 'TextEdit', '_Mid_y': 'TextEdit', '_Mid_z': 'TextEdit', });
lyr_Collar_14.set('fieldImages', {'fid': 'TextEdit', 'Projet': 'TextEdit', 'Sondage': 'TextEdit', 'Azimut': 'TextEdit', 'Plongée': 'TextEdit', 'Départ': 'TextEdit', 'Fin': 'TextEdit', 'Longueur': 'TextEdit', 'UTM NAD83': 'TextEdit', 'UTM NAD8_1': 'TextEdit', 'UTM NAD8_2': 'TextEdit', });
lyr_Trace_15.set('fieldImages', {'fid': 'TextEdit', 'CollarID': 'TextEdit', 'SegLength': 'TextEdit', });
lyr_Sulfidesinterceptions_16.set('fieldImages', {'fid': 'TextEdit', 'Projet': 'TextEdit', 'Sondage': 'TextEdit', 'De': 'TextEdit', 'Ã€': 'TextEdit', 'Titre': 'TextEdit', 'RÃ©sumÃ©': 'TextEdit', 'Description': 'TextEdit', '_From_x': 'TextEdit', '_From_y': 'TextEdit', '_From_z': 'TextEdit', '_To_x': 'TextEdit', '_To_y': 'TextEdit', '_To_z': 'TextEdit', '_Mid_x': 'TextEdit', '_Mid_y': 'TextEdit', '_Mid_z': 'TextEdit', });
lyr_Collar_17.set('fieldImages', {'fid': 'TextEdit', 'Projet': 'TextEdit', 'Sondage': 'TextEdit', 'Azimut': 'TextEdit', 'Plongée': 'TextEdit', 'Départ': 'TextEdit', 'Fin': 'TextEdit', 'Longueur': 'TextEdit', 'UTM NAD83': 'TextEdit', 'UTM NAD8_1': 'TextEdit', 'UTM NAD8_2': 'TextEdit', });
lyr_Claims_6.set('fieldLabels', {});
lyr_Propertylimits_7.set('fieldLabels', {});
lyr_Sulfidesinterceptions_8.set('fieldLabels', {});
lyr_Assays_9.set('fieldLabels', {});
lyr_Grades_10.set('fieldLabels', {});
lyr_DDHCollar_11.set('fieldLabels', {});
lyr_Trace_12.set('fieldLabels', {});
lyr_Sulfidesinterceptions_13.set('fieldLabels', {});
lyr_Collar_14.set('fieldLabels', {});
lyr_Trace_15.set('fieldLabels', {});
lyr_Sulfidesinterceptions_16.set('fieldLabels', {});
lyr_Collar_17.set('fieldLabels', {});
lyr_Collar_17.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});