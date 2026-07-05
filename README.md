# Pit Race Test

## App description

The app receives current data about the race We take the raw data and present all relevant, organized data

### The actual application process

The application receives data from the server. Holds it as a json file and unpacks all the data and prints it to the terminal.

### File structure

test_projects - תיקייה ראשית

main.js - קובץ ראשי 

raceService.js - קובץ הורדת נתונים מהשרת

dataExtraction.js - קובץ חילוץ המידע הרלוונטי

### Running the application

node main.js

## Details of operations

### Step 1

The application sends a request to our server - handling a server error - holding the data in the structure of a json file.

### Step 2

The app receives all this data and extracts all the information relevant to us - how many cars there are, who is coming to the pit, etc.

### Step 3

The application prints to the terminal all the information required according to the current Snapchat.

