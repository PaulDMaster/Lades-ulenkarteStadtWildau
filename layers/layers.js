ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-20037508.342789, -20037508.342789, 20037508.342789, 20037508.342789]);
var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSM_1 = new ol.layer.Tile({
            'title': 'OSM',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_Verwaltungsgrenze_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.geoportal-wildau.de/isk/wild_fp39",
                              attributions: ' ',
                              params: {
                                "LAYERS": "fp_plan",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Verwaltungsgrenze',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Verwaltungsgrenze_2, 0]);
var format_WGBMehrfamilienhaus_3 = new ol.format.GeoJSON();
var features_WGBMehrfamilienhaus_3 = format_WGBMehrfamilienhaus_3.readFeatures(json_WGBMehrfamilienhaus_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WGBMehrfamilienhaus_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WGBMehrfamilienhaus_3.addFeatures(features_WGBMehrfamilienhaus_3);
var lyr_WGBMehrfamilienhaus_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WGBMehrfamilienhaus_3, 
                style: style_WGBMehrfamilienhaus_3,
                popuplayertitle: 'WGB Mehrfamilienhaus',
                interactive: false,
                title: '<img src="styles/legend/WGBMehrfamilienhaus_3.png" /> WGB Mehrfamilienhaus'
            });
var format_Industrieflche_4 = new ol.format.GeoJSON();
var features_Industrieflche_4 = format_Industrieflche_4.readFeatures(json_Industrieflche_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Industrieflche_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Industrieflche_4.addFeatures(features_Industrieflche_4);
var lyr_Industrieflche_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Industrieflche_4, 
                style: style_Industrieflche_4,
                popuplayertitle: 'Industriefläche',
                interactive: false,
                title: '<img src="styles/legend/Industrieflche_4.png" /> Industriefläche'
            });
var format_Parkpltze_5 = new ol.format.GeoJSON();
var features_Parkpltze_5 = format_Parkpltze_5.readFeatures(json_Parkpltze_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parkpltze_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parkpltze_5.addFeatures(features_Parkpltze_5);
var lyr_Parkpltze_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parkpltze_5, 
                style: style_Parkpltze_5,
                popuplayertitle: 'Parkplätze',
                interactive: false,
                title: '<img src="styles/legend/Parkpltze_5.png" /> Parkplätze'
            });
var format_WGBEinfamilienhaus_6 = new ol.format.GeoJSON();
var features_WGBEinfamilienhaus_6 = format_WGBEinfamilienhaus_6.readFeatures(json_WGBEinfamilienhaus_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WGBEinfamilienhaus_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WGBEinfamilienhaus_6.addFeatures(features_WGBEinfamilienhaus_6);
var lyr_WGBEinfamilienhaus_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WGBEinfamilienhaus_6, 
                style: style_WGBEinfamilienhaus_6,
                popuplayertitle: 'WGB Einfamilienhaus',
                interactive: false,
                title: '<img src="styles/legend/WGBEinfamilienhaus_6.png" /> WGB Einfamilienhaus'
            });
var format_ffentlicheEinrichtungen_7 = new ol.format.GeoJSON();
var features_ffentlicheEinrichtungen_7 = format_ffentlicheEinrichtungen_7.readFeatures(json_ffentlicheEinrichtungen_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ffentlicheEinrichtungen_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ffentlicheEinrichtungen_7.addFeatures(features_ffentlicheEinrichtungen_7);
var lyr_ffentlicheEinrichtungen_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ffentlicheEinrichtungen_7, 
                style: style_ffentlicheEinrichtungen_7,
                popuplayertitle: 'Öffentliche Einrichtungen',
                interactive: false,
                title: '<img src="styles/legend/ffentlicheEinrichtungen_7.png" /> Öffentliche Einrichtungen'
            });
var format_Freizeiteinrichtungen_8 = new ol.format.GeoJSON();
var features_Freizeiteinrichtungen_8 = format_Freizeiteinrichtungen_8.readFeatures(json_Freizeiteinrichtungen_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Freizeiteinrichtungen_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Freizeiteinrichtungen_8.addFeatures(features_Freizeiteinrichtungen_8);
var lyr_Freizeiteinrichtungen_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Freizeiteinrichtungen_8, 
                style: style_Freizeiteinrichtungen_8,
                popuplayertitle: 'Freizeiteinrichtungen',
                interactive: false,
                title: '<img src="styles/legend/Freizeiteinrichtungen_8.png" /> Freizeiteinrichtungen'
            });
var format_FNP_9 = new ol.format.GeoJSON();
var features_FNP_9 = format_FNP_9.readFeatures(json_FNP_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FNP_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FNP_9.addFeatures(features_FNP_9);
var lyr_FNP_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FNP_9, 
                style: style_FNP_9,
                popuplayertitle: 'FNP',
                interactive: false,
    title: 'FNP<br />\
    <img src="styles/legend/FNP_9_0.png" /> Wohnbau<br />\
    <img src="styles/legend/FNP_9_1.png" /> Gemeinbedarf<br />\
    <img src="styles/legend/FNP_9_2.png" /> gewerblich<br />\
    <img src="styles/legend/FNP_9_3.png" /> gemischte Baufläche<br />'
        });
