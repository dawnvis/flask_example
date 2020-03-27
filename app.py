from flask import Flask, render_template, request, jsonify, redirect
from core import return_string

import os

app = Flask(__name__)

@app.route("/getdata")
def getdata():
    set_name = request.args.get('set_name')
    seg_num = request.args.get('seg_num', 0, type=int)
    fea_den = request.args.get('fea_den', 0, type=int)
    return jsonify( return_string(set_name, seg_num, fea_den) )

@app.route("/")
def index():
    return render_template("index.html")

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 9996))
    app.run(host='0.0.0.0', port=port)