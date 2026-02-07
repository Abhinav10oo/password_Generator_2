from flask import Flask, request, jsonify
from flask_cors import CORS
import random
import string

app = Flask(__name__)
CORS(app)

@app.route("/generate", methods=["POST"])
def generate_password():
    data = request.json

    use_upper = data.get("useUpper")
    use_lower = data.get("useLower")
    use_numbers = data.get("useNumbers")
    use_special = data.get("useSpecial")
    custom_word = data.get("customWord", "")
    length = data.get("length")

    pool = ""

    if use_upper:
        pool += string.ascii_uppercase
    if use_lower:
        pool += string.ascii_lowercase
    if use_numbers:
        pool += string.digits
    if use_special:
        pool += "!@#$%^&*()-+"

    if not pool:
        return jsonify({"password": ""})

    # randomize case of custom word
    word = "".join(
        random.choice([c.lower(), c.upper()]) for c in custom_word
    )

    if len(word) > length:
        return jsonify({"password": ""})

    remaining = length - len(word)

    random_part = "".join(random.choice(pool) for _ in range(remaining))

    final_password = list(word + random_part)
    random.shuffle(final_password)

    return jsonify({"password": "".join(final_password)})

if __name__ == "__main__":
    app.run(debug=True)
