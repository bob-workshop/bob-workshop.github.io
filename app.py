#!/usr/bin/env python
'''

'''
import datetime
import glob
import io as StringIO
import logging
import math
import optparse
import os
import pickle as cPickle
import random
import sys
import urllib
from collections import OrderedDict
from math import sqrt
from time import time

import flask
import h5py
import numpy as np
import six
import tornado.httpserver
import tornado.wsgi
import werkzeug
from PIL import Image
from flask import render_template, abort, Flask, url_for, request, jsonify, app
from jinja2 import TemplateNotFound
from scipy.io import loadmat
from skimage.color import label2rgb, color_dict


def start_tornado(app, port=5000):
	http_server = tornado.httpserver.HTTPServer(tornado.wsgi.WSGIContainer(app))
	http_server.listen(port)
	print("Tornado server starting on port {}".format(port))
	tornado.ioloop.IOLoop.current().start()

def start_from_terminal(app):
	"""
	Parse command line options and start the server.
	"""
	parser = optparse.OptionParser()
	parser.add_option(
		'-d', '--debug',
		help="enable debug mode",
		action="store_true", default=False)
	parser.add_option(
		'-p', '--port',
		help="which port to serve content on",
		type='int', default=5000)
	parser.add_option(
		'-g', '--gpu',
		help="use gpu mode, specify gpu to use",
		type='int', default=-1)

	opts, args = parser.parse_args()
	app.debug = opts.debug
	
	start_tornado(app, opts.port)

# Obtain the flask app object
app = Flask(__name__)

@app.route('/image_index', methods=['POST'])
def image_index():
	if request.method == 'POST':
		json_dictionary = request.get_json()
		

@app.route('/', defaults={'page': 'index'})

def show(page):
	print ('render')
	return render_template('index.html')

if __name__ == '__main__':	
 	logging.getLogger().setLevel(logging.INFO)
 	start_from_terminal(app)
 	# data_h5_file_pp.close()
 	# sess.close()
