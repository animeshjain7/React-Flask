
"""Module providing Function printing python version."""
from random import random
import math
import flask

app = flask.Flask(__name__)

@app.route('/random-number')
def random_number_api():
    """send a random number"""
    num = math.floor(random()*100)
    return flask.jsonify({'number': num})


if __name__ == '__main__':
    app.run(debug=True)



