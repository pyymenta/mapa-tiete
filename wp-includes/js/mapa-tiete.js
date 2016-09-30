/// DEBUG
var bugMap;

//JSON com Informações de cada categoria
const information = {
  '_1A': {
  'titulo': 'Destamponamento de córrego ',
  'texto': 'O destamponamento é uma solução adotada para os córregos limpos a fim de aumentar a sua capacidade de vazão e melhorar a drenagem superficial urbana. Além disso, a abertura dos córregos promove o contato dos corpos d´água com a atmosfera e colabora para o ressurgimento da vida aquática e ciliar;'
  },
  '_1B': {
  'titulo': 'Qualificação de córregos abertos',
  'texto': 'O destamponamento é uma solução adotada para os córregos limpos a fim de aumentar a sua capacidade de vazão e melhorar a drenagem superficial urbana. Além disso, a abertura dos córregos promove o contato dos corpos d´água com a atmosfera e colabora para o ressurgimento da vida aquática e ciliar;'
  },
  '_2A': {
  'titulo': 'Implantar eixos drenantes',
  'texto': 'Criar grandes cordões de infiltração das águas pluviais em locais estratégicos, transversais ao sentido do escoamento superficial das bacias de drenagem, colaborando para impedir que as águas atinjam os pontos mais baixos da várzea;'
  },
  '_2B': {
  'titulo': 'Canteiros drenantes',
  'texto': 'Criar grandes cordões de infiltração das águas pluviais em locais estratégicos, transversais ao sentido do escoamento superficial das bacias de drenagem, colaborando para impedir que as águas atinjam os pontos mais baixos da várzea. '
  },
  '_3A': {
  'titulo': 'Praças secas rebaixadas',
  'texto': 'Orientar o escoamento das águas pluviais em direção a grandes áreas projetadas para receber, reter e retardar a descida de grandes volumes d´água;'
  },
  '_3B': {
  'titulo': 'Praças de absorção',
  'texto': 'Orientar o escoamento das águas pluviais em direção a grandes áreas projetadas para receber, reter e retardar a descida de grandes volumes d´água;'
  },
  '_3C': {
  'titulo': 'Alças de pontes',
  'texto': 'Implantar áreas de absorção de águas pluviais em alças de pontes que sejam fozes de tributários contribui para a redução de enchentes;'
  },
  '_4A': {
  'titulo': 'Parques lineares',
  'texto': 'A recuperação ambiental das margens do sistema hídrico  colaboram para infiltração e armazenamento da água no lençol freático e para a criação da mata ciliar, importante componente para a produção de alimentos para a fauna aquática;'
  },
  '_4B': {
  'titulo': 'Outros parques',
  'texto': 'Aumentar o número de praças e parques que proporcionam áreas de lazer, convívio e contemplação e absorvem e refletem a irradiação solar, amenizando as ilhas de calor;'
  },
  '_5A': {
  'titulo': 'Requalificação de praças existentes',
  'texto': 'Aumentar o número de praças e parques que proporcionam áreas de lazer, convívio e contemplação e absorvem e refletem a irradiação solar, amenizando as ilhas de calor.<br>A recuperação ambiental das margens do sistema hídrico  colaboram para infiltração e armazenamento da água no lençol freático e para a criação da mata ciliar, importante componente para a produção de alimentos para a fauna aquática;'
  },
  '_5B': {
  'titulo': 'Praças oriundas de destinação obrigatória',
  'texto': 'Aumentar o número de praças e parques que proporcionam áreas de lazer, convívio e contemplação e absorvem e refletem a irradiação solar, amenizando as ilhas de calor.<br>A recuperação ambiental das margens do sistema hídrico  colaboram para infiltração e armazenamento da água no lençol freático e para a criação da mata ciliar, importante componente para a produção de alimentos para a fauna aquática;'
  },
  '_5C': {
  'titulo': 'Praças sobre túneis',
  'texto': 'Aumentar o número de praças e parques que proporcionam áreas de lazer, convívio e contemplação e absorvem e refletem a irradiação solar, amenizando as ilhas de calor.<br>A recuperação ambiental das margens do sistema hídrico  colaboram para infiltração e armazenamento da água no lençol freático e para a criação da mata ciliar, importante componente para a produção de alimentos para a fauna aquática;'
  },
  '_5D': {
  'titulo': 'Praças sob viadutos',
  'texto': 'Aumentar o número de praças e parques que proporcionam áreas de lazer, convívio e contemplação e absorvem e refletem a irradiação solar, amenizando as ilhas de calor.<br>A recuperação ambiental das margens do sistema hídrico  colaboram para infiltração e armazenamento da água no lençol freático e para a criação da mata ciliar, importante componente para a produção de alimentos para a fauna aquática;'
  },
  '_5E': {
  'titulo': 'Novas praças',
  'texto': 'Aumentar o número de praças e parques que proporcionam áreas de lazer, convívio e contemplação e absorvem e refletem a irradiação solar, amenizando as ilhas de calor.<br>A recuperação ambiental das margens do sistema hídrico  colaboram para infiltração e armazenamento da água no lençol freático e para a criação da mata ciliar, importante componente para a produção de alimentos para a fauna aquática;'
  },
  '_6A': {
  'titulo': 'Alamedas',
  'texto': 'Criar um sistema ambiental em rede aumenta a conectividade entre áreas verdes, proporcionando percursos sombreados aos usuários e caminhos ecológicos para a fauna;'
  },
  '_6B': {
  'titulo': 'Bulevares',
  'texto': 'Criar um sistema ambiental em rede aumenta a conectividade entre áreas verdes, proporcionando percursos sombreados aos usuários e caminhos ecológicos para a fauna;'
  },
  '_7A': {
  'titulo': 'Abertura de novo viário',
  'texto': 'A implantação de bulevares que interligam os bairros e priorizam o transporte público e alamedas de conexões locais com ciclovias e amplas calçadas irá promover a integração;'
  },
  '_7B': {
  'titulo': 'Alargamento de viário existente',
  'texto': 'A implantação de bulevares que interligam os bairros e priorizam o transporte público e alamedas de conexões locais com ciclovias e amplas calçadas irá promover a integração;'
  },
  '_7C': {
  'titulo': 'Requalificação de viário existente',
  'texto': 'A implantação de bulevares que interligam os bairros e priorizam o transporte público e alamedas de conexões locais com ciclovias e amplas calçadas irá promover a integração;'
  },
  '_8A': {
  'titulo': 'Ampliação e melhoria de passeios existentes',
  'texto': 'A requalificação dos passeios por meio do redesenho de sua geometria, seja ampliando-o em detrimento do leito carroçável, seja diminuindo curvaturas para reduzir a velocidade dos automóveis incentivarão a locomoção peatonal pelo território. A acessibilidade deve ser garantida em ponto estratégicos  com a criação de amplos passeios que vencem os desníveis;'
  },
  '_8B': {
  'titulo': 'Acesso - rampas e escadarias',
  'texto': 'A requalificação dos passeios por meio do redesenho de sua geometria, seja ampliando-o em detrimento do leito carroçável, seja diminuindo curvaturas para reduzir a velocidade dos automóveis incentivarão a locomoção peatonal pelo território. A acessibilidade deve ser garantida em ponto estratégicos  com a criação de amplos passeios que vencem os desníveis;'
  },
  '_9A': {
  'titulo': 'Ciclopassarelas sobre ferrovia',
  'texto': 'Novas travessias associadas a equipamentos, espaços públicos ou estações de trem e metrô, que priorizam deslocamentos a pé e de bicicleta garantem a conexão entre bairros e o acesso a trabalho, serviços e equipamentos públicos;'
  },
  '_9B': {
  'titulo': 'Ciclopassarela sob ferrovia',
  'texto': 'Novas travessias associadas a equipamentos, espaços públicos ou estações de trem e metrô, que priorizam deslocamentos a pé e de bicicleta garantem a conexão entre bairros e o acesso a trabalho, serviços e equipamentos públicos;'
  },
  '_9C': {
  'titulo': 'Ciclopassarela sobre rios ou córregos',
  'texto': 'Novas travessias associadas a equipamentos, espaços públicos ou estações de trem e metrô, que priorizam deslocamentos a pé e de bicicleta garantem a conexão entre bairros e o acesso a trabalho, serviços e equipamentos públicos;'
  },
  '_10A': {
  'titulo': 'Equipamentos em terrenos públicos subutilizados',
  'texto': 'A implantação de novos equipamentos, além de suprir as necessidades da população, qualifica a vida nos bairros;'
  },
  '_10B': {
  'titulo': 'Equipamentos em galpões reformados',
  'texto': 'A implantação de novos equipamentos, além de suprir as necessidades da população, qualifica a vida nos bairros;'
  },
  '_10C': {
  'titulo': 'Equipamentos em áreas indicadas de parcelamento e grandes lotes',
  'texto': 'A implantação de novos equipamentos, além de suprir as necessidades da população, qualifica a vida nos bairros;'
  },
  '_11A': {
  'titulo': 'Infraestrutura de TI e incentivo ao setor de negócios',
  'texto': 'Manter e potencializar unidades produtivas, incentivar a implantação de novas atividades produtivas, desenvolver o setor logístico, proteger territórios produtivos da incorporação residencial vertical e modernizar e integrar o entorno das unidades de atacado/varejo;'
  },
  '_11B': {
  'titulo': 'Permanência de usos produtivos',
  'texto': 'Manter e potencializar unidades produtivas, incentivar a implantação de novas atividades produtivas, desenvolver o setor logístico, proteger territórios produtivos da incorporação residencial vertical e modernizar e integrar o entorno das unidades de atacado/varejo;'
  },
  '_11C': {
  'titulo': 'Incentivo ao setor logístico',
  'texto': 'Manter e potencializar unidades produtivas, incentivar a implantação de novas atividades produtivas, desenvolver o setor logístico, proteger territórios produtivos da incorporação residencial vertical e modernizar e integrar o entorno das unidades de atacado/varejo;'
  },
  '_11D': {
  'titulo': 'Incentivo ao parcelamento de grandes centros de compras com manutenção de uso',
  'texto': 'Manter e potencializar unidades produtivas, incentivar a implantação de novas atividades produtivas, desenvolver o setor logístico, proteger territórios produtivos da incorporação residencial vertical e modernizar e integrar o entorno das unidades de atacado/varejo;'
  },
  '_12A': {
  'titulo': 'Fruição pública',
  'texto': 'Implantar Conjuntos de Habitação Social de dimensões menores e mais espalhados pelo território, contemplando fachadas ativas, faixas de fruição pública, mix de rendas e espaços públicos de qualidade, procurando ao máximo relacionar os conjuntos com o espaço urbano à sua volta;'
  },
  '_12B': {
  'titulo': 'Pequenas praças como espaços de socialização',
  'texto': 'Implantar Conjuntos de Habitação Social de dimensões menores e mais espalhados pelo território, contemplando fachadas ativas, faixas de fruição pública, mix de rendas e espaços públicos de qualidade, procurando ao máximo relacionar os conjuntos com o espaço urbano à sua volta;'
  },
  '_12C': {
  'titulo': 'Divisões condominiais com poucas unidades habitacionais e divididos por faixa de atendimento',
  'texto': 'Implantar Conjuntos de Habitação Social de dimensões menores e mais espalhados pelo território, contemplando fachadas ativas, faixas de fruição pública, mix de rendas e espaços públicos de qualidade, procurando ao máximo relacionar os conjuntos com o espaço urbano à sua volta;'
  },
  '_12D': {
  'titulo': 'Fachada ativa',
  'texto': 'Implantar Conjuntos de Habitação Social de dimensões menores e mais espalhados pelo território, contemplando fachadas ativas, faixas de fruição pública, mix de rendas e espaços públicos de qualidade, procurando ao máximo relacionar os conjuntos com o espaço urbano à sua volta;'
  },
  '_12E': {
  'titulo': 'Demarcação de áreas para habitação em terrenos menores, distribuídos pelo território',
  'texto': 'Implantar Conjuntos de Habitação Social de dimensões menores e mais espalhados pelo território, contemplando fachadas ativas, faixas de fruição pública, mix de rendas e espaços públicos de qualidade, procurando ao máximo relacionar os conjuntos com o espaço urbano à sua volta;'
  },
  '_12F': {
  'titulo': 'Taxas de ocupação mais altas em áreas próximas às áreas verdes',
  'texto': 'Implantar Conjuntos de Habitação Social de dimensões menores e mais espalhados pelo território, contemplando fachadas ativas, faixas de fruição pública, mix de rendas e espaços públicos de qualidade, procurando ao máximo relacionar os conjuntos com o espaço urbano à sua volta;'
  },
  '_12G': {
  'titulo': 'Maiores áreascondominiais verdes em regiões com pouca oferta de áreas verdes',
  'texto': 'Implantar Conjuntos de Habitação Social de dimensões menores e mais espalhados pelo território, contemplando fachadas ativas, faixas de fruição pública, mix de rendas e espaços públicos de qualidade, procurando ao máximo relacionar os conjuntos com o espaço urbano à sua volta;'
  }
}
var cLayer;
var spCoords = [-5199000, -2695000];
// var oldExtent = [-5191207.638373509, -2698731.105121977, -5183207.638373509, -2695731.105121977];

