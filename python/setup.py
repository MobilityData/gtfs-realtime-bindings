#! /usr/bin/python
#
# Copyright 2015-2019 Google Inc., MobilityData
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
#  You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

import sys
import os
import subprocess

# We must use setuptools, not distutils, because we need to use the
# namespace_packages option for the "google" package.
try:
  from setuptools import setup, Extension
except ImportError:
  sys.stderr.write(
    "Could not import setuptools; make sure you have setuptools or "
    "ez_setup installed.\n")
  raise

if __name__ == '__main__':
  ext_module_list = []

  setup(name = 'gtfs-realtime-bindings',
        version = '0.0.8',
        packages = ['google', 'google.transit'],
        namespace_packages = ['google'],
        install_requires = ['setuptools', 'protobuf>=3, <4'],
        url = 'https://github.com/MobilityData/gtfs-realtime-bindings',
        maintainer = 'MobilityData',
        maintainer_email = 'gtfs-realtime@googlegroups.com',
        license = 'Apache License, Version 2.0',
        description = 'Python classes generated from the GTFS-realtime protocol buffer specification.',
        classifiers=[
          'Intended Audience :: Developers',
          'License :: OSI Approved :: Apache Software License',
          'Operating System :: OS Independent',
          'Programming Language :: Python',
          'Topic :: Software Development :: Libraries :: Python Modules'
        ],
  )
