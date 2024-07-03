import io
import wave

from flask import Flask, request, send_file, render_template
import tempfile

from pydub import AudioSegment

from text2speech import text2speech
from speech2text import speech2text
from groq_service import execute

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/process-audio", methods=["POST"])
def processAudio():
    # Assuming audio is received as multipart form data
    audio_blob = request.files['audio'].read()

    # Convert WebM audio blob to WAV format using pydub
    webm_audio = io.BytesIO(audio_blob)
    audio_segment = AudioSegment.from_file(webm_audio, format="webm")
    wav_bytes = audio_segment.export(format="wav").read()

    # Save the WAV file to a temporary file
    temp_wav_file = "output.wav"
    with open(temp_wav_file, 'wb') as f:
        f.write(wav_bytes)

    text = speech2text(temp_wav_file)
    generated_Text = execute(f"Please answer this question: {text}")
    generated_speech = text2speech(generated_Text)

    return send_file(generated_speech, mimetype='audio/mpeg')


if __name__ == '__main__':
    app.run(debug=True, port=8081)
