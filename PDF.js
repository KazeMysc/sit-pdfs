var url = 'https://raw.githubusercontent.com/KazeMysc/sit-pdfs/main/Calend%C3%A1rio%20Acad%C3%AAmico%20-%20IFPA%20Campus%20Bel%C3%A9m%20-%202025.pdf'; // URL do PDF aqui

var { pdfjsLib } = globalThis; // Dá pra carregar via tag <script>

pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js"; // WorkerSrc especficidada

var pdfDoc = null,
    pageNum = 1, // Núm. da Pg inicial
    pageRendering = false,
    pageNumPending = null,
    scale = 2.5, // escala da res (aumentar caso seja mt ruim)
    canvas = document.getElementById('pdf-canvas'), // O PDF
    ctx = canvas.getContext('2d');

function renderPage(num) {

    pageRendering = true;
    // Usa promise para obter a pg
    pdfDoc.getPage(num).then(function(page) {
      var viewport = page.getViewport({scale: scale}); 
      // aqui, pelo oq eu entendi, o viewport tem tudo a ver com as scales
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      // Renderiza o PDF em canva ctxt
      var renderContext = {
        canvasContext: ctx,
        viewport: viewport
      };
      var renderTask = page.render(renderContext);

      // Função assíncrona que aguarda a pg renderizar
      renderTask.promise.then(function() {
        pageRendering = false;
        if (pageNumPending !== null) {
          // Nova render de pg pendente
          renderPage(pageNumPending);
          pageNumPending = null;
        }
      });
    });

    // Atualiza o count (1 ou 2 ou 3..) da pg
    document.getElementById('page_num').textContent = num;
}

  /**
   * Se outra pg estiver sendo renderizada, espera, caso contrário, renderiza imediatamente
   *
   */
function queueRenderPage(num) {
    if (pageRendering) {
      pageNumPending = num;
    } else {
      renderPage(num);
    }
  }

  /**
   * Mostra a pg anterior
   */
  function onPrevPage() {
    if (pageNum <= 1) {
      return;
    }
    pageNum--;
    queueRenderPage(pageNum);
  }
  document.getElementById('prev').addEventListener('click', onPrevPage);

  /**
   * Mostra a prox. pg
   */
  function onNextPage() {
    if (pageNum >= pdfDoc.numPages) {
      return;
    }
    pageNum++;
    queueRenderPage(pageNum);
  }
  document.getElementById('next').addEventListener('click', onNextPage);

  /**
   * Baixa o PDF de forma assíncrona.
   */
  pdfjsLib.getDocument(url).promise.then(function(pdfDoc_) {
    pdfDoc = pdfDoc_;
    document.getElementById('page_count').textContent = pdfDoc.numPages;

    // Rendering da pg inicial
    renderPage(pageNum);
  });
