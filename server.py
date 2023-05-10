from flask import Flask, request, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

# @app.route('/button', methods=['POST'])
# def download():
#     # this method takes the content of the text area and the filename and then saves it to a file
#     content = request.form['content']
#     filename = request.form['filename']
#     with open(filename, 'w') as f:
#         f.write(content)
#     return render_template('index.html')


if __name__ == '__main__':
    app.run(debug=True)