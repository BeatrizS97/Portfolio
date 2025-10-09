// Dados organizados apenas para cursos, atividades, idiomas e intercâmbio
const data = {
    course: {
        items: {
            1: {
                title: 'Fundamentos de Banco de Dados',
                image: '../images/curso1.jpg',
                description: 'Curso de Fundamentos de Banco de Dados - Fatec Jundiaí. Aborda conceitos essenciais de bancos de dados relacionais, modelagem, SQL, normalização e práticas de projeto.',
                status: 'Em andamento',
                carga: '200h',
                instituicoes: 'IFRS',
                conteudo: [
                    'Introdução a bancos de dados',
                    'Modelagem conceitual (DER)',
                    'Modelagem lógica e física',
                    'Linguagem SQL (DDL, DML, DQL)',
                    'Consultas com JOINs e funções de grupo',
                    'Normalização de dados',
                    'Integridade referencial e restrições',
                    'Práticas de projeto de banco de dados'],
                fotos: [
                    '../images/curso1.jpg',
                    '../images/curso1b.jpg',
                    '../images/curso1c.jpg'
                ],
                episodios: [
                    { title: 'Modelagem de Dados', image: '../images/ep1.jpg', desc: 'Entendendo DER e relacionamentos.' },
                    { title: 'SQL na Prática', image: '../images/ep2.jpg', desc: 'Consultas, filtros e junções.' }
                ],
                extras: [
                    { title: 'Certificado', image: '../images/certificado1.jpg', desc: 'Certificação nacional.' }
                ]
            },
            2: {
                title: 'Curso de Python',
                image: '../images/curso2.jpg',
                description: 'Curso de Python - Em andamento - Do básico ao avançado - Fatec Jundiaí, Fatec Sorocaba e Huawei Brasil (96h). Conteúdos: lógica de programação, estruturas de controle, funções, orientação a objetos, manipulação de arquivos, bibliotecas padrão, tratamento de exceções e introdução a aplicações práticas em ciência de dados e automação.',
                status: 'Em andamento',
                carga: '96h',
                instituicoes: 'Fatec Jundiaí / Sorocaba / Huawei Brasil',
                conteudo: [
                    'Lógica de programação',
                    'Estruturas de controle',
                    'Funções',
                    'Orientação a objetos',
                    'Manipulação de arquivos',
                    'Bibliotecas padrão',
                    'Tratamento de exceções',
                    'Introdução à ciência de dados e automação'
                ],
                fotos: [
                    '../images/curso2.jpg',
                    '../images/curso2b.jpg',
                    '../images/curso2c.jpg'
                ],
                episodios: [
                    { title: 'Lógica', image: '../images/ep3.jpg', desc: 'Fundamentos de lógica.' },
                    { title: 'POO', image: '../images/ep4.jpg', desc: 'Orientação a objetos.' }
                ],
                extras: [
                    { title: 'Certificado', image: '../images/certificado2.jpg', desc: 'Certificado em andamento.' }
                ]
            },
            3: {
                title: 'Curso de Power BI para Business Intelligence e Data Science',
                image: '../images/curso3.jpg',
                description: 'Curso de Power BI - Data Science Academy (72h). Aborda conceitos e práticas de Business Intelligence, dashboards interativos, análise de dados e integração com diferentes fontes para suporte a decisões baseadas em dados.',
                status: 'Concluído',
                carga: '72h',
                instituicoes: 'Data Science Academy',
                conteudo: [
                    'Fundamentos de Business Intelligence',
                    'Conexão e transformação de dados (Power Query)',
                    'Modelagem de dados',
                    'DAX (Data Analysis Expressions)',
                    'Criação de dashboards e relatórios interativos',
                    'Visualizações avançadas',
                    'Integração com múltiplas fontes de dados',
                    'Publicação e compartilhamento no Power BI Service'
                ],
                fotos: [
                    '../images/curso3.jpg',
                    '../images/curso3b.jpg',
                    '../images/curso3c.jpg'
                ],
                episodios: [
                    { title: 'Mini Projeto 1', image: '../images/ep3.jpg', desc: 'Primeiros passos.' },
                    { title: 'Modelagem e DAX', image: '../images/ep4.jpg', desc: 'Criando modelos e medidas.' }
                ],
                extras: [
                    { title: 'Certificado', image: '../images/certificado3.jpg', desc: 'Certificado.' }
                ]
            },
            4: {
                title: 'Fundamentos de Inteligência Artificial',
                image: '../images/curso4.jpg',
                description: 'Curso de Fundamentos de Inteligência Artificial (IBM). Introduz os conceitos básicos de IA, incluindo aprendizado de máquina, deep learning, processamento de linguagem natural e aplicações práticas. Curso em andamento.',
                status: 'Em andamento',
                carga: '30hr',
                instituicoes: 'IBM / Coursera',
                conteudo: [
                    'Introdução à Inteligência Artificial',
                    'História e aplicações da IA',
                    'Aprendizado de Máquina e Deep Learning',
                    'Processamento de Linguagem Natural (NLP)',
                    'Visão Computacional',
                    'Ética e impactos sociais da IA',
                    'Casos de uso em negócios e indústria'
                ],
                fotos: [
                    '../images/curso4.jpg',
                    '../images/curso4b.jpg'
                ],
                episodios: [
                    { title: 'Introdução à IA', image: '../images/ep4-1.jpg', desc: 'Primeiros conceitos e histórico.' },
                    { title: 'Aplicações práticas', image: '../images/ep4-2.jpg', desc: 'IA em negócios e indústria.' }
                ],
                extras: [
                    { title: 'Certificado (em andamento)', image: '../images/certificado4.jpg', desc: 'Certificado disponível após conclusão.' }
                ]
            }
        }
    },

    idioma: {
        items: {
            1: {
                title: 'Inglês',
                image: '../images/certificado-intercambio1.jpg',
                description: 'Nível atual: B1 (intermediário). Compreensão de leitura, escrita e audição sólidas, com foco em aprimorar conversação.',
                status: 'Em andamento',
                instituicoes: 'ISI Dublin',
                conteudo: [
                    'Conversação diária',
                    'Gramática intermediária',
                    'Produção de textos acadêmicos',
                    'Listening com filmes e podcasts'
                ],
                fotos: ['../images/ingles.jpg'],
                extras: [{ title: 'Certificado A2', image: '../images/certificado-intercambio1.jpg', desc: 'Emitido pela ISI Dublin.' }]
            },
            2: {
                title: 'Espanhol',
                image: '../images/espanhol.jpg',
                description: 'Nível atual: A2 (básico). Em evolução para comunicação prática e escrita acadêmica.',
                status: 'Em andamento',
                conteudo: [
                    'Vocabulário básico',
                    'Frases de uso cotidiano',
                    'Compreensão oral',
                    'Produção escrita simples'
                ],
                fotos: ['../images/espanhol.jpg']
            }
        }
    },

    atividade: {
        items: {
            1: {
                title: 'Voluntária - Associação Pedra que Canta',
                image: '../images/atividade1.jpg',
                description: 'Atuação voluntária desde 2022 em atividades culturais e comunitárias voltadas à inclusão social, integração e desenvolvimento local. Envolvimento em ações de apoio à comunidade, oficinas, eventos e mentorias para jovens.',
                status: 'Em andamento (2022–2025)',
                conteudo: [
                    'Apoio em atividades culturais',
                    'Promoção da inclusão social',
                    'Participação em eventos comunitários',
                    'Mentoria e integração de jovens',
                    'Contribuição para o desenvolvimento local'
                ],
                fotos: [
                    '../images/atividade1.jpg',
                    '../images/atividade1b.jpg'
                ],
                episodios: [
                    { title: 'Oficinas culturais', image: '../images/ep-atividade1.jpg', desc: 'Atividades artísticas e educativas.' },
                    { title: 'Eventos comunitários', image: '../images/ep-atividade2.jpg', desc: 'Ações de integração social.' }
                ],
                extras: [
                    { title: 'Reconhecimento local', image: '../images/extras-atividade1.jpg', desc: 'Participação destacada em projetos sociais.' }]
            }
        }
    },

    intercambio: {
        items: {
            1: {
                title: 'Intercâmbio Cultural - Dublin (Irlanda)',
                image: '../images/experiencia1.jpg',
                description: 'Intercâmbio de 30 dias em Dublin - Irlanda: ISI Dublin - English Language School (Jul - Ago 2025). Curso intensivo de inglês (nível A2), com foco em comunicação oral e escrita acadêmica. Desenvolvimento de autonomia, adaptação e networking multicultural. Experiência voltada ao aprimoramento do idioma, networking internacional e contato com diferentes culturas.',
                status: 'Concluído',
                instituicoes: 'ISI Dublin - English Language School',
                carga: '120h',
                conteudo: [
                    'Curso intensivo de inglêS (nível A2, 30h/semana)',
                    'Foco em comunicação oral e escrita acadêmica',
                    'Imersão cultural e turismo local',
                    'Networking internacional e multicultural',
                    'Desenvolvimento de soft skills, autonomia e adaptação'
                ],
                fotos: [
                    '../images/experiencia1.jpg',
                    '../images/experiencia1b.jpg'
                ],
                episodios: [
                    { title: 'Primeira semana', image: '../images/ep-exp1.jpg', desc: 'Adaptação, aulas e primeiros passeios culturais.' },
                    { title: 'Explorando Dublin', image: '../images/ep-exp2.jpg', desc: 'Visitas a pontos turísticos e imersão cultural.' },
                    { title: 'Networking internacional', image: '../images/ep-exp3.jpg', desc: 'Conexão com estudantes de diferentes países.' }
                ],
                extras: [
                    { title: 'Certificado ISI Dublin', image: '../images/certificado-intercambio1.jpg', desc: 'Certificação do curso intensivo de inglês.' }
                ]
            }
        }
    }
};

