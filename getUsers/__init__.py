import logging
import pyodbc
import json

import azure.functions as func


def main(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('GetUsers function starting request')
    
    responseData = dict()

    #PLEASE STARILIZE YOUR SQL
    conn = pyodbc.connect('Driver={ODBC Driver 17 for SQL Server};Server=tcp:holidaze.database.windows.net,1433;Database=users;Uid=devlontecron;Pwd=LaSalle!0;Encrypt=yes;TrustServerCertificate=no;Connection Timeout=30;')
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM dbo.phrases")
    data = cursor.fetchall()

    phraseDic = {}
    phraseList = []
    for row in data:
        currPhrase = {}
        currPhrase["phrase"] =row.phrase
        currPhrase["count"] =row.count    

        phraseList.append(currPhrase)
    
    responseData["phrases"] = phraseList 

    conn = pyodbc.connect('Driver={ODBC Driver 17 for SQL Server};Server=tcp:holidaze.database.windows.net,1433;Database=users;Uid=devlontecron;Pwd=LaSalle!0;Encrypt=yes;TrustServerCertificate=no;Connection Timeout=30;')
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM dbo.users")
    data = cursor.fetchall()
    
    userList = []
    for row in data:
        currUser = {}
        currUser["name"] =row.name
        currUser["score"] =row.score   
        
        userList.append(currUser)  

    responseData["users"] = userList

    return func.HttpResponse(str(json.dumps(responseData)), 
        status_code=200
        )