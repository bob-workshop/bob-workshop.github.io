#!/usr/bin/env python

import argparse
import logging

import tornado.httpserver
import tornado.wsgi
from flask import Flask, render_template

# Obtain the flask app object
app = Flask(__name__, template_folder="")


def server_start(app: Flask, port: int):
    container = tornado.wsgi.WSGIContainer(app)

    server = tornado.httpserver.HTTPServer(container)
    server.listen(port)

    logging.info(f"Tornado server starting at http://localhost:{port}")

    tornado.ioloop.IOLoop.current().start()


@app.route("/imprint")
def render_imprint():
    logging.info("render page: imprint")
    return render_template("imprint.html")


@app.route("/")
def render_index():
    logging.info("render page: index")
    return render_template("index.html")


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "-p", "--port", type=int, default=5000, help="Port used by the web server"
    )
    parser.add_argument(
        "-d", "--debug", action="store_true", default=False, help="Enable debug mode"
    )

    args = parser.parse_args()

    loglevel = logging.DEBUG if args.debug else logging.INFO
    logging.basicConfig(level=loglevel)

    app.debug = args.debug
    if args.debug:
        logging.info(f"Enabling flask debugging")

    server_start(app, port=args.port)


if __name__ == '__main__':
    main()
