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
var format_Metallicalshowings_6 = new ol.format.GeoJSON();
var features_Metallicalshowings_6 = format_Metallicalshowings_6.readFeatures(json_Metallicalshowings_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Metallicalshowings_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Metallicalshowings_6.addFeatures(features_Metallicalshowings_6);
var lyr_Metallicalshowings_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Metallicalshowings_6, 
                style: style_Metallicalshowings_6,
                interactive: true,
    title: 'Metallical showings<br />\
    <img src="styles/legend/Metallicalshowings_6_0.png" /> Copper<br />\
    <img src="styles/legend/Metallicalshowings_6_1.png" /> Nickel<br />'
        });
var format_Nonmetallicalshowings_7 = new ol.format.GeoJSON();
var features_Nonmetallicalshowings_7 = format_Nonmetallicalshowings_7.readFeatures(json_Nonmetallicalshowings_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nonmetallicalshowings_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nonmetallicalshowings_7.addFeatures(features_Nonmetallicalshowings_7);
var lyr_Nonmetallicalshowings_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Nonmetallicalshowings_7, 
                style: style_Nonmetallicalshowings_7,
                interactive: true,
    title: 'Non metallical showings<br />\
    <img src="styles/legend/Nonmetallicalshowings_7_0.png" /> Apatite<br />'
        });
var lyr_MNT_8 = new ol.layer.Image({
                            opacity: 1,
                            title: "MNT",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/MNT_8.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-7864850.840753, 6399734.701926, -7851125.960778, 6427975.098284]
                            })
                        });
var lyr_ReliefombrLiDARdgrad_9 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://geoegl.msp.gouv.qc.ca/ws/mffpecofor.fcgi",
    attributions: ' ',
                              params: {
                                "LAYERS": "lidar_ombre",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Relief ombré LiDAR (dégradé)",
                            opacity: 0.532000,
                            
                            
                          });
              wms_layers.push([lyr_ReliefombrLiDARdgrad_9, 0]);
var format_Claims_10 = new ol.format.GeoJSON();
var features_Claims_10 = format_Claims_10.readFeatures(json_Claims_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Claims_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Claims_10.addFeatures(features_Claims_10);
var lyr_Claims_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Claims_10, 
                style: style_Claims_10,
                interactive: true,
                title: '<img src="styles/legend/Claims_10.png" /> Claims'
            });
var format_Propertylimits_11 = new ol.format.GeoJSON();
var features_Propertylimits_11 = format_Propertylimits_11.readFeatures(json_Propertylimits_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Propertylimits_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Propertylimits_11.addFeatures(features_Propertylimits_11);
var lyr_Propertylimits_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Propertylimits_11, 
                style: style_Propertylimits_11,
                interactive: true,
                title: '<img src="styles/legend/Propertylimits_11.png" /> Property limits'
            });
var format_DDH_Historical_trace_12 = new ol.format.GeoJSON();
var features_DDH_Historical_trace_12 = format_DDH_Historical_trace_12.readFeatures(json_DDH_Historical_trace_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DDH_Historical_trace_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DDH_Historical_trace_12.addFeatures(features_DDH_Historical_trace_12);
var lyr_DDH_Historical_trace_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DDH_Historical_trace_12, 
                style: style_DDH_Historical_trace_12,
                interactive: true,
                title: '<img src="styles/legend/DDH_Historical_trace_12.png" /> DDH_Historical_trace'
            });
var format_DDH_2021_trace_13 = new ol.format.GeoJSON();
var features_DDH_2021_trace_13 = format_DDH_2021_trace_13.readFeatures(json_DDH_2021_trace_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DDH_2021_trace_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DDH_2021_trace_13.addFeatures(features_DDH_2021_trace_13);
var lyr_DDH_2021_trace_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DDH_2021_trace_13, 
                style: style_DDH_2021_trace_13,
                interactive: true,
                title: '<img src="styles/legend/DDH_2021_trace_13.png" /> DDH_2021_trace'
            });
var format_DDH_2022_trace_14 = new ol.format.GeoJSON();
var features_DDH_2022_trace_14 = format_DDH_2022_trace_14.readFeatures(json_DDH_2022_trace_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DDH_2022_trace_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DDH_2022_trace_14.addFeatures(features_DDH_2022_trace_14);
var lyr_DDH_2022_trace_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DDH_2022_trace_14, 
                style: style_DDH_2022_trace_14,
                interactive: true,
                title: '<img src="styles/legend/DDH_2022_trace_14.png" /> DDH_2022_trace'
            });
var format_DDHCollarHistorical_15 = new ol.format.GeoJSON();
var features_DDHCollarHistorical_15 = format_DDHCollarHistorical_15.readFeatures(json_DDHCollarHistorical_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DDHCollarHistorical_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DDHCollarHistorical_15.addFeatures(features_DDHCollarHistorical_15);
var lyr_DDHCollarHistorical_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DDHCollarHistorical_15, 
                style: style_DDHCollarHistorical_15,
                interactive: true,
                title: '<img src="styles/legend/DDHCollarHistorical_15.png" /> DDH Collar Historical'
            });
var format_DDHCollar20212022phase1_16 = new ol.format.GeoJSON();
var features_DDHCollar20212022phase1_16 = format_DDHCollar20212022phase1_16.readFeatures(json_DDHCollar20212022phase1_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DDHCollar20212022phase1_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DDHCollar20212022phase1_16.addFeatures(features_DDHCollar20212022phase1_16);
var lyr_DDHCollar20212022phase1_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DDHCollar20212022phase1_16, 
                style: style_DDHCollar20212022phase1_16,
                interactive: true,
                title: '<img src="styles/legend/DDHCollar20212022phase1_16.png" /> DDH Collar 2021-2022 (phase 1)'
            });
var format_DDHCollar2022phase2_17 = new ol.format.GeoJSON();
var features_DDHCollar2022phase2_17 = format_DDHCollar2022phase2_17.readFeatures(json_DDHCollar2022phase2_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DDHCollar2022phase2_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DDHCollar2022phase2_17.addFeatures(features_DDHCollar2022phase2_17);
var lyr_DDHCollar2022phase2_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DDHCollar2022phase2_17, 
                style: style_DDHCollar2022phase2_17,
                interactive: true,
                title: '<img src="styles/legend/DDHCollar2022phase2_17.png" /> DDH Collar 2022 (phase 2)'
            });
var format_2021_DDH_Planned_20211024_18 = new ol.format.GeoJSON();
var features_2021_DDH_Planned_20211024_18 = format_2021_DDH_Planned_20211024_18.readFeatures(json_2021_DDH_Planned_20211024_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2021_DDH_Planned_20211024_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2021_DDH_Planned_20211024_18.addFeatures(features_2021_DDH_Planned_20211024_18);
var lyr_2021_DDH_Planned_20211024_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2021_DDH_Planned_20211024_18, 
                style: style_2021_DDH_Planned_20211024_18,
                interactive: true,
                title: '<img src="styles/legend/2021_DDH_Planned_20211024_18.png" /> 2021_DDH_Planned_2021-10-24'
            });
var format_2021_DDH_Planned_20211111_19 = new ol.format.GeoJSON();
var features_2021_DDH_Planned_20211111_19 = format_2021_DDH_Planned_20211111_19.readFeatures(json_2021_DDH_Planned_20211111_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2021_DDH_Planned_20211111_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2021_DDH_Planned_20211111_19.addFeatures(features_2021_DDH_Planned_20211111_19);
var lyr_2021_DDH_Planned_20211111_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2021_DDH_Planned_20211111_19, 
                style: style_2021_DDH_Planned_20211111_19,
                interactive: true,
                title: '<img src="styles/legend/2021_DDH_Planned_20211111_19.png" /> 2021_ DDH_Planned_2021-11-11'
            });
var format_2021_DDH_Planned_20221GRAVI_20 = new ol.format.GeoJSON();
var features_2021_DDH_Planned_20221GRAVI_20 = format_2021_DDH_Planned_20221GRAVI_20.readFeatures(json_2021_DDH_Planned_20221GRAVI_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2021_DDH_Planned_20221GRAVI_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2021_DDH_Planned_20221GRAVI_20.addFeatures(features_2021_DDH_Planned_20221GRAVI_20);
var lyr_2021_DDH_Planned_20221GRAVI_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2021_DDH_Planned_20221GRAVI_20, 
                style: style_2021_DDH_Planned_20221GRAVI_20,
                interactive: true,
                title: '<img src="styles/legend/2021_DDH_Planned_20221GRAVI_20.png" /> 2021_ DDH_Planned_2022-1 GRAVI'
            });
var format_2022_DDH_Planned_20220514Phase2_21 = new ol.format.GeoJSON();
var features_2022_DDH_Planned_20220514Phase2_21 = format_2022_DDH_Planned_20220514Phase2_21.readFeatures(json_2022_DDH_Planned_20220514Phase2_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2022_DDH_Planned_20220514Phase2_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2022_DDH_Planned_20220514Phase2_21.addFeatures(features_2022_DDH_Planned_20220514Phase2_21);
var lyr_2022_DDH_Planned_20220514Phase2_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2022_DDH_Planned_20220514Phase2_21, 
                style: style_2022_DDH_Planned_20220514Phase2_21,
                interactive: true,
                title: '<img src="styles/legend/2022_DDH_Planned_20220514Phase2_21.png" /> 2022_ DDH_Planned_2022-05-14-Phase2'
            });
var format_2022_DDH_Planned_20220514_22 = new ol.format.GeoJSON();
var features_2022_DDH_Planned_20220514_22 = format_2022_DDH_Planned_20220514_22.readFeatures(json_2022_DDH_Planned_20220514_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2022_DDH_Planned_20220514_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2022_DDH_Planned_20220514_22.addFeatures(features_2022_DDH_Planned_20220514_22);
var lyr_2022_DDH_Planned_20220514_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2022_DDH_Planned_20220514_22, 
                style: style_2022_DDH_Planned_20220514_22,
                interactive: true,
                title: '<img src="styles/legend/2022_DDH_Planned_20220514_22.png" /> 2022_ DDH_Planned_2022-05-14'
            });
var format_DDH_Historical_F1F2_23 = new ol.format.GeoJSON();
var features_DDH_Historical_F1F2_23 = format_DDH_Historical_F1F2_23.readFeatures(json_DDH_Historical_F1F2_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DDH_Historical_F1F2_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DDH_Historical_F1F2_23.addFeatures(features_DDH_Historical_F1F2_23);
var lyr_DDH_Historical_F1F2_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DDH_Historical_F1F2_23, 
                style: style_DDH_Historical_F1F2_23,
                interactive: true,
                title: '<img src="styles/legend/DDH_Historical_F1F2_23.png" /> DDH_Historical_F1-F2'
            });
var format_DDH_Historical_Composites_24 = new ol.format.GeoJSON();
var features_DDH_Historical_Composites_24 = format_DDH_Historical_Composites_24.readFeatures(json_DDH_Historical_Composites_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DDH_Historical_Composites_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DDH_Historical_Composites_24.addFeatures(features_DDH_Historical_Composites_24);
var lyr_DDH_Historical_Composites_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DDH_Historical_Composites_24, 
                style: style_DDH_Historical_Composites_24,
                interactive: true,
                title: '<img src="styles/legend/DDH_Historical_Composites_24.png" /> DDH_Historical_Composites'
            });
var format_DDH_2021_F1F2Mzone_25 = new ol.format.GeoJSON();
var features_DDH_2021_F1F2Mzone_25 = format_DDH_2021_F1F2Mzone_25.readFeatures(json_DDH_2021_F1F2Mzone_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DDH_2021_F1F2Mzone_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DDH_2021_F1F2Mzone_25.addFeatures(features_DDH_2021_F1F2Mzone_25);
var lyr_DDH_2021_F1F2Mzone_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DDH_2021_F1F2Mzone_25, 
                style: style_DDH_2021_F1F2Mzone_25,
                interactive: true,
                title: '<img src="styles/legend/DDH_2021_F1F2Mzone_25.png" /> DDH_2021_F1-F2-Mzone'
            });
var format_Composites_26 = new ol.format.GeoJSON();
var features_Composites_26 = format_Composites_26.readFeatures(json_Composites_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Composites_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Composites_26.addFeatures(features_Composites_26);
var lyr_Composites_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Composites_26, 
                style: style_Composites_26,
                interactive: true,
                title: '<img src="styles/legend/Composites_26.png" /> Composites'
            });
var format_Sulfidesintersections_27 = new ol.format.GeoJSON();
var features_Sulfidesintersections_27 = format_Sulfidesintersections_27.readFeatures(json_Sulfidesintersections_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sulfidesintersections_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sulfidesintersections_27.addFeatures(features_Sulfidesintersections_27);
var lyr_Sulfidesintersections_27 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sulfidesintersections_27, 
                style: style_Sulfidesintersections_27,
                interactive: true,
                title: '<img src="styles/legend/Sulfidesintersections_27.png" /> Sulfides intersections'
            });
var format_2021_DDH_Planned_20211024_28 = new ol.format.GeoJSON();
var features_2021_DDH_Planned_20211024_28 = format_2021_DDH_Planned_20211024_28.readFeatures(json_2021_DDH_Planned_20211024_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2021_DDH_Planned_20211024_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2021_DDH_Planned_20211024_28.addFeatures(features_2021_DDH_Planned_20211024_28);
var lyr_2021_DDH_Planned_20211024_28 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2021_DDH_Planned_20211024_28, 
                style: style_2021_DDH_Planned_20211024_28,
                interactive: true,
                title: '<img src="styles/legend/2021_DDH_Planned_20211024_28.png" /> 2021_DDH_Planned_2021-10-24'
            });
var format_2021_DDH_Planned_20211111_29 = new ol.format.GeoJSON();
var features_2021_DDH_Planned_20211111_29 = format_2021_DDH_Planned_20211111_29.readFeatures(json_2021_DDH_Planned_20211111_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2021_DDH_Planned_20211111_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2021_DDH_Planned_20211111_29.addFeatures(features_2021_DDH_Planned_20211111_29);
var lyr_2021_DDH_Planned_20211111_29 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2021_DDH_Planned_20211111_29, 
                style: style_2021_DDH_Planned_20211111_29,
                interactive: true,
                title: '<img src="styles/legend/2021_DDH_Planned_20211111_29.png" /> 2021_ DDH_Planned_2021-11-11'
            });
var format_2021_DDH_Planned_20221GRAVI_30 = new ol.format.GeoJSON();
var features_2021_DDH_Planned_20221GRAVI_30 = format_2021_DDH_Planned_20221GRAVI_30.readFeatures(json_2021_DDH_Planned_20221GRAVI_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2021_DDH_Planned_20221GRAVI_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2021_DDH_Planned_20221GRAVI_30.addFeatures(features_2021_DDH_Planned_20221GRAVI_30);
var lyr_2021_DDH_Planned_20221GRAVI_30 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2021_DDH_Planned_20221GRAVI_30, 
                style: style_2021_DDH_Planned_20221GRAVI_30,
                interactive: true,
                title: '<img src="styles/legend/2021_DDH_Planned_20221GRAVI_30.png" /> 2021_ DDH_Planned_2022-1 GRAVI'
            });
var format_2022_DDH_Planned_20220514Phase2_31 = new ol.format.GeoJSON();
var features_2022_DDH_Planned_20220514Phase2_31 = format_2022_DDH_Planned_20220514Phase2_31.readFeatures(json_2022_DDH_Planned_20220514Phase2_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2022_DDH_Planned_20220514Phase2_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2022_DDH_Planned_20220514Phase2_31.addFeatures(features_2022_DDH_Planned_20220514Phase2_31);
var lyr_2022_DDH_Planned_20220514Phase2_31 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2022_DDH_Planned_20220514Phase2_31, 
                style: style_2022_DDH_Planned_20220514Phase2_31,
                interactive: true,
                title: '<img src="styles/legend/2022_DDH_Planned_20220514Phase2_31.png" /> 2022_ DDH_Planned_2022-05-14-Phase2'
            });
