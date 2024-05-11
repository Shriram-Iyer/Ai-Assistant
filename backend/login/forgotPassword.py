import secrets
import string
from mongoConnection import connect_to_mongodb
from bcrypt import hashpw, gensalt


# Generate a random token
def generate_token(length=20):
    alphabet = string.ascii_letters + string.digits
    return ''.join(secrets.choice(alphabet) for _ in range(length))


# Function to handle forgot password
def forgot_password(username_or_email):
    # Connect to MongoDB
    collection = connect_to_mongodb("Medical-Billing", "User")

    # Check if the username or email exists
    user = collection.users.find_one({"$or": [{"username": username_or_email}, {"email": username_or_email}]})
    if user:
        # Generate and store a reset token
        token = generate_token()
        collection.users.update_one({"_id": user["_id"]}, {"$set": {"reset_token": token}})
        return {"message": token, "status": 200}
    else:
        return {"message": "User Not found", "status": 404}


# Function to reset password
def reset_password(token, new_password):
    # Connect to MongoDB
    collection = connect_to_mongodb("Medical-Billing", "User")

    # Find user by token
    user = collection.users.find_one({"reset_token": token})
    if user:
        # Reset password
        hashed_password = hashpw(new_password.encode('utf-8'), gensalt())
        collection.users.update_one({"_id": user["_id"]}, {"$set": {"password": hashed_password}})
        collection.users.update_one({"_id": user["_id"]},
                                    {"$unset": {"reset_token": ""}})  # Remove reset token after reset
        return {"message": "Password reset Successful", "status": 200}
    else:
        return {"message": "Incorrect Token", "status": 404}
