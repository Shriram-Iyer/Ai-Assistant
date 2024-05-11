from pymongo import MongoClient

# Connect to MongoDB Atlas
def connect_to_mongodb(databaseName,collection):
    # Replace the connection string with your own MongoDB Atlas connection string
    client = MongoClient("mongodb+srv://Spectra:SpectraMongo@testcluster1.1nzffnk.mongodb.net/?retryWrites=true&w=majority&appName=TestCluster1")
    db = client[databaseName]
    collection = db[collection]
    return collection