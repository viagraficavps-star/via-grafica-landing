// Image constants referencing generated assets
export const IMAGES = {
  heroBg: '/images/hero_bg.png',
  facadeAcm: '/images/facade_acm.png',
  facadeAcmProject: '/images/acm_maison_pires.png',
  channelLetters: '/images/channel_letters.png',
  seedBags: '/images/seed_bags.png',
  businessCards: '/images/business_cards.png',
  vehicleWrap: '/images/vehicle_wrap.png',
  customFrames: '/images/custom_frames.png',
};

export const COMPANY_INFO = {
  name: 'Via Gráfica',
  slogan: 'Muito além da impressão: Soluções Gráficas com qualidade, rapidez e excelente atendimento.',
  subhead: 'A Via Gráfica oferece soluções completas em impressão gráfica, comunicação visual e embalagens agrícolas com acabamento profissional, agilidade e entrega no prazo.',
  phoneDisplay: '(62) 99926-1700',
  phoneRaw: '5562999261700',
  address: 'Esquina com Rua Euzébio de Oliveira e Rua Dona Carolina, 367',
  district: 'Centro',
  cityState: 'Vianópolis – GO',
  fullAddress: 'Esquina com Rua Euzébio de Oliveira e Rua Dona Carolina, 367, Centro, Vianópolis - GO, 75260-000',
  hours: [
    { days: 'Segunda a Sexta', time: '08:00–12:00 | 14:00–18:00' },
    { days: 'Sábado', time: '08:00–12:00' }
  ],
  rating: '4,6',
  reviewsCount: 128,
};

export const QUICK_CATEGORIES = [
  { id: 'impressao', title: 'GRÁFICA DIGITAL', desc: 'Cartões, Panfletos, Pastas & Blocos', icon: 'Printer' },
  { id: 'comunicacao', title: 'COMUNICAÇÃO VISUAL', desc: 'Placas ACM, Letras Caixa & Banners', icon: 'Building2' },
  { id: 'embalagens', title: 'EMBALAGENS & SACOLAS', desc: 'Sacos para Sementes & Sacolas Personalizadas', icon: 'Package' },
  { id: 'logistica', title: 'ENTREGA & LOGÍSTICA', desc: 'Agilidade em Vianópolis e Região', icon: 'Truck' },
];

export const BRANDS_DATA = [
  { name: 'PONTUAL' },
  { name: 'FM MATERIAIS PARA CONSTRUÇÃO' },
  { name: 'APOIO' },
  { name: 'STARA' },
  { name: 'CARGILL' },
  { name: 'MINEIRA' },
  { name: 'POSTO PETRODIESEL' },
];

export const PRINCIPAIS_SERVICOS = [
  {
    id: 'impressos',
    title: 'Impressos',
    desc: 'Cartões de Visita, Panfletos, Flyers, Folders, Receituários, Pastas, Talões e Bloco de Anotações.',
    icon: 'Printer',
    items: ['Cartões de Visita', 'Panfletos & Flyers', 'Folders', 'Pastas Corporativas', 'Receituários & Blocos']
  },
  {
    id: 'banners',
    title: 'Banners e Letra Caixa',
    desc: 'Fachadas de ACM com estrutura metálica, Letras 3D em acrílico/inox com LED backlight, Banners em Lona e Faixas.',
    icon: 'Building2',
    items: ['Placas em ACM', 'Letras Caixa 3D LED', 'Banners & Lonas HD', 'Faixas & Painéis Promocionais']
  },
  {
    id: 'adesivos',
    title: 'Adesivos',
    desc: 'Vinis em geral, Perfurados para vitrines e carros, Decoração de Ambientes, Recorte Eletrônico e Transparente.',
    icon: 'Layers',
    items: ['Adesivos Vinil Recorte', 'Adesivo Perfurado', 'Decoração de Vitrines', 'Adesivos Transparentes']
  },
  {
    id: 'brindes',
    title: 'Brindes & Convites',
    desc: 'Cadernos, Agendas, Sacolas de Papel, Convites de Eventos e Casamentos com acabamento requintado.',
    icon: 'Gift',
    items: ['Convites Especiais', 'Sacolas de Papelão', 'Blocos de Notas VIP', 'Envelopes Personalizados']
  },
  {
    id: 'etiquetas',
    title: 'Etiquetas & Rótulos',
    desc: 'Para embalagens, potes, sacos, produtos industriais. Alta resistência à água, atrito e congelamento.',
    icon: 'Tag',
    items: ['Rótulos para Embalagens', 'Etiquetas Código de Barras', 'Rótulos em BOPP e Vinil']
  },
  {
    id: 'plotagem',
    title: 'Plotagem de Frotas',
    desc: 'Envelopamento total e parcial para carros comerciais, vans, caminhões e máquinas agrícolas.',
    icon: 'Truck',
    items: ['Plotagem Comercial', 'Envelopamento de Vans', 'Adesivação de Máquinas Agrícolas']
  },
  {
    id: 'displays',
    title: 'Displays e Painéis',
    desc: 'Projetos sob medida para feiras, eventos agrários, balcões de PDV, totens estruturais e placas de sinalização.',
    icon: 'Monitor',
    items: ['Totens Estruturais', 'Painéis de Sinalização', 'Displays para PDV & Feiras']
  },
  {
    id: 'agricolas',
    title: 'Sacos para Sementes',
    desc: 'Embalagens reforçadas para o agronegócio de Vianópolis com impressão gráfica de alta definição.',
    icon: 'Package',
    items: ['Sacos para Sementes de Soja', 'Sacaria para Milho & Ração', 'Embalagens Industriais Agrícolas']
  },
  {
    id: 'comunicacao_completa',
    title: 'Comunicação Completa',
    desc: 'Do projeto inicial e criação do layout até a fabricação gráfica e montagem final na sua empresa.',
    icon: 'CheckCircle2',
    items: ['Criação de Layout', 'Impressão em Alta Definição', 'Instalação Técnica no Local']
  }
];

