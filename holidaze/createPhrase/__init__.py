import logging
import pyodbc

import azure.functions as func


def main(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Python HTTP trigger createPhrase function processed a request.')
   
    newPhrase = req.params.get('phrase')
    if not newPhrase:
        try:
            req_body = req.get_json()
        except ValueError:
            pass
        else:
            newPhrase = req_body.get('phrase')
    
    if not newPhrase:
        return func.HttpResponse(
             "Please pass a name on the query string or in the request body",
             status_code=400
        )

    #PLEASE STARILIZE YOUR SQL
    conn = pyodbc.connect('Driver={ODBC Driver 17 for SQL Server};Server=tcp:holidaze.database.windows.net,1433;Database=users;Uid=devlontecron;Pwd=LaSalle!0;Encrypt=yes;TrustServerCertificate=no;Connection Timeout=30;')
    cursor = conn.cursor()
    cursor.execute(f"SELECT * FROM dbo.phrases where phrase LIKE \'{newPhrase}\'")
    data = cursor.fetchall()

    if data:
        return func.HttpResponse("That phrase already exists: " + str(data), 
            status_code=200
            )
    else:
        cursor.execute(f"INSERT INTO dbo.phrases (phrase, count) VALUES (\'{newPhrase}\', 0)")
        cursor.commit()
        return func.HttpResponse(
             "New phrase has been added",
             status_code=200
        )
