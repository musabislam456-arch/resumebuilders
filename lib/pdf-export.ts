export interface ExportPdfOptions {
  elementId: string;
  filename: string;
  onProgress?: (status: string) => void;
}

export async function exportResumeToPdf({
  elementId,
  filename,
  onProgress,
}: ExportPdfOptions): Promise<boolean> {
  try {
    onProgress?.('Preparing document rendering...');

    const element = document.getElementById(elementId);
    if (!element) {
      throw new Error(`Resume preview element with id "${elementId}" was not found.`);
    }

    onProgress?.('Rasterizing high-resolution canvas (300 DPI)...');

    // Dynamic imports to ensure 100% browser-safe execution
    const html2canvasModule = await import('html2canvas');
    const html2canvas = html2canvasModule.default || html2canvasModule;

    const { jsPDF } = await import('jspdf');

    // Clone or capture with explicit white background and crisp scale
    const canvas = await html2canvas(element, {
      scale: 2.5,
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff',
      windowWidth: 1024,
      onclone: (clonedDoc) => {
        const clonedElement = clonedDoc.getElementById(elementId);
        if (clonedElement) {
          clonedElement.style.transform = 'none';
          clonedElement.style.boxShadow = 'none';
          clonedElement.style.margin = '0 auto';
        }
      },
    });

    onProgress?.('Compiling vector PDF stream...');

    const imgData = canvas.toDataURL('image/jpeg', 0.98);

    // Standard A4 dimensions in mm
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    });

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    // Canvas aspect ratio
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const ratio = canvasHeight / canvasWidth;

    const calculatedHeight = pdfWidth * ratio;

    if (calculatedHeight <= pdfHeight) {
      // Single-page fit
      pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, calculatedHeight);
    } else {
      // Multi-page slicing if content extends beyond 1 A4 page
      let heightLeft = calculatedHeight;
      let position = 0;

      pdf.addImage(imgData, 'JPEG', 0, position, pdfWidth, calculatedHeight);
      heightLeft -= pdfHeight;

      while (heightLeft > 0) {
        position -= pdfHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'JPEG', 0, position, pdfWidth, calculatedHeight);
        heightLeft -= pdfHeight;
      }
    }

    onProgress?.('Saving file...');
    pdf.save(filename.endsWith('.pdf') ? filename : `${filename}.pdf`);

    return true;
  } catch (error) {
    console.error('Failed to export resume PDF:', error);
    throw error;
  }
}
