import logging
import pyodbc

import azure.functions as func


def main(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('GetUsers function starting request')
    responseData =""

    #PLEASE STARILIZE YOUR SQL
    conn = pyodbc.connect('Driver={ODBC Driver 17 for SQL Server};Server=tcp:holidaze.database.windows.net,1433;Database=users;Uid=devlontecron;Pwd=LaSalle!0;Encrypt=yes;TrustServerCertificate=no;Connection Timeout=30;')
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM dbo.phrases")
    data = cursor.fetchall()

    logging.info(data)
    logging.info(responseData)

    responseData += str(data)

    conn = pyodbc.connect('Driver={ODBC Driver 17 for SQL Server};Server=tcp:holidaze.database.windows.net,1433;Database=users;Uid=devlontecron;Pwd=LaSalle!0;Encrypt=yes;TrustServerCertificate=no;Connection Timeout=30;')
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM dbo.users")
    data = cursor.fetchall()

    logging.info(data)
    logging.info(responseData)

    responseData += str(data)

    return func.HttpResponse(responseData, 
        status_code=200
        )