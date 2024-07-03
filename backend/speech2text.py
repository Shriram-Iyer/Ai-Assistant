import speech_recognition as sr


# Function to convert speech to text
def speech2text(filepath):
    # Initialize recognizer class (for recognizing the speech)
    r = sr.Recognizer()

    # Reading Audio file as source
    # listening the audio file and store in audio_text variable
    with sr.AudioFile(filepath) as source:
        audio_text = r.listen(source)

    # recognize_() method will throw a request error if the API is unreachable, hence using exception handling
    try:
        # using google speech recognition
        print("Converting Speech to Text...")
        text = r.recognize_google(audio_text)
        print("You said: " + text)
        return text
    except sr.UnknownValueError:
        print("Sorry, I could not understand audio")
        return ""
    except sr.RequestError as e:
        print("Could not request results from Google Speech Recognition service; {0}".format(e))
        return ""



# # Run the function with your audio file
# speech2text('output.wav')
