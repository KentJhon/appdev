from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from utils.pdf_extractor import extract_text_from_pdf
import openai
import os

app = FastAPI()

# CORS settings (adjust origins if needed)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Set your OpenAI API key
openai.api_key = os.getenv("OPENAI_API_KEY")  # or hardcode it temporarily for testing

@app.post("/upload-pdf/")
async def upload_pdf(file: UploadFile = File(...)):
    # Validate file type
    if file.content_type != "application/pdf":
        raise HTTPException(status_code=400, detail="Invalid file type. Please upload a PDF.")

    try:
        # Read and extract text
        pdf_bytes = await file.read()
        text = extract_text_from_pdf(pdf_bytes)

        # Generate quiz questions using GPT
        prompt = f"Create 5 quiz questions from the following text:\n\n{text[:3000]}"
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[{"role": "user", "content": prompt}]
        )

        return {
            "questions": response.choices[0].message.content
        }

    except RuntimeError as e:
        raise HTTPException(status_code=500, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=500, detail="Something went wrong while processing the PDF.")
