import openai
import os
from dotenv import load_dotenv
load_dotenv()


# Set your API key
openai.api_key = os.getenv("OPENAI_API_KEY")

def generate_questions(text):
    prompt = f"""
    Extract quiz questions from this study material below:
    
    {text}

    Format:
    1. Question?
       A. Option
       B. Option
       C. Option
       D. Option
       Answer: A
    """

    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You're an AI quiz generator."},
            {"role": "user", "content": prompt}
        ],
        max_tokens=1000,
    )

    return response['choices'][0]['message']['content']
