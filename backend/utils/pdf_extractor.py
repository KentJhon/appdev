import fitz  # PyMuPDF

def extract_text_from_pdf(pdf_bytes):
    try:
        doc = fitz.open(stream=pdf_bytes, filetype="pdf")
        text = ""
        for page in doc:
            text += page.get_text()
        doc.close()

        if not text.strip():
            raise ValueError("No text found in the PDF.")
        return text

    except Exception as e:
        raise RuntimeError(f"Failed to extract text: {e}")
