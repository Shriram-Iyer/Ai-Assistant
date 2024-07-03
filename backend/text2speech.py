import os

from gtts import gTTS
from langdetect import detect
from pydub import AudioSegment


def text2speech(text):
    try:
        # Detect language using langdetect
        language = detect(text)

        # Get the current working directory (project root)
        current_dir = os.getcwd()

        # Filename for the audio file (change as needed)
        filename = f"output.mp3"

        # Create the filepath (combining directory and filename)
        filepath = os.path.join(current_dir, filename)

        # Generate the speech object using gTTS
        # Slow down the speech by setting slow=True
        speech = gTTS(text=text, lang=language)

        # Save the speech to the specified file
        speech.save(filepath)

        # Convert mp3 file to wav
        sound = AudioSegment.from_mp3(filepath)
        sound.export("output.wav", format="wav")

        os.remove(filepath)

        return "output.wav"

        print(f"Audio file saved successfully: {filepath}")
    except:
        print("Error: Language detection or text-to-speech failed.")



# text2speech("hi I am Spectra")
