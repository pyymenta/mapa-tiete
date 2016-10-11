//JSON com Informações de cada categoria
const information = {
  '_1A': {
  'titulo': 'Destamponamento de córrego ',
  'texto': '1A. Destamponar córregos limpos é uma solução adotada para reaproximar as pessoas dos cursos d´água e melhorar a drenagem superficial urbana. Além disso, a abertura promove o contato dos corpos d´água com a atmosfera, colaborando para o ressurgimento da vida aquática e ciliar.'
  },
  '_1B': {
  'titulo': 'Qualificação de córregos abertos',
  'texto': '1B. Qualificar córregos abertos é uma solução adotada para reaproximar as pessoas dos cursos d´água, aproveitando as estruturas existentes para implantação de percursos leves para pedestres e ciclistas, sem comprometer a capacidade de vazão atual.'
  },
  '_2A': {
  'titulo': 'Implantar canteiros drenantes',
  // 'texto': '2A. Implantar cordões de absorção das águas pluviais em vias públicas que antecedem áreas de alagamento é uma forma de conter e reduzir o escoamento superficial, ao mesmo tempo em que se qualifica as vias públicas com jardins lineares.'
  'texto': '2A. Implantar canteiros drenantes em vias públicas é uma forma de reduzir o escoamento superficial das águas pluviais em direção às áreas de alagamento, ao mesmo tempo em que se qualifica as vias públicas com jardins lineares.'
  },
  '_2B': {
  'titulo': 'Implantar pisos drenantes',
  // 'texto': '3A. Implantar praças permeáveis capazes de absorver grandes volumes de água durante as chuvas mais intensas contribui para a redução de enchentes e alagamentos, ao passo em que o plantio de espécies adaptadas às cheias promove áreas ajardinadas de contemplação.'
  'texto': '2B. Implantar pisos drenantes em vias públicas estreitas é uma forma de reduzir o escoamento superficial das águas pluviais em direção às áreas de alagamento sem diminuir o espaço dos passeios públicos.'
  },
  '_3A': {
  'titulo': 'Praças secas rebaixadas',
  'texto': '3A. Implantar praças permeáveis capazes de absorver grandes volumes de água durante as chuvas mais intensas contribui para a redução de enchentes e alagamentos, ao passo em que o plantio de espécies adaptadas às cheias promove áreas ajardinadas de contemplação.'
  },
  '_3B': {
  'titulo': 'Praças de absorção',
  'texto': '3B. Implantar praças de acumulação com capacidade de receber, reter e retardar a descida de grandes volumes d´água durante as chuvas mais intensas contribui para a redução de enchentes e alagamentos e promove espaços públicos para atividades de esporte e lazer.'
  },
  '_3C': {
  'titulo': 'Alças de pontes',
  'texto': '3C. Implantar praças com capacidade de absorção das águas pluviais em alças de pontes localizadas sobre fozes de tributários do Rio Tietê contribui para a redução de enchentes e alagamentos, ao passo em que a qualificação destas áreas promove melhoria na acessibilidade aos passeios das pontes existentes.'
  },
  '_4A': {
  'titulo': 'Parques lineares',
  'texto': '4A. A recuperação ambiental das margens do sistema hídrico, além de reaproximar as pessoas dos córregos, colabora para a infiltração e armazenamento da água no lençol freático e para o surgimento da mata ciliar, importante componente para a produção de alimentos para a fauna aquática.'
  },
  '_4B': {
  'titulo': 'Novos parques',
  'texto': '4B. Implantar novos parques aumenta a oferta de áreas de lazer, convívio e contemplação no Arco Tietê, além de colaborar para a absorção da irradiação solar, amenização das ilhas de calor e aumento da umidade relativa do ar.'
  },
  '_5A': {
  'titulo': 'Requalificação de praças existentes',
  'texto': '5A. Requalificar praças existentes aumentando sua arborização e promovendo novos espaços de lazer qualificados é uma estratégia para reaproximar a população local dos espaços públicos hoje subutilizados.'
  },
  '_5B': {
  'titulo': 'Praças oriundas de destinação obrigatória',
  'texto': '5B. Implantar praças oriundas do parcelamento de grandes lotes é uma estratégia de garantia para sua integração à rede de espaços públicos e equipamentos projetada para todo o Arco Tietê, evitando espaços verdes isolados e de difícil acesso.'
  },
  '_5C': {
  'titulo': 'Praças sobre túneis',
  'texto': '5C. Implantar praças sobre túneis, com novas vias locais perimetrais, é uma estratégia para que os espaços hoje ocupados pelas linhas de alta tensão (futuramente enterradas) sejam utilizados pela população, evitando a ruptura dos espaços públicos e criando novas frentes urbanas.'
  },
  '_5D': {
  'titulo': 'Praças sob viadutos',
  'texto': '5D. Implantar praças sob viadutos, com novas vias locais perimetrais, é uma estratégia para que os baixios de viadutos não se tornem fundos subutilizados da cidade, mas sim novos espaços públicos com potencial de gerar novas frentes urbanas.'
  },
  '_5E': {
  'titulo': 'Novas praças',
  'texto': '5E. Implantar novas praças aumenta a oferta de áreas de lazer, convívio e contemplação aos moradores dos bairros, além de colaborar para a absorção da irradiação solar, amenização das ilhas de calor e aumento da umidade relativa do ar.'
  },
  '_6A': {
  'titulo': 'Alamedas',
  'texto': '6A. A implantação de alamedas proporciona percursos sombreados aos pedestres e ciclistas e colabora para a formação de um sistema ambiental em rede, conectando áreas verdes, equipamentos e estações do trem e do metrô.'
  },
  '_6B': {
  'titulo': 'Bulevares',
  'texto': '6B. A implantação de bulevares ao longo de vias públicas que priorizam o transporte público colabora para o desenvolvimento urbano ao longo dos eixos de transporte e para a formação de um sistema ambiental em rede.'
  },
  '_7A': {
  'titulo': 'Abertura de novo viário',
  'texto': '7A. A abertura de novas vias públicas que rompem com as grandes quadras, aumenta a interligação entre áreas do Arco Tietê que hoje se encontram isoladas e possibilita a emergência de novas frentes urbanas.'
  },
  '_7B': {
  'titulo': 'Alargamento de viário existente',
  'texto': '7B. Alargar vias públicas atualmente subdimensionadas assegura que os fluxos de pedestres e ciclistas possam ser garantidos ao lado de automóveis e, eventualmente, ônibus, promovendo diversidade modal às áreas de desenvolvimento urbano.'
  },
  '_7C': {
  'titulo': 'Requalificação de viário existente',
  'texto': '7C. A requalificação do sistema viário é uma estratégia utilizada em vias públicas que devem receber reformas tanto em seus passeios quanto em seu leito carroçável, sem desapropriação, a fim de qualificar a circulação de todos os modos de transporte.'
  },
  '_8A': {
  'titulo': 'Ampliação e melhoria de passeios existentes',
  'texto': '8A. Requalificar os passeios por meio do redesenho de sua geometria, seja ampliando-o em detrimento do leito carroçável, seja diminuindo curvaturas para reduzir a velocidade dos automóveis, incentiva a locomoção de pedestres e ciclistas pela cidade.'
  },
  '_8B': {
  'titulo': 'Acesso - rampas e escadarias',
  'texto': '8B. Implantar novos acessos verticais por meio de rampas e escadarias associadas a passeios e espaços públicos é uma estratégia para promover acessibilidade às áreas com grandes desníveis no tecido urbano.'
  },
  '_9A': {
  'titulo': 'Ciclopassarelas sobre ferrovia',
  'texto': '9A. Implantar novas travessias sobre a ferrovia, associadas a equipamentos, espaços públicos e estações de trem, que priorizem deslocamentos a pé e de bicicleta, garante novas conexões entre bairros e a melhoria no acesso ao trabalho, aos serviços e aos equipamentos públicos.'
  },
  '_9B': {
  'titulo': 'Ciclopassarela sob ferrovia',
  'texto': '9B. Implantar novas travessias sob a ferrovia associadas a equipamentos, espaços públicos e estações de trem, que priorizem deslocamentos a pé e de bicicleta, garante novas conexões entre bairros e a melhoria no acesso ao trabalho, aos serviços e aos equipamentos públicos.'
  },
  '_9C': {
  'titulo': 'Ciclopassarela sobre rios ou córregos',
  'texto': '9C. Implantar novas travessias sobre o Rio Tietê, associadas a equipamentos ou espaços públicos, que priorizem deslocamentos a pé e de bicicleta, garante maior conexão entre as margens do rio, promovendo novos eixos de integração do tecido urbano. '
  },
  '_10A': {
  'titulo': 'Equipamentos em terrenos públicos subutilizados',
  'texto': '10A. O enterramento das linhas de alta tensão é uma solução adotada para a implantação de novas vias públicas sem a necessidade de desapropriação de moradores.'
  },
  '_10B': {
  'titulo': 'Equipamentos em galpões reformados',
  'texto': '10B. A implantação de infovias é uma estratégia adotada para incentivar usos produtivos ao longo dos eixos estratégicos.'
  },
  '_10C': {
  'titulo': 'Equipamentos em áreas indicadas de parcelamento e grandes lotes',
  'texto': '10C. A implantação de novos equipamentos, além de suprir as necessidades da população, qualifica a vida nos bairros;'
  },
  '_11A': {
  // 'titulo': 'Infraestrutura de TI e incentivo ao setor de negócios',  
  'titulo': 'Equipamentos em terrenos públicos subutilizados',
  'texto': '11A. Manter e potencializar unidades produtivas, incentivar a implantação de novas atividades produtivas, desenvolver o setor logístico, proteger territórios produtivos da incorporação residencial vertical e modernizar e integrar o entorno das unidades de atacado/varejo;'
  },
  '_11B': {
  // 'titulo': 'Permanência de usos produtivos',
  'titulo': 'Equipamentos em galpões existentes de valor histórico',
  'texto': '11B. Manter e potencializar unidades produtivas, incentivar a implantação de novas atividades produtivas, desenvolver o setor logístico, proteger territórios produtivos da incorporação residencial vertical e modernizar e integrar o entorno das unidades de atacado/varejo;'
  },
  '_11C': {
  // 'titulo': 'Incentivo ao setor logístico',
  'titulo': 'Novos Equipamentos',
  'texto': '11C. Manter e potencializar unidades produtivas, incentivar a implantação de novas atividades produtivas, desenvolver o setor logístico, proteger territórios produtivos da incorporação residencial vertical e modernizar e integrar o entorno das unidades de atacado/varejo;'
  },
  '_11D': {
  // 'titulo': 'Incentivo ao parcelamento de grandes centros de compras com manutenção de uso',
  'titulo': 'Equipamentos oriundos de destinação de grandes lotes',
  'texto': '11D. Manter e potencializar unidades produtivas, incentivar a implantação de novas atividades produtivas, desenvolver o setor logístico, proteger territórios produtivos da incorporação residencial vertical e modernizar e integrar o entorno das unidades de atacado/varejo;'
  },
  '_12A': {
  'titulo': 'Fruição pública',
  'texto': '12A. Implantar Conjuntos de Habitação Social de dimensões menores e mais espalhados pelo território, contemplando fachadas ativas, faixas de fruição pública, mix de rendas e espaços públicos de qualidade, procurando ao máximo relacionar os conjuntos com o espaço urbano à sua volta;'
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
const oldlegenda = '<div id="g-legenda02-box" class="ai2html"><style type="text/css" media="screen,print">.g-artboard{margin:0 auto;}</style><div id="g-legenda02-Prancheta_1" class="g-artboard g-artboard-v3 " data-min-width="945"><style type="text/css" media="screen,print">#g-legenda02-Prancheta_1{position:relative;overflow:hidden;width:945px;}.g-aiAbs{position:absolute;}.g-aiImg{display:block; width:100% !important;}#g-legenda02-Prancheta_1 p{font-family:nyt-franklin,arial,helvetica,sans-serif; font-size:13px; line-height:18px; margin:0;}#g-legenda02-Prancheta_1 .g-aiPstyle0{font-family:arial,helvetica,sans-serif; line-height:16px; font-weight:bold; text-align:right; color:#000000;}#g-legenda02-Prancheta_1 .g-aiPstyle1{font-family:arial,helvetica,sans-serif; font-size:11px; line-height:13px; font-weight:bold; color:#000000;}#g-legenda02-Prancheta_1 .g-aiPstyle2{font-family:arial,helvetica,sans-serif; font-size:11px; line-height:13px; color:#000000;}#g-legenda02-Prancheta_1 .g-aiPstyle3{font-family:arial,helvetica,sans-serif; line-height:16px; font-weight:bold; text-align:right; letter-spacing:0.02833333333333em; color:#000000;}#g-legenda02-Prancheta_1 .g-aiPstyle4{font-family:arial,helvetica,sans-serif; font-size:11px; line-height:15px; color:#000000;}.g-aiPtransformed p{white-space: nowrap;}</style> <div id="g-legenda02-Prancheta_1-graphic"> <img id="g-ai0-0" class="g-aiImg" src="../wp-content/themes/gestaourbana-1.2/uploads/legenda02-Prancheta_1.png"> <div id="g-ai0-1" class="g-Camada_1 g-aiAbs" style="top:0.1596%;right:77.4603%;"> <p class="g-aiPstyle0">REDE HÍDRICA</p></div><div id="g-ai0-2" class="g-Camada_1 g-aiAbs" style="top:0.1596%;left:25.8201%;"> <p class="g-aiPstyle1">1.</p></div><div id="g-ai0-3" class="g-Camada_1 g-aiAbs" style="top:0.1596%;left:26.8098%;"> <p class="g-aiPstyle1"> </p></div><div id="g-ai0-4" class="g-Camada_1 g-aiAbs" style="top:0.1596%;left:29.7354%;"> <p class="g-aiPstyle1">Recuperação de Córregos</p></div><div id="g-ai0-5" class="g-Camada_1 g-aiAbs" style="top:0.1596%;left:51.703%;"> <p class="g-aiPstyle1">2.</p></div><div id="g-ai0-6" class="g-Camada_1 g-aiAbs" style="top:0.1596%;left:55.6184%;"> <p class="g-aiPstyle1">Eixos drenantes</p></div><div id="g-ai0-7" class="g-Camada_1 g-aiAbs" style="top:0.1596%;left:81.3757%;"> <p class="g-aiPstyle1">Áreas de absorção</p></div><div id="g-ai0-8" class="g-Camada_1 g-aiAbs" style="top:0.3191%;left:77.4603%;"><p class="g-aiPstyle1">3.</p></div><div id="g-ai0-9" class="g-Camada_1 g-aiAbs" style="top:0.3191%;left:78.45%;"> <p class="g-aiPstyle1"> </p></div><div id="g-ai0-10" class="g-Camada_1 g-aiAbs" style="top:0.4787%;left:52.6927%;"> <p class="g-aiPstyle1"> </p></div><div id="g-ai0-11" class="g-Camada_1 g-aiAbs" style="top:2.5532%;left:55.6184%;"> <p class="g-aiPstyle2">a. Pisos drenantes</p></div><div id="g-ai0-12" class="g-Camada_1 g-aiAbs" style="top:3.0319%;left:29.7354%;"> <p class="g-aiPstyle2">a. Destamponamento</p></div><div id="g-ai0-13" class="g-Camada_1 g-aiAbs" style="top:3.0319%;left:81.3757%;"> <p class="g-aiPstyle2">a. Praças secas rebaixadas</p></div><div id="g-ai0-14" class="g-Camada_1 g-aiAbs" style="top:4.7872%;left:55.6184%;"> <p class="g-aiPstyle2">b. Canteiros drenantes</p></div><div id="g-ai0-15" class="g-Camada_1 g-aiAbs" style="top:5.4255%;left:81.3757%;"> <p class="g-aiPstyle2">b. Praças de absorção</p></div><div id="g-ai0-16" class="g-Camada_1 g-aiAbs" style="top:7.0213%;left:29.7354%;"> <p class="g-aiPstyle2">b. Qualificação de córregos abertos</p></div><div id="g-ai0-17" class="g-Camada_1 g-aiAbs" style="top:7.8191%;left:81.3757%;"> <p class="g-aiPstyle2">c. Alças de pontes</p></div><div id="g-ai0-18" class="g-Camada_1 g-aiAbs" style="top:16.4362%;right:77.4603%;"> <p class="g-aiPstyle0">REDE DE ESPAÇO PÚBLICO</p></div><div id="g-ai0-19" class="g-Camada_1 g-aiAbs" style="top:16.4362%;left:25.8201%;"> <p class="g-aiPstyle1">4.</p></div><div id="g-ai0-20" class="g-Camada_1 g-aiAbs" style="top:16.4362%;left:26.8098%;"> <p class="g-aiPstyle1"> </p></div><div id="g-ai0-21" class="g-Camada_1 g-aiAbs" style="top:16.4362%;left:29.7354%;"> <p class="g-aiPstyle1">Parques</p></div><div id="g-ai0-22" class="g-Camada_1 g-aiAbs" style="top:16.4362%;left:51.703%;"> <p class="g-aiPstyle1">5.</p></div><div id="g-ai0-23" class="g-Camada_1 g-aiAbs" style="top:16.4362%;left:52.6926%;"> <p class="g-aiPstyle1"> </p></div><div id="g-ai0-24" class="g-Camada_1 g-aiAbs" style="top:16.4362%;left:55.6184%;"> <p class="g-aiPstyle1">Praças</p></div><div id="g-ai0-25" class="g-Camada_1 g-aiAbs" style="top:16.4362%;left:77.5041%;"> <p class="g-aiPstyle1">6.</p></div><div id="g-ai0-26" class="g-Camada_1 g-aiAbs" style="top:16.4362%;left:78.4939%;"> <p class="g-aiPstyle1"> </p></div><div id="g-ai0-27" class="g-Camada_1 g-aiAbs" style="top:16.4362%;left:81.4195%;"> <p class="g-aiPstyle1">Eixos Ambientais </p></div><div id="g-ai0-28" class="g-Camada_1 g-aiAbs" style="top:18.8298%;left:55.6184%;"> <p class="g-aiPstyle2">a. Requalificação de prtaças</p></div><div id="g-ai0-29" class="g-Camada_1 g-aiAbs" style="top:19.3085%;left:29.7354%;"> <p class="g-aiPstyle2">a. Parques lineares</p></div><div id="g-ai0-30" class="g-Camada_1 g-aiAbs" style="top:19.3085%;left:81.4195%;"> <p class="g-aiPstyle2">a. Alamedas </p></div><div id="g-ai0-31" class="g-Camada_1 g-aiAbs" style="top:20.7447%;left:55.6184%;"> <p class="g-aiPstyle2">existentes</p></div><div id="g-ai0-32" class="g-Camada_1 g-aiAbs" style="top:21.7021%;left:29.7354%;"> <p class="g-aiPstyle2">b. Outros parques</p></div><div id="g-ai0-33" class="g-Camada_1 g-aiAbs" style="top:23.1383%;left:55.6184%;"> <p class="g-aiPstyle2">b. Praças oriundas de destinação </p></div><div id="g-ai0-34" class="g-Camada_1 g-aiAbs" style="top:23.2979%;left:81.4195%;"> <p class="g-aiPstyle2">b. Bulevares</p></div><div id="g-ai0-35" class="g-Camada_1 g-aiAbs" style="top:25.0532%;left:55.6184%;"> <p class="g-aiPstyle2">obrigatória</p></div><div id="g-ai0-36" class="g-Camada_1 g-aiAbs" style="top:27.2872%;left:55.6184%;"> <p class="g-aiPstyle2">c. Praças sobre túneis</p></div><div id="g-ai0-37" class="g-Camada_1 g-aiAbs" style="top:29.6808%;left:55.6184%;"> <p class="g-aiPstyle2">d. Praças sob viadutos</p></div><div id="g-ai0-38" class="g-Camada_1 g-aiAbs" style="top:32.0745%;left:55.6184%;"> <p class="g-aiPstyle2">e. Outras praças</p></div><div id="g-ai0-39" class="g-Camada_1 g-aiAbs" style="top:40.6915%;right:77.4603%;"> <p class="g-aiPstyle0">REDE DE MOBILIDADE</p></div><div id="g-ai0-40" class="g-Camada_1 g-aiAbs" style="top:40.6915%;left:25.8201%;"> <p class="g-aiPstyle1">7.</p></div><div id="g-ai0-41" class="g-Camada_1 g-aiAbs" style="top:40.6915%;left:26.8098%;"> <p class="g-aiPstyle1"> </p></div><div id="g-ai0-42" class="g-Camada_1 g-aiAbs" style="top:40.6915%;left:29.7354%;"> <p class="g-aiPstyle1">Sistema Viário</p></div><div id="g-ai0-43" class="g-Camada_1 g-aiAbs" style="top:40.6915%;left:51.703%;"> <p class="g-aiPstyle1">8.</p></div><div id="g-ai0-44" class="g-Camada_1 g-aiAbs" style="top:40.6915%;left:52.6926%;"> <p class="g-aiPstyle1"> </p></div><div id="g-ai0-45" class="g-Camada_1 g-aiAbs" style="top:40.6915%;left:55.6184%;"> <p class="g-aiPstyle1">Passeios</p></div><div id="g-ai0-46" class="g-Camada_1 g-aiAbs" style="top:40.6915%;left:77.4603%;"> <p class="g-aiPstyle1">9.</p></div><div id="g-ai0-47" class="g-Camada_1 g-aiAbs" style="top:40.6915%;left:78.4499%;"> <p class="g-aiPstyle1"> </p></div><div id="g-ai0-48" class="g-Camada_1 g-aiAbs" style="top:40.6915%;left:81.3757%;"> <p class="g-aiPstyle1">Transposições </p></div><div id="g-ai0-49" class="g-Camada_1 g-aiAbs" style="top:43.5638%;left:81.3757%;"> <p class="g-aiPstyle2">a. Ciclopassarelas sobre ferrovia</p></div><div id="g-ai0-50" class="g-Camada_1 g-aiAbs" style="top:43.5638%;left:29.7354%;"> <p class="g-aiPstyle2">a. Abertura de novo viário</p></div><div id="g-ai0-51" class="g-Camada_1 g-aiAbs" style="top:43.5638%;left:55.6184%;"> <p class="g-aiPstyle2">a. Ampliação e memória de </p></div><div id="g-ai0-52" class="g-Camada_1 g-aiAbs" style="top:45.4787%;left:55.6184%;"> <p class="g-aiPstyle2">passeios existentes</p></div><div id="g-ai0-53" class="g-Camada_1 g-aiAbs" style="top:45.9574%;left:81.3757%;"> <p class="g-aiPstyle2">b. Ciclopassarelas sob ferrovia</p></div><div id="g-ai0-54" class="g-Camada_1 g-aiAbs" style="top:45.9574%;left:29.7354%;"> <p class="g-aiPstyle2">b. Alargamento de viário existente</p></div><div id="g-ai0-55" class="g-Camada_1 g-aiAbs" style="top:47.8723%;left:55.6184%;"> <p class="g-aiPstyle2">b. Acessos – rampas e escadarias</p></div><div id="g-ai0-56" class="g-Camada_1 g-aiAbs" style="top:48.1915%;left:81.3757%;"> <p class="g-aiPstyle2">c. Ciclopassarelas sobre rios ou </p></div><div id="g-ai0-57" class="g-Camada_1 g-aiAbs" style="top:49.9468%;left:29.7354%;"> <p class="g-aiPstyle2">c. Requalificação de viário existente</p></div><div id="g-ai0-58" class="g-Camada_1 g-aiAbs" style="top:50.1064%;left:81.3757%;"> <p class="g-aiPstyle2">córregos</p></div><div id="g-ai0-59" class="g-Camada_1 g-aiAbs" style="top:58.2447%;right:77.4603%;"> <p class="g-aiPstyle3">INFRAESTRUTURA</p></div><div id="g-ai0-60" class="g-Camada_1 g-aiAbs" style="top:58.2447%;left:25.8201%;"> <p class="g-aiPstyle1">10.</p></div><div id="g-ai0-61" class="g-Camada_1 g-aiAbs" style="top:58.2447%;left:27.457%;"> <p class="g-aiPstyle1"> </p></div><div id="g-ai0-62" class="g-Camada_1 g-aiAbs" style="top:58.2447%;left:29.7354%;"> <p class="g-aiPstyle1">Espaço Produtivo</p></div><div id="g-ai0-63" class="g-Camada_1 g-aiAbs" style="top:58.2447%;left:51.703%;"> <p class="g-aiPstyle1">11.</p></div><div id="g-ai0-64" class="g-Camada_1 g-aiAbs" style="top:58.2447%;left:53.3399%;"> <p class="g-aiPstyle1"> </p></div><div id="g-ai0-65" class="g-Camada_1 g-aiAbs" style="top:58.2447%;left:55.6184%;"> <p class="g-aiPstyle1">Equipamentos Públicos</p></div><div id="g-ai0-66" class="g-Camada_1 g-aiAbs" style="top:58.2447%;left:77.4603%;"> <p class="g-aiPstyle1">12.</p></div><div id="g-ai0-67" class="g-Camada_1 g-aiAbs" style="top:58.2447%;left:79.0972%;"> <p class="g-aiPstyle1"> </p></div><div id="g-ai0-68" class="g-Camada_1 g-aiAbs" style="top:58.2447%;left:81.3757%;"> <p class="g-aiPstyle1">Produção Habitacional</p></div><div id="g-ai0-69" class="g-Camada_1 g-aiAbs" style="top:60.7978%;left:81.4195%;"> <p class="g-aiPstyle4">a. Fruição pública</p><p class="g-aiPstyle4">b. Pequenas praças como espaços </p><p class="g-aiPstyle4">de socialização</p><p class="g-aiPstyle4">c. Divisões condominiais com </p><p class="g-aiPstyle4">poucas unidades habitacionais e </p><p class="g-aiPstyle4">divididos por faixa de atendimento</p><p class="g-aiPstyle4">d. Fachada ativa</p><p class="g-aiPstyle4">e. Demarcação de áreas para </p><p class="g-aiPstyle4">habitação em terrenos menores, </p><p class="g-aiPstyle4">distribuídos pelo território</p><p class="g-aiPstyle4">f. Taxas de ocupação mais altas </p><p class="g-aiPstyle4">em áreas próximas às áreas verdes</p><p class="g-aiPstyle4">g. Maiores áreas condominiais </p><p class="g-aiPstyle4">verdes em regiões com pouca </p><p class="g-aiPstyle4">oferta de áreas verdes</p></div><div id="g-ai0-70" class="g-Camada_1 g-aiAbs" style="top:61.117%;left:29.7354%;"> <p class="g-aiPstyle2">a. Aterramento de linhão</p></div><div id="g-ai0-71" class="g-Camada_1 g-aiAbs" style="top:61.117%;left:55.6184%;"> <p class="g-aiPstyle2">a. Equipamentos em terrenos</p></div><div id="g-ai0-72" class="g-Camada_1 g-aiAbs" style="top:63.5106%;left:29.7354%;"> <p class="g-aiPstyle2">b. Infovia</p></div><div id="g-ai0-73" class="g-Camada_1 g-aiAbs" style="top:63.5106%;left:55.6184%;"> <p class="g-aiPstyle2">públicos subutilizado</p></div><div id="g-ai0-74" class="g-Camada_1 g-aiAbs" style="top:65.9042%;left:55.6184%;"> <p class="g-aiPstyle2">b. Equipamentos em galpões </p></div><div id="g-ai0-75" class="g-Camada_1 g-aiAbs" style="top:68.2978%;left:55.6184%;"> <p class="g-aiPstyle2">existentes de valor histórico</p></div><div id="g-ai0-76" class="g-Camada_1 g-aiAbs" style="top:70.6915%;left:55.6184%;"> <p class="g-aiPstyle2">c. Equipamentos em áreas </p></div><div id="g-ai0-77" class="g-Camada_1 g-aiAbs" style="top:73.0851%;left:55.6184%;"> <p class="g-aiPstyle2">indicadas de parcelamento </p></div><div id="g-ai0-78" class="g-Camada_1 g-aiAbs" style="top:75.4787%;left:55.6184%;"> <p class="g-aiPstyle2">de grandes lotes </p></div></div></div></div>';
const legenda = "<div id='g-legenda02-box' class='ai2html'><style type='text/css' media='screen,print'>.g-artboard{margin:0 auto;}</style><div id='g-legenda02-Prancheta_1' class='g-artboard g-artboard-v3 ' data-min-width='945'><style type='text/css' media='screen,print'>#g-legenda02-Prancheta_1{position:relative;overflow:hidden;width:945px;}.g-aiAbs{position:absolute;}.g-aiImg{display:block;width:100% !important;}#g-legenda02-Prancheta_1 p{font-family:nyt-franklin,arial,helvetica,sans-serif;font-size:13px;line-height:18px;margin:0;}#g-legenda02-Prancheta_1 .g-aiPstyle0{font-family:arial,helvetica,sans-serif;line-height:16px;font-weight:bold;text-align:right;color:#000000;}#g-legenda02-Prancheta_1 .g-aiPstyle1{font-family:arial,helvetica,sans-serif;font-size:11px;line-height:13px;font-weight:bold;color:#000000;}#g-legenda02-Prancheta_1 .g-aiPstyle2{font-family:arial,helvetica,sans-serif;font-size:11px;line-height:13px;color:#000000;}#g-legenda02-Prancheta_1 .g-aiPstyle3{font-family:arial,helvetica,sans-serif;line-height:16px;font-weight:bold;text-align:right;letter-spacing:0.02833333333333em;color:#000000;}#g-legenda02-Prancheta_1 .g-aiPstyle4{font-family:arial,helvetica,sans-serif;font-size:11px;line-height:15px;color:#000000;}.g-aiPtransformed p{white-space: nowrap;}</style><div id='g-legenda02-Prancheta_1-graphic'><img id='g-ai0-0'class='g-aiImg'src='../wp-content/themes/gestaourbana-1.2/uploads/legenda02-Prancheta_1.png'/><div id='g-ai0-1' class='g-Camada_1 g-aiAbs' style='top:0.1596%;right:77.4602%;'><p class='g-aiPstyle0'>REDE HÍDRICA</p></div><div id='g-ai0-2' class='g-Camada_1 g-aiAbs' style='top:0.1596%;left:51.703%;'><p class='g-aiPstyle1'>2.</p></div><div id='g-ai0-3' class='g-Camada_1 g-aiAbs' style='top:0.1596%;left:55.6184%;'><p class='g-aiPstyle1'>Eixos drenantes</p></div><div id='g-ai0-4' class='g-Camada_1 g-aiAbs' style='top:0.1596%;left:81.3757%;'><p class='g-aiPstyle1'>Áreas de absorção</p></div><div id='g-ai0-5' class='g-Camada_1 g-aiAbs' style='top:0.1596%;left:25.8201%;'><p class='g-aiPstyle1'>1.</p></div><div id='g-ai0-6' class='g-Camada_1 g-aiAbs' style='top:0.1596%;left:26.8098%;'><p class='g-aiPstyle1'> </p></div><div id='g-ai0-7' class='g-Camada_1 g-aiAbs' style='top:0.1596%;left:29.7354%;'><p class='g-aiPstyle1'>Recuperação de Córregos</p></div><div id='g-ai0-8' class='g-Camada_1 g-aiAbs' style='top:0.3191%;left:77.4603%;'><p class='g-aiPstyle1'>3.</p></div><div id='g-ai0-9' class='g-Camada_1 g-aiAbs' style='top:0.3191%;left:78.45%;'><p class='g-aiPstyle1'> </p></div><div id='g-ai0-10' class='g-Camada_1 g-aiAbs' style='top:0.4787%;left:52.6927%;'><p class='g-aiPstyle1'> </p></div><div id='g-ai0-11' class='g-Camada_1 g-aiAbs' style='top:2.5532%;left:55.6184%;'><p class='g-aiPstyle2'>a. Pisos drenantes</p></div><div id='g-ai0-12' class='g-Camada_1 g-aiAbs' style='top:3.0319%;left:29.7354%;'><p class='g-aiPstyle2'>a. Destamponamento</p></div><div id='g-ai0-13' class='g-Camada_1 g-aiAbs' style='top:3.0319%;left:81.3757%;'><p class='g-aiPstyle2'>a. Praças secas rebaixadas</p></div><div id='g-ai0-14' class='g-Camada_1 g-aiAbs' style='top:4.7872%;left:55.6184%;'><p class='g-aiPstyle2'>b. Canteiros drenantes</p></div><div id='g-ai0-15' class='g-Camada_1 g-aiAbs' style='top:5.4255%;left:81.3757%;'><p class='g-aiPstyle2'>b. Praças de absorção</p></div><div id='g-ai0-16' class='g-Camada_1 g-aiAbs' style='top:7.0213%;left:29.7354%;'><p class='g-aiPstyle2'>b. Qualificação de córregos abertos</p></div><div id='g-ai0-17' class='g-Camada_1 g-aiAbs' style='top:7.8191%;left:81.3757%;'><p class='g-aiPstyle2'>c. Alças de pontes</p></div><div id='g-ai0-18' class='g-Camada_1 g-aiAbs' style='top:16.4362%;right:77.4602%;'><p class='g-aiPstyle0'>REDE DE ESPAÇO PÚBLICO</p></div><div id='g-ai0-19' class='g-Camada_1 g-aiAbs' style='top:16.4362%;left:25.8201%;'><p class='g-aiPstyle1'>4.</p></div><div id='g-ai0-20' class='g-Camada_1 g-aiAbs' style='top:16.4362%;left:26.8098%;'><p class='g-aiPstyle1'> </p></div><div id='g-ai0-21' class='g-Camada_1 g-aiAbs' style='top:16.4362%;left:29.7354%;'><p class='g-aiPstyle1'>Parques</p></div><div id='g-ai0-22' class='g-Camada_1 g-aiAbs' style='top:16.4362%;left:51.703%;'><p class='g-aiPstyle1'>5.</p></div><div id='g-ai0-23' class='g-Camada_1 g-aiAbs' style='top:16.4362%;left:52.6926%;'><p class='g-aiPstyle1'> </p></div><div id='g-ai0-24' class='g-Camada_1 g-aiAbs' style='top:16.4362%;left:55.6184%;'><p class='g-aiPstyle1'>Praças</p></div><div id='g-ai0-25' class='g-Camada_1 g-aiAbs' style='top:16.4362%;left:77.4795%;'><p class='g-aiPstyle1'>6.</p></div><div id='g-ai0-26' class='g-Camada_1 g-aiAbs' style='top:16.4362%;left:78.4693%;'><p class='g-aiPstyle1'> </p></div><div id='g-ai0-27' class='g-Camada_1 g-aiAbs' style='top:16.4362%;left:78.4939%;'><p class='g-aiPstyle1'> </p></div><div id='g-ai0-28' class='g-Camada_1 g-aiAbs' style='top:16.4362%;left:81.3949%;'><p class='g-aiPstyle1'>Eixos Ambientais </p></div><div id='g-ai0-29' class='g-Camada_1 g-aiAbs' style='top:18.8298%;left:55.6184%;'><p class='g-aiPstyle2'>a. Requalificação de prtaças</p></div><div id='g-ai0-30' class='g-Camada_1 g-aiAbs' style='top:19.3085%;left:29.7354%;'><p class='g-aiPstyle2'>a. Parques lineares</p></div><div id='g-ai0-31' class='g-Camada_1 g-aiAbs' style='top:19.3085%;left:81.3949%;'><p class='g-aiPstyle2'>a. Alamedas </p></div><div id='g-ai0-32' class='g-Camada_1 g-aiAbs' style='top:20.7447%;left:55.6184%;'><p class='g-aiPstyle2'>existentes</p></div><div id='g-ai0-33' class='g-Camada_1 g-aiAbs' style='top:21.7021%;left:29.7354%;'><p class='g-aiPstyle2'>b. Outros parques</p></div><div id='g-ai0-34' class='g-Camada_1 g-aiAbs' style='top:23.1383%;left:55.6184%;'><p class='g-aiPstyle2'>b. Praças oriundas de destinação </p></div><div id='g-ai0-35' class='g-Camada_1 g-aiAbs' style='top:23.2979%;left:81.3949%;'><p class='g-aiPstyle2'>b. Bulevares</p></div><div id='g-ai0-36' class='g-Camada_1 g-aiAbs' style='top:25.0532%;left:55.6184%;'><p class='g-aiPstyle2'>obrigatória</p></div><div id='g-ai0-37' class='g-Camada_1 g-aiAbs' style='top:27.2872%;left:55.6184%;'><p class='g-aiPstyle2'>c. Praças sobre túneis</p></div><div id='g-ai0-38' class='g-Camada_1 g-aiAbs' style='top:29.6808%;left:55.6184%;'><p class='g-aiPstyle2'>d. Praças sob viadutos</p></div><div id='g-ai0-39' class='g-Camada_1 g-aiAbs' style='top:32.0745%;left:55.6184%;'><p class='g-aiPstyle2'>e. Outras praças</p></div><div id='g-ai0-40' class='g-Camada_1 g-aiAbs' style='top:40.6915%;right:77.4602%;'><p class='g-aiPstyle0'>REDE DE MOBILIDADE</p></div><div id='g-ai0-41' class='g-Camada_1 g-aiAbs' style='top:40.6915%;left:77.4603%;'><p class='g-aiPstyle1'>9.</p></div><div id='g-ai0-42' class='g-Camada_1 g-aiAbs' style='top:40.6915%;left:78.4499%;'><p class='g-aiPstyle1'> </p></div><div id='g-ai0-43' class='g-Camada_1 g-aiAbs' style='top:40.6915%;left:81.3757%;'><p class='g-aiPstyle1'>Transposições </p></div><div id='g-ai0-44' class='g-Camada_1 g-aiAbs' style='top:40.6915%;left:25.8201%;'><p class='g-aiPstyle1'>7.</p></div><div id='g-ai0-45' class='g-Camada_1 g-aiAbs' style='top:40.6915%;left:26.8098%;'><p class='g-aiPstyle1'> </p></div><div id='g-ai0-46' class='g-Camada_1 g-aiAbs' style='top:40.6915%;left:29.7354%;'><p class='g-aiPstyle1'>Sistema Viário</p></div><div id='g-ai0-47' class='g-Camada_1 g-aiAbs' style='top:40.6915%;left:51.703%;'><p class='g-aiPstyle1'>8.</p></div><div id='g-ai0-48' class='g-Camada_1 g-aiAbs' style='top:40.6915%;left:52.6926%;'><p class='g-aiPstyle1'> </p></div><div id='g-ai0-49' class='g-Camada_1 g-aiAbs' style='top:40.6915%;left:55.6184%;'><p class='g-aiPstyle1'>Passeios</p></div><div id='g-ai0-50' class='g-Camada_1 g-aiAbs' style='top:43.5638%;left:81.3757%;'><p class='g-aiPstyle2'>a. Ciclopassarelas sobre ferrovia</p></div><div id='g-ai0-51' class='g-Camada_1 g-aiAbs' style='top:43.5638%;left:29.7354%;'><p class='g-aiPstyle2'>a. Abertura de novo viário</p></div><div id='g-ai0-52' class='g-Camada_1 g-aiAbs' style='top:43.5638%;left:55.6184%;'><p class='g-aiPstyle2'>a. Ampliação e memória de </p></div><div id='g-ai0-53' class='g-Camada_1 g-aiAbs' style='top:45.4787%;left:55.6184%;'><p class='g-aiPstyle2'>passeios existentes</p></div><div id='g-ai0-54' class='g-Camada_1 g-aiAbs' style='top:45.9574%;left:81.3757%;'><p class='g-aiPstyle2'>b. Ciclopassarelas sob ferrovia</p></div><div id='g-ai0-55' class='g-Camada_1 g-aiAbs' style='top:45.9574%;left:29.7354%;'><p class='g-aiPstyle2'>b. Alargamento de viário existente</p></div><div id='g-ai0-56' class='g-Camada_1 g-aiAbs' style='top:47.8723%;left:55.6184%;'><p class='g-aiPstyle2'>b. Acessos &ndash; rampas e escadarias</p></div><div id='g-ai0-57' class='g-Camada_1 g-aiAbs' style='top:48.1915%;left:81.3757%;'><p class='g-aiPstyle2'>c. Ciclopassarelas sobre rios ou </p></div><div id='g-ai0-58' class='g-Camada_1 g-aiAbs' style='top:49.9468%;left:29.7354%;'><p class='g-aiPstyle2'>c. Requalificação de viário existente</p></div><div id='g-ai0-59' class='g-Camada_1 g-aiAbs' style='top:50.1064%;left:81.3757%;'><p class='g-aiPstyle2'>córregos</p></div><div id='g-ai0-60' class='g-Camada_1 g-aiAbs' style='top:58.2447%;right:77.4602%;'><p class='g-aiPstyle3'>INFRAESTRUTURA</p></div><div id='g-ai0-61' class='g-Camada_1 g-aiAbs' style='top:58.2447%;left:25.8201%;'><p class='g-aiPstyle1'>10.</p></div><div id='g-ai0-62' class='g-Camada_1 g-aiAbs' style='top:58.2447%;left:27.457%;'><p class='g-aiPstyle1'> </p></div><div id='g-ai0-63' class='g-Camada_1 g-aiAbs' style='top:58.2447%;left:29.7354%;'><p class='g-aiPstyle1'>Espaço Produtivo</p></div><div id='g-ai0-64' class='g-Camada_1 g-aiAbs' style='top:58.2447%;left:51.703%;'><p class='g-aiPstyle1'>11.</p></div><div id='g-ai0-65' class='g-Camada_1 g-aiAbs' style='top:58.2447%;left:53.3399%;'><p class='g-aiPstyle1'> </p></div><div id='g-ai0-66' class='g-Camada_1 g-aiAbs' style='top:58.2447%;left:55.6184%;'><p class='g-aiPstyle1'>Equipamentos Públicos</p></div><div id='g-ai0-67' class='g-Camada_1 g-aiAbs' style='top:58.2447%;left:77.4603%;'><p class='g-aiPstyle1'>12.</p></div><div id='g-ai0-68' class='g-Camada_1 g-aiAbs' style='top:58.2447%;left:79.0972%;'><p class='g-aiPstyle1'> </p></div><div id='g-ai0-69' class='g-Camada_1 g-aiAbs' style='top:58.2447%;left:81.3757%;'><p class='g-aiPstyle1'>Produção Habitacional</p></div><div id='g-ai0-70' class='g-Camada_1 g-aiAbs' style='top:60.9574%;left:55.6614%;width:21.023%;'><p class='g-aiPstyle4'>a. Equipamentos em terrenos públicos subutilizados</p><p class='g-aiPstyle4'>b. Equipamentos em galpões existentes de valor histórico</p><p class='g-aiPstyle4'>c. Novos equipamentos</p><p>&nbsp;</p></div><div id='g-ai0-71' class='g-Camada_1 g-aiAbs' style='top:60.9574%;left:81.3757%;width:18.6243%;'><p class='g-aiPstyle4'>a.Implantação em grandes </p><p class='g-aiPstyle4'>lotes / glebas</p><p class='g-aiPstyle4'>b.Fruição pública</p><p class='g-aiPstyle4'>c. Pequenas praças como espaços de socialização</p><p class='g-aiPstyle4'>c. Divisões condominiais com poucas unidades habitacionais </p><p class='g-aiPstyle4'>por conjunto</p><p class='g-aiPstyle4'>d. Eixo de espaços públicos</p><p class='g-aiPstyle4'>e. Divisões condominiais</p><p class='g-aiPstyle4'>f. Taxas de ocupação mais altas em áreas próximas às áreas verdes</p><p class='g-aiPstyle4'>g. Maiores áreas condominiais verdes em regiões com pouca oferta de áreas verdes</p></div><div id='g-ai0-72' class='g-Camada_1 g-aiAbs' style='top:61.117%;left:29.7354%;'><p class='g-aiPstyle2'>a. Aterramento de linhão</p></div><div id='g-ai0-73' class='g-Camada_1 g-aiAbs' style='top:63.5106%;left:29.7354%;'><p class='g-aiPstyle2'>b. Infovia</p></div><div id='g-ai0-74' class='g-Camada_1 g-aiAbs' style='top:74.8404%;left:55.6614%;width:21.023%;'><p class='g-aiPstyle4'>d. Equipamentos oriundos de destinação de grandes lotes</p><p>&nbsp;</p></div></div></div></div>";
const uploadsDir = "../wp-content/themes/gestaourbana-1.2/uploads/";
var cLayer;
var spCoords = [-5193000, -2695000];

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
var acoesIlustradas = '';
var imgUrl;
var mapLayers;
var enlargeThumb;
var arcoFeature;
var kmlUrls;

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
  jQuery('#legendaMapa').html(legenda);

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
          top: mContent.offset().top-2,
          left: mContent.offset().left+mContent.width()+20
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
  enlargeThumb = function(code){
    proposta = readProp(information, '_'+code);
    // IMAGEM PADRÃO
    // imgUrl = "<img src='../wp-content/themes/gestaourbana-1.2/uploads/"+layer.split('_')[1]+".png' onerror=\"this.src='"+defaultImg+"'\" alt='"+proposta.titulo+"' />";
    imgUrl = "<img src='../wp-content/themes/gestaourbana-1.2/uploads/"+code+".png' alt='"+proposta.titulo+"' />";
    jQuery('#propostaTitulo').html(proposta.titulo);      
    jQuery('#propostaTexto').html(proposta.texto);
    jQuery('#propostaImagem').html('<img src="../wp-content/themes/gestaourbana-1.2/uploads/'+code+'.png" alt="'+code+'" />');
    jQuery('#container_lightbox').css({
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

  /// CAMADAS
  mapLayers = [new ol.layer.Tile({
    // source: new ol.source.OSM()
    source: new ol.source.BingMaps({key: 'AsOanmHkUY8fnofQzDZbdilguBznksMGkjFh0OqiY7mrzoMP7Nj_hUA6Vx5HP9-h', imagerySet: 'AerialWithLabels', culture: 'pt-BR'})
  })];
  /// DEFINE NOME DO MAPA
  mapLayers[0].set("name","20");
  
  lStyle = new ol.style.Style({
              stroke: new ol.style.Stroke({
                color: 'rgba(243,146,0,0.8)',
                width: 2
              }),
              fill: new ol.style.Fill({
                color: 'rgba(255,255,255,0.2)'
              })
            });
  var perimetroMaior = platMapAPI.createCustomVectorLayerFromKML("../wp-content/themes/gestaourbana-1.2/uploads/PerimetroACT.kml", lStyle);
  perimetroMaior.set("name", "21"); 
  mapLayers.push(perimetroMaior);

  kmlUrls = [];
  /// CORREÇÃO PARA AUSÊNCIA DE INFORMAÇÃO
  var propsNumber = 0;
  for (codigo in information){
    propsNumber++;
    var splitCode = codigo.split('_')[1];
    // ITERAÇÃO CANCELADA - ORDEM ESPECÍFICA DE CAMADAS
    // kmlUrls.push(splitCode+'.kml');
    if(propsNumber < 32) {
      var _prop = readProp(information, codigo);
      var thumb = '<img src="../wp-content/themes/gestaourbana-1.2/uploads/'+splitCode+'_thumb.png" onclick="enlargeThumb(\''+splitCode+'\')" alt="'+codigo+'" width="150" />';
      var box = '<div>'+thumb+'<p>'+_prop.texto+'</p></div>';
      acoesIlustradas += box;
    }
  }
  jQuery('#acoesIlustradas').html(acoesIlustradas);
  
  kmlUrls = [
  "9A.kml", 
  "9B.kml", 
  "9C.kml", 
  "10A.kml", 
  // "10B.kml", 
  // "10C.kml", 
  "11A.kml", 
  "11B.kml", 
  "11C.kml", 
  "11D.kml", 
  // "12A.kml", 
  // "12B.kml", 
  // "12C.kml", 
  // "12D.kml", 
  // "12E.kml", 
  // "12F.kml", 
  // "12G.kml",
  "6A.kml", 
  "6B.kml", 
  "1A.kml",
  "1B.kml",
  "2A.kml", 
  "2B.kml", 
  "3A.kml", 
  "3B.kml", 
  "3C.kml", 
  "4A.kml", 
  "4B.kml", 
  "5A.kml", 
  "5B.kml", 
  "5C.kml", 
  "5D.kml", 
  "5E.kml", 
  "8A.kml", 
  // "8B.kml", 
  "7A.kml", 
  "7B.kml", 
  "7C.kml"
  ];

  // for (var i = 0; i < kmlUrls.length; i++) {
  for (var i = kmlUrls.length-1; i >= 0; i--) {
    var nome = '_'+kmlUrls[i].split('.')[0];
    
    /// Estilo
    var perimCode = parseInt(nome.replace(/[^0-9\.]/g, ''), 10);
    var perimSubcode = nome.split(perimCode)[1];
    var pStrCol = 'rgba(80,120,200,0.8)';
    var pFillCol = 'rgba(80,120,200,0.5)';
    var pWidth = 2;
    var pDash = [0];

    switch (perimCode) {
      case 1:
        pStrCol = 'rgba(120,181,220,0.95)';
        pWidth = 3;
        pDash = [9,8];
        break;
      case 2:
        pStrCol = 'rgba(60,90,131,0.95)';
        pWidth = 3;
        pDash = [7,15];
        break;
      case 3:
        pStrCol = 'rgba(172,189,211,0.95)';
        break;
      case 4:
        pStrCol = 'rgba(71,105,52,0.95)';
        break;
      case 5:
        pStrCol = 'rgba(138,181,61,0.95)';
        break;
      case 6:
        pStrCol = 'rgba(138,181,61,0.95)';
        if (perimSubcode == 'A') {
          pWidth = 3;
          pDash = [2,10];
        }
        else {
          pWidth = 5;
          pDash = [3,10];
        }
        break;
      case 7:
        pStrCol = 'rgba(234,187,46,0.95)';
        if(perimSubcode == 'C')
          pStrCol = 'rgba(249,233,185,0.95)';
        break;
      case 8:        
        pStrCol = 'rgba(216,133,46,0.95)';
        pWidth = 1;
        break;
      case 9:
        pStrCol = 'rgba(255,255,255,0.95)';
        break;
      case 10:       
        pStrCol = 'rgba(0,0,0,0.95)';
        pWidth = 3;
        pDash = [0,10,0,10,1];
        break;
      case 11:
        pStrCol = 'rgba(193,66,146,0.95)';
        if(perimSubcode == 'D')
          continue;
        break;
      default:        
        break;
    }
    pFillCol = pStrCol.replace("0.95","0.25");

    lStyle = new ol.style.Style({
      image: new ol.style.Icon({
             anchor: [0.5, 0.5],
             anchorXUnits: 'fraction',
             anchorYUnits: 'fraction',
             opacity: 0.95,
             scale: 1,
             src: uploadsDir+'icone-mapa_11.png'
           }),
      stroke: new ol.style.Stroke({
        color: pStrCol,
        width: pWidth,
        lineDash: pDash
      }),
      fill: new ol.style.Fill({
        color: pFillCol
      })
    });
    /// END Estilo

    var camada = platMapAPI.createCustomVectorLayerFromKML(uploadsDir+kmlUrls[i], lStyle);
    camada.set("name",nome);

    mapLayers.push(camada);
  }

  /// FEATURES DO TIPO PONTO (ESPECÍFICAS)
  var pointLayers = ['11A_PONTO.kml', '11B_PONTO.kml', '11C_PONTO.kml','11D_PONTO.kml'];

  for (kml in pointLayers) {
    estilo = platMapAPI.getStyleLayerWIcon(uploadsDir+'icone-mapa_11.png');
    var kName = pointLayers[kml]+'';
    var nome = '_'+kName.split('_')[0];
    var camada = platMapAPI.createCustomVectorLayerFromKML(uploadsDir+pointLayers[kml], estilo);
    camada.set("name",nome);

    mapLayers.push(camada);
  }

  /// DECLARAÇÕES DO MAPA (VIEW, MAP, OVERLAY)
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

  // arcoFeature = map.getLayers();
  
  var featureOverlay = new ol.layer.Vector({
    source: new ol.source.Vector(),
    map: map,
    style: new ol.style.Style({
      stroke: new ol.style.Stroke({
        color: 'rgba(255,255,255,0.5)',
        width: 3,
        lineDash: strokeLineDash
      }),
      fill: new ol.style.Fill({
        color: 'rgba(255,255,255,0.2)'
      })
    })
  });

  // featureOverlay.setZIndex(1);

  var highlight;
  var lastFeature;
  var displayFeatureInfo = function (pixel) {
    var fLayer = map.forEachLayerAtPixel(pixel, function(layer){
      if(layer != featureOverlay){
        return layer;
      }
    });
    var layerName = fLayer.get('name');
    var feature = map.forEachFeatureAtPixel(pixel, function (feature) {
      if(feature !== highlight && feature != lastFeature){
        return feature;
      }
      else
        return null;
    });
    var info = document.getElementById('info');
    if (feature) {
      if(feature == lastFeature || feature == highlight)
        return;
      if (feature !== lastFeature && feature.get('Layer') != "PERIMETRO_ACT_LF") {
        if (highlight) {
          featureOverlay.getSource().removeFeature(highlight);
        }
        if (feature) {        
          featureOverlay.getSource().addFeature(feature);
          lastFeature = feature;
        }
        highlight = feature;      
      }    
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
      if(proposta != undefined){
        imgUrl = "<img src='../wp-content/themes/gestaourbana-1.2/uploads/"+layer.split('_')[1]+".png' alt='"+proposta.titulo+"' />";
        jQuery('#propostaTitulo').html(proposta.titulo);      
        jQuery('#propostaImagem').html(imgUrl);
        jQuery('#propostaTexto').html(proposta.texto);      
      }
      else
        return;
    } else {
      jQuery('#propostaTitulo').html('Clique no perímetro desejado para obter mais informações.');      
      jQuery('#propostaImagem').html('');

      jQuery('#propostaTexto').html('');
    }
  };
  map.on('click', function (evt) {
    getFeatureLayerInfo(evt.pixel);    
    openModal();
  });
  
  // MouseOver - bug por conta da sobreposição
  map.on('pointermove', function (evt) {
  // map.on('click', function (evt) {
    getFeatureLayerInfo(evt.pixel);
    if (evt.dragging) {
      return;
    }
    var pixel = map.getEventPixel(evt.originalEvent);
    displayFeatureInfo(pixel);
    // openModal();
  });
  
  var redeHidrica = '<h5>Rede Hídrica</h5>'+'<button class="layerToggleBt unselectable" onclick="tLayers(\'1\', this)">Recuperação de Córregos</button>'+'<button class="layerToggleBt unselectable" onclick="tLayers(\'2\', this)">Eixos Drenantes</button>'+'<button class="layerToggleBt unselectable" onclick="tLayers(\'3\', this)">Áreas de Absorção</button>';
  var espacoPublico = '<h5>Rede de Espaço Público</h5>'+'<button class="layerToggleBt unselectable" onclick="tLayers(\'4\', this)">Parques</button>'+'<button class="layerToggleBt unselectable" onclick="tLayers(\'5\', this)">Praças</button>'+'<button class="layerToggleBt unselectable" onclick="tLayers(\'6\', this)">Eixos Ambientais</button>';
  var mobilidade = '<h5>Rede de Mobilidade</h5>'+'<button class="layerToggleBt unselectable" onclick="tLayers(\'7\', this)">Sistema Viário</button>'+'<button class="layerToggleBt unselectable" onclick="tLayers(\'8\', this)">Passeios</button>'+'<button class="layerToggleBt unselectable" onclick="tLayers(\'9\', this)">Transposições</button>';
  var infraestrutura = '<h5>Infraestrutura</h5>'+'<button class="layerToggleBt unselectable" onclick="tLayers(\'10\', this)">Espaço Produtivo</button>'+'<button class="layerToggleBt unselectable" onclick="tLayers(\'11\', this)">Equipamentos Públicos</button>'+'<button class="layerToggleBt unselectable" onclick="tLayers(\'12\', this)">Produção Habitacional</button>';
  var arco = '<button class="layerToggleBt unselectable" style="width: 80px" onclick="tLayers(\'21\', this)">Arco Tietê</button>'+'<button class="layerToggleBt unselectable" style="width: 80px" onclick="tLayers(\'20\', this)">Foto aérea</button>';
  var menuContent = arco+'<hr />'+redeHidrica+'<hr />'+espacoPublico+'<hr />'+mobilidade+'<hr />'+infraestrutura;
  jQuery('#layersMenu').html(menuContent);
  bugMap = map;
});

function tLayers(codigo, elemento) {
  jQuery(elemento).toggleClass('inactiveBt');
  var _layer;
  var _show = jQuery(elemento).html();
  for (var i = mapLayers.length - 1; i >= 0; i--) {
    var layerCode;
    if(mapLayers[i].get('name') != undefined)
      layerCode = mapLayers[i].get('name').replace(/[^0-9\.]/g, '');
    if(layerCode == codigo){
      _layer = mapLayers[i];
      platMapAPI.showHideCamada(_layer, elemento, _show, _show);
    }
  }  
}
