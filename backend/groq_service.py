import os

from groq import Groq
from dotenv import load_dotenv

load_dotenv()
GROQ_KEY = os.getenv('GROQ_KEY')


def execute(prompt):
    client = Groq(api_key=GROQ_KEY)
    completion = client.chat.completions.create(
        model="llama3-8b-8192",
        messages=[
            {
                "role": "user",
                "content": prompt
            }
        ],
        temperature=1,
        max_tokens=1024,
        top_p=1,
        stream=True,
        stop=None,
    )
    response = ""
    for chunk in completion:
        response += chunk.choices[0].delta.content or ""
    print(response)
    return response


if __name__ == "__main__":
    print(execute("tell me a joke"))
