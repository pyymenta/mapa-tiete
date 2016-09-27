var spCoords = [-5191207.638373509,-2698731.105121977];
// var extent = [-5191207.638373509,-2698731.105121977,0,0];
// var extent = [0,0,8000,3000];
var extent = [-5191207.638373509,-2698731.105121977,-5183207.638373509,-2695731.105121977];
//Teste ol
var projection = new ol.proj.Projection({
  code: 'xkcd-image',
  units: 'pixels',
  extent: extent
});

var mapLayers = [
  new ol.layer.Tile({source: new ol.source.OSM()}),
  new ol.layer.Image({
    source: new ol.source.ImageStatic({
      // url: '../wp-includes/img/background.png',
      url: 'background-transp.png',
      projection: projection,
      imageExtent: extent
    })
  })];

/*
var ca01,ca02,ca03,ca04,ca05,ca06,ca07,ca08,ca09;
/// CAMINHO RELATIVO
// camada1 = platMapAPI.createVectorLayerFromKML('../wp-content/uploads/2016/09/1A.kml');
ca01 = platMapAPI.createVectorLayerFromKML('1A.kml');
ca02 = platMapAPI.createVectorLayerFromKML('1B.kml');
ca03 = platMapAPI.createVectorLayerFromKML('2A.kml');
ca04 = platMapAPI.createVectorLayerFromKML('3A.kml');
ca05 = platMapAPI.createVectorLayerFromKML('3B.kml');
ca06 = platMapAPI.createVectorLayerFromKML('3C.kml');
ca07 = platMapAPI.createVectorLayerFromKML('4A.kml');
ca08 = platMapAPI.createVectorLayerFromKML('4B.kml');
ca09 = platMapAPI.createVectorLayerFromKML('5A.kml');
mapLayers.push(ca01);
mapLayers.push(ca02);
mapLayers.push(ca03);
*/

/// Adiciona camadas ao array mapLayers
var kmlUrls = [
  '1A.kml',
  '1B.kml',
  '2A.kml',
  '3A.kml',
  '3B.kml',
  '3C.kml',
  '4A.kml',
  '4B.kml',
  '5A.kml'
];

for(var i = 0; i < kmlUrls.length; i++) {
  var camada = platMapAPI.createVectorLayerFromKML(kmlUrls[i]);
  camada.set("name",'camada'+(i+1));
  mapLayers.push(camada);
}

var view = new ol.View({
  // center: spCoords,
  center: ol.extent.getCenter(extent),
  zoom: 11,
  // minZoom: 10,
  maxZoom: 30
});
var map = new ol.Map({
  layers: mapLayers,
  target: 'map',
  view: view
});

// Teste

var featureOverlay = new ol.layer.Vector({
  source: new ol.source.Vector(),
  map: map,
  style: new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: '#fdd',
      width: 2
    }),
    fill: new ol.style.Fill({
      color: 'rgba(255,0,0,0.1)'
    })
  })
});

var highlight;
var displayFeatureInfo = function(pixel) {
  var feature = map.forEachFeatureAtPixel(pixel, function(feature) {
    return feature;
  });

  var info = document.getElementById('info');
  if (feature) {
    // info.innerHTML = feature.getId() + ': ' + feature.get('name');
    info.innerHTML = feature.getProperties();
  } else {
    info.innerHTML = '&nbsp;';
  }

  if (feature !== highlight) {
    if (highlight) {
      featureOverlay.getSource().removeFeature(highlight);
    }
    if (feature) {
      featureOverlay.getSource().addFeature(feature);
    }
    highlight = feature;
  }

};
var teste;
var myFunc = function(pixel) {
  var feature = map.forEachFeatureAtPixel(pixel, function(feature) {
    return feature;
  });

  var info = document.getElementById('info');
  if (feature) {
    // info.innerHTML = feature.getId() + ': ' + feature.get('name');
    console.log(feature.getProperties());
    teste = feature;
  } else {
    info.innerHTML = '&nbsp;';
  }

  if (feature !== highlight) {
    if (highlight) {
      featureOverlay.getSource().removeFeature(highlight);
    }
    if (feature) {
      featureOverlay.getSource().addFeature(feature);
    }
    highlight = feature;
  }

};

map.on('pointermove', function(evt) {
  if (evt.dragging) {
    return;
  }
  var pixel = map.getEventPixel(evt.originalEvent);
  displayFeatureInfo(pixel);
});

map.on('click', function(evt) {
  myFunc(evt.pixel);
});