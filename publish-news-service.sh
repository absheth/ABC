#!/bin/sh

sudo pip install --upgrade pip
sudo pip install -r requirement.txt
python news-application.py >/dev/null 2>&1 &
