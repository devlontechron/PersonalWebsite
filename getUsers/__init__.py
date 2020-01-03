import logging
import pyodbc

import azure.functions as func


def main(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Python HTTP trigger function processed a request.')


    #PLEASE STARILIZE YOUR SQL
    conn = pyodbc.connect('DRIVER={ODBC Driver 17 for SQL Server};Server=holidaze.database.windows.net;Database=phrases;UID=devlontecron;PWD=LaSalle!0')
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM dbo.phrase")
    data = cursor.fetchall()
    responseData = data

    conn = pyodbc.connect('DRIVER={ODBC Driver 17 for SQL Server};Server=holidaze.database.windows.net;Database=users;UID=devlontecron;PWD=LaSalle!0')
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM dbo.users")
    data = cursor.fetchall()
    responseData += data

    return func.HttpResponse(responseData, 
        status_code=200
        )