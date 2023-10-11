import pg8000
from flask import Flask, request, jsonify
import traceback

app = Flask(__name__)

db_config = {
    'database': 'postgres',
    'user': 'postgres',
    'password': '123',
    'host': 'localhost',
    'port': 5432
}

@app.route('/', methods=['POST'])
def index():
    data = request.get_json()
    name = data.get('X_USERNAME')
    password = data.get('X_PASSWORD')
    account_code = data.get('X_ACCOUNT_CODE')

    try:
        # Establish a connection to the PostgreSQL database
        connection = pg8000.connect(**db_config)

        # Create a cursor object using the connection
        cursor = connection.cursor()

        # Example insert query
           # Example insert query
        insert_query = "INSERT INTO users (username, password, account_id) VALUES (%s, %s, %s)"
        cursor.execute(insert_query, (name, password, account_code))
        # Commit the transaction
        connection.commit()

        # Don't forget to close the cursor and connection when you're done
        cursor.close()
        connection.close()

        # Return a success response
        response_data = {'message': 'Form data stored in PostgreSQL successfully!'}
        return jsonify(response_data)

    except Exception as e:
        # Handle exceptions (e.g., database errors) here
        # Return an error 
        traceback.print_exc() 
        error_message = {'error': str(e)}
        return jsonify(error_message), 500  # 500 Internal Server Error

if __name__ == '__main__':
    app.run(debug=True)