var format_2022_DDH_Planned_20220514_32 = new ol.format.GeoJSON();
var features_2022_DDH_Planned_20220514_32 = format_2022_DDH_Planned_20220514_32.readFeatures(json_2022_DDH_Planned_20220514_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2022_DDH_Planned_20220514_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2022_DDH_Planned_20220514_32.addFeatures(features_2022_DDH_Planned_20220514_32);
var lyr_2022_DDH_Planned_20220514_32 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2022_DDH_Planned_20220514_32, 
                style: style_2022_DDH_Planned_20220514_32,
                interactive: true,
                title: '<img src="styles/legend/2022_DDH_Planned_20220514_32.png" /> 2022_ DDH_Planned_2022-05-14'
            });
var format_DDH_Historical_F1F2_33 = new ol.format.GeoJSON();
var features_DDH_Historical_F1F2_33 = format_DDH_Historical_F1F2_33.readFeatures(json_DDH_Historical_F1F2_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DDH_Historical_F1F2_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DDH_Historical_F1F2_33.addFeatures(features_DDH_Historical_F1F2_33);
var lyr_DDH_Historical_F1F2_33 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DDH_Historical_F1F2_33, 
                style: style_DDH_Historical_F1F2_33,
                interactive: true,
                title: '<img src="styles/legend/DDH_Historical_F1F2_33.png" /> DDH_Historical_F1-F2'
            });
var format_DDH_Historical_Composites_34 = new ol.format.GeoJSON();
var features_DDH_Historical_Composites_34 = format_DDH_Historical_Composites_34.readFeatures(json_DDH_Historical_Composites_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DDH_Historical_Composites_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DDH_Historical_Composites_34.addFeatures(features_DDH_Historical_Composites_34);
var lyr_DDH_Historical_Composites_34 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DDH_Historical_Composites_34, 
                style: style_DDH_Historical_Composites_34,
                interactive: true,
                title: '<img src="styles/legend/DDH_Historical_Composites_34.png" /> DDH_Historical_Composites'
            });
var format_DDH_2021_F1F2Mzone_35 = new ol.format.GeoJSON();
var features_DDH_2021_F1F2Mzone_35 = format_DDH_2021_F1F2Mzone_35.readFeatures(json_DDH_2021_F1F2Mzone_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DDH_2021_F1F2Mzone_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DDH_2021_F1F2Mzone_35.addFeatures(features_DDH_2021_F1F2Mzone_35);
var lyr_DDH_2021_F1F2Mzone_35 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DDH_2021_F1F2Mzone_35, 
                style: style_DDH_2021_F1F2Mzone_35,
                interactive: true,
                title: '<img src="styles/legend/DDH_2021_F1F2Mzone_35.png" /> DDH_2021_F1-F2-Mzone'
            });
var format_Composites_36 = new ol.format.GeoJSON();
var features_Composites_36 = format_Composites_36.readFeatures(json_Composites_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Composites_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Composites_36.addFeatures(features_Composites_36);
var lyr_Composites_36 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Composites_36, 
                style: style_Composites_36,
                interactive: true,
                title: '<img src="styles/legend/Composites_36.png" /> Composites'
            });
var format_Sulfidesintersections_37 = new ol.format.GeoJSON();
var features_Sulfidesintersections_37 = format_Sulfidesintersections_37.readFeatures(json_Sulfidesintersections_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sulfidesintersections_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sulfidesintersections_37.addFeatures(features_Sulfidesintersections_37);
var lyr_Sulfidesintersections_37 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sulfidesintersections_37, 
                style: style_Sulfidesintersections_37,
                interactive: true,
                title: '<img src="styles/legend/Sulfidesintersections_37.png" /> Sulfides intersections'
            });
var format_Sulfidesinterceptions_38 = new ol.format.GeoJSON();
var features_Sulfidesinterceptions_38 = format_Sulfidesinterceptions_38.readFeatures(json_Sulfidesinterceptions_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sulfidesinterceptions_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sulfidesinterceptions_38.addFeatures(features_Sulfidesinterceptions_38);
var lyr_Sulfidesinterceptions_38 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sulfidesinterceptions_38, 
                style: style_Sulfidesinterceptions_38,
                interactive: true,
    title: 'Sulfides interceptions<br />\
    <img src="styles/legend/Sulfidesinterceptions_38_0.png" /> F1<br />\
    <img src="styles/legend/Sulfidesinterceptions_38_1.png" /> F2<br />\
    <img src="styles/legend/Sulfidesinterceptions_38_2.png" /> MZone<br />'
        });
var format_Assays_39 = new ol.format.GeoJSON();
var features_Assays_39 = format_Assays_39.readFeatures(json_Assays_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Assays_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Assays_39.addFeatures(features_Assays_39);
var lyr_Assays_39 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Assays_39, 
                style: style_Assays_39,
                interactive: true,
    title: 'Assays<br />\
    <img src="styles/legend/Assays_39_0.png" /> 0.1 - 0.5<br />\
    <img src="styles/legend/Assays_39_1.png" /> 0.5 - 1<br />\
    <img src="styles/legend/Assays_39_2.png" /> 1 - 1.5<br />\
    <img src="styles/legend/Assays_39_3.png" /> 1.5 - 2<br />\
    <img src="styles/legend/Assays_39_4.png" /> 2 - 4<br />\
    <img src="styles/legend/Assays_39_5.png" /> <br />'
        });
var format_Grades_40 = new ol.format.GeoJSON();
var features_Grades_40 = format_Grades_40.readFeatures(json_Grades_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Grades_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Grades_40.addFeatures(features_Grades_40);
var lyr_Grades_40 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Grades_40, 
                style: style_Grades_40,
                interactive: true,
    title: 'Grades<br />\
    <img src="styles/legend/Grades_40_0.png" /> 0.1 - 0.5% NiEq<br />\
    <img src="styles/legend/Grades_40_1.png" /> 0.5 - 1% NiEq<br />\
    <img src="styles/legend/Grades_40_2.png" /> 1 - 1.5% NiEq<br />\
    <img src="styles/legend/Grades_40_3.png" /> 1.5 - 2% NiEq<br />'
        });
var format_DDHCollar_41 = new ol.format.GeoJSON();
var features_DDHCollar_41 = format_DDHCollar_41.readFeatures(json_DDHCollar_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DDHCollar_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DDHCollar_41.addFeatures(features_DDHCollar_41);
var lyr_DDHCollar_41 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DDHCollar_41, 
                style: style_DDHCollar_41,
                interactive: true,
    title: 'DDH Collar<br />\
    <img src="styles/legend/DDHCollar_41_0.png" /> 2022 (phase 2)<br />\
    <img src="styles/legend/DDHCollar_41_1.png" /> 2021-2022 (phase 1)<br />\
    <img src="styles/legend/DDHCollar_41_2.png" /> Historical<br />'
        });
var format_Trace_42 = new ol.format.GeoJSON();
var features_Trace_42 = format_Trace_42.readFeatures(json_Trace_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Trace_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trace_42.addFeatures(features_Trace_42);
var lyr_Trace_42 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Trace_42, 
                style: style_Trace_42,
                interactive: true,
    title: 'Trace<br />\
    <img src="styles/legend/Trace_42_0.png" /> 2022 (phase2),Hors section,Historical,2021-2022 (phase1)<br />'
        });
var format_Sulfidesinterceptions_43 = new ol.format.GeoJSON();
var features_Sulfidesinterceptions_43 = format_Sulfidesinterceptions_43.readFeatures(json_Sulfidesinterceptions_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sulfidesinterceptions_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sulfidesinterceptions_43.addFeatures(features_Sulfidesinterceptions_43);
var lyr_Sulfidesinterceptions_43 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sulfidesinterceptions_43, 
                style: style_Sulfidesinterceptions_43,
                interactive: true,
    title: 'Sulfides interceptions<br />\
    <img src="styles/legend/Sulfidesinterceptions_43_0.png" /> F1<br />\
    <img src="styles/legend/Sulfidesinterceptions_43_1.png" /> F2<br />\
    <img src="styles/legend/Sulfidesinterceptions_43_2.png" /> MZone<br />'
        });
var format_Collar_44 = new ol.format.GeoJSON();
var features_Collar_44 = format_Collar_44.readFeatures(json_Collar_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Collar_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Collar_44.addFeatures(features_Collar_44);
var lyr_Collar_44 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Collar_44, 
                style: style_Collar_44,
                interactive: true,
    title: 'Collar<br />\
    <img src="styles/legend/Collar_44_0.png" /> 2022<br />\
    <img src="styles/legend/Collar_44_1.png" /> 2021<br />\
    <img src="styles/legend/Collar_44_2.png" /> Historical<br />'
        });
var format_Trace_45 = new ol.format.GeoJSON();
var features_Trace_45 = format_Trace_45.readFeatures(json_Trace_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Trace_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trace_45.addFeatures(features_Trace_45);
var lyr_Trace_45 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Trace_45, 
                style: style_Trace_45,
                interactive: true,
    title: 'Trace<br />\
    <img src="styles/legend/Trace_45_0.png" /> 2022 (phase2),Hors section,Historical,2021-2022 (phase1)<br />'
        });
var format_Sulfidesinterceptions_46 = new ol.format.GeoJSON();
var features_Sulfidesinterceptions_46 = format_Sulfidesinterceptions_46.readFeatures(json_Sulfidesinterceptions_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sulfidesinterceptions_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sulfidesinterceptions_46.addFeatures(features_Sulfidesinterceptions_46);
var lyr_Sulfidesinterceptions_46 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sulfidesinterceptions_46, 
                style: style_Sulfidesinterceptions_46,
                interactive: true,
    title: 'Sulfides interceptions<br />\
    <img src="styles/legend/Sulfidesinterceptions_46_0.png" /> F1<br />\
    <img src="styles/legend/Sulfidesinterceptions_46_1.png" /> F2<br />\
    <img src="styles/legend/Sulfidesinterceptions_46_2.png" /> MZone<br />'
        });
var format_Collar_47 = new ol.format.GeoJSON();
var features_Collar_47 = format_Collar_47.readFeatures(json_Collar_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Collar_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Collar_47.addFeatures(features_Collar_47);
var lyr_Collar_47 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Collar_47, 
                style: style_Collar_47,
                interactive: true,
    title: 'Collar<br />\
    <img src="styles/legend/Collar_47_0.png" /> 2022<br />\
    <img src="styles/legend/Collar_47_1.png" /> 2021<br />\
    <img src="styles/legend/Collar_47_2.png" /> Historical<br />'
        });
var group_Sectiondrillholedata = new ol.layer.Group({
                                layers: [lyr_Trace_45,lyr_Sulfidesinterceptions_46,lyr_Collar_47,],
                                title: "Section drillhole data"});
var group_2023 = new ol.layer.Group({
                                layers: [lyr_Sulfidesinterceptions_38,lyr_Assays_39,lyr_Grades_40,lyr_DDHCollar_41,lyr_Trace_45,lyr_Sulfidesinterceptions_46,lyr_Collar_47,],
                                title: "2023"});
var group_3D_DDH_2022 = new ol.layer.Group({
                                layers: [lyr_Sulfidesintersections_37,],
                                title: "3D_DDH_2022"});
var group_3D_DDH_2021 = new ol.layer.Group({
                                layers: [lyr_DDH_2021_F1F2Mzone_35,lyr_Composites_36,],
                                title: "3D_DDH_2021"});
var group_3D_DDH_Historical = new ol.layer.Group({
                                layers: [lyr_DDH_Historical_F1F2_33,lyr_DDH_Historical_Composites_34,],
                                title: "3D_DDH_Historical"});
var group_Plannedholes = new ol.layer.Group({
                                layers: [lyr_2021_DDH_Planned_20211024_28,lyr_2021_DDH_Planned_20211111_29,lyr_2021_DDH_Planned_20221GRAVI_30,lyr_2022_DDH_Planned_20220514Phase2_31,lyr_2022_DDH_Planned_20220514_32,],
                                title: "Planned holes"});
var group_20212022 = new ol.layer.Group({
                                layers: [lyr_DDH_Historical_trace_12,lyr_DDH_2021_trace_13,lyr_DDH_2022_trace_14,lyr_DDHCollarHistorical_15,lyr_DDHCollar20212022phase1_16,lyr_DDHCollar2022phase2_17,lyr_2021_DDH_Planned_20211024_28,lyr_2021_DDH_Planned_20211111_29,lyr_2021_DDH_Planned_20221GRAVI_30,lyr_2022_DDH_Planned_20220514Phase2_31,lyr_2022_DDH_Planned_20220514_32,lyr_DDH_Historical_F1F2_33,lyr_DDH_Historical_Composites_34,lyr_DDH_2021_F1F2Mzone_35,lyr_Composites_36,lyr_Sulfidesintersections_37,],
                                title: "2021-2022"});
var group_Property = new ol.layer.Group({
                                layers: [lyr_Claims_10,lyr_Propertylimits_11,],
                                title: "Property"});
var group_Topograpy = new ol.layer.Group({
                                layers: [lyr_MNT_8,lyr_ReliefombrLiDARdgrad_9,],
                                title: "Topograpy"});
var group_Showings = new ol.layer.Group({
                                layers: [lyr_Metallicalshowings_6,lyr_Nonmetallicalshowings_7,],
                                title: "Showings"});
var group_Satelliteimagery = new ol.layer.Group({
                                layers: [lyr_BingMap_0,lyr_Bingsatellite_1,lyr_2021_Inv_Ecofor_20cm_RVB_2,lyr_ReliefombrLiDARdgrad_3,lyr_ESRIStandard_4,lyr_PenteLiDARdgrad_5,],
                                title: "Satellite imagery"});