export const TIMELINE_STEPS = [
  {
    number: '01',
    title: 'Solicite seu orçamento',
    desc: 'Envie sua ideia, medida ou arquivo pelo nosso site ou WhatsApp.'
  },
  {
    number: '02',
    title: 'Receba sua proposta',
    desc: 'Analisamos seu projeto e enviamos a melhor proposta com prazo garantido.'
  },
  {
    number: '03',
    title: 'Produção',
    desc: 'Seu material é produzido com tecnologia gráfica de alta precisão.'
  },
  {
    number: '04',
    title: 'Entrega',
    desc: 'Receba seus impressos prontos ou agende a instalação no local.'
  }
];

export const DIFERENCIAIS_DATA = [
  { title: 'Atendimento Rápido', desc: 'Respostas ágeis no WhatsApp e suporte humanizado em todas as etapas.', icon: 'Zap' },
  { title: 'Produção Própria', desc: 'Parque gráfico moderno próprio em Vianópolis, garantindo controle total.', icon: 'Factory' },
  { title: 'Impressão em Alta Resolução', desc: 'Tecnologia de impressão digital e offset com cores fiéis e nitidez.', icon: 'Sparkles' },
  { title: 'Materiais Premium', desc: 'Seleção rigorosa dos melhores papéis, lonas, tintas e vinis.', icon: 'Award' },
  { title: 'Entrega no Prazo', desc: 'Compromisso absoluto com as datas combinadas para seu projeto.', icon: 'Clock' },
  { title: 'Equipe Especializada', desc: 'Profissionais experientes em pré-impressão, design e instalação.', icon: 'Users' },
  { title: 'Orçamento Rápido', desc: 'Cotações simplificadas com envio de arte direto pelo site.', icon: 'FileText' },
  { title: 'Comunicação Visual Completa', desc: 'Da criação do layout até a instalação da fachada da sua empresa.', icon: 'ShieldCheck' },
];

export const GALLERY_DATA = [
  {
    title: 'Fachada em ACM & Letras em Relevo',
    category: 'Comunicação Visual',
    image: IMAGES.facadeAcmProject,
    desc: 'Fachada comercial em ACM preto de alto brilho com iluminação embutida e aplicação de marca em relevo'
  },
  {
    title: 'Painel Luminoso 3D & Backlight',
    category: 'Comunicação Visual',
    image: IMAGES.channelLetters,
    desc: 'Painel circular com iluminação LED backlight e letras 3D em alto relevo'
  },
  {
    title: 'Sacos para Sementes & Embalagens Agrícolas',
    category: 'Personalizados',
    image: IMAGES.seedBags,
    desc: 'Sacarias e embalagens em papel kraft reforçado para sementes e agronegócio'
  },
  {
    title: 'Cartões de Visita, Tags & Recortes Especiais',
    category: 'Impressão Gráfica',
    image: IMAGES.businessCards,
    desc: 'Cartões executivos 300g, tags personalizadas e recortes especiais com verniz e acabamento nobre'
  },
  {
    title: 'Plotagem de Frota Comercial & Agrícola',
    category: 'Comunicação Visual',
    image: IMAGES.vehicleWrap,
    desc: 'Adesivação e envelopamento de frotas comerciais, picapes e veículos agrícolas'
  },
  {
    title: 'Quadros Personalizados de Alta Resolução',
    category: 'Decoração & Impressão',
    image: IMAGES.customFrames,
    desc: 'Quadros decorativos e telas artísticas em alta definição com acabamento refinado e moldura'
  }
];

export const TESTIMONIALS_DATA = [
  {
    name: 'Ricardo Bueno',
    role: 'Diretor Comercial',
    text: 'Se você precisa de uma empresa séria e rápida para resolver a comunicação visual da sua marca com rapidez e transparência, a Via Gráfica é a escolha certa! Excelente atendimento e entrega rápida.',
    rating: 5,
    date: 'Cliente Verificado'
  },
  {
    name: 'Maria Gabriela D\'Avelina',
    role: 'Empresária',
    text: 'A Via Gráfica desenvolveu toda a fachada e materiais impressos da nossa clínica. Além de materiais da primeira qualidade, fomos super bem atendidos. Fizeram um trabalho artesanal nos acabamentos que impressionou a todos.',
    rating: 5,
    date: 'Cliente Verificado'
  },
  {
    name: 'Talyta Soares',
    role: 'Gestora de Eventos',
    text: 'Achei de extrema qualidade o serviço de todos os materiais da Gráfica! Pontuais e atenciosos. Solicitei impressões urgentes e me entregaram rapidamente, tudo perfeito e com excelente atendimento.',
    rating: 5,
    date: 'Cliente Verificado'
  }
];