// Função utilitária para obter parâmetros da URL
function getUrlParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Função para renderizar carrosseis
function renderCarousel(title, items, key = 'image', overlayKey = 'title') {
    if (!items || !items.length) return '';
    return `
                <div>
                    <div class="carousel-title">${title}</div>
                    <div class="carousel">
                        ${items.map(item => `
                            <div class="carousel-item" style="background-image:url('${item[key] || item}');">
                                <div class="overlay">${item[overlayKey] || ''}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
}

function renderDetails(item) {
    // Gera as tags de status, carga horária e instituições
    let tags = '';
    if (item.status) tags += `<span class="details-tag">${item.status}</span>`;
    if (item.carga) tags += `<span class="details-tag">${item.carga}</span>`;
    if (item.instituicoes) tags += `<span class="details-tag">${item.instituicoes}</span>`;

    let conteudoList = '';
    if (item.conteudo && item.conteudo.length) {
        conteudoList = `<div style="margin-bottom: 18px;">
                    <strong>Conteúdo:</strong>
                    <ul class="details-list">
                        ${item.conteudo.map(c => `<li>${c}</li>`).join('')}
                    </ul>
                </div>`;
    }

    // Renderiza o HTML completo dos detalhes
    return `
                <div class="details-content">
                    <div class="details-title">${item.title}</div>
                    <div class="details-description">${item.description}</div>
                    <div class="details-tags">${tags}</div>
                    ${conteudoList}
                    <div class="details-buttons">
                        <button class="btn-play" onclick="window.location.href='main.html#${getUrlParam('type')}s'" aria-label="Voltar">Voltar</button>
                    </div>
                </div>
            `;
}

// Renderiza os detalhes com base nos parâmetros da URL
window.onload = function () {
    const type = getUrlParam('type') || 'course';
    const id = getUrlParam('id') || '1';

    const category = data[type] || data.course;
    const item = category.items[id] || Object.values(category.items)[0];

    const detailsContainer = document.getElementById('detailsContainer');
    let html = `
                ${renderDetails(item)}
                <div class="details-carousel">
                    ${renderCarousel('Fotos', item.fotos || [], undefined, undefined)}
                    ${renderCarousel('Extras', item.extras || [], 'image', 'title')}
                </div>
            `;
    detailsContainer.innerHTML = html;
};