// Working
var extent = [-5204950,-2698891,-5181999,-2690035];
var mapImageLayer = new ol.layer.Image({
      source: new ol.source.ImageStatic({
        url: '../wp-includes/img/background.png',        
        imageExtent: extent,
        projection: 'EPSG:3857'
      })
    });

var defaultImg = 'http://gestaourbana.prefeitura.sp.gov.br/wp-content/uploads/2014/08/arco_tiete.jpg';
var cImage;
var proposta;
var imgUrl;

function readProp(obj, prop) {
    return obj[prop];
}
var strokeLineDash = [0];

var lStyle = new ol.style.Style({
          stroke: new ol.style.Stroke({
            color: 'rgba(80,120,200,0.8)',
            width: 2,
            lineDash: strokeLineDash
          }),
          fill: new ol.style.Fill({
            color: 'rgba(120,180,255,0.5)'
          })
        });

jQuery(document).ready(function() {
  jQuery('#propostaImagem').html("<img src='"+defaultImg+"' alt='Arco Tietê' />");

  // Modal / Lightbox    
  var modal = jQuery('#container_lightbox');
  var isModal = false;
  
  function hideLinks(){
      if(!isModal)
          jQuery(svg).css('opacity', '0');
  }
  function fixaCloseBT(){
      var closeBT = jQuery('.close');
      var mContent = jQuery('.modal_content');
      jQuery('.close').css({'opacity': '1'});
      closeBT.offset({
          top: mContent.offset().top-6,
          left: mContent.offset().left+mContent.width()+5
      });
  }
  function openModal(){
    jQuery(modal).css({
        'opacity': '1',
        'max-height': '100%',
        'height': '100%',
        'overflow': 'auto',
    });
    jQuery('body').toggleClass('modal_open');

    // var modCont = '<h3>'+proposta.titulo+'</h3>'+imgUrl+'<p>'+proposta.texto+'</p>';
    jQuery('#lightbox_content').html(jQuery('#infoContainer').html());
    isModal = true;
    setTimeout(fixaCloseBT, 100);
  }
  function fechaModal(){
      jQuery('body').removeClass('modal_open');
      isModal = false;
      // hideLinks();
      jQuery('body').css('padding-right', 'initial');
      jQuery(modal).css({
          'opacity': '0',
          'height': '0',
          'overflow': 'hidden',
      });
      jQuery('.close').css({'opacity': '0'});
  }
  jQuery(document).mouseup(function (e){
      var container = jQuery(".modal_content");
      if (!container.is(e.target) // se o alvo não for o container
          && (container.has(e.target).length === 0) // ...nem um filho do container
          && (e.target != jQuery('html').get(0))) // nem a scrollbar
      {
          fechaModal();
      }
  });

  jQuery(".close").click(fechaModal);

  /// End Modal / Lightbox

  /// Adiciona camadas ao array mapLayers
  var mapLayers = [new ol.layer.Tile({source: new ol.source.OSM()})];

  var kmlUrls = [];
  for (codigo in information){kmlUrls.push(codigo.split('_')[1]+'.kml');}
  
  // for (var i = 0; i < kmlUrls.length; i++) {
  for (var i = kmlUrls.length-1; i >= 0; i--) {
    var nome = '_'+kmlUrls[i].split('.')[0];    
    var camada = platMapAPI.createCustomVectorLayerFromKML("../wp-content/themes/gestaourbana-1.2/uploads/"+kmlUrls[i], lStyle);
    camada.set("name",nome); 
    mapLayers.push(camada);
  }

  var view = new ol.View({
    center: spCoords,
    zoom: 12,
    minZoom: 12,
    maxZoom: 30
  });

  var map = new ol.Map({
    layers: mapLayers,
    target: 'mapa',
    view: view
  });

  var featureOverlay = new ol.layer.Vector({
    source: new ol.source.Vector(),
    map: map,
    style: new ol.style.Style({
      stroke: new ol.style.Stroke({
        color: '#FFFFFF',
        width: 3,
        lineDash: strokeLineDash
      }),
      fill: new ol.style.Fill({
        color: 'rgba(255,255,255,0.5)'
      })
    })
  });

  // featureOverlay.setZIndex(1);

  var highlight;
  var displayFeatureInfo = function (pixel) {
    var feature = map.forEachFeatureAtPixel(pixel, function (feature) {
      if(feature !== highlight)
        return feature;
    });
    var info = document.getElementById('info');
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
  
  var getFeatureLayerInfo = function (pixel) {
    cLayer = map.forEachLayerAtPixel(pixel, function (layer) {
      if(layer != featureOverlay){
        return layer;
      }      
    });
    var feature = map.forEachFeatureAtPixel(pixel, function(feature){
      return feature;
    });
    if (feature) {      
      var layer = cLayer.get('name');
      proposta = readProp(information, layer);      
      imgUrl = "<img src='../wp-content/themes/gestaourbana-1.2/uploads/"+layer.split('_')[1]+".png' onerror=\"this.src='"+defaultImg+"'\" alt='"+proposta.titulo+"' />";
      jQuery('#propostaTitulo').html(proposta.titulo);      
      jQuery('#propostaImagem').html(imgUrl);
      jQuery('#propostaTexto').html(proposta.texto);      
    } else {
      jQuery('#propostaTitulo').html('Clique no perímetro desejado para obter mais informações.');      
      jQuery('#propostaImagem').html('');

      jQuery('#propostaTexto').html('');
    }
  };
  /*map.on('click', function (evt) {
    getFeatureLayerInfo(evt.pixel);    
  });*/
  
  // MouseOver - bug por conta da sobreposição
  // map.on('pointermove', function (evt) {
  map.on('click', function (evt) {
    getFeatureLayerInfo(evt.pixel);
    if (evt.dragging) {
      return;
    }
    var pixel = map.getEventPixel(evt.originalEvent);
    displayFeatureInfo(pixel);
  });
  jQuery('#propostaImagem').click(openModal);
});
