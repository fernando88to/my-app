#!/bin/bash
#if not running the two scripts not work.
pm2 start ecosystem.config.js
pm2-runtime ecosystem.config.js