lyr_BingMap_0.setVisible(true);lyr_Bingsatellite_1.setVisible(true);lyr_2021_Inv_Ecofor_20cm_RVB_2.setVisible(true);lyr_ReliefombrLiDARdgrad_3.setVisible(true);lyr_ESRIStandard_4.setVisible(true);lyr_PenteLiDARdgrad_5.setVisible(true);lyr_Metallicalshowings_6.setVisible(true);lyr_Nonmetallicalshowings_7.setVisible(true);lyr_MNT_8.setVisible(true);lyr_ReliefombrLiDARdgrad_9.setVisible(true);lyr_Claims_10.setVisible(true);lyr_Propertylimits_11.setVisible(true);lyr_DDH_Historical_trace_12.setVisible(true);lyr_DDH_2021_trace_13.setVisible(true);lyr_DDH_2022_trace_14.setVisible(true);lyr_DDHCollarHistorical_15.setVisible(true);lyr_DDHCollar20212022phase1_16.setVisible(true);lyr_DDHCollar2022phase2_17.setVisible(true);lyr_2021_DDH_Planned_20211024_18.setVisible(true);lyr_2021_DDH_Planned_20211111_19.setVisible(true);lyr_2021_DDH_Planned_20221GRAVI_20.setVisible(true);lyr_2022_DDH_Planned_20220514Phase2_21.setVisible(true);lyr_2022_DDH_Planned_20220514_22.setVisible(true);lyr_DDH_Historical_F1F2_23.setVisible(true);lyr_DDH_Historical_Composites_24.setVisible(true);lyr_DDH_2021_F1F2Mzone_25.setVisible(true);lyr_Composites_26.setVisible(true);lyr_Sulfidesintersections_27.setVisible(true);lyr_2021_DDH_Planned_20211024_28.setVisible(true);lyr_2021_DDH_Planned_20211111_29.setVisible(true);lyr_2021_DDH_Planned_20221GRAVI_30.setVisible(true);lyr_2022_DDH_Planned_20220514Phase2_31.setVisible(true);lyr_2022_DDH_Planned_20220514_32.setVisible(true);lyr_DDH_Historical_F1F2_33.setVisible(true);lyr_DDH_Historical_Composites_34.setVisible(true);lyr_DDH_2021_F1F2Mzone_35.setVisible(true);lyr_Composites_36.setVisible(true);lyr_Sulfidesintersections_37.setVisible(true);lyr_Sulfidesinterceptions_38.setVisible(true);lyr_Assays_39.setVisible(true);lyr_Grades_40.setVisible(true);lyr_DDHCollar_41.setVisible(true);lyr_Trace_42.setVisible(true);lyr_Sulfidesinterceptions_43.setVisible(true);lyr_Collar_44.setVisible(true);lyr_Trace_45.setVisible(true);lyr_Sulfidesinterceptions_46.setVisible(true);lyr_Collar_47.setVisible(true);
var layersList = [group_Satelliteimagery,group_Showings,group_Topograpy,group_Property,group_20212022,group_2023];
lyr_Metallicalshowings_6.set('fieldAliases', {'NUMR_SNRC': 'NUMR_SNRC', 'NUMR_GITE': 'NUMR_GITE', 'NOM_GITE': 'NOM_GITE', 'N_COGITE': 'N_COGITE', 'NOM_DETN1': 'NOM_DETN1', 'AN_DEBUT1': 'AN_DEBUT1', 'NOM_DETN2': 'NOM_DETN2', 'AN_DEBUT2': 'AN_DEBUT2', 'NOM_DETN3': 'NOM_DETN3', 'AN_DEBUT3': 'AN_DEBUT3', 'NOM_DETN4': 'NOM_DETN4', 'AN_DEBUT4': 'AN_DEBUT4', 'NOM_DETN5': 'NOM_DETN5', 'AN_DEBUT5': 'AN_DEBUT5', 'OBJT_GITE': 'OBJT_GITE', 'DOCM01': 'DOCM01', 'DOCM02': 'DOCM02', 'DOCM03': 'DOCM03', 'DOCM04': 'DOCM04', 'DOCM05': 'DOCM05', 'DOCM06': 'DOCM06', 'DOCM07': 'DOCM07', 'DOCM08': 'DOCM08', 'DOCM09': 'DOCM09', 'DOCM10': 'DOCM10', 'DOCM11': 'DOCM11', 'DOCM12': 'DOCM12', 'DOCM13': 'DOCM13', 'DOCM14': 'DOCM14', 'DOCM15': 'DOCM15', 'DOCM16': 'DOCM16', 'DOCM17': 'DOCM17', 'DOCM18': 'DOCM18', 'DOCM19': 'DOCM19', 'DOCM20': 'DOCM20', 'DOCM21': 'DOCM21', 'DOCM22': 'DOCM22', 'DOCM23': 'DOCM23', 'DOCM24': 'DOCM24', 'DOCM25': 'DOCM25', 'DOCM26': 'DOCM26', 'DOCM27': 'DOCM27', 'DOCM28': 'DOCM28', 'DOCM29': 'DOCM29', 'DOCM30': 'DOCM30', 'DOCM_EXTR1': 'DOCM_EXTR1', 'DOCM_EXTR2': 'DOCM_EXTR2', 'DOCM_EXTR3': 'DOCM_EXTR3', 'DOCM_EXTR4': 'DOCM_EXTR4', 'DOCM_EXTR5': 'DOCM_EXTR5', 'AN_TRAV1': 'AN_TRAV1', 'TRAV_EXPL1': 'TRAV_EXPL1', 'AN_TRAV2': 'AN_TRAV2', 'TRAV_EXPL2': 'TRAV_EXPL2', 'AN_TRAV3': 'AN_TRAV3', 'TRAV_EXPL3': 'TRAV_EXPL3', 'AN_TRAV4': 'AN_TRAV4', 'TRAV_EXPL4': 'TRAV_EXPL4', 'AN_TRAV5': 'AN_TRAV5', 'TRAV_EXPL5': 'TRAV_EXPL5', 'AN_TRAV6': 'AN_TRAV6', 'TRAV_EXPL6': 'TRAV_EXPL6', 'AN_TRAV7': 'AN_TRAV7', 'TRAV_EXPL7': 'TRAV_EXPL7', 'AN_TRAV8': 'AN_TRAV8', 'TRAV_EXPL8': 'TRAV_EXPL8', 'CODE_SYMBL': 'CODE_SYMBL', 'DATE_PREM': 'DATE_PREM', });
lyr_Nonmetallicalshowings_7.set('fieldAliases', {'NUMR_SNRC': 'NUMR_SNRC', 'NUMR_GISM': 'NUMR_GISM', 'NOM_GISM': 'NOM_GISM', 'N_COGITE': 'N_COGITE', 'ETAT_GISM': 'ETAT_GISM', 'MINR1': 'MINR1', 'MINR2': 'MINR2', 'MINR3': 'MINR3', 'MINR4': 'MINR4', 'MINR5': 'MINR5', 'CANT_SEIGN': 'CANT_SEIGN', 'FUS_UTM': 'FUS_UTM', 'ESTN': 'ESTN', 'NORD': 'NORD', 'REFR_LOCL': 'REFR_LOCL', 'NOTE_LOCL': 'NOTE_LOCL', 'DOCM01': 'DOCM01', 'DOCM02': 'DOCM02', 'DOCM03': 'DOCM03', 'DOCM04': 'DOCM04', 'DOCM05': 'DOCM05', 'DOCM06': 'DOCM06', 'DOCM07': 'DOCM07', 'DOCM08': 'DOCM08', 'DOCM09': 'DOCM09', 'DOCM10': 'DOCM10', 'DOCM11': 'DOCM11', 'DOCM12': 'DOCM12', 'DOCM13': 'DOCM13', 'DOCM14': 'DOCM14', 'DOCM15': 'DOCM15', 'DOCM16': 'DOCM16', 'DOCM17': 'DOCM17', 'DOCM18': 'DOCM18', 'DOCM19': 'DOCM19', 'DOCM20': 'DOCM20', 'DOCM21': 'DOCM21', 'DOCM22': 'DOCM22', 'DOCM23': 'DOCM23', 'DOCM24': 'DOCM24', 'DOCM25': 'DOCM25', 'DOCM26': 'DOCM26', 'DOCM27': 'DOCM27', 'DOCM28': 'DOCM28', 'DOCM29': 'DOCM29', 'DOCM30': 'DOCM30', 'DOCM_EXTR1': 'DOCM_EXTR1', 'DOCM_EXTR2': 'DOCM_EXTR2', 'DOCM_EXTR3': 'DOCM_EXTR3', 'DOCM_EXTR4': 'DOCM_EXTR4', 'DOCM_EXTR5': 'DOCM_EXTR5', 'DOCM_EXTR6': 'DOCM_EXTR6', 'DOCM_EXTR7': 'DOCM_EXTR7', 'DOCM_EXTR8': 'DOCM_EXTR8', 'AN_DECV': 'AN_DECV', 'COMN_DEC': 'COMN_DEC', 'NOTE_PROD': 'NOTE_PROD', 'ALTR_LITH1': 'ALTR_LITH1', 'ALTR_LITH2': 'ALTR_LITH2', 'ALTR_LITH3': 'ALTR_LITH3', 'ALTR_LITH4': 'ALTR_LITH4', 'ALTR_LITH5': 'ALTR_LITH5', 'ALTR_LITH6': 'ALTR_LITH6', 'ALTR_LITH7': 'ALTR_LITH7', 'ALTR_LITH8': 'ALTR_LITH8', 'NOTE_LITH': 'NOTE_LITH', 'FORM_MORP1': 'FORM_MORP1', 'DIST_MORP1': 'DIST_MORP1', 'FORM_MORP2': 'FORM_MORP2', 'DIST_MORP2': 'DIST_MORP2', 'FORM_MORP3': 'FORM_MORP3', 'DIST_MORP3': 'DIST_MORP3', 'FORM_MORP4': 'FORM_MORP4', 'DIST_MORP4': 'DIST_MORP4', 'FORM_MORP5': 'FORM_MORP5', 'DIST_MORP5': 'DIST_MORP5', 'FORM_MORP6': 'FORM_MORP6', 'DIST_MORP6': 'DIST_MORP6', 'FORM_MORP7': 'FORM_MORP7', 'DIST_MORP7': 'DIST_MORP7', 'FORM_MORP8': 'FORM_MORP8', 'DIST_MORP8': 'DIST_MORP8', 'NOTE_MORP': 'NOTE_MORP', 'NOTE_TYPL': 'NOTE_TYPL', 'NOTE_MINR': 'NOTE_MINR', 'CODE_SYMBL': 'CODE_SYMBL', 'DATE_PREM': 'DATE_PREM', });
lyr_Claims_10.set('fieldAliases', {'fid': 'fid', 'POL_NO_SEQ': 'POL_NO_SEQ', 'TPO_CODE': 'TPO_CODE', 'TPO_DES_FR': 'TPO_DES_FR', 'TPO_DES_AN': 'TPO_DES_AN', 'FEU_NO_NOM': 'FEU_NO_NOM', 'POL_NO_RB': 'POL_NO_RB', 'CSI_CODE': 'CSI_CODE', 'CSI_NOM': 'CSI_NOM', 'RBP_NO': 'RBP_NO', 'RBP_NOM': 'RBP_NOM', 'POL_NO_LC': 'POL_NO_LC', 'POL_NO_SEC': 'POL_NO_SEC', 'LOCA': 'LOCA', 'POL_SUPRF': 'POL_SUPRF', 'TER_CODE': 'TER_CODE', 'TIT_NO': 'TIT_NO', 'STI_CODE': 'STI_CODE', 'STI_DES_FR': 'STI_DES_FR', 'STI_DES_AN': 'STI_DES_AN', 'TIT_DAT_EM': 'TIT_DAT_EM', 'TIT_DAT_EX': 'TIT_DAT_EX', 'TIT_NB_ECH': 'TIT_NB_ECH', 'TIT_NB_REN': 'TIT_NB_REN', 'TIT_DAT_AN': 'TIT_DAT_AN', 'TIT_DAT_JA': 'TIT_DAT_JA', 'TIT_CRE_CU': 'TIT_CRE_CU', 'TIT_SUPRF': 'TIT_SUPRF', 'TIT_COM_LO': 'TIT_COM_LO', 'TIT_TR_REQ': 'TIT_TR_REQ', 'TIT_DES': 'TIT_DES', 'TIT_DES_CE': 'TIT_DES_CE', 'SES_NO_SEQ': 'SES_NO_SEQ', 'SES_SEQ_FE': 'SES_SEQ_FE', 'FEU_NO_SES': 'FEU_NO_SES', 'FEU_NO': 'FEU_NO', 'TT_CODE': 'TT_CODE', 'TT_DES_FR': 'TT_DES_FR', 'TT_DES_AN': 'TT_DES_AN', 'DET_POURC': 'DET_POURC', 'DET_NO': 'DET_NO', 'DET_NOM': 'DET_NOM', 'DET_LIST': 'DET_LIST', 'DET_NUMER': 'DET_NUMER', 'TIT_DR_REQ': 'TIT_DR_REQ', });
lyr_Propertylimits_11.set('fieldAliases', {'fid': 'fid', 'POL_NO_SEQ': 'POL_NO_SEQ', 'TPO_CODE': 'TPO_CODE', 'TPO_DES_FR': 'TPO_DES_FR', 'TPO_DES_AN': 'TPO_DES_AN', 'FEU_NO_NOM': 'FEU_NO_NOM', 'POL_NO_RB': 'POL_NO_RB', 'CSI_CODE': 'CSI_CODE', 'CSI_NOM': 'CSI_NOM', 'RBP_NO': 'RBP_NO', 'RBP_NOM': 'RBP_NOM', 'POL_NO_LC': 'POL_NO_LC', 'POL_NO_SEC': 'POL_NO_SEC', 'LOCA': 'LOCA', 'POL_SUPRF': 'POL_SUPRF', 'TER_CODE': 'TER_CODE', 'TIT_NO': 'TIT_NO', 'STI_CODE': 'STI_CODE', 'STI_DES_FR': 'STI_DES_FR', 'STI_DES_AN': 'STI_DES_AN', 'TIT_DAT_EM': 'TIT_DAT_EM', 'TIT_DAT_EX': 'TIT_DAT_EX', 'TIT_NB_ECH': 'TIT_NB_ECH', 'TIT_NB_REN': 'TIT_NB_REN', 'TIT_DAT_AN': 'TIT_DAT_AN', 'TIT_DAT_JA': 'TIT_DAT_JA', 'TIT_CRE_CU': 'TIT_CRE_CU', 'TIT_SUPRF': 'TIT_SUPRF', 'TIT_COM_LO': 'TIT_COM_LO', 'TIT_TR_REQ': 'TIT_TR_REQ', 'TIT_DES': 'TIT_DES', 'TIT_DES_CE': 'TIT_DES_CE', 'SES_NO_SEQ': 'SES_NO_SEQ', 'SES_SEQ_FE': 'SES_SEQ_FE', 'FEU_NO_SES': 'FEU_NO_SES', 'FEU_NO': 'FEU_NO', 'TT_CODE': 'TT_CODE', 'TT_DES_FR': 'TT_DES_FR', 'TT_DES_AN': 'TT_DES_AN', 'DET_POURC': 'DET_POURC', 'DET_NO': 'DET_NO', 'DET_NOM': 'DET_NOM', 'DET_LIST': 'DET_LIST', 'DET_NUMER': 'DET_NUMER', 'TIT_DR_REQ': 'TIT_DR_REQ', 'fid_2': 'fid_2', 'POL_NO_S_1': 'POL_NO_S_1', 'TPO_CODE_2': 'TPO_CODE_2', 'TPO_DES__1': 'TPO_DES__1', 'TPO_DES__2': 'TPO_DES__2', 'FEU_NO_N_1': 'FEU_NO_N_1', 'POL_NO_RB_': 'POL_NO_RB_', 'CSI_CODE_2': 'CSI_CODE_2', 'CSI_NOM_2': 'CSI_NOM_2', 'RBP_NO_2': 'RBP_NO_2', 'RBP_NOM_2': 'RBP_NOM_2', 'POL_NO_LC_': 'POL_NO_LC_', 'POL_NO_S_2': 'POL_NO_S_2', 'LOCA_2': 'LOCA_2', 'POL_SUPRF_': 'POL_SUPRF_', 'TER_CODE_2': 'TER_CODE_2', 'TIT_NO_2': 'TIT_NO_2', 'STI_CODE_2': 'STI_CODE_2', 'STI_DES__1': 'STI_DES__1', 'STI_DES__2': 'STI_DES__2', 'TIT_DAT__1': 'TIT_DAT__1', 'TIT_DAT__2': 'TIT_DAT__2', 'TIT_NB_E_1': 'TIT_NB_E_1', 'TIT_NB_R_1': 'TIT_NB_R_1', 'TIT_DAT__3': 'TIT_DAT__3', 'TIT_DAT__4': 'TIT_DAT__4', 'TIT_CRE__1': 'TIT_CRE__1', 'TIT_SUPRF_': 'TIT_SUPRF_', 'TIT_COM__1': 'TIT_COM__1', 'TIT_TR_R_1': 'TIT_TR_R_1', 'TIT_DES_2': 'TIT_DES_2', 'TIT_DES__1': 'TIT_DES__1', 'SES_NO_S_1': 'SES_NO_S_1', 'SES_SEQ__1': 'SES_SEQ__1', 'FEU_NO_S_1': 'FEU_NO_S_1', 'FEU_NO_2': 'FEU_NO_2', 'TT_CODE_2': 'TT_CODE_2', 'TT_DES_FR_': 'TT_DES_FR_', 'TT_DES_AN_': 'TT_DES_AN_', 'DET_POURC_': 'DET_POURC_', 'DET_NO_2': 'DET_NO_2', 'DET_NOM_2': 'DET_NOM_2', 'DET_LIST_2': 'DET_LIST_2', 'DET_NUMER_': 'DET_NUMER_', 'TIT_DR_R_1': 'TIT_DR_R_1', 'layer': 'layer', 'path': 'path', });
lyr_DDH_Historical_trace_12.set('fieldAliases', {'fid': 'fid', 'CollarID': 'CollarID', 'SegLength': 'SegLength', });
lyr_DDH_2021_trace_13.set('fieldAliases', {'fid': 'fid', 'CollarID': 'CollarID', 'SegLength': 'SegLength', });
lyr_DDH_2022_trace_14.set('fieldAliases', {'fid': 'fid', 'CollarID': 'CollarID', 'SegLength': 'SegLength', });
lyr_DDHCollarHistorical_15.set('fieldAliases', {'fid': 'fid', 'Projet': 'Projet', 'Sondage': 'Sondage', 'Année': 'Année', 'Azimut': 'Azimut', 'Plongée': 'Plongée', 'Départ': 'Départ', 'Fin': 'Fin', 'Longueur': 'Longueur', 'UTM NAD83 Zone 19 - Est': 'UTM NAD83 Zone 19 - Est', 'UTM NAD83 Zone 19 - Nord': 'UTM NAD83 Zone 19 - Nord', 'UTM NAD83 Zone 19 - Élévation': 'UTM NAD83 Zone 19 - Élévation', 'UTM NAD83 Zone 19 - AzLocal': 'UTM NAD83 Zone 19 - AzLocal', });
lyr_DDHCollar20212022phase1_16.set('fieldAliases', {'fid': 'fid', 'Projet': 'Projet', 'Sondage': 'Sondage', 'Année': 'Année', 'Azimut': 'Azimut', 'Plongée': 'Plongée', 'Départ': 'Départ', 'Fin': 'Fin', 'Longueur': 'Longueur', 'UTM NAD83 Zone 19 - Est': 'UTM NAD83 Zone 19 - Est', 'UTM NAD83 Zone 19 - Nord': 'UTM NAD83 Zone 19 - Nord', 'UTM NAD83 Zone 19 - Élévation': 'UTM NAD83 Zone 19 - Élévation', 'UTM NAD83 Zone 19 - AzLocal': 'UTM NAD83 Zone 19 - AzLocal', });
lyr_DDHCollar2022phase2_17.set('fieldAliases', {'fid': 'fid', 'Projet': 'Projet', 'Sondage': 'Sondage', 'Année': 'Année', 'Azimut': 'Azimut', 'Plongée': 'Plongée', 'Départ': 'Départ', 'Fin': 'Fin', 'Longueur': 'Longueur', 'UTM NAD83 Zone 19 - Est': 'UTM NAD83 Zone 19 - Est', 'UTM NAD83 Zone 19 - Nord': 'UTM NAD83 Zone 19 - Nord', 'UTM NAD83 Zone 19 - Élévation': 'UTM NAD83 Zone 19 - Élévation', 'UTM NAD83 Zone 19 - AzLocal': 'UTM NAD83 Zone 19 - AzLocal', });
lyr_2021_DDH_Planned_20211024_18.set('fieldAliases', {'fid': 'fid', 'ID_Sondage': 'ID_Sondage', 'Azimuth': 'Azimuth', 'Plongée': 'Plongée', 'Longueur': 'Longueur', 'Commentaire': 'Commentaire', 'Élévation': 'Élévation', 'UTME': 'UTME', 'UTMN': 'UTMN', });
lyr_2021_DDH_Planned_20211111_19.set('fieldAliases', {'Proposal': 'Proposal', 'S�QUENCE': 'S�QUENCE', 'Easting': 'Easting', 'Northing': 'Northing', 'Elevation': 'Elevation', 'Azimuth': 'Azimuth', 'Dip (NEGATIF)': 'Dip (NEGATIF)', 'Planned lenght': 'Planned lenght', 'field_9': 'field_9', });
lyr_2021_DDH_Planned_20221GRAVI_20.set('fieldAliases', {'Proposal': 'Proposal', 'DDH': 'DDH', 'Status': 'Status', 'Anomaly': 'Anomaly', 'Azimuth': 'Azimuth', 'Dip': 'Dip', 'Planned length (m)': 'Planned length (m)', 'UTME': 'UTME', 'UTMN': 'UTMN', 'Elevation': 'Elevation', });
lyr_2022_DDH_Planned_20220514Phase2_21.set('fieldAliases', {'Projet': 'Projet', 'Sondage': 'Sondage', 'Azimut': 'Azimut', 'Plongée': 'Plongée', 'Longueur': 'Longueur', 'UTM NAD83 Zone 19 - Est': 'UTM NAD83 Zone 19 - Est', 'UTM NAD83 Zone 19 - Nord': 'UTM NAD83 Zone 19 - Nord', 'UTM NAD83 Zone 19 - Élévation': 'UTM NAD83 Zone 19 - Élévation', 'UTM NAD83 Zone 19 - AzLocal': 'UTM NAD83 Zone 19 - AzLocal', });
lyr_2022_DDH_Planned_20220514_22.set('fieldAliases', {'Projet': 'Projet', 'Nom planifié': 'Nom planifié', 'Azimut': 'Azimut', 'Plongée': 'Plongée', 'Longueur': 'Longueur', 'UTM NAD83 Zone 19 - Est': 'UTM NAD83 Zone 19 - Est', 'UTM NAD83 Zone 19 - Nord': 'UTM NAD83 Zone 19 - Nord', 'UTM NAD83 Zone 19 - Élévation': 'UTM NAD83 Zone 19 - Élévation', 'UTM NAD83 Zone 19 - AzLocal': 'UTM NAD83 Zone 19 - AzLocal', });
lyr_DDH_Historical_F1F2_23.set('fieldAliases', {'fid': 'fid', 'Projet': 'Projet', 'AnnÃ©e': 'AnnÃ©e', 'Sondage': 'Sondage', 'De': 'De', 'Ã€': 'Ã€', 'Longueur': 'Longueur', 'Titre': 'Titre', 'RÃ©sumÃ©': 'RÃ©sumÃ©', 'Description': 'Description', 'Angle': 'Angle', '_From_x': '_From_x', '_From_y': '_From_y', '_From_z': '_From_z', '_To_x': '_To_x', '_To_y': '_To_y', '_To_z': '_To_z', '_Mid_x': '_Mid_x', '_Mid_y': '_Mid_y', '_Mid_z': '_Mid_z', });
lyr_DDH_Historical_Composites_24.set('fieldAliases', {'fid': 'fid', 'Projet': 'Projet', 'Sondage': 'Sondage', 'Zone': 'Zone', 'De': 'De', 'Ã€': 'Ã€', 'Longueur sur la carotte': 'Longueur sur la carotte', 'Ã‰paisseur horizontale': 'Ã‰paisseur horizontale', 'Ã‰paisseur verticale': 'Ã‰paisseur verticale', 'Ã‰paisseur vraie': 'Ã‰paisseur vraie', 'Description': 'Description', 'Ni (ppm)': 'Ni (ppm)', 'Cu (ppm)': 'Cu (ppm)', 'Co (ppm)': 'Co (ppm)', 'Ni (%)': 'Ni (%)', 'Ni AA (g/t)': 'Ni AA (g/t)', 'Cu (%)': 'Cu (%)', 'Cu GRAV (g/t)': 'Cu GRAV (g/t)', 'Co AA (g/t)': 'Co AA (g/t)', 'Pt (ppm)': 'Pt (ppm)', 'Pt AA (g/t)': 'Pt AA (g/t)', 'Pd (ppm)': 'Pd (ppm)', 'Pd AA (g/t)': 'Pd AA (g/t)', 'Ti (%)': 'Ti (%)', 'P (ppm)': 'P (ppm)', 'P (%)': 'P (%)', 'Au (ppb)': 'Au (ppb)', 'Au (ppm)': 'Au (ppm)', 'Ag (ppm)': 'Ag (ppm)', 'Zn (ppm)': 'Zn (ppm)', 'Zn (%)': 'Zn (%)', 'Al (%)': 'Al (%)', 'As (ppm)': 'As (ppm)', 'B (ppm)': 'B (ppm)', 'Ba (ppm)': 'Ba (ppm)', 'Be (ppm)': 'Be (ppm)', 'Bi (ppm)': 'Bi (ppm)', 'Ca (%)': 'Ca (%)', 'Cd (ppm)': 'Cd (ppm)', 'Cr (ppm)': 'Cr (ppm)', 'Fe (%)': 'Fe (%)', 'Ga (ppm)': 'Ga (ppm)', 'K (%)': 'K (%)', 'La (ppm)': 'La (ppm)', 'Mg (%)': 'Mg (%)', 'Mn (ppm)': 'Mn (ppm)', 'Mo (ppm)': 'Mo (ppm)', 'Na (%)': 'Na (%)', 'Pb (ppm)': 'Pb (ppm)', 'Pd (ppb)': 'Pd (ppb)', 'Pt (ppb)': 'Pt (ppb)', 'S (%)': 'S (%)', 'Sb (ppm)': 'Sb (ppm)', 'Sc (ppm)': 'Sc (ppm)', 'Sr (ppm)': 'Sr (ppm)', 'Th (ppm)': 'Th (ppm)', 'Tl (ppm)': 'Tl (ppm)', 'U (ppm)': 'U (ppm)', 'V (ppm)': 'V (ppm)', 'W (ppm)': 'W (ppm)', 'P2O5 (%)': 'P2O5 (%)', 'Poid (Kg)': 'Poid (Kg)', 'Density (g/cmÂ³)': 'Density (g/cmÂ³)', 'Cu_Calc (%)': 'Cu_Calc (%)', 'Ag_Calc (%)': 'Ag_Calc (%)', 'Au_Calc (%)': 'Au_Calc (%)', 'Ni_Calc (%)': 'Ni_Calc (%)', 'Co (%)': 'Co (%)', 'Ni_Eq (%)': 'Ni_Eq (%)', 'MF (MF)': 'MF (MF)', 'V2O5 (%)': 'V2O5 (%)', '_From_x': '_From_x', '_From_y': '_From_y', '_From_z': '_From_z', '_To_x': '_To_x', '_To_y': '_To_y', '_To_z': '_To_z', '_Mid_x': '_Mid_x', '_Mid_y': '_Mid_y', '_Mid_z': '_Mid_z', });
lyr_DDH_2021_F1F2Mzone_25.set('fieldAliases', {'fid': 'fid', 'Projet': 'Projet', 'Année': 'Année', 'Sondage': 'Sondage', 'De': 'De', 'À': 'À', 'Longueur': 'Longueur', 'Titre': 'Titre', 'Résumé': 'Résumé', 'Description': 'Description', 'Angle': 'Angle', '_From_x': '_From_x', '_From_y': '_From_y', '_From_z': '_From_z', '_To_x': '_To_x', '_To_y': '_To_y', '_To_z': '_To_z', '_Mid_x': '_Mid_x', '_Mid_y': '_Mid_y', '_Mid_z': '_Mid_z', });
lyr_Composites_26.set('fieldAliases', {'fid': 'fid', 'Projet': 'Projet', 'Sondage': 'Sondage', 'Zone': 'Zone', 'De': 'De', 'Ã€': 'Ã€', 'Longueur sur la carotte': 'Longueur sur la carotte', 'Ã‰paisseur horizontale': 'Ã‰paisseur horizontale', 'Ã‰paisseur verticale': 'Ã‰paisseur verticale', 'Ã‰paisseur vraie': 'Ã‰paisseur vraie', 'Description': 'Description', 'Ni (ppm)': 'Ni (ppm)', 'Cu (ppm)': 'Cu (ppm)', 'Co (ppm)': 'Co (ppm)', 'Ni (%)': 'Ni (%)', 'Ni AA (g/t)': 'Ni AA (g/t)', 'Cu (%)': 'Cu (%)', 'Cu GRAV (g/t)': 'Cu GRAV (g/t)', 'Co AA (g/t)': 'Co AA (g/t)', 'Pt (ppm)': 'Pt (ppm)', 'Pt AA (g/t)': 'Pt AA (g/t)', 'Pd (ppm)': 'Pd (ppm)', 'Pd AA (g/t)': 'Pd AA (g/t)', 'Ti (%)': 'Ti (%)', 'P (ppm)': 'P (ppm)', 'P (%)': 'P (%)', 'Au (ppb)': 'Au (ppb)', 'Au (ppm)': 'Au (ppm)', 'Ag (ppm)': 'Ag (ppm)', 'Zn (ppm)': 'Zn (ppm)', 'Zn (%)': 'Zn (%)', 'Al (%)': 'Al (%)', 'As (ppm)': 'As (ppm)', 'B (ppm)': 'B (ppm)', 'Ba (ppm)': 'Ba (ppm)', 'Be (ppm)': 'Be (ppm)', 'Bi (ppm)': 'Bi (ppm)', 'Ca (%)': 'Ca (%)', 'Cd (ppm)': 'Cd (ppm)', 'Cr (ppm)': 'Cr (ppm)', 'Fe (%)': 'Fe (%)', 'Ga (ppm)': 'Ga (ppm)', 'K (%)': 'K (%)', 'La (ppm)': 'La (ppm)', 'Mg (%)': 'Mg (%)', 'Mn (ppm)': 'Mn (ppm)', 'Mo (ppm)': 'Mo (ppm)', 'Na (%)': 'Na (%)', 'Pb (ppm)': 'Pb (ppm)', 'Pd (ppb)': 'Pd (ppb)', 'Pt (ppb)': 'Pt (ppb)', 'S (%)': 'S (%)', 'Sb (ppm)': 'Sb (ppm)', 'Sc (ppm)': 'Sc (ppm)', 'Sr (ppm)': 'Sr (ppm)', 'Th (ppm)': 'Th (ppm)', 'Tl (ppm)': 'Tl (ppm)', 'U (ppm)': 'U (ppm)', 'V (ppm)': 'V (ppm)', 'W (ppm)': 'W (ppm)', 'P2O5 (%)': 'P2O5 (%)', 'Poid (Kg)': 'Poid (Kg)', 'Density (g/cmÂ³)': 'Density (g/cmÂ³)', 'Cu_Calc (%)': 'Cu_Calc (%)', 'Ag_Calc (%)': 'Ag_Calc (%)', 'Au_Calc (%)': 'Au_Calc (%)', 'Ni_Calc (%)': 'Ni_Calc (%)', 'Co (%)': 'Co (%)', 'Ni_Eq (%)': 'Ni_Eq (%)', 'MF (MF)': 'MF (MF)', 'V2O5 (%)': 'V2O5 (%)', '_From_x': '_From_x', '_From_y': '_From_y', '_From_z': '_From_z', '_To_x': '_To_x', '_To_y': '_To_y', '_To_z': '_To_z', '_Mid_x': '_Mid_x', '_Mid_y': '_Mid_y', '_Mid_z': '_Mid_z', });
lyr_Sulfidesintersections_27.set('fieldAliases', {'fid': 'fid', 'Projet': 'Projet', 'Année': 'Année', 'Sondage': 'Sondage', 'De': 'De', 'À': 'À', 'Longueur': 'Longueur', 'Titre': 'Titre', 'Résumé': 'Résumé', 'Description': 'Description', 'Angle': 'Angle', '_From_x': '_From_x', '_From_y': '_From_y', '_From_z': '_From_z', '_To_x': '_To_x', '_To_y': '_To_y', '_To_z': '_To_z', '_Mid_x': '_Mid_x', '_Mid_y': '_Mid_y', '_Mid_z': '_Mid_z', });
lyr_2021_DDH_Planned_20211024_28.set('fieldAliases', {'fid': 'fid', 'ID_Sondage': 'ID_Sondage', 'Azimuth': 'Azimuth', 'Plongée': 'Plongée', 'Longueur': 'Longueur', 'Commentaire': 'Commentaire', 'Élévation': 'Élévation', 'UTME': 'UTME', 'UTMN': 'UTMN', });
lyr_2021_DDH_Planned_20211111_29.set('fieldAliases', {'Proposal': 'Proposal', 'S�QUENCE': 'S�QUENCE', 'Easting': 'Easting', 'Northing': 'Northing', 'Elevation': 'Elevation', 'Azimuth': 'Azimuth', 'Dip (NEGATIF)': 'Dip (NEGATIF)', 'Planned lenght': 'Planned lenght', 'field_9': 'field_9', });
lyr_2021_DDH_Planned_20221GRAVI_30.set('fieldAliases', {'Proposal': 'Proposal', 'DDH': 'DDH', 'Status': 'Status', 'Anomaly': 'Anomaly', 'Azimuth': 'Azimuth', 'Dip': 'Dip', 'Planned length (m)': 'Planned length (m)', 'UTME': 'UTME', 'UTMN': 'UTMN', 'Elevation': 'Elevation', });
lyr_2022_DDH_Planned_20220514Phase2_31.set('fieldAliases', {'Projet': 'Projet', 'Sondage': 'Sondage', 'Azimut': 'Azimut', 'Plongée': 'Plongée', 'Longueur': 'Longueur', 'UTM NAD83 Zone 19 - Est': 'UTM NAD83 Zone 19 - Est', 'UTM NAD83 Zone 19 - Nord': 'UTM NAD83 Zone 19 - Nord', 'UTM NAD83 Zone 19 - Élévation': 'UTM NAD83 Zone 19 - Élévation', 'UTM NAD83 Zone 19 - AzLocal': 'UTM NAD83 Zone 19 - AzLocal', });
lyr_2022_DDH_Planned_20220514_32.set('fieldAliases', {'Projet': 'Projet', 'Nom planifié': 'Nom planifié', 'Azimut': 'Azimut', 'Plongée': 'Plongée', 'Longueur': 'Longueur', 'UTM NAD83 Zone 19 - Est': 'UTM NAD83 Zone 19 - Est', 'UTM NAD83 Zone 19 - Nord': 'UTM NAD83 Zone 19 - Nord', 'UTM NAD83 Zone 19 - Élévation': 'UTM NAD83 Zone 19 - Élévation', 'UTM NAD83 Zone 19 - AzLocal': 'UTM NAD83 Zone 19 - AzLocal', });
lyr_DDH_Historical_F1F2_33.set('fieldAliases', {'fid': 'fid', 'Projet': 'Projet', 'AnnÃ©e': 'AnnÃ©e', 'Sondage': 'Sondage', 'De': 'De', 'Ã€': 'Ã€', 'Longueur': 'Longueur', 'Titre': 'Titre', 'RÃ©sumÃ©': 'RÃ©sumÃ©', 'Description': 'Description', 'Angle': 'Angle', '_From_x': '_From_x', '_From_y': '_From_y', '_From_z': '_From_z', '_To_x': '_To_x', '_To_y': '_To_y', '_To_z': '_To_z', '_Mid_x': '_Mid_x', '_Mid_y': '_Mid_y', '_Mid_z': '_Mid_z', });
lyr_DDH_Historical_Composites_34.set('fieldAliases', {'fid': 'fid', 'Projet': 'Projet', 'Sondage': 'Sondage', 'Zone': 'Zone', 'De': 'De', 'Ã€': 'Ã€', 'Longueur sur la carotte': 'Longueur sur la carotte', 'Ã‰paisseur horizontale': 'Ã‰paisseur horizontale', 'Ã‰paisseur verticale': 'Ã‰paisseur verticale', 'Ã‰paisseur vraie': 'Ã‰paisseur vraie', 'Description': 'Description', 'Ni (ppm)': 'Ni (ppm)', 'Cu (ppm)': 'Cu (ppm)', 'Co (ppm)': 'Co (ppm)', 'Ni (%)': 'Ni (%)', 'Ni AA (g/t)': 'Ni AA (g/t)', 'Cu (%)': 'Cu (%)', 'Cu GRAV (g/t)': 'Cu GRAV (g/t)', 'Co AA (g/t)': 'Co AA (g/t)', 'Pt (ppm)': 'Pt (ppm)', 'Pt AA (g/t)': 'Pt AA (g/t)', 'Pd (ppm)': 'Pd (ppm)', 'Pd AA (g/t)': 'Pd AA (g/t)', 'Ti (%)': 'Ti (%)', 'P (ppm)': 'P (ppm)', 'P (%)': 'P (%)', 'Au (ppb)': 'Au (ppb)', 'Au (ppm)': 'Au (ppm)', 'Ag (ppm)': 'Ag (ppm)', 'Zn (ppm)': 'Zn (ppm)', 'Zn (%)': 'Zn (%)', 'Al (%)': 'Al (%)', 'As (ppm)': 'As (ppm)', 'B (ppm)': 'B (ppm)', 'Ba (ppm)': 'Ba (ppm)', 'Be (ppm)': 'Be (ppm)', 'Bi (ppm)': 'Bi (ppm)', 'Ca (%)': 'Ca (%)', 'Cd (ppm)': 'Cd (ppm)', 'Cr (ppm)': 'Cr (ppm)', 'Fe (%)': 'Fe (%)', 'Ga (ppm)': 'Ga (ppm)', 'K (%)': 'K (%)', 'La (ppm)': 'La (ppm)', 'Mg (%)': 'Mg (%)', 'Mn (ppm)': 'Mn (ppm)', 'Mo (ppm)': 'Mo (ppm)', 'Na (%)': 'Na (%)', 'Pb (ppm)': 'Pb (ppm)', 'Pd (ppb)': 'Pd (ppb)', 'Pt (ppb)': 'Pt (ppb)', 'S (%)': 'S (%)', 'Sb (ppm)': 'Sb (ppm)', 'Sc (ppm)': 'Sc (ppm)', 'Sr (ppm)': 'Sr (ppm)', 'Th (ppm)': 'Th (ppm)', 'Tl (ppm)': 'Tl (ppm)', 'U (ppm)': 'U (ppm)', 'V (ppm)': 'V (ppm)', 'W (ppm)': 'W (ppm)', 'P2O5 (%)': 'P2O5 (%)', 'Poid (Kg)': 'Poid (Kg)', 'Density (g/cmÂ³)': 'Density (g/cmÂ³)', 'Cu_Calc (%)': 'Cu_Calc (%)', 'Ag_Calc (%)': 'Ag_Calc (%)', 'Au_Calc (%)': 'Au_Calc (%)', 'Ni_Calc (%)': 'Ni_Calc (%)', 'Co (%)': 'Co (%)', 'Ni_Eq (%)': 'Ni_Eq (%)', 'MF (MF)': 'MF (MF)', 'V2O5 (%)': 'V2O5 (%)', '_From_x': '_From_x', '_From_y': '_From_y', '_From_z': '_From_z', '_To_x': '_To_x', '_To_y': '_To_y', '_To_z': '_To_z', '_Mid_x': '_Mid_x', '_Mid_y': '_Mid_y', '_Mid_z': '_Mid_z', });
lyr_DDH_2021_F1F2Mzone_35.set('fieldAliases', {'fid': 'fid', 'Projet': 'Projet', 'Année': 'Année', 'Sondage': 'Sondage', 'De': 'De', 'À': 'À', 'Longueur': 'Longueur', 'Titre': 'Titre', 'Résumé': 'Résumé', 'Description': 'Description', 'Angle': 'Angle', '_From_x': '_From_x', '_From_y': '_From_y', '_From_z': '_From_z', '_To_x': '_To_x', '_To_y': '_To_y', '_To_z': '_To_z', '_Mid_x': '_Mid_x', '_Mid_y': '_Mid_y', '_Mid_z': '_Mid_z', });
lyr_Composites_36.set('fieldAliases', {'fid': 'fid', 'Projet': 'Projet', 'Sondage': 'Sondage', 'Zone': 'Zone', 'De': 'De', 'Ã€': 'Ã€', 'Longueur sur la carotte': 'Longueur sur la carotte', 'Ã‰paisseur horizontale': 'Ã‰paisseur horizontale', 'Ã‰paisseur verticale': 'Ã‰paisseur verticale', 'Ã‰paisseur vraie': 'Ã‰paisseur vraie', 'Description': 'Description', 'Ni (ppm)': 'Ni (ppm)', 'Cu (ppm)': 'Cu (ppm)', 'Co (ppm)': 'Co (ppm)', 'Ni (%)': 'Ni (%)', 'Ni AA (g/t)': 'Ni AA (g/t)', 'Cu (%)': 'Cu (%)', 'Cu GRAV (g/t)': 'Cu GRAV (g/t)', 'Co AA (g/t)': 'Co AA (g/t)', 'Pt (ppm)': 'Pt (ppm)', 'Pt AA (g/t)': 'Pt AA (g/t)', 'Pd (ppm)': 'Pd (ppm)', 'Pd AA (g/t)': 'Pd AA (g/t)', 'Ti (%)': 'Ti (%)', 'P (ppm)': 'P (ppm)', 'P (%)': 'P (%)', 'Au (ppb)': 'Au (ppb)', 'Au (ppm)': 'Au (ppm)', 'Ag (ppm)': 'Ag (ppm)', 'Zn (ppm)': 'Zn (ppm)', 'Zn (%)': 'Zn (%)', 'Al (%)': 'Al (%)', 'As (ppm)': 'As (ppm)', 'B (ppm)': 'B (ppm)', 'Ba (ppm)': 'Ba (ppm)', 'Be (ppm)': 'Be (ppm)', 'Bi (ppm)': 'Bi (ppm)', 'Ca (%)': 'Ca (%)', 'Cd (ppm)': 'Cd (ppm)', 'Cr (ppm)': 'Cr (ppm)', 'Fe (%)': 'Fe (%)', 'Ga (ppm)': 'Ga (ppm)', 'K (%)': 'K (%)', 'La (ppm)': 'La (ppm)', 'Mg (%)': 'Mg (%)', 'Mn (ppm)': 'Mn (ppm)', 'Mo (ppm)': 'Mo (ppm)', 'Na (%)': 'Na (%)', 'Pb (ppm)': 'Pb (ppm)', 'Pd (ppb)': 'Pd (ppb)', 'Pt (ppb)': 'Pt (ppb)', 'S (%)': 'S (%)', 'Sb (ppm)': 'Sb (ppm)', 'Sc (ppm)': 'Sc (ppm)', 'Sr (ppm)': 'Sr (ppm)', 'Th (ppm)': 'Th (ppm)', 'Tl (ppm)': 'Tl (ppm)', 'U (ppm)': 'U (ppm)', 'V (ppm)': 'V (ppm)', 'W (ppm)': 'W (ppm)', 'P2O5 (%)': 'P2O5 (%)', 'Poid (Kg)': 'Poid (Kg)', 'Density (g/cmÂ³)': 'Density (g/cmÂ³)', 'Cu_Calc (%)': 'Cu_Calc (%)', 'Ag_Calc (%)': 'Ag_Calc (%)', 'Au_Calc (%)': 'Au_Calc (%)', 'Ni_Calc (%)': 'Ni_Calc (%)', 'Co (%)': 'Co (%)', 'Ni_Eq (%)': 'Ni_Eq (%)', 'MF (MF)': 'MF (MF)', 'V2O5 (%)': 'V2O5 (%)', '_From_x': '_From_x', '_From_y': '_From_y', '_From_z': '_From_z', '_To_x': '_To_x', '_To_y': '_To_y', '_To_z': '_To_z', '_Mid_x': '_Mid_x', '_Mid_y': '_Mid_y', '_Mid_z': '_Mid_z', });
lyr_Sulfidesintersections_37.set('fieldAliases', {'fid': 'fid', 'Projet': 'Projet', 'Année': 'Année', 'Sondage': 'Sondage', 'De': 'De', 'À': 'À', 'Longueur': 'Longueur', 'Titre': 'Titre', 'Résumé': 'Résumé', 'Description': 'Description', 'Angle': 'Angle', '_From_x': '_From_x', '_From_y': '_From_y', '_From_z': '_From_z', '_To_x': '_To_x', '_To_y': '_To_y', '_To_z': '_To_z', '_Mid_x': '_Mid_x', '_Mid_y': '_Mid_y', '_Mid_z': '_Mid_z', });
lyr_Sulfidesinterceptions_38.set('fieldAliases', {'fid': 'fid', 'Projet': 'Projet', 'Sondage': 'Sondage', 'De': 'De', 'Ã€': 'Ã€', 'Titre': 'Titre', 'RÃ©sumÃ©': 'RÃ©sumÃ©', 'Description': 'Description', '_From_x': '_From_x', '_From_y': '_From_y', '_From_z': '_From_z', '_To_x': '_To_x', '_To_y': '_To_y', '_To_z': '_To_z', '_Mid_x': '_Mid_x', '_Mid_y': '_Mid_y', '_Mid_z': '_Mid_z', });
lyr_Assays_39.set('fieldAliases', {'fid': 'fid', 'Projet': 'Projet', 'Sondage': 'Sondage', 'De': 'De', 'Ã€': 'Ã€', 'Ni_Eq (%)': 'Ni_Eq (%)', 'field_6': 'field_6', 'field_7': 'field_7', '_From_x': '_From_x', '_From_y': '_From_y', '_From_z': '_From_z', '_To_x': '_To_x', '_To_y': '_To_y', '_To_z': '_To_z', '_Mid_x': '_Mid_x', '_Mid_y': '_Mid_y', '_Mid_z': '_Mid_z', });
lyr_Grades_40.set('fieldAliases', {'fid': 'fid', 'Sondage': 'Sondage', 'Zone': 'Zone', 'De': 'De', 'Ã€': 'Ã€', 'Longueur sur la carotte': 'Longueur sur la carotte', 'Ni_Eq (%)': 'Ni_Eq (%)', 'Ni_Calc (%)': 'Ni_Calc (%)', 'Cu_Calc (%)': 'Cu_Calc (%)', 'Co_Calc (%)': 'Co_Calc (%)', '_From_x': '_From_x', '_From_y': '_From_y', '_From_z': '_From_z', '_To_x': '_To_x', '_To_y': '_To_y', '_To_z': '_To_z', '_Mid_x': '_Mid_x', '_Mid_y': '_Mid_y', '_Mid_z': '_Mid_z', });
lyr_DDHCollar_41.set('fieldAliases', {'fid': 'fid', 'Projet': 'Projet', 'Sondage': 'Sondage', 'Azimut': 'Azimut', 'Plongée': 'Plongée', 'Départ': 'Départ', 'Fin': 'Fin', 'Longueur': 'Longueur', 'UTM NAD83': 'UTM NAD83', 'UTM NAD8_1': 'UTM NAD8_1', 'UTM NAD8_2': 'UTM NAD8_2', 'auxiliary_storage_labeling_show': 'auxiliary_storage_labeling_show', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', });
lyr_Trace_42.set('fieldAliases', {'fid': 'fid', 'CollarID': 'CollarID', 'SegLength': 'SegLength', });
lyr_Sulfidesinterceptions_43.set('fieldAliases', {'fid': 'fid', 'Projet': 'Projet', 'Sondage': 'Sondage', 'De': 'De', 'Ã€': 'Ã€', 'Titre': 'Titre', 'RÃ©sumÃ©': 'RÃ©sumÃ©', 'Description': 'Description', '_From_x': '_From_x', '_From_y': '_From_y', '_From_z': '_From_z', '_To_x': '_To_x', '_To_y': '_To_y', '_To_z': '_To_z', '_Mid_x': '_Mid_x', '_Mid_y': '_Mid_y', '_Mid_z': '_Mid_z', });
lyr_Collar_44.set('fieldAliases', {'fid': 'fid', 'Projet': 'Projet', 'Sondage': 'Sondage', 'Azimut': 'Azimut', 'Plongée': 'Plongée', 'Départ': 'Départ', 'Fin': 'Fin', 'Longueur': 'Longueur', 'UTM NAD83': 'UTM NAD83', 'UTM NAD8_1': 'UTM NAD8_1', 'UTM NAD8_2': 'UTM NAD8_2', });
lyr_Trace_45.set('fieldAliases', {'fid': 'fid', 'CollarID': 'CollarID', 'SegLength': 'SegLength', });
lyr_Sulfidesinterceptions_46.set('fieldAliases', {'fid': 'fid', 'Projet': 'Projet', 'Sondage': 'Sondage', 'De': 'De', 'Ã€': 'Ã€', 'Titre': 'Titre', 'RÃ©sumÃ©': 'RÃ©sumÃ©', 'Description': 'Description', '_From_x': '_From_x', '_From_y': '_From_y', '_From_z': '_From_z', '_To_x': '_To_x', '_To_y': '_To_y', '_To_z': '_To_z', '_Mid_x': '_Mid_x', '_Mid_y': '_Mid_y', '_Mid_z': '_Mid_z', });
lyr_Collar_47.set('fieldAliases', {'fid': 'fid', 'Projet': 'Projet', 'Sondage': 'Sondage', 'Azimut': 'Azimut', 'Plongée': 'Plongée', 'Départ': 'Départ', 'Fin': 'Fin', 'Longueur': 'Longueur', 'UTM NAD83': 'UTM NAD83', 'UTM NAD8_1': 'UTM NAD8_1', 'UTM NAD8_2': 'UTM NAD8_2', });
lyr_Metallicalshowings_6.set('fieldImages', {'NUMR_SNRC': '', 'NUMR_GITE': '', 'NOM_GITE': '', 'N_COGITE': '', 'NOM_DETN1': '', 'AN_DEBUT1': '', 'NOM_DETN2': '', 'AN_DEBUT2': '', 'NOM_DETN3': '', 'AN_DEBUT3': '', 'NOM_DETN4': '', 'AN_DEBUT4': '', 'NOM_DETN5': '', 'AN_DEBUT5': '', 'OBJT_GITE': '', 'DOCM01': '', 'DOCM02': '', 'DOCM03': '', 'DOCM04': '', 'DOCM05': '', 'DOCM06': '', 'DOCM07': '', 'DOCM08': '', 'DOCM09': '', 'DOCM10': '', 'DOCM11': '', 'DOCM12': '', 'DOCM13': '', 'DOCM14': '', 'DOCM15': '', 'DOCM16': '', 'DOCM17': '', 'DOCM18': '', 'DOCM19': '', 'DOCM20': '', 'DOCM21': '', 'DOCM22': '', 'DOCM23': '', 'DOCM24': '', 'DOCM25': '', 'DOCM26': '', 'DOCM27': '', 'DOCM28': '', 'DOCM29': '', 'DOCM30': '', 'DOCM_EXTR1': '', 'DOCM_EXTR2': '', 'DOCM_EXTR3': '', 'DOCM_EXTR4': '', 'DOCM_EXTR5': '', 'AN_TRAV1': '', 'TRAV_EXPL1': '', 'AN_TRAV2': '', 'TRAV_EXPL2': '', 'AN_TRAV3': '', 'TRAV_EXPL3': '', 'AN_TRAV4': '', 'TRAV_EXPL4': '', 'AN_TRAV5': '', 'TRAV_EXPL5': '', 'AN_TRAV6': '', 'TRAV_EXPL6': '', 'AN_TRAV7': '', 'TRAV_EXPL7': '', 'AN_TRAV8': '', 'TRAV_EXPL8': '', 'CODE_SYMBL': '', 'DATE_PREM': '', });
lyr_Nonmetallicalshowings_7.set('fieldImages', {'NUMR_SNRC': '', 'NUMR_GISM': '', 'NOM_GISM': '', 'N_COGITE': '', 'ETAT_GISM': '', 'MINR1': '', 'MINR2': '', 'MINR3': '', 'MINR4': '', 'MINR5': '', 'CANT_SEIGN': '', 'FUS_UTM': '', 'ESTN': '', 'NORD': '', 'REFR_LOCL': '', 'NOTE_LOCL': '', 'DOCM01': '', 'DOCM02': '', 'DOCM03': '', 'DOCM04': '', 'DOCM05': '', 'DOCM06': '', 'DOCM07': '', 'DOCM08': '', 'DOCM09': '', 'DOCM10': '', 'DOCM11': '', 'DOCM12': '', 'DOCM13': '', 'DOCM14': '', 'DOCM15': '', 'DOCM16': '', 'DOCM17': '', 'DOCM18': '', 'DOCM19': '', 'DOCM20': '', 'DOCM21': '', 'DOCM22': '', 'DOCM23': '', 'DOCM24': '', 'DOCM25': '', 'DOCM26': '', 'DOCM27': '', 'DOCM28': '', 'DOCM29': '', 'DOCM30': '', 'DOCM_EXTR1': '', 'DOCM_EXTR2': '', 'DOCM_EXTR3': '', 'DOCM_EXTR4': '', 'DOCM_EXTR5': '', 'DOCM_EXTR6': '', 'DOCM_EXTR7': '', 'DOCM_EXTR8': '', 'AN_DECV': '', 'COMN_DEC': '', 'NOTE_PROD': '', 'ALTR_LITH1': '', 'ALTR_LITH2': '', 'ALTR_LITH3': '', 'ALTR_LITH4': '', 'ALTR_LITH5': '', 'ALTR_LITH6': '', 'ALTR_LITH7': '', 'ALTR_LITH8': '', 'NOTE_LITH': '', 'FORM_MORP1': '', 'DIST_MORP1': '', 'FORM_MORP2': '', 'DIST_MORP2': '', 'FORM_MORP3': '', 'DIST_MORP3': '', 'FORM_MORP4': '', 'DIST_MORP4': '', 'FORM_MORP5': '', 'DIST_MORP5': '', 'FORM_MORP6': '', 'DIST_MORP6': '', 'FORM_MORP7': '', 'DIST_MORP7': '', 'FORM_MORP8': '', 'DIST_MORP8': '', 'NOTE_MORP': '', 'NOTE_TYPL': '', 'NOTE_MINR': '', 'CODE_SYMBL': '', 'DATE_PREM': '', });
lyr_Claims_10.set('fieldImages', {'fid': 'TextEdit', 'POL_NO_SEQ': 'TextEdit', 'TPO_CODE': 'TextEdit', 'TPO_DES_FR': 'TextEdit', 'TPO_DES_AN': 'TextEdit', 'FEU_NO_NOM': 'TextEdit', 'POL_NO_RB': 'TextEdit', 'CSI_CODE': 'TextEdit', 'CSI_NOM': 'TextEdit', 'RBP_NO': 'TextEdit', 'RBP_NOM': 'TextEdit', 'POL_NO_LC': 'TextEdit', 'POL_NO_SEC': 'TextEdit', 'LOCA': 'TextEdit', 'POL_SUPRF': 'TextEdit', 'TER_CODE': 'TextEdit', 'TIT_NO': 'TextEdit', 'STI_CODE': 'TextEdit', 'STI_DES_FR': 'TextEdit', 'STI_DES_AN': 'TextEdit', 'TIT_DAT_EM': 'DateTime', 'TIT_DAT_EX': 'DateTime', 'TIT_NB_ECH': 'TextEdit', 'TIT_NB_REN': 'TextEdit', 'TIT_DAT_AN': 'DateTime', 'TIT_DAT_JA': 'DateTime', 'TIT_CRE_CU': 'TextEdit', 'TIT_SUPRF': 'TextEdit', 'TIT_COM_LO': 'TextEdit', 'TIT_TR_REQ': 'TextEdit', 'TIT_DES': 'TextEdit', 'TIT_DES_CE': 'TextEdit', 'SES_NO_SEQ': 'TextEdit', 'SES_SEQ_FE': 'TextEdit', 'FEU_NO_SES': 'TextEdit', 'FEU_NO': 'TextEdit', 'TT_CODE': 'TextEdit', 'TT_DES_FR': 'TextEdit', 'TT_DES_AN': 'TextEdit', 'DET_POURC': 'TextEdit', 'DET_NO': 'TextEdit', 'DET_NOM': 'TextEdit', 'DET_LIST': 'TextEdit', 'DET_NUMER': 'TextEdit', 'TIT_DR_REQ': 'TextEdit', });
lyr_Propertylimits_11.set('fieldImages', {'fid': 'TextEdit', 'POL_NO_SEQ': 'TextEdit', 'TPO_CODE': 'TextEdit', 'TPO_DES_FR': 'TextEdit', 'TPO_DES_AN': 'TextEdit', 'FEU_NO_NOM': 'TextEdit', 'POL_NO_RB': 'TextEdit', 'CSI_CODE': 'TextEdit', 'CSI_NOM': 'TextEdit', 'RBP_NO': 'TextEdit', 'RBP_NOM': 'TextEdit', 'POL_NO_LC': 'TextEdit', 'POL_NO_SEC': 'Range', 'LOCA': 'TextEdit', 'POL_SUPRF': 'TextEdit', 'TER_CODE': 'TextEdit', 'TIT_NO': 'TextEdit', 'STI_CODE': 'TextEdit', 'STI_DES_FR': 'TextEdit', 'STI_DES_AN': 'TextEdit', 'TIT_DAT_EM': 'DateTime', 'TIT_DAT_EX': 'DateTime', 'TIT_NB_ECH': 'Range', 'TIT_NB_REN': 'Range', 'TIT_DAT_AN': 'DateTime', 'TIT_DAT_JA': 'DateTime', 'TIT_CRE_CU': 'TextEdit', 'TIT_SUPRF': 'TextEdit', 'TIT_COM_LO': 'TextEdit', 'TIT_TR_REQ': 'TextEdit', 'TIT_DES': 'TextEdit', 'TIT_DES_CE': 'TextEdit', 'SES_NO_SEQ': 'TextEdit', 'SES_SEQ_FE': 'TextEdit', 'FEU_NO_SES': 'TextEdit', 'FEU_NO': 'TextEdit', 'TT_CODE': 'TextEdit', 'TT_DES_FR': 'TextEdit', 'TT_DES_AN': 'TextEdit', 'DET_POURC': 'TextEdit', 'DET_NO': 'TextEdit', 'DET_NOM': 'TextEdit', 'DET_LIST': 'TextEdit', 'DET_NUMER': 'TextEdit', 'TIT_DR_REQ': 'TextEdit', 'fid_2': 'TextEdit', 'POL_NO_S_1': 'TextEdit', 'TPO_CODE_2': 'TextEdit', 'TPO_DES__1': 'TextEdit', 'TPO_DES__2': 'TextEdit', 'FEU_NO_N_1': 'TextEdit', 'POL_NO_RB_': 'TextEdit', 'CSI_CODE_2': 'TextEdit', 'CSI_NOM_2': 'TextEdit', 'RBP_NO_2': 'TextEdit', 'RBP_NOM_2': 'TextEdit', 'POL_NO_LC_': 'TextEdit', 'POL_NO_S_2': 'TextEdit', 'LOCA_2': 'TextEdit', 'POL_SUPRF_': 'TextEdit', 'TER_CODE_2': 'TextEdit', 'TIT_NO_2': 'TextEdit', 'STI_CODE_2': 'TextEdit', 'STI_DES__1': 'TextEdit', 'STI_DES__2': 'TextEdit', 'TIT_DAT__1': 'DateTime', 'TIT_DAT__2': 'DateTime', 'TIT_NB_E_1': 'TextEdit', 'TIT_NB_R_1': 'TextEdit', 'TIT_DAT__3': 'DateTime', 'TIT_DAT__4': 'DateTime', 'TIT_CRE__1': 'TextEdit', 'TIT_SUPRF_': 'TextEdit', 'TIT_COM__1': 'TextEdit', 'TIT_TR_R_1': 'TextEdit', 'TIT_DES_2': 'TextEdit', 'TIT_DES__1': 'TextEdit', 'SES_NO_S_1': 'TextEdit', 'SES_SEQ__1': 'TextEdit', 'FEU_NO_S_1': 'TextEdit', 'FEU_NO_2': 'TextEdit', 'TT_CODE_2': 'TextEdit', 'TT_DES_FR_': 'TextEdit', 'TT_DES_AN_': 'TextEdit', 'DET_POURC_': 'TextEdit', 'DET_NO_2': 'TextEdit', 'DET_NOM_2': 'TextEdit', 'DET_LIST_2': 'TextEdit', 'DET_NUMER_': 'TextEdit', 'TIT_DR_R_1': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_DDH_Historical_trace_12.set('fieldImages', {'fid': 'TextEdit', 'CollarID': 'TextEdit', 'SegLength': 'TextEdit', });
lyr_DDH_2021_trace_13.set('fieldImages', {'fid': 'TextEdit', 'CollarID': 'TextEdit', 'SegLength': 'TextEdit', });
lyr_DDH_2022_trace_14.set('fieldImages', {'fid': 'TextEdit', 'CollarID': 'TextEdit', 'SegLength': 'TextEdit', });
lyr_DDHCollarHistorical_15.set('fieldImages', {'fid': 'TextEdit', 'Projet': 'TextEdit', 'Sondage': 'TextEdit', 'Année': 'TextEdit', 'Azimut': 'Range', 'Plongée': 'Range', 'Départ': 'Range', 'Fin': 'Range', 'Longueur': 'Range', 'UTM NAD83 Zone 19 - Est': 'Range', 'UTM NAD83 Zone 19 - Nord': 'Range', 'UTM NAD83 Zone 19 - Élévation': 'Range', 'UTM NAD83 Zone 19 - AzLocal': 'TextEdit', });
lyr_DDHCollar20212022phase1_16.set('fieldImages', {'fid': 'TextEdit', 'Projet': 'TextEdit', 'Sondage': 'TextEdit', 'Année': 'Range', 'Azimut': 'TextEdit', 'Plongée': 'TextEdit', 'Départ': 'Range', 'Fin': 'TextEdit', 'Longueur': 'TextEdit', 'UTM NAD83 Zone 19 - Est': 'Range', 'UTM NAD83 Zone 19 - Nord': 'Range', 'UTM NAD83 Zone 19 - Élévation': 'TextEdit', 'UTM NAD83 Zone 19 - AzLocal': 'TextEdit', });
lyr_DDHCollar2022phase2_17.set('fieldImages', {'fid': 'TextEdit', 'Projet': 'TextEdit', 'Sondage': 'TextEdit', 'Année': 'Range', 'Azimut': 'TextEdit', 'Plongée': 'TextEdit', 'Départ': 'Range', 'Fin': 'TextEdit', 'Longueur': 'TextEdit', 'UTM NAD83 Zone 19 - Est': 'TextEdit', 'UTM NAD83 Zone 19 - Nord': 'TextEdit', 'UTM NAD83 Zone 19 - Élévation': 'Range', 'UTM NAD83 Zone 19 - AzLocal': 'TextEdit', });
lyr_2021_DDH_Planned_20211024_18.set('fieldImages', {'fid': 'TextEdit', 'ID_Sondage': 'TextEdit', 'Azimuth': 'TextEdit', 'Plongée': 'TextEdit', 'Longueur': 'TextEdit', 'Commentaire': 'TextEdit', 'Élévation': 'TextEdit', 'UTME': 'TextEdit', 'UTMN': 'TextEdit', });
lyr_2021_DDH_Planned_20211111_19.set('fieldImages', {'Proposal': 'TextEdit', 'S�QUENCE': 'Range', 'Easting': 'Range', 'Northing': 'Range', 'Elevation': 'Range', 'Azimuth': 'Range', 'Dip (NEGATIF)': 'Range', 'Planned lenght': 'Range', 'field_9': 'TextEdit', });
lyr_2021_DDH_Planned_20221GRAVI_20.set('fieldImages', {'Proposal': 'TextEdit', 'DDH': 'TextEdit', 'Status': 'TextEdit', 'Anomaly': 'TextEdit', 'Azimuth': 'Range', 'Dip': 'Range', 'Planned length (m)': 'Range', 'UTME': 'Range', 'UTMN': 'Range', 'Elevation': 'Range', });
lyr_2022_DDH_Planned_20220514Phase2_21.set('fieldImages', {'Projet': '', 'Sondage': '', 'Azimut': '', 'Plongée': '', 'Longueur': '', 'UTM NAD83 Zone 19 - Est': '', 'UTM NAD83 Zone 19 - Nord': '', 'UTM NAD83 Zone 19 - Élévation': '', 'UTM NAD83 Zone 19 - AzLocal': '', });
lyr_2022_DDH_Planned_20220514_22.set('fieldImages', {'Projet': 'TextEdit', 'Nom planifié': 'TextEdit', 'Azimut': 'TextEdit', 'Plongée': 'TextEdit', 'Longueur': 'Range', 'UTM NAD83 Zone 19 - Est': 'TextEdit', 'UTM NAD83 Zone 19 - Nord': 'TextEdit', 'UTM NAD83 Zone 19 - Élévation': 'Range', 'UTM NAD83 Zone 19 - AzLocal': 'TextEdit', });
lyr_DDH_Historical_F1F2_23.set('fieldImages', {'fid': 'TextEdit', 'Projet': 'TextEdit', 'AnnÃ©e': '', 'Sondage': 'TextEdit', 'De': 'TextEdit', 'Ã€': '', 'Longueur': 'TextEdit', 'Titre': 'TextEdit', 'RÃ©sumÃ©': '', 'Description': 'TextEdit', 'Angle': 'Range', '_From_x': 'TextEdit', '_From_y': 'TextEdit', '_From_z': 'TextEdit', '_To_x': 'TextEdit', '_To_y': 'TextEdit', '_To_z': 'TextEdit', '_Mid_x': 'TextEdit', '_Mid_y': 'TextEdit', '_Mid_z': 'TextEdit', });
lyr_DDH_Historical_Composites_24.set('fieldImages', {'fid': 'TextEdit', 'Projet': 'TextEdit', 'Sondage': 'TextEdit', 'Zone': 'TextEdit', 'De': 'TextEdit', 'Ã€': 'TextEdit', 'Longueur sur la carotte': 'TextEdit', 'Ã‰paisseur horizontale': 'TextEdit', 'Ã‰paisseur verticale': 'TextEdit', 'Ã‰paisseur vraie': 'TextEdit', 'Description': 'TextEdit', 'Ni (ppm)': 'TextEdit', 'Cu (ppm)': 'TextEdit', 'Co (ppm)': 'TextEdit', 'Ni (%)': 'TextEdit', 'Ni AA (g/t)': 'TextEdit', 'Cu (%)': 'TextEdit', 'Cu GRAV (g/t)': 'TextEdit', 'Co AA (g/t)': 'TextEdit', 'Pt (ppm)': 'TextEdit', 'Pt AA (g/t)': 'TextEdit', 'Pd (ppm)': 'TextEdit', 'Pd AA (g/t)': 'TextEdit', 'Ti (%)': 'TextEdit', 'P (ppm)': 'TextEdit', 'P (%)': 'TextEdit', 'Au (ppb)': 'TextEdit', 'Au (ppm)': 'TextEdit', 'Ag (ppm)': 'TextEdit', 'Zn (ppm)': 'TextEdit', 'Zn (%)': 'TextEdit', 'Al (%)': 'TextEdit', 'As (ppm)': 'TextEdit', 'B (ppm)': 'TextEdit', 'Ba (ppm)': 'TextEdit', 'Be (ppm)': 'TextEdit', 'Bi (ppm)': 'TextEdit', 'Ca (%)': 'TextEdit', 'Cd (ppm)': 'TextEdit', 'Cr (ppm)': 'TextEdit', 'Fe (%)': 'TextEdit', 'Ga (ppm)': 'TextEdit', 'K (%)': 'TextEdit', 'La (ppm)': 'TextEdit', 'Mg (%)': 'TextEdit', 'Mn (ppm)': 'TextEdit', 'Mo (ppm)': 'TextEdit', 'Na (%)': 'TextEdit', 'Pb (ppm)': 'TextEdit', 'Pd (ppb)': 'TextEdit', 'Pt (ppb)': 'TextEdit', 'S (%)': 'TextEdit', 'Sb (ppm)': 'TextEdit', 'Sc (ppm)': 'TextEdit', 'Sr (ppm)': 'TextEdit', 'Th (ppm)': 'TextEdit', 'Tl (ppm)': 'TextEdit', 'U (ppm)': 'TextEdit', 'V (ppm)': 'TextEdit', 'W (ppm)': 'TextEdit', 'P2O5 (%)': 'TextEdit', 'Poid (Kg)': 'TextEdit', 'Density (g/cmÂ³)': 'TextEdit', 'Cu_Calc (%)': 'TextEdit', 'Ag_Calc (%)': 'TextEdit', 'Au_Calc (%)': 'TextEdit', 'Ni_Calc (%)': 'TextEdit', 'Co (%)': 'TextEdit', 'Ni_Eq (%)': 'TextEdit', 'MF (MF)': 'TextEdit', 'V2O5 (%)': 'TextEdit', '_From_x': 'TextEdit', '_From_y': 'TextEdit', '_From_z': 'TextEdit', '_To_x': 'TextEdit', '_To_y': 'TextEdit', '_To_z': 'TextEdit', '_Mid_x': 'TextEdit', '_Mid_y': 'TextEdit', '_Mid_z': 'TextEdit', });
lyr_DDH_2021_F1F2Mzone_25.set('fieldImages', {'fid': 'TextEdit', 'Projet': 'TextEdit', 'Année': 'Range', 'Sondage': 'TextEdit', 'De': 'TextEdit', 'À': 'TextEdit', 'Longueur': 'TextEdit', 'Titre': 'TextEdit', 'Résumé': 'TextEdit', 'Description': 'TextEdit', 'Angle': 'Range', '_From_x': 'TextEdit', '_From_y': 'TextEdit', '_From_z': 'TextEdit', '_To_x': 'TextEdit', '_To_y': 'TextEdit', '_To_z': 'TextEdit', '_Mid_x': 'TextEdit', '_Mid_y': 'TextEdit', '_Mid_z': 'TextEdit', });
lyr_Composites_26.set('fieldImages', {'fid': 'TextEdit', 'Projet': 'TextEdit', 'Sondage': 'TextEdit', 'Zone': 'TextEdit', 'De': 'TextEdit', 'Ã€': 'TextEdit', 'Longueur sur la carotte': 'TextEdit', 'Ã‰paisseur horizontale': 'TextEdit', 'Ã‰paisseur verticale': 'TextEdit', 'Ã‰paisseur vraie': 'TextEdit', 'Description': 'TextEdit', 'Ni (ppm)': 'TextEdit', 'Cu (ppm)': 'TextEdit', 'Co (ppm)': 'TextEdit', 'Ni (%)': 'TextEdit', 'Ni AA (g/t)': 'TextEdit', 'Cu (%)': 'TextEdit', 'Cu GRAV (g/t)': 'TextEdit', 'Co AA (g/t)': 'TextEdit', 'Pt (ppm)': 'TextEdit', 'Pt AA (g/t)': 'TextEdit', 'Pd (ppm)': 'TextEdit', 'Pd AA (g/t)': 'TextEdit', 'Ti (%)': 'TextEdit', 'P (ppm)': 'TextEdit', 'P (%)': 'TextEdit', 'Au (ppb)': 'TextEdit', 'Au (ppm)': 'TextEdit', 'Ag (ppm)': 'TextEdit', 'Zn (ppm)': 'TextEdit', 'Zn (%)': 'TextEdit', 'Al (%)': 'TextEdit', 'As (ppm)': 'TextEdit', 'B (ppm)': 'TextEdit', 'Ba (ppm)': 'TextEdit', 'Be (ppm)': 'TextEdit', 'Bi (ppm)': 'TextEdit', 'Ca (%)': 'TextEdit', 'Cd (ppm)': 'TextEdit', 'Cr (ppm)': 'TextEdit', 'Fe (%)': 'TextEdit', 'Ga (ppm)': 'TextEdit', 'K (%)': 'TextEdit', 'La (ppm)': 'TextEdit', 'Mg (%)': 'TextEdit', 'Mn (ppm)': 'TextEdit', 'Mo (ppm)': 'TextEdit', 'Na (%)': 'TextEdit', 'Pb (ppm)': 'TextEdit', 'Pd (ppb)': 'TextEdit', 'Pt (ppb)': 'TextEdit', 'S (%)': 'TextEdit', 'Sb (ppm)': 'TextEdit', 'Sc (ppm)': 'TextEdit', 'Sr (ppm)': 'TextEdit', 'Th (ppm)': 'TextEdit', 'Tl (ppm)': 'TextEdit', 'U (ppm)': 'TextEdit', 'V (ppm)': 'TextEdit', 'W (ppm)': 'TextEdit', 'P2O5 (%)': 'TextEdit', 'Poid (Kg)': 'TextEdit', 'Density (g/cmÂ³)': 'TextEdit', 'Cu_Calc (%)': 'TextEdit', 'Ag_Calc (%)': 'TextEdit', 'Au_Calc (%)': 'TextEdit', 'Ni_Calc (%)': 'TextEdit', 'Co (%)': 'TextEdit', 'Ni_Eq (%)': 'TextEdit', 'MF (MF)': 'TextEdit', 'V2O5 (%)': 'TextEdit', '_From_x': 'TextEdit', '_From_y': 'TextEdit', '_From_z': 'TextEdit', '_To_x': 'TextEdit', '_To_y': 'TextEdit', '_To_z': 'TextEdit', '_Mid_x': 'TextEdit', '_Mid_y': 'TextEdit', '_Mid_z': 'TextEdit', });
lyr_Sulfidesintersections_27.set('fieldImages', {'fid': 'TextEdit', 'Projet': 'TextEdit', 'Année': 'Range', 'Sondage': 'TextEdit', 'De': 'TextEdit', 'À': 'TextEdit', 'Longueur': 'TextEdit', 'Titre': 'TextEdit', 'Résumé': 'TextEdit', 'Description': 'TextEdit', 'Angle': 'Range', '_From_x': 'TextEdit', '_From_y': 'TextEdit', '_From_z': 'TextEdit', '_To_x': 'TextEdit', '_To_y': 'TextEdit', '_To_z': 'TextEdit', '_Mid_x': 'TextEdit', '_Mid_y': 'TextEdit', '_Mid_z': 'TextEdit', });
lyr_2021_DDH_Planned_20211024_28.set('fieldImages', {'fid': 'TextEdit', 'ID_Sondage': 'TextEdit', 'Azimuth': 'TextEdit', 'Plongée': 'TextEdit', 'Longueur': 'TextEdit', 'Commentaire': 'TextEdit', 'Élévation': 'TextEdit', 'UTME': 'TextEdit', 'UTMN': 'TextEdit', });
lyr_2021_DDH_Planned_20211111_29.set('fieldImages', {'Proposal': 'TextEdit', 'S�QUENCE': 'Range', 'Easting': 'Range', 'Northing': 'Range', 'Elevation': 'Range', 'Azimuth': 'Range', 'Dip (NEGATIF)': 'Range', 'Planned lenght': 'Range', 'field_9': 'TextEdit', });
lyr_2021_DDH_Planned_20221GRAVI_30.set('fieldImages', {'Proposal': 'TextEdit', 'DDH': 'TextEdit', 'Status': 'TextEdit', 'Anomaly': 'TextEdit', 'Azimuth': 'Range', 'Dip': 'Range', 'Planned length (m)': 'Range', 'UTME': 'Range', 'UTMN': 'Range', 'Elevation': 'Range', });
lyr_2022_DDH_Planned_20220514Phase2_31.set('fieldImages', {'Projet': '', 'Sondage': '', 'Azimut': '', 'Plongée': '', 'Longueur': '', 'UTM NAD83 Zone 19 - Est': '', 'UTM NAD83 Zone 19 - Nord': '', 'UTM NAD83 Zone 19 - Élévation': '', 'UTM NAD83 Zone 19 - AzLocal': '', });
lyr_2022_DDH_Planned_20220514_32.set('fieldImages', {'Projet': 'TextEdit', 'Nom planifié': 'TextEdit', 'Azimut': 'TextEdit', 'Plongée': 'TextEdit', 'Longueur': 'Range', 'UTM NAD83 Zone 19 - Est': 'TextEdit', 'UTM NAD83 Zone 19 - Nord': 'TextEdit', 'UTM NAD83 Zone 19 - Élévation': 'Range', 'UTM NAD83 Zone 19 - AzLocal': 'TextEdit', });
lyr_DDH_Historical_F1F2_33.set('fieldImages', {'fid': 'TextEdit', 'Projet': 'TextEdit', 'AnnÃ©e': '', 'Sondage': 'TextEdit', 'De': 'TextEdit', 'Ã€': '', 'Longueur': 'TextEdit', 'Titre': 'TextEdit', 'RÃ©sumÃ©': '', 'Description': 'TextEdit', 'Angle': 'Range', '_From_x': 'TextEdit', '_From_y': 'TextEdit', '_From_z': 'TextEdit', '_To_x': 'TextEdit', '_To_y': 'TextEdit', '_To_z': 'TextEdit', '_Mid_x': 'TextEdit', '_Mid_y': 'TextEdit', '_Mid_z': 'TextEdit', });
lyr_DDH_Historical_Composites_34.set('fieldImages', {'fid': 'TextEdit', 'Projet': 'TextEdit', 'Sondage': 'TextEdit', 'Zone': 'TextEdit', 'De': 'TextEdit', 'Ã€': 'TextEdit', 'Longueur sur la carotte': 'TextEdit', 'Ã‰paisseur horizontale': 'TextEdit', 'Ã‰paisseur verticale': 'TextEdit', 'Ã‰paisseur vraie': 'TextEdit', 'Description': 'TextEdit', 'Ni (ppm)': 'TextEdit', 'Cu (ppm)': 'TextEdit', 'Co (ppm)': 'TextEdit', 'Ni (%)': 'TextEdit', 'Ni AA (g/t)': 'TextEdit', 'Cu (%)': 'TextEdit', 'Cu GRAV (g/t)': 'TextEdit', 'Co AA (g/t)': 'TextEdit', 'Pt (ppm)': 'TextEdit', 'Pt AA (g/t)': 'TextEdit', 'Pd (ppm)': 'TextEdit', 'Pd AA (g/t)': 'TextEdit', 'Ti (%)': 'TextEdit', 'P (ppm)': 'TextEdit', 'P (%)': 'TextEdit', 'Au (ppb)': 'TextEdit', 'Au (ppm)': 'TextEdit', 'Ag (ppm)': 'TextEdit', 'Zn (ppm)': 'TextEdit', 'Zn (%)': 'TextEdit', 'Al (%)': 'TextEdit', 'As (ppm)': 'TextEdit', 'B (ppm)': 'TextEdit', 'Ba (ppm)': 'TextEdit', 'Be (ppm)': 'TextEdit', 'Bi (ppm)': 'TextEdit', 'Ca (%)': 'TextEdit', 'Cd (ppm)': 'TextEdit', 'Cr (ppm)': 'TextEdit', 'Fe (%)': 'TextEdit', 'Ga (ppm)': 'TextEdit', 'K (%)': 'TextEdit', 'La (ppm)': 'TextEdit', 'Mg (%)': 'TextEdit', 'Mn (ppm)': 'TextEdit', 'Mo (ppm)': 'TextEdit', 'Na (%)': 'TextEdit', 'Pb (ppm)': 'TextEdit', 'Pd (ppb)': 'TextEdit', 'Pt (ppb)': 'TextEdit', 'S (%)': 'TextEdit', 'Sb (ppm)': 'TextEdit', 'Sc (ppm)': 'TextEdit', 'Sr (ppm)': 'TextEdit', 'Th (ppm)': 'TextEdit', 'Tl (ppm)': 'TextEdit', 'U (ppm)': 'TextEdit', 'V (ppm)': 'TextEdit', 'W (ppm)': 'TextEdit', 'P2O5 (%)': 'TextEdit', 'Poid (Kg)': 'TextEdit', 'Density (g/cmÂ³)': 'TextEdit', 'Cu_Calc (%)': 'TextEdit', 'Ag_Calc (%)': 'TextEdit', 'Au_Calc (%)': 'TextEdit', 'Ni_Calc (%)': 'TextEdit', 'Co (%)': 'TextEdit', 'Ni_Eq (%)': 'TextEdit', 'MF (MF)': 'TextEdit', 'V2O5 (%)': 'TextEdit', '_From_x': 'TextEdit', '_From_y': 'TextEdit', '_From_z': 'TextEdit', '_To_x': 'TextEdit', '_To_y': 'TextEdit', '_To_z': 'TextEdit', '_Mid_x': 'TextEdit', '_Mid_y': 'TextEdit', '_Mid_z': 'TextEdit', });
lyr_DDH_2021_F1F2Mzone_35.set('fieldImages', {'fid': 'TextEdit', 'Projet': 'TextEdit', 'Année': 'Range', 'Sondage': 'TextEdit', 'De': 'TextEdit', 'À': 'TextEdit', 'Longueur': 'TextEdit', 'Titre': 'TextEdit', 'Résumé': 'TextEdit', 'Description': 'TextEdit', 'Angle': 'Range', '_From_x': 'TextEdit', '_From_y': 'TextEdit', '_From_z': 'TextEdit', '_To_x': 'TextEdit', '_To_y': 'TextEdit', '_To_z': 'TextEdit', '_Mid_x': 'TextEdit', '_Mid_y': 'TextEdit', '_Mid_z': 'TextEdit', });
lyr_Composites_36.set('fieldImages', {'fid': 'TextEdit', 'Projet': 'TextEdit', 'Sondage': 'TextEdit', 'Zone': 'TextEdit', 'De': 'TextEdit', 'Ã€': 'TextEdit', 'Longueur sur la carotte': 'TextEdit', 'Ã‰paisseur horizontale': 'TextEdit', 'Ã‰paisseur verticale': 'TextEdit', 'Ã‰paisseur vraie': 'TextEdit', 'Description': 'TextEdit', 'Ni (ppm)': 'TextEdit', 'Cu (ppm)': 'TextEdit', 'Co (ppm)': 'TextEdit', 'Ni (%)': 'TextEdit', 'Ni AA (g/t)': 'TextEdit', 'Cu (%)': 'TextEdit', 'Cu GRAV (g/t)': 'TextEdit', 'Co AA (g/t)': 'TextEdit', 'Pt (ppm)': 'TextEdit', 'Pt AA (g/t)': 'TextEdit', 'Pd (ppm)': 'TextEdit', 'Pd AA (g/t)': 'TextEdit', 'Ti (%)': 'TextEdit', 'P (ppm)': 'TextEdit', 'P (%)': 'TextEdit', 'Au (ppb)': 'TextEdit', 'Au (ppm)': 'TextEdit', 'Ag (ppm)': 'TextEdit', 'Zn (ppm)': 'TextEdit', 'Zn (%)': 'TextEdit', 'Al (%)': 'TextEdit', 'As (ppm)': 'TextEdit', 'B (ppm)': 'TextEdit', 'Ba (ppm)': 'TextEdit', 'Be (ppm)': 'TextEdit', 'Bi (ppm)': 'TextEdit', 'Ca (%)': 'TextEdit', 'Cd (ppm)': 'TextEdit', 'Cr (ppm)': 'TextEdit', 'Fe (%)': 'TextEdit', 'Ga (ppm)': 'TextEdit', 'K (%)': 'TextEdit', 'La (ppm)': 'TextEdit', 'Mg (%)': 'TextEdit', 'Mn (ppm)': 'TextEdit', 'Mo (ppm)': 'TextEdit', 'Na (%)': 'TextEdit', 'Pb (ppm)': 'TextEdit', 'Pd (ppb)': 'TextEdit', 'Pt (ppb)': 'TextEdit', 'S (%)': 'TextEdit', 'Sb (ppm)': 'TextEdit', 'Sc (ppm)': 'TextEdit', 'Sr (ppm)': 'TextEdit', 'Th (ppm)': 'TextEdit', 'Tl (ppm)': 'TextEdit', 'U (ppm)': 'TextEdit', 'V (ppm)': 'TextEdit', 'W (ppm)': 'TextEdit', 'P2O5 (%)': 'TextEdit', 'Poid (Kg)': 'TextEdit', 'Density (g/cmÂ³)': 'TextEdit', 'Cu_Calc (%)': 'TextEdit', 'Ag_Calc (%)': 'TextEdit', 'Au_Calc (%)': 'TextEdit', 'Ni_Calc (%)': 'TextEdit', 'Co (%)': 'TextEdit', 'Ni_Eq (%)': 'TextEdit', 'MF (MF)': 'TextEdit', 'V2O5 (%)': 'TextEdit', '_From_x': 'TextEdit', '_From_y': 'TextEdit', '_From_z': 'TextEdit', '_To_x': 'TextEdit', '_To_y': 'TextEdit', '_To_z': 'TextEdit', '_Mid_x': 'TextEdit', '_Mid_y': 'TextEdit', '_Mid_z': 'TextEdit', });
lyr_Sulfidesintersections_37.set('fieldImages', {'fid': 'TextEdit', 'Projet': 'TextEdit', 'Année': 'Range', 'Sondage': 'TextEdit', 'De': 'TextEdit', 'À': 'TextEdit', 'Longueur': 'TextEdit', 'Titre': 'TextEdit', 'Résumé': 'TextEdit', 'Description': 'TextEdit', 'Angle': 'Range', '_From_x': 'TextEdit', '_From_y': 'TextEdit', '_From_z': 'TextEdit', '_To_x': 'TextEdit', '_To_y': 'TextEdit', '_To_z': 'TextEdit', '_Mid_x': 'TextEdit', '_Mid_y': 'TextEdit', '_Mid_z': 'TextEdit', });
lyr_Sulfidesinterceptions_38.set('fieldImages', {'fid': 'TextEdit', 'Projet': 'TextEdit', 'Sondage': 'TextEdit', 'De': 'TextEdit', 'Ã€': 'TextEdit', 'Titre': 'TextEdit', 'RÃ©sumÃ©': 'TextEdit', 'Description': 'TextEdit', '_From_x': 'TextEdit', '_From_y': 'TextEdit', '_From_z': 'TextEdit', '_To_x': 'TextEdit', '_To_y': 'TextEdit', '_To_z': 'TextEdit', '_Mid_x': 'TextEdit', '_Mid_y': 'TextEdit', '_Mid_z': 'TextEdit', });
lyr_Assays_39.set('fieldImages', {'fid': 'TextEdit', 'Projet': 'TextEdit', 'Sondage': 'TextEdit', 'De': 'TextEdit', 'Ã€': 'TextEdit', 'Ni_Eq (%)': 'TextEdit', 'field_6': 'TextEdit', 'field_7': 'TextEdit', '_From_x': 'TextEdit', '_From_y': 'TextEdit', '_From_z': 'TextEdit', '_To_x': 'TextEdit', '_To_y': 'TextEdit', '_To_z': 'TextEdit', '_Mid_x': 'TextEdit', '_Mid_y': 'TextEdit', '_Mid_z': 'TextEdit', });
lyr_Grades_40.set('fieldImages', {'fid': 'TextEdit', 'Sondage': 'TextEdit', 'Zone': 'TextEdit', 'De': 'TextEdit', 'Ã€': 'TextEdit', 'Longueur sur la carotte': 'TextEdit', 'Ni_Eq (%)': 'TextEdit', 'Ni_Calc (%)': 'TextEdit', 'Cu_Calc (%)': 'TextEdit', 'Co_Calc (%)': 'TextEdit', '_From_x': 'TextEdit', '_From_y': 'TextEdit', '_From_z': 'TextEdit', '_To_x': 'TextEdit', '_To_y': 'TextEdit', '_To_z': 'TextEdit', '_Mid_x': 'TextEdit', '_Mid_y': 'TextEdit', '_Mid_z': 'TextEdit', });
lyr_DDHCollar_41.set('fieldImages', {'fid': 'TextEdit', 'Projet': 'TextEdit', 'Sondage': 'TextEdit', 'Azimut': 'TextEdit', 'Plongée': 'TextEdit', 'Départ': 'TextEdit', 'Fin': 'TextEdit', 'Longueur': 'TextEdit', 'UTM NAD83': 'TextEdit', 'UTM NAD8_1': 'TextEdit', 'UTM NAD8_2': 'TextEdit', 'auxiliary_storage_labeling_show': 'Hidden', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', });
lyr_Trace_42.set('fieldImages', {'fid': 'TextEdit', 'CollarID': 'TextEdit', 'SegLength': 'TextEdit', });
lyr_Sulfidesinterceptions_43.set('fieldImages', {'fid': 'TextEdit', 'Projet': 'TextEdit', 'Sondage': 'TextEdit', 'De': 'TextEdit', 'Ã€': 'TextEdit', 'Titre': 'TextEdit', 'RÃ©sumÃ©': 'TextEdit', 'Description': 'TextEdit', '_From_x': 'TextEdit', '_From_y': 'TextEdit', '_From_z': 'TextEdit', '_To_x': 'TextEdit', '_To_y': 'TextEdit', '_To_z': 'TextEdit', '_Mid_x': 'TextEdit', '_Mid_y': 'TextEdit', '_Mid_z': 'TextEdit', });
lyr_Collar_44.set('fieldImages', {'fid': 'TextEdit', 'Projet': 'TextEdit', 'Sondage': 'TextEdit', 'Azimut': 'TextEdit', 'Plongée': 'TextEdit', 'Départ': 'TextEdit', 'Fin': 'TextEdit', 'Longueur': 'TextEdit', 'UTM NAD83': 'TextEdit', 'UTM NAD8_1': 'TextEdit', 'UTM NAD8_2': 'TextEdit', });
lyr_Trace_45.set('fieldImages', {'fid': 'TextEdit', 'CollarID': 'TextEdit', 'SegLength': 'TextEdit', });
lyr_Sulfidesinterceptions_46.set('fieldImages', {'fid': 'TextEdit', 'Projet': 'TextEdit', 'Sondage': 'TextEdit', 'De': 'TextEdit', 'Ã€': 'TextEdit', 'Titre': 'TextEdit', 'RÃ©sumÃ©': 'TextEdit', 'Description': 'TextEdit', '_From_x': 'TextEdit', '_From_y': 'TextEdit', '_From_z': 'TextEdit', '_To_x': 'TextEdit', '_To_y': 'TextEdit', '_To_z': 'TextEdit', '_Mid_x': 'TextEdit', '_Mid_y': 'TextEdit', '_Mid_z': 'TextEdit', });
lyr_Collar_47.set('fieldImages', {'fid': 'TextEdit', 'Projet': 'TextEdit', 'Sondage': 'TextEdit', 'Azimut': 'TextEdit', 'Plongée': 'TextEdit', 'Départ': 'TextEdit', 'Fin': 'TextEdit', 'Longueur': 'TextEdit', 'UTM NAD83': 'TextEdit', 'UTM NAD8_1': 'TextEdit', 'UTM NAD8_2': 'TextEdit', });
lyr_Metallicalshowings_6.set('fieldLabels', {});
lyr_Nonmetallicalshowings_7.set('fieldLabels', {});
lyr_Claims_10.set('fieldLabels', {});
lyr_Propertylimits_11.set('fieldLabels', {});
lyr_DDH_Historical_trace_12.set('fieldLabels', {});
lyr_DDH_2021_trace_13.set('fieldLabels', {});
lyr_DDH_2022_trace_14.set('fieldLabels', {});
lyr_DDHCollarHistorical_15.set('fieldLabels', {});
lyr_DDHCollar20212022phase1_16.set('fieldLabels', {});
lyr_DDHCollar2022phase2_17.set('fieldLabels', {});
lyr_2021_DDH_Planned_20211024_18.set('fieldLabels', {});
lyr_2021_DDH_Planned_20211111_19.set('fieldLabels', {});
lyr_2021_DDH_Planned_20221GRAVI_20.set('fieldLabels', {});
lyr_2022_DDH_Planned_20220514Phase2_21.set('fieldLabels', {});
lyr_2022_DDH_Planned_20220514_22.set('fieldLabels', {});
lyr_DDH_Historical_F1F2_23.set('fieldLabels', {});
lyr_DDH_Historical_Composites_24.set('fieldLabels', {});
lyr_DDH_2021_F1F2Mzone_25.set('fieldLabels', {});
lyr_Composites_26.set('fieldLabels', {});
lyr_Sulfidesintersections_27.set('fieldLabels', {});
lyr_2021_DDH_Planned_20211024_28.set('fieldLabels', {});
lyr_2021_DDH_Planned_20211111_29.set('fieldLabels', {});
lyr_2021_DDH_Planned_20221GRAVI_30.set('fieldLabels', {});
lyr_2022_DDH_Planned_20220514Phase2_31.set('fieldLabels', {});
lyr_2022_DDH_Planned_20220514_32.set('fieldLabels', {});
lyr_DDH_Historical_F1F2_33.set('fieldLabels', {});
lyr_DDH_Historical_Composites_34.set('fieldLabels', {});
lyr_DDH_2021_F1F2Mzone_35.set('fieldLabels', {});
lyr_Composites_36.set('fieldLabels', {});
lyr_Sulfidesintersections_37.set('fieldLabels', {});
lyr_Sulfidesinterceptions_38.set('fieldLabels', {});
lyr_Assays_39.set('fieldLabels', {});
lyr_Grades_40.set('fieldLabels', {});
lyr_DDHCollar_41.set('fieldLabels', {});
lyr_Trace_42.set('fieldLabels', {});
lyr_Sulfidesinterceptions_43.set('fieldLabels', {});
lyr_Collar_44.set('fieldLabels', {});
lyr_Trace_45.set('fieldLabels', {});
lyr_Sulfidesinterceptions_46.set('fieldLabels', {});
lyr_Collar_47.set('fieldLabels', {});
lyr_Collar_47.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});