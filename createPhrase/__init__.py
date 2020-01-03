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
    conn = pyodbc.connect('DRIVER={ODBC Driver 17 for SQL Server};Server=holidaze.database.windows.net;Database=phrases;UID=devlontecron;PWD=LaSalle!0')
    cursor = conn.cursor()
    cursor.execute(f"SELECT * FROM dbo.phrase where name LIKE \'{newPhrase}\'")
    data = cursor.fetchall()

    if data:
        return func.HttpResponse(f"That phrase already Exists {newPhrase}" + data, 
            status_code=200
            )
    else:
        cursor.execute(f"INSERT INTO dbo.phrases (phrase, count) VALUES (\'{newPhrase}\', 0)")
        return func.HttpResponse(
             "New Account has been added",
             status_code=200
        )
