const classContainer = document.querySelector('#teacherInfo');

const hot = new Handsontable(classContainer, {
  data: [
    // 0
    {cod: 'TIDES0353', materia: 'Língua Portuguesa', professor:'Mirian Pereira' , turma: 'I2261TH', periodo: '6T12 (12/03/2025 - 14/07/2025)'},
    // 1
    {cod: 'TIDES0354', materia: 'Inglês', professor:'Cristiane Ribeiro Barbosa da Silva' , turma: 'I2261TH', periodo: '2T12 (12/03/2025 - 14/07/2025)'},
    // 2
    {cod: 'TIDES0355', materia: 'Ed. Física', professor:'Biratan dos Santos Palmeira' , turma: 'I2261TH', periodo: '4T56 (12/03/2025 - 14/07/2025)'},
    // 3
    {cod: 'TIDES0357', materia: 'Sociologia', professor:'Breno Rodrigo de Oliveira Alencar' , turma: 'I2261TH', periodo: '5T34 (12/03/2025 - 14/07/2025)'},
    // 4 antigo prof filosofia Walber Wolgrand Menezes Marques
    {cod: 'TIDES0358', materia: 'Filosofia', professor:'Alessandra' , turma: 'I2261TH', periodo: '4T12 (12/03/2025 - 14/07/2025)'},
    // 5
    {cod: 'TIDES0359', materia: 'História', professor:'Humberto de Castro Brito' , turma: 'I2261TH', periodo: '6T34 (12/03/2025 - 14/07/2025)'},
    // 6
    {cod: 'TIDES0360', materia: 'Geografia', professor:'Ellen Cristina do Monte Silva' , turma: 'I2261TH', periodo: '5T12 (12/03/2025 - 14/07/2025)'},
    // 7
    {cod: 'TIDES0361', materia: 'Biologia', professor:'---' , turma: 'I2261TH', periodo: '4T34 (12/03/2025 - 14/07/2025)'},
    // 8
    {cod: 'TIDES0362', materia: 'Química', professor:'Celio Hitoshi Wataya' , turma: 'I2261TH', periodo: '2T56 (12/03/2025 - 14/07/2025)'},
    // 9
    {cod: 'TIDES0363', materia: 'Física', professor:'Pedro Paulo Santos da Silva' , turma: 'I2261TH', periodo: '6T56 (12/03/2025 - 14/07/2025)'},
    // 10
    {cod: 'TIDES0364', materia: 'Matemática', professor:'Gilvan Lira Souza' , turma: 'I2261TH', periodo: '2T34 (12/03/2025 - 14/07/2025)'},
    // 11
    {cod: 'TIDES0365', materia: 'Algoritmos & Prog. de Computadores', professor:'Mauro de Jesus Pereira' , turma: 'I2261TH', periodo: '3T123456 (12/03/2025 - 14/07/2025)'},
    // 12
    {cod: 'TIDES0366', materia: 'Fundamentos de Informática', professor:'Clóvis Maxwell Andrade Martins' , turma: 'I2261TH', periodo: '7T12 (12/03/2025 - 14/07/2025)'},
    // 13
    {cod: 'TIDES0367', materia: 'Sistemas Operacionais', professor:'Geovane Nobre Lamarao' , turma: 'I2261TH', periodo: '5T56 (12/03/2025 - 14/07/2025)'},
  ],
  colHeaders: ['Cód. Matéria', 'Matéria', 'Professor', 'Turma', 'Período - Matéria'],
  columns: [
    {
      data: 'cod',
      editor: false,
    },
    {
      data: 'materia',
      editor: false,
    },
    {
      data: 'professor',
      editor: false,
    },
    {
      data: 'turma',
      editor: false,
    },
    {
      data: 'periodo',
      editor: false,
    },
  ],
  // Para comentários
  cell: [
  { 
    row: 0, 
    col: 4, 
    comment: { 
      value: '6T12 (06/08/2025 - 04/11/2025), 6T12 (24/11/2025 - 09/01/2026)' 
    },
  },
  {
    row: 1,
    col: 4,
    comment: {
      value: '2T12 (06/08/2025 - 04/11/2025), 2T12 (24/11/2025 - 09/01/2026)'
    },    
  },
  {
    row: 2,
    col: 4,
    comment: {
      value: '4T56 (06/08/2025 - 04/11/2025), 4T56 (24/11/2025 - 09/01/2026)'
    },    
  },
  {
    row: 3,
    col: 4,
    comment: {
      value: '5T34 (06/08/2025 - 04/11/2025), 5T34 (24/11/2025 - 09/01/2026)'
    },    
  },
  {
    row: 4,
    col: 4,
    comment: {
      value: '4T12 (06/08/2025 - 04/11/2025), 4T12 (24/11/2025 - 09/01/2026)'
    },    
  },
  {
    row: 5,
    col: 4,
    comment: {
      value: '6T34 (06/08/2025 - 04/11/2025), 6T34 (24/11/2025 - 09/01/2026)'
    },    
  },
  {
    row: 6,
    col: 4,
    comment: {
      value: '5T12 (06/08/2025 - 04/11/2025), 5T12 (24/11/2025 - 09/01/2026)'
    },    
  },
  {
    row: 7,
    col: 4,
    comment: {
      value: '4T34 (06/08/2025 - 04/11/2025), 4T34 (24/11/2025 - 09/01/2026)'
    },    
  },
  {
    row: 8,
    col: 4,
    comment: {
      value: '2T56 (06/08/2025 - 04/11/2025), 2T56 (24/11/2025 - 09/01/2026)'
    },    
  },
  {
    row: 9,
    col: 4,
    comment: {
      value: '6T56 (06/08/2025 - 04/11/2025), 6T56 (24/11/2025 - 09/01/2026)'
    },    
  },
  {
    row: 10,
    col: 4,
    comment: {
      value: '2T34 (06/08/2025 - 04/11/2025), 2T34 (24/11/2025 - 09/01/2026)'
    },    
  },
  {
    row: 11,
    col: 4,
    comment: {
      value: '3T123456 (06/08/2025 - 04/11/2025), 3T123456 (24/11/2025 - 09/01/2026)'
    },    
  },
  {
    row: 12,
    col: 4,
    comment: {
      value: '7T12 (06/08/2025 - 04/11/2025), 7T12 (24/11/2025 - 09/01/2026)'
    },    
  },
  {
    row: 13,
    col: 4,
    comment: {
      value: '5T56 (06/08/2025 - 04/11/2025), 5T56 (24/11/2025 - 09/01/2026)'
    },    
  },      
  ],
  className: 'htCenter',
  comments: true,
  rowHeaders: true,
  manualRowResize: true,
  height: 'auto',
  //fixedColumnsStart: 1,
  colWidths: [95, 250, 250, 175, 250],
  manualColumnResize: true,
  autoWrapRow: true,
  autoWrapCol: true,
  licenseKey: 'non-commercial-and-evaluation', //propósitos não comerciais
});

// A idéia desse código é mostrar comentários onclick mobile
hot.addHook('afterOnCellMouseDown', function(event, coords) {
    if (coords.row >= 0 && coords.col >= 0) { // Verifica se é uma célula válida
        const commentPlugin = hot.getPlugin('comments'); 
        const comment = commentPlugin.getCommentAtCell(coords.row, coords.col); 

        if (comment) { // Só exibe o comentário se houver um
            commentPlugin.showAtCell(coords.row, coords.col);
        }
        else {
          return;
        }
    }
});

