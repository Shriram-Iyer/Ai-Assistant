from bcrypt import hashpw, gensalt, checkpw

hashed_password = hashpw("test".encode('utf-8'), gensalt())
print(hashed_password)
print(checkpw("test".encode('utf-8'), hashed_password))