var lyr_Bebauungsflche_10 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.geoportal-wildau.de/isk/wild_fp39",
                              attributions: ' ',
                              params: {
                                "LAYERS": "fp_bebauungsflaeche",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Bebauungsfläche',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Bebauungsflche_10, 0]);
var lyr_Waldflche_11 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.geoportal-wildau.de/isk/wild_fp39",
                              attributions: ' ',
                              params: {
                                "LAYERS": "fp_waldflaeche",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Waldfläche',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Waldflche_11, 0]);
var lyr_Grn_12 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.geoportal-wildau.de/isk/wild_fp39",
                              attributions: ' ',
                              params: {
                                "LAYERS": "fp_gruen",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Grün',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Grn_12, 0]);
var lyr_Gewsser_13 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.geoportal-wildau.de/isk/wild_fp39",
                              attributions: ' ',
                              params: {
                                "LAYERS": "fp_gewaesser",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Gewässer',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Gewsser_13, 0]);
var lyr_Denkmalschutzensemble_14 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.geoportal-wildau.de/isk/wild_fp39",
                              attributions: ' ',
                              params: {
                                "LAYERS": "fp_denkmalschutzensemble",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Denkmalschutzensemble',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Denkmalschutzensemble_14, 0]);
var lyr_SchutzPflegeundEntwicklung_15 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.geoportal-wildau.de/isk/wild_fp39",
                              attributions: ' ',
                              params: {
                                "LAYERS": "fp_schutzpflegeentwicklung",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Schutz, Pflege und Entwicklung',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_SchutzPflegeundEntwicklung_15, 0]);
var lyr_Straenverkehr_16 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.geoportal-wildau.de/isk/wild_fp39",
                              attributions: ' ',
                              params: {
                                "LAYERS": "fp_strassenverkehr",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Straßenverkehr',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Straenverkehr_16, 0]);
var lyr_Bahnverkehr_17 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.geoportal-wildau.de/isk/wild_fp39",
                              attributions: ' ',
                              params: {
                                "LAYERS": "fp_bahnverkehr",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Bahnverkehr',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Bahnverkehr_17, 0]);
var lyr_VerundEntsorgung_18 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.geoportal-wildau.de/isk/wild_fp39",
                              attributions: ' ',
                              params: {
                                "LAYERS": "fp_verentsorgung",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Ver- und Entsorgung',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_VerundEntsorgung_18, 0]);
var lyr_GenerischesObjekt_19 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.geoportal-wildau.de/isk/wild_fp39",
                              attributions: ' ',
                              params: {
                                "LAYERS": "fp_generischesobjekt",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Generisches Objekt',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_GenerischesObjekt_19, 0]);
var lyr_Gemeinbedarf_20 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.geoportal-wildau.de/isk/wild_fp39",
                              attributions: ' ',
                              params: {
                                "LAYERS": "fp_gemeinbedarf",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Gemeinbedarf',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Gemeinbedarf_20, 0]);
var format_Ladesaeulen_21 = new ol.format.GeoJSON();
var features_Ladesaeulen_21 = format_Ladesaeulen_21.readFeatures(json_Ladesaeulen_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ladesaeulen_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ladesaeulen_21.addFeatures(features_Ladesaeulen_21);
var lyr_Ladesaeulen_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ladesaeulen_21, 
                style: style_Ladesaeulen_21,
                popuplayertitle: 'Ladesaeulen',
                interactive: true,
                title: '<img src="styles/legend/Ladesaeulen_21.png" /> Ladesaeulen'
            });
var group_Ladesulen = new ol.layer.Group({
                                layers: [lyr_Ladesaeulen_21,],
                                fold: "open",
                                title: 'Ladesäulen'});
var group_FNP = new ol.layer.Group({
                                layers: [lyr_FNP_9,lyr_Bebauungsflche_10,lyr_Waldflche_11,lyr_Grn_12,lyr_Gewsser_13,lyr_Denkmalschutzensemble_14,lyr_SchutzPflegeundEntwicklung_15,lyr_Straenverkehr_16,lyr_Bahnverkehr_17,lyr_VerundEntsorgung_18,lyr_GenerischesObjekt_19,lyr_Gemeinbedarf_20,],
                                fold: "open",
                                title: 'FNP'});
var group_Stadtplan = new ol.layer.Group({
                                layers: [lyr_Verwaltungsgrenze_2,lyr_WGBMehrfamilienhaus_3,lyr_Industrieflche_4,lyr_Parkpltze_5,lyr_WGBEinfamilienhaus_6,lyr_ffentlicheEinrichtungen_7,lyr_Freizeiteinrichtungen_8,],
                                fold: "open",
                                title: 'Stadtplan'});

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_OSM_1.setVisible(true);lyr_Verwaltungsgrenze_2.setVisible(true);lyr_WGBMehrfamilienhaus_3.setVisible(true);lyr_Industrieflche_4.setVisible(true);lyr_Parkpltze_5.setVisible(true);lyr_WGBEinfamilienhaus_6.setVisible(true);lyr_ffentlicheEinrichtungen_7.setVisible(true);lyr_Freizeiteinrichtungen_8.setVisible(true);lyr_FNP_9.setVisible(true);lyr_Bebauungsflche_10.setVisible(true);lyr_Waldflche_11.setVisible(true);lyr_Grn_12.setVisible(true);lyr_Gewsser_13.setVisible(true);lyr_Denkmalschutzensemble_14.setVisible(true);lyr_SchutzPflegeundEntwicklung_15.setVisible(true);lyr_Straenverkehr_16.setVisible(true);lyr_Bahnverkehr_17.setVisible(true);lyr_VerundEntsorgung_18.setVisible(true);lyr_GenerischesObjekt_19.setVisible(true);lyr_Gemeinbedarf_20.setVisible(true);lyr_Ladesaeulen_21.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_OSM_1,group_Stadtplan,group_FNP,group_Ladesulen];
lyr_WGBMehrfamilienhaus_3.set('fieldAliases', {'fid': 'fid', 'Art': 'Art', 'Flaeche': 'Flaeche', });
lyr_Industrieflche_4.set('fieldAliases', {'fid': 'fid', });
lyr_Parkpltze_5.set('fieldAliases', {'fid': 'fid', });
lyr_WGBEinfamilienhaus_6.set('fieldAliases', {'fid': 'fid', });
lyr_ffentlicheEinrichtungen_7.set('fieldAliases', {'fid': 'fid', });
lyr_Freizeiteinrichtungen_8.set('fieldAliases', {'fid': 'fid', });
lyr_FNP_9.set('fieldAliases', {'fid': 'fid', 'Kategorie': 'Kategorie', });
lyr_Ladesaeulen_21.set('fieldAliases', {'id': 'id', 'ID_1': 'ID_1', 'Betreiber': 'Betreiber der Ladesäule', 'Standort': 'Standort der Ladesäule', 'Anzahl LS': 'Anzahl der Ladesäulen', 'Ladepunkte': 'Anzahl der Ladepunkte', 'ArtLP': 'Art des Ladepunktes', 'SSys': 'Steckersystem', 'NLeistung': 'Nennleistung (in kW)', });
lyr_WGBMehrfamilienhaus_3.set('fieldImages', {'fid': 'TextEdit', 'Art': 'TextEdit', 'Flaeche': 'TextEdit', });
lyr_Industrieflche_4.set('fieldImages', {'fid': 'TextEdit', });
lyr_Parkpltze_5.set('fieldImages', {'fid': 'TextEdit', });
lyr_WGBEinfamilienhaus_6.set('fieldImages', {'fid': 'TextEdit', });
lyr_ffentlicheEinrichtungen_7.set('fieldImages', {'fid': 'TextEdit', });
lyr_Freizeiteinrichtungen_8.set('fieldImages', {'fid': 'TextEdit', });
lyr_FNP_9.set('fieldImages', {'fid': 'TextEdit', 'Kategorie': 'Range', });
lyr_Ladesaeulen_21.set('fieldImages', {'id': 'TextEdit', 'ID_1': 'TextEdit', 'Betreiber': 'TextEdit', 'Standort': 'TextEdit', 'Anzahl LS': 'Range', 'Ladepunkte': 'TextEdit', 'ArtLP': 'ValueMap', 'SSys': 'ValueMap', 'NLeistung': 'TextEdit', });
lyr_WGBMehrfamilienhaus_3.set('fieldLabels', {'fid': 'hidden field', 'Art': 'hidden field', 'Flaeche': 'hidden field', });
lyr_Industrieflche_4.set('fieldLabels', {'fid': 'hidden field', });
lyr_Parkpltze_5.set('fieldLabels', {'fid': 'hidden field', });
lyr_WGBEinfamilienhaus_6.set('fieldLabels', {'fid': 'hidden field', });
lyr_ffentlicheEinrichtungen_7.set('fieldLabels', {'fid': 'hidden field', });
lyr_Freizeiteinrichtungen_8.set('fieldLabels', {'fid': 'hidden field', });
lyr_FNP_9.set('fieldLabels', {'fid': 'hidden field', 'Kategorie': 'hidden field', });
lyr_Ladesaeulen_21.set('fieldLabels', {'id': 'hidden field', 'ID_1': 'hidden field', 'Betreiber': 'header label - always visible', 'Standort': 'header label - always visible', 'Anzahl LS': 'header label - always visible', 'Ladepunkte': 'header label - always visible', 'ArtLP': 'header label - always visible', 'SSys': 'header label - always visible', 'NLeistung': 'header label - always visible', });
lyr_Ladesaeulen_21.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});