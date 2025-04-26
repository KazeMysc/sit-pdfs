//Planilha de Horários
const container = document.querySelector('#subjectTime');

new Handsontable(container, {
  data: [
    {horario: '13:00 a 13:50', dom: '---', seg: 'Inglês', ter: 'Algoritmos & Prog. de Computadores', qua: 'Filosofia', qui: 'Geografia', sex: 'Língua Portuguesa', sab:'Fundamentos de Informática'},
    { horario: '13:50 a 14:40', dom: '---', seg: 'Inglês', ter: 'Algoritmos & Prog. de Computadores', qua: 'Filosofia', qui: 'Geografia', sex: 'Língua Portuguesa', sab: 'Fundamentos de Informática'},
    { horario: '14:40 a 15:30', dom: '---', seg: 'Matemática', ter: 'Algoritmos & Prog. de Computadores', qua: 'Biologia', qui: 'Sociologia', sex: 'História', sab:'---'},
    { horario: '15:50 a 16:40', dom: '---', seg: 'Matemática', ter: 'Algoritmos & Prog. de Computadores', qua: 'Biologia', qui: 'Sociologia', sex: 'História', sab:'---'},
    { horario: '16:40 a 15:30', dom: '---', seg: 'Química', ter: 'Algoritmos & Prog. de Computadores', qua: 'Ed. Física', qui: 'S. Operacionais', sex: 'Física', sab:'---'},
    { horario: '14:40 a 15:30', dom: '---', seg: 'Química', ter: 'Algoritmos & Prog. de Computadores', qua: 'Ed. Física', qui: 'S. Operacionais', sex: 'Física', sab: '---'},
  ],
  colHeaders: ['Horário', 'Dom', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
  columns: [
    {
      data: 'horario',
      editor: false,
    },
    {
      data: 'dom',
      editor: false,
    },
    {
      data: 'seg',
      editor: false,
    },
    {
      data: 'ter',
      editor: false,
    },
    {
      data: 'qua',
      editor: false,
    },
    {
      data: 'qui',
      editor: false,
    },
    {
      data: 'sex',
      editor: false,
    },
    {
      data: 'sab',
      editor: false,
    },
  ],
  className: 'htCenter',
  rowHeaders: true,
  manualRowResize: true,
  height: 'auto',
  fixedColumnsStart: 1,
  colWidths: [95, 50, 100, 250, 100, 100, 150, 175],
  autoWrapRow: true,
  autoWrapCol: true,
  licenseKey: 'non-commercial-and-evaluation', //propósitos não comerciais
});

