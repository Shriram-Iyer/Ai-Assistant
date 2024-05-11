from mongoConnection import connect_to_mongodb
from bcrypt import checkpw


# Function to authenticate a user
def authenticate_user(username_or_email, password):
    collection = connect_to_mongodb("Medical-Billing", "User")
    # Retrieve user from the database
    user = collection.users.find_one({"$or": [{"username": username_or_email}, {"email": username_or_email}]})

    if user:
        # Check if the password matches the hashed password
        if checkpw(password.encode('utf-8'), user['password']):
            return {"message":"Login Successful", "status": 200}
        return {"message": "Incorrect password", "status": 401}
    return {"message": "User Not found", "status": 404}


if __name__ == "__main__":
    # Example usage
    authenticated = authenticate_user('test', 'test')
    print(authenticated)  # Output: True
