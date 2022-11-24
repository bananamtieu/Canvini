#!/bin/bash

node admin.js --operation create --date 22 --month september --type homework
node admin.js --operation create --date 20 --month october --type homework
node admin.js --operation create --date 17 --month november --type homework
node admin.js --operation create --date 6 --month december --type homework
node admin.js --operation create --date 24 --month september --type office-hours
node admin.js --operation create --date 16 --month october --type office-hours
node admin.js --operation create --date 13 --month november --type office-hours
node admin.js --operation create --date 6 --month october --type quiz
node admin.js --operation create --date 10 --month november --type quiz
node admin.js --operation create --date 10 --month december --type quiz
node admin.js --operation create --date 22 --month september --type lab
node admin.js --operation create --date 6 --month october --type lab
node admin.js --operation create --date 20 --month october --type lab
node admin.js --operation create --date 10 --month november --type lab
node admin.js --operation create --date 18 --month november --type lab
node admin.js --operation create --date 1 --month december --type lab

node admin.js --operation read 
node admin.js --operation read --month november
