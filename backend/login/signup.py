from mongoConnection import connect_to_mongodb
from bcrypt import hashpw, gensalt


# Sign up function
def signup(username, email, password):
    # Connect to MongoDB
    collection = connect_to_mongodb("Medical-Billing", "User")
    print(collection.list_indexes())
    # Check if the user already exists
    if collection.users.find_one({"username": username}):
        return {"message": "Username already exists. Please choose a different one.", "status": 409}

    if collection.users.find_one({"email": email}):
        return {"message": "Email already exists. Please use a different one.", "status": 409}

    hashed_password = hashpw(password.encode('utf-8'), gensalt())
    # Insert new user data into the database
    collection.users.insert_one({
        "username": username,
        "email": email,
        "password": hashed_password
    })

    return {"message": "Signup successful!", "status": 200}


# Example usage
if __name__ == "__main__":
    username1 = input("Enter username: ")
    email1 = input("Enter email: ")
    password1 = input("Enter password: ")

    result = signup(username1, email1, password1)
    print(result